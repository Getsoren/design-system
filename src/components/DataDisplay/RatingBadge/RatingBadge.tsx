import { Box, Stack, Tooltip, Typography, useTheme } from "@mui/material";
import StarIcon from "@/components/DataDisplay/Icons/StarIcon";

/** Star size matched to the body3 text it sits next to. */
const RATING_ICON_SIZE = 14;

export interface RatingBadgeDimension {
  /** Already-translated label of the dimension. */
  label: string;
  /** Rating of the dimension, on the same scale as the global rating. */
  value: number;
}

export interface RatingBadgeProps {
  /**
   * The global rating, displayed next to the star.
   */
  rating: number;
  /**
   * Top of the rating scale — drives the "/ max" in the tooltip header and the breakdown bar widths.
   */
  max?: number;
  /**
   * Already-translated "based on N reviews" line, shown on the right of the tooltip header.
   */
  reviewsLabel?: string;
  /**
   * Per-dimension breakdown revealed on hover. Without dimensions and without a reviews label,
   * the badge renders with no tooltip at all.
   */
  dimensions?: RatingBadgeDimension[];
  /**
   * Indicates if the badge is dimmed (the value is kept readable but clearly inactive).
   */
  disabled?: boolean;
}

const RatingBadge = ({ rating, max = 5, reviewsLabel, dimensions, disabled }: RatingBadgeProps) => {
  const { palette } = useTheme();
  const hasTooltip = !!reviewsLabel || !!dimensions?.length;

  const badge = (
    <Stack direction="row" alignItems="center" spacing={0.5} sx={{ cursor: hasTooltip ? "help" : "default", opacity: disabled ? 0.4 : 1 }}>
      <StarIcon color={palette.warning.main} sx={{ fontSize: RATING_ICON_SIZE }} />
      <Typography variant="body3">{rating.toFixed(1)}</Typography>
    </Stack>
  );

  if (!hasTooltip) {
    return badge;
  }

  const tooltip = (
    <Box sx={{ minWidth: 220, paddingY: 0.25 }}>
      {/* Header: global rating, with the reviews label. One size across the whole tooltip —
          body3 — so nothing in it outranks anything else. */}
      <Stack direction="row" alignItems="center" spacing={0.5}>
        <StarIcon color={palette.warning.main} sx={{ fontSize: RATING_ICON_SIZE }} />
        <Typography variant="body3" sx={{ fontWeight: 600 }}>
          {rating.toFixed(1)}
        </Typography>
        <Typography variant="body3" sx={{ opacity: 0.6 }}>
          / {max}
        </Typography>
        {reviewsLabel && (
          <Typography variant="body3" sx={{ marginLeft: "auto", opacity: 0.7 }}>
            {reviewsLabel}
          </Typography>
        )}
      </Stack>

      {!!dimensions?.length && (
        <>
          <Box sx={{ backgroundColor: "rgba(255, 255, 255, 0.15)", height: "1px", marginY: 1 }} />

          {/* Detail: per-dimension ratings */}
          <Stack spacing={1}>
            {dimensions.map((dimension) => (
              <Stack key={dimension.label} direction="row" alignItems="center" spacing={1}>
                <Typography variant="body3" sx={{ flex: 1, opacity: 0.85, whiteSpace: "nowrap" }}>
                  {dimension.label}
                </Typography>
                <Box sx={{ backgroundColor: "rgba(255, 255, 255, 0.2)", borderRadius: 999, height: 5, overflow: "hidden", width: 60 }}>
                  <Box
                    sx={{
                      backgroundColor: "warning.main",
                      borderRadius: 999,
                      height: "100%",
                      width: `${(dimension.value / max) * 100}%`,
                    }}
                  />
                </Box>
                <Typography variant="body3" sx={{ fontWeight: 600, minWidth: 20, textAlign: "right" }}>
                  {dimension.value.toFixed(1)}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </>
      )}
    </Box>
  );

  return (
    <Tooltip title={tooltip} placement="top" arrow>
      {badge}
    </Tooltip>
  );
};

export default RatingBadge;
