import CircularProgress from "@mui/material/CircularProgress";
import Popover from "@mui/material/Popover";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { lazy, Suspense } from "react";
import { EMOJI_PICKER_HEIGHT, getEmojiPickerWidth } from "@/components/DataDisplay/Chat/constants";
import type { ChatLabels } from "@/components/DataDisplay/Chat/hooks/useChatLabels";

// The picker and its emoji data only load at the first opening
const ChatEmojiPickerContent = lazy(() => import("@/components/DataDisplay/Chat/components/ChatEmojiPickerContent"));

interface ChatEmojiPickerProps {
  anchorEl: HTMLElement | null;
  onClose: () => void;
  onSelect: (emoji: string) => void;
  labels: ChatLabels;
}

const ChatEmojiPicker = ({ anchorEl, onClose, onSelect, labels }: ChatEmojiPickerProps) => {
  const { breakpoints } = useTheme();
  const columns = useMediaQuery(breakpoints.down("sm")) ? 7 : 8;
  // Above the message when there is room, below otherwise (the first messages of a conversation)
  const opensBelow = !!anchorEl && anchorEl.getBoundingClientRect().top < EMOJI_PICKER_HEIGHT + 16;

  return (
    <Popover
      open={!!anchorEl}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{ horizontal: "center", vertical: opensBelow ? "bottom" : "top" }}
      transformOrigin={{ horizontal: "center", vertical: opensBelow ? "top" : "bottom" }}
      slotProps={{ paper: { sx: { borderRadius: 3, boxShadow: "0 8px 32px rgba(0, 0, 0, 0.16)", my: 1 } } }}
    >
      <Suspense
        fallback={
          <Stack
            alignItems="center"
            justifyContent="center" // Same box as the picker, so the popover is placed once and for all
            sx={{ color: "text.secondary", height: EMOJI_PICKER_HEIGHT, width: getEmojiPickerWidth(columns) }}
          >
            <CircularProgress size={24} color="inherit" />
          </Stack>
        }
      >
        <ChatEmojiPickerContent columns={columns} onSelect={onSelect} labels={labels} />
      </Suspense>
    </Popover>
  );
};

export default ChatEmojiPicker;
