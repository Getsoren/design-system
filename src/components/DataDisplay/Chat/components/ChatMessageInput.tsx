import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { type KeyboardEvent, useEffect, useRef, useState } from "react";
import type { ChatMessageInputProps } from "@/components/DataDisplay/Chat/types";
import SendIcon from "@/components/DataDisplay/Icons/SendIcon";
import Button from "@/components/Inputs/Button";

const RADIUS = 15;

const ChatMessageInput = ({ onSend, labels, autoFocusKey, isSending, defaultMessage, maxLength = 10000 }: ChatMessageInputProps) => {
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSend = () => {
    if (!message.trim() || isSending) {
      return;
    }
    onSend(message.trim());
    setMessage("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  /**
   * Sync message state when defaultMessage prop changes (e.g. pre-filled message on drawer open)
   */
  useEffect(() => {
    if (defaultMessage) {
      setMessage(defaultMessage);
    }
  }, [defaultMessage]);

  return (
    <Box
      sx={{
        backgroundColor: "grey.A100",
        borderTop: ({ palette }) => `1px solid ${palette.divider}`,
        p: 2,
      }}
    >
      <TextField
        fullWidth
        multiline
        autoFocus
        key={autoFocusKey}
        inputRef={inputRef}
        maxRows={4}
        placeholder={labels?.writeAMessage ?? "Write a message..."}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        slotProps={{ htmlInput: { maxLength } }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": { borderColor: "divider" },
            "&.Mui-focused fieldset": {
              borderBottomWidth: 0,
              borderColor: "divider",
              borderLeftWidth: 1,
              borderRightWidth: 1,
              borderTopWidth: 1,
            },
          },
          fieldset: {
            borderBottom: 0,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            borderColor: "divider",
            borderTopLeftRadius: RADIUS,
            borderTopRightRadius: RADIUS,
          },
        }}
      />
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          border: ({ palette }) => `1px solid ${palette.divider}`,
          borderBottomLeftRadius: RADIUS,
          borderBottomRightRadius: RADIUS,
          padding: 1,
        }}
      >
        <Stack direction="row" spacing={1} />
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="caption" color="text.secondary">
            {message.length}/{maxLength}
          </Typography>
          <Button variant="contained" size="xSmall" endIcon={<SendIcon />} onClick={handleSend} disabled={!message.trim() || isSending}>
            {labels?.send ?? "Send"}
          </Button>
        </Stack>
      </Stack>
      {/* Pass an empty string to hide the hint entirely (undefined keeps the default) */}
      {labels?.enterToSend !== "" && (
        <Typography variant="caption" color="text.secondary" display="block" textAlign="center" mt={0.5}>
          {labels?.enterToSend ?? "Enter to Send"}
        </Typography>
      )}
    </Box>
  );
};

export default ChatMessageInput;
