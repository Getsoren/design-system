import { Box, ListItemButton, Stack, Tooltip, Typography } from "@mui/material";
import { MouseEvent, ReactNode, useState } from "react";
import Avatar from "@/components/DataDisplay/Avatar";
import { RailSegment } from "@/components/DataDisplay/BookingTimeline/components/Rail";
import { ANCHOR_COL, EVENT_NODE_GAP, NODE_SIZE } from "@/components/DataDisplay/BookingTimeline/constants";
import { BookingTimelineEvent, BookingTimelineLabels } from "@/components/DataDisplay/BookingTimeline/types";
import Chip from "@/components/DataDisplay/Chip";
import FlagOutlinedIcon from "@/components/DataDisplay/Icons/FlagOutlinedIcon";
import KeyboardArrowRightRoundedIcon from "@/components/DataDisplay/Icons/KeyboardArrowRightRoundedIcon";

/** Single-line event name revealing the full text in a tooltip, only when ellipsised. */
const EventName = ({ text, children }: { text: string; children: ReactNode }) => {
  const [tooltip, setTooltip] = useState("");

  return (
    <Tooltip title={tooltip}>
      <Box
        onMouseEnter={(e: MouseEvent<HTMLElement>) => {
          const target = (e.currentTarget.firstElementChild as HTMLElement | null) ?? e.currentTarget;
          setTooltip(target.scrollWidth > target.clientWidth ? text : "");
        }}
        sx={{ minWidth: 0 }}
      >
        <Typography variant="body2" noWrap sx={{ fontWeight: 400 }}>
          {children}
        </Typography>
      </Box>
    </Tooltip>
  );
};

/** Stacked photo thumbnails (up to three), the last one overlaid with the remaining count. */
const PhotoPile = ({ photos }: { photos: NonNullable<BookingTimelineEvent["photos"]> }) => (
  <Stack direction="row" alignItems="center" sx={{ flexShrink: 0 }}>
    {photos.slice(0, 3).map((photo, index) => {
      const extra = photos.length - 3;
      const isLast = index === Math.min(photos.length, 3) - 1;

      return (
        <Box
          // The same photo can legitimately appear twice — the index keeps keys unique.
          key={`${photo.src}-${index}`}
          sx={{
            border: "1.5px solid",
            borderColor: "background.paper",
            borderRadius: "6px",
            height: 22,
            ml: index === 0 ? 0 : "-9px",
            overflow: "hidden",
            position: "relative",
            width: 22,
            zIndex: 3 - index,
          }}
        >
          <Box
            component="img"
            src={photo.src}
            alt={photo.name ?? ""}
            sx={{
              display: "block",
              height: "100%",
              objectFit: "cover",
              width: "100%",
            }}
          />
          {isLast && extra > 0 && (
            <Box
              sx={{
                alignItems: "center",
                backgroundColor: "rgba(0, 0, 0, 0.55)",
                color: "#fff",
                display: "flex",
                fontSize: 9,
                fontWeight: 600,
                inset: 0,
                justifyContent: "center",
                position: "absolute",
              }}
            >
              +{extra}
            </Box>
          )}
        </Box>
      );
    })}
  </Stack>
);

interface TimelineEventProps {
  event: BookingTimelineEvent;
  labels: BookingTimelineLabels;
}

/** Event row: status / icon node on the rail + one-line card (name, photos, avatar, date, chevron). */
const TimelineEvent = ({ event, labels }: TimelineEventProps) => {
  const statusLabel = event.status === "closed" ? labels.closed : labels.open;

  const row = (
    <Stack direction="row" alignItems="flex-start" spacing={1} sx={{ width: "100%" }}>
      {/* Left: event name */}
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <EventName text={event.labelText}>{event.label}</EventName>
      </Box>

      {/* Right: photo pile + declarant avatar + date, all in a fixed-width cluster so the
          avatars stay vertically aligned across rows. Details surface on hover. */}
      <Stack direction="row" alignItems="center" spacing={0.75} sx={{ flexShrink: 0, mt: "1px" }}>
        {event.photos && event.photos.length > 0 && <PhotoPile photos={event.photos} />}
        {(event.user || event.date) && (
          <Tooltip title={event.tooltip ?? ""}>
            <Stack direction="row" alignItems="center" spacing={0.75}>
              {event.user && (
                <Avatar size="small" src={event.user.avatar ?? undefined} sx={{ flexShrink: 0, fontSize: 9, height: 18, width: 18 }}>
                  {event.user.initials}
                </Avatar>
              )}
              {event.date && (
                <Typography variant="caption" noWrap sx={{ color: "text.disabled", flexShrink: 0, textAlign: "right", width: "46px" }}>
                  {event.date}
                </Typography>
              )}
            </Stack>
          </Tooltip>
        )}
        <KeyboardArrowRightRoundedIcon
          fontSize="small"
          sx={{ color: "text.disabled", flexShrink: 0, visibility: event.onClick ? "visible" : "hidden" }}
        />
      </Stack>
    </Stack>
  );

  const rowSx = {
    alignItems: "stretch",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
    p: "10px",
    width: "100%",
  } as const;

  return (
    <Box sx={{ display: "flex", position: "relative", pr: 0.5 }}>
      <RailSegment variant="mid" gap={EVENT_NODE_GAP} />
      {/* Circular event node, centred in the rail gap (transparent around the disc so it
          blends with any background) */}
      <Box sx={{ display: "flex", flexShrink: 0, justifyContent: "center", width: ANCHOR_COL }}>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            height: NODE_SIZE,
            justifyContent: "center",
            mt: "3px",
            width: NODE_SIZE,
            zIndex: 1,
          }}
        >
          {event.status ? (
            // Hover on the flag says whether the event is still open or closed.
            <Tooltip title={statusLabel}>
              <Chip
                size="small"
                color={event.status === "closed" ? "success" : "warning"}
                variant="outlined-rounded"
                aria-label={statusLabel}
                label={<FlagOutlinedIcon sx={{ display: "block", fontSize: 16 }} />}
                sx={{
                  "& .MuiChip-label": { alignItems: "center", display: "flex", px: 0 },
                  borderRadius: "50%",
                  flexShrink: 0,
                  height: 24,
                  minWidth: 0,
                  width: 24,
                }}
              />
            </Tooltip>
          ) : (
            <Box
              sx={{
                "& svg": {
                  fontSize: 16,
                },
                alignItems: "center",
                backgroundColor: "grey.50",
                border: "1px solid",
                borderColor: "grey.300",
                borderRadius: "50%",
                color: "text.secondary",
                display: "flex",
                flexShrink: 0,
                height: 24,
                justifyContent: "center",
                width: 24,
              }}
            >
              {event.icon}
            </Box>
          )}
        </Box>
      </Box>

      {/* Event card. 2px + the 10px inner padding = CARD_GAP, so the event text starts on
          the same column as the anchor labels. Only clickable rows render as a button —
          static rows stay a plain box (no hover, no ripple, not focusable). */}
      <Box sx={{ flex: 1, minWidth: 0, ml: "2px" }}>
        {event.onClick ? (
          <ListItemButton
            disableGutters
            onClick={event.onClick}
            sx={{
              "&:hover": {
                backgroundColor: "action.hover",
              },
              backgroundColor: "transparent",
              cursor: "pointer",
              ...rowSx,
            }}
          >
            {row}
          </ListItemButton>
        ) : (
          <Box sx={rowSx}>{row}</Box>
        )}
      </Box>
    </Box>
  );
};

export default TimelineEvent;
