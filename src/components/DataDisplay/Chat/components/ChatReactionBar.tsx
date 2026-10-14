import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";
import ChatLineIcon from "@/components/DataDisplay/Chat/components/ChatLineIcon";
import { EMOJI_FONT_FAMILY, LINE_ICON_PATHS } from "@/components/DataDisplay/Chat/constants";
import type { ChatLabels } from "@/components/DataDisplay/Chat/hooks/useChatLabels";
import PlusIcon from "@/components/DataDisplay/Icons/PlusIcon";

interface ChatReactionBarProps {
  quickReactions: string[];
  /** Emojis I already reacted with, shown pressed */
  myEmojis: string[];
  labels: ChatLabels;
  onToggle: (emoji: string) => void;
  onAdd: (anchor: HTMLElement) => void;
  /** After "+": answer this message, the long press's way to "Reply" on a touch screen */
  onReply?: () => void;
}

// Pill 48px high (40px buttons + 4px inset): every round button inside is concentric with its ends
const emojiButtonSx = {
  "@media (hover: none)": { height: 44, width: 44 },
  "&:hover": { backgroundColor: "transparent", transform: "scale(1.25)" },
  borderRadius: "50%",
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
const ChatReactionBar = ({ quickReactions, myEmojis, labels, onToggle, onAdd, onReply }: ChatReactionBarProps) => (
  <Paper
    elevation={0}
    data-test="chatReactionBar"
    sx={{
      // The 36px "+" sits 6px from the top, the bottom and the right end: radius 24 - 6 = 18, a circle. On touch
      // screens the buttons grow to 44px and the inset drops to 4px: radius 26 - 4 = 22
      "@media (hover: none)": { pr: 0.5 },
      alignItems: "center",
      borderRadius: 999,
      boxShadow: "0 4px 24px rgba(0, 0, 0, 0.16)",
      display: "flex",
      gap: 0.25,
      pl: 0.5,
      pr: 0.75,
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
          borderRadius: "50%",
          color: "text.secondary",
          height: 36,
          ml: 0.5,
          width: 36,
        }}
      >
        {/* A plain "+", as on Instagram */}
        <PlusIcon sx={{ fontSize: 20 }} />
      </IconButton>
    </Tooltip>
    {onReply && (
      <Tooltip title={labels.reply}>
        <IconButton
          aria-label={labels.reply}
          onClick={onReply}
          sx={{
            "@media (hover: none)": { height: 44, width: 44 },
            "&:hover": { backgroundColor: "action.selected" },
            backgroundColor: "action.hover",
            borderRadius: "50%",
            color: "text.secondary",
            height: 36,
            ml: 0.5,
            width: 36,
          }}
        >
          <ChatLineIcon d={LINE_ICON_PATHS.reply} />
        </IconButton>
      </Tooltip>
    )}
  </Paper>
);

export default ChatReactionBar;
