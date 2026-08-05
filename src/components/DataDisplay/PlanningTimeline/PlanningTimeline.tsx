import { Box, IconButton, Skeleton, Stack, ToggleButton, ToggleButtonGroup, Typography, useTheme } from "@mui/material";
import { useVirtualizer } from "@tanstack/react-virtual";
import { type SyntheticEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";
import ChevronIcon from "@/components/DataDisplay/Icons/ChevronIcon";
import KeyboardArrowLeftRoundedIcon from "@/components/DataDisplay/Icons/KeyboardArrowLeftRoundedIcon";
import KeyboardArrowRightRoundedIcon from "@/components/DataDisplay/Icons/KeyboardArrowRightRoundedIcon";
import KeyboardDoubleArrowLeftRoundedIcon from "@/components/DataDisplay/Icons/KeyboardDoubleArrowLeftRoundedIcon";
import KeyboardDoubleArrowRightRoundedIcon from "@/components/DataDisplay/Icons/KeyboardDoubleArrowRightRoundedIcon";
import TaskBar from "@/components/DataDisplay/PlanningTimeline/components/TaskBar";
import TimelineHeader from "@/components/DataDisplay/PlanningTimeline/components/TimelineHeader";
import type {
  PlanningTimelineGroup,
  PlanningTimelineGroupContext,
  PlanningTimelineLabels,
  PlanningTimelineLocalStorageKeys,
  PlanningTimelineProps,
  PlanningTimelineResource,
  PlanningTimelineResourceContext,
  PlanningTimelineTask,
} from "@/components/DataDisplay/PlanningTimeline/types";
import {
  addViewModeStep,
  createTimeScale,
  formatViewDateLabel,
  type ViewMode,
} from "@/components/DataDisplay/PlanningTimeline/utils/timeScale";
import Button from "@/components/Inputs/Button";
import useTranslation from "@/hooks/useTranslation";
import getBackgroundImageElevation from "@/utils/getBackgroundImageElevation";

const HEADER_HEIGHT = 56;
const ZOOM_GESTURE_IDLE_MS = 150;
const ZOOM_DELTA_THRESHOLD = 24;
const DEFAULT_LOCAL_STORAGE_KEYS: PlanningTimelineLocalStorageKeys = { viewMode: "soren-planning-timeline-view-mode" };
const VIEW_MODES: ViewMode[] = ["day", "week", "month", "year"];

/** Read the persisted view mode; anything invalid (or an unavailable storage) is ignored. */
const getStoredViewMode = (storageKey: string): ViewMode | null => {
  try {
    const value = globalThis.localStorage?.getItem(storageKey);
    return VIEW_MODES.includes(value as ViewMode) ? (value as ViewMode) : null;
  } catch {
    // localStorage unavailable (SSR, privacy mode...)
    return null;
  }
};

const PlanningTimeline = <G extends PlanningTimelineGroup, R extends PlanningTimelineResource, T extends PlanningTimelineTask>({
  groups,
  resources,
  tasks,
  isLoading,
  onTaskClick,
  onResourceClick,
  onGroupClick,
  onBarResize,
  renderGroup,
  renderResource,
  renderBar,
  renderTooltip,
  isTaskSelected,
  recenterKey,
  toolbarActions,
  toolbarLeadingActions,
  sidebarTitle,
  locale,
  labels,
  localStorageKeys,
  defaultViewMode = "day",
  sidebarWidth = 300,
  rowHeight = 36,
}: PlanningTimelineProps<G, R, T>) => {
  // One virtualized line of the grid: a group header, or a resource carrying its task bars.
  type DisplayItem = { key: string } & ({ type: "group"; group: G; childCount: number } | { type: "resource"; resource: R; tasks: T[] });

  // Declared before the useState below — its lazy initializer runs synchronously and reads this key.
  const viewModeStorageKey = localStorageKeys?.viewMode ?? DEFAULT_LOCAL_STORAGE_KEYS.viewMode;
  const [viewMode, setViewMode] = useState<ViewMode>(() => getStoredViewMode(viewModeStorageKey) ?? defaultViewMode);
  const [viewDate, setViewDate] = useState<Date>(() => new Date());
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { palette, shape, typography } = useTheme();
  const { t } = useTranslation();
  const didInitRef = useRef(false);
  const lastModeRef = useRef(viewMode);
  const lastRecenterKeyRef = useRef(recenterKey);
  const scrollRef = useRef<HTMLDivElement>(null);
  const zoomFocusRef = useRef<{ date: Date; viewportX: number } | null>(null);
  const zoomGestureRef = useRef({ delta: 0, lastEventAt: 0, used: false });
  const allGroups = useMemo(() => groups ?? [], [groups]);
  const allResources = useMemo(() => resources ?? [], [resources]);
  const allTasks = useMemo(() => tasks ?? [], [tasks]);
  const rowBorderColor = palette.mode === "dark" ? palette.grey[800] : palette.divider;
  const label = useCallback((key: keyof PlanningTimelineLabels) => labels?.[key] ?? t(key), [labels, t]);

  /**
   * Flatten groups/resources/tasks into the virtualized display list: resources follow the `groups`
   * array order (ungrouped resources — no `groupId` or an unknown one — come first), a collapsed
   * group hides its resources, and each resource item carries its tasks in `tasks` array order.
   */
  const items = useMemo(() => {
    const tasksByResource = new Map<string, T[]>();
    allTasks.forEach((task) => {
      const list = tasksByResource.get(task.resourceId);
      if (list) {
        list.push(task);
      } else {
        tasksByResource.set(task.resourceId, [task]);
      }
    });

    const groupIds = new Set(allGroups.map((group) => group.id));
    const resourcesByGroup = new Map<string, R[]>();
    const ungroupedResources: R[] = [];
    allResources.forEach((resource) => {
      if (resource.groupId == null || !groupIds.has(resource.groupId)) {
        ungroupedResources.push(resource);
        return;
      }
      const list = resourcesByGroup.get(resource.groupId);
      if (list) {
        list.push(resource);
      } else {
        resourcesByGroup.set(resource.groupId, [resource]);
      }
    });

    const toResourceItem = (resource: R): DisplayItem => ({
      key: `resource:${resource.id}`,
      resource,
      tasks: tasksByResource.get(resource.id) ?? [],
      type: "resource",
    });

    const list: DisplayItem[] = ungroupedResources.map(toResourceItem);
    allGroups.forEach((group) => {
      const groupResources = resourcesByGroup.get(group.id) ?? [];
      list.push({ childCount: group.childCount ?? groupResources.length, group, key: `group:${group.id}`, type: "group" });
      if (!group.collapsed) {
        list.push(...groupResources.map(toResourceItem));
      }
    });
    return list;
  }, [allGroups, allResources, allTasks]);

  // Range is built from ALL tasks so the axis stays stable when collapsing/expanding groups.
  const scale = useMemo(() => createTimeScale(allTasks, viewMode, locale), [allTasks, viewMode, locale]);
  const visibleSidebarWidth = sidebarCollapsed ? 0 : sidebarWidth;

  const rowVirtualizer = useVirtualizer({
    count: items.length,
    estimateSize: () => rowHeight,
    // Stable keys let the virtualizer (and React) reuse row elements instead of remounting them.
    getItemKey: (index) => items[index].key,
    getScrollElement: () => scrollRef.current,
    // Rows are fixed-height and cheap — a generous overscan (~20 rows ≈ 2 viewports) keeps fast
    // scrolling from outrunning the window and flashing blank rows.
    overscan: 20,
  });

  const scrollToDate = useCallback(
    (date: Date) => {
      const element = scrollRef.current;

      if (!element) {
        return;
      }

      const visibleTimelineWidth = element.clientWidth - visibleSidebarWidth;
      element.scrollLeft = Math.max(0, scale.dateToX(date) - visibleTimelineWidth / 2);
    },
    [scale, visibleSidebarWidth],
  );

  const handleViewModeChange = (_: SyntheticEvent, next: ViewMode | null) => {
    if (next) {
      setViewMode(next);
    }
  };

  const handleToday = () => {
    const now = new Date();
    setViewDate(now);
    scrollToDate(now);
  };

  const handleNav = (direction: "prev" | "next") => {
    const next = addViewModeStep(viewDate, direction === "prev" ? -1 : 1, viewMode);
    setViewDate(next);
    scrollToDate(next);
  };

  const onJumpResource = useCallback((resource: R) => onResourceClick?.(resource), [onResourceClick]);
  const onJumpGroup = useCallback((group: G) => onGroupClick?.(group), [onGroupClick]);

  const renderGroupContent = useCallback(
    (group: G, context: PlanningTimelineGroupContext<G>) => {
      if (renderGroup) {
        return renderGroup(group, context);
      }
      // Default header cell: the group name, its resource count, and a collapse chevron stuck to the
      // right edge. The whole cell is clickable — the button click bubbles up to the same `onJump`
      // (collapse toggle).
      return (
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          spacing={0.5}
          onClick={() => context.onJump(group)}
          sx={{ cursor: "pointer", height: "100%", pl: 2, pr: 1 }}
        >
          <Typography noWrap variant="body2" sx={{ fontWeight: typography.fontWeightMedium }}>
            {group.name}
            <Typography component="span" variant="caption" sx={{ color: palette.text.secondary, ml: 0.5 }}>
              {context.childCount}
            </Typography>
          </Typography>
          <IconButton size="small">
            <ChevronIcon sx={{ transform: group.collapsed ? "rotate(-90deg)" : "none", transition: "transform 0.15s" }} />
          </IconButton>
        </Stack>
      );
    },
    [renderGroup, typography.fontWeightMedium, palette.text.secondary],
  );

  const renderResourceContent = useCallback(
    (resource: R, context: PlanningTimelineResourceContext<R, T>) => {
      if (renderResource) {
        return renderResource(resource, context);
      }
      // Default cell: just the resource name, clickable like the bars.
      return (
        <Stack justifyContent="center" onClick={() => context.onJump(resource)} sx={{ cursor: "pointer", height: "100%", px: 2 }}>
          <Typography noWrap variant="body2">
            {resource.name}
          </Typography>
        </Stack>
      );
    },
    [renderResource],
  );

  const renderBarContent = useCallback(
    (task: T, context: { sidebarCollapsed: boolean }) => {
      if (renderBar) {
        return renderBar(task, context);
      }
      // Default bar content: the task name, only when the sidebar doesn't already show the resource name.
      if (!context.sidebarCollapsed) {
        return null;
      }
      return (
        <Stack direction="row" alignItems="center" sx={{ height: "100%", width: "100%" }}>
          <Typography noWrap variant="caption" sx={{ color: "inherit", fontWeight: typography.fontWeightMedium }}>
            {task.name}
          </Typography>
        </Stack>
      );
    },
    [renderBar, typography.fontWeightMedium],
  );

  /**
   * Re-centre when data first loads, the zoom mode changes, or the filters change (recenterKey) — but NOT
   * on plain background refetches / optimistic updates, which would yank the user's scroll while they work.
   */
  useEffect(() => {
    if (!scrollRef.current || scale.width === 0) {
      return;
    }

    const modeChanged = lastModeRef.current !== viewMode;
    const filtersChanged = lastRecenterKeyRef.current !== recenterKey;

    if (didInitRef.current && !modeChanged && !filtersChanged) {
      return;
    }

    didInitRef.current = true;
    lastModeRef.current = viewMode;
    lastRecenterKeyRef.current = recenterKey;

    // Zoom at the cursor: the date being aimed at stays under it, the view "opens" around that date
    // instead of jumping to the centre. Consumed in every case, so a stale focus never hijacks the
    // next scale change.
    const zoomFocus = zoomFocusRef.current;

    zoomFocusRef.current = null;
    if (zoomFocus && !filtersChanged) {
      scrollRef.current.scrollLeft = Math.max(0, scale.dateToX(zoomFocus.date) + visibleSidebarWidth - zoomFocus.viewportX);
      return;
    }

    // A filter change resets the focus to today; a mode change keeps the current focus date.
    const target = filtersChanged ? new Date() : viewDate;

    if (filtersChanged) {
      setViewDate(target);
    }
    scrollToDate(target);
  }, [scale, viewMode, viewDate, recenterKey, scrollToDate, visibleSidebarWidth]);

  /**
   * Trackpad pinch or ctrl/⌘ + wheel moves one scale up or down (day → week → month → year) instead
   * of scrolling. A plain wheel is left untouched, otherwise the slightest scroll would change the
   * scale.
   *
   * One step per gesture: a pinch fires a burst of wheel events, so they are accumulated and the
   * gesture only counts once, until a short silence separates it from the next one.
   *
   * The date under the cursor is stored before the change, then put back exactly under it once the
   * new scale is computed (see the re-centring effect above).
   */
  useEffect(() => {
    const element = scrollRef.current;

    if (!element) {
      return undefined;
    }

    const handleWheel = (event: WheelEvent) => {
      // A trackpad pinch arrives as a `wheel` carrying `ctrlKey` — the same gesture as the native zoom.
      if (!(event.ctrlKey || event.metaKey)) {
        return;
      }

      // Before any threshold: whatever this gesture ends up doing here, it must not zoom the browser.
      event.preventDefault();

      const gesture = zoomGestureRef.current;

      if (event.timeStamp - gesture.lastEventAt > ZOOM_GESTURE_IDLE_MS) {
        gesture.delta = 0;
        gesture.used = false;
      }

      gesture.lastEventAt = event.timeStamp;

      if (gesture.used) {
        return;
      }

      gesture.delta += event.deltaY;

      if (Math.abs(gesture.delta) < ZOOM_DELTA_THRESHOLD) {
        return;
      }

      // Pinching in (deltaY > 0) zooms out: day → week → month → year.
      const step = gesture.delta > 0 ? 1 : -1;
      gesture.delta = 0;
      const nextIndex = VIEW_MODES.indexOf(viewMode) + step;

      if (nextIndex < 0 || nextIndex >= VIEW_MODES.length) {
        return;
      }

      gesture.used = true;

      const viewportX = event.clientX - element.getBoundingClientRect().left;
      const dateUnderCursor = scale.xToDate(Math.max(0, viewportX + element.scrollLeft - visibleSidebarWidth));

      zoomFocusRef.current = { date: dateUnderCursor, viewportX };
      setViewDate(dateUnderCursor);
      setViewMode(VIEW_MODES[nextIndex]);
    };

    element.addEventListener("wheel", handleWheel, { passive: false });
    return () => element.removeEventListener("wheel", handleWheel);
    // `isLoading` swaps the whole grid: without it the listener would stay on the unmounted node.
  }, [isLoading, scale, viewMode, visibleSidebarWidth]);

  /**
   * Persist the selected view mode so it survives page reloads.
   */
  useEffect(() => {
    try {
      globalThis.localStorage?.setItem(viewModeStorageKey, viewMode);
    } catch {
      // localStorage unavailable (SSR, privacy mode...)
    }
  }, [viewMode, viewModeStorageKey]);

  if (isLoading) {
    return <Skeleton variant="rounded" height="100%" sx={{ minHeight: 360 }} />;
  }

  const dateLabel = formatViewDateLabel(viewDate, viewMode, locale);
  const contentWidth = visibleSidebarWidth + scale.width;
  // Today highlight spans the whole minor cell it falls in (a day / week / month, per the current mode),
  // so it lines up exactly with the header cell.
  const nowX = scale.dateToX(Date.now());
  const todayTick = scale.ticks.minor.find((tick) => nowX >= tick.x && nowX < tick.x + tick.width);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%", minHeight: 0 }}>
      {/* Toolbar */}
      <Stack
        alignItems="center"
        direction="row"
        flexShrink={0}
        justifyContent="space-between"
        spacing={2}
        sx={{
          backgroundColor: palette.background.paper,
          backgroundImage: getBackgroundImageElevation(1),
          border: `1px solid ${palette.divider}`,
          borderBottom: "none",
          borderTopLeftRadius: shape.borderRadiusL,
          borderTopRightRadius: shape.borderRadiusL,
          p: 2,
        }}
      >
        <Stack direction="row" alignItems="center" spacing={2} sx={{ minWidth: 0 }}>
          {/* Collapsed column: its header (which carries the button) is no longer rendered, so the way
              back lives here. Expanded, the button sits next to the column title. */}
          {sidebarCollapsed && (
            <IconButton
              onClick={() => setSidebarCollapsed(false)}
              size="small"
              aria-label={label("expandSidebar")}
              title={label("expandSidebar")}
            >
              <KeyboardDoubleArrowRightRoundedIcon />
            </IconButton>
          )}
          <Stack direction="row" alignItems="center">
            <IconButton onClick={() => handleNav("prev")}>
              <KeyboardArrowLeftRoundedIcon />
            </IconButton>
            <IconButton onClick={() => handleNav("next")}>
              <KeyboardArrowRightRoundedIcon />
            </IconButton>
          </Stack>
          <Typography variant="body2" textTransform="capitalize" noWrap>
            {dateLabel}
          </Typography>
          <Button
            variant="outlined"
            size="small"
            color="inherit"
            onClick={handleToday}
            sx={{ borderColor: palette.divider, flexShrink: 0 }}
          >
            <Typography variant="body2" textTransform="none" color="textSecondary">
              {label("today")}
            </Typography>
          </Button>
          {/* Slot for the view's own controls (filters…): right after the date navigation rather than
              on the right, where they would crowd the scale picker. */}
          {toolbarLeadingActions}
        </Stack>

        <Stack direction="row" alignItems="center" spacing={2}>
          {toolbarActions}
          <ToggleButtonGroup exclusive value={viewMode} size="small" onChange={handleViewModeChange}>
            <ToggleButton value="day" sx={{ textTransform: "capitalize" }}>
              {label("day")}
            </ToggleButton>
            <ToggleButton value="week" sx={{ textTransform: "capitalize" }}>
              {label("week")}
            </ToggleButton>
            <ToggleButton value="month" sx={{ textTransform: "capitalize" }}>
              {label("month")}
            </ToggleButton>
            <ToggleButton value="year" sx={{ textTransform: "capitalize" }}>
              {label("year")}
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Stack>

      {/* Scrollable grid (vertical = virtualized rows, horizontal = timeline) */}
      <Box
        ref={scrollRef}
        sx={{
          border: `1px solid ${palette.divider}`,
          borderBottomLeftRadius: shape.borderRadiusL,
          borderBottomRightRadius: shape.borderRadiusL,
          flex: 1,
          minHeight: 0,
          overflow: "auto",
          position: "relative",
        }}
      >
        <Box sx={{ position: "relative", width: contentWidth }}>
          {/* Sticky header row: frozen corner + time axis */}
          <Box sx={{ display: "flex", height: HEADER_HEIGHT, position: "sticky", top: 0, zIndex: 3 }}>
            <Box
              sx={{
                alignItems: "center",
                backgroundColor: palette.background.paper,
                backgroundImage: getBackgroundImageElevation(1),
                borderBottom: `1px solid ${palette.divider}`,
                borderRight: `1px solid ${palette.divider}`,
                display: sidebarCollapsed ? "none" : "flex",
                flexShrink: 0,
                justifyContent: "space-between",
                left: 0,
                position: "sticky",
                px: 3,
                width: sidebarWidth,
                zIndex: 5,
              }}
            >
              <Typography variant="h5">{sidebarTitle}</Typography>
              <IconButton
                onClick={() => setSidebarCollapsed(true)}
                size="small"
                aria-label={label("collapseSidebar")}
                title={label("collapseSidebar")}
              >
                <KeyboardDoubleArrowLeftRoundedIcon />
              </IconButton>
            </Box>
            <Box
              sx={{
                backgroundColor: palette.background.paper,
                backgroundImage: getBackgroundImageElevation(1),
                borderBottom: `1px solid ${palette.divider}`,
              }}
            >
              <TimelineHeader scale={scale} height={HEADER_HEIGHT} selectedDate={viewDate} />
            </Box>
          </Box>

          {/* Virtualized rows */}
          <Box sx={{ height: rowVirtualizer.getTotalSize(), position: "relative" }}>
            {/* Today highlight — a band covering today's whole minor cell, kept behind the rows so the
                opaque sidebar column hides it while it still shows through the transparent timeline tracks. */}
            {todayTick && (
              <Box
                sx={{
                  backgroundColor: palette.primary.main,
                  height: "100%",
                  left: visibleSidebarWidth + todayTick.x,
                  opacity: 0.1,
                  pointerEvents: "none",
                  position: "absolute",
                  top: 0,
                  width: todayTick.width,
                  zIndex: 0,
                }}
              />
            )}

            {rowVirtualizer.getVirtualItems().map((virtualRow) => {
              const item = items[virtualRow.index];
              const isGroup = item.type === "group";
              const selected = item.type === "resource" && item.tasks.some((task) => isTaskSelected?.(task) ?? false);
              const sidebarCell =
                item.type === "group"
                  ? renderGroupContent(item.group, { childCount: item.childCount, onJump: onJumpGroup, sidebarCollapsed })
                  : renderResourceContent(item.resource, { onJump: onJumpResource, selected, sidebarCollapsed, tasks: item.tasks });

              return (
                <Box
                  key={item.key}
                  sx={{
                    display: "flex",
                    height: rowHeight,
                    left: 0,
                    position: "absolute",
                    top: 0,
                    transform: `translateY(${virtualRow.start}px)`,
                    width: "100%",
                  }}
                >
                  {!sidebarCollapsed && (
                    <Box
                      sx={{
                        backgroundColor: palette.background.paper,
                        backgroundImage: getBackgroundImageElevation(1),
                        // Opaque separator: a translucent divider would let the today line behind bleed through.
                        borderBottom: `1px solid ${rowBorderColor}`,
                        borderRight: `1px solid ${palette.divider}`,
                        flexShrink: 0,
                        left: 0,
                        position: "sticky",
                        width: sidebarWidth,
                        zIndex: 2,
                      }}
                    >
                      {sidebarCell}
                    </Box>
                  )}

                  <Box
                    sx={{
                      borderBottom: `1px solid ${rowBorderColor}`,
                      flex: 1,
                      position: "relative",
                      // Collapsed sidebar → the group header row spans the full track width with the same
                      // surface as the header cell (which stays sticky on top of it, seamlessly).
                      ...(isGroup &&
                        (sidebarCollapsed
                          ? { backgroundColor: palette.background.paper, backgroundImage: getBackgroundImageElevation(1) }
                          : { backgroundColor: palette.action.hover })),
                      ...(selected && { backgroundColor: palette.action.selected }),
                    }}
                  >
                    {/* Group header pinned to the left when the sidebar is collapsed. */}
                    {isGroup && sidebarCollapsed && (
                      <Box sx={{ height: "100%", left: 0, maxWidth: sidebarWidth, position: "sticky", zIndex: 2 }}>{sidebarCell}</Box>
                    )}

                    {item.type === "resource" &&
                      item.tasks.map((task) => (
                        <TaskBar
                          key={task.id}
                          task={task}
                          scale={scale}
                          rowHeight={rowHeight}
                          sidebarCollapsed={sidebarCollapsed}
                          selected={isTaskSelected?.(task) ?? false}
                          onClick={onTaskClick}
                          onBarResize={onBarResize}
                          renderBar={renderBarContent}
                          renderTooltip={renderTooltip}
                        />
                      ))}
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>

        {!isLoading && items.length === 0 && (
          <Stack alignItems="center" justifyContent="center" sx={{ inset: 0, position: "absolute" }}>
            <Typography color="textSecondary" sx={{ fontWeight: typography.fontWeightMedium }}>
              {label("noResult")}
            </Typography>
          </Stack>
        )}
      </Box>
    </Box>
  );
};

export default PlanningTimeline;
