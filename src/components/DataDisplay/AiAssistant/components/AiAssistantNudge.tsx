import Grow from "@mui/material/Grow";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { AiAssistantNudgeProps } from "@/components/DataDisplay/AiAssistant/types";
import AiSparkIcon from "@/components/DataDisplay/Icons/AiSparkIcon";
import CloseIcon from "@/components/DataDisplay/Icons/CloseIcon";

/**
 * Contextual nudge anchored where the assistant lives — a compact bubble growing out of
 * the Fab, same spot and motion as the Panel but free-height and one-click dismissable.
 * No backdrop, no focus trap: the ongoing interaction is never blocked. Host apps use it
 * for proactive one-shot messages (onboarding hints…) without opening the full panel.
 */
const AiAssistantNudge = ({ open, title, onClose, children, dataTestId = "assistantNudge" }: AiAssistantNudgeProps) => (
  <Grow
    in={open}
    unmountOnExit
    timeout={{ enter: 220, exit: 150 }}
    easing={{ enter: "cubic-bezier(0.2, 0, 0, 1)", exit: "cubic-bezier(0.4, 0, 1, 1)" }}
  >
    <Paper
      data-testid={dataTestId}
      elevation={8}
      // Announced politely by screen readers when the bubble appears
      role="status"
      sx={{
        borderRadius: 3,
        bottom: 96,
        padding: 2,
        position: "fixed",
        right: { sm: 24, xs: 16 },
        // Same origin as the Panel: the grow visually starts from the Fab
        transformOrigin: "calc(100% - 24px) calc(100% + 48px)",
        width: { sm: 340, xs: "calc(100vw - 32px)" },
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
        <Stack direction="row" alignItems="center" spacing={1} minWidth={0}>
          <AiSparkIcon variant="gradient" size={20} />
          <Typography variant="subtitle2" fontWeight={600}>
            {title}
          </Typography>
        </Stack>
        <IconButton onClick={onClose} size="small" data-testid={`${dataTestId}Close`}>
          <CloseIcon />
        </IconButton>
      </Stack>
      {/* pre-line: hosts pass translated strings where \n\n separates short paragraphs */}
      <Typography component="div" variant="body2" color="text.secondary" marginTop={1} whiteSpace="pre-line">
        {children}
      </Typography>
    </Paper>
  </Grow>
);

export default AiAssistantNudge;
