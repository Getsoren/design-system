import type { Theme } from "@mui/material/styles";
export const DEFAULT_ATTACHMENT_ACCEPT = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif",
  // Chrome and Firefox give HEIC photos an empty mime type: the extension is the only clue
  ".heic",
  ".heif",
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
].join(",");

export const DEFAULT_MAX_ATTACHMENTS = 10;

export const DEFAULT_MAX_ATTACHMENT_SIZE = 25 * 1024 * 1024;

export const DEFAULT_QUICK_REACTIONS = ["👍", "✅", "👀", "🙏", "😂", "❤️"];

export const EMOJI_FONT_FAMILY =
  "'Apple Color Emoji', 'Noto Color Emoji', 'Twemoji Mozilla', 'Android Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif";

/** The conversation's header and the side panel's: one line runs under both (44px avatars, 12px above and below, 1px border) */
export const CHAT_HEADER_HEIGHT = 69;

/** Line icons of the composer and its recorder, in a 24px grid (see ChatLineIcon) */
export const LINE_ICON_PATHS = {
  arrowDown: "M12 5v14m7-7-7 7-7-7",
  bolt: "M13 2 4 14h7l-1 8 9-12h-7l1-8Z",
  check: "M20 6 9 17l-5-5",
  chevronDown: "m7 10 5 5 5-5",
  chevronRight: "m10 7 5 5-5 5",
  clock: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM12 6v6l4 2",
  close: "M18 6 6 18M6 6l12 12",
  // The order page's own signs, drawn in line: the event flag, "Terminer", "Prolonger", the delivery truck
  flag: "M5 21V4h8.5l.5 2H19v9h-6.5l-.5-2H5",
  mic: "M9 5a3 3 0 0 1 6 0v7a3 3 0 0 1-6 0ZM19 10v2a7 7 0 0 1-14 0v-2M12 19v3",
  // Three dots drawn as small rings, at the same line as the other icons
  moreHorizontal: "M5 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM12 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM19 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z",
  panelRight: "M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2ZM15 3v18",
  // The attachment sign users know, rather than ChatGPT's "+"
  paperclip: "m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",
  reply: "M9 17 4 12l5-5M20 18v-2a4 4 0 0 0-4-4H4",
  skipForward: "M5 4l10 8-10 8V4ZM19 5v14",
  stopCircle: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM10 9h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1Z",
  trash: "M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6M10 11v6M14 11v6",
  truck:
    "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2M15 18H9M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.36A1 1 0 0 0 17.52 8H14M17 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM7 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z",
  userPlus: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM19 8v6M22 11h-6",
};

export const EMOJI_PICKER_HEIGHT = 400;

export const EMOJI_CELL_SIZE = 44;

/** Cells plus the side paddings and the scrollbar gutter */
export const getEmojiPickerWidth = (columns: number) => columns * EMOJI_CELL_SIZE + 32;

/** My messages in grey, the others' in white */
export const getOwnBubbleBackground = ({ palette }: Theme) =>
  palette.mode === "dark"
    ? palette.grey[900]
    : // The design system's lighter tertiary step: a soft grey on the conversation's background
      ((palette.tertiary as unknown as Partial<Record<string, string>> | undefined)?.["8p"] ?? palette.grey[100]);
