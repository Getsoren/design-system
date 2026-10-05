import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useEffect, useRef } from "react";
import ChatConversationDetailHeader from "@/components/DataDisplay/Chat/components/ChatConversationDetailHeader";
import ChatDropOverlay from "@/components/DataDisplay/Chat/components/ChatDropOverlay";
import ChatMessageBubble from "@/components/DataDisplay/Chat/components/ChatMessageBubble";
import ChatMessageInput from "@/components/DataDisplay/Chat/components/ChatMessageInput";
import useChatLabels from "@/components/DataDisplay/Chat/hooks/useChatLabels";
import useFileDrop from "@/components/DataDisplay/Chat/hooks/useFileDrop";
import type { ChatConversationDetailProps, ChatMessageInputHandle } from "@/components/DataDisplay/Chat/types";
import ensureUtc from "@/components/DataDisplay/Chat/utils/ensureUtc";
import ChatBubbleIcon from "@/components/DataDisplay/Icons/ChatBubbleIcon";
import Button from "@/components/Inputs/Button/Button";

const defaultFormatDayLabel = (date: string): string => {
  const d = new Date(ensureUtc(date));
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  const dayStart = new Date(d);
  dayStart.setHours(0, 0, 0, 0);

  if (dayStart.getTime() === today.getTime()) {
    return "Today";
  }

  if (dayStart.getTime() === yesterday.getTime()) {
    return "Yesterday";
  }

  return d.toLocaleDateString(undefined, { day: "numeric", month: "long", weekday: "long" });
};

// Within this distance of the bottom, the reader counts as following the conversation
const STICK_TO_BOTTOM_THRESHOLD_PX = 80;

const isSameDay = (a: string, b: string): boolean => {
  const da = new Date(ensureUtc(a));
  const db = new Date(ensureUtc(b));
  return da.getFullYear() === db.getFullYear() && da.getMonth() === db.getMonth() && da.getDate() === db.getDate();
};

