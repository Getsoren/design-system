import { Chip, Stack, TextField } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import Button from "@/components/Inputs/Button";
import PageHeader from "@/components/Layout/PageHeader/PageHeader";

const Template: StoryFn<typeof PageHeader> = (args) => <PageHeader title="Worksites" {...args} />;

export const Basic = Template.bind({});

export const WithRightContent = Template.bind({});
WithRightContent.args = {
  RightContent: <Button variant="contained">New worksite</Button>,
};

export const WithFilters = Template.bind({});
WithFilters.args = {
  children: (
    <Stack direction="row" spacing={2}>
      <TextField size="small" placeholder="Search…" />
      <Chip label="Active" />
      <Chip label="Archived" variant="outlined" />
    </Stack>
  ),
  RightContent: <Button variant="contained">New worksite</Button>,
};

export const WithDivider = Template.bind({});
WithDivider.args = {
  disableDivider: false,
  RightContent: <Button variant="contained">New worksite</Button>,
};

export default {
  component: PageHeader,
  title: "Components/Layout/PageHeader",
} as Meta<typeof PageHeader>;
