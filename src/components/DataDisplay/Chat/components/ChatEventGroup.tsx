import ButtonBase from "@mui/material/ButtonBase";
import Collapse from "@mui/material/Collapse";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { type ReactNode, useState } from "react";
import { EVENT_MAX_WIDTH } from "@/components/DataDisplay/Chat/components/ChatEventMessage";
import type { ChatMessage } from "@/components/DataDisplay/Chat/types";
import ChevronIcon from "@/components/DataDisplay/Icons/ChevronIcon";

interface ChatEventGroupProps {
  messages: ChatMessage[];
  /** "order updates", after the count */
  label: string;
  renderEvent: (message: ChatMessage) => ReactNode;
}

/**
 * A run of automatic messages folded into a single line ("3 order updates"), unfolded on click.
 */
const ChatEventGroup = ({ messages, label, renderEvent }: ChatEventGroupProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Stack alignItems="center" data-test="chatEventGroup">
      <ButtonBase
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        sx={{
          "&:hover": { backgroundColor: "action.selected" },
          backgroundColor: "action.hover",
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 1.5,
          color: "text.secondary",
          gap: 1,
          maxWidth: `min(${EVENT_MAX_WIDTH}px, 100%)`,
          minHeight: 44,
          px: 2,
        }}
      >
        <Typography variant="body2" fontWeight={500} color="text.primary">
          {messages.length} {label}
        </Typography>
        <ChevronIcon sx={{ fontSize: 18, transform: isOpen ? "rotate(180deg)" : "none", transition: "transform 150ms" }} />
      </ButtonBase>
      <Collapse in={isOpen} unmountOnExit sx={{ alignSelf: "stretch" }}>
        <Stack spacing={1} pt={1} alignItems="center">
          {messages.map((message) => (
            <Stack key={message.id} alignItems="center" width="100%">
              {renderEvent(message)}
            </Stack>
          ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

export default ChatEventGroup;
