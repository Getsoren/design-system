import { Avatar, Box, Button, Chip, Stack, Typography } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import CollapsingHeader from "../CollapsingHeader";

const compactTitle = (
  <>
    <Avatar sx={{ height: 32, width: 32 }}>E</Avatar>
    <Typography variant="h6" sx={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
      Excavator 8t
    </Typography>
    <Chip label="N° 1234" size="small" />
  </>
);

const fullTitle = (
  <>
    <Avatar sx={{ height: 64, width: 64 }}>E</Avatar>
    <Stack minWidth={0} flex={1} spacing={1}>
      <Typography variant="h3">Excavator 8t</Typography>
      <Stack direction="row" spacing={1}>
        <Chip label="N° 1234" size="small" />
        <Chip label="In progress" size="small" color="success" variant="outlined" />
      </Stack>
    </Stack>
  </>
);

const actions = (
  <Stack direction="row" spacing={1}>
    <Button variant="contained" size="small">
      Primary action
    </Button>
    <Button variant="outlined" size="small">
      Secondary
    </Button>
  </Stack>
);

/** Scrollable wrapper with tall content so the compact sticky bar can be seen sliding in. */
const Template: StoryFn<typeof CollapsingHeader> = (args) => (
  <Box sx={{ height: "90vh", overflow: "auto" }}>
    <CollapsingHeader {...args} />
    <Box sx={{ height: "200vh", px: 3 }}>
      <Typography color="textSecondary">Scroll down to see the compact bar slide in over the content.</Typography>
    </Box>
  </Box>
);

export const Preview = Template.bind({});
Preview.args = {
  actions,
  compactTitle,
  fullTitle,
  onClose: () => {},
  onOpenFullPage: () => {},
};

export const FullPage = Template.bind({});
FullPage.args = {
  actions,
  backLabel: "Orders",
  compactActions: (
    <Button variant="contained" size="small">
      Primary action
    </Button>
  ),
  compactTitle,
  fullTitle,
  onBack: () => {},
  variant: "fullPage",
};

export default {
  component: CollapsingHeader,
  title: "Components/Layout/CollapsingHeader",
} as Meta<typeof CollapsingHeader>;
