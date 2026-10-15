import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useRef, useState } from "react";
import ChatConversationDetailHeader from "@/components/DataDisplay/Chat/components/ChatConversationDetailHeader";
import ChatDropOverlay from "@/components/DataDisplay/Chat/components/ChatDropOverlay";
import ChatEventGroup from "@/components/DataDisplay/Chat/components/ChatEventGroup";
import ChatLineIcon from "@/components/DataDisplay/Chat/components/ChatLineIcon";
import ChatMessageBubble from "@/components/DataDisplay/Chat/components/ChatMessageBubble";
import ChatMessageInput from "@/components/DataDisplay/Chat/components/ChatMessageInput";
import ChatPill from "@/components/DataDisplay/Chat/components/ChatPill";
import ChatReadOnlyBar from "@/components/DataDisplay/Chat/components/ChatReadOnlyBar";
import { CHAT_HEADER_HEIGHT, LINE_ICON_PATHS } from "@/components/DataDisplay/Chat/constants";
import useChatLabels from "@/components/DataDisplay/Chat/hooks/useChatLabels";
import useFileDrop from "@/components/DataDisplay/Chat/hooks/useFileDrop";
import type {
  ChatConversationDetailProps,
  ChatMessage,
  ChatMessageInputHandle,
  ChatMessageReply,
} from "@/components/DataDisplay/Chat/types";
import ensureUtc from "@/components/DataDisplay/Chat/utils/ensureUtc";
import formatParticipantNames from "@/components/DataDisplay/Chat/utils/formatParticipantNames";
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
// Further up, a button brings the reader back to the latest messages
const SCROLL_BUTTON_THRESHOLD_PX = 240;
// Messages of one author within this delay form one run: one name, one time, one avatar
const GROUP_WINDOW_MS = 5 * 60 * 1000;
const ASIDE_WIDTH = 360;
// The unread divider sits a little below the top when the thread opens on it
const UNREAD_DIVIDER_OFFSET_PX = 24;
const HIGHLIGHT_MS = 1600;

/**
 * The first of the last `unreadCount` messages from the others: where the reader left off
 */
const getFirstUnreadId = (messages: ChatMessage[], currentUserId: string, unreadCount = 0) => {
  const fromOthers = messages.filter(({ authorId, event }) => authorId !== currentUserId && !event);
  const count = Math.min(unreadCount, fromOthers.length);

  return count ? fromOthers[fromOthers.length - count].id : null;
};

const isSameDay = (a: string, b: string): boolean => {
  const da = new Date(ensureUtc(a));
  const db = new Date(ensureUtc(b));
  return da.getFullYear() === db.getFullYear() && da.getMonth() === db.getMonth() && da.getDate() === db.getDate();
};

type MessagesFilter = "all" | "messages" | "updates";

interface MessageRow {
  /** A single message, or a run of automatic messages of the same day */
  messages: ChatMessage[];
  showDayDivider: boolean;
  /** Position of a single message in its author's run */
  isFirstInGroup: boolean;
  isLastInGroup: boolean;
}

const toTime = (date: string) => new Date(ensureUtc(date)).getTime();

/**
 * Same author, same day, a few minutes apart, neither an automatic message: the second one continues the run
 */
const continuesRun = (previous: ChatMessage | undefined, message: ChatMessage | undefined) =>
  !!previous &&
  !!message &&
  !previous.event &&
  !message.event &&
  previous.authorId === message.authorId &&
  isSameDay(previous.createdAt, message.createdAt) &&
  toTime(message.createdAt) - toTime(previous.createdAt) <= GROUP_WINDOW_MS;

/**
 * Day dividers, runs of messages from one author, and consecutive automatic messages of a day folded into one row
 */
const toRows = (messages: ChatMessage[], groupEvents: boolean) =>
  messages.reduce<MessageRow[]>((rows, message, index) => {
    const previousMessage = messages[index - 1];
    const showDayDivider = !(previousMessage && isSameDay(message.createdAt, previousMessage.createdAt));
    const lastRow = rows[rows.length - 1];

    if (groupEvents && message.event && previousMessage?.event && !showDayDivider && lastRow) {
      lastRow.messages.push(message);
    } else {
      rows.push({
        isFirstInGroup: !continuesRun(previousMessage, message),
        isLastInGroup: !continuesRun(message, messages[index + 1]),
        messages: [message],
        showDayDivider,
      });
    }

    return rows;
  }, []);

/**
 * Room above a row: a day starts further, a new run a little, a message continuing its run sits tight
 */
