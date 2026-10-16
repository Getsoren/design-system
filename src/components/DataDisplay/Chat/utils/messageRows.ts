import type { ChatMessage } from "@/components/DataDisplay/Chat/types";
import ensureUtc from "@/components/DataDisplay/Chat/utils/ensureUtc";

// Messages of one author within this delay form one run: one name, one time, one avatar
const GROUP_WINDOW_MS = 5 * 60 * 1000;

export interface MessageRow {
  /** A single message, or a run of automatic messages of the same day */
  messages: ChatMessage[];
  showDayDivider: boolean;
  /** Position of a single message in its author's run */
  isFirstInGroup: boolean;
  isLastInGroup: boolean;
}

const toTime = (date: string) => new Date(ensureUtc(date)).getTime();

const isSameDay = (a: string, b: string) => new Date(ensureUtc(a)).toDateString() === new Date(ensureUtc(b)).toDateString();

/**
 * Same author, same day, a few minutes apart, neither an automatic message: the second one continues the run
 */
const continuesRun = (previous: ChatMessage | undefined, message: ChatMessage | undefined) =>
  !!previous &&
  !!message &&
  !previous.event &&
  !message.event &&
  previous.authorId === message.authorId &&
  isSameDay(previous.createdAt, message.createdAt) &&
  toTime(message.createdAt) - toTime(previous.createdAt) <= GROUP_WINDOW_MS;

/**
 * Day dividers, runs of messages from one author, and consecutive automatic messages of a day folded into one row
 */
export const toRows = (messages: ChatMessage[], groupEvents: boolean) =>
  messages.reduce<MessageRow[]>((rows, message, index) => {
    const previousMessage = messages[index - 1];
    const showDayDivider = !(previousMessage && isSameDay(message.createdAt, previousMessage.createdAt));
    const lastRow = rows[rows.length - 1];

    if (groupEvents && message.event && previousMessage?.event && !showDayDivider && lastRow) {
      lastRow.messages.push(message);
    } else {
      rows.push({
        isFirstInGroup: !continuesRun(previousMessage, message),
        isLastInGroup: !continuesRun(message, messages[index + 1]),
        messages: [message],
        showDayDivider,
      });
    }

    return rows;
  }, []);

/**
 * Room above a row: a day starts further, a new run a little, a message continuing its run sits tight
 */
export const getRowGap = ({ showDayDivider, isFirstInGroup }: MessageRow, index: number) => {
  if (index === 0) {
    return 0;
  }

  if (showDayDivider) {
    return 3;
  }

  return isFirstInGroup ? 2 : 0.5;
};

/**
 * The first of the last `unreadCount` messages from the others: where the reader left off
 */
export const getFirstUnreadId = (messages: ChatMessage[], currentUserId: string, unreadCount = 0) => {
  const fromOthers = messages.filter(({ authorId, event }) => authorId !== currentUserId && !event);
  const count = Math.min(unreadCount, fromOthers.length);

  return count ? fromOthers[fromOthers.length - count].id : null;
};
