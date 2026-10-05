import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import ChatBookingTag from "@/components/DataDisplay/Chat/components/ChatBookingTag";
import type { ChatMessageAction, ChatMessageActionStatus } from "@/components/DataDisplay/Chat/types";
import Button from "@/components/Inputs/Button/Button";

export const ACTION_CARD_WIDTH = 320;
const CARD_RADIUS = 12;
const CARD_PADDING = 12;
// The answers sit 4px from the card's edges: 12 - 4 = 8, concentric with its corners
const BUTTONS_INSET = 4;
const PHOTO_SIZE = 48;

interface ChatActionCardProps {
  action: ChatMessageAction;
  /** Shows the answers (recipient only). May return a promise: the button spins until it settles */
  onRespond?: (responseId: string) => unknown;
}

const STATUS_COLORS: Record<ChatMessageActionStatus["tone"], { backgroundColor: string; color: string; dot?: string }> = {
  error: { backgroundColor: "error.8p", color: "error.dark", dot: "error.main" },
  neutral: { backgroundColor: "action.hover", color: "text.secondary" },
  pending: { backgroundColor: "action.hover", color: "text.primary", dot: "text.secondary" },
  success: { backgroundColor: "success.8p", color: "success.dark", dot: "success.main" },
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

/**
 * Airbnb-like card of a request on an order: the machine's photo, the title and the order tag, the details, the status,
 * then the recipient's one-tap answers.
 */
const ChatActionCard = ({ action, onRespond }: ChatActionCardProps) => {
  const [pendingResponseId, setPendingResponseId] = useState<string | null>(null);
  const responses = onRespond ? (action.responses ?? []) : [];

  const respond = (responseId: string) => {
    const result = onRespond?.(responseId);

    if (result instanceof Promise) {
      setPendingResponseId(responseId);
      result.catch(() => {}).finally(() => setPendingResponseId(null));
    }
  };

  return (
    <Box
      data-test="chatActionCard"
      sx={{
        backgroundColor: "background.paper",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: `${CARD_RADIUS}px`,
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.06)",
        color: "text.primary",
        maxWidth: "100%",
        overflow: "hidden",
        width: ACTION_CARD_WIDTH,
      }}
    >
      <Stack spacing={1.25} sx={{ p: `${CARD_PADDING}px` }}>
        <Stack direction="row" spacing={1.5} alignItems="center">
          {action.booking?.image && (
            <Box
              component="img"
              src={action.booking.image}
              alt=""
              sx={{
                backgroundColor: "action.hover",
                // Inset 12px from the card's corner: the smallest radius of the scale rather than a sharp square
                borderRadius: 0.5,
                flexShrink: 0,
                height: PHOTO_SIZE,
                objectFit: "cover",
                width: PHOTO_SIZE,
              }}
            />
          )}
          <Stack spacing={0.75} alignItems="flex-start" flex={1} minWidth={0}>
            <Typography variant="body2" fontWeight={600}>
              {action.title}
            </Typography>
            {action.booking && <ChatBookingTag booking={action.booking} />}
          </Stack>
        </Stack>
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
      {responses.length > 0 && (
        <Stack
          direction={responses.length > 2 ? "column" : "row"}
          spacing={`${BUTTONS_INSET}px`}
          sx={{ pb: `${BUTTONS_INSET}px`, px: `${BUTTONS_INSET}px` }}
        >
          {responses.map(({ id, label, variant = "primary" }) => (
            <Button
              key={id}
              variant={variant === "primary" ? "contained" : "outlined"}
              color="primary"
              isLoading={pendingResponseId === id}
              disabled={!!pendingResponseId && pendingResponseId !== id}
              onClick={() => respond(id)}
              sx={{
                borderRadius: `${CARD_RADIUS - BUTTONS_INSET}px`,
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
