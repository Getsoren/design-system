import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AiAssistantShape from "@/components/DataDisplay/AiAssistant/components/AiAssistantShape";
import type { AiAssistantEmptyStateProps } from "@/components/DataDisplay/AiAssistant/types";

const ICON_SHAPE = 48;

/**
 * Invitation for an empty thread — render it conditionally in place of the
 * message list content ({!messages.length && <AiAssistant.EmptyState … />}).
 */
const AiAssistantEmptyState = ({ message, title, icon, children }: AiAssistantEmptyStateProps) => {
  if (title) {
    return (
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
        {message && (
          <Typography variant="body2" color="text.secondary" marginBottom={1}>
            {message}
          </Typography>
        )}
        <Stack spacing={1}>{children}</Stack>
      </Stack>
    );
  }

  return (
    <Stack flex={1} justifyContent="center" alignItems="center" paddingX={4} height="100%" spacing={2}>
      <Typography variant="body2" color="text.secondary" textAlign="center">
        {message}
      </Typography>
      {children}
    </Stack>
  );
};

export default AiAssistantEmptyState;
