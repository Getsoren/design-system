import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import {
  type ClipboardEvent,
  type ForwardedRef,
  forwardRef,
  type KeyboardEvent,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import ChatAttachmentTray from "@/components/DataDisplay/Chat/components/ChatAttachmentTray";
import ChatVoiceRecorder from "@/components/DataDisplay/Chat/components/ChatVoiceRecorder";
import { DEFAULT_ATTACHMENT_ACCEPT, DEFAULT_MAX_ATTACHMENT_SIZE, DEFAULT_MAX_ATTACHMENTS } from "@/components/DataDisplay/Chat/constants";
import useChatAttachmentUploads from "@/components/DataDisplay/Chat/hooks/useChatAttachmentUploads";
import useChatLabels from "@/components/DataDisplay/Chat/hooks/useChatLabels";
import type { ChatMessageInputHandle, ChatMessageInputProps } from "@/components/DataDisplay/Chat/types";
import createVoiceFile from "@/components/DataDisplay/Chat/utils/createVoiceFile";
import ArrowUpwardRoundedIcon from "@/components/DataDisplay/Icons/ArrowUpwardRoundedIcon";
import AttachFileIcon from "@/components/DataDisplay/Icons/AttachFileIcon";

const RADIUS = 15;
const COUNTER_VISIBLE_FROM = 40;

interface VoiceUpload {
  file: File;
  durationMs: number;
  status: "uploading" | "error";
}

const ChatMessageInput = (
  {
    onSend,
    labels,
    autoFocusKey,
    isSending,
    defaultMessage,
    startActions,
    slotProps,
    maxLength = 10000,
    onUploadAttachment,
    attachmentAccept = DEFAULT_ATTACHMENT_ACCEPT,
    maxAttachments = DEFAULT_MAX_ATTACHMENTS,
    maxAttachmentSize = DEFAULT_MAX_ATTACHMENT_SIZE,
    onLinkAttachment,
    enableVoiceMessages = true,
  }: ChatMessageInputProps,
  ref: ForwardedRef<ChatMessageInputHandle>,
) => {
  const [message, setMessage] = useState("");
  const [voiceUpload, setVoiceUpload] = useState<VoiceUpload | null>(null);
  // Bumped by every take and thread switch: a late upload result of a former one is dropped
  const voiceRequestRef = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const chatLabels = useChatLabels(labels);
  const uploads = useChatAttachmentUploads({ accept: attachmentAccept, maxAttachmentSize, maxAttachments, onUploadAttachment });
  // Files alone make a message; an upload still running blocks the send so nothing leaves half-way
  const canSend = (!!message.trim() || uploads.hasUploaded) && !isSending && !uploads.isUploading;

  useImperativeHandle(ref, () => ({ addFiles: uploads.addFiles }));

  /**
   * A voice message leaves on its own, right after its upload: empty body, the audio as its only attachment
   */
  const sendVoiceMessage = (file: File, durationMs: number) => {
    if (!onUploadAttachment) {
      return;
    }

    voiceRequestRef.current += 1;
    const request = voiceRequestRef.current;
    setVoiceUpload({ durationMs, file, status: "uploading" });

    onUploadAttachment(file, () => {})
      .then((attachment) => {
        if (request === voiceRequestRef.current) {
          setVoiceUpload(null);
          onSend("", [{ ...attachment, durationMs: attachment.durationMs ?? durationMs }]);
        }
      })
      .catch(() => {
        if (request === voiceRequestRef.current) {
          setVoiceUpload({ durationMs, file, status: "error" });
        }
      });
  };

  const handleSend = () => {
    if (!canSend) {
      return;
    }

    const attachments = uploads.takeUploaded();

    // Same call as before when there is no file, for the consumers asserting on the arguments
    if (attachments.length) {
      onSend(message.trim(), attachments);
    } else {
      onSend(message.trim());
    }
    setMessage("");
  };

  const handlePaste = (e: ClipboardEvent<HTMLDivElement>) => {
    const files = Array.from(e.clipboardData?.files ?? []);

    if (onUploadAttachment && files.length) {
      e.preventDefault();
      uploads.addFiles(files);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  /**
   * Sync message state when defaultMessage prop changes (e.g. pre-filled message on drawer open)
   */
  useEffect(() => {
    if (defaultMessage) {
      setMessage(defaultMessage);
    }
  }, [defaultMessage]);

  /**
   * Files are uploaded for one thread: switching thread drops the ones still in the composer
   */
  // biome-ignore lint/correctness/useExhaustiveDependencies: only the thread change matters
  useEffect(() => {
    uploads.clear();
    voiceRequestRef.current += 1;
    setVoiceUpload(null);
  }, [autoFocusKey]);

  return (
    <Box
      sx={{
        backgroundColor: "grey.A100",
        // The composer surface is as light as the message list: without this line the two merge.
        borderTop: ({ palette }) => `1px solid ${palette.divider}`,
        p: 2,
      }}
    >
      <ChatAttachmentTray
        items={uploads.items}
        rejectedFiles={uploads.rejectedFiles}
        labels={chatLabels}
        maxAttachments={maxAttachments}
        maxAttachmentSize={maxAttachmentSize}
        onRemove={uploads.remove}
        onRetry={uploads.retry}
        onLinkAttachment={onLinkAttachment}
        onLinked={uploads.setLink}
        voiceFailure={
          voiceUpload?.status === "error"
            ? { onDismiss: () => setVoiceUpload(null), onRetry: () => sendVoiceMessage(voiceUpload.file, voiceUpload.durationMs) }
            : null
        }
      />
      <TextField
        fullWidth
        multiline
        autoFocus
        key={autoFocusKey}
        inputRef={inputRef}
        maxRows={4}
        placeholder={labels?.writeAMessage ?? "Write a message..."}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        onPaste={handlePaste}
        slotProps={{ htmlInput: { maxLength } }}
        sx={{
          // body1 (16px) is a step above every other field: align the composer on body2 like the rest.
          "& .MuiInputBase-root": { fontSize: ({ typography }) => typography.body2.fontSize },
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": { borderColor: "divider" },
            "&.Mui-focused fieldset": {
              borderBottomWidth: 0,
              borderColor: "divider",
              borderLeftWidth: 1,
              borderRightWidth: 1,
              borderTopWidth: 1,
            },
          },
          fieldset: {
            borderBottom: 0,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            borderColor: "divider",
            borderTopLeftRadius: RADIUS,
            borderTopRightRadius: RADIUS,
          },
        }}
      />
      {/* The input fieldset draws the top and the sides, this bar the sides and the bottom: no top
          border here, so both merge into a single continuous pill outline. */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          border: ({ palette }) => `1px solid ${palette.divider}`,
          borderBottomLeftRadius: RADIUS,
          borderBottomRightRadius: RADIUS,
          borderTop: "none",
          padding: 1,
          paddingTop: 0,
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          {onUploadAttachment && (
            <>
              <Tooltip title={chatLabels.attachFile}>
                <IconButton
                  aria-label={chatLabels.attachFile}
                  onClick={() => fileInputRef.current?.click()}
                  data-test="chatAttachFile"
                  sx={{ height: 44, width: 44 }}
                >
                  <AttachFileIcon />
                </IconButton>
              </Tooltip>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                hidden
                accept={attachmentAccept}
                data-test="chatAttachFileInput"
                onChange={(e) => {
                  uploads.addFiles(Array.from(e.target.files ?? []));
                  // Picking the same file again after removing it must fire a new change
                  e.target.value = "";
                }}
              />
            </>
          )}
          {enableVoiceMessages && onUploadAttachment && (
            <ChatVoiceRecorder
              onRecorded={(audio, durationMs) => sendVoiceMessage(createVoiceFile(audio), durationMs)}
              isProcessing={voiceUpload?.status === "uploading"}
              disabled={isSending}
              labels={{ cancel: chatLabels.cancelRecording, record: chatLabels.recordVoiceMessage, send: chatLabels.sendVoiceMessage }}
            />
          )}
          {startActions}
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          {/* The counter only comes out near the limit: shown permanently it taught nothing, hidden
              entirely the input truncated silently. */}
          {message.length > maxLength - COUNTER_VISIBLE_FROM && (
            <Typography variant="caption" color={message.length >= maxLength ? "error.main" : "text.secondary"}>
              {message.length}/{maxLength}
            </Typography>
          )}
          {/* Send: an upward arrow, like the note field of an order. */}
          <IconButton
            {...slotProps?.sendButton}
            aria-label={labels?.send ?? "Send"}
            title={labels?.send ?? "Send"}
            onClick={handleSend}
            disabled={!canSend}
            sx={{
              "&:hover": { backgroundColor: "primary.dark" },
              "&.Mui-disabled": { backgroundColor: "action.disabledBackground", color: "action.disabled" },
              backgroundColor: "primary.main",
              borderRadius: 1.5,
              color: "primary.contrastText",
              height: 32,
              width: 32,
            }}
          >
            <ArrowUpwardRoundedIcon sx={{ fontSize: 18 }} />
          </IconButton>
        </Stack>
      </Stack>
      {/* Pass an empty string to hide the hint entirely (undefined keeps the default) */}
      {labels?.enterToSend !== "" && (
        <Typography variant="caption" color="text.secondary" display="block" textAlign="center" mt={0.5}>
          {labels?.enterToSend ?? "Enter to Send"}
        </Typography>
      )}
    </Box>
  );
};

export default forwardRef(ChatMessageInput);
