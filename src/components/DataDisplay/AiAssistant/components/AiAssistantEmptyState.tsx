import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AiAssistantShape from "@/components/DataDisplay/AiAssistant/components/AiAssistantShape";
import type { AiAssistantEmptyStateProps } from "@/components/DataDisplay/AiAssistant/types";

const ICON_SHAPE = 48;

/**
 * Welcome of an empty thread, set right above the composer — render it conditionally in place of the
 * message list content ({!messages.length && <AiAssistant.EmptyState … />}).
 */
const AiAssistantEmptyState = ({ title, icon, children }: AiAssistantEmptyStateProps) => (
  <Stack flex={1} justifyContent="flex-end" height="100%" paddingX={1} paddingBottom={1} data-testid="assistantEmptyState">
    {icon && (
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          height: ICON_SHAPE,
          justifyContent: "center",
          marginBottom: 2.5,
          position: "relative",
          width: ICON_SHAPE,
        }}
      >
        <AiAssistantShape />
        <Box sx={{ display: "flex", position: "relative" }}>{icon}</Box>
      </Box>
    )}
    <Typography variant="h5" component="p" fontWeight={500} marginBottom={1.5}>
      {title}
    </Typography>
    <Stack spacing={1}>{children}</Stack>
  </Stack>
);

export default AiAssistantEmptyState;
