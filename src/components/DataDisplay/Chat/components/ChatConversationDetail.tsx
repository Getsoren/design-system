import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useRef, useState } from "react";
import ChatComposerNotice from "@/components/DataDisplay/Chat/components/ChatComposerNotice";
import ChatConversationDetailHeader from "@/components/DataDisplay/Chat/components/ChatConversationDetailHeader";
import ChatDayDivider from "@/components/DataDisplay/Chat/components/ChatDayDivider";
import ChatDropOverlay from "@/components/DataDisplay/Chat/components/ChatDropOverlay";
import ChatEventGroup from "@/components/DataDisplay/Chat/components/ChatEventGroup";
import ChatMessageBubble from "@/components/DataDisplay/Chat/components/ChatMessageBubble";
import ChatMessageInput from "@/components/DataDisplay/Chat/components/ChatMessageInput";
import ChatMessagesFilter, { type ChatMessagesFilterValue } from "@/components/DataDisplay/Chat/components/ChatMessagesFilter";
import ChatReadOnlyBar from "@/components/DataDisplay/Chat/components/ChatReadOnlyBar";
import ChatScrollToLatest from "@/components/DataDisplay/Chat/components/ChatScrollToLatest";
import ChatUnreadDivider from "@/components/DataDisplay/Chat/components/ChatUnreadDivider";
import useChatLabels from "@/components/DataDisplay/Chat/hooks/useChatLabels";
import useChatReply from "@/components/DataDisplay/Chat/hooks/useChatReply";
import useChatScroll from "@/components/DataDisplay/Chat/hooks/useChatScroll";
import useFileDrop from "@/components/DataDisplay/Chat/hooks/useFileDrop";
import useUnreadMarker from "@/components/DataDisplay/Chat/hooks/useUnreadMarker";
import type { ChatAttachment, ChatConversationDetailProps, ChatMessage, ChatMessageInputHandle } from "@/components/DataDisplay/Chat/types";
import defaultFormatDayLabel from "@/components/DataDisplay/Chat/utils/formatDayLabel";
import { getRowGap, type MessageRow, toRows } from "@/components/DataDisplay/Chat/utils/messageRows";
import ChatBubbleIcon from "@/components/DataDisplay/Icons/ChatBubbleIcon";
import Button from "@/components/Inputs/Button/Button";

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
  formatDayLabel = defaultFormatDayLabel,
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
  linkAttachmentsOnAdd,
  showReadReceipts,
  eventsFilter = true,
  quickActions,
  onQuickAction,
  onActionResponse,
  readOnly,
  quickReplies,
  unreadCount,
  composerNotice,
  subtitle,
}: ChatConversationDetailProps) => {
  const [filter, setFilter] = useState<{ threadId?: string; value: ChatMessagesFilterValue }>({ value: "all" });
  const messageInputRef = useRef<ChatMessageInputHandle>(null);
  const chatLabels = useChatLabels(labels);
  const showFilter = eventsFilter && !!messages?.some(({ event }) => event);
  // Back to "All" on another thread
  const activeFilter = showFilter && filter.threadId === threadId ? filter.value : "all";
  const visibleMessages =
    activeFilter === "all" ? (messages ?? []) : (messages ?? []).filter(({ event }) => !!event === (activeFilter === "updates"));
  const unreadMessageId = useUnreadMarker({ currentUserId, isLoading, messages, threadId, unreadCount });
  const { activeReply, cancelReply, startReply } = useChatReply({
    currentUserId,
    formatParticipantName,
    labels: chatLabels,
    participants,
    threadId,
  });
  const { handleScroll, isAwayFromBottom, jumpToMessage, lastMessage, scrollContainerRef, scrollToBottom, unseenCount } = useChatScroll({
    currentUserId,
    isLoading,
    messages,
    view: `${threadId}:${activeFilter}`,
  });
  // Files dropped anywhere on the conversation join the composer
  const { isDraggingFiles, dropZoneProps } = useFileDrop(
    onUploadAttachment && !readOnly ? (files) => messageInputRef.current?.addFiles(files) : undefined,
  );

  const handleReply = (message: ChatMessage) => {
    startReply(message);
    messageInputRef.current?.focus();
  };

  // Without files nor quote, the exact same call as before: (threadId, body)
  const handleSend = (body: string, attachments?: ChatAttachment[]) => {
    if (!threadId) {
      return;
    }

    if (activeReply) {
      onSendMessage(threadId, body, attachments, activeReply);
      cancelReply();
    } else if (attachments) {
      onSendMessage(threadId, body, attachments);
    } else {
      onSendMessage(threadId, body);
    }
  };

  const renderMessage = (message: ChatMessage, position?: Pick<MessageRow, "isFirstInGroup" | "isLastInGroup">) => (
    <ChatMessageBubble
      onReply={readOnly || message.event ? undefined : handleReply}
      onJumpToMessage={jumpToMessage}
      isFirstInGroup={position?.isFirstInGroup}
      isLastInGroup={position?.isLastInGroup}
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
      showReadReceipts={showReadReceipts}
      onActionResponse={onActionResponse}
    />
  );

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
        readOnly={!!readOnly}
        subtitle={subtitle}
      />
      {showFilter && !isLoading && (
        <ChatMessagesFilter value={activeFilter} labels={chatLabels} onChange={(value) => setFilter({ threadId, value })} />
      )}
      {/* Holds the floating "latest messages" button over the list, outside its fading mask */}
      <Box sx={{ display: "flex", flex: 1, flexDirection: "column", minHeight: 0, position: "relative" }}>
        <Box
          ref={scrollContainerRef}
          onScroll={handleScroll}
          data-test="chatMessages"
          sx={{
            flex: 1,
            // Messages fade out over the last 16px instead of being cut by a line: at rest only the bottom padding is there
            maskImage: "linear-gradient(to bottom, #000 calc(100% - 16px), transparent)",
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
            <Stack>
              {toRows(visibleMessages, activeFilter === "all").map((row, index) => (
                <Stack key={row.messages[0].id} spacing={2} sx={{ mt: getRowGap(row, index) }}>
                  {row.messages[0].id === unreadMessageId && <ChatUnreadDivider label={chatLabels.newMessages} />}
                  {row.showDayDivider && <ChatDayDivider label={formatDayLabel(row.messages[0].createdAt)} />}
                  {row.messages.length > 1 ? (
                    <ChatEventGroup messages={row.messages} label={chatLabels.orderUpdates} renderEvent={renderMessage} />
                  ) : (
                    renderMessage(row.messages[0], row)
                  )}
                </Stack>
              ))}
            </Stack>
          )}
        </Box>
        {(isAwayFromBottom || unseenCount > 0) && (
          <ChatScrollToLatest label={chatLabels.scrollToLatest} unseenCount={unseenCount} onClick={() => scrollToBottom("smooth")} />
        )}
      </Box>
      {composerNotice && !readOnly && <ChatComposerNotice>{composerNotice}</ChatComposerNotice>}
      {readOnly ? (
        <ChatReadOnlyBar readOnly={readOnly} actionLabel={readOnly.actionLabel ?? chatLabels.joinConversation} />
      ) : (
        <ChatMessageInput
          ref={messageInputRef}
          onSend={handleSend}
          replyTo={activeReply}
          onCancelReply={cancelReply}
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
          linkAttachmentsOnAdd={linkAttachmentsOnAdd}
          quickActions={quickActions}
          onQuickAction={onQuickAction}
          // Something to answer: the last message comes from someone else
          quickReplies={lastMessage && lastMessage.authorId !== currentUserId ? quickReplies : undefined}
        />
      )}
      {isDraggingFiles && <ChatDropOverlay label={chatLabels.dropFilesHere} />}
    </Stack>
  );
};

export default ChatConversationDetail;
