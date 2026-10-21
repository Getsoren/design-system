import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { AiAssistantEmptyStateProps } from "@/components/DataDisplay/AiAssistant/types";

/**
 * Welcome of an empty thread, set right above the composer — render it conditionally in place of the
 * message list content ({!messages.length && <AiAssistant.EmptyState … />}).
 */
const AiAssistantEmptyState = ({ title, icon, children }: AiAssistantEmptyStateProps) => (
  <Stack flex={1} justifyContent="flex-end" height="100%" paddingX={1} paddingBottom={1} data-testid="assistantEmptyState">
    {icon && <Box sx={{ display: "flex", marginBottom: 2.5 }}>{icon}</Box>}
    <Typography variant="h5" component="p" fontWeight={500} marginBottom={1.5}>
      {title}
    </Typography>
    <Stack spacing={1}>{children}</Stack>
  </Stack>
);

export default AiAssistantEmptyState;
