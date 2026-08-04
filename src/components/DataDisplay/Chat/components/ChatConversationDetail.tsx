import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useEffect, useRef } from "react";
import ChatConversationDetailHeader from "@/components/DataDisplay/Chat/components/ChatConversationDetailHeader";
import ChatMessageBubble from "@/components/DataDisplay/Chat/components/ChatMessageBubble";
import ChatMessageInput from "@/components/DataDisplay/Chat/components/ChatMessageInput";
import type { ChatConversationDetailProps } from "@/components/DataDisplay/Chat/types";
import ensureUtc from "@/components/DataDisplay/Chat/utils/ensureUtc";
import ChatBubbleIcon from "@/components/DataDisplay/Icons/ChatBubbleIcon";
import Button from "@/components/Inputs/Button";

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
}: ChatConversationDetailProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const previousThreadIdRef = useRef<string | undefined>(undefined);

  const getDayLabel = formatDayLabel ?? defaultFormatDayLabel;

  /**
   * Auto-scroll to the bottom of the conversation when messages change
   */
  useEffect(() => {
    if (!messages || isLoading) {
      return;
    }

    const isNewThread = previousThreadIdRef.current !== threadId;
    previousThreadIdRef.current = threadId;

    scrollContainerRef.current?.scrollTo({ behavior: isNewThread ? "instant" : "smooth", top: scrollContainerRef.current.scrollHeight });
  }, [messages, threadId, isLoading]);

  if (!threadId && isLoading) {
    return (
      <Stack flex={1} alignItems="center" justifyContent="center">
        <Skeleton variant="circular" width={48} height={48} sx={{ mb: 2 }} />
        <Skeleton variant="text" width={200} />
        <Skeleton variant="rounded" width={140} height={36} sx={{ borderRadius: 2, mt: 2 }} />
      </Stack>
    );
  }

  if (!threadId) {
    return (
      <Stack flex={1} alignItems="center" justifyContent="center" spacing={2}>
        <ChatBubbleIcon sx={{ color: "text.secondary", fontSize: 48 }} />
        <Typography variant="body1" color="text.secondary">
          {labels?.createYourFirstConversation ?? "Create your first conversation"}
        </Typography>
        <Button variant="contained" onClick={onNewConversation}>
          {labels?.newConversation ?? "New Conversation"}
        </Button>
      </Stack>
    );
  }

  return (
    <Stack flex={1} height="100%" minWidth={300}>
      <ChatConversationDetailHeader
        threadId={threadId}
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
      />
      <Box
        ref={scrollContainerRef}
        sx={{
          flex: 1,
          overflowY: "auto",
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
                  />
                </Stack>
              );
            })}
          </Stack>
        )}
      </Box>
      <ChatMessageInput
        onSend={(body) => onSendMessage(threadId, body)}
        labels={{ enterToSend: labels?.enterToSend, send: labels?.send, writeAMessage: labels?.writeAMessage }}
        autoFocusKey={threadId}
        isSending={isSending}
        defaultMessage={defaultMessage}
        maxLength={messageMaxLength}
      />
    </Stack>
  );
};

export default ChatConversationDetail;
