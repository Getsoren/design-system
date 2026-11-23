import { Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import WhatsAppChatLink from "../WhatsAppChatLink";

/**
 * Stands for a QR code: the design system draws none itself.
 */
const CodePlaceholder = () => (
  <svg viewBox="0 0 10 10" role="img" aria-label="QR code">
    <rect width="10" height="10" fill="#fff" />
    <path d="M1 1h3v3H1zM6 1h3v3H6zM1 6h3v3H1zM6 6h1v1H6zM8 6h1v1H8zM7 7h1v1H7zM6 8h1v1H6zM8 8h1v1H8z" fill="#000" />
  </svg>
);

/**
 * The phone picture on a computer, a button on a phone: resize the window under the `sm` breakpoint to see it.
 */
export const Ready: StoryFn<typeof WhatsAppChatLink> = () => (
  <Stack alignItems="center" justifyContent="center" height="100%">
    <WhatsAppChatLink url="https://wa.me/33700000000?text=Hello" code={<CodePlaceholder />} label="Open WhatsApp" />
  </Stack>
);

export const BeingPrepared: StoryFn<typeof WhatsAppChatLink> = () => (
  <Stack alignItems="center" justifyContent="center" height="100%">
    <WhatsAppChatLink label="Open WhatsApp" />
  </Stack>
);

export default {
  component: WhatsAppChatLink,
  title: "Components/Data Display/WhatsAppChatLink",
} as Meta<typeof WhatsAppChatLink>;
