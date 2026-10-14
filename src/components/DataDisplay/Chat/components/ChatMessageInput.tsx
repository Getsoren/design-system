import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import type { Theme } from "@mui/material/styles";
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
import ChatLineIcon from "@/components/DataDisplay/Chat/components/ChatLineIcon";
import ChatPill from "@/components/DataDisplay/Chat/components/ChatPill";
import ChatQuickActionMenu from "@/components/DataDisplay/Chat/components/ChatQuickActionMenu";
import ChatVoiceMessage from "@/components/DataDisplay/Chat/components/ChatVoiceMessage";
import ChatVoiceRecorder from "@/components/DataDisplay/Chat/components/ChatVoiceRecorder";
import {
  DEFAULT_ATTACHMENT_ACCEPT,
  DEFAULT_MAX_ATTACHMENT_SIZE,
  DEFAULT_MAX_ATTACHMENTS,
  LINE_ICON_PATHS,
} from "@/components/DataDisplay/Chat/constants";
import useChatAttachmentUploads, { type ChatPendingAttachment } from "@/components/DataDisplay/Chat/hooks/useChatAttachmentUploads";
import useChatLabels from "@/components/DataDisplay/Chat/hooks/useChatLabels";
import type { ChatAttachment, ChatMessageInputHandle, ChatMessageInputProps } from "@/components/DataDisplay/Chat/types";
import createVoiceFile from "@/components/DataDisplay/Chat/utils/createVoiceFile";
import ArrowUpwardRoundedIcon from "@/components/DataDisplay/Icons/ArrowUpwardRoundedIcon";

// Concentric corners: the composer is rounded at 20px and its 40px buttons sit 9px from its outer edge (1px border
// + 8px padding), so they take 20 - 9 = 11px: the slightly square shape of the app's buttons, hugging its corners
const RADIUS = 20;
// Every icon of the bottom bar, in its own 40px cell
const ICON_SIZE = 20;
/**
 * The bottom bar's named tools ("Attach a file", "Actions"): outlined, at the buttons' concentric 11px, their icon in a
 * 40px cell as the icon buttons'; the label folds away on a phone
 */
const composerToolSx = (isActive: boolean) => ({
  "& [data-label]": { display: { sm: "inline", xs: "none" } },
  "&:hover": { backgroundColor: "action.hover", color: "text.primary" },
  backgroundColor: isActive ? "action.hover" : "transparent",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: INNER_RADIUS,
  color: isActive ? "text.primary" : "text.secondary",
  fontFamily: ({ typography }: Theme) => typography.fontFamily,
  fontSize: ({ typography }: Theme) => typography.body2.fontSize,
  fontWeight: 500,
  gap: 0.75,
  height: 40,
  minWidth: 0,
  pl: `${(40 - ICON_SIZE) / 2 - 1}px`,
  pr: { sm: 1.5, xs: `${(40 - ICON_SIZE) / 2 - 1}px` },
  whiteSpace: "nowrap",
});

