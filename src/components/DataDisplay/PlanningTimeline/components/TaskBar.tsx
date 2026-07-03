import { Box, Tooltip, useTheme } from "@mui/material";
import { type ReactNode, useCallback, useRef } from "react";
import { useBarDrag } from "@/components/DataDisplay/PlanningTimeline/hooks/useBarDrag";
import type {
  PlanningTimelineBarContext,
  PlanningTimelineStatusColor,
  PlanningTimelineTask,
} from "@/components/DataDisplay/PlanningTimeline/types";
import { parseLocalDate, startOfDay, type TimeScale } from "@/components/DataDisplay/PlanningTimeline/utils/timeScale";

const MIN_BAR_WIDTH = 12;
const BAR_VERTICAL_PADDING = 10;
const RESIZE_HANDLE_WIDTH = 10;

interface TaskBarProps<T extends PlanningTimelineTask> {
  /**
   * The task row this bar represents — its start/end drive the bar geometry, its statusColor the
   * hue, and its overdue/plannedEnd/incidents the hatched overlays.
   */
  task: T;
  /**
   * The active time scale — converts the task dates to px (position/width) and the dragged px back
   * to a date on resize.
   */
  scale: TimeScale;
  /**
   * Row height in px; the bar fills it minus a vertical padding.
   */
  rowHeight: number;
  /**
   * Whether the left column is collapsed — forwarded to `renderBar` so the bar can surface the
   * identity the sidebar no longer shows.
   */
  sidebarCollapsed: boolean;
  /**
   * Highlight the bar (e.g. its detail view is open).
   */
  selected?: boolean;
  /**
   * Click on the bar (not fired for the click ending a resize).
   */
  onClick?: (task: T) => void;
  /**
   * Drag of the right-edge handle committed — `newEnd` is the date matching the new width. Omitting
   * it hides the handle and disables resizing.
   */
  onBarResize?: (task: T, newEnd: Date) => void;
  /**
   * Inner content of the bar.
   */
  renderBar?: (task: T, context: PlanningTimelineBarContext) => ReactNode;
  /**
   * Content of the tooltip shown while hovering the bar; nothing is shown when omitted.
   */
  renderTooltip?: (task: T) => ReactNode;
}

