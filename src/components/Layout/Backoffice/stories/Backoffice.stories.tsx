import { Box, Typography } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import NavigationMenu from "@/components/Navigation/NavigationMenu/NavigationMenu";
import AppBar from "@/components/Surface/AppBar";
import Backoffice from "../Backoffice";

const menuItems = [
  {
    active: true,
    icon: "🏠",
    label: "Dashboard",
    url: "#",
  },
  {
    icon: "📦",
    label: "Booking",
    url: "#",
  },
];

const Template: StoryFn<typeof Backoffice> = (args) => (
  <Box sx={{ height: "100%", width: "100%" }}>
    <Backoffice
      AppBar={
        <AppBar
          actionProps={{
            children: "Action",
          }}
        />
      }
      Sidebar={<NavigationMenu items={menuItems} />}
      Main={
        <Box p={3}>
          <Typography variant="h1">This is main</Typography>
        </Box>
      }
      {...args}
    />
  </Box>
);

const WithoutAppBarTemplate: StoryFn<typeof Backoffice> = (args) => (
  <Box sx={{ height: "100%", width: "100%" }}>
    <Backoffice
      Sidebar={<NavigationMenu items={menuItems} />}
      Main={
        <Box p={3}>
          <Typography variant="h1">This is main</Typography>
        </Box>
      }
      {...args}
    />
  </Box>
);

export const Basic = Template.bind({});
Basic.args = {};

export const WithoutAppBar = WithoutAppBarTemplate.bind({});
WithoutAppBar.args = {};

export default {
  component: Backoffice,
  title: "Components/Layout/Backoffice",
} as Meta<typeof Backoffice>;
