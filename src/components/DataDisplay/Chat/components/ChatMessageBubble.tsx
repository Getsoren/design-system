import { capitalize, getInitials } from "@getsoren/react-utils";
import type { Theme } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Avatar from "@/components/DataDisplay/Avatar/Avatar";
import ChatActionCard from "@/components/DataDisplay/Chat/components/ChatActionCard";
import ChatBubble from "@/components/DataDisplay/Chat/components/ChatBubble";
import ChatEmojiPicker from "@/components/DataDisplay/Chat/components/ChatEmojiPicker";
import ChatEventMessage from "@/components/DataDisplay/Chat/components/ChatEventMessage";
import ChatMessageAttachments from "@/components/DataDisplay/Chat/components/ChatMessageAttachments";
import ChatMessageText from "@/components/DataDisplay/Chat/components/ChatMessageText";
import ChatMessageTools from "@/components/DataDisplay/Chat/components/ChatMessageTools";
import ChatReactionPopper from "@/components/DataDisplay/Chat/components/ChatReactionPopper";
import ChatReactionSummary from "@/components/DataDisplay/Chat/components/ChatReactionSummary";
import ChatReadReceipt from "@/components/DataDisplay/Chat/components/ChatReadReceipt";
import ChatReplyQuote from "@/components/DataDisplay/Chat/components/ChatReplyQuote";
import { DEFAULT_QUICK_REACTIONS } from "@/components/DataDisplay/Chat/constants";
import useChatLabels from "@/components/DataDisplay/Chat/hooks/useChatLabels";
import useMessageReactions from "@/components/DataDisplay/Chat/hooks/useMessageReactions";
import type { ChatMessageBubbleProps } from "@/components/DataDisplay/Chat/types";
import { extractUrls } from "@/components/DataDisplay/Chat/utils/extractUrls";
import formatMessageTime from "@/components/DataDisplay/Chat/utils/formatMessageTime";
import formatParticipantNames from "@/components/DataDisplay/Chat/utils/formatParticipantNames";
import getReadReceipt from "@/components/DataDisplay/Chat/utils/getReadReceipt";

const AVATAR_SIZE = 28;
// A reading column rather than the whole width: long messages wrap as in Airbnb's or WhatsApp's threads
const MESSAGE_MAX_WIDTH = { sm: "min(75%, 560px)", xs: "85%" };
// A bare shared link ("Commande : https://…" included, the label the order drawer used to prefix)
const LINK_ONLY = /^\s*(?:[^\s:]{1,20}\s?:\s*)?https?:\/\/\S+\s*$/;

const TRIGGER = "[data-chat-reaction-trigger]";
const visible = { opacity: 1, pointerEvents: "auto" } as const;

// Instagram-like: hovering a message only reveals a discreet smiley next to its bubble (pure CSS, no timers)
const rowSx = {
  [`& ${TRIGGER}`]: { opacity: 0, pointerEvents: "none", transition: "opacity 100ms" },
  [`&[data-active] ${TRIGGER}, & ${TRIGGER}:focus-visible`]: visible,
  "@keyframes chatMessageHighlight": { from: { backgroundColor: "rgba(0, 0, 0, 0.08)" }, to: { backgroundColor: "transparent" } },
  "@media (hover: hover)": { [`&:hover ${TRIGGER}`]: visible },
  // Reached from the quote of an answer: a short flash, as in WhatsApp
  "&[data-highlight]": { animation: "chatMessageHighlight 1.6s ease-out" },
  WebkitTouchCallout: "none",
};

