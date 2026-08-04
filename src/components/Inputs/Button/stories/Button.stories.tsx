import { IconButton, Stack, SvgIcon } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import CloseIcon from "@/components/DataDisplay/Icons/CloseIcon";
import Button from "../Button";
import ButtonStory from "./Button";

const AddShoppingCartIcon = () => (
  <SvgIcon
    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
    focusable="false"
    aria-hidden="true"
    viewBox="0 0 24 24"
    data-testid="AddShoppingCartIcon"
  >
    <path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z" />
  </SvgIcon>
);

const AlarmIcon = () => (
  <SvgIcon
    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
    focusable="false"
    aria-hidden="true"
    viewBox="0 0 24 24"
    data-testid="AlarmIcon"
  >
    <path d="m22 5.72-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39 6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" />
  </SvgIcon>
);

const Template: StoryFn<typeof Button> = (args) => (
  <Stack spacing={2} alignItems="center" justifyContent="center" height="100%" paddingY={5}>
    <Button size="xSmall" color="inherit" {...args}>
      XSmall inherit
    </Button>
    <Button size="xSmall" startIcon={<AddShoppingCartIcon />} {...args}>
      XSmall with icon
    </Button>
    <Button size="small" color="inherit" {...args}>
      Small inherit
    </Button>
    <Button size="small" {...args}>
      Small
    </Button>
    <Button color="primary" {...args}>
      Medium primary
    </Button>
    <Button size="medium" color="secondary" {...args}>
      Medium secondary
    </Button>
    <Button size="medium" color="success" {...args}>
      Medium success
    </Button>
    <Button size="medium" color="error" {...args}>
      Medium error
    </Button>
    <Button size="medium" color="info" {...args}>
      Medium info
    </Button>
    <Button size="medium" color="warning" {...args}>
      Medium warning
    </Button>
    <Button size="medium" color="contrast" {...args}>
      Medium contrast
    </Button>
    <Button size="large" {...args}>
      Large
    </Button>
    <Button size="large" disabled {...args}>
      Large Disabled
    </Button>
  </Stack>
);

const IconTemplate: StoryFn<typeof Button> = () => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%" paddingY={5}>
    <IconButton color="primary" aria-label="upload picture" component="label">
      <input hidden accept="image/*" type="file" />
      <AddShoppingCartIcon />
    </IconButton>
    <IconButton color="primary" aria-label="upload picture" component="label">
      <input hidden accept="image/*" type="file" />
      <AlarmIcon />
    </IconButton>
  </Stack>
);

const IconWithLabelTemplate: StoryFn<typeof Button> = () => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%" paddingY={5}>
    <Button variant="outlined" startIcon={<AddShoppingCartIcon />}>
      Add to cart
    </Button>
    <Button variant="contained" endIcon={<AlarmIcon />}>
      Alarm
    </Button>
  </Stack>
);

const TemplateLoading: StoryFn<typeof Button> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%" paddingY={5}>
    <Stack spacing={2} alignItems="center">
      <Button size="small" isLoading variant="outlined" {...args}>
        S outlined
      </Button>
      <Button size="medium" isLoading variant="outlined" {...args}>
        M outlined
      </Button>
      <Button size="large" isLoading variant="outlined" {...args}>
        L outlined
      </Button>
      <Button variant="outlined" isLoading loadingIndicator="Loading..." {...args}>
        Loading indicator outlined
      </Button>
      <Button variant="outlined" isLoading fullWidth {...args}>
        Full Width outlined
      </Button>
      <Button variant="outlined" isLoading loadingIndicator="Loading..." fullWidth {...args}>
        Full Width indicator outlined
      </Button>
      <Button variant="outlined" isLoading loadingPosition="start" {...args}>
        Loading start
      </Button>
      <Button variant="outlined" isLoading loadingPosition="end" {...args}>
        Loading end
      </Button>
      <Button variant="outlined" startIcon={<CloseIcon />} isLoading {...args}>
        Loading outlined with start icon
      </Button>
      <Button variant="outlined" endIcon={<CloseIcon />} isLoading {...args}>
        Loading outlined with end icon
      </Button>
    </Stack>

    <Stack spacing={2} alignItems="center">
      <Button size="small" variant="text" isLoading {...args}>
        S text
      </Button>
      <Button size="medium" variant="text" isLoading {...args}>
        M text
      </Button>
      <Button size="large" variant="text" isLoading {...args}>
        L text
      </Button>
      <Button variant="text" loadingIndicator="Loading..." isLoading {...args}>
        Loading indicator text
      </Button>
      <Button variant="text" isLoading fullWidth {...args}>
        Full Width text
      </Button>
      <Button variant="text" isLoading loadingIndicator="Loading..." fullWidth {...args}>
        Full Width indicator text
      </Button>
      <Button variant="text" isLoading loadingPosition="start" {...args}>
        Loading start text
      </Button>
      <Button variant="text" isLoading loadingPosition="end" {...args}>
        Loading end text
      </Button>
      <Button variant="text" startIcon={<CloseIcon />} isLoading {...args}>
        Loading text with start icon
      </Button>
      <Button variant="text" endIcon={<CloseIcon />} isLoading {...args}>
        Loading text with end icon
      </Button>
    </Stack>

    <Stack spacing={2} alignItems="center">
      <Button variant="contained" size="small" isLoading {...args}>
        S contained
      </Button>
      <Button size="medium" variant="contained" isLoading {...args}>
        M contained
      </Button>
      <Button variant="contained" size="large" isLoading {...args}>
        L contained
      </Button>
      <Button variant="contained" loadingIndicator="Loading..." isLoading {...args}>
        Loading indicator contained
      </Button>
      <Button variant="contained" isLoading fullWidth {...args}>
        Full Width contained
      </Button>
      <Button variant="contained" isLoading loadingIndicator="Loading..." fullWidth {...args}>
        Full Width indicator contained
      </Button>
      <Button variant="contained" isLoading loadingPosition="start" {...args}>
        Loading start contained
      </Button>
      <Button variant="contained" isLoading loadingPosition="end" {...args}>
        Loading end contained
      </Button>
      <Button variant="contained" startIcon={<CloseIcon />} isLoading {...args}>
        Loading contained with start icon
      </Button>
      <Button variant="contained" endIcon={<CloseIcon />} isLoading {...args}>
        Loading contained with end icon
      </Button>
    </Stack>
  </Stack>
);

