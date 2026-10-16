import type { ChatReadReceiptStatus } from "@/components/DataDisplay/Chat/components/ChatReadReceipt";
import type { ChatLabels } from "@/components/DataDisplay/Chat/hooks/useChatLabels";
import type { ChatMessage, ChatParticipant } from "@/components/DataDisplay/Chat/types";
import ensureUtc from "@/components/DataDisplay/Chat/utils/ensureUtc";
import formatParticipantNames from "@/components/DataDisplay/Chat/utils/formatParticipantNames";

const toTime = (date: string) => new Date(ensureUtc(date)).getTime();

interface GetReadReceiptOptions {
  participants?: ChatParticipant[] | null;
  currentUserId?: string;
  labels: Pick<ChatLabels, "seenBy" | "sending" | "sent">;
  formatTime: (date: string) => string;
  formatParticipantName?: (participant: ChatParticipant) => string;
}

/**
 * Sending, sent, or seen by the other participants who read the thread after it was sent
 */
const getReadReceipt = (
  message: ChatMessage,
  { participants, currentUserId, labels, formatTime, formatParticipantName }: GetReadReceiptOptions,
): { status: ChatReadReceiptStatus; label: string } => {
  // Optimistic messages carry a temporary id until the server acknowledges them
  if (String(message.id).startsWith("temp-")) {
    return { label: labels.sending, status: "sending" };
  }

  const readers = (participants ?? []).filter(
    ({ userId, lastReadAt }) =>
      userId !== message.authorId && userId !== currentUserId && !!lastReadAt && toTime(lastReadAt) >= toTime(message.createdAt),
  );

  if (!readers.length) {
    return { label: labels.sent, status: "sent" };
  }

  const seenBy = readers.map(
    (reader) => `${formatParticipantNames([reader], formatParticipantName)} · ${formatTime(reader.lastReadAt ?? message.createdAt)}`,
  );

  return { label: `${labels.seenBy} ${seenBy.join(", ")}`, status: "read" };
};

export default getReadReceipt;
