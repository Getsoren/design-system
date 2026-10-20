import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AiAssistantAvatar from "@/components/DataDisplay/AiAssistant/components/AiAssistantAvatar";
import { AI_ASSISTANT_AVATAR_SIZE } from "@/components/DataDisplay/AiAssistant/constants";
import type { AiAssistantThinkingProps } from "@/components/DataDisplay/AiAssistant/types";
import Button from "@/components/Inputs/Button/Button";

const AVATAR_GAP = 1.5;

/**
 * The assistant at work, in place of its next reply: the working avatar and what it does, then one
 * line per step of the turn, the one in progress pulsing.
 */
const AiAssistantThinking = ({
  label,
  steps = [],
  onStop,
  labels,
  slotProps,
  dataTestId = "assistantThinking",
}: AiAssistantThinkingProps) => (
  <Stack spacing={1} role="status" data-testid={dataTestId}>
    <Stack direction="row" alignItems="center" spacing={AVATAR_GAP}>
      <AiAssistantAvatar isWorking />
      <Typography variant="body2" color="text.secondary">
        {label}
      </Typography>
      {onStop && (
        <Button {...slotProps?.stopButton} variant="link" size="small" onClick={onStop}>
          {labels?.stop ?? "Stop"}
        </Button>
      )}
    </Stack>
    {steps.length > 0 && (
      <Stack
        spacing={1}
        data-testid={`${dataTestId}Steps`}
        sx={{
          "@keyframes aiAssistantThinkingStep": {
            "0%, 100%": { opacity: 1 },
            "50%": { opacity: 0.45 },
          },
          "@media (prefers-reduced-motion: reduce)": {
            "&& > *": { animation: "none" },
          },
          // Steps line up with the label, past the avatar.
          paddingLeft: ({ spacing }) => `calc(${AI_ASSISTANT_AVATAR_SIZE}px + ${spacing(AVATAR_GAP)})`,
        }}
      >
        {steps.map(({ id, label: stepLabel, isInProgress }) => (
          <Typography
            key={id}
            variant="caption"
            color={isInProgress ? "text.secondary" : "text.disabled"}
            sx={{ animation: isInProgress ? "aiAssistantThinkingStep 1.6s ease-in-out infinite" : "none" }}
          >
            {stepLabel}
          </Typography>
        ))}
      </Stack>
    )}
  </Stack>
);

export default AiAssistantThinking;
