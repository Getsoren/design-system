import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
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
import ChatAttachButton from "@/components/DataDisplay/Chat/components/ChatAttachButton";
import ChatAttachmentTray from "@/components/DataDisplay/Chat/components/ChatAttachmentTray";
import ChatComposerAttachments from "@/components/DataDisplay/Chat/components/ChatComposerAttachments";
import ChatComposerReply from "@/components/DataDisplay/Chat/components/ChatComposerReply";
import ChatQuickActionsButton from "@/components/DataDisplay/Chat/components/ChatQuickActionsButton";
import ChatQuickReplies from "@/components/DataDisplay/Chat/components/ChatQuickReplies";
import ChatVoiceMessage from "@/components/DataDisplay/Chat/components/ChatVoiceMessage";
import ChatVoiceRecorder from "@/components/DataDisplay/Chat/components/ChatVoiceRecorder";
import { DEFAULT_ATTACHMENT_ACCEPT, DEFAULT_MAX_ATTACHMENT_SIZE, DEFAULT_MAX_ATTACHMENTS } from "@/components/DataDisplay/Chat/constants";
import useAttachmentLinkQueue from "@/components/DataDisplay/Chat/hooks/useAttachmentLinkQueue";
import useChatAttachmentUploads from "@/components/DataDisplay/Chat/hooks/useChatAttachmentUploads";
import useChatLabels from "@/components/DataDisplay/Chat/hooks/useChatLabels";
import useVoiceDraft from "@/components/DataDisplay/Chat/hooks/useVoiceDraft";
import type { ChatMessageInputHandle, ChatMessageInputProps } from "@/components/DataDisplay/Chat/types";
import { COMPOSER_RADIUS, composerIconSx } from "@/components/DataDisplay/Chat/utils/composerSx";
import ArrowUpwardRoundedIcon from "@/components/DataDisplay/Icons/ArrowUpwardRoundedIcon";

