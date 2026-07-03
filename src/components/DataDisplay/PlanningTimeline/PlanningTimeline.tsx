import { Box, IconButton, Skeleton, Stack, ToggleButton, ToggleButtonGroup, Typography, useTheme } from "@mui/material";
import { useVirtualizer } from "@tanstack/react-virtual";
import { type SyntheticEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";
import KeyboardArrowLeftRoundedIcon from "@/components/DataDisplay/Icons/KeyboardArrowLeftRoundedIcon";
import KeyboardArrowRightRoundedIcon from "@/components/DataDisplay/Icons/KeyboardArrowRightRoundedIcon";
import KeyboardDoubleArrowLeftRoundedIcon from "@/components/DataDisplay/Icons/KeyboardDoubleArrowLeftRoundedIcon";
import KeyboardDoubleArrowRightRoundedIcon from "@/components/DataDisplay/Icons/KeyboardDoubleArrowRightRoundedIcon";
import TaskBar from "@/components/DataDisplay/PlanningTimeline/components/TaskBar";
import TimelineHeader from "@/components/DataDisplay/PlanningTimeline/components/TimelineHeader";
import type {
  PlanningTimelineLabels,
  PlanningTimelineLocalStorageKeys,
  PlanningTimelineProps,
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
const DEFAULT_LOCAL_STORAGE_KEYS: PlanningTimelineLocalStorageKeys = {
  viewMode: "soren-planning-timeline-view-mode",
};
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

const PlanningTimeline = <T extends PlanningTimelineTask>({
  tasks,
  isLoading,
  onClick,
  onBarResize,
  renderRow,
  renderBar,
  renderTooltip,
  isTaskSelected,
  recenterKey,
  sidebarTitle,
  locale,
  labels,
  defaultViewMode = "day",
  localStorageKeys,
  sidebarWidth = 300,
  rowHeight = 56,
}: PlanningTimelineProps<T>) => {
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
  const allTasks = useMemo(() => tasks ?? [], [tasks]);
  const rowBorderColor = palette.mode === "dark" ? palette.grey[800] : palette.divider;

  const label = useCallback((key: keyof PlanningTimelineLabels) => labels?.[key] ?? t(key), [labels, t]);

  // Collapsed group headers hide their task rows. Range is built from ALL tasks so the axis stays
  // stable when collapsing/expanding.
  const visibleTasks = useMemo(() => {
    const collapsed = new Set(allTasks.filter((task) => task.type === "project" && task.hideChildren).map((task) => task.id));
    return allTasks.filter((task) => !(task.type === "task" && task.project && collapsed.has(task.project)));
  }, [allTasks]);

  const scale = useMemo(() => createTimeScale(allTasks, viewMode, locale), [allTasks, viewMode, locale]);
  const visibleSidebarWidth = sidebarCollapsed ? 0 : sidebarWidth;

  const rowVirtualizer = useVirtualizer({
    count: visibleTasks.length,
    estimateSize: () => rowHeight,
    // Stable keys let the virtualizer (and React) reuse row elements instead of remounting them.
    getItemKey: (index) => visibleTasks[index].id,
    getScrollElement: () => scrollRef.current,
    // Rows are fixed-height and cheap — a generous overscan (~20 rows ≈ 2 viewports) keeps fast
    // scrolling from outrunning the window and flashing blank rows.
    overscan: 20,
  });

  const scrollToDate = useCallback(
    (date: Date) => {
      const el = scrollRef.current;
      if (!el) {
        return;
      }
      const visibleTimelineWidth = el.clientWidth - visibleSidebarWidth;
      el.scrollLeft = Math.max(0, scale.dateToX(date) - visibleTimelineWidth / 2);
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

  const onJump = useCallback((task: T) => onClick?.(task), [onClick]);

  const renderRowContent = useCallback(
    (task: T, context: { onJump: (task: T) => void; selected: boolean; sidebarCollapsed: boolean }) => {
      if (renderRow) {
        return renderRow(task, context);
      }
      // Default cell: just the row name, clickable like the bar.
      return (
        <Stack justifyContent="center" onClick={() => context.onJump(task)} sx={{ cursor: "pointer", height: "100%", px: 2 }}>
          <Typography noWrap variant="body2" sx={{ fontWeight: task.type === "project" ? typography.fontWeightMedium : undefined }}>
            {task.name}
            {task.type === "project" && task.childCount != null && (
              <Typography component="span" variant="caption" sx={{ color: palette.text.secondary, ml: 0.5 }}>
                {task.childCount}
              </Typography>
            )}
          </Typography>
        </Stack>
      );
    },
    [renderRow, typography.fontWeightMedium, palette.text.secondary],
  );

  const renderBarContent = useCallback(
    (task: T, context: { sidebarCollapsed: boolean }) => {
      if (renderBar) {
        return renderBar(task, context);
      }
      // Default bar content: the task name, only when the sidebar doesn't already show it.
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
    // A filter change resets the focus to today; a mode change keeps the current focus date.
    const target = filtersChanged ? new Date() : viewDate;
    if (filtersChanged) {
      setViewDate(target);
    }
    scrollToDate(target);
  }, [scale, viewMode, viewDate, recenterKey, scrollToDate]);

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
        <Stack direction="row" alignItems="center" spacing={2}>
          <IconButton onClick={() => setSidebarCollapsed((value) => !value)} size="small" title={sidebarTitle}>
            {sidebarCollapsed ? <KeyboardDoubleArrowRightRoundedIcon /> : <KeyboardDoubleArrowLeftRoundedIcon />}
          </IconButton>
          <Stack direction="row" alignItems="center">
            <IconButton onClick={() => handleNav("prev")}>
              <KeyboardArrowLeftRoundedIcon />
            </IconButton>
            <IconButton onClick={() => handleNav("next")}>
              <KeyboardArrowRightRoundedIcon />
            </IconButton>
          </Stack>
          <Typography variant="body2" textTransform="capitalize">
            {dateLabel}
          </Typography>
          <Button variant="outlined" size="small" color="inherit" onClick={handleToday} sx={{ borderColor: palette.divider }}>
            <Typography variant="body2" textTransform="none" color="textSecondary">
              {label("today")}
            </Typography>
          </Button>
        </Stack>

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
                left: 0,
                position: "sticky",
                px: 3,
                width: sidebarWidth,
                zIndex: 5,
              }}
            >
              <Typography variant="h5">{sidebarTitle}</Typography>
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
              const task = visibleTasks[virtualRow.index];
              const isProject = task.type === "project";
              const selected = !isProject && (isTaskSelected?.(task) ?? false);

              return (
                <Box
                  key={task.id}
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
                      {renderRowContent(task, { onJump, selected, sidebarCollapsed })}
                    </Box>
                  )}

                  <Box
                    sx={{
                      borderBottom: `1px solid ${rowBorderColor}`,
                      flex: 1,
                      position: "relative",
                      // Collapsed sidebar → the group header row spans the full track width with the same
                      // surface as the header cell (which stays sticky on top of it, seamlessly).
                      ...(isProject &&
                        (sidebarCollapsed
                          ? { backgroundColor: palette.background.paper, backgroundImage: getBackgroundImageElevation(1) }
                          : { backgroundColor: palette.action.hover })),
                      ...(selected && { backgroundColor: palette.action.selected }),
                    }}
                  >
                    {/* Group header pinned to the left when the sidebar is collapsed. */}
                    {isProject && sidebarCollapsed && (
                      <Box sx={{ height: "100%", left: 0, maxWidth: sidebarWidth, position: "sticky", zIndex: 2 }}>
                        {renderRowContent(task, { onJump, selected, sidebarCollapsed })}
                      </Box>
                    )}

                    {!isProject && (
                      <TaskBar
                        task={task}
                        scale={scale}
                        rowHeight={rowHeight}
                        sidebarCollapsed={sidebarCollapsed}
                        selected={selected}
                        onClick={onClick}
                        onBarResize={onBarResize}
                        renderBar={renderBarContent}
                        renderTooltip={renderTooltip}
                      />
                    )}
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>

        {!isLoading && visibleTasks.length === 0 && (
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