const ButtonAsLinkTemplate: StoryFn<typeof Button> = () => (
  <Stack spacing={2} alignItems="center" justifyContent="center" height="100%" paddingY={5}>
    <Button component="a" target="_blank">
      Button as link
    </Button>
  </Stack>
);

const ButtonLinkTemplate: StoryFn<typeof Button> = () => (
  <Stack spacing={2} alignItems="center" justifyContent="center" height="100%" paddingY={5}>
    <Button variant="link">Button link color primary (default)</Button>
    <Button variant="link" color="secondary">
      Button link color secondary
    </Button>
    <Button variant="link" color="inherit">
      Button link color inherit
    </Button>
    <Button variant="link" color="error">
      Button link color error
    </Button>
    <Button variant="link" color="warning">
      Button link color warning
    </Button>
    <Button variant="link" color="info">
      Button link color info
    </Button>
    <Button variant="link" color="success">
      Button link color success
    </Button>
  </Stack>
);

const ButtonDashedTemplate: StoryFn<typeof Button> = () => (
  <Stack direction="row" spacing={4} alignItems="center" justifyContent="center" height="100%" paddingY={5}>
    <Stack spacing={2} alignItems="center">
      <Button variant="dashed" size="small">
        Empty small
      </Button>
      <Button variant="dashed" size="small" startIcon={<AddShoppingCartIcon />}>
        Empty small
      </Button>
      <Button variant="dashed" size="medium">
        Empty medium
      </Button>
      <Button variant="dashed" size="medium" startIcon={<AddShoppingCartIcon />}>
        Empty medium
      </Button>
      <Button variant="dashed" size="large">
        Empty large
      </Button>
      <Button variant="dashed" size="large" startIcon={<AddShoppingCartIcon />}>
        Empty large
      </Button>
    </Stack>
    <Stack spacing={2} alignItems="center">
      <Button variant="dashed" color="secondary" size="small">
        Filled small
      </Button>
      <Button variant="dashed" color="secondary" size="small" startIcon={<AddShoppingCartIcon />}>
        Filled small
      </Button>
      <Button variant="dashed" color="secondary" size="medium">
        Filled medium
      </Button>
      <Button variant="dashed" color="secondary" size="medium" startIcon={<AddShoppingCartIcon />}>
        Filled medium
      </Button>
      <Button variant="dashed" color="secondary" size="large">
        Filled large
      </Button>
      <Button variant="dashed" color="secondary" size="large" startIcon={<AddShoppingCartIcon />}>
        Filled large
      </Button>
    </Stack>
    <Stack spacing={2} alignItems="center">
      <Button variant="dashed" color="error" size="small">
        Error small
      </Button>
      <Button variant="dashed" color="error" size="small" startIcon={<AddShoppingCartIcon />}>
        Error small
      </Button>
      <Button variant="dashed" color="error" size="medium">
        Error medium
      </Button>
      <Button variant="dashed" color="error" size="medium" startIcon={<AddShoppingCartIcon />}>
        Error medium
      </Button>
      <Button variant="dashed" color="error" size="large">
        Error large
      </Button>
      <Button variant="dashed" color="error" size="large" startIcon={<AddShoppingCartIcon />}>
        Error large
      </Button>
    </Stack>
    <Stack spacing={2} alignItems="center">
      <Button variant="dashed" disabled size="small">
        Disabled small
      </Button>
      <Button variant="dashed" disabled size="small" startIcon={<AddShoppingCartIcon />}>
        Disabled small
      </Button>
      <Button variant="dashed" disabled size="medium">
        Disabled medium
      </Button>
      <Button variant="dashed" disabled size="medium" startIcon={<AddShoppingCartIcon />}>
        Disabled medium
      </Button>
      <Button variant="dashed" disabled size="large">
        Disabled large
      </Button>
      <Button variant="dashed" disabled size="large" startIcon={<AddShoppingCartIcon />}>
        Disabled large
      </Button>
    </Stack>
  </Stack>
);

