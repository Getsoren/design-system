import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { AiAssistantHeaderProps } from "@/components/DataDisplay/AiAssistant/types";
import CloseIcon from "@/components/DataDisplay/Icons/CloseIcon";
import CloseLineIcon from "@/components/DataDisplay/Icons/CloseLineIcon";
import CollapseIcon from "@/components/DataDisplay/Icons/CollapseIcon";
import ExpandIcon from "@/components/DataDisplay/Icons/ExpandIcon";
import NewChatIcon from "@/components/DataDisplay/Icons/NewChatIcon";

/** Panel header: brand icon + assistant name (host-app choice) + actions + close */
const AiAssistantHeader = ({
  title,
  subtitle,
  tag,
  onClose,
  actions,
  divider = true,
  docked = false,
  onToggleDocked,
  onNewConversation,
  labels,
  icon,
}: AiAssistantHeaderProps) => (
  <>
    <Stack direction="row" alignItems="center" justifyContent="space-between" paddingX={2} paddingY={1}>
      <Stack direction="row" alignItems="center" spacing={1}>
        {icon}
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
        {subtitle && (
          <Typography variant="caption" color="text.secondary" lineHeight={1}>
            {subtitle}
          </Typography>
        )}
      </Stack>
      <Stack direction="row" alignItems="center" spacing={1}>
        {actions}
        {onNewConversation && (
          <IconButton
            onClick={onNewConversation}
            size="small"
            aria-label={labels?.newConversation ?? "New conversation"}
            title={labels?.newConversation ?? "New conversation"}
            data-testid="assistantNewConversation"
          >
            <NewChatIcon fontSize="small" />
          </IconButton>
        )}
        {onToggleDocked && (
          <IconButton
            onClick={onToggleDocked}
            size="small"
            aria-label={docked ? (labels?.undock ?? "Float") : (labels?.dock ?? "Dock")}
            data-testid="assistantToggleDocked"
          >
            {docked ? <CollapseIcon fontSize="small" /> : <ExpandIcon fontSize="small" />}
          </IconButton>
        )}
        <IconButton onClick={onClose} size="small" aria-label={labels?.close ?? "Close"}>
          {/* Stroked cross, to match the weight of the dock toggle's glyph. */}
          {onToggleDocked ? <CloseLineIcon fontSize="small" /> : <CloseIcon />}
        </IconButton>
      </Stack>
    </Stack>
    {divider && <Divider />}
  </>
);

export default AiAssistantHeader;
