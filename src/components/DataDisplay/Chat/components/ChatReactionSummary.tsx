import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { EMOJI_FONT_FAMILY } from "@/components/DataDisplay/Chat/constants";
import type { ChatLabels } from "@/components/DataDisplay/Chat/hooks/useChatLabels";
import type { ChatParticipant, ChatReaction } from "@/components/DataDisplay/Chat/types";
import formatParticipantNames from "@/components/DataDisplay/Chat/utils/formatParticipantNames";

const MAX_SUMMARY_EMOJIS = 3;
// Concentric corners, as in the Actions menu: the list takes a 20px radius, its rows sit 5px from its outer edge (the
// theme's 1px paper border + 4px) and take 20 - 5 = 15px
const LIST_RADIUS = 20;
const LIST_BORDER = 1;
const ROW_INSET = 4;

interface ChatReactionSummaryProps {
  reactions: ChatReaction[];
  currentUserId?: string;
  participants?: ChatParticipant[] | null;
  formatParticipantName?: (participant: ChatParticipant) => string;
  labels: ChatLabels;
  isOwn?: boolean;
  /** Without it, the list is read-only */
  onToggle?: (emoji: string) => void;
}

/**
 * Instagram-like: one small pill hooked under the corner of the bubble (most used emojis and the total), opening the
 * bare list of who reacted with what; a tap on my own row removes my reaction.
 */
const ChatReactionSummary = ({
  reactions,
  currentUserId,
  participants,
  formatParticipantName,
  labels,
  isOwn,
  onToggle,
}: ChatReactionSummaryProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const visibleReactions = reactions.filter(({ userIds }) => userIds.length > 0).sort((a, b) => b.userIds.length - a.userIds.length);

  if (!visibleReactions.length) {
    return null;
  }

  const total = visibleReactions.reduce((sum, { userIds }) => sum + userIds.length, 0);
  const getName = (userId: string) => {
    if (userId === currentUserId) {
      return labels.you;
    }

    return formatParticipantNames(
      participants?.filter((participant) => participant.userId === userId),
      formatParticipantName,
    );
  };
  // Mine first, as on Instagram, so it can be removed at once
  const rows = visibleReactions
    .flatMap(({ emoji, userIds }) => userIds.map((userId) => ({ emoji, isMine: userId === currentUserId, userId })))
    .sort((a, b) => Number(b.isMine) - Number(a.isMine));

  return (
    <>
      <ButtonBase
        aria-label={`${labels.reactions} · ${visibleReactions.map(({ emoji, userIds }) => `${emoji} ${userIds.length}`).join(", ")}`}
        aria-haspopup="dialog"
        onClick={(e) => setAnchorEl(e.currentTarget)}
        data-test="chatReactions"
        sx={{
          // A 26px pill, still a 44px hit area
          "&::after": { bottom: -9, content: '""', left: -4, position: "absolute", right: -4, top: -9 },
          backgroundColor: "background.paper",
          border: "2px solid",
          borderColor: "background.default",
          borderRadius: 999,
          bottom: 0,
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12)",
          gap: 0.5,
          height: 26,
          position: "absolute",
          px: 0.75,
          zIndex: 1,
          ...(isOwn ? { right: 12 } : { left: 12 }),
        }}
      >
        <Box component="span" sx={{ fontFamily: EMOJI_FONT_FAMILY, fontSize: 14, letterSpacing: 1, lineHeight: 1 }}>
          {visibleReactions
            .slice(0, MAX_SUMMARY_EMOJIS)
            .map(({ emoji }) => emoji)
            .join("")}
        </Box>
        {total > 1 && (
          <Typography
            component="span"
            variant="caption"
            fontWeight={500}
            color="text.secondary"
            sx={{ fontVariantNumeric: "tabular-nums" }}
          >
            {total}
          </Typography>
        )}
      </ButtonBase>
      <Popover
        open={!!anchorEl}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ horizontal: isOwn ? "right" : "left", vertical: "bottom" }}
        transformOrigin={{ horizontal: isOwn ? "right" : "left", vertical: "top" }}
        slotProps={{
          paper: {
            sx: {
              borderRadius: `${LIST_RADIUS}px`,
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.16)",
              minWidth: 260,
              mt: 1,
              p: `${ROW_INSET}px`,
            },
          },
        }}
      >
        {rows.map(({ emoji, isMine, userId }) => {
          const canRemove = isMine && !!onToggle;

          return (
            <ButtonBase
              key={`${emoji}-${userId}`}
              aria-label={canRemove ? `${labels.removeReaction} ${emoji}` : undefined}
              disabled={!canRemove}
              onClick={() => {
                onToggle?.(emoji);
                setAnchorEl(null);
              }}
              sx={{
                "&:hover": { backgroundColor: "action.hover" },
                "&.Mui-disabled": { color: "text.primary" },
                borderRadius: `${LIST_RADIUS - LIST_BORDER - ROW_INSET}px`,
                gap: 1.5,
                justifyContent: "flex-start",
                minHeight: 52,
                px: 1.5,
                textAlign: "left",
                width: "100%",
              }}
            >
              <Typography variant="body2" fontWeight={500} noWrap flex={1} minWidth={0}>
                {getName(userId)}
              </Typography>
              <Box component="span" sx={{ fontFamily: EMOJI_FONT_FAMILY, fontSize: 22, lineHeight: 1 }}>
                {emoji}
              </Box>
            </ButtonBase>
          );
        })}
      </Popover>
    </>
  );
};

export default ChatReactionSummary;
