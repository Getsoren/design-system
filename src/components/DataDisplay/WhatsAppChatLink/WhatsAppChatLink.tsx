import { useMediaQuery, useTheme } from "@mui/material";
import type { ReactNode } from "react";
import WhatsAppIcon from "@/components/DataDisplay/Icons/WhatsAppIcon";
import WhatsAppPhone from "@/components/DataDisplay/WhatsAppPhone/WhatsAppPhone";
import Button from "@/components/Inputs/Button/Button";

export interface WhatsAppChatLinkProps {
  /**
   * The WhatsApp conversation to open; undefined while it is being prepared.
   */
  url?: string;
  /**
   * The QR code of `url`, as an SVG, drawn on the phone picture on a computer.
   */
  code?: ReactNode;
  /**
   * The button's label on a phone, e.g. "Open WhatsApp".
   */
  label: string;
}

/**
 * The way into a WhatsApp conversation: its QR code on a phone picture, or on a phone, which cannot scan its own
 * screen, a button opening it. While the conversation is being prepared, the phone alone, or the button disabled.
 */
const WhatsAppChatLink = ({ url, code, label }: WhatsAppChatLinkProps) => {
  const { breakpoints } = useTheme();
  const isPhone = useMediaQuery(breakpoints.down("sm"));

  if (!isPhone) {
    return <WhatsAppPhone>{url && code}</WhatsAppPhone>;
  }

  // A link once the conversation is known; a plain disabled button until then, as a link cannot be disabled
  return (
    <Button
      variant="contained"
      size="large"
      startIcon={<WhatsAppIcon />}
      disabled={!url}
      data-testid="whatsapp-chat-open"
      {...(url && { component: "a", href: url, rel: "noopener noreferrer", target: "_blank" })}
    >
      {label}
    </Button>
  );
};

export default WhatsAppChatLink;
