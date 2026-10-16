import type { Theme } from "@mui/material";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Popper from "@mui/material/Popper";
import ChatReactionBar from "@/components/DataDisplay/Chat/components/ChatReactionBar";
import type { ChatLabels } from "@/components/DataDisplay/Chat/hooks/useChatLabels";

interface ChatReactionPopperProps {
  anchorEl: HTMLElement | null;
  /** Spreads over the bubble from its side: from the smiley's when opened from it */
  alignStart: boolean;
  quickReactions: string[];
  myEmojis: string[];
  labels: ChatLabels;
  onClose: () => void;
  onToggle: (emoji: string) => void;
  onAdd: () => void;
  onReply?: () => void;
}

/**
 * WhatsApp-like: the quick reactions right above the smiley that was clicked, above the bubble on a long press
 */
const ChatReactionPopper = ({
  anchorEl,
  alignStart,
  quickReactions,
  myEmojis,
  labels,
  onClose,
  onToggle,
  onAdd,
  onReply,
}: ChatReactionPopperProps) => (
  <Popper
    open={!!anchorEl}
    anchorEl={anchorEl}
    placement={alignStart ? "top-start" : "top-end"}
    transition
    modifiers={[{ name: "offset", options: { offset: [0, 8] } }]}
    sx={{ zIndex: ({ zIndex }: Theme) => zIndex.modal }}
  >
    {({ TransitionProps }) => (
      <Grow {...TransitionProps} style={{ transformOrigin: alignStart ? "bottom left" : "bottom right" }} timeout={140}>
        <div>
          <ClickAwayListener mouseEvent="onPointerDown" touchEvent="onTouchStart" onClickAway={onClose}>
            <div>
              <ChatReactionBar
                quickReactions={quickReactions}
                myEmojis={myEmojis}
                labels={labels}
                onToggle={(emoji) => {
                  onClose();
                  onToggle(emoji);
                }}
                onAdd={() => {
                  onClose();
                  onAdd();
                }}
                onReply={
                  onReply &&
                  (() => {
                    onClose();
                    onReply();
                  })
                }
              />
            </div>
          </ClickAwayListener>
        </div>
      </Grow>
    )}
  </Popper>
);

export default ChatReactionPopper;
