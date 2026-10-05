import Box from "@mui/material/Box";
import SvgIcon from "@mui/material/SvgIcon";
import Tooltip from "@mui/material/Tooltip";

export type ChatReadReceiptStatus = "sending" | "sent" | "read";

interface ChatReadReceiptProps {
  status: ChatReadReceiptStatus;
  /** "Sent", or "Seen by Marc Dupont · 14:32" */
  label: string;
}

const ICON_PATHS = {
  read: "M18 6 7 17l-5-5M22 10l-7.5 7.5L13 16",
  sending: "M12 7v5l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  sent: "M20 6 9 17l-5-5",
};

/**
 * WhatsApp-like ticks next to the time of my message: a clock while sending, one grey tick once sent, two blue ticks
 * once another participant has read it.
 */
const ChatReadReceipt = ({ status, label }: ChatReadReceiptProps) => (
  <Tooltip title={label}>
    <Box
      component="span"
      role="img"
      aria-label={label}
      data-test="chatReadReceipt"
      data-status={status}
      sx={{
        color: { read: "info.main", sending: "text.disabled", sent: "text.secondary" }[status],
        display: "inline-flex",
      }}
    >
      <SvgIcon viewBox="0 0 24 24" sx={{ fontSize: status === "sending" ? 13 : 16 }}>
        <path d={ICON_PATHS[status]} fill="none" stroke="currentColor" strokeWidth={2.25} strokeLinecap="round" strokeLinejoin="round" />
      </SvgIcon>
    </Box>
  </Tooltip>
);

export default ChatReadReceipt;
