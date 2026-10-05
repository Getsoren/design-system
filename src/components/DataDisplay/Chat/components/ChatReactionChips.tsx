import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { EMOJI_FONT_FAMILY } from "@/components/DataDisplay/Chat/constants";
import type { ChatLabels } from "@/components/DataDisplay/Chat/hooks/useChatLabels";
import type { ChatParticipant, ChatReaction } from "@/components/DataDisplay/Chat/types";
import formatParticipantNames from "@/components/DataDisplay/Chat/utils/formatParticipantNames";
import AddReactionIcon from "@/components/DataDisplay/Icons/AddReactionIcon";

interface ChatReactionChipsProps {
  reactions: ChatReaction[];
  currentUserId?: string;
  participants?: ChatParticipant[] | null;
  formatParticipantName?: (participant: ChatParticipant) => string;
  labels: ChatLabels;
  isOwn?: boolean;
  /** Without it the pills are read-only */
  onToggle?: (emoji: string) => void;
  onAdd?: (anchor: HTMLElement) => void;
}

const chipSx = {
  // A 32px pill, still a 44px hit area
  "&::after": { bottom: -6, content: '""', left: 0, position: "absolute", right: 0, top: -6 },
  "&:hover": { backgroundColor: "action.hover" },
  backgroundColor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: 999,
  gap: 0.5,
  height: 32,
  minWidth: 52,
  px: 1.25,
};

/**
 * One pill per emoji under the message, with its count; mine stands out with a discreet fill and outline.
 */
const ChatReactionChips = ({
  reactions,
  currentUserId,
  participants,
  formatParticipantName,
  labels,
  isOwn,
  onToggle,
  onAdd,
}: ChatReactionChipsProps) => {
  const visibleReactions = reactions.filter(({ userIds }) => userIds.length > 0);

  if (!visibleReactions.length) {
    return null;
  }

  const getNames = (userIds: string[]) => {
    const others = participants?.filter(({ userId }) => userId !== currentUserId && userIds.includes(userId));
    const othersNames = formatParticipantNames(others, formatParticipantName);

    return [currentUserId && userIds.includes(currentUserId) ? labels.you : "", othersNames].filter(Boolean).join(", ");
  };

  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent={isOwn ? "flex-end" : "flex-start"}
      gap={0.75}
      py={0.75}
      data-test="chatReactions"
    >
      {visibleReactions.map(({ emoji, userIds }) => {
        const isMine = !!currentUserId && userIds.includes(currentUserId);
        const names = getNames(userIds);

        return (
          <Tooltip key={emoji} title={names} arrow>
            {/* The span keeps the names on hover when the pills are read-only (a disabled button gets no events) */}
            <Box component="span" display="inline-flex">
              <ButtonBase
                aria-pressed={isMine}
                aria-label={`${emoji} ${userIds.length}${names ? ` · ${names}` : ""}`}
                disabled={!onToggle}
                onClick={() => onToggle?.(emoji)}
                data-mine={isMine || undefined}
                sx={{
                  ...chipSx,
                  ...(isMine && {
                    backgroundColor: "action.selected",
                    borderColor: "text.secondary",
                  }),
                }}
              >
                <Typography component="span" sx={{ fontFamily: EMOJI_FONT_FAMILY, fontSize: 16, lineHeight: 1 }}>
                  {emoji}
                </Typography>
                <Typography component="span" variant="body2" fontWeight={isMine ? 600 : 500} sx={{ fontVariantNumeric: "tabular-nums" }}>
                  {userIds.length}
                </Typography>
              </ButtonBase>
            </Box>
          </Tooltip>
        );
      })}
      {onAdd && (
        <Tooltip title={labels.addReaction} arrow>
          <ButtonBase
            data-chat-reaction-add
            aria-label={labels.addReaction}
            onClick={(e) => onAdd(e.currentTarget)}
            sx={{ ...chipSx, color: "text.secondary", minWidth: 44 }}
          >
            <AddReactionIcon sx={{ fontSize: 18 }} />
          </ButtonBase>
        </Tooltip>
      )}
    </Stack>
  );
};

export default ChatReactionChips;
