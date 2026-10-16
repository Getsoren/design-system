import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

interface ChatUnreadDividerProps {
  label: string;
}

/**
 * "New messages", above the first one the reader hasn't seen: where the thread opens
 */
const ChatUnreadDivider = ({ label }: ChatUnreadDividerProps) => (
  <Divider
    data-unread-divider
    data-test="chatUnreadDivider"
    sx={{ "& .MuiDivider-wrapper": { px: 1.5 }, "&::after, &::before": { borderTopColor: "text.disabled" } }}
  >
    <Typography variant="caption" fontWeight={600} color="text.primary" lineHeight={1}>
      {label}
    </Typography>
  </Divider>
);

export default ChatUnreadDivider;
