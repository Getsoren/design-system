export type ChatFileKind = "image" | "pdf" | "document" | "spreadsheet" | "other";

const getExtension = (fileName: string): string => {
  const dotIndex = fileName.lastIndexOf(".");

  return dotIndex > 0 ? fileName.slice(dotIndex + 1).toLowerCase() : "";
};

/**
 * Family of a file, from its mime type and falling back on its extension.
 */
export const getFileKind = (fileName: string, mimeType?: string | null): ChatFileKind => {
  const mime = mimeType?.toLowerCase() ?? "";
  const extension = getExtension(fileName);

  if (mime.startsWith("image/") || ["jpg", "jpeg", "png", "webp", "gif", "heic", "heif"].includes(extension)) {
    return "image";
  }

  if (mime === "application/pdf" || extension === "pdf") {
    return "pdf";
  }

  if (mime.includes("spreadsheet") || mime.includes("excel") || ["xls", "xlsx", "csv", "ods"].includes(extension)) {
    return "spreadsheet";
  }

  if (mime.includes("word") || ["doc", "docx", "odt", "rtf", "txt"].includes(extension)) {
    return "document";
  }

  return "other";
};

/**
 * Short type label shown next to the size, e.g. "PDF" or "DOCX".
 */
export const getFileTypeLabel = (fileName: string, mimeType?: string | null): string =>
  (getExtension(fileName) || mimeType?.split("/").pop() || "").toUpperCase();

/**
 * Whether the browser can draw the file as an image. HEIC only renders on Safari, so it needs a thumbnail.
 */
export const isPreviewableImage = (fileName: string, mimeType?: string | null, thumbnailUrl?: string | null): boolean =>
  getFileKind(fileName, mimeType) === "image" && (!!thumbnailUrl || !/hei[cf]$/i.test(mimeType || fileName));

/**
 * A voice message (or any audio file), played in the conversation rather than shown as a file card.
 */
export const isAudioFile = (mimeType?: string | null): boolean => !!mimeType?.toLowerCase().startsWith("audio/");
