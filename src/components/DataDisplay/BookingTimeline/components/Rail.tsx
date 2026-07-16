import { Box, Theme } from "@mui/material";
import { RAIL_X } from "@/components/DataDisplay/BookingTimeline/constants";

const railSx = (theme: Theme) => ({
  bgcolor: theme.palette.grey[300],
  left: RAIL_X - 0.5,
  position: "absolute" as const,
  width: "1px",
  zIndex: 0,
});

interface RailSegmentProps {
  variant: "top" | "mid" | "bottom";
  /** Vertical bounds of the node within the row: the rail leaves a real gap there instead of
   * being masked, so it renders correctly on any background colour. */
  gap: readonly [number, number];
}

/** Vertical rail of a node row, interrupted around the node. "top" starts below the node,
 * "bottom" stops above it, "mid" runs through with a gap. */
export const RailSegment = ({ variant, gap }: RailSegmentProps) => (
  <>
    {variant !== "top" && <Box aria-hidden sx={(theme) => ({ ...railSx(theme), height: gap[0], top: 0 })} />}
    {variant !== "bottom" && <Box aria-hidden sx={(theme) => ({ ...railSx(theme), bottom: 0, top: gap[1] })} />}
  </>
);

/** Empty stretch of rail — adds vertical breathing room while the line runs through. */
export const RailSpacer = ({ height }: { height: number }) => (
  <Box sx={{ height, position: "relative" }}>
    <Box aria-hidden sx={(theme) => ({ ...railSx(theme), bottom: 0, top: 0 })} />
  </Box>
);