const TaskBar = <T extends PlanningTimelineTask>({
  task,
  scale,
  rowHeight,
  sidebarCollapsed,
  selected,
  onClick,
  onBarResize,
  renderBar,
  renderTooltip,
}: TaskBarProps<T>) => {
  const { palette, shape } = useTheme();
  const left = scale.dateToX(task.start);
  const baseWidth = Math.max(MIN_BAR_WIDTH, scale.dateToX(task.end) - left);
  // A resize ends with a synthetic `click` that bubbles from the drag handle to the bar — swallow that
  // one click so extending doesn't also trigger the bar click. Self-clears in case no click follows.
  const suppressClickRef = useRef(false);

  const { deltaPx, dragging, handleProps } = useBarDrag({
    disabled: !onBarResize,
    onCommit: useCallback(
      (delta: number) => {
        suppressClickRef.current = true;
        setTimeout(() => {
          suppressClickRef.current = false;
        }, 250);
        const newEnd = scale.xToDate(left + Math.max(MIN_BAR_WIDTH, baseWidth + delta));
        onBarResize?.(task, newEnd);
      },
      [scale, left, baseWidth, onBarResize, task],
    ),
  });

  const handleBarClick = () => {
    if (suppressClickRef.current) {
      suppressClickRef.current = false;
      return;
    }
    onClick?.(task);
  };

  const width = Math.max(MIN_BAR_WIDTH, baseWidth + deltaPx);

  // "default" (e.g. an ended task) is rendered muted.
  const statusColor: PlanningTimelineStatusColor = task.statusColor ?? "default";
  const isDefault = statusColor === "default";
  const barColor = isDefault ? palette.grey[500] : palette[statusColor].main;
  const textColor = isDefault ? palette.getContrastText(palette.grey[500]) : palette[statusColor].contrastText;

  // Overdue overrun segment: planned end → today, hatched in warning (orange).
  const overrunStart = task.overdue && task.plannedEnd ? scale.dateToX(task.plannedEnd) - left : null;

  // Incident hatches: one day-wide segment per distinct incident day, clamped to the bar.
  // Same-day incidents share a single segment; invalid dates and days outside the bar are dropped.
  const incidentDays = new Set<number>();
  task.incidents?.forEach((incident) => {
    const day = parseLocalDate(incident.incidentDate);
    if (!Number.isNaN(day.getTime())) {
      incidentDays.add(startOfDay(day).getTime());
    }
  });
  // Keep a segment legible even at low zoom (year mode is 2px/day, thinner than the hatch pattern).
  const incidentSegmentWidth = Math.max(scale.pxPerDay, 6);
  const incidentSegments = [...incidentDays]
    .map((dayMs) => {
      const segmentLeft = Math.max(0, scale.dateToX(dayMs) - left);
      const segmentRight = Math.min(width, scale.dateToX(dayMs) - left + incidentSegmentWidth);
      return { left: segmentLeft, width: segmentRight - segmentLeft };
    })
    .filter((segment) => segment.width > 0);

  return (
    <Tooltip
      followCursor
      title={renderTooltip?.(task) ?? ""}
      placement="top"
      enterDelay={250}
      slotProps={{ tooltip: { sx: { backgroundColor: "transparent", maxWidth: "none", p: 0 } } }}
    >
      <Box
        onClick={handleBarClick}
        sx={{
          alignItems: "center",
          backgroundColor: barColor,
          borderRadius: `${shape.borderRadius}px`,
          boxShadow: selected ? `0 0 0 2px ${palette.action.active}` : dragging ? 4 : 1,
          color: textColor,
          cursor: "pointer",
          display: "flex",
          height: rowHeight - BAR_VERTICAL_PADDING,
          left,
          opacity: dragging ? 0.55 : 1,
          overflow: "hidden",
          paddingX: 1,
          position: "absolute",
          top: BAR_VERTICAL_PADDING / 2,
          transition: dragging ? "none" : "box-shadow 0.12s",
          width,
        }}
      >
        {/* Overrun (orange, planned end → today) and incident (red, one day-wide segment per incident
            day) hatching — both full-height and semi-transparent so they can overlap legibly. */}
        {overrunStart != null && (
          <Box
            sx={{
              backgroundImage: `repeating-linear-gradient(135deg, ${palette.warning.main}, ${palette.warning.main} 4px, ${palette.warning.dark} 4px, ${palette.warning.dark} 8px)`,
              bottom: 0,
              left: Math.max(0, overrunStart),
              opacity: 0.8,
              pointerEvents: "none",
              position: "absolute",
              right: 0,
              top: 0,
              zIndex: 1,
            }}
          />
        )}

        {incidentSegments.map((segment) => (
          <Box
            key={segment.left}
            sx={{
              backgroundImage: `repeating-linear-gradient(135deg, ${palette.error.main}, ${palette.error.main} 4px, ${palette.error.dark} 4px, ${palette.error.dark} 8px)`,
              bottom: 0,
              left: segment.left,
              opacity: 0.8,
              pointerEvents: "none",
              position: "absolute",
              top: 0,
              width: segment.width,
              zIndex: 0,
            }}
          />
        ))}

        {/* Full-height so content overhangs (e.g. a badge below an avatar) aren't clipped. */}
        <Box sx={{ height: "100%", minWidth: 0, overflow: "hidden", position: "relative", width: "100%", zIndex: 1 }}>
          {renderBar?.(task, { sidebarCollapsed })}
        </Box>

        {/* Right-edge resize handle (drag to extend). */}
        {onBarResize && (
          <Box
            {...handleProps}
            sx={{
              "&::after": {
                backgroundColor: textColor,
                borderRadius: 1,
                bottom: "30%",
                content: '""',
                opacity: 0.6,
                position: "absolute",
                right: 3,
                top: "30%",
                width: 2,
              },
              "&:hover": { opacity: 1 },
              bottom: 0,
              cursor: "ew-resize",
              opacity: dragging ? 1 : 0,
              position: "absolute",
              right: 0,
              top: 0,
              touchAction: "none",
              width: RESIZE_HANDLE_WIDTH,
              zIndex: 3,
            }}
          />
        )}
      </Box>
    </Tooltip>
  );
};

export default TaskBar;
