import { Button, Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import DeleteIcon from "@/components/DataDisplay/Icons/DeleteIcon";
import ButtonGroup from "./ButtonGroup";

const Template: StoryFn<typeof ButtonGroup> = (args) => (
  <Stack spacing={2} alignItems="center" justifyContent="center" height="100%">
    <ButtonGroup color="error" size="small" aria-label="Button group" {...args}>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>

    <ButtonGroup size="medium" aria-label="Button group" {...args}>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>

    <ButtonGroup size="large" color="secondary" aria-label="Button group" {...args}>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  </Stack>
);

const TemplateWithIcons: StoryFn<typeof ButtonGroup> = (args) => (
  <Stack spacing={2} alignItems="center" justifyContent="center" height="100%">
    <ButtonGroup color="error" size="small" aria-label="Button group with icons" {...args}>
      <Button startIcon={<DeleteIcon />}>Edit</Button>
      <Button startIcon={<DeleteIcon />}>Upload</Button>
      <Button startIcon={<DeleteIcon />}>Delete</Button>
    </ButtonGroup>

    <ButtonGroup size="medium" aria-label="Button group with icons" {...args}>
      <Button startIcon={<DeleteIcon />}>Edit</Button>
      <Button startIcon={<DeleteIcon />}>Upload</Button>
      <Button startIcon={<DeleteIcon />}>Delete</Button>
    </ButtonGroup>

    <ButtonGroup size="large" color="secondary" aria-label="Button group with icons" {...args}>
      <Button startIcon={<DeleteIcon />}>Edit</Button>
      <Button startIcon={<DeleteIcon />}>Upload</Button>
      <Button startIcon={<DeleteIcon />}>Delete</Button>
    </ButtonGroup>

    <ButtonGroup size="medium" aria-label="Icon only button group" {...args}>
      <Button aria-label="Edit">
        <DeleteIcon fontSize="small" />
      </Button>
      <Button aria-label="Upload">
        <DeleteIcon fontSize="small" />
      </Button>
      <Button aria-label="Delete">
        <DeleteIcon fontSize="small" />
      </Button>
    </ButtonGroup>
  </Stack>
);

export const Contained = Template.bind({});
Contained.args = {
  variant: "contained",
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
};

export const Text = Template.bind({});
Text.args = {
  variant: "text",
};

export const Vertical = Template.bind({});
Vertical.args = {
  orientation: "vertical",
};

export const WithIcons = TemplateWithIcons.bind({});
WithIcons.args = {
  variant: "outlined",
};

export default {
  component: ButtonGroup,
  title: "Components/Inputs/ButtonGroup",
} as Meta<typeof ButtonGroup>;
