import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import SvgIcon from "@mui/material/SvgIcon";
import Tooltip from "@mui/material/Tooltip";
import { EMOJI_FONT_FAMILY } from "@/components/DataDisplay/Chat/constants";
import type { ChatLabels } from "@/components/DataDisplay/Chat/hooks/useChatLabels";

interface ChatReactionBarProps {
  quickReactions: string[];
  /** Emojis I already reacted with, shown pressed */
  myEmojis: string[];
  labels: ChatLabels;
  onToggle: (emoji: string) => void;
  onAdd: (anchor: HTMLElement) => void;
}

// A plain "+", as on Instagram
const PlusIcon = () => (
  <SvgIcon viewBox="0 0 24 24" sx={{ fontSize: 20 }}>
    <path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
  </SvgIcon>
);

const emojiButtonSx = {
  "@media (hover: none)": { height: 44, width: 44 },
  "&:hover": { backgroundColor: "transparent", transform: "scale(1.25)" },
  // An opaque color: the browser draws color emojis with the alpha of the text color (IconButton's grey is 54%)
  color: "text.primary",
  fontFamily: EMOJI_FONT_FAMILY,
  fontSize: 26,
  height: 40,
  lineHeight: 1,
  transition: "transform 120ms ease-out",
  width: 40,
};

/**
 * Instagram-like pill above a message (smiley, long press): one-tap reactions, then "+" for the full emoji picker.
 */
const ChatReactionBar = ({ quickReactions, myEmojis, labels, onToggle, onAdd }: ChatReactionBarProps) => (
  <Paper
    elevation={0}
    data-test="chatReactionBar"
    sx={{
      alignItems: "center",
      borderRadius: 999,
      boxShadow: "0 4px 24px rgba(0, 0, 0, 0.16)",
      display: "flex",
      gap: 0.25,
      px: 0.75,
      py: 0.5,
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
          sx={{ ...emojiButtonSx, ...(isMine && { "&, &:hover": { backgroundColor: "action.selected" } }) }}
        >
          {emoji}
        </IconButton>
      );
    })}
    <Tooltip title={labels.addReaction}>
      <IconButton
        aria-label={labels.addReaction}
        onClick={(e) => onAdd(e.currentTarget)}
        sx={{
          "@media (hover: none)": { height: 44, width: 44 },
          "&:hover": { backgroundColor: "action.selected" },
          backgroundColor: "action.hover",
          color: "text.secondary",
          height: 36,
          ml: 0.5,
          width: 36,
        }}
      >
        <PlusIcon />
      </IconButton>
    </Tooltip>
  </Paper>
);

export default ChatReactionBar;
