import { getInitials } from "@getsoren/react-utils";
import { Theme } from "@mui/material";
import Box from "@mui/material/Box";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { type MouseEvent, type PointerEvent, type ReactNode, useEffect, useRef, useState } from "react";
import Avatar from "@/components/DataDisplay/Avatar/Avatar";
import ChatEmojiPicker from "@/components/DataDisplay/Chat/components/ChatEmojiPicker";
import ChatMessageAttachments from "@/components/DataDisplay/Chat/components/ChatMessageAttachments";
import ChatReactionBar from "@/components/DataDisplay/Chat/components/ChatReactionBar";
import ChatReactionChips from "@/components/DataDisplay/Chat/components/ChatReactionChips";
import { DEFAULT_QUICK_REACTIONS } from "@/components/DataDisplay/Chat/constants";
import useChatLabels from "@/components/DataDisplay/Chat/hooks/useChatLabels";
import type { ChatMessageBubbleProps } from "@/components/DataDisplay/Chat/types";
import ensureUtc from "@/components/DataDisplay/Chat/utils/ensureUtc";
import { extractUrls } from "@/components/DataDisplay/Chat/utils/extractUrls";
import { addRecentEmoji } from "@/components/DataDisplay/Chat/utils/recentEmojis";

const URL_REGEX = /https?:\/\/\S+/g;
const LONG_PRESS_MS = 400;
const LONG_PRESS_TOLERANCE_PX = 8;

const defaultFormatTime = (date: string): string => {
  try {
    return new Intl.DateTimeFormat(undefined, { hour: "2-digit", hour12: false, minute: "2-digit" }).format(new Date(ensureUtc(date)));
  } catch {
    return "";
  }
};

// "👍️" and "👍" are the same reaction
const stripVariationSelectors = (emoji: string) => emoji.replace(/️/g, "");

const renderMessageBody = (body: string, isOwn?: boolean): ReactNode => {
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
            color: isOwn ? "primary.contrastText" : undefined,
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
      backgroundColor: isOwn ? "primary.main" : "tertiary.light",
      border: 0,
      borderBottomLeftRadius: isOwn ? undefined : "5px ! important",
      borderBottomRightRadius: isOwn ? "5px ! important" : undefined,
      borderRadius: 2,
      boxShadow: "0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 1px 3px rgba(0,0,0,0.1)",
      color: isOwn ? "primary.contrastText" : undefined,
      px: 2,
      py: 1.3,
    }}
  >
    {children}
  </Paper>
);

const TOOLBAR = "[data-chat-reaction-toolbar]";
const ADD_CHIP = "[data-chat-reaction-add]";
const visible = { opacity: 1, pointerEvents: "auto", visibility: "visible" } as const;

