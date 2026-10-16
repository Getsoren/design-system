import MuiAvatar from "@mui/material/Avatar";
import type { ChatMessageBooking } from "@/components/DataDisplay/Chat/types";
import Chip from "@/components/DataDisplay/Chip/Chip";

interface ChatBookingTagProps {
  booking: ChatMessageBooking;
  /** The order's photo inside the tag */
  showImage?: boolean;
  /** White tag, for a grey surface */
  contrast?: boolean;
}

/**
 * The "N° 34126" tag of an order, as everywhere else in the apps; clickable (44px hit area) when it opens the order.
 */
const ChatBookingTag = ({ booking, showImage, contrast }: ChatBookingTagProps) => (
  <Chip
    label={booking.label}
    variant="rounded"
    color="default"
    size="small"
    title={booking.label}
    onClick={booking.onClick}
    avatar={showImage && booking.image ? <MuiAvatar src={booking.image} alt="" /> : undefined}
    sx={{
      maxWidth: "100%",
      position: "relative",
      ...(contrast && { backgroundColor: "background.paper", border: "1px solid", borderColor: "divider" }),
      ...(booking.onClick && { "&::after": { bottom: -10, content: '""', left: -4, position: "absolute", right: -4, top: -10 } }),
    }}
  />
);

export default ChatBookingTag;
