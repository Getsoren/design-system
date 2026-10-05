import type { ChatAttachmentLabels, ChatReactionLabels } from "@/components/DataDisplay/Chat/types";
import useTranslation from "@/hooks/useTranslation/useTranslation";

export type ChatLabels = Required<ChatAttachmentLabels & ChatReactionLabels>;

/**
 * Attachment and reaction labels: the caller's strings first, the design system locale otherwise.
 */
const useChatLabels = (labels?: ChatAttachmentLabels & ChatReactionLabels): ChatLabels => {
  const { t } = useTranslation();

  return {
    addReaction: labels?.addReaction ?? t("addReaction"),
    attachFile: labels?.attachFile ?? t("attachFile"),
    close: labels?.close ?? t("close"),
    download: labels?.download ?? t("download"),
    dropFilesHere: labels?.dropFilesHere ?? t("dropFilesHere"),
    fileTooLarge: labels?.fileTooLarge ?? t("fileTooLarge"),
    linkAttachment: labels?.linkAttachment ?? t("linkAttachment"),
    next: labels?.next ?? t("next"),
    openFile: labels?.openFile ?? t("openFile"),
    previous: labels?.previous ?? t("previous"),
    recentEmojis: labels?.recentEmojis ?? t("recentEmojis"),
    removeAttachment: labels?.removeAttachment ?? t("removeAttachment"),
    retryUpload: labels?.retryUpload ?? t("retryUpload"),
    searchEmoji: labels?.searchEmoji ?? t("searchEmoji"),
    tooManyFiles: labels?.tooManyFiles ?? t("tooManyFiles"),
    unsupportedFileType: labels?.unsupportedFileType ?? t("unsupportedFileType"),
    uploadFailed: labels?.uploadFailed ?? t("uploadFailed"),
    you: labels?.you ?? t("you"),
  };
};

export default useChatLabels;
