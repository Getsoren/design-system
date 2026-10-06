import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon";
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
import ChatPill from "@/components/DataDisplay/Chat/components/ChatPill";
import ChatQuickActionMenu from "@/components/DataDisplay/Chat/components/ChatQuickActionMenu";
import ChatVoiceRecorder from "@/components/DataDisplay/Chat/components/ChatVoiceRecorder";
import { DEFAULT_ATTACHMENT_ACCEPT, DEFAULT_MAX_ATTACHMENT_SIZE, DEFAULT_MAX_ATTACHMENTS } from "@/components/DataDisplay/Chat/constants";
import useChatAttachmentUploads, { type ChatPendingAttachment } from "@/components/DataDisplay/Chat/hooks/useChatAttachmentUploads";
import useChatLabels from "@/components/DataDisplay/Chat/hooks/useChatLabels";
import type { ChatMessageInputHandle, ChatMessageInputProps } from "@/components/DataDisplay/Chat/types";
import createVoiceFile from "@/components/DataDisplay/Chat/utils/createVoiceFile";
import ArrowUpwardRoundedIcon from "@/components/DataDisplay/Icons/ArrowUpwardRoundedIcon";
import ChevronIcon from "@/components/DataDisplay/Icons/ChevronIcon";
import PlusIcon from "@/components/DataDisplay/Icons/PlusIcon";

// Order actions: a lightning bolt, not the AI assistant's spark
const BoltIcon = (props: SvgIconProps) => (
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinejoin="round" />
  </SvgIcon>
);

