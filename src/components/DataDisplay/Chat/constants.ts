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

/** Line icons of the composer and its recorder, in a 24px grid (see ChatLineIcon) */
export const LINE_ICON_PATHS = {
  bolt: "M13 2 4 14h7l-1 8 9-12h-7l1-8Z",
  check: "M20 6 9 17l-5-5",
  chevronDown: "m7 10 5 5 5-5",
  close: "M18 6 6 18M6 6l12 12",
  mic: "M9 5a3 3 0 0 1 6 0v7a3 3 0 0 1-6 0ZM19 10v2a7 7 0 0 1-14 0v-2M12 19v3",
};

export const EMOJI_PICKER_HEIGHT = 400;

export const EMOJI_CELL_SIZE = 44;

/** Cells plus the side paddings and the scrollbar gutter */
export const getEmojiPickerWidth = (columns: number) => columns * EMOJI_CELL_SIZE + 32;

/** My messages in grey, the others' in white */
export const getOwnBubbleBackground = ({ palette }: Theme) =>
  palette.mode === "dark"
    ? palette.grey[900]
    : ((palette.tertiary as unknown as Partial<Record<string, string>> | undefined)?.["12p"] ?? palette.grey[200]);
