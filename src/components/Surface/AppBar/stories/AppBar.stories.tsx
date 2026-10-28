import { FormControl, ListItemIcon, MenuItem, Select, Stack, Typography } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import CloseIcon from "@/components/DataDisplay/Icons/CloseIcon";
import AppBar from "../AppBar";

const menuItems = [
  {
    icon: <CloseIcon />,
    label: "Check",
    url: "#",
  },
  {
    active: true,
    icon: <CloseIcon />,
    label: "Close",
    url: "#",
  },
];

const Template: StoryFn<typeof AppBar> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{ height: "100%", width: "100%" }}>
    <AppBar
      actionProps={{
        children: "Action",
      }}
      searchProps={{
        placeholder: "Search",
      }}
      {...args}
    />
  </Stack>
);

const SimpleTemplate: StoryFn<typeof AppBar> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{ height: "100%", width: "100%" }}>
    <AppBar Search={null} Avatar={null} Action={null} {...args} />
  </Stack>
);

export const Basic = Template.bind({});
Basic.args = {};

export const WithAvatarMenu = Template.bind({});
WithAvatarMenu.args = {
  avatarProps: {
    menuItems,
  },
};

export const Simple = SimpleTemplate.bind({});
Simple.args = {};

/** A select inside the avatar menu, as the apps' language switcher: its popover must open above the menu */
const SelectMenuItem = () => (
  <MenuItem>
    <ListItemIcon>
      <CloseIcon />
    </ListItemIcon>
    <Stack direction="row" alignItems="center" justifyContent="space-between" flex={1} spacing={3}>
      <Typography>Language</Typography>
      <FormControl sx={{ width: "100%" }}>
        <Select variant="outlined" size="small" defaultValue="fr" inputProps={{ "data-testid": "story-language-select" }}>
          <MenuItem value="fr">Français</MenuItem>
          <MenuItem value="en">English</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  </MenuItem>
);

export const WithSelectInAvatarMenu = Template.bind({});
WithSelectInAvatarMenu.args = {
  avatarProps: {
    menuItems: [...menuItems, <SelectMenuItem key="select" />],
  },
};

export default {
  component: AppBar,
  title: "Components/Surface/AppBar",
} as Meta<typeof AppBar>;
