import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { AiAssistantEmptyStateProps } from "@/components/DataDisplay/AiAssistant/types";

/**
 * Centered invitation for an empty thread — render it conditionally in place of the
 * message list content ({!messages.length && <AiAssistant.EmptyState … />}).
 */
const AiAssistantEmptyState = ({ message, children }: AiAssistantEmptyStateProps) => (
  <Stack flex={1} justifyContent="center" alignItems="center" paddingX={4} height="100%" spacing={2}>
    <Typography variant="body2" color="text.secondary" textAlign="center">
      {message}
    </Typography>
    {children}
  </Stack>
);

export default AiAssistantEmptyState;
