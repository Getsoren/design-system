import { Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import Logo from "./Logo";

const Template: StoryFn<typeof Logo> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Logo {...args} />
  </Stack>
);

export const AutoColorFromTheme = Template.bind({});
AutoColorFromTheme.args = {};

export const RenderAsSvgBlack = Template.bind({});
RenderAsSvgBlack.args = {
  color: "black",
  component: "svg",
};

export const RenderAsSvgWhite = Template.bind({});
RenderAsSvgWhite.args = {
  color: "white",
  component: "svg",
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  height: 50,
  width: 404,
};

export const Soren = Template.bind({});
Soren.args = {
  brand: "soren",
};

export const SorenSvgWithOrangeMark = Template.bind({});
SorenSvgWithOrangeMark.args = {
  brand: "soren",
  colorShape: "#FF4F12",
  component: "svg",
};

export const SorenMark = Template.bind({});
SorenMark.args = {
  brand: "soren",
  component: "svg",
  withoutText: true,
};

export const Pricing = Template.bind({});
Pricing.args = {
  variant: "pricing",
};

export const PricingBlack = Template.bind({});
PricingBlack.args = {
  color: "black",
  component: "svg",
  variant: "pricing",
};

export const Supplier = Template.bind({});
Supplier.args = {
  variant: "supplier",
};

export const WithoutText = Template.bind({});
WithoutText.args = {
  withoutText: true,
};

export const WithoutTextSvg = Template.bind({});
WithoutTextSvg.args = {
  component: "svg",
  withoutText: true,
};

export const WithoutTextWithCustomColorSvg = Template.bind({});
WithoutTextWithCustomColorSvg.args = {
  colorShape: "purple",
  component: "svg",
  withoutText: true,
};

export default {
  component: Logo,
  title: "Components/Data Display/Logo",
} as Meta<typeof Logo>;