// Rounded like ChatGPT's composer; its 40px round buttons sit 8px from the edge
const RADIUS = 24;
const composerIconSx = { "@media (hover: none)": { height: 44, width: 44 }, borderRadius: "50%", height: 40, width: 40 };
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
    linkAttachmentsOnAdd = true,
    quickActions,
    onQuickAction,
    quickReplies,
  }: ChatMessageInputProps,
  ref: ForwardedRef<ChatMessageInputHandle>,
) => {
  const [message, setMessage] = useState("");
  const [voiceUpload, setVoiceUpload] = useState<VoiceUpload | null>(null);
  // Bumped by every take and thread switch: a late upload result of a former one is dropped
  const voiceRequestRef = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [quickActionsAnchor, setQuickActionsAnchor] = useState<HTMLElement | null>(null);
  const hasQuickActions = !!quickActions?.length;
  const chatLabels = useChatLabels(labels);
  const uploads = useChatAttachmentUploads({ accept: attachmentAccept, maxAttachmentSize, maxAttachments, onUploadAttachment });
  // Files alone make a message; an upload still running blocks the send so nothing leaves half-way
  const canSend = (!!message.trim() || uploads.hasUploaded) && !isSending && !uploads.isUploading;
  // Fi and Noom-like: only offered on an empty composer
  const showQuickReplies = !!quickReplies?.length && !message && !uploads.items.length && !voiceUpload;

  // Files waiting for the link dialog, opened one at a time
  const linkQueueRef = useRef<ChatPendingAttachment[]>([]);
  const isLinkingRef = useRef(false);

  const promptLinks = async () => {
    if (isLinkingRef.current || !onLinkAttachment) {
      return;
    }

    isLinkingRef.current = true;

    while (linkQueueRef.current.length) {
      const [item] = linkQueueRef.current.splice(0, 1);
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
        uploads.setLink(item.key, link);
      } else {
        // "Later" on one file skips the rest of the batch: the link stays one click away on each card
        linkQueueRef.current = [];
      }
    }

    isLinkingRef.current = false;
  };

  const addFiles = (files: File[]) => {
    const accepted = uploads.addFiles(files);

    if (linkAttachmentsOnAdd && onLinkAttachment && accepted.length) {
      linkQueueRef.current.push(...accepted);
      void promptLinks();
    }
  };

  useImperativeHandle(ref, () => ({ addFiles }));

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
      addFiles(files);
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
      {showQuickReplies && (
        <Stack
          direction="row"
          spacing={1}
          role="group"
          aria-label={chatLabels.quickReplies}
          data-test="chatQuickReplies"
          sx={{ mb: 1, mt: -0.5, overflowX: "auto", py: 0.5 }}
        >
          {quickReplies.map((reply) => (
            <ChatPill key={reply} onClick={() => onSend(reply)} disabled={isSending}>
              {reply}
            </ChatPill>
          ))}
        </Stack>
      )}
      {/* ChatGPT-like composer: one rounded surface with a soft shadow, the field on top and its tools below */}
      <Box
        sx={{
          "&:focus-within": { borderColor: "text.disabled" },
          backgroundColor: "background.paper",
          border: "1px solid",
          borderColor: "divider",
          borderRadius: `${RADIUS}px`,
          boxShadow: "0 2px 12px rgba(0, 0, 0, 0.06)",
          transition: "border-color 120ms",
        }}
      >
        <TextField
          fullWidth
          multiline
          autoFocus
          key={autoFocusKey}
          inputRef={inputRef}
          maxRows={6}
          variant="standard"
          placeholder={labels?.writeAMessage ?? "Write a message..."}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          slotProps={{ htmlInput: { maxLength }, input: { disableUnderline: true } }}
          sx={{
            // body1 (16px) is a step above every other field: align the composer on body2 like the rest.
            "& .MuiInputBase-root": { fontSize: ({ typography }) => typography.body2.fontSize },
            pt: 1.75,
            px: 2,
          }}
        />
        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1} sx={{ pb: 1, pt: 0.5, px: 1 }}>
          <Stack direction="row" alignItems="center" spacing={0.5} minWidth={0}>
            {onUploadAttachment && (
              <>
                <Tooltip title={chatLabels.attachFile}>
                  <IconButton
                    aria-label={chatLabels.attachFile}
                    onClick={() => fileInputRef.current?.click()}
                    data-test="chatAttachFile"
                    sx={composerIconSx}
                  >
                    <PlusIcon />
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
                    addFiles(Array.from(e.target.files ?? []));
                    // Picking the same file again after removing it must fire a new change
                    e.target.value = "";
                  }}
                />
              </>
            )}
            {/* A named tool next to "+", as ChatGPT's and Codex's selectors: in sight without crowding the bar */}
            {hasQuickActions && (
              <>
                <ButtonBase
                  aria-haspopup="menu"
                  aria-expanded={!!quickActionsAnchor}
                  onClick={(e) => setQuickActionsAnchor(e.currentTarget)}
                  disabled={isSending}
                  data-test="chatQuickActions"
                  sx={{
                    "&:hover": { backgroundColor: "action.hover", color: "text.primary" },
                    borderRadius: 999,
                    color: quickActionsAnchor ? "text.primary" : "text.secondary",
                    fontFamily: ({ typography }) => typography.fontFamily,
                    fontSize: ({ typography }) => typography.body2.fontSize,
                    fontWeight: 500,
                    gap: 0.75,
                    height: 40,
                    minWidth: 0,
                    px: 1.5,
                    whiteSpace: "nowrap",
                    ...(quickActionsAnchor && { backgroundColor: "action.hover" }),
                  }}
                >
                  <BoltIcon sx={{ fontSize: 18 }} />
                  {chatLabels.moreActions}
                  <ChevronIcon
                    sx={{ fontSize: 16, transform: quickActionsAnchor ? "rotate(180deg)" : "none", transition: "transform 150ms" }}
                  />
                </ButtonBase>
                <ChatQuickActionMenu
                  anchorEl={quickActionsAnchor}
                  onClose={() => setQuickActionsAnchor(null)}
                  actions={quickActions}
                  onAction={(actionId) => onQuickAction?.(actionId)}
                  labels={chatLabels}
                />
              </>
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
                onRecorded={(audio, durationMs) => sendVoiceMessage(createVoiceFile(audio), durationMs)}
                isProcessing={voiceUpload?.status === "uploading"}
                disabled={isSending}
                labels={{ cancel: chatLabels.cancelRecording, record: chatLabels.recordVoiceMessage, send: chatLabels.sendVoiceMessage }}
              />
            )}
            {/* Send: a black round button with an upward arrow, as ChatGPT */}
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
