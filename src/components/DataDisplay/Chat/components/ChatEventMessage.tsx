import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ChatBookingTag from "@/components/DataDisplay/Chat/components/ChatBookingTag";
import type { ChatMessageEvent } from "@/components/DataDisplay/Chat/types";

export const EVENT_MAX_WIDTH = 440;

interface ChatEventMessageProps {
  event: ChatMessageEvent;
  /** "by Sophie · 17:55" */
  caption: string;
}

/**
 * An automatic message as WhatsApp and Front show them: a discreet centered notice, not a bubble.
 */
const ChatEventMessage = ({ event, caption }: ChatEventMessageProps) => (
  <Stack
    data-test="chatEvent"
    alignItems="center"
    spacing={0.25}
    sx={{
      alignSelf: "center",
      backgroundColor: "action.hover",
      border: "1px solid",
      borderColor: "divider",
      borderRadius: 1.5,
      maxWidth: `min(${EVENT_MAX_WIDTH}px, 100%)`,
      px: 2,
      py: 1.25,
      textAlign: "center",
    }}
  >
    <Stack direction="row" alignItems="center" justifyContent="center" spacing={1} maxWidth="100%">
      {event.icon && (
        <Box component="span" sx={{ color: "text.secondary", display: "inline-flex", flexShrink: 0, fontSize: 18 }}>
          {event.icon}
        </Box>
      )}
      <Typography variant="body2" fontWeight={500}>
        {event.title}
      </Typography>
    </Stack>
    {!!event.details?.length && (
      <Typography variant="caption" color="text.secondary">
        {event.details.join(" · ")}
      </Typography>
    )}
    <Stack direction="row" alignItems="center" justifyContent="center" flexWrap="wrap" gap={1} pt={0.5} maxWidth="100%">
      {event.booking && <ChatBookingTag booking={event.booking} showImage contrast />}
      <Typography variant="caption" color="text.secondary">
        {caption}
      </Typography>
    </Stack>
  </Stack>
);

export default ChatEventMessage;
