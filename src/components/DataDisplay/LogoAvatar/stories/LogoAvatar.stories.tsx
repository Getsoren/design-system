import { Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import SearchIcon from "@/components/DataDisplay/Icons/SearchIcon";
import LogoAvatar from "@/components/DataDisplay/LogoAvatar/LogoAvatar";

const Template: StoryFn<typeof LogoAvatar> = (args) => (
  <Stack spacing={2} height="100%" alignItems="center" justifyContent="center">
    <LogoAvatar {...args} />
  </Stack>
);

export const Basic = Template.bind({});

export const WithImage = Template.bind({});
WithImage.args = {
  alt: "Soren",
  src: "https://placehold.co/80x80?text=S",
};

export const BrokenImage = Template.bind({});
BrokenImage.args = {
  src: "wrong-path.jpg",
};

export const CustomFallbackIcon = Template.bind({});
CustomFallbackIcon.args = {
  fallbackIcon: <SearchIcon />,
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  size: 72,
};

/** The corners shrink with the logo, up to the theme's radius */
export const Sizes: StoryFn<typeof LogoAvatar> = () => (
  <Stack direction="row" spacing={2} height="100%" alignItems="center" justifyContent="center">
    {[20, 24, 32, 40, 72].map((size) => (
      <LogoAvatar key={size} size={size} src="https://placehold.co/144x144?text=S" alt="Soren" />
    ))}
  </Stack>
);

export default {
  component: LogoAvatar,
  title: "Components/Data Display/LogoAvatar",
} as Meta<typeof LogoAvatar>;
