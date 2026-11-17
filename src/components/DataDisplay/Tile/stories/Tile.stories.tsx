import { Stack, Typography } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import UploadIcon from "@/components/DataDisplay/Icons/UploadIcon";
import Tile from "../Tile";

const Template: StoryFn<typeof Tile> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Tile {...args} />
  </Stack>
);

export const Basic = Template.bind({});
Basic.args = { children: <UploadIcon fontSize="small" /> };

export const Picture = Template.bind({});
Picture.args = { src: "https://picsum.photos/id/180/120/120" };

export const Outlined = Template.bind({});
Outlined.args = {
  children: (
    <Typography variant="body2" fontWeight={500} color="inherit">
      W2
    </Typography>
  ),
  variant: "outlined",
};

export const Dashed = Template.bind({});
Dashed.args = { variant: "dashed" };

export const Tinted = Template.bind({});
Tinted.args = { children: <UploadIcon fontSize="small" />, color: "success" };

export default {
  component: Tile,
  title: "Components/Data Display/Tile",
} as Meta<typeof Tile>;
