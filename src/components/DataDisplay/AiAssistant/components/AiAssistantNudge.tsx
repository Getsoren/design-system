import Button from "@mui/material/Button";
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
 *
 * Multi-step content (`content` as an array + `labels`) brings a built-in stepper
 * (n/N, previous/next, finish on the last step). The step is CONTROLLED (`activeStep` /
 * `onStepChange`) so the host can mirror it — e.g. moving a spotlight per step.
 */
const AiAssistantNudge = ({
  open,
  title,
  onClose,
  content,
  children,
  activeStep = 0,
  onStepChange,
  labels,
  dataTestId = "assistantNudge",
}: AiAssistantNudgeProps) => {
  const steps = typeof content === "string" ? [content] : (content ?? []);
  // Clamped so a stale controlled index (shrunk content) can never render a blank body
  const stepIndex = Math.max(0, Math.min(activeStep, steps.length - 1));
  const isLastStep = stepIndex >= steps.length - 1;
  const hasStepper = steps.length > 1 && !!labels;

  return (
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
          // Snackbar level (above modal backdrops): nudges fire on screens that may live
          // inside a modal, and the bubble must stay readable and dismissable there
          zIndex: (theme) => theme.zIndex.snackbar,
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
          {children ?? steps[stepIndex]}
        </Typography>
        {hasStepper && (
          <Stack direction="row" alignItems="center" justifyContent="space-between" marginTop={1.5}>
            <Typography variant="caption" color="text.secondary">
              {`${stepIndex + 1}/${steps.length}`}
            </Typography>
            <Stack direction="row" spacing={1}>
              <Button
                size="small"
                variant="text"
                color="inherit"
                disabled={stepIndex === 0}
                onClick={() => onStepChange?.(stepIndex - 1)}
                data-testid={`${dataTestId}Previous`}
              >
                {labels.previous}
              </Button>
              {/* Advancing past the last step IS the dismissal — one gesture, no separate close needed */}
              <Button
                size="small"
                variant="contained"
                onClick={() => (isLastStep ? onClose() : onStepChange?.(stepIndex + 1))}
                data-testid={`${dataTestId}Next`}
              >
                {isLastStep ? labels.finish : labels.next}
              </Button>
            </Stack>
          </Stack>
        )}
      </Paper>
    </Grow>
  );
};

export default AiAssistantNudge;
