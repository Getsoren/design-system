import { Box, Typography, useTheme } from "@mui/material";
import type { TimeScale } from "@/components/DataDisplay/PlanningTimeline/utils/timeScale";

interface TimelineHeaderProps {
  /**
   * The active time scale (range, zoom, ticks) — the header draws one cell per minor/major tick and
   * positions them with its px converters.
   */
  scale: TimeScale;
  /**
   * Total header height in px, split in two: major groupings (month/year) on the top half, minor
   * cells (day/week/month) on the bottom half.
   */
  height: number;
  /**
   * The focus date (from the toolbar nav) — its minor cell is emphasised so navigation is visible.
   */
  selectedDate?: Date;
}

/** Two-tier time axis: major groupings (month/year) on top, minor cells (day/week/month) below. */
const TimelineHeader = ({ scale, height, selectedDate }: TimelineHeaderProps) => {
  const { palette, typography } = useTheme();
  const { ticks, width } = scale;
  const minorHeight = Math.round(height / 2);
  const selectedX = selectedDate ? scale.dateToX(selectedDate) : null;

  return (
    <Box sx={{ height, position: "relative", width }}>
      {/* Major row (e.g. "January 2026"). */}
      {ticks.major.map((tick) => (
        <Box
          key={tick.key}
          sx={{
            alignItems: "center",
            borderRight: `1px solid ${palette.divider}`,
            boxSizing: "border-box",
            display: "flex",
            height: height - minorHeight,
            left: tick.x,
            paddingX: 1,
            position: "absolute",
            top: 0,
            width: tick.width,
          }}
        >
          <Typography
            noWrap
            sx={{ color: palette.text.secondary, fontWeight: typography.fontWeightMedium, textTransform: "capitalize" }}
            variant="caption"
          >
            {tick.label}
          </Typography>
        </Box>
      ))}

      {/* Minor row (day / week / month cells). */}
      {ticks.minor.map((tick) => {
        const isSelected = selectedX != null && selectedX >= tick.x && selectedX < tick.x + tick.width;
        return (
          <Box
            key={tick.key}
            sx={{
              alignItems: "center",
              backgroundColor: isSelected ? palette.action.selected : "transparent",
              borderRight: `1px solid ${palette.divider}`,
              borderTop: `1px solid ${palette.divider}`,
              boxSizing: "border-box",
              display: "flex",
              height: minorHeight,
              justifyContent: "center",
              left: tick.x,
              position: "absolute",
              top: height - minorHeight,
              width: tick.width,
            }}
          >
            <Typography
              noWrap
              sx={{
                color: isSelected ? palette.text.primary : palette.text.secondary,
                fontWeight: isSelected ? typography.fontWeightBold : undefined,
              }}
              variant="caption"
            >
              {tick.label}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default TimelineHeader;