const ChatMessageBubble = ({
  isOwn,
  message,
  participants,
  avatarSrcResolver,
  renderAfterBubble,
  formatTime = formatMessageTime,
  hideAvatar,
  currentUserId,
  formatParticipantName,
  onLinkAttachment,
  onToggleReaction,
  quickReactions = DEFAULT_QUICK_REACTIONS,
  labels,
  showReadReceipts = true,
  onActionResponse,
  isFirstInGroup = true,
  isLastInGroup = true,
  onReply,
  onJumpToMessage,
}: ChatMessageBubbleProps) => {
  const chatLabels = useChatLabels(labels);
  const { barAnchor, bodyRef, isFromTrigger, pickerAnchor, reactionHandlers, setBarAnchor, setPickerAnchor, toggleReaction } =
    useMessageReactions({ message, onToggleReaction, quickReactions });
  const formattedTime = formatTime(message.createdAt);
  const attachments = message.attachments ?? [];
  const reactions = message.reactions ?? [];
  const hasReactions = reactions.some(({ userIds }) => userIds.length > 0);
  const afterBubble = renderAfterBubble?.(extractUrls(message.body));
  // A bare shared link shows as its preview card only, when the app renders one (an order link)
  const isPreviewOnly = !!afterBubble && LINK_ONLY.test(message.body);
  const { replyTo } = message;
  const replyMessageId = replyTo?.messageId;
  // A message made of files only gets no empty text bubble; an action's body only stands for it in previews
  const hasTextBubble = !(message.action || isPreviewOnly) && (!!message.body.trim() || !attachments.length || !!replyTo);
  const readReceipt =
    isOwn && showReadReceipts
      ? getReadReceipt(message, { currentUserId, formatParticipantName, formatTime, labels: chatLabels, participants })
      : null;

  const author = participants?.find((p) => p.userId === message.authorId);
  const authorName = author ? formatParticipantNames([author], formatParticipantName) : "";

  if (message.event) {
    const eventAuthor = isOwn ? chatLabels.you : author && capitalize(author.firstName);

    return (
      <Box data-test="chatMessage" display="flex" justifyContent="center">
        <ChatEventMessage event={message.event} caption={eventAuthor ? `${eventAuthor} · ${formattedTime}` : formattedTime} />
      </Box>
    );
  }

  const content = (
    <>
      {/* The bubble, its smiley on the empty side and the reactions hooked under its corner */}
      <Box
        ref={bodyRef}
        sx={{
          alignSelf: isOwn ? "flex-end" : "flex-start",
          maxWidth: "100%",
          pb: hasReactions ? "18px" : 0,
          position: "relative",
          // A double tap reacts rather than zooming the page; the hand says a double click likes
          ...(onToggleReaction && { cursor: "pointer", touchAction: "manipulation" }),
        }}
      >
        <Stack spacing={0.5} alignItems={isOwn ? "flex-end" : "flex-start"} maxWidth="100%">
          {/* A link alone shows its card in place of the bubble: the tools and the reactions then sit by the card */}
          {isPreviewOnly && afterBubble}
          {hasTextBubble && (
            <ChatBubble isOwn={isOwn} hasTail={isLastInGroup}>
              {replyTo && (
                <ChatReplyQuote
                  reply={replyTo}
                  onJump={replyMessageId !== undefined && onJumpToMessage ? () => onJumpToMessage(replyMessageId) : undefined}
                />
              )}
              {!!message.body.trim() && <ChatMessageText body={message.body} callLabel={chatLabels.callNumber} />}
            </ChatBubble>
          )}
          {message.action && (
            <ChatActionCard
              action={message.action}
              onRespond={onActionResponse && ((responseId) => onActionResponse(message.id, responseId))}
            />
          )}
          {attachments.length > 0 && (
            <ChatMessageAttachments
              message={message}
              attachments={attachments}
              labels={chatLabels}
              isOwn={isOwn}
              onLinkAttachment={onLinkAttachment}
            />
          )}
        </Stack>
        {(onToggleReaction || onReply) && (
          <ChatMessageTools
            isOwn={isOwn}
            hasReactions={hasReactions}
            labels={chatLabels}
            onReact={onToggleReaction && ((event) => setBarAnchor(event.currentTarget))}
            onReply={onReply && (() => onReply(message))}
          />
        )}
        <ChatReactionSummary
          reactions={reactions}
          currentUserId={currentUserId}
          participants={participants}
          formatParticipantName={formatParticipantName}
          labels={chatLabels}
          isOwn={isOwn}
          onToggle={onToggleReaction && toggleReaction}
        />
      </Box>
      {!isPreviewOnly && afterBubble}
    </>
  );

  return (
    <Box
      data-test="chatMessage"
      data-message-id={message.id}
      data-active={!!barAnchor || !!pickerAnchor || undefined}
      sx={rowSx}
      {...reactionHandlers}
    >
      {/* Airbnb-like runs: the time once under my last message, with its ticks; the author's name and the time once
          above theirs, their avatar next to the last one */}
      {isOwn ? (
        <Stack alignItems="flex-end" spacing={0.5} sx={{ maxWidth: MESSAGE_MAX_WIDTH, ml: "auto" }}>
          {content}
          {isLastInGroup && (
            <Stack direction="row" alignItems="center" spacing={0.5} data-test="chatMessageMeta">
              <Typography variant="caption" color="text.secondary">
                {formattedTime}
              </Typography>
              {readReceipt && <ChatReadReceipt status={readReceipt.status} label={readReceipt.label} />}
            </Stack>
          )}
        </Stack>
      ) : (
        <Stack direction="row" spacing={1} alignItems="flex-end">
          {!hideAvatar &&
            (isLastInGroup ? (
              <Avatar
                src={avatarSrcResolver?.(author?.avatar)}
                sx={{
                  backgroundColor: ({ palette }: Theme) => (palette.mode === "dark" ? "grey.500" : "grey.100"),
                  flexShrink: 0,
                  fontSize: 12,
                  height: AVATAR_SIZE,
                  // Level with the bubble rather than with the reactions hooked under it
                  mb: hasReactions && (!afterBubble || isPreviewOnly) ? "18px" : 0,
                  width: AVATAR_SIZE,
                }}
              >
                {getInitials(
                  author ? { firstName: author.firstName, lastName: author.lastName } : { fullName: String(message.authorId).slice(0, 2) },
                  true,
                )}
              </Avatar>
            ) : (
              <Box sx={{ flexShrink: 0, width: AVATAR_SIZE }} />
            ))}
          <Stack spacing={0.5} sx={{ maxWidth: MESSAGE_MAX_WIDTH, minWidth: 0 }}>
            {isFirstInGroup && (
              <Typography variant="caption" color="text.secondary" noWrap data-test="chatMessageMeta" sx={{ px: 0.5 }}>
                {authorName && (
                  <>
                    <Box component="span" sx={{ color: "text.primary", fontWeight: 500 }}>
                      {authorName}
                    </Box>
                    <Box component="span" sx={{ mx: 0.5 }}>
                      ·
                    </Box>
                  </>
                )}
                {formattedTime}
              </Typography>
            )}
            {content}
          </Stack>
        </Stack>
      )}
      {onToggleReaction && (
        <>
          <ChatReactionPopper
            anchorEl={barAnchor}
            // From the smiley, the bar spreads over the bubble; from a long press, it sits above it
            alignStart={isFromTrigger === !!isOwn}
            quickReactions={quickReactions}
            myEmojis={currentUserId ? reactions.filter(({ userIds }) => userIds.includes(currentUserId)).map(({ emoji }) => emoji) : []}
            labels={chatLabels}
            onClose={() => setBarAnchor(null)}
            onToggle={toggleReaction}
            onAdd={() => setPickerAnchor(bodyRef.current)}
            onReply={onReply && (() => onReply(message))}
          />
          <ChatEmojiPicker
            anchorEl={pickerAnchor}
            onClose={() => setPickerAnchor(null)}
            labels={chatLabels}
            onSelect={(emoji) => {
              setPickerAnchor(null);
              toggleReaction(emoji, true);
            }}
          />
        </>
      )}
    </Box>
  );
};

export default ChatMessageBubble;
