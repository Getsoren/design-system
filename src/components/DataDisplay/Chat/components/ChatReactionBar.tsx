import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";
import { EMOJI_FONT_FAMILY } from "@/components/DataDisplay/Chat/constants";
import type { ChatLabels } from "@/components/DataDisplay/Chat/hooks/useChatLabels";
import AddReactionIcon from "@/components/DataDisplay/Icons/AddReactionIcon";

interface ChatReactionBarProps {
  quickReactions: string[];
  /** Emojis I already reacted with, shown pressed */
  myEmojis: string[];
  labels: ChatLabels;
  onToggle: (emoji: string) => void;
  onAdd: () => void;
}

const buttonSx = { borderRadius: 999, height: 44, width: 44 };

/**
 * Floating bar of a message (hover, long press): the quick reactions and the full emoji picker.
 */
const ChatReactionBar = ({ quickReactions, myEmojis, labels, onToggle, onAdd }: ChatReactionBarProps) => (
  <Paper
    elevation={0}
    data-test="chatReactionBar"
    sx={{
      alignItems: "center",
      border: "1px solid",
      borderColor: "divider",
      borderRadius: 999,
      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.12)",
      display: "flex",
      p: 0.25,
    }}
  >
    {quickReactions.map((emoji) => {
      const isMine = myEmojis.includes(emoji);

      return (
        <IconButton
          key={emoji}
          aria-label={emoji}
          aria-pressed={isMine}
          onClick={() => onToggle(emoji)}
          sx={{
            ...buttonSx,
            backgroundColor: isMine ? "action.selected" : undefined,
            fontFamily: EMOJI_FONT_FAMILY,
            fontSize: 22,
            lineHeight: 1,
          }}
        >
          {emoji}
        </IconButton>
      );
    })}
    <Divider orientation="vertical" flexItem sx={{ mx: 0.25, my: 1 }} />
    <Tooltip title={labels.addReaction}>
      <IconButton aria-label={labels.addReaction} onClick={onAdd} sx={{ ...buttonSx, color: "text.secondary" }}>
        <AddReactionIcon sx={{ fontSize: 22 }} />
      </IconButton>
    </Tooltip>
  </Paper>
);

export default ChatReactionBar;