const COUNTER_VISIBLE_FROM = 40;

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
    linkAttachmentsOnAdd = true,
    quickActions,
    onQuickAction,
    quickReplies,
    replyTo,
    onCancelReply,
  }: ChatMessageInputProps,
  ref: ForwardedRef<ChatMessageInputHandle>,
) => {
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const chatLabels = useChatLabels(labels);
  const uploads = useChatAttachmentUploads({ accept: attachmentAccept, maxAttachmentSize, maxAttachments, onUploadAttachment });
  const promptLinks = useAttachmentLinkQueue(linkAttachmentsOnAdd ? onLinkAttachment : undefined, uploads.setLink);
  const voice = useVoiceDraft({ onSend, onUploadAttachment });
  // Files alone make a message; an upload still running blocks the send so nothing leaves half-way
  const canSend =
    (!!message.trim() || uploads.hasUploaded || !!voice.pendingVoice) &&
    !isSending &&
    !uploads.isUploading &&
    voice.voiceUpload?.status !== "uploading";

  const addFiles = (files: File[]) => promptLinks(uploads.addFiles(files));

  useImperativeHandle(ref, () => ({ addFiles, focus: () => inputRef.current?.focus() }));

  const handleSend = () => {
    if (!canSend) {
      return;
    }

    const attachments = uploads.takeUploaded();

    if (voice.pendingVoice) {
      voice.sendPendingVoice(message.trim(), attachments);
    } else if (attachments.length) {
      onSend(message.trim(), attachments);
    } else {
      // Same call as before when there is no file, for the consumers asserting on the arguments
      onSend(message.trim());
    }

    setMessage("");
  };

  const handlePaste = (event: ClipboardEvent<HTMLDivElement>) => {
    const files = Array.from(event.clipboardData?.files ?? []);

    if (onUploadAttachment && files.length) {
      event.preventDefault();
      addFiles(files);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }

    if (event.key === "Escape" && replyTo) {
      onCancelReply?.();
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
    voice.resetVoice();
  }, [autoFocusKey]);

  return (
    // No band of its own: the composer floats on the conversation's background, as in ChatGPT, and the messages fade
    // out above it (see the message list's mask)
    <Box sx={{ p: 2 }}>
      <ChatAttachmentTray
        rejectedFiles={uploads.rejectedFiles}
        labels={chatLabels}
        maxAttachments={maxAttachments}
        maxAttachmentSize={maxAttachmentSize}
        voiceFailure={
          voice.voiceUpload?.status === "error" ? { onDismiss: () => voice.setVoiceUpload(null), onRetry: voice.retryVoice } : null
        }
      />
      {/* Fi and Noom-like: only offered on an empty composer */}
      {!!quickReplies?.length && !message && !uploads.items.length && !voice.voiceUpload && !voice.pendingVoice && (
        <ChatQuickReplies replies={quickReplies} label={chatLabels.quickReplies} disabled={isSending} onSend={(reply) => onSend(reply)} />
      )}
      {/* ChatGPT-like composer: one rounded surface with a soft shadow, the field on top and its tools below */}
      <Box
        sx={{
          // The theme's field outline: a grey step above the divider, never black
          "&:focus-within": { borderColor: "border.outline" },
          backgroundColor: "background.paper",
          border: "1px solid",
          borderColor: "divider",
          borderRadius: `${COMPOSER_RADIUS}px`,
          boxShadow: "0 2px 12px rgba(0, 0, 0, 0.06)",
          transition: "border-color 120ms",
        }}
      >
        {/* The files about to be sent, inside the white card as ChatGPT's and Claude's */}
        <ChatComposerAttachments
          items={uploads.items}
          labels={chatLabels}
          onRemove={uploads.remove}
          onRetry={uploads.retry}
          onLinkAttachment={onLinkAttachment}
          onLinked={uploads.setLink}
        />
        {/* A validated take waits inside the white card, not above it: it is not sent yet */}
        {voice.pendingVoice && (
          <Box sx={{ m: 1, mb: 0 }} data-test="chatPendingVoice">
            <ChatVoiceMessage
              attachment={voice.pendingVoice.preview}
              variant="composer"
              labels={chatLabels}
              onRemove={voice.discardVoice}
              removeLabel={chatLabels.removeAttachment}
            />
          </Box>
        )}
        {replyTo && <ChatComposerReply reply={replyTo} cancelLabel={chatLabels.cancelReply} onCancel={onCancelReply} />}
        <TextField
          fullWidth
          multiline
          autoFocus
          key={autoFocusKey}
          inputRef={inputRef}
          minRows={2}
          maxRows={8}
          variant="standard"
          placeholder={labels?.writeAMessage ?? "Write a message..."}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          slotProps={{ htmlInput: { maxLength }, input: { disableUnderline: true } }}
          sx={{
            // body1 (16px) is a step above every other field: align the composer on body2 like the rest.
            "& .MuiInputBase-root": { fontSize: ({ typography }) => typography.body2.fontSize },
            // A real space to type, as in Dia's or ChatGPT's composer: two lines from the start, the tools under it
            pb: 1,
            pt: 2,
            px: 2.25,
          }}
        />
        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1} sx={{ pb: 1, pt: 0.5, px: 1 }}>
          <Stack direction="row" alignItems="center" spacing={1} minWidth={0}>
            {onUploadAttachment && <ChatAttachButton label={chatLabels.attachFile} accept={attachmentAccept} onFiles={addFiles} />}
            {!!quickActions?.length && (
              <ChatQuickActionsButton actions={quickActions} labels={chatLabels} disabled={isSending} onAction={onQuickAction} />
            )}
            {startActions}
          </Stack>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            {/* The counter only comes out near the limit: shown permanently it taught nothing, hidden
                entirely the input truncated silently. */}
            {message.length > maxLength - COUNTER_VISIBLE_FROM && (
              <Typography variant="caption" color={message.length >= maxLength ? "error.main" : "text.secondary"}>
                {message.length}/{maxLength}
              </Typography>
            )}
            {enableVoiceMessages && onUploadAttachment && (
              <ChatVoiceRecorder
                onRecorded={voice.stageVoice}
                onRecordingChange={voice.setIsRecordingVoice}
                isProcessing={voice.voiceUpload?.status === "uploading"}
                disabled={isSending}
                labels={{ cancel: chatLabels.cancelRecording, record: chatLabels.recordVoiceMessage, send: chatLabels.validateRecording }}
                buttonSx={composerIconSx}
              />
            )}
            {/* Send: a black button with an upward arrow, in the corner shape of the others; while recording, the
                recorder's validate button takes its place */}
            {!voice.isRecordingVoice && (
              <IconButton
                {...slotProps?.sendButton}
                aria-label={labels?.send ?? "Send"}
                title={labels?.send ?? "Send"}
                onClick={handleSend}
                disabled={!canSend}
                sx={{
                  ...composerIconSx,
                  "&:hover": { backgroundColor: "primary.dark" },
                  "&.Mui-disabled": { backgroundColor: "action.disabledBackground", color: "action.disabled" },
                  backgroundColor: "primary.main",
                  color: "primary.contrastText",
                }}
              >
                <ArrowUpwardRoundedIcon sx={{ fontSize: 20 }} />
              </IconButton>
            )}
          </Stack>
        </Stack>
      </Box>
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