const ChatConversationDetail = ({
  threadId,
  participants,
  isLoading,
  messages,
  currentUserId,
  onDeleteConversation,
  onNewConversation,
  onSendMessage,
  onAddParticipants,
  onSearchParticipants,
  searchResults,
  isSearchingParticipants,
  avatarSrcResolver,
  renderAfterBubble,
  labels,
  formatDayLabel,
  isSending,
  formatParticipantName,
  headerAction,
  defaultMessage,
  onAddParticipantDialogOpenChange,
  messageMaxLength,
  slotProps,
  onBack,
  onUploadAttachment,
  attachmentAccept,
  maxAttachments,
  maxAttachmentSize,
  onLinkAttachment,
  onToggleReaction,
  quickReactions,
  enableVoiceMessages,
}: ChatConversationDetailProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const previousThreadIdRef = useRef<string | undefined>(undefined);
  const isAtBottomRef = useRef(true);
  const messageInputRef = useRef<ChatMessageInputHandle>(null);
  const chatLabels = useChatLabels(labels);
  // Files dropped anywhere on the conversation join the composer
  const { isDraggingFiles, dropZoneProps } = useFileDrop(
    onUploadAttachment ? (files) => messageInputRef.current?.addFiles(files) : undefined,
  );

  const getDayLabel = formatDayLabel ?? defaultFormatDayLabel;

  /**
   * Auto-scroll to the bottom of the conversation when a message arrives. Keyed on the last message rather than
   * the array: a reaction or a link on an older message must not pull the reader down.
   */
  const lastMessageId = messages?.[messages.length - 1]?.id;

  // biome-ignore lint/correctness/useExhaustiveDependencies: the last message stands for the list
  useEffect(() => {
    if (!messages || isLoading) {
      return;
    }

    const isNewThread = previousThreadIdRef.current !== threadId;
    previousThreadIdRef.current = threadId;
    isAtBottomRef.current = true;

    scrollContainerRef.current?.scrollTo({ behavior: isNewThread ? "instant" : "smooth", top: scrollContainerRef.current.scrollHeight });
  }, [lastMessageId, messages?.length, threadId, isLoading]);

  const handleScroll = () => {
    const container = scrollContainerRef.current;

    if (container) {
      isAtBottomRef.current = container.scrollHeight - container.scrollTop - container.clientHeight <= STICK_TO_BOTTOM_THRESHOLD_PX;
    }
  };

  /**
   * Stick to the bottom: a reaction, a link pill, an image that loads or the composer tray that grows must not hide
   * the end of the conversation from a reader who was there. A reader up in the history is left where they are.
   */
  // biome-ignore lint/correctness/useExhaustiveDependencies: the observed elements change with the thread and the loading state
  useEffect(() => {
    const container = scrollContainerRef.current;
    const content = container?.firstElementChild;

    if (!container || typeof ResizeObserver === "undefined") {
      return;
    }

    const observer = new ResizeObserver(() => {
      if (isAtBottomRef.current) {
        container.scrollTop = container.scrollHeight;
      }
    });

    observer.observe(container);

    if (content) {
      observer.observe(content);
    }

    return () => observer.disconnect();
  }, [threadId, isLoading]);

  if (!threadId && isLoading) {
    return (
      <Stack data-chat-pane="detail" data-selected={false} flex={1} alignItems="center" justifyContent="center">
        <Skeleton variant="circular" width={48} height={48} sx={{ mb: 2 }} />
        <Skeleton variant="text" width={200} />
        <Skeleton variant="rounded" width={140} height={36} sx={{ borderRadius: 2, mt: 2 }} />
      </Stack>
    );
  }

  if (!threadId) {
    return (
      <Stack data-chat-pane="detail" data-selected={false} flex={1} alignItems="center" justifyContent="center" spacing={2}>
        <ChatBubbleIcon sx={{ color: "text.secondary", fontSize: 48 }} />
        <Typography variant="body1" color="text.secondary">
          {labels?.createYourFirstConversation ?? "Create your first conversation"}
        </Typography>
        <Button {...slotProps?.newConversationButton} variant="contained" onClick={onNewConversation}>
          {labels?.newConversation ?? "New Conversation"}
        </Button>
      </Stack>
    );
  }

  return (
    <Stack
      data-chat-pane="detail"
      data-selected
      flex={1}
      height="100%"
      minWidth={{ sm: 300, xs: 0 }}
      position="relative"
      {...dropZoneProps}
    >
      <ChatConversationDetailHeader
        threadId={threadId}
        onBack={onBack}
        participants={participants}
        onDeleteConversation={onDeleteConversation}
        onAddParticipants={onAddParticipants}
        onSearchParticipants={onSearchParticipants}
        searchResults={searchResults}
        isSearchingParticipants={isSearchingParticipants}
        avatarSrcResolver={avatarSrcResolver}
        labels={labels}
        formatParticipantName={formatParticipantName}
        headerAction={headerAction}
        onAddParticipantDialogOpenChange={onAddParticipantDialogOpenChange}
        slotProps={slotProps}
      />
      <Box
        ref={scrollContainerRef}
        onScroll={handleScroll}
        data-test="chatMessages"
        sx={{
          flex: 1,
          overflowY: "auto",
          // Containing block of the floating reaction bars: they scroll with the messages and are clipped by this area
          position: "relative",
          px: 3,
          py: 2,
        }}
      >
        {isLoading ? (
          <Stack spacing={3}>
            {Array.from({ length: 4 }, (_, i) => (
              <Stack key={i} alignItems={i % 2 === 0 ? "flex-start" : "flex-end"} spacing={0.5}>
                <Skeleton variant="rounded" width="40%" height={48} sx={{ borderRadius: 2 }} />
                <Skeleton variant="text" width={60} />
              </Stack>
            ))}
          </Stack>
        ) : (
          <Stack spacing={3}>
            {messages?.map((message, index) => {
              const previousMessage = messages[index - 1];
              const showDayDivider = !(previousMessage && isSameDay(message.createdAt, previousMessage.createdAt));

              return (
                <Stack key={message.id} spacing={3}>
                  {showDayDivider && (
                    // Centered pill rather than a full-width line: the ::before/::after keep their
                    // flex (centering) but lose their line.
                    <Divider
                      sx={{
                        "& .MuiDivider-wrapper": {
                          alignItems: "center",
                          backgroundColor: "background.paper",
                          border: "1px solid",
                          borderColor: "divider",
                          borderRadius: 999,
                          display: "flex",
                          paddingX: 1.5,
                          paddingY: 0.75,
                        },
                        "&::after": { borderTop: "none" },
                        "&::before": { borderTop: "none" },
                      }}
                    >
                      {/* lineHeight 1: the tall caption line height (1.66) pushes the text below the optical center. */}
                      <Typography variant="caption" color="text.secondary" lineHeight={1}>
                        {getDayLabel(message.createdAt)}
                      </Typography>
                    </Divider>
                  )}
                  <ChatMessageBubble
                    message={message}
                    isOwn={message.authorId === currentUserId}
                    participants={participants}
                    avatarSrcResolver={avatarSrcResolver}
                    renderAfterBubble={renderAfterBubble ? (urls) => renderAfterBubble(message, urls) : undefined}
                    currentUserId={currentUserId}
                    formatParticipantName={formatParticipantName}
                    onLinkAttachment={onLinkAttachment}
                    onToggleReaction={onToggleReaction}
                    quickReactions={quickReactions}
                    labels={chatLabels}
                  />
                </Stack>
              );
            })}
          </Stack>
        )}
      </Box>
      <ChatMessageInput
        ref={messageInputRef}
        // Without files, the exact same call as before: (threadId, body)
        onSend={(body, attachments) => (attachments ? onSendMessage(threadId, body, attachments) : onSendMessage(threadId, body))}
        labels={{ ...chatLabels, enterToSend: labels?.enterToSend, send: labels?.send, writeAMessage: labels?.writeAMessage }}
        autoFocusKey={threadId}
        isSending={isSending}
        defaultMessage={defaultMessage}
        maxLength={messageMaxLength}
        slotProps={slotProps}
        onUploadAttachment={onUploadAttachment}
        attachmentAccept={attachmentAccept}
        maxAttachments={maxAttachments}
        maxAttachmentSize={maxAttachmentSize}
        onLinkAttachment={onLinkAttachment}
        enableVoiceMessages={enableVoiceMessages}
      />
      {isDraggingFiles && <ChatDropOverlay label={chatLabels.dropFilesHere} />}
    </Stack>
  );
};

export default ChatConversationDetail;
