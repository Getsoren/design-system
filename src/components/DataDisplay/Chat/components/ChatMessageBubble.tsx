import { capitalize, getInitials } from "@getsoren/react-utils";
import { Theme } from "@mui/material";
import Box from "@mui/material/Box";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { type MouseEvent, type PointerEvent, type ReactNode, useEffect, useRef, useState } from "react";
import Avatar from "@/components/DataDisplay/Avatar/Avatar";
import ChatActionCard from "@/components/DataDisplay/Chat/components/ChatActionCard";
import ChatEmojiPicker from "@/components/DataDisplay/Chat/components/ChatEmojiPicker";
import ChatEventMessage from "@/components/DataDisplay/Chat/components/ChatEventMessage";
import ChatMessageAttachments from "@/components/DataDisplay/Chat/components/ChatMessageAttachments";
import ChatReactionBar from "@/components/DataDisplay/Chat/components/ChatReactionBar";
import ChatReactionSummary from "@/components/DataDisplay/Chat/components/ChatReactionSummary";
import ChatReadReceipt, { type ChatReadReceiptStatus } from "@/components/DataDisplay/Chat/components/ChatReadReceipt";
import { DEFAULT_QUICK_REACTIONS, getOwnBubbleBackground } from "@/components/DataDisplay/Chat/constants";
import useChatLabels from "@/components/DataDisplay/Chat/hooks/useChatLabels";
import type { ChatMessage, ChatMessageBubbleProps, ChatParticipant } from "@/components/DataDisplay/Chat/types";
import ensureUtc from "@/components/DataDisplay/Chat/utils/ensureUtc";
import { extractUrls } from "@/components/DataDisplay/Chat/utils/extractUrls";
import formatMessageTime from "@/components/DataDisplay/Chat/utils/formatMessageTime";
import formatParticipantNames from "@/components/DataDisplay/Chat/utils/formatParticipantNames";
import { addRecentEmoji } from "@/components/DataDisplay/Chat/utils/recentEmojis";
import AddReactionIcon from "@/components/DataDisplay/Icons/AddReactionIcon";

const URL_REGEX = /https?:\/\/\S+/g;
const LONG_PRESS_MS = 400;
const LONG_PRESS_TOLERANCE_PX = 8;

const toTime = (date: string) => new Date(ensureUtc(date)).getTime();

/**
 * The other participants who read the thread after this message was sent
 */
const getReaders = (message: ChatMessage, participants?: ChatParticipant[] | null, currentUserId?: string) =>
  (participants ?? []).filter(
    ({ userId, lastReadAt }) =>
      userId !== message.authorId && userId !== currentUserId && !!lastReadAt && toTime(lastReadAt) >= toTime(message.createdAt),
  );

// "👍️" and "👍" are the same reaction
const stripVariationSelectors = (emoji: string) => emoji.replace(/️/g, "");

const renderMessageBody = (body: string): ReactNode => {
  const urls = body.match(URL_REGEX) || [];

  if (!urls.length) {
    return body;
  }

  const parts = body.split(URL_REGEX);

  return parts.reduce<ReactNode[]>((acc, part, index) => {
    acc.push(part);

    if (index < urls.length) {
      const url = urls[index];

      acc.push(
        <Link
          key={url}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          underline="always"
          sx={{
            "&:hover": { opacity: 0.8 },
            textDecorationColor: "inherit",
            wordBreak: "break-all",
          }}
        >
          {url}
        </Link>,
      );
    }

    return acc;
  }, []);
};

interface BubbleProps {
  children: ReactNode;
  isOwn?: boolean;
}

const Bubble = ({ children, isOwn }: BubbleProps) => (
  <Paper
    sx={{
      backgroundColor: isOwn ? getOwnBubbleBackground : "tertiary.light",
      border: 0,
      borderBottomLeftRadius: isOwn ? undefined : "5px ! important",
      borderBottomRightRadius: isOwn ? "5px ! important" : undefined,
      borderRadius: 2,
      boxShadow: "0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 1px 3px rgba(0,0,0,0.1)",
      px: 2,
      py: 1.3,
    }}
  >
    {children}
  </Paper>
);

const TRIGGER = "[data-chat-reaction-trigger]";
const visible = { opacity: 1, pointerEvents: "auto" } as const;

// Instagram-like: hovering a message only reveals a discreet smiley next to its bubble (pure CSS, no timers)
const rowSx = {
  [`& ${TRIGGER}`]: { opacity: 0, pointerEvents: "none", transition: "opacity 100ms" },
  [`&[data-active] ${TRIGGER}, & ${TRIGGER}:focus-visible`]: visible,
  "@media (hover: hover)": { [`&:hover ${TRIGGER}`]: visible },
  WebkitTouchCallout: "none",
};

