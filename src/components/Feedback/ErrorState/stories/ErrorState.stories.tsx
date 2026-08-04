import { Box } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import ErrorState from "@/components/Feedback/ErrorState/ErrorState";

const Template: StoryFn<typeof ErrorState> = (args) => (
  <Box height={400}>
    <ErrorState {...args} />
  </Box>
);

export const Basic = Template.bind({});
Basic.args = {
  onReload: () => window.location.reload(),
};

export const FullPage = Template.bind({});
FullPage.args = {
  fullPage: true,
  onReload: () => window.location.reload(),
};

export const WithoutAction = Template.bind({});
WithoutAction.args = {};

export const CustomLabels = Template.bind({});
CustomLabels.args = {
  actionLabel: "Try again",
  description: "This page could not be loaded",
  onReload: () => window.location.reload(),
  title: "Something went wrong",
};

export default {
  component: ErrorState,
  title: "Components/Feedback/ErrorState",
} as Meta<typeof ErrorState>;
