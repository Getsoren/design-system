import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import type { ChatMessageEvent } from "@/components/DataDisplay/Chat/types";

export const EVENT_MAX_WIDTH = 520;

interface ChatEventMessageProps {
  event: ChatMessageEvent;
  /** "Sophie · 17:55" */
  caption: string;
}

/**
 * An automatic message as WhatsApp and Front show them: one quiet centered line of grey text, no box, no bubble.
 * The order number reads as a link when it opens the order.
 */
const ChatEventMessage = ({ event, caption }: ChatEventMessageProps) => (
  <Typography
    component="div"
    variant="caption"
    color="text.secondary"
    data-test="chatEvent"
    sx={{ alignSelf: "center", lineHeight: 1.6, maxWidth: `min(${EVENT_MAX_WIDTH}px, 100%)`, px: 2, textAlign: "center" }}
  >
    {event.icon && (
      <Box component="span" sx={{ display: "inline-flex", fontSize: 16, mr: 0.75, verticalAlign: "-3px" }}>
        {event.icon}
      </Box>
    )}
    <Box component="span" sx={{ color: "text.primary", fontWeight: 500 }}>
      {event.title}
    </Box>
    {[...(event.details ?? [])].map((detail) => (
      <span key={detail}> · {detail}</span>
    ))}
    {event.booking && (
      <>
        {" · "}
        {event.booking.onClick ? (
          <ButtonBase
            onClick={event.booking.onClick}
            sx={{
              "&::after": { bottom: -12, content: '""', left: -4, position: "absolute", right: -4, top: -12 },
              "&:hover": { textDecoration: "underline" },
              color: "text.primary",
              font: "inherit",
              fontWeight: 500,
              position: "relative",
              verticalAlign: "baseline",
            }}
          >
            {event.booking.label}
          </ButtonBase>
        ) : (
          <Box component="span" sx={{ color: "text.primary", fontWeight: 500 }}>
            {event.booking.label}
          </Box>
        )}
      </>
    )}
    <Box component="span" sx={{ color: "text.disabled" }}>
      {" · "}
      {caption}
    </Box>
  </Typography>
);

export default ChatEventMessage;
