import { type MouseEvent, type PointerEvent, useEffect, useRef, useState } from "react";
import type { ChatMessage } from "@/components/DataDisplay/Chat/types";
import { addRecentEmoji } from "@/components/DataDisplay/Chat/utils/recentEmojis";

const LONG_PRESS_MS = 400;
const LONG_PRESS_TOLERANCE_PX = 8;
// Instagram's double tap, with a thumb: the usual "noted" on a worksite
const DOUBLE_TAP_REACTION = "👍";
const DOUBLE_TAP_MS = 300;
const DOUBLE_TAP_TOLERANCE_PX = 24;
// Touch screens may follow a double tap with their own dblclick: both count as one
const DOUBLE_TAP_DEBOUNCE_MS = 600;
// A double click there keeps its own meaning (open, play, answer)
const INTERACTIVE_SELECTOR = "a, button, input, textarea, audio, video, [role='button']";

// "👍️" and "👍" are the same reaction
const stripVariationSelectors = (emoji: string) => emoji.replace(/️/g, "");

interface UseMessageReactionsOptions {
  message: ChatMessage;
  quickReactions: string[];
  onToggleReaction?: (messageId: ChatMessage["id"], emoji: string) => void;
}

/**
 * Instagram-like reactions on a message: the smiley or a long press opens the bar, a double click or a double tap
 * likes it, the next one takes the like back
 */
const useMessageReactions = ({ message, quickReactions, onToggleReaction }: UseMessageReactionsOptions) => {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [barAnchor, setBarAnchor] = useState<HTMLElement | null>(null);
  const [pickerAnchor, setPickerAnchor] = useState<HTMLElement | null>(null);
  const longPressTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const pressOriginRef = useRef<{ time: number; x: number; y: number } | null>(null);
  const lastTapRef = useRef<{ time: number; x: number; y: number } | null>(null);
  const lastDoubleTapAtRef = useRef(0);

  const toggleReaction = (emoji: string, fromPicker?: boolean) => {
    // Reuse the string already used on this message (or in the quick reactions): one pill per emoji
    const sameEmoji =
      [...(message.reactions ?? []).map((reaction) => reaction.emoji), ...quickReactions].find(
        (candidate) => stripVariationSelectors(candidate) === stripVariationSelectors(emoji),
      ) ?? emoji;

    if (fromPicker) {
      addRecentEmoji(sameEmoji);
    }

    onToggleReaction?.(message.id, sameEmoji);
  };

  // On the message itself (text, card, files), not on one of its controls nor in a portal (viewer, picker)
  const isOnMessageBody = ({ target }: MouseEvent) =>
    target instanceof Element && !!bodyRef.current?.contains(target) && !target.closest(INTERACTIVE_SELECTOR);

  const cancelLongPress = () => {
    clearTimeout(longPressTimerRef.current);
    pressOriginRef.current = null;
  };

  // Mine already: the toggle takes it back
  const reactWithThumb = () => {
    const now = Date.now();

    if (now - lastDoubleTapAtRef.current >= DOUBLE_TAP_DEBOUNCE_MS) {
      lastDoubleTapAtRef.current = now;
      toggleReaction(DOUBLE_TAP_REACTION);
    }
  };

  const handlePointerDown = (event: PointerEvent) => {
    // React bubbles events out of portals: only the message itself counts
    if (event.pointerType === "mouse" || !(event.target instanceof Node && event.currentTarget.contains(event.target))) {
      return;
    }

    pressOriginRef.current = { time: Date.now(), x: event.clientX, y: event.clientY };
    longPressTimerRef.current = setTimeout(() => setBarAnchor(bodyRef.current), LONG_PRESS_MS);
  };

  const handlePointerMove = (event: PointerEvent) => {
    const origin = pressOriginRef.current;

    if (origin && Math.hypot(event.clientX - origin.x, event.clientY - origin.y) > LONG_PRESS_TOLERANCE_PX) {
      cancelLongPress();
    }
  };

  const handlePointerUp = (event: PointerEvent) => {
    const origin = pressOriginRef.current;
    const lastTap = lastTapRef.current;
    const now = Date.now();
    cancelLongPress();

    // Touch only, and a quick tap: a long press opens the reactions instead
    if (!origin || now - origin.time >= LONG_PRESS_MS || !isOnMessageBody(event)) {
      return;
    }

    if (
      lastTap &&
      now - lastTap.time < DOUBLE_TAP_MS &&
      Math.hypot(event.clientX - lastTap.x, event.clientY - lastTap.y) < DOUBLE_TAP_TOLERANCE_PX
    ) {
      lastTapRef.current = null;
      reactWithThumb();
    } else {
      lastTapRef.current = { time: now, x: event.clientX, y: event.clientY };
    }
  };

  useEffect(() => () => clearTimeout(longPressTimerRef.current), []);

  useEffect(() => {
    if (!barAnchor) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setBarAnchor(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [barAnchor]);

  return {
    barAnchor,
    bodyRef,
    // Opened from the smiley rather than by a long press on the message
    isFromTrigger: !!barAnchor && barAnchor !== bodyRef.current,
    pickerAnchor,
    reactionHandlers: onToggleReaction
      ? {
          onContextMenu: (event: MouseEvent) => {
            // The long press opens the reactions, not the system menu
            if (barAnchor) {
              event.preventDefault();
            }
          },
          onDoubleClick: (event: MouseEvent) => {
            if (isOnMessageBody(event)) {
              reactWithThumb();
            }
          },
          onMouseDown: (event: MouseEvent) => {
            // The second click of a double click selects a word: here it reacts instead (a drag still selects)
            if (event.detail === 2 && isOnMessageBody(event)) {
              event.preventDefault();
            }
          },
          onPointerCancel: cancelLongPress,
          onPointerDown: handlePointerDown,
          onPointerMove: handlePointerMove,
          onPointerUp: handlePointerUp,
        }
      : {},
    setBarAnchor,
    setPickerAnchor,
    toggleReaction,
  };
};

export default useMessageReactions;
