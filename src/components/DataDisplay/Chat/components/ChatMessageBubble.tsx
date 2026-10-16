import { capitalize, getInitials } from "@getsoren/react-utils";
import { Theme } from "@mui/material";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
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
import ChatLineIcon from "@/components/DataDisplay/Chat/components/ChatLineIcon";
import ChatMessageAttachments from "@/components/DataDisplay/Chat/components/ChatMessageAttachments";
import ChatReactionBar from "@/components/DataDisplay/Chat/components/ChatReactionBar";
import ChatReactionSummary from "@/components/DataDisplay/Chat/components/ChatReactionSummary";
import ChatReadReceipt, { type ChatReadReceiptStatus } from "@/components/DataDisplay/Chat/components/ChatReadReceipt";
import { DEFAULT_QUICK_REACTIONS, getOwnBubbleBackground, LINE_ICON_PATHS } from "@/components/DataDisplay/Chat/constants";
import useChatLabels from "@/components/DataDisplay/Chat/hooks/useChatLabels";
import type { ChatMessage, ChatMessageBubbleProps, ChatMessageReply, ChatParticipant } from "@/components/DataDisplay/Chat/types";
import ensureUtc from "@/components/DataDisplay/Chat/utils/ensureUtc";
import { extractUrls } from "@/components/DataDisplay/Chat/utils/extractUrls";
import formatMessageTime from "@/components/DataDisplay/Chat/utils/formatMessageTime";
import formatParticipantNames from "@/components/DataDisplay/Chat/utils/formatParticipantNames";
import { addRecentEmoji } from "@/components/DataDisplay/Chat/utils/recentEmojis";
import splitPhoneNumbers from "@/components/DataDisplay/Chat/utils/splitPhoneNumbers";
import AddReactionIcon from "@/components/DataDisplay/Icons/AddReactionIcon";

const URL_REGEX = /https?:\/\/\S+/g;
const LONG_PRESS_MS = 400;
const LONG_PRESS_TOLERANCE_PX = 8;
// Instagram's double tap, with a thumb: the usual "noted" on a worksite
const DOUBLE_TAP_REACTION = "👍";
const DOUBLE_TAP_MS = 300;
const DOUBLE_TAP_TOLERANCE_PX = 24;
// Touch screens may follow a double tap with their own dblclick: both count as one
const DOUBLE_TAP_DEBOUNCE_MS = 600;
// A double click there keeps its own meaning (open, play, answer)
const INTERACTIVE_SELECTOR = "a, button, input, textarea, audio, video, [role='button']";

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

const linkSx = {
  "&:hover": { opacity: 0.8 },
  textDecorationColor: "inherit",
};

/**
 * Phone numbers as `tel:` links: a tap calls from a phone or a tablet, a click opens the calling app on a computer
 */
const renderPhoneNumbers = (text: string, key: number, callLabel: string): ReactNode[] =>
  splitPhoneNumbers(text).map(({ text: part, href }, index) =>
    href ? (
      <Link key={`${key}-${index}`} href={href} title={`${callLabel} ${part}`} underline="always" sx={{ ...linkSx, whiteSpace: "nowrap" }}>
        {part}
      </Link>
    ) : (
      part
    ),
  );

