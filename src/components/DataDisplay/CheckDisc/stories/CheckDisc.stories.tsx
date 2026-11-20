import { Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import CheckDisc from "../CheckDisc";

export const Sizes: StoryFn<typeof CheckDisc> = () => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <CheckDisc size={16} />
    <CheckDisc size={24} />
    <CheckDisc size={40} />
  </Stack>
);

export default {
  component: CheckDisc,
  title: "Components/Data Display/CheckDisc",
} as Meta<typeof CheckDisc>;
