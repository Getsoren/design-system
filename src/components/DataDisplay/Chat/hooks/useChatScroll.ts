import { useEffect, useRef, useState } from "react";
import type { ChatMessage } from "@/components/DataDisplay/Chat/types";

// Within this distance of the bottom, the reader counts as following the conversation
const STICK_TO_BOTTOM_THRESHOLD_PX = 80;
// Further up, a button brings the reader back to the latest messages
const SCROLL_BUTTON_THRESHOLD_PX = 240;
// The unread divider sits a little below the top when the thread opens on it
const UNREAD_DIVIDER_OFFSET_PX = 24;
const HIGHLIGHT_MS = 1600;

interface UseChatScrollOptions {
  messages?: ChatMessage[];
  isLoading?: boolean;
  currentUserId: string;
  /** The thread and its filter: a new view opens on its end, or on its unread divider */
  view: string;
}

/**
 * WhatsApp-like: a new thread or filter opens on its end, my own message and a message received while at the bottom
 * follow it; a reader up in the history stays there and the button counts what arrived
 */
const useChatScroll = ({ messages, isLoading, currentUserId, view }: UseChatScrollOptions) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isAtBottomRef = useRef(true);
  const previousViewRef = useRef<string | undefined>(undefined);
  const previousLastMessageIdRef = useRef<ChatMessage["id"] | undefined>(undefined);
  const [isAwayFromBottom, setIsAwayFromBottom] = useState(false);
  // Messages from the others received while the reader is up in the history
  const [unseenCount, setUnseenCount] = useState(0);
  // Keyed on the last message rather than the list: a reaction or a link on an older message must not pull the reader down
  const lastMessage = messages?.at(-1);

  const scrollToBottom = (behavior: ScrollBehavior) => {
    isAtBottomRef.current = true;
    setUnseenCount(0);
    scrollContainerRef.current?.scrollTo({ behavior, top: scrollContainerRef.current.scrollHeight });
  };

  const handleScroll = () => {
    const container = scrollContainerRef.current;

    if (!container) {
      return;
    }

    const distance = container.scrollHeight - container.scrollTop - container.clientHeight;
    isAtBottomRef.current = distance <= STICK_TO_BOTTOM_THRESHOLD_PX;
    setIsAwayFromBottom(distance > SCROLL_BUTTON_THRESHOLD_PX);

    if (isAtBottomRef.current) {
      setUnseenCount(0);
    }
  };

  /**
   * Back to a quoted message: brought to the middle of the list and flashed
   */
  const jumpToMessage = (messageId: ChatMessage["id"]) => {
    const row = Array.from(scrollContainerRef.current?.querySelectorAll<HTMLElement>("[data-message-id]") ?? []).find(
      (element) => element.dataset.messageId === String(messageId),
    );

    if (!row) {
      return;
    }

    row.scrollIntoView({ behavior: "smooth", block: "center" });
    row.setAttribute("data-highlight", "");
    setTimeout(() => row.removeAttribute("data-highlight"), HIGHLIGHT_MS);
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: the last message stands for the list
  useEffect(() => {
    if (!messages || isLoading) {
      return;
    }

    const isNewView = previousViewRef.current !== view;
    const isNewMessage = previousLastMessageIdRef.current !== lastMessage?.id;
    const container = scrollContainerRef.current;
    const unreadDivider = container?.querySelector<HTMLElement>("[data-unread-divider]");
    previousViewRef.current = view;
    previousLastMessageIdRef.current = lastMessage?.id;

    if (isNewView && container && unreadDivider) {
      // The thread opens on the first unread message
      container.scrollTop = unreadDivider.offsetTop - UNREAD_DIVIDER_OFFSET_PX;
      handleScroll();
    } else if (isNewView) {
      scrollToBottom("instant");
    } else if (isNewMessage && (isAtBottomRef.current || lastMessage?.authorId === currentUserId)) {
      scrollToBottom("smooth");
    } else if (isNewMessage) {
      setUnseenCount((count) => count + 1);
    }
  }, [lastMessage?.id, messages?.length, isLoading, view]);

  /**
   * Stick to the bottom: a reaction, a link pill, an image that loads or the composer tray that grows must not hide the
   * end of the conversation from a reader who was there. A reader up in the history is left where they are.
   */
  // biome-ignore lint/correctness/useExhaustiveDependencies: the observed elements change with the view and the loading state
  useEffect(() => {
    const container = scrollContainerRef.current;
    const content = container?.firstElementChild;

    if (!container || typeof ResizeObserver === "undefined") {
      return;
    }

    const observer = new ResizeObserver(() => {
      if (isAtBottomRef.current) {
        container.scrollTop = container.scrollHeight;
      }
    });

    observer.observe(container);

    if (content) {
      observer.observe(content);
    }

    return () => observer.disconnect();
  }, [view, isLoading]);

  return { handleScroll, isAwayFromBottom, jumpToMessage, lastMessage, scrollContainerRef, scrollToBottom, unseenCount };
};

export default useChatScroll;
