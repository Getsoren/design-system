import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { type KeyboardEvent, type MouseEvent, useState } from "react";
import ChatBookingTag from "@/components/DataDisplay/Chat/components/ChatBookingTag";
import ChatIconTile from "@/components/DataDisplay/Chat/components/ChatIconTile";
import ChatLineIcon from "@/components/DataDisplay/Chat/components/ChatLineIcon";
import { LINE_ICON_PATHS } from "@/components/DataDisplay/Chat/constants";
import type { ChatMessageAction, ChatMessageActionStatus, ChatMessageBooking } from "@/components/DataDisplay/Chat/types";
import Chip from "@/components/DataDisplay/Chip/Chip";
import Button from "@/components/Inputs/Button/Button";

export const ACTION_CARD_WIDTH = 320;
const CARD_RADIUS = 12;
const CARD_PADDING = 12;
// The answers line up with the card's text, the design system's base radius for their corners
const BUTTON_RADIUS = 8;
const BUTTONS_GAP = 8;
const BORDER_WIDTH = 1;
const PHOTO_SIZE = 40;
// The design system's base radius for the order's card inside the request's
const ORDER_RADIUS = 8;
const ORDER_PADDING = 8;

interface ChatActionCardProps {
  action: ChatMessageAction;
  /** Shows the answers. May return a promise: the button spins until it settles */
  onRespond?: (responseId: string) => unknown;
}

const STATUS_COLORS: Record<ChatMessageActionStatus["tone"], { backgroundColor: string; color: string; dot?: string }> = {
  error: { backgroundColor: "error.8p", color: "error.dark", dot: "error.main" },
  neutral: { backgroundColor: "action.hover", color: "text.secondary" },
  pending: { backgroundColor: "action.hover", color: "text.primary", dot: "text.secondary" },
  success: { backgroundColor: "success.8p", color: "success.dark", dot: "success.main" },
  // An open event, as on the orders' event list
  warning: { backgroundColor: "warning.8p", color: "warning.dark", dot: "warning.main" },
};

interface StatusPillProps {
  status: ChatMessageActionStatus;
}

const StatusPill = ({ status }: StatusPillProps) => {
  const { backgroundColor, color, dot } = STATUS_COLORS[status.tone];

  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={0.75}
      data-test="chatActionStatus"
      data-tone={status.tone}
      sx={{ alignSelf: "flex-start", backgroundColor, borderRadius: 999, color, maxWidth: "100%", minHeight: 24, px: 1.25 }}
    >
      {dot && <Box component="span" sx={{ backgroundColor: dot, borderRadius: "50%", flexShrink: 0, height: 6, width: 6 }} />}
      <Typography variant="caption" fontWeight={500} noWrap>
        {status.label}
      </Typography>
    </Stack>
  );
};

interface OrderCardProps {
  booking: ChatMessageBooking;
}

/**
 * The order the request is about, in a card of its own inside the request's: its machine, name and number, a tap away
 */
const OrderCard = ({ booking }: OrderCardProps) => (
  <ButtonBase
    onClick={(event: MouseEvent) => {
      // The order, not what the whole card opens
      event.stopPropagation();
      booking.onClick?.();
    }}
    disabled={!booking.onClick}
    data-test="chatActionOrder"
    sx={{
      "&:hover": { backgroundColor: "action.hover" },
      "&.Mui-disabled": { color: "inherit" },
      alignItems: "center",
      border: "1px solid",
      borderColor: "divider",
      borderRadius: `${ORDER_RADIUS}px`,
      gap: 1.25,
      justifyContent: "flex-start",
      p: `${ORDER_PADDING - 1}px`,
      textAlign: "left",
      width: "100%",
    }}
  >
    {booking.image && (
      <Box
        component="img"
        src={booking.image}
        alt=""
        sx={{
          backgroundColor: "action.hover",
          // 8px inside an 8px corner: the smallest radius of the scale rather than a sharp square
          borderRadius: 0.5,
          flexShrink: 0,
          height: PHOTO_SIZE,
          objectFit: "cover",
          width: PHOTO_SIZE,
        }}
      />
    )}
    {booking.name ? (
      // The machine, its order's number right after it
      <Stack direction="row" alignItems="center" spacing={1} flex={1} minWidth={0}>
        <Typography variant="body2" fontWeight={500} noWrap minWidth={0} title={booking.name}>
          {booking.name}
        </Typography>
        {booking.reference && <Chip label={booking.reference} variant="rounded" color="default" size="small" sx={{ flexShrink: 0 }} />}
      </Stack>
    ) : (
      <Box flex={1} minWidth={0}>
        <ChatBookingTag booking={{ ...booking, onClick: undefined }} />
      </Box>
    )}
    {booking.onClick && <ChatLineIcon d={LINE_ICON_PATHS.chevronRight} size={16} sx={{ color: "text.secondary", flexShrink: 0 }} />}
  </ButtonBase>
);

