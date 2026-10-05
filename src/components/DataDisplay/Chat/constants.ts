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

export const EMOJI_PICKER_HEIGHT = 400;

export const EMOJI_CELL_SIZE = 44;

/** Cells plus the side paddings and the scrollbar gutter */
export const getEmojiPickerWidth = (columns: number) => columns * EMOJI_CELL_SIZE + 32;
