import type {
  ChatAttachmentLabels,
  ChatReactionLabels,
  ChatReadReceiptLabels,
  ChatVoiceMessageLabels,
} from "@/components/DataDisplay/Chat/types";
import useTranslation from "@/hooks/useTranslation/useTranslation";

type ChatLabelOverrides = ChatAttachmentLabels & ChatReactionLabels & ChatVoiceMessageLabels & ChatReadReceiptLabels;

export type ChatLabels = Required<ChatLabelOverrides>;

/**
 * Attachment, reaction, voice message and read receipt labels: the caller's strings first, the design system locale
 * otherwise.
 */
const useChatLabels = (labels?: ChatLabelOverrides): ChatLabels => {
  const { t } = useTranslation();

  return {
    addReaction: labels?.addReaction ?? t("addReaction"),
    attachFile: labels?.attachFile ?? t("attachFile"),
    cancelRecording: labels?.cancelRecording ?? t("cancelRecording"),
    close: labels?.close ?? t("close"),
    download: labels?.download ?? t("download"),
    dropFilesHere: labels?.dropFilesHere ?? t("dropFilesHere"),
    fileTooLarge: labels?.fileTooLarge ?? t("fileTooLarge"),
    linkAttachment: labels?.linkAttachment ?? t("linkAttachment"),
    next: labels?.next ?? t("next"),
    openFile: labels?.openFile ?? t("openFile"),
    pause: labels?.pause ?? t("pause"),
    play: labels?.play ?? t("play"),
    previous: labels?.previous ?? t("previous"),
    reactions: labels?.reactions ?? t("reactions"),
    recentEmojis: labels?.recentEmojis ?? t("recentEmojis"),
    recordVoiceMessage: labels?.recordVoiceMessage ?? t("recordVoiceMessage"),
    removeAttachment: labels?.removeAttachment ?? t("removeAttachment"),
    removeReaction: labels?.removeReaction ?? t("removeReaction"),
    retryUpload: labels?.retryUpload ?? t("retryUpload"),
    searchEmoji: labels?.searchEmoji ?? t("searchEmoji"),
    seenBy: labels?.seenBy ?? t("seenBy"),
    sending: labels?.sending ?? t("sending"),
    sendVoiceMessage: labels?.sendVoiceMessage ?? t("sendVoiceMessage"),
    sent: labels?.sent ?? t("sent"),
    tooManyFiles: labels?.tooManyFiles ?? t("tooManyFiles"),
    unsupportedFileType: labels?.unsupportedFileType ?? t("unsupportedFileType"),
    uploadFailed: labels?.uploadFailed ?? t("uploadFailed"),
    voiceMessage: labels?.voiceMessage ?? t("voiceMessage"),
    voiceMessageFailed: labels?.voiceMessageFailed ?? t("voiceMessageFailed"),
    you: labels?.you ?? t("you"),
  };
};

export default useChatLabels;
