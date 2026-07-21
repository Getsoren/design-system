import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { AiAssistantConfirmationCardProps } from "@/components/DataDisplay/AiAssistant/types";
import CheckIcon from "@/components/DataDisplay/Icons/CheckIcon";
import CloseIcon from "@/components/DataDisplay/Icons/CloseIcon";

/**
 * Human-in-the-loop gate for destructive assistant actions: shows what is about to be
 * done and blocks until the user accepts or declines. After the choice, the card stays
 * in the thread as a record of the decision.
 */
const AiAssistantConfirmationCard = ({
  heading,
  summary,
  details,
  status,
  onAccept,
  onDecline,
  labels,
  dataTestId = "assistantConfirmationCard",
}: AiAssistantConfirmationCardProps) => (
  <Paper variant="outlined" sx={{ alignSelf: "stretch", padding: 1.5 }} data-testid={dataTestId}>
    <Stack spacing={1}>
      <Typography variant="caption" color="text.secondary">
        {heading}
      </Typography>
      <Typography variant="subtitle2">{summary}</Typography>
      {details && (
        <Typography variant="caption" component="pre" sx={{ fontFamily: "monospace", margin: 0, whiteSpace: "pre-wrap" }}>
          {details}
        </Typography>
      )}
      {status === "pending" ? (
        <Stack direction="row" spacing={1}>
          <Button size="small" variant="contained" data-testid={`${dataTestId}Accept`} onClick={onAccept}>
            {labels.accept}
          </Button>
          <Button size="small" variant="outlined" data-testid={`${dataTestId}Decline`} onClick={onDecline}>
            {labels.decline}
          </Button>
        </Stack>
      ) : (
        <Stack direction="row" alignItems="center" spacing={0.5} sx={{ "& svg": { fontSize: 18 } }}>
          <Box sx={{ color: status === "approved" ? "success.main" : "text.disabled", display: "flex" }}>
            {status === "approved" ? <CheckIcon /> : <CloseIcon />}
          </Box>
          <Typography variant="caption" color="text.secondary">
            {status === "approved" ? labels.accept : labels.decline}
          </Typography>
        </Stack>
      )}
    </Stack>
  </Paper>
);

export default AiAssistantConfirmationCard;
