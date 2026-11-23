import { Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import WhatsAppPhone from "../WhatsAppPhone";

/**
 * Stands for a QR code: the design system draws none itself.
 */
const CodePlaceholder = () => (
  <svg viewBox="0 0 10 10" role="img" aria-label="QR code">
    <rect width="10" height="10" fill="#fff" />
    <path d="M1 1h3v3H1zM6 1h3v3H6zM1 6h3v3H1zM6 6h1v1H6zM8 6h1v1H8zM7 7h1v1H7zM6 8h1v1H6zM8 8h1v1H8z" fill="#000" />
  </svg>
);

export const WithCode: StoryFn<typeof WhatsAppPhone> = () => (
  <Stack alignItems="center" justifyContent="center" height="100%">
    <WhatsAppPhone>
      <CodePlaceholder />
    </WhatsAppPhone>
  </Stack>
);

export const WithoutCode: StoryFn<typeof WhatsAppPhone> = () => (
  <Stack alignItems="center" justifyContent="center" height="100%">
    <WhatsAppPhone />
  </Stack>
);

export default {
  component: WhatsAppPhone,
  title: "Components/Data Display/WhatsAppPhone",
} as Meta<typeof WhatsAppPhone>;
