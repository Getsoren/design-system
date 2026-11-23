import { Box, keyframes } from "@mui/material";
import type { ReactNode } from "react";
import whatsAppPhoneUrl from "@/assets/img/whatsapp-phone.webp";
import { riseIn } from "@/utils/motion";

/**
 * Small enough for a dialog, large enough for a camera to scan the code (about 90 px wide).
 */
const PHONE_WIDTH = 300;

/**
 * The code's place on the phone picture, in percent of it: over the blank screen, clear of the finger.
 */
const CODE_PLACE = { left: "27.59%", top: "35.58%", width: "29.08%" } as const;

/**
 * The phone stands at 42 % of the picture's width, the finger pointing at it widening the picture on its right: moved
 * by the difference, the phone rather than the picture is in the middle of the column.
 */
const PHONE_CENTRING = "translateX(7.92%)";

/**
 * Slight float, small enough to keep the code scannable.
 */
const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
`;

const appear = keyframes`
  from { opacity: 0; transform: scale(0.92); }
  to { opacity: 1; transform: none; }
`;

export interface WhatsAppPhoneProps {
  /**
   * The QR code drawn on the phone's screen, as an SVG: it takes the width of its place. The phone alone without it,
   * the code appearing once given.
   */
  children?: ReactNode;
}

/**
 * A phone picture a WhatsApp QR code is drawn on, for a conversation to scan from a computer. The code is the caller's
 * to draw: no QR library comes with the design system.
 */
const WhatsAppPhone = ({ children }: WhatsAppPhoneProps) => (
  <Box
    sx={{
      "@media (prefers-reduced-motion: reduce)": { "&, & *": { animation: "none !important" } },
      animation: `${riseIn} 420ms ease-out both, ${float} 4.8s ease-in-out 600ms infinite`,
      maxWidth: "100%",
      width: PHONE_WIDTH,
    }}
    data-testid="whatsapp-phone"
  >
    {/* Its own box, as the animations above move the picture with a transform of their own */}
    <Box sx={{ position: "relative", transform: PHONE_CENTRING }}>
      <Box component="img" src={whatsAppPhoneUrl} alt="" sx={{ display: "block", height: "auto", width: "100%" }} />
      {children && (
        <Box
          sx={{
            "& svg": { display: "block", height: "auto", width: "100%" },
            animation: `${appear} 360ms ease-out 300ms both`,
            position: "absolute",
            ...CODE_PLACE,
          }}
          data-testid="whatsapp-phone-code"
        >
          {children}
        </Box>
      )}
    </Box>
  </Box>
);

export default WhatsAppPhone;
