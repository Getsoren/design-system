import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";
import ChatLineIcon from "@/components/DataDisplay/Chat/components/ChatLineIcon";
import { LINE_ICON_PATHS } from "@/components/DataDisplay/Chat/constants";

interface ChatComposerNoticeProps {
  children: ReactNode;
}

/**
 * Airbnb-like: what to expect from the other side, right above the field
 */
const ChatComposerNotice = ({ children }: ChatComposerNoticeProps) => (
  <Stack direction="row" alignItems="center" justifyContent="center" spacing={0.75} data-test="chatComposerNotice" sx={{ pt: 1, px: 3 }}>
    <ChatLineIcon d={LINE_ICON_PATHS.clock} size={14} sx={{ color: "text.secondary" }} />
    <Typography variant="caption" color="text.secondary">
      {children}
    </Typography>
  </Stack>
);

export default ChatComposerNotice;
