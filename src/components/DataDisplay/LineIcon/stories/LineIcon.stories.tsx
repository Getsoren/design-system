import { Stack, Typography } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import LineIcon, { LINE_ICON_NAMES } from "../LineIcon";

const Template: StoryFn<typeof LineIcon> = (args) => <LineIcon {...args} />;

export const Basic = Template.bind({});
Basic.args = { name: "wrench" };

/**
 * Every line icon by its name, at its 20 px
 */
export const All: StoryFn = () => (
  <Stack direction="row" flexWrap="wrap" gap={2}>
    {LINE_ICON_NAMES.map((name) => (
      <Stack key={name} alignItems="center" spacing={0.5} sx={{ width: 96 }}>
        <LineIcon name={name} />
        <Typography variant="caption">{name}</Typography>
      </Stack>
    ))}
  </Stack>
);

export default {
  component: LineIcon,
  title: "Components/DataDisplay/LineIcon",
} as Meta<typeof LineIcon>;
