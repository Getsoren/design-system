import { Box } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import EmptyState from "../EmptyState";

const Template: StoryFn<typeof EmptyState> = (args) => (
  <Box height={400}>
    <EmptyState {...args} />
  </Box>
);

export const Basic = Template.bind({});
Basic.args = {
  description: "No data to display",
};

export const WithSubtitle = Template.bind({});
WithSubtitle.args = {
  description: "No drop-off point yet",
  subtitle: "Add one to make deliveries more reliable on this worksite.",
};

export const WithAction = Template.bind({});
WithAction.args = {
  actionLabel: "Go back",
  actionProps: { onClick: () => undefined },
  description: "Select a worksite to see its drop-off points",
};

export const WithLinkAction = Template.bind({});
WithLinkAction.args = {
  actionLabel: "Go to website",
  // Any root component works (router Link, anchor, ...): the button is polymorphic
  actionProps: { component: "a", href: "https://tracktor.fr" },
  description: "You are not linked to the selected worksite",
};

export default {
  component: EmptyState,
  title: "Components/Feedback/EmptyState",
} as Meta<typeof EmptyState>;
