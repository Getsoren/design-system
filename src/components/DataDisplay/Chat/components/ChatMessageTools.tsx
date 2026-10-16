import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import type { MouseEvent } from "react";
import ChatLineIcon from "@/components/DataDisplay/Chat/components/ChatLineIcon";
import { LINE_ICON_PATHS } from "@/components/DataDisplay/Chat/constants";
import type { ChatLabels } from "@/components/DataDisplay/Chat/hooks/useChatLabels";
import AddReactionIcon from "@/components/DataDisplay/Icons/AddReactionIcon";

// A white chip, so the smiley and the reply read on the grey conversation background
const toolSx = {
  "&:hover": { backgroundColor: "background.paper", color: "text.primary" },
  backgroundColor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)",
  color: "text.secondary",
  height: 32,
  width: 32,
};

interface ChatMessageToolsProps {
  isOwn?: boolean;
  /** Level with the bubble rather than with the reactions hooked under it */
  hasReactions: boolean;
  labels: Pick<ChatLabels, "addReaction" | "reply">;
  onReact?: (event: MouseEvent<HTMLElement>) => void;
  onReply?: () => void;
}

/**
 * Discreet tools on the empty side of the bubble, revealed on hover: the smiley, then "Reply"
 */
const ChatMessageTools = ({ isOwn, hasReactions, labels, onReact, onReply }: ChatMessageToolsProps) => (
  <Stack
    direction={isOwn ? "row-reverse" : "row"}
    spacing={0.5}
    sx={{
      mx: 0.75,
      position: "absolute",
      top: hasReactions ? "calc(50% - 9px)" : "50%",
      transform: "translateY(-50%)",
      // Above the cards that follow in the conversation
      zIndex: 1,
      ...(isOwn ? { right: "100%" } : { left: "100%" }),
    }}
  >
    {onReact && (
      <IconButton data-chat-reaction-trigger aria-label={labels.addReaction} aria-haspopup="dialog" onClick={onReact} sx={toolSx}>
        <AddReactionIcon sx={{ fontSize: 20 }} />
      </IconButton>
    )}
    {onReply && (
      <IconButton data-chat-reaction-trigger aria-label={labels.reply} onClick={onReply} sx={toolSx}>
        <ChatLineIcon d={LINE_ICON_PATHS.reply} />
      </IconButton>
    )}
  </Stack>
);

export default ChatMessageTools;