const ButtonDashedRoundedTemplate: StoryFn<typeof Button> = () => (
  <Stack direction="row" spacing={4} alignItems="center" justifyContent="center" height="100%" paddingY={5}>
    <Stack spacing={2} alignItems="center">
      <Button variant="dashed-rounded" size="small">
        Empty small
      </Button>
      <Button variant="dashed-rounded" size="small" startIcon={<AddShoppingCartIcon />}>
        Empty small
      </Button>
      <Button variant="dashed-rounded" size="medium">
        Empty medium
      </Button>
      <Button variant="dashed-rounded" size="medium" startIcon={<AddShoppingCartIcon />}>
        Empty medium
      </Button>
      <Button variant="dashed-rounded" size="large">
        Empty large
      </Button>
      <Button variant="dashed-rounded" size="large" startIcon={<AddShoppingCartIcon />}>
        Empty large
      </Button>
    </Stack>
    <Stack spacing={2} alignItems="center">
      <Button variant="dashed-rounded" color="secondary" size="small">
        Filled small
      </Button>
      <Button variant="dashed-rounded" color="secondary" size="small" startIcon={<AddShoppingCartIcon />}>
        Filled small
      </Button>
      <Button variant="dashed-rounded" color="secondary" size="medium">
        Filled medium
      </Button>
      <Button variant="dashed-rounded" color="secondary" size="medium" startIcon={<AddShoppingCartIcon />}>
        Filled medium
      </Button>
      <Button variant="dashed-rounded" color="secondary" size="large">
        Filled large
      </Button>
      <Button variant="dashed-rounded" color="secondary" size="large" startIcon={<AddShoppingCartIcon />}>
        Filled large
      </Button>
    </Stack>
    <Stack spacing={2} alignItems="center">
      <Button variant="dashed-rounded" color="error" size="small">
        Error small
      </Button>
      <Button variant="dashed-rounded" color="error" size="small" startIcon={<AddShoppingCartIcon />}>
        Error small
      </Button>
      <Button variant="dashed-rounded" color="error" size="medium">
        Error medium
      </Button>
      <Button variant="dashed-rounded" color="error" size="medium" startIcon={<AddShoppingCartIcon />}>
        Error medium
      </Button>
      <Button variant="dashed-rounded" color="error" size="large">
        Error large
      </Button>
      <Button variant="dashed-rounded" color="error" size="large" startIcon={<AddShoppingCartIcon />}>
        Error large
      </Button>
    </Stack>
    <Stack spacing={2} alignItems="center">
      <Button variant="dashed-rounded" disabled size="small">
        Disabled small
      </Button>
      <Button variant="dashed-rounded" disabled size="small" startIcon={<AddShoppingCartIcon />}>
        Disabled small
      </Button>
      <Button variant="dashed-rounded" disabled size="medium">
        Disabled medium
      </Button>
      <Button variant="dashed-rounded" disabled size="medium" startIcon={<AddShoppingCartIcon />}>
        Disabled medium
      </Button>
      <Button variant="dashed-rounded" disabled size="large">
        Disabled large
      </Button>
      <Button variant="dashed-rounded" disabled size="large" startIcon={<AddShoppingCartIcon />}>
        Disabled large
      </Button>
    </Stack>
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

export const Link = ButtonLinkTemplate.bind({});
Link.args = {
  variant: "link",
};

export const Dashed = ButtonDashedTemplate.bind({});
Dashed.args = {
  variant: "dashed",
};

export const DashedRounded = ButtonDashedRoundedTemplate.bind({});
DashedRounded.args = {
  variant: "dashed-rounded",
};

export const Icon = IconTemplate.bind({});
Icon.args = {};

export const IconWithLabel = IconWithLabelTemplate.bind({});
IconWithLabel.args = {};

export const Loading = TemplateLoading.bind({});
Loading.args = {
  isLoading: true,
};

export const ButtonAsLink = ButtonAsLinkTemplate.bind({});
ButtonAsLink.args = {};

export default {
  component: ButtonStory,
  title: "Components/Inputs/Button",
} as Meta<typeof ButtonStory>;
