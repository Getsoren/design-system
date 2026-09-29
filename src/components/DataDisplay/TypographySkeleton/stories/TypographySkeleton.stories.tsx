import { Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import TypographySkeleton from "@/components/DataDisplay/TypographySkeleton/TypographySkeleton";

const Template: StoryFn<typeof TypographySkeleton> = (args) => (
  <Stack spacing={2} height="100%" alignItems="center" justifyContent="center">
    <TypographySkeleton {...args} />
  </Stack>
);

export const isLoading = Template.bind({});
isLoading.args = {
  children: "h1. Heading",
  isLoading: true,
  skeletonProps: { width: 200 },
};

export const NotLoading = Template.bind({});
NotLoading.args = {
  children: "Hello World",
};

export const NoData = Template.bind({});
NoData.args = {
  emptyText: "-",
  isLoading: false,
};

export default {
  component: TypographySkeleton,
  title: "Components/Data Display/TypographySkeleton",
} as Meta<typeof TypographySkeleton>;