const ChatMessageBubble = ({
  isOwn,
  message,
  participants,
  avatarSrcResolver,
  renderAfterBubble,
  formatTime,
  hideAvatar,
  currentUserId,
  formatParticipantName,
  onLinkAttachment,
  onToggleReaction,
  quickReactions = DEFAULT_QUICK_REACTIONS,
  labels,
  showReadReceipts = true,
  onActionResponse,
}: ChatMessageBubbleProps) => {
  const chatLabels = useChatLabels(labels);
  const bodyRef = useRef<HTMLDivElement>(null);
  const [barAnchor, setBarAnchor] = useState<HTMLElement | null>(null);
  const isFromTrigger = !!barAnchor && barAnchor !== bodyRef.current;
  const [pickerAnchor, setPickerAnchor] = useState<HTMLElement | null>(null);
  const longPressTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const pressOriginRef = useRef<{ x: number; y: number } | null>(null);

  const getTime = formatTime ?? formatMessageTime;
  const formattedTime = getTime(message.createdAt);
  const urls = extractUrls(message.body);
  const attachments = message.attachments ?? [];
  const reactions = message.reactions ?? [];
  const hasReactions = reactions.some(({ userIds }) => userIds.length > 0);
  const canReact = !!onToggleReaction;
  // A message made of files only gets no empty text bubble; an action's body only stands for it in previews
  const hasTextBubble = !message.action && (!!message.body.trim() || !attachments.length);
  const myEmojis = currentUserId ? reactions.filter(({ userIds }) => userIds.includes(currentUserId)).map(({ emoji }) => emoji) : [];

  const getReadReceipt = (): { status: ChatReadReceiptStatus; label: string } => {
    // Optimistic messages carry a temporary id until the server acknowledges them
    if (String(message.id).startsWith("temp-")) {
      return { label: chatLabels.sending, status: "sending" };
    }

    const readers = getReaders(message, participants, currentUserId);

    if (!readers.length) {
      return { label: chatLabels.sent, status: "sent" };
    }

    const seenBy = readers.map(
      (reader) => `${formatParticipantNames([reader], formatParticipantName)} · ${getTime(reader.lastReadAt ?? message.createdAt)}`,
    );

    return { label: `${chatLabels.seenBy} ${seenBy.join(", ")}`, status: "read" };
  };

  const readReceipt = isOwn && showReadReceipts ? getReadReceipt() : null;

  const toggleReaction = (emoji: string, fromPicker?: boolean) => {
    // Reuse the string already used on this message (or in the quick reactions): one pill per emoji
    const sameEmoji = [...reactions.map((reaction) => reaction.emoji), ...quickReactions].find(
      (candidate) => stripVariationSelectors(candidate) === stripVariationSelectors(emoji),
    );
    const finalEmoji = sameEmoji ?? emoji;

    if (fromPicker) {
      addRecentEmoji(finalEmoji);
    }

    onToggleReaction?.(message.id, finalEmoji);
  };

  // React bubbles events out of portals (viewer, picker): only the message itself counts
  const isFromMessage = (e: PointerEvent) => e.currentTarget.contains(e.target as Node);

  const cancelLongPress = () => {
    clearTimeout(longPressTimerRef.current);
    pressOriginRef.current = null;
  };

  const handlePointerDown = (e: PointerEvent) => {
    if (e.pointerType === "mouse" || !isFromMessage(e)) {
      return;
    }

    pressOriginRef.current = { x: e.clientX, y: e.clientY };
    longPressTimerRef.current = setTimeout(() => setBarAnchor(bodyRef.current), LONG_PRESS_MS);
  };

  const handlePointerMove = (e: PointerEvent) => {
    const origin = pressOriginRef.current;

    if (origin && Math.hypot(e.clientX - origin.x, e.clientY - origin.y) > LONG_PRESS_TOLERANCE_PX) {
      cancelLongPress();
    }
  };

  useEffect(() => () => clearTimeout(longPressTimerRef.current), []);

  useEffect(() => {
    if (!barAnchor) {
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setBarAnchor(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [barAnchor]);

  const reactionHandlers = canReact
    ? {
        onContextMenu: (e: MouseEvent) => {
          // The long press opens the reactions, not the system menu
          if (barAnchor) {
            e.preventDefault();
          }
        },
        onPointerCancel: cancelLongPress,
        onPointerDown: handlePointerDown,
        onPointerMove: handlePointerMove,
        onPointerUp: cancelLongPress,
      }
    : {};

  const author = participants?.find((p) => p.userId === message.authorId);

  if (message.event) {
    const authorName = isOwn ? chatLabels.you : author && capitalize(author.firstName);

    return (
      <Box data-test="chatMessage" display="flex" justifyContent="center">
        <ChatEventMessage
          event={message.event}
          caption={authorName ? `${chatLabels.eventBy} ${authorName} · ${formattedTime}` : formattedTime}
        />
      </Box>
    );
  }

  const content = (
    <>
      {/* The bubble, its smiley on the empty side and the reactions hooked under its corner */}
      <Box
        ref={bodyRef}
        sx={{ alignSelf: isOwn ? "flex-end" : "flex-start", maxWidth: "100%", pb: hasReactions ? "18px" : 0, position: "relative" }}
      >
        <Stack spacing={0.5} alignItems={isOwn ? "flex-end" : "flex-start"} maxWidth="100%">
          {hasTextBubble && (
            <Bubble isOwn={isOwn}>
              <Typography variant="body2" sx={{ whiteSpace: "pre-wrap" }}>
                {renderMessageBody(message.body)}
              </Typography>
            </Bubble>
          )}
          {message.action && (
            <ChatActionCard
              action={message.action}
              onRespond={!isOwn && onActionResponse ? (responseId) => onActionResponse(message.id, responseId) : undefined}
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
        {canReact && (
          <IconButton
            data-chat-reaction-trigger
            aria-label={chatLabels.addReaction}
            aria-haspopup="dialog"
            onClick={(e) => setBarAnchor(e.currentTarget)}
            sx={{
              // A white chip, so the smiley reads on the grey conversation background
              "&:hover": { backgroundColor: "background.paper", color: "text.primary" },
              backgroundColor: "background.paper",
              border: "1px solid",
              borderColor: "divider",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)",
              color: "text.secondary",
              height: 32,
              mx: 0.75,
              position: "absolute",
              top: hasReactions ? "calc(50% - 9px)" : "50%",
              transform: "translateY(-50%)",
              width: 32,
              ...(isOwn ? { right: "100%" } : { left: "100%" }),
            }}
          >
            <AddReactionIcon sx={{ fontSize: 20 }} />
          </IconButton>
        )}
        <ChatReactionSummary
          reactions={reactions}
          currentUserId={currentUserId}
          participants={participants}
          formatParticipantName={formatParticipantName}
          labels={chatLabels}
          isOwn={isOwn}
          onToggle={canReact ? toggleReaction : undefined}
        />
      </Box>
      {renderAfterBubble?.(urls)}
      {readReceipt ? (
        <Stack direction="row" alignItems="center" spacing={0.5}>
          <Typography variant="caption" color="text.secondary">
            {formattedTime}
          </Typography>
          <ChatReadReceipt status={readReceipt.status} label={readReceipt.label} />
        </Stack>
      ) : (
        <Typography variant="caption" color="text.secondary">
          {formattedTime}
        </Typography>
      )}
    </>
  );

  return (
    <Box data-test="chatMessage" data-active={!!barAnchor || !!pickerAnchor || undefined} sx={rowSx} {...reactionHandlers}>
      {isOwn ? (
        <Stack alignItems="flex-end" spacing={0.5} sx={{ maxWidth: "70%", ml: "auto" }}>
          {content}
        </Stack>
      ) : (
        <Stack direction="row" spacing={1.5} alignItems="flex-start">
          {!hideAvatar && (
            <Avatar
              src={avatarSrcResolver?.(author?.avatar)}
              sx={{
                backgroundColor: ({ palette }: Theme) => (palette.mode === "dark" ? "grey.500" : "grey.100"),
                fontSize: 12,
                height: 28,
                mt: 0.5,
                width: 28,
              }}
            >
              {getInitials(
                author ? { firstName: author.firstName, lastName: author.lastName } : { fullName: String(message.authorId).slice(0, 2) },
                true,
              )}
            </Avatar>
          )}
          <Stack spacing={0.5} sx={{ maxWidth: "70%" }}>
            {content}
          </Stack>
        </Stack>
      )}
      {canReact && (
        <>
          <Popper
            open={!!barAnchor}
            anchorEl={barAnchor}
            // WhatsApp-like: right above the smiley that was clicked, spreading over the bubble; above the bubble on a
            // long press, where there is no smiley
            placement={isFromTrigger === !!isOwn ? "top-start" : "top-end"}
            transition
            modifiers={[{ name: "offset", options: { offset: [0, 8] } }]}
            sx={{ zIndex: ({ zIndex }: Theme) => zIndex.modal }}
          >
            {({ TransitionProps }) => (
              <Grow
                {...TransitionProps}
                style={{ transformOrigin: isFromTrigger === !!isOwn ? "bottom left" : "bottom right" }}
                timeout={140}
              >
                <div>
                  <ClickAwayListener mouseEvent="onPointerDown" touchEvent="onTouchStart" onClickAway={() => setBarAnchor(null)}>
                    <div>
                      <ChatReactionBar
                        quickReactions={quickReactions}
                        myEmojis={myEmojis}
                        labels={chatLabels}
                        onToggle={(emoji) => {
                          setBarAnchor(null);
                          toggleReaction(emoji);
                        }}
                        onAdd={() => {
                          setBarAnchor(null);
                          setPickerAnchor(bodyRef.current);
                        }}
                      />
                    </div>
                  </ClickAwayListener>
                </div>
              </Grow>
            )}
          </Popper>
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
