import { Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import NumberBadge from "@/components/DataDisplay/NumberBadge/NumberBadge";

const Template: StoryFn<typeof NumberBadge> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    {[1, 2, 3].map((number) => (
      <NumberBadge key={number} {...args}>
        {number}
      </NumberBadge>
    ))}
  </Stack>
);

export const Basic = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  height: 48,
  width: 48,
};

export default {
  component: NumberBadge,
  title: "Components/Data Display/NumberBadge",
} as Meta<typeof NumberBadge>;
