import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import ChatLineIcon from "@/components/DataDisplay/Chat/components/ChatLineIcon";
import { LINE_ICON_PATHS } from "@/components/DataDisplay/Chat/constants";

interface ChatScrollToLatestProps {
  label: string;
  /** Messages received while the reader is up in the history */
  unseenCount: number;
  onClick: () => void;
}

/**
 * Back to the latest messages, floating over the list's bottom right corner
 */
const ChatScrollToLatest = ({ label, unseenCount, onClick }: ChatScrollToLatestProps) => (
  <ButtonBase
    aria-label={label}
    title={label}
    onClick={onClick}
    data-test="chatScrollToLatest"
    sx={{
      "&:hover": { backgroundColor: "action.hover" },
      backgroundColor: "background.paper",
      border: "1px solid",
      borderColor: "divider",
      borderRadius: "12px",
      bottom: 16,
      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.12)",
      color: "text.primary",
      height: 40,
      position: "absolute",
      right: 24,
      width: 40,
      zIndex: 1,
    }}
  >
    <ChatLineIcon d={LINE_ICON_PATHS.arrowDown} />
    {unseenCount > 0 && (
      <Box
        component="span"
        sx={{
          alignItems: "center",
          backgroundColor: "text.primary",
          borderRadius: 999,
          color: "background.paper",
          display: "flex",
          fontFamily: ({ typography }) => typography.fontFamily,
          fontSize: 11,
          fontWeight: 600,
          height: 18,
          justifyContent: "center",
          minWidth: 18,
          position: "absolute",
          px: 0.5,
          right: -6,
          top: -6,
        }}
      >
        {unseenCount}
      </Box>
    )}
  </ButtonBase>
);

export default ChatScrollToLatest;
