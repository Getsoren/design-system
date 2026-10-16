import MuiAvatar from "@mui/material/Avatar";
import type { MouseEvent } from "react";
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
const ChatBookingTag = ({ booking, showImage, contrast }: ChatBookingTagProps) => {
  const { onClick } = booking;

  return (
    <Chip
      label={booking.label}
      variant="rounded"
      color="default"
      size="small"
      title={booking.label}
      onClick={
        onClick &&
        ((event: MouseEvent) => {
          // The order, not what a card around the tag opens
          event.stopPropagation();
          onClick();
        })
      }
      avatar={showImage && booking.image ? <MuiAvatar src={booking.image} alt="" /> : undefined}
      sx={{
        maxWidth: "100%",
        position: "relative",
        ...(contrast && { backgroundColor: "background.paper", border: "1px solid", borderColor: "divider" }),
        ...(onClick && { "&::after": { bottom: -10, content: '""', left: -4, position: "absolute", right: -4, top: -10 } }),
      }}
    />
  );
};

export default ChatBookingTag;
