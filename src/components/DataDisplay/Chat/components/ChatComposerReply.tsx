import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ChatLineIcon from "@/components/DataDisplay/Chat/components/ChatLineIcon";
import { LINE_ICON_PATHS } from "@/components/DataDisplay/Chat/constants";
import type { ChatMessageReply } from "@/components/DataDisplay/Chat/types";
import { COMPOSER_INNER_RADIUS } from "@/components/DataDisplay/Chat/utils/composerSx";

interface ChatComposerReplyProps {
  reply: ChatMessageReply;
  cancelLabel: string;
  onCancel?: () => void;
}

/**
 * The message being answered, inside the composer's corner
 */
const ChatComposerReply = ({ reply, cancelLabel, onCancel }: ChatComposerReplyProps) => (
  <Stack
    direction="row"
    alignItems="center"
    spacing={1}
    data-test="chatComposerReply"
    sx={{ backgroundColor: "action.hover", borderRadius: COMPOSER_INNER_RADIUS, m: 1, mb: 0, pl: 1.5, pr: 0.5, py: 0.75 }}
  >
    <Stack flex={1} minWidth={0}>
      <Typography variant="caption" fontWeight={600} noWrap>
        {reply.authorName}
      </Typography>
      <Typography variant="caption" color="text.secondary" noWrap>
        {reply.body}
      </Typography>
    </Stack>
    <IconButton aria-label={cancelLabel} onClick={onCancel} sx={{ borderRadius: "8px", color: "text.secondary" }}>
      <ChatLineIcon d={LINE_ICON_PATHS.close} size={16} />
    </IconButton>
  </Stack>
);

export default ChatComposerReply;
