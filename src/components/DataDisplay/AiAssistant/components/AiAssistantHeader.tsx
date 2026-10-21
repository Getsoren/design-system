import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { AiAssistantHeaderProps } from "@/components/DataDisplay/AiAssistant/types";
import CloseLineIcon from "@/components/DataDisplay/Icons/CloseLineIcon";
import CollapseIcon from "@/components/DataDisplay/Icons/CollapseIcon";
import ExpandIcon from "@/components/DataDisplay/Icons/ExpandIcon";
import NewChatIcon from "@/components/DataDisplay/Icons/NewChatIcon";
import useTranslation from "@/hooks/useTranslation/useTranslation";

/** Panel header: the assistant's name (host-app choice) and its tag, then the panel's buttons */
const AiAssistantHeader = ({ title, tag, onClose, docked = false, onToggleDocked, onNewConversation, labels }: AiAssistantHeaderProps) => {
  const { t } = useTranslation();

  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between" paddingX={2} paddingY={1}>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Typography variant="subtitle1" fontWeight={500}>
          {title}
        </Typography>
        {tag && (
          <Chip
            label={tag}
            size="xSmall"
            variant="rounded"
            // Uppercase reads larger, hence a font size below xSmall.
            sx={{
              "& .MuiChip-label": { fontSize: ({ typography }) => typography.pxToRem(10), paddingX: 0.75 },
              fontWeight: 500,
              height: 18,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
            data-testid="assistantHeaderTag"
          />
        )}
      </Stack>
      <Stack direction="row" alignItems="center" spacing={1}>
        {onNewConversation && (
          <IconButton
            onClick={onNewConversation}
            size="small"
            aria-label={labels?.newConversation ?? t("newConversation")}
            title={labels?.newConversation ?? t("newConversation")}
            data-testid="assistantNewConversation"
          >
            <NewChatIcon fontSize="small" />
          </IconButton>
        )}
        {onToggleDocked && (
          <IconButton
            onClick={onToggleDocked}
            size="small"
            aria-label={docked ? (labels?.undock ?? t("undock")) : (labels?.dock ?? t("dock"))}
            data-testid="assistantToggleDocked"
          >
            {docked ? <CollapseIcon fontSize="small" /> : <ExpandIcon fontSize="small" />}
          </IconButton>
        )}
        {/* Stroked, like the other glyphs of the header. */}
        <IconButton onClick={onClose} size="small" aria-label={labels?.close ?? t("close")}>
          <CloseLineIcon fontSize="small" />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default AiAssistantHeader;
