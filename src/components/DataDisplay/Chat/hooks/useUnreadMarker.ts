import { useState } from "react";
import type { ChatMessage } from "@/components/DataDisplay/Chat/types";
import { getFirstUnreadId } from "@/components/DataDisplay/Chat/utils/messageRows";

interface UseUnreadMarkerOptions {
  threadId?: string;
  messages?: ChatMessage[];
  isLoading?: boolean;
  currentUserId: string;
  unreadCount?: number;
}

/**
 * The first unread message, fixed when the thread opens: reading it must not move the divider
 */
const useUnreadMarker = ({ threadId, messages, isLoading, currentUserId, unreadCount }: UseUnreadMarkerOptions) => {
  const [marker, setMarker] = useState<{ threadId?: string; messageId: ChatMessage["id"] | null } | null>(null);

  if (threadId && messages && !isLoading && marker?.threadId !== threadId) {
    setMarker({ messageId: getFirstUnreadId(messages, currentUserId, unreadCount), threadId });
  }

  return marker && marker.threadId === threadId ? marker.messageId : null;
};

export default useUnreadMarker;
