import { Box, Stack, Typography } from "@mui/material";
import { ReactNode } from "react";
import { RailSegment } from "@/components/DataDisplay/BookingTimeline/components/Rail";
import { ANCHOR_COL, ANCHOR_NODE_GAP, CARD_GAP, NODE_SIZE } from "@/components/DataDisplay/BookingTimeline/constants";
import { BookingTimelineAnchor } from "@/components/DataDisplay/BookingTimeline/types";

/** Anchor node — a filled teal disc (milestone reached) or a hollow grey ring (still to come).
 * The NODE_SIZE wrapper matches the rail gap so the line never touches the circle; everything
 * around the disc stays transparent to blend with any background. */
const AnchorNode = ({ glyph, reached }: { glyph: ReactNode; reached: boolean }) => (
  <Box
    sx={{
      alignItems: "center",
      display: "flex",
      height: NODE_SIZE,
      justifyContent: "center",
      width: NODE_SIZE,
    }}
  >
    <Box
      sx={{
        "& svg": { fontSize: 15 },
        alignItems: "center",
        backgroundColor: reached ? "secondary.main" : "transparent",
        border: reached ? undefined : "1px solid",
        borderColor: reached ? undefined : "text.secondary",
        borderRadius: "50%",
        color: reached ? "#fff" : "text.secondary",
        display: "flex",
        height: 22,
        justifyContent: "center",
        width: 22,
      }}
    >
      {glyph}
    </Box>
  </Box>
);

interface TimelineAnchorProps {
  anchor: BookingTimelineAnchor;
  glyph: ReactNode;
  railVariant: "top" | "mid" | "bottom";
}

/** Début / Fin / Livraison / Reprise bookend on the rail: node + overline + title (+ content). */
const TimelineAnchor = ({ anchor, glyph, railVariant }: TimelineAnchorProps) => (
  <Stack direction="row" alignItems="flex-start" sx={{ position: "relative", py: 1.25 }}>
    <RailSegment variant={railVariant} gap={ANCHOR_NODE_GAP} />
    <Box sx={{ display: "flex", flexShrink: 0, justifyContent: "center", width: ANCHOR_COL }}>
      <Box sx={{ display: "flex", mt: "1px", zIndex: 1 }}>
        <AnchorNode glyph={glyph} reached={!!anchor.reached} />
      </Box>
    </Box>
    <Box sx={{ pl: `${CARD_GAP}px` }}>
      {anchor.overline && (
        <Typography
          variant="caption"
          sx={{
            color: "text.disabled",
            display: "block",
            fontWeight: 500,
            letterSpacing: "0.6px",
            lineHeight: 1.5,
            textTransform: "uppercase",
          }}
        >
          {anchor.overline}
        </Typography>
      )}
      <Typography variant="subtitle2" fontWeight={500} sx={anchor.warning ? { color: "warning.dark" } : undefined}>
        {anchor.title}
        {anchor.titleSuffix && (
          <Typography component="span" variant="body3" sx={{ color: "text.secondary", fontWeight: 400 }}>
            {` ${anchor.titleSuffix}`}
          </Typography>
        )}
      </Typography>
      {anchor.content && <Box sx={{ mt: 0.5 }}>{anchor.content}</Box>}
    </Box>
  </Stack>
);

export default TimelineAnchor;