// Hover is pure CSS (no timers, no repositioning): the row lights up and its toolbar fades in, like Slack
const rowSx = {
  "&::before": {
    borderRadius: 2,
    content: '""',
    inset: "-6px -12px",
    position: "absolute",
    transition: "background-color 80ms",
    zIndex: -1,
  },
  "&[data-active]::before": { backgroundColor: "action.hover" },
  [`&[data-active] ${TOOLBAR}`]: visible,
  [`& ${TOOLBAR}`]: { opacity: 0, pointerEvents: "none", transition: "opacity 80ms, visibility 80ms", visibility: "hidden" },
  "@media (hover: hover)": {
    "&:hover::before": { backgroundColor: "action.hover" },
    [`&:hover ${TOOLBAR}, &:has(:focus-visible) ${TOOLBAR}`]: visible,
    // The "+" pill only shows on the hovered row, as on Slack
    [`& ${ADD_CHIP}`]: { opacity: 0, transition: "opacity 80ms" },
    [`&:hover ${ADD_CHIP}, & ${ADD_CHIP}:focus-visible`]: { opacity: 1 },
  },
  isolation: "isolate",
  position: "relative",
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
}: ChatMessageBubbleProps) => {
  const chatLabels = useChatLabels(labels);
  const [isLongPressed, setIsLongPressed] = useState(false);
  const [pickerAnchor, setPickerAnchor] = useState<HTMLElement | null>(null);
  const longPressTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const pressOriginRef = useRef<{ x: number; y: number } | null>(null);

  const formattedTime = (formatTime ?? defaultFormatTime)(message.createdAt);
  const urls = extractUrls(message.body);
  const attachments = message.attachments ?? [];
  const reactions = message.reactions ?? [];
  const canReact = !!onToggleReaction;
  // A message made of files only gets no empty text bubble
  const hasTextBubble = !!message.body.trim() || !attachments.length;
  const myEmojis = currentUserId ? reactions.filter(({ userIds }) => userIds.includes(currentUserId)).map(({ emoji }) => emoji) : [];

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
    longPressTimerRef.current = setTimeout(() => setIsLongPressed(true), LONG_PRESS_MS);
  };

  const handlePointerMove = (e: PointerEvent) => {
    const origin = pressOriginRef.current;

    if (origin && Math.hypot(e.clientX - origin.x, e.clientY - origin.y) > LONG_PRESS_TOLERANCE_PX) {
      cancelLongPress();
    }
  };

  const openPicker = (anchor: HTMLElement | null) => {
    setIsLongPressed(false);
    setPickerAnchor(anchor);
  };

  useEffect(() => () => clearTimeout(longPressTimerRef.current), []);

  const reactionHandlers = canReact
    ? {
        onContextMenu: (e: MouseEvent) => {
          // The long press opens the reactions, not the system menu
          if (isLongPressed) {
            e.preventDefault();
          }
        },
        onPointerCancel: cancelLongPress,
        onPointerDown: handlePointerDown,
        onPointerMove: handlePointerMove,
        onPointerUp: cancelLongPress,
      }
    : {};

  const content = (
    <>
      <Stack spacing={0.5} alignItems={isOwn ? "flex-end" : "flex-start"} maxWidth="100%">
        {hasTextBubble && (
          <Bubble isOwn={isOwn}>
            <Typography variant="body2" sx={{ whiteSpace: "pre-wrap" }}>
              {renderMessageBody(message.body, isOwn)}
            </Typography>
          </Bubble>
        )}
        {attachments.length > 0 && (
          <ChatMessageAttachments message={message} attachments={attachments} labels={chatLabels} onLinkAttachment={onLinkAttachment} />
        )}
      </Stack>
      {renderAfterBubble?.(urls)}
      <ChatReactionChips
        reactions={reactions}
        currentUserId={currentUserId}
        participants={participants}
        formatParticipantName={formatParticipantName}
        labels={chatLabels}
        isOwn={isOwn}
        onToggle={canReact ? toggleReaction : undefined}
        onAdd={canReact ? openPicker : undefined}
      />
      <Typography variant="caption" color="text.secondary">
        {formattedTime}
      </Typography>
    </>
  );

  const author = participants?.find((p) => p.userId === message.authorId);

  return (
    <Box data-test="chatMessage" data-active={isLongPressed || !!pickerAnchor || undefined} sx={rowSx} {...reactionHandlers}>
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
          {/* Slack-like: straddles the top of the hovered row, on the empty side of the bubble */}
          <ClickAwayListener mouseEvent="onPointerDown" touchEvent={false} onClickAway={() => setIsLongPressed(false)}>
            <Box data-chat-reaction-toolbar sx={{ position: "absolute", top: -20, zIndex: 1, ...(isOwn ? { left: 4 } : { right: 4 }) }}>
              <ChatReactionBar
                quickReactions={quickReactions}
                myEmojis={myEmojis}
                labels={chatLabels}
                onToggle={(emoji) => {
                  setIsLongPressed(false);
                  toggleReaction(emoji);
                }}
                onAdd={(anchor) => openPicker(anchor)}
              />
            </Box>
          </ClickAwayListener>
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
