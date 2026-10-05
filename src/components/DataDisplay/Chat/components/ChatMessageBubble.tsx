import { getInitials } from "@getsoren/react-utils";
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
import ChatEmojiPicker from "@/components/DataDisplay/Chat/components/ChatEmojiPicker";
import ChatMessageAttachments from "@/components/DataDisplay/Chat/components/ChatMessageAttachments";
import ChatReactionBar from "@/components/DataDisplay/Chat/components/ChatReactionBar";
import ChatReactionSummary from "@/components/DataDisplay/Chat/components/ChatReactionSummary";
import { DEFAULT_QUICK_REACTIONS } from "@/components/DataDisplay/Chat/constants";
import useChatLabels from "@/components/DataDisplay/Chat/hooks/useChatLabels";
import type { ChatMessageBubbleProps } from "@/components/DataDisplay/Chat/types";
import ensureUtc from "@/components/DataDisplay/Chat/utils/ensureUtc";
import { extractUrls } from "@/components/DataDisplay/Chat/utils/extractUrls";
import { addRecentEmoji } from "@/components/DataDisplay/Chat/utils/recentEmojis";
import AddReactionIcon from "@/components/DataDisplay/Icons/AddReactionIcon";

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
}: ChatMessageBubbleProps) => {
  const chatLabels = useChatLabels(labels);
  const bodyRef = useRef<HTMLDivElement>(null);
  const [barAnchor, setBarAnchor] = useState<HTMLElement | null>(null);
  const [pickerAnchor, setPickerAnchor] = useState<HTMLElement | null>(null);
  const longPressTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const pressOriginRef = useRef<{ x: number; y: number } | null>(null);

  const formattedTime = (formatTime ?? defaultFormatTime)(message.createdAt);
  const urls = extractUrls(message.body);
  const attachments = message.attachments ?? [];
  const reactions = message.reactions ?? [];
  const hasReactions = reactions.some(({ userIds }) => userIds.length > 0);
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
                {renderMessageBody(message.body, isOwn)}
              </Typography>
            </Bubble>
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
            onClick={() => setBarAnchor(bodyRef.current)}
            sx={{
              color: "text.secondary",
              height: 32,
              mx: 0.5,
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
      <Typography variant="caption" color="text.secondary">
        {formattedTime}
      </Typography>
    </>
  );

  const author = participants?.find((p) => p.userId === message.authorId);

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
            placement={isOwn ? "top-end" : "top-start"}
            transition
            modifiers={[{ name: "offset", options: { offset: [0, 8] } }]}
            sx={{ zIndex: ({ zIndex }: Theme) => zIndex.modal }}
          >
            {({ TransitionProps }) => (
              <Grow {...TransitionProps} style={{ transformOrigin: isOwn ? "bottom right" : "bottom left" }} timeout={140}>
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
