import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { type KeyboardEvent, useEffect, useRef, useState } from "react";
import type { ChatMessageInputProps } from "@/components/DataDisplay/Chat/types";
import ArrowUpwardRoundedIcon from "@/components/DataDisplay/Icons/ArrowUpwardRoundedIcon";
import useTranslation from "@/hooks/useTranslation/useTranslation";
import { getSubtleSurfaceColor } from "@/utils/colors";

const RADIUS = 15;
const COUNTER_VISIBLE_FROM = 40;

const ChatMessageInput = ({
  onSend,
  labels,
  autoFocusKey,
  isSending,
  defaultMessage,
  startActions,
  slotProps,
  maxLength = 10000,
  footnote,
  variant = "outlined",
}: ChatMessageInputProps) => {
  const { t } = useTranslation();
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSend = () => {
    if (!message.trim() || isSending) {
      return;
    }
    onSend(message.trim());
    setMessage("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
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

  const sendLabel = labels?.send ?? t("send");
  const counter = message.length > maxLength - COUNTER_VISIBLE_FROM && (
    <Typography variant="caption" color={message.length >= maxLength ? "error.main" : "text.secondary"}>
      {message.length}/{maxLength}
    </Typography>
  );

  if (variant === "filled") {
    return (
      <Box sx={{ p: 2, pt: 1 }}>
        <Box
          sx={{
            "&:focus-within": { borderColor: "border.outline" },
            backgroundColor: ({ palette }) => getSubtleSurfaceColor(palette),
            border: 1,
            borderColor: "transparent",
            // Twice the theme's radius (16px)
            borderRadius: 2,
            transition: "border-color 150ms ease",
          }}
        >
          <InputBase
            fullWidth
            multiline
            autoFocus
            key={autoFocusKey}
            inputRef={inputRef}
            maxRows={6}
            placeholder={labels?.writeAMessage ?? t("writeAMessage")}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            slotProps={{ input: { maxLength } }}
            // The theme gives inputs a white background.
            sx={{ backgroundColor: "transparent", fontSize: ({ typography }) => typography.body2.fontSize, pt: 1.75, px: 2 }}
          />
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ p: 1, pl: 1.25 }}>
            <Stack direction="row" alignItems="center" spacing={1}>
              {startActions}
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              {counter}
              <IconButton
                {...slotProps?.sendButton}
                aria-label={sendLabel}
                title={sendLabel}
                onClick={handleSend}
                disabled={!message.trim() || isSending}
                sx={{
                  "&:hover": { backgroundColor: "primary.dark" },
                  "&.Mui-disabled": { backgroundColor: "action.disabledBackground", color: "action.disabled" },
                  backgroundColor: "primary.main",
                  borderRadius: "50%",
                  color: "primary.contrastText",
                  height: 32,
                  width: 32,
                }}
              >
                <ArrowUpwardRoundedIcon sx={{ fontSize: 18 }} />
              </IconButton>
            </Stack>
          </Stack>
        </Box>
        {footnote && (
          <Typography variant="caption" color="text.secondary" display="block" textAlign="center" mt={1}>
            {footnote}
          </Typography>
        )}
      </Box>
    );
  }

  return (
    <Box
      sx={{
        backgroundColor: "grey.A100",
        // The composer surface is as light as the message list: without this line the two merge.
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
        placeholder={labels?.writeAMessage ?? t("writeAMessage")}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        slotProps={{ htmlInput: { maxLength } }}
        sx={{
          // body1 (16px) is a step above every other field: align the composer on body2 like the rest.
          "& .MuiInputBase-root": { fontSize: ({ typography }) => typography.body2.fontSize },
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
      {/* The input fieldset draws the top and the sides, this bar the sides and the bottom: no top
          border here, so both merge into a single continuous pill outline. */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          border: ({ palette }) => `1px solid ${palette.divider}`,
          borderBottomLeftRadius: RADIUS,
          borderBottomRightRadius: RADIUS,
          borderTop: "none",
          padding: 1,
          paddingTop: 0,
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          {startActions}
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          {/* The counter only comes out near the limit: shown permanently it taught nothing, hidden
              entirely the input truncated silently. */}
          {message.length > maxLength - COUNTER_VISIBLE_FROM && (
            <Typography variant="caption" color={message.length >= maxLength ? "error.main" : "text.secondary"}>
              {message.length}/{maxLength}
            </Typography>
          )}
          {/* Send: an upward arrow, like the note field of an order. */}
          <IconButton
            {...slotProps?.sendButton}
            aria-label={labels?.send ?? t("send")}
            title={labels?.send ?? t("send")}
            onClick={handleSend}
            disabled={!message.trim() || isSending}
            sx={{
              "&:hover": { backgroundColor: "primary.dark" },
              "&.Mui-disabled": { backgroundColor: "action.disabledBackground", color: "action.disabled" },
              backgroundColor: "primary.main",
              borderRadius: 1.5,
              color: "primary.contrastText",
              height: 32,
              width: 32,
            }}
          >
            <ArrowUpwardRoundedIcon sx={{ fontSize: 18 }} />
          </IconButton>
        </Stack>
      </Stack>
      {/* Pass an empty string to hide the hint entirely (undefined keeps the default) */}
      {labels?.enterToSend !== "" && (
        <Typography variant="caption" color="text.secondary" display="block" textAlign="center" mt={0.5}>
          {labels?.enterToSend ?? t("enterToSend")}
        </Typography>
      )}
    </Box>
  );
};

export default ChatMessageInput;
