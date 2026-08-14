import { Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import RatingBadge from "../RatingBadge";

const dimensions = [
  { label: "Deadlines", value: 4.5 },
  { label: "Equipment condition", value: 3.8 },
  { label: "Reactivity", value: 4.9 },
];

const Template: StoryFn<typeof RatingBadge> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <RatingBadge {...args} />
  </Stack>
);

export const Basic = Template.bind({});
Basic.args = {
  rating: 4.4,
};

export const WithBreakdown = Template.bind({});
WithBreakdown.args = {
  dimensions,
  rating: 4.4,
  reviewsLabel: "Based on 27 reviews",
};

export const Disabled = Template.bind({});
Disabled.args = {
  dimensions,
  disabled: true,
  rating: 4.4,
  reviewsLabel: "Based on 27 reviews",
};

export default {
  component: RatingBadge,
  title: "Components/DataDisplay/RatingBadge",
} as Meta<typeof RatingBadge>;