interface ChangeLinesProps {
  changes?: ChatMessageAction["changes"];
}

/**
 * What a request moves: the current date struck through, then the asked one
 */
const ChangeLines = ({ changes }: ChangeLinesProps) =>
  changes?.map(({ label, before, after }) => (
    <Typography key={`${label}-${before}`} variant="body2" color="text.secondary" data-test="chatActionChange">
      {label && `${label} `}
      <Box component="s" sx={{ textDecorationColor: "currentColor" }}>
        {before}
      </Box>
      <Box component="span" sx={{ mx: 0.5 }}>
        →
      </Box>
      <Box component="span" sx={{ color: "text.primary", fontWeight: 500 }}>
        {after}
      </Box>
    </Typography>
  ));

// The order timeline's event node: an outlined disc in the status' colour around the event's icon
const ICON_CHIP_COLORS = { error: "error", neutral: "default", pending: "default", success: "success", warning: "warning" } as const;

interface EventContentProps {
  action: ChatMessageAction;
}

/**
 * An order's event as a media card: its photo, its icon as on the order's timeline (in its status' colour), its kind and
 * order, the dates it moves, what happened, then a grey line with the machine, the day and, once settled, who closed it
 */
const EventContent = ({ action }: EventContentProps) => {
  const tone = action.status?.tone;
  // An open event says so by its icon's colour: no status line until it is settled
  const caption = [...(action.details ?? []), tone === "warning" ? null : action.status?.label].filter(Boolean).join(" · ");

  return (
    <>
      {action.cover && (
        <Box
          component="img"
          src={action.cover}
          alt=""
          sx={{ aspectRatio: "16 / 9", backgroundColor: "action.hover", display: "block", objectFit: "cover", width: "100%" }}
        />
      )}
      <Stack spacing={0.75} sx={{ p: `${CARD_PADDING}px` }} data-test="chatEventCard">
        <Stack direction="row" alignItems="center" spacing={0.75} minWidth={0}>
          {action.icon && (
            <Chip
              size="small"
              color={tone ? ICON_CHIP_COLORS[tone] : "default"}
              variant="outlined-rounded"
              label={
                <Box component="span" sx={{ display: "flex", fontSize: 16 }}>
                  {action.icon}
                </Box>
              }
              sx={{
                "& .MuiChip-label": { alignItems: "center", display: "flex", px: 0 },
                borderRadius: "50%",
                flexShrink: 0,
                height: 24,
                minWidth: 0,
                width: 24,
              }}
            />
          )}
          {/* The design system's card title, as on the kanban's and the timeline's cards */}
          <Typography variant="h6" noWrap>
            {[action.title, action.booking?.reference].filter(Boolean).join(" — ")}
          </Typography>
        </Stack>
        <ChangeLines changes={action.changes} />
        {action.note && (
          <Typography variant="body2" sx={{ whiteSpace: "pre-wrap" }}>
            {action.note}
          </Typography>
        )}
        {caption && (
          <Typography variant="caption" color="text.secondary">
            {caption}
          </Typography>
        )}
      </Stack>
    </>
  );
};