const getRowGap = ({ showDayDivider, isFirstInGroup }: MessageRow, index: number) => {
  if (index === 0) {
    return 0;
  }

  if (showDayDivider) {
    return 3;
  }

  return isFirstInGroup ? 2 : 0.5;
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
  linkAttachmentsOnAdd,
  showReadReceipts,
  eventsFilter = true,
  quickActions,
  onQuickAction,
  onActionResponse,
  readOnly,
  quickReplies,
  aside,
  asideTitle,
  asideCount,
  unreadCount,
  composerNotice,
  subtitle,
}: ChatConversationDetailProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<{ threadId?: string; value: MessagesFilter }>({ value: "all" });
  const previousThreadIdRef = useRef<string | undefined>(undefined);
  const isAtBottomRef = useRef(true);
  const previousViewRef = useRef<string | undefined>(undefined);
  const previousLastMessageIdRef = useRef<ChatMessage["id"] | undefined>(undefined);
  const [isAwayFromBottom, setIsAwayFromBottom] = useState(false);
  // Messages from the others received while the reader is up in the history
  const [unseenCount, setUnseenCount] = useState(0);
  // Beside the conversation on wide screens, over it on narrower ones, where it waits to be asked for
  const { breakpoints } = useTheme();
  const isWide = useMediaQuery(breakpoints.up("lg"));
  const [asideChoice, setAsideChoice] = useState<boolean | null>(null);
  const isAsideOpen = !!aside && (asideChoice ?? isWide);
  // The message being answered, for this thread only
  const [reply, setReply] = useState<{ threadId?: string; value: ChatMessageReply } | null>(null);
  const activeReply = reply && reply.threadId === threadId ? reply.value : null;
  // Where the reader left off, fixed when the thread opens: reading it must not move the divider
  const [unreadMarker, setUnreadMarker] = useState<{ threadId?: string; messageId: ChatMessage["id"] | null } | null>(null);

  if (threadId && messages && !isLoading && unreadMarker?.threadId !== threadId) {
    setUnreadMarker({ messageId: getFirstUnreadId(messages, currentUserId, unreadCount), threadId });
  }

  const unreadMessageId = unreadMarker && unreadMarker.threadId === threadId ? unreadMarker.messageId : null;
  const messageInputRef = useRef<ChatMessageInputHandle>(null);
  const chatLabels = useChatLabels(labels);
  // Files dropped anywhere on the conversation join the composer
  const { isDraggingFiles, dropZoneProps } = useFileDrop(
    onUploadAttachment && !readOnly ? (files) => messageInputRef.current?.addFiles(files) : undefined,
  );

  const getDayLabel = formatDayLabel ?? defaultFormatDayLabel;
  const showFilter = eventsFilter && !!messages?.some(({ event }) => event);
  // Back to "All" on another thread
  const activeFilter = showFilter && filter.threadId === threadId ? filter.value : "all";
  const visibleMessages =
    activeFilter === "all" ? (messages ?? []) : (messages ?? []).filter(({ event }) => !!event === (activeFilter === "updates"));
  const rows = toRows(visibleMessages, activeFilter === "all");

  /**
   * Auto-scroll to the bottom of the conversation when a message arrives. Keyed on the last message rather than
   * the array: a reaction or a link on an older message must not pull the reader down.
   */
  const lastMessage = messages?.[messages.length - 1];
  const lastMessageId = lastMessage?.id;

  const scrollToBottom = (behavior: ScrollBehavior) => {
    isAtBottomRef.current = true;
    setUnseenCount(0);
    scrollContainerRef.current?.scrollTo({ behavior, top: scrollContainerRef.current.scrollHeight });
  };

  /**
   * WhatsApp-like: a new thread or filter opens on its end, my own message and a message received while at the
   * bottom follow it; a reader up in the history stays there and the button counts what arrived.
   */
  // biome-ignore lint/correctness/useExhaustiveDependencies: the last message stands for the list
  useEffect(() => {
    if (!messages || isLoading) {
      return;
    }

    const view = `${threadId}:${activeFilter}`;
    const isNewView = previousViewRef.current !== view;
    const isNewMessage = previousLastMessageIdRef.current !== lastMessageId;
    previousViewRef.current = view;
    previousThreadIdRef.current = threadId;
    previousLastMessageIdRef.current = lastMessageId;

    const unreadDivider = scrollContainerRef.current?.querySelector<HTMLElement>("[data-unread-divider]");

    if (isNewView && unreadDivider && scrollContainerRef.current) {
      // WhatsApp-like: the thread opens on the first unread message
      scrollContainerRef.current.scrollTop = unreadDivider.offsetTop - UNREAD_DIVIDER_OFFSET_PX;
      handleScroll();
    } else if (isNewView) {
      scrollToBottom("instant");
    } else if (isNewMessage && (isAtBottomRef.current || lastMessage?.authorId === currentUserId)) {
      scrollToBottom("smooth");
    } else if (isNewMessage) {
      setUnseenCount((count) => count + 1);
    }
  }, [lastMessageId, messages?.length, threadId, isLoading, activeFilter]);

  const handleScroll = () => {
    const container = scrollContainerRef.current;

    if (container) {
      const distance = container.scrollHeight - container.scrollTop - container.clientHeight;
      isAtBottomRef.current = distance <= STICK_TO_BOTTOM_THRESHOLD_PX;
      setIsAwayFromBottom(distance > SCROLL_BUTTON_THRESHOLD_PX);

      if (isAtBottomRef.current) {
        setUnseenCount(0);
      }
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

  /**
   * The quote of an answer: the author's name ("You" for mine) and the text, or a word for a file, a voice message or
   * a request card
   */
  const toReply = (message: ChatMessage): ChatMessageReply => {
    const author = participants?.find(({ userId }) => userId === message.authorId);
    const voice = message.attachments?.find(({ mimeType }) => mimeType.startsWith("audio/"));
    const body =
      message.body.trim() ||
      message.action?.title ||
      (voice ? chatLabels.voiceMessage : message.attachments?.map(({ fileName }) => fileName).join(", ")) ||
      "";

    return {
      authorName:
        message.authorId === currentUserId ? chatLabels.you : author ? formatParticipantNames([author], formatParticipantName) : "",
      body: body.replace(/\s+/g, " "),
      messageId: message.id,
    };
  };

  const handleReply = (message: ChatMessage) => {
    setReply({ threadId, value: toReply(message) });
    messageInputRef.current?.focus();
  };

  /**
   * Back to a quoted message: brought to the middle of the list and flashed
   */
  const jumpToMessage = (messageId: ChatMessage["id"]) => {
    const row = Array.from(scrollContainerRef.current?.querySelectorAll<HTMLElement>("[data-message-id]") ?? []).find(
      (element) => element.dataset.messageId === String(messageId),
    );

    if (!row) {
      return;
    }

    row.scrollIntoView({ behavior: "smooth", block: "center" });
    row.setAttribute("data-highlight", "");
    setTimeout(() => row.removeAttribute("data-highlight"), HIGHLIGHT_MS);
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
    <Stack data-chat-pane="detail" data-selected direction="row" flex={1} height="100%" minWidth={{ sm: 300, xs: 0 }} position="relative">
      <Stack flex={1} minWidth={0} position="relative" {...dropZoneProps}>
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
          aside={aside ? { isOpen: isAsideOpen, onToggle: () => setAsideChoice(!isAsideOpen), title: asideTitle ?? "" } : undefined}
        />
        {showFilter && !isLoading && (
          <Stack direction="row" spacing={1} sx={{ overflowX: "auto", px: 3, py: 1.5 }} data-test="chatMessagesFilter">
            {(
              [
                ["all", chatLabels.filterAll],
                ["messages", chatLabels.filterMessages],
                ["updates", chatLabels.filterUpdates],
              ] as const
            ).map(([value, label]) => (
              <ChatPill key={value} selected={activeFilter === value} onClick={() => setFilter({ threadId, value })}>
                {label}
              </ChatPill>
            ))}
          </Stack>
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
                {rows.map((row, index) => {
                  const { messages: rowMessages, showDayDivider } = row;
                  const [message] = rowMessages;

                  return (
                    <Stack key={message.id} spacing={2} sx={{ mt: getRowGap(row, index) }}>
                      {message.id === unreadMessageId && (
                        <Divider
                          data-unread-divider
                          data-test="chatUnreadDivider"
                          sx={{ "& .MuiDivider-wrapper": { px: 1.5 }, "&::after, &::before": { borderTopColor: "text.disabled" } }}
                        >
                          <Typography variant="caption" fontWeight={600} color="text.primary" lineHeight={1}>
                            {chatLabels.newMessages}
                          </Typography>
                        </Divider>
                      )}
                      {showDayDivider && (
                        // Centered text rather than a full-width line: the ::before/::after keep their
                        // flex (centering) but lose their line.
                        <Divider
                          sx={{
                            // Just the text: no outline, no white pill
                            "& .MuiDivider-wrapper": { alignItems: "center", display: "flex", paddingX: 1.5, paddingY: 0.75 },
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
                      {rowMessages.length > 1 ? (
                        <ChatEventGroup messages={rowMessages} label={chatLabels.orderUpdates} renderEvent={renderMessage} />
                      ) : (
                        renderMessage(message, row)
                      )}
                    </Stack>
                  );
                })}
              </Stack>
            )}
          </Box>
          {(isAwayFromBottom || unseenCount > 0) && (
            <ButtonBase
              aria-label={chatLabels.scrollToLatest}
              title={chatLabels.scrollToLatest}
              onClick={() => scrollToBottom("smooth")}
              data-test="chatScrollToLatest"
              sx={{
                "&:hover": { backgroundColor: "action.hover" },
                backgroundColor: "background.paper",
                border: "1px solid",
                borderColor: "divider",
                borderRadius: "12px",
                bottom: 16,
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.12)",
                color: "text.primary",
                height: 40,
                position: "absolute",
                right: 24,
                width: 40,
                zIndex: 1,
              }}
            >
              <ChatLineIcon d={LINE_ICON_PATHS.arrowDown} />
              {unseenCount > 0 && (
                <Box
                  component="span"
                  sx={{
                    alignItems: "center",
                    backgroundColor: "text.primary",
                    borderRadius: 999,
                    color: "background.paper",
                    display: "flex",
                    fontFamily: ({ typography }) => typography.fontFamily,
                    fontSize: 11,
                    fontWeight: 600,
                    height: 18,
                    justifyContent: "center",
                    minWidth: 18,
                    position: "absolute",
                    px: 0.5,
                    right: -6,
                    top: -6,
                  }}
                >
                  {unseenCount}
                </Box>
              )}
            </ButtonBase>
          )}
        </Box>
        {composerNotice && !readOnly && (
          // Airbnb-like: what to expect from the other side, right above the field
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={0.75}
            data-test="chatComposerNotice"
            sx={{ pt: 1, px: 3 }}
          >
            <ChatLineIcon d={LINE_ICON_PATHS.clock} size={14} sx={{ color: "text.secondary" }} />
            <Typography variant="caption" color="text.secondary">
              {composerNotice}
            </Typography>
          </Stack>
        )}
        {readOnly ? (
          <ChatReadOnlyBar readOnly={readOnly} actionLabel={readOnly.actionLabel ?? chatLabels.joinConversation} />
        ) : (
          <ChatMessageInput
            ref={messageInputRef}
            // Without files, the exact same call as before: (threadId, body)
            onSend={(body, attachments) => {
              // Without a quote, the exact same call as before: (threadId, body) or (threadId, body, attachments)
              if (activeReply) {
                onSendMessage(threadId, body, attachments, activeReply);
                setReply(null);
              } else if (attachments) {
                onSendMessage(threadId, body, attachments);
              } else {
                onSendMessage(threadId, body);
              }
            }}
            replyTo={activeReply}
            onCancelReply={() => setReply(null)}
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
      {isAsideOpen && (
        <Stack
          component="aside"
          data-test="chatAside"
          sx={{
            backgroundColor: "background.paper",
            borderLeft: "1px solid",
            borderLeftColor: "divider",
            flexShrink: 0,
            minHeight: 0,
            width: ASIDE_WIDTH,
            ...(!isWide && {
              bottom: 0,
              boxShadow: "-8px 0 32px rgba(0, 0, 0, 0.12)",
              maxWidth: "100%",
              position: "absolute",
              right: 0,
              top: 0,
              zIndex: 2,
            }),
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{
              borderBottom: ({ palette }) => `1px solid ${palette.divider}`,
              flexShrink: 0,
              minHeight: CHAT_HEADER_HEIGHT,
              pl: 3,
              pr: 2,
            }}
          >
            <Stack direction="row" alignItems="center" spacing={1} minWidth={0}>
              <Typography variant="subtitle1" fontWeight={600} noWrap>
                {asideTitle}
              </Typography>
              {asideCount !== undefined && (
                <Box
                  component="span"
                  data-test="chatAsideCount"
                  sx={{
                    alignItems: "center",
                    backgroundColor: ({ palette }) => (palette.mode === "dark" ? palette.grey[500] : palette.grey[100]),
                    borderRadius: "6px",
                    display: "inline-flex",
                    fontFamily: ({ typography }) => typography.fontFamily,
                    fontSize: 12,
                    fontVariantNumeric: "tabular-nums",
                    fontWeight: 600,
                    height: 22,
                    justifyContent: "center",
                    minWidth: 22,
                    px: 0.75,
                  }}
                >
                  {asideCount}
                </Box>
              )}
            </Stack>
            <IconButton size="small" aria-label={chatLabels.close} onClick={() => setAsideChoice(false)} sx={{ color: "text.primary" }}>
              <ChatLineIcon d={LINE_ICON_PATHS.close} />
            </IconButton>
          </Stack>
          <Box sx={{ flex: 1, overflowY: "auto" }}>{aside}</Box>
        </Stack>
      )}
    </Stack>
  );
};

export default ChatConversationDetail;
