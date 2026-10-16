import { useState } from "react";
import type { ChatLabels } from "@/components/DataDisplay/Chat/hooks/useChatLabels";
import type { ChatConversationDetailProps, ChatMessage, ChatMessageReply } from "@/components/DataDisplay/Chat/types";
import formatParticipantNames from "@/components/DataDisplay/Chat/utils/formatParticipantNames";

type UseChatReplyOptions = Pick<ChatConversationDetailProps, "threadId" | "participants" | "currentUserId" | "formatParticipantName"> & {
  labels: ChatLabels;
};

/**
 * The message being answered, for its thread only
 */
const useChatReply = ({ threadId, participants, currentUserId, labels, formatParticipantName }: UseChatReplyOptions) => {
  const [reply, setReply] = useState<{ threadId?: string; value: ChatMessageReply } | null>(null);

  /**
   * The quote of an answer: the author's name ("You" for mine) and the text, or a word for a file, a voice message or
   * a request card
   */
  const startReply = (message: ChatMessage) => {
    const author = participants?.find(({ userId }) => userId === message.authorId);
    const voice = message.attachments?.find(({ mimeType }) => mimeType.startsWith("audio/"));
    const body =
      message.body.trim() ||
      message.action?.title ||
      (voice ? labels.voiceMessage : message.attachments?.map(({ fileName }) => fileName).join(", ")) ||
      "";

    setReply({
      threadId,
      value: {
        authorName: message.authorId === currentUserId ? labels.you : author ? formatParticipantNames([author], formatParticipantName) : "",
        body: body.replace(/\s+/g, " "),
        messageId: message.id,
      },
    });
  };

  return {
    activeReply: reply && reply.threadId === threadId ? reply.value : null,
    cancelReply: () => setReply(null),
    startReply,
  };
};

export default useChatReply;