// The bolt's outline length in its 24px grid (six strokes), for its draw-in
const BOLT_PATH_LENGTH = 61;
const BUTTON_INSET = 9;
const INNER_RADIUS = `${RADIUS - BUTTON_INSET}px`;
const composerIconSx = { "@media (hover: none)": { height: 44, width: 44 }, borderRadius: INNER_RADIUS, height: 40, width: 40 };
const COUNTER_VISIBLE_FROM = 40;

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
  const [voiceUpload, setVoiceUpload] = useState<VoiceUpload | null>(null);
  const [pendingVoice, setPendingVoice] = useState<PendingVoice | null>(null);
  // While recording, the recorder's validate button stands in the send slot
  const [isRecordingVoice, setIsRecordingVoice] = useState(false);
  // Bumped by every take and thread switch: a late upload result of a former one is dropped
  const voiceRequestRef = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [quickActionsAnchor, setQuickActionsAnchor] = useState<HTMLElement | null>(null);
  const hasQuickActions = !!quickActions?.length;
  const chatLabels = useChatLabels(labels);
  const uploads = useChatAttachmentUploads({ accept: attachmentAccept, maxAttachmentSize, maxAttachments, onUploadAttachment });
  // Files alone make a message; an upload still running blocks the send so nothing leaves half-way
  const canSend =
    (!!message.trim() || uploads.hasUploaded || !!pendingVoice) &&
    !isSending &&
    !uploads.isUploading &&
    voiceUpload?.status !== "uploading";
  // Fi and Noom-like: only offered on an empty composer
  const showQuickReplies = !!quickReplies?.length && !message && !uploads.items.length && !voiceUpload && !pendingVoice;

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

  useImperativeHandle(ref, () => ({ addFiles, focus: () => inputRef.current?.focus() }));

  /**
   * The validated take is uploaded on send, then leaves with the text and the files of the composer
   */
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

  /**
   * WhatsApp-like: validating a take stops it and keeps it in the composer, to listen to it before sending
   */
  const stageVoice = (audio: Blob, durationMs: number) => {
    const file = createVoiceFile(audio);

    setPendingVoice((previous) => {
      if (previous) {
        URL.revokeObjectURL(previous.preview.url);
      }

      return {
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
      };
    });
  };

  const discardVoice = () =>
    setPendingVoice((previous) => {
      if (previous) {
        URL.revokeObjectURL(previous.preview.url);
      }

      return null;
    });

  const handleSend = () => {
    if (!canSend) {
      return;
    }

    const attachments = uploads.takeUploaded();

    if (pendingVoice) {
      sendVoiceMessage(pendingVoice.file, pendingVoice.durationMs, message.trim(), attachments);
      discardVoice();
      setMessage("");
      return;
    }

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

    if (e.key === "Escape" && replyTo) {
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
    voiceRequestRef.current += 1;
    setVoiceUpload(null);
    discardVoice();
  }, [autoFocusKey]);

  return (
    // No band of its own: the composer floats on the conversation's background, as in ChatGPT, and the messages fade
    // out above it (see the message list's mask)
    <Box sx={{ p: 2 }}>
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
            ? {
                onDismiss: () => setVoiceUpload(null),
                onRetry: () => sendVoiceMessage(voiceUpload.file, voiceUpload.durationMs, voiceUpload.body, voiceUpload.attachments),
              }
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
          // The theme's field outline: a grey step above the divider, never black
          "&:focus-within": { borderColor: "border.outline" },
          backgroundColor: "background.paper",
          border: "1px solid",
          borderColor: "divider",
          borderRadius: `${RADIUS}px`,
          boxShadow: "0 2px 12px rgba(0, 0, 0, 0.06)",
          transition: "border-color 120ms",
        }}
      >
        {/* A validated take waits inside the white card, not above it: it is not sent yet */}
        {pendingVoice && (
          <Stack direction="row" alignItems="center" spacing={0.5} sx={{ m: 1, mb: 0 }} data-test="chatPendingVoice">
            <ChatVoiceMessage attachment={pendingVoice.preview} variant="composer" labels={chatLabels} />
            <Tooltip title={chatLabels.removeAttachment}>
              <IconButton
                aria-label={chatLabels.removeAttachment}
                onClick={discardVoice}
                sx={{ ...composerIconSx, color: "text.secondary" }}
              >
                <ChatLineIcon d={LINE_ICON_PATHS.trash} />
              </IconButton>
            </Tooltip>
          </Stack>
        )}
        {/* The message being answered, 9px inside the composer's corner (1px border + 8px): 20 - 9 = 11 */}
        {replyTo && (
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            data-test="chatComposerReply"
            sx={{
              backgroundColor: "action.hover",
              borderLeft: "3px solid",
              borderLeftColor: "text.secondary",
              borderRadius: INNER_RADIUS,
              m: 1,
              mb: 0,
              pl: 1.5,
              pr: 0.5,
              py: 0.75,
            }}
          >
            <Stack flex={1} minWidth={0}>
              <Typography variant="caption" fontWeight={600} noWrap>
                {replyTo.authorName}
              </Typography>
              <Typography variant="caption" color="text.secondary" noWrap>
                {replyTo.body}
              </Typography>
            </Stack>
            <IconButton aria-label={chatLabels.cancelReply} onClick={onCancelReply} sx={{ borderRadius: "8px", color: "text.secondary" }}>
              <ChatLineIcon d={LINE_ICON_PATHS.close} size={16} />
            </IconButton>
          </Stack>
        )}
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
          onChange={(e) => setMessage(e.target.value)}
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
            {onUploadAttachment && (
              <>
                <ButtonBase
                  aria-label={chatLabels.attachFile}
                  onClick={() => fileInputRef.current?.click()}
                  data-test="chatAttachFile"
                  sx={composerToolSx(false)}
                >
                  <ChatLineIcon d={LINE_ICON_PATHS.paperclip} size={ICON_SIZE} />
                  <span data-label>{chatLabels.attachFile}</span>
                </ButtonBase>
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
                    ...composerToolSx(!!quickActionsAnchor),
                    // A little life on the bolt: drawn once when the composer appears, a zap on hover
                    "@keyframes chatBoltDraw": { to: { strokeDashoffset: 0 } },
                    "@keyframes chatBoltZap": {
                      "0%, 100%": { transform: "rotate(0) scale(1)" },
                      "30%": { transform: "rotate(-12deg) scale(1.15)" },
                      "60%": { transform: "rotate(8deg) scale(1.1)" },
                    },
                    "@media (prefers-reduced-motion: reduce)": {
                      "& [data-bolt], & [data-bolt] path": { animation: "none", strokeDashoffset: 0 },
                    },
                    "& [data-bolt] path": {
                      animation: "chatBoltDraw 700ms ease-out 300ms forwards",
                      strokeDasharray: BOLT_PATH_LENGTH,
                      strokeDashoffset: BOLT_PATH_LENGTH,
                    },
                    "&:hover [data-bolt]": { animation: "chatBoltZap 420ms ease-in-out" },
                  }}
                >
                  {/* Order actions: a lightning bolt, not the AI assistant's spark */}
                  <ChatLineIcon d={LINE_ICON_PATHS.bolt} size={ICON_SIZE} data-bolt />
                  <span data-label>{chatLabels.moreActions}</span>
                  <ChatLineIcon
                    d={LINE_ICON_PATHS.chevronDown}
                    size={16}
                    sx={{ transform: quickActionsAnchor ? "rotate(180deg)" : "none", transition: "transform 150ms" }}
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
                onRecorded={stageVoice}
                onRecordingChange={setIsRecordingVoice}
                isProcessing={voiceUpload?.status === "uploading"}
                disabled={isSending}
                labels={{ cancel: chatLabels.cancelRecording, record: chatLabels.recordVoiceMessage, send: chatLabels.validateRecording }}
                buttonSx={composerIconSx}
              />
            )}
            {/* Send: a black button with an upward arrow, in the corner shape of the others; while recording, the
                recorder's validate button takes its place */}
            {!isRecordingVoice && (
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
