import { useRef } from "react";
import type { ChatPendingAttachment } from "@/components/DataDisplay/Chat/hooks/useChatAttachmentUploads";
import type { ChatAttachmentLink, ChatLinkAttachment } from "@/components/DataDisplay/Chat/types";

/**
 * Files joining the composer are offered to the link dialog one at a time; "Later" on one skips the rest of the batch,
 * the link stays one click away on each card
 */
const useAttachmentLinkQueue = (
  onLinkAttachment: ChatLinkAttachment | undefined,
  onLinked: (key: string, link: ChatAttachmentLink) => void,
) => {
  const queueRef = useRef<ChatPendingAttachment[]>([]);
  const isLinkingRef = useRef(false);

  const promptLinks = async () => {
    if (isLinkingRef.current || !onLinkAttachment) {
      return;
    }

    isLinkingRef.current = true;

    while (queueRef.current.length) {
      const [item] = queueRef.current.splice(0, 1);
      // The upload may still be running: the dialog gets the local file, it only needs to read it back
      const url = item.previewUrl ?? URL.createObjectURL(item.file);
      const link = await onLinkAttachment(
        { fileName: item.file.name, id: item.key, mimeType: item.file.type || "application/octet-stream", size: item.file.size, url },
        {},
      ).catch(() => null);

      if (!item.previewUrl) {
        URL.revokeObjectURL(url);
      }

      if (link) {
        onLinked(item.key, link);
      } else {
        queueRef.current = [];
      }
    }

    isLinkingRef.current = false;
  };

  return (items: ChatPendingAttachment[]) => {
    if (onLinkAttachment && items.length) {
      queueRef.current.push(...items);
      void promptLinks();
    }
  };
};

export default useAttachmentLinkQueue;
