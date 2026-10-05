import { useEffect, useRef, useState } from "react";
import type { ChatAttachment, ChatAttachmentLink, ChatUploadAttachment } from "@/components/DataDisplay/Chat/types";
import { getFileKind } from "@/components/DataDisplay/Chat/utils/getFileKind";
import matchesAccept from "@/components/DataDisplay/Chat/utils/matchesAccept";

export interface ChatPendingAttachment {
  key: string;
  file: File;
  /** Local object URL, only for the images the browser can draw */
  previewUrl?: string;
  status: "uploading" | "uploaded" | "error";
  progress: number;
  attachment?: ChatAttachment;
  link?: ChatAttachmentLink | null;
}

export interface ChatRejectedFile {
  fileName: string;
  reason: "size" | "type" | "count";
}

interface UseChatAttachmentUploadsOptions {
  onUploadAttachment?: ChatUploadAttachment;
  accept: string;
  maxAttachments: number;
  maxAttachmentSize: number;
}

let keySeed = 0;

const createPreviewUrl = (file: File): string | undefined =>
  getFileKind(file.name, file.type) === "image" && !/hei[cf]$/i.test(file.type || file.name) ? URL.createObjectURL(file) : undefined;

/**
 * Files of the composer: validated on selection, uploaded right away, sent once every upload is over.
 */
const useChatAttachmentUploads = ({ onUploadAttachment, accept, maxAttachments, maxAttachmentSize }: UseChatAttachmentUploadsOptions) => {
  const [items, setItems] = useState<ChatPendingAttachment[]>([]);
  const [rejectedFiles, setRejectedFiles] = useState<ChatRejectedFile[]>([]);
  // Read by the async handlers, which must see the latest list rather than the one of their render
  const itemsRef = useRef(items);
  itemsRef.current = items;

  const updateItem = (key: string, patch: Partial<ChatPendingAttachment>) => {
    // A file removed while uploading is simply not found anymore: its late result is dropped
    setItems((previous) => previous.map((item) => (item.key === key ? { ...item, ...patch } : item)));
  };

  const upload = (key: string, file: File) => {
    onUploadAttachment?.(file, (percent) => updateItem(key, { progress: Math.min(Math.max(percent, 0), 100) }))
      .then((attachment) => updateItem(key, { attachment, progress: 100, status: "uploaded" }))
      .catch(() => updateItem(key, { status: "error" }));
  };

  const addFiles = (files: File[]) => {
    if (!(onUploadAttachment && files.length)) {
      return;
    }

    const rejected: ChatRejectedFile[] = [];
    const accepted: ChatPendingAttachment[] = [];

    files.forEach((file) => {
      if (!matchesAccept(file, accept)) {
        rejected.push({ fileName: file.name, reason: "type" });
      } else if (file.size > maxAttachmentSize) {
        rejected.push({ fileName: file.name, reason: "size" });
      } else if (itemsRef.current.length + accepted.length >= maxAttachments) {
        rejected.push({ fileName: file.name, reason: "count" });
      } else {
        keySeed += 1;
        accepted.push({ file, key: `chat-attachment-${keySeed}`, previewUrl: createPreviewUrl(file), progress: 0, status: "uploading" });
      }
    });

    setRejectedFiles(rejected);

    if (accepted.length) {
      itemsRef.current = [...itemsRef.current, ...accepted];
      setItems(itemsRef.current);
      accepted.forEach(({ key, file }) => {
        upload(key, file);
      });
    }
  };

  const retry = (key: string) => {
    const item = itemsRef.current.find((current) => current.key === key);

    if (item) {
      updateItem(key, { progress: 0, status: "uploading" });
      upload(key, item.file);
    }
  };

  const remove = (key: string) => {
    const item = itemsRef.current.find((current) => current.key === key);

    if (item?.previewUrl) {
      URL.revokeObjectURL(item.previewUrl);
    }

    setItems((previous) => previous.filter((current) => current.key !== key));
    setRejectedFiles([]);
  };

  const setLink = (key: string, link: ChatAttachmentLink | null) => updateItem(key, { link });

  /**
   * Hands over the uploaded files (with the link picked in the composer) and keeps the failed ones for a retry.
   */
  const takeUploaded = (): ChatAttachment[] => {
    const uploaded = itemsRef.current.filter((item) => item.status === "uploaded" && item.attachment);

    uploaded.forEach((item) => {
      if (item.previewUrl) {
        URL.revokeObjectURL(item.previewUrl);
      }
    });
    itemsRef.current = itemsRef.current.filter((item) => !uploaded.includes(item));
    setItems(itemsRef.current);
    setRejectedFiles([]);

    return uploaded.map(({ attachment, link }) => ({ ...(attachment as ChatAttachment), link: link ?? attachment?.link }));
  };

  const clear = () => {
    itemsRef.current.forEach((item) => {
      if (item.previewUrl) {
        URL.revokeObjectURL(item.previewUrl);
      }
    });
    itemsRef.current = [];
    setItems([]);
    setRejectedFiles([]);
  };

  /**
   * Release the local previews when the composer goes away
   */
  useEffect(
    () => () => {
      itemsRef.current.forEach((item) => {
        if (item.previewUrl) {
          URL.revokeObjectURL(item.previewUrl);
        }
      });
    },
    [],
  );

  return {
    addFiles,
    clear,
    hasUploaded: items.some((item) => item.status === "uploaded"),
    isUploading: items.some((item) => item.status === "uploading"),
    items,
    rejectedFiles,
    remove,
    retry,
    setLink,
    takeUploaded,
  };
};

export default useChatAttachmentUploads;
