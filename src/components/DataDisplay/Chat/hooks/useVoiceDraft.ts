import { useRef, useState } from "react";
import type { ChatAttachment, ChatMessageInputProps } from "@/components/DataDisplay/Chat/types";
import createVoiceFile from "@/components/DataDisplay/Chat/utils/createVoiceFile";

interface VoiceUpload {
  file: File;
  durationMs: number;
  /** The text and files sent with it, kept for a retry */
  body: string;
  attachments: ChatAttachment[];
  status: "uploading" | "error";
}

/** A validated take waiting in the composer: listened to, removed or sent */
interface PendingVoice {
  file: File;
  durationMs: number;
  preview: ChatAttachment;
}

/**
 * WhatsApp-like voice message: validating a take keeps it in the composer to listen to it, it is uploaded on send and
 * leaves with the text and the files of the composer
 */
const useVoiceDraft = ({ onUploadAttachment, onSend }: Pick<ChatMessageInputProps, "onUploadAttachment" | "onSend">) => {
  const [voiceUpload, setVoiceUpload] = useState<VoiceUpload | null>(null);
  const [pendingVoice, setPendingVoice] = useState<PendingVoice | null>(null);
  // While recording, the recorder's validate button stands in the send slot
  const [isRecordingVoice, setIsRecordingVoice] = useState(false);
  // Bumped by every take and thread switch: a late upload result of a former one is dropped
  const voiceRequestRef = useRef(0);

  const sendVoiceMessage = (file: File, durationMs: number, body = "", attachments: ChatAttachment[] = []) => {
    if (!onUploadAttachment) {
      return;
    }

    voiceRequestRef.current += 1;
    const request = voiceRequestRef.current;
    setVoiceUpload({ attachments, body, durationMs, file, status: "uploading" });

    onUploadAttachment(file, () => {})
      .then((attachment) => {
        if (request === voiceRequestRef.current) {
          setVoiceUpload(null);
          onSend(body, [...attachments, { ...attachment, durationMs: attachment.durationMs ?? durationMs }]);
        }
      })
      .catch(() => {
        if (request === voiceRequestRef.current) {
          setVoiceUpload({ attachments, body, durationMs, file, status: "error" });
        }
      });
  };

  const discardVoice = () =>
    setPendingVoice((previous) => {
      if (previous) {
        URL.revokeObjectURL(previous.preview.url);
      }

      return null;
    });

  const stageVoice = (audio: Blob, durationMs: number) => {
    const file = createVoiceFile(audio);

    discardVoice();
    setPendingVoice({
      durationMs,
      file,
      preview: {
        durationMs,
        fileName: file.name,
        id: `voice-${Date.now()}`,
        mimeType: file.type,
        size: file.size,
        url: URL.createObjectURL(file),
      },
    });
  };

  // The pending take leaves with the text and the files
  const sendPendingVoice = (body: string, attachments: ChatAttachment[]) => {
    if (pendingVoice) {
      sendVoiceMessage(pendingVoice.file, pendingVoice.durationMs, body, attachments);
      discardVoice();
    }
  };

  return {
    discardVoice,
    isRecordingVoice,
    pendingVoice,
    // Another thread: a late upload result is dropped
    resetVoice: () => {
      voiceRequestRef.current += 1;
      setVoiceUpload(null);
      discardVoice();
    },
    retryVoice: () => voiceUpload && sendVoiceMessage(voiceUpload.file, voiceUpload.durationMs, voiceUpload.body, voiceUpload.attachments),
    sendPendingVoice,
    setIsRecordingVoice,
    setVoiceUpload,
    stageVoice,
    voiceUpload,
  };
};

export default useVoiceDraft;
