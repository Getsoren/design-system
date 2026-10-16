import Stack from "@mui/material/Stack";
import ChatPill from "@/components/DataDisplay/Chat/components/ChatPill";
import type { ChatLabels } from "@/components/DataDisplay/Chat/hooks/useChatLabels";

export type ChatMessagesFilterValue = "all" | "messages" | "updates";

interface ChatMessagesFilterProps {
  value: ChatMessagesFilterValue;
  labels: Pick<ChatLabels, "filterAll" | "filterMessages" | "filterUpdates">;
  onChange: (value: ChatMessagesFilterValue) => void;
}

/**
 * All, the messages only, or the order updates only
 */
const ChatMessagesFilter = ({ value, labels, onChange }: ChatMessagesFilterProps) => {
  const options = [
    { label: labels.filterAll, value: "all" },
    { label: labels.filterMessages, value: "messages" },
    { label: labels.filterUpdates, value: "updates" },
  ] as const;

  return (
    <Stack direction="row" spacing={1} sx={{ overflowX: "auto", px: 3, py: 1.5 }} data-test="chatMessagesFilter">
      {options.map((option) => (
        <ChatPill key={option.value} selected={option.value === value} onClick={() => onChange(option.value)}>
          {option.label}
        </ChatPill>
      ))}
    </Stack>
  );
};

export default ChatMessagesFilter;
