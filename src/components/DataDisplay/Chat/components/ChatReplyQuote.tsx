import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import { BUBBLE_RADIUS } from "@/components/DataDisplay/Chat/constants";
import type { ChatMessageReply } from "@/components/DataDisplay/Chat/types";

interface ChatReplyQuoteProps {
  reply: ChatMessageReply;
  onJump?: () => void;
}

/**
 * WhatsApp's quote: on top of the answer, 4px inside its bubble, a tint of the bubble with a coloured bar and the
 * author's name in that colour. A tap scrolls back to the quoted message.
 */
const ChatReplyQuote = ({ reply, onJump }: ChatReplyQuoteProps) => (
  <ButtonBase
    onClick={onJump}
    disabled={!onJump}
    data-test="chatReplyQuote"
    sx={{
      "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.08)" },
      "&.Mui-disabled": { color: "inherit" },
      alignItems: "stretch",
      backgroundColor: "rgba(0, 0, 0, 0.05)",
      borderLeft: "4px solid",
      borderLeftColor: "info.main",
      // Concentric with the bubble, 4px inside its corners
      borderRadius: `${BUBBLE_RADIUS - 4}px`,
      display: "flex",
      flexDirection: "column",
      // The bubble's padding (16px, 10px) minus the 4px inset
      mb: 0.75,
      mt: "-6px",
      mx: "-12px",
      pl: 1.25,
      pr: 1.5,
      py: 0.75,
      textAlign: "left",
      width: "calc(100% + 24px)",
    }}
  >
    <Typography variant="caption" fontWeight={600} color="info.dark" noWrap>
      {reply.authorName}
    </Typography>
    <Typography
      variant="caption"
      color="text.secondary"
      sx={{ display: "-webkit-box", overflow: "hidden", overflowWrap: "anywhere", WebkitBoxOrient: "vertical", WebkitLineClamp: 2 }}
    >
      {reply.body}
    </Typography>
  </ButtonBase>
);

export default ChatReplyQuote;
