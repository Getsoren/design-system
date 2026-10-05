import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import type { ChatConversationReadOnly } from "@/components/DataDisplay/Chat/types";
import Button from "@/components/Inputs/Button/Button";

interface ChatReadOnlyBarProps {
  readOnly: ChatConversationReadOnly;
  actionLabel: string;
}

/**
 * Front and Intercom-like: a thread read without being one of its participants ends on a bar to join it, in place of
 * the composer.
 */
const ChatReadOnlyBar = ({ readOnly, actionLabel }: ChatReadOnlyBarProps) => {
  const [isJoining, setIsJoining] = useState(false);

  const handleAction = () => {
    const result = readOnly.onAction();

    if (result instanceof Promise) {
      setIsJoining(true);
      result.catch(() => {}).finally(() => setIsJoining(false));
    }
  };

  return (
    <Stack
      direction={{ sm: "row", xs: "column" }}
      alignItems={{ sm: "center", xs: "stretch" }}
      spacing={1.5}
      data-test="chatReadOnlyBar"
      sx={{
        backgroundColor: "grey.A100",
        borderTop: ({ palette }) => `1px solid ${palette.divider}`,
        p: 2,
      }}
    >
      <Typography variant="body2" color="text.secondary" flex={1}>
        {readOnly.label}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        isLoading={isJoining}
        onClick={handleAction}
        sx={{
          // Keeps its ink around the spinner
          "&.Mui-disabled": { backgroundColor: "primary.main", color: "primary.contrastText" },
          flexShrink: 0,
          minHeight: 44,
        }}
      >
        {actionLabel}
      </Button>
    </Stack>
  );
};

export default ChatReadOnlyBar;