/**
 * Airbnb-like card of a request on an order: the request first (its icon and title), then the order it is about in a
 * card of its own, so it doesn't read as the order's name; the details, the status, then the recipient's one-tap answers.
 */
const ChatActionCard = ({ action, onRespond }: ChatActionCardProps) => {
  const [pendingResponseId, setPendingResponseId] = useState<string | null>(null);
  const responses = onRespond ? (action.responses ?? []) : [];
  const { onClick } = action;

  const respond = (event: MouseEvent, responseId: string) => {
    // An answer, not what the whole card opens
    event.stopPropagation();
    const result = onRespond?.(responseId);

    if (result instanceof Promise) {
      setPendingResponseId(responseId);
      result.catch(() => {}).finally(() => setPendingResponseId(null));
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (onClick && event.target === event.currentTarget && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <Box
      data-test="chatActionCard"
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      sx={{
        backgroundColor: "background.paper",
        border: `${BORDER_WIDTH}px solid`,
        borderColor: "divider",
        borderRadius: `${CARD_RADIUS}px`,
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.06)",
        color: "text.primary",
        maxWidth: "100%",
        overflow: "hidden",
        width: ACTION_CARD_WIDTH,
        // The whole card opens what it stands for (an order's event)
        ...(onClick && {
          "&:focus-visible": { outline: "2px solid", outlineColor: "text.primary", outlineOffset: 2 },
          "&:hover": { borderColor: "text.disabled", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)" },
          cursor: "pointer",
          transition: "border-color 120ms, box-shadow 120ms",
        }),
      }}
    >
      {action.variant === "event" ? (
        <EventContent action={action} />
      ) : (
        <Stack spacing={1.25} sx={{ p: `${CARD_PADDING}px` }}>
          <Stack direction="row" spacing={1.25} alignItems="center">
            {action.icon && <ChatIconTile radius={ORDER_RADIUS}>{action.icon}</ChatIconTile>}
            <Typography variant="h6">{action.title}</Typography>
          </Stack>
          {action.booking && <OrderCard booking={action.booking} />}
          <ChangeLines changes={action.changes} />
          {!!action.details?.length && (
            <Stack spacing={0.25}>
              {action.details.map((detail) => (
                <Typography key={detail} variant="body2" color="text.secondary">
                  {detail}
                </Typography>
              ))}
            </Stack>
          )}
          {action.note && (
            <Typography variant="body2" sx={{ borderLeft: "2px solid", borderLeftColor: "divider", pl: 1.25, whiteSpace: "pre-wrap" }}>
              {action.note}
            </Typography>
          )}
          {action.status && <StatusPill status={action.status} />}
        </Stack>
      )}
      {responses.length > 0 && (
        <Stack
          direction={responses.length > 2 ? "column" : "row"}
          spacing={`${BUTTONS_GAP}px`}
          sx={{ pb: `${CARD_PADDING}px`, px: `${CARD_PADDING}px` }}
        >
          {responses.map(({ id, label, variant = "primary" }) => (
            <Button
              key={id}
              variant={variant === "primary" ? "contained" : "outlined"}
              color="primary"
              isLoading={pendingResponseId === id}
              disabled={!!pendingResponseId && pendingResponseId !== id}
              onClick={(event: MouseEvent) => respond(event, id)}
              sx={{
                borderRadius: `${BUTTON_RADIUS}px`,
                flex: 1,
                lineHeight: 1.2,
                minHeight: 44,
                px: 1.5,
                ...(variant === "secondary" && { backgroundColor: "background.paper", borderColor: "divider" }),
                // The answer being sent keeps its colors around the spinner
                ...(pendingResponseId === id && {
                  "&.Mui-disabled":
                    variant === "primary" ? { backgroundColor: "primary.main", color: "primary.contrastText" } : { color: "text.primary" },
                }),
              }}
            >
              {label}
            </Button>
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default ChatActionCard;
