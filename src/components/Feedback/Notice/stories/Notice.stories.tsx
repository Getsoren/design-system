import { Box, Link, Stack, Typography } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import Notice from "../Notice";

const Template: StoryFn<typeof Notice> = (args) => (
  <Stack alignItems="center" justifyContent="center" height="100%">
    <Box width="100%" maxWidth={520}>
      <Notice {...args} />
    </Box>
  </Stack>
);

export const Basic = Template.bind({});
Basic.args = {
  children: (
    <Typography variant="body2">
      We found no order to attach this document to. <Link component="button">Pick an order</Link>
    </Typography>
  ),
};

export default {
  component: Notice,
  title: "Components/Feedback/Notice",
} as Meta<typeof Notice>;