const renderMessageBody = (body: string, callLabel: string): ReactNode => {
  const urls = body.match(URL_REGEX) || [];

  if (!urls.length) {
    return renderPhoneNumbers(body, 0, callLabel);
  }

  const parts = body.split(URL_REGEX);

  return parts.reduce<ReactNode[]>((acc, part, index) => {
    acc.push(...renderPhoneNumbers(part, index, callLabel));

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
            ...linkSx,
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
  /** Last bubble of a run: its bottom corner on the author's side points at them */
  hasTail?: boolean;
}

// The design system's scale: a bubble is rounded as its cards (borderRadiusL), its pointed corner as its small radius
// (borderRadiusS)
const BUBBLE_RADIUS = 12;
const TAIL_RADIUS = 4;
const AVATAR_SIZE = 28;
// A reading column rather than the whole width: long messages wrap as in Airbnb's or WhatsApp's threads
const MESSAGE_MAX_WIDTH = { sm: "min(75%, 560px)", xs: "85%" };

const Bubble = ({ children, isOwn, hasTail }: BubbleProps) => (
  <Paper
    sx={{
      backgroundColor: isOwn ? getOwnBubbleBackground : "tertiary.light",
      border: 0,
      // "!important": the sorted keys put the borderRadius shorthand after the corner it refines
      ...(hasTail && { [isOwn ? "borderBottomRightRadius" : "borderBottomLeftRadius"]: `${TAIL_RADIUS}px !important` }),
      borderRadius: `${BUBBLE_RADIUS}px`,
      // Only the white bubbles need a shadow to stand out of the conversation's grey
      boxShadow: isOwn ? "none" : "0 1px 2px rgba(0, 0, 0, 0.08)",
      px: 2,
      py: 1.25,
    }}
  >
    {children}
  </Paper>
);

interface ReplyQuoteProps {
  reply: ChatMessageReply;
  onJump?: () => void;
}

/**
 * WhatsApp-like quote on top of an answer: concentric with the bubble (4px inside its corners, 12 - 4 = 8, the design
 * system's base radius), a tap
 * scrolls back to the quoted message
 */
// WhatsApp's quote: on top of the answer, 4px inside its bubble, a tint of the bubble with a coloured bar and the author's
// name in that colour; the colour, not the tint, tells the quote from the answer
const ReplyQuote = ({ reply, onJump }: ReplyQuoteProps) => (
  <ButtonBase
    onClick={onJump}
    disabled={!onJump}
    data-test="chatReplyQuote"
    sx={{
      "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.08)" },
      "&.Mui-disabled": { color: "inherit" },
      alignItems: "stretch",
      backgroundColor: "rgba(0, 0, 0, 0.05)",
      borderLeft: "4px solid",
      borderLeftColor: "info.main",
      borderRadius: `${BUBBLE_RADIUS - 4}px`,
      display: "flex",
      flexDirection: "column",
      // The bubble's padding (16px, 10px) minus the 4px inset
      mb: 0.75,
      mt: "-6px",
      mx: "-12px",
      pl: 1.25,
      pr: 1.5,
      py: 0.75,
      textAlign: "left",
      width: "calc(100% + 24px)",
    }}
  >
    <Typography variant="caption" fontWeight={600} color="info.dark" noWrap>
      {reply.authorName}
    </Typography>
    <Typography
      variant="caption"
      color="text.secondary"
      sx={{ display: "-webkit-box", overflow: "hidden", overflowWrap: "anywhere", WebkitBoxOrient: "vertical", WebkitLineClamp: 2 }}
    >
      {reply.body}
    </Typography>
  </ButtonBase>
);

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

// A white chip, so the smiley and the reply read on the grey conversation background
const toolSx = {
  "&:hover": { backgroundColor: "background.paper", color: "text.primary" },
  backgroundColor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)",
  color: "text.secondary",
  height: 32,
  width: 32,
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
  isFirstInGroup = true,
  isLastInGroup = true,
  onReply,
  onJumpToMessage,
}: ChatMessageBubbleProps) => {
  const chatLabels = useChatLabels(labels);
  const bodyRef = useRef<HTMLDivElement>(null);
  const [barAnchor, setBarAnchor] = useState<HTMLElement | null>(null);
  const isFromTrigger = !!barAnchor && barAnchor !== bodyRef.current;
  const [pickerAnchor, setPickerAnchor] = useState<HTMLElement | null>(null);
  const longPressTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const pressOriginRef = useRef<{ time: number; x: number; y: number } | null>(null);
  const lastTapRef = useRef<{ time: number; x: number; y: number } | null>(null);
  const lastDoubleTapAtRef = useRef(0);

  const getTime = formatTime ?? formatMessageTime;
  const formattedTime = getTime(message.createdAt);
  const urls = extractUrls(message.body);
  const attachments = message.attachments ?? [];
  const reactions = message.reactions ?? [];
  const hasReactions = reactions.some(({ userIds }) => userIds.length > 0);
  const canReact = !!onToggleReaction;
  // A message made of files only gets no empty text bubble; an action's body only stands for it in previews
  const afterBubble = renderAfterBubble?.(urls);
  // A bare shared link shows as its preview card only, when the app renders one (an order link)
  // ("Commande : https://…" included, the label the order drawer used to prefix)
  const isPreviewOnly = !!afterBubble && /^\s*(?:[^\s:]{1,20}\s?:\s*)?https?:\/\/\S+\s*$/.test(message.body);
  const replyTo = message.replyTo;
  const hasTextBubble = !(message.action || isPreviewOnly) && (!!message.body.trim() || !attachments.length || !!replyTo);
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

    pressOriginRef.current = { time: Date.now(), x: e.clientX, y: e.clientY };
    longPressTimerRef.current = setTimeout(() => setBarAnchor(bodyRef.current), LONG_PRESS_MS);
  };

  const handlePointerMove = (e: PointerEvent) => {
    const origin = pressOriginRef.current;

    if (origin && Math.hypot(e.clientX - origin.x, e.clientY - origin.y) > LONG_PRESS_TOLERANCE_PX) {
      cancelLongPress();
    }
  };

  // On the message itself (text, card, files), not on one of its controls
  const isOnMessageBody = (e: MouseEvent) => {
    const target = e.target as HTMLElement;

    return !!bodyRef.current?.contains(target) && !target.closest(INTERACTIVE_SELECTOR);
  };

  /**
   * Double click or double tap: a thumb up, taken back by the next one
   */
  const reactWithThumb = () => {
    const now = Date.now();

    if (now - lastDoubleTapAtRef.current < DOUBLE_TAP_DEBOUNCE_MS) {
      return;
    }

    lastDoubleTapAtRef.current = now;
    // Mine already: the toggle takes it back
    toggleReaction(DOUBLE_TAP_REACTION);
  };

  const handlePointerUp = (e: PointerEvent) => {
    const origin = pressOriginRef.current;
    cancelLongPress();

    // Touch only, and a quick tap: a long press opens the reactions instead
    if (!origin || Date.now() - origin.time >= LONG_PRESS_MS || !isOnMessageBody(e)) {
      return;
    }

    const now = Date.now();
    const lastTap = lastTapRef.current;

    if (
      lastTap &&
      now - lastTap.time < DOUBLE_TAP_MS &&
      Math.hypot(e.clientX - lastTap.x, e.clientY - lastTap.y) < DOUBLE_TAP_TOLERANCE_PX
    ) {
      lastTapRef.current = null;
      reactWithThumb();
    } else {
      lastTapRef.current = { time: now, x: e.clientX, y: e.clientY };
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
        onDoubleClick: (e: MouseEvent) => {
          if (isOnMessageBody(e)) {
            reactWithThumb();
          }
        },
        onMouseDown: (e: MouseEvent) => {
          // The second click of a double click selects a word: here it reacts instead (a drag still selects)
          if (e.detail === 2 && isOnMessageBody(e)) {
            e.preventDefault();
          }
        },
        onPointerCancel: cancelLongPress,
        onPointerDown: handlePointerDown,
        onPointerMove: handlePointerMove,
        onPointerUp: handlePointerUp,
      }
    : {};

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
          ...(canReact && { cursor: "pointer", touchAction: "manipulation" }),
        }}
      >
        <Stack spacing={0.5} alignItems={isOwn ? "flex-end" : "flex-start"} maxWidth="100%">
          {/* A link alone shows its card in place of the bubble: the tools and the reactions then sit by the card */}
          {isPreviewOnly && afterBubble}
          {hasTextBubble && (
            <Bubble isOwn={isOwn} hasTail={isLastInGroup}>
              {replyTo && (
                <ReplyQuote
                  reply={replyTo}
                  onJump={
                    replyTo.messageId !== undefined && onJumpToMessage
                      ? () => onJumpToMessage(replyTo.messageId as ChatMessage["id"])
                      : undefined
                  }
                />
              )}
              {!!message.body.trim() && (
                <Typography variant="body2" sx={{ whiteSpace: "pre-wrap" }}>
                  {renderMessageBody(message.body, chatLabels.callNumber)}
                </Typography>
              )}
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
        {(canReact || onReply) && (
          // Discreet tools on the empty side of the bubble, revealed on hover: the smiley, then "Reply"
          <Stack
            direction={isOwn ? "row-reverse" : "row"}
            spacing={0.5}
            sx={{
              mx: 0.75,
              position: "absolute",
              top: hasReactions ? "calc(50% - 9px)" : "50%",
              transform: "translateY(-50%)",
              // Above the cards that follow in the conversation
              zIndex: 1,
              ...(isOwn ? { right: "100%" } : { left: "100%" }),
            }}
          >
            {canReact && (
              <IconButton
                data-chat-reaction-trigger
                aria-label={chatLabels.addReaction}
                aria-haspopup="dialog"
                onClick={(e) => setBarAnchor(e.currentTarget)}
                sx={toolSx}
              >
                <AddReactionIcon sx={{ fontSize: 20 }} />
              </IconButton>
            )}
            {onReply && (
              <IconButton data-chat-reaction-trigger aria-label={chatLabels.reply} onClick={() => onReply(message)} sx={toolSx}>
                <ChatLineIcon d={LINE_ICON_PATHS.reply} />
              </IconButton>
            )}
          </Stack>
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
                        onReply={
                          onReply &&
                          (() => {
                            setBarAnchor(null);
                            onReply(message);
                          })
                        }
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
