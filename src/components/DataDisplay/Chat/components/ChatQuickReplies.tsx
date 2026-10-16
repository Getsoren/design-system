import Stack from "@mui/material/Stack";
import ChatPill from "@/components/DataDisplay/Chat/components/ChatPill";

interface ChatQuickRepliesProps {
  replies: string[];
  label: string;
  disabled?: boolean;
  onSend: (reply: string) => void;
}

/**
 * One-tap replies above an empty composer
 */
const ChatQuickReplies = ({ replies, label, disabled, onSend }: ChatQuickRepliesProps) => (
  <Stack
    direction="row"
    spacing={1}
    role="group"
    aria-label={label}
    data-test="chatQuickReplies"
    sx={{ mb: 1, mt: -0.5, overflowX: "auto", py: 0.5 }}
  >
    {replies.map((reply) => (
      <ChatPill key={reply} onClick={() => onSend(reply)} disabled={disabled}>
        {reply}
      </ChatPill>
    ))}
  </Stack>
);

export default ChatQuickReplies;
