import { Box, SvgIcon, Tab, useTheme } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import { SyntheticEvent, useState } from "react";
import TabPanel from "@/components/Navigation/TabPanel/TabPanel";
import LinkTabComponent from "@/components/Navigation/Tabs/LinkTab/LinkTab";
import useTabs from "@/hooks/useTabs/useTabs";
import Tabs from "./Tabs";

const Template: StoryFn<typeof Tabs> = (args, { name }) => {
  const isDisabledContext = name === "Disabled";
  const isScrollableContext = name === "Scrollable";
  const { value, handleChange } = useTabs();

  const a11yProps = (index: number) => ({
    "aria-controls": `simple-tabpanel-${index}`,
    id: `simple-tab-${index}`,
  });

  return (
    <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      <Box sx={{ maxWidth: isScrollableContext ? 380 : "auto", width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs {...args} value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Item one" {...a11yProps(0)} />
            <Tab label="Item two" {...a11yProps(1)} />
            <Tab label={isDisabledContext ? "Disabled" : "Item three"} {...a11yProps(2)} disabled={isDisabledContext} />
            {isScrollableContext && (
              <>
                <Tab label="Item four" />
                <Tab label="Item five" />
                <Tab label="Item six" />
                <Tab label="Item seven" />
              </>
            )}
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          Item one
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item three
        </TabPanel>
      </Box>
    </Box>
  );
};

const WrappedLabelsTemplate: StoryFn<typeof Tabs> = (args, { name }) => {
  const [value, setValue] = useState("one");

  const handleChange = (_: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center" height="100%" width="100%">
      <Box>
        <Tabs {...args} value={value} onChange={handleChange} aria-label="wrapped label tabs example">
          <Tab value="one" label="New arrivals in the longest text of nonfiction that should appear in the next line" wrapped />
          <Tab value="two" label="Item two" disabled={name === "Disabled"} />
          <Tab value="three" label="Item three" />
        </Tabs>
      </Box>
    </Box>
  );
};

const VerticalTemplate: StoryFn<typeof Tabs> = (args) => {
  const [value, setValue] = useState(0);
  const { palette } = useTheme();

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center" height="100%" width="100%">
      <Box sx={{ backgroundColor: "background.paper", display: "flex", flexGrow: 1, height: 224 }}>
        <Tabs
          {...args}
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderColor: `${palette.divider} !important`, borderRight: 1 }}
        >
          <Tab label="Item one" />
          <Tab label="Item two" />
          <Tab label="Item three" />
          <Tab label="Item four" />
          <Tab label="Item five" />
          <Tab label="Item six" />
          <Tab label="Item seven" />
        </Tabs>
        <TabPanel value={value} index={0} orientation="vertical">
          Item one
        </TabPanel>
        <TabPanel value={value} index={1} orientation="vertical">
          Item two
        </TabPanel>
        <TabPanel value={value} index={2} orientation="vertical">
          Item three
        </TabPanel>
        <TabPanel value={value} index={3} orientation="vertical">
          Item four
        </TabPanel>
        <TabPanel value={value} index={4} orientation="vertical">
          Item five
        </TabPanel>
        <TabPanel value={value} index={5} orientation="vertical">
          Item six
        </TabPanel>
        <TabPanel value={value} index={6} orientation="vertical">
          Item seven
        </TabPanel>
      </Box>
    </Box>
  );
};

const IconTemplate: StoryFn<typeof Tabs> = (args, { name }) => {
  const isIconWithLabelContext = name === "Icon With Label";
  const [value, setValue] = useState(0);

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center" height="100%" width="100%">
      <Box>
        <Tabs {...args} value={value} onChange={handleChange} aria-label="icon tabs example">
          <Tab
            icon={
              <SvgIcon
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="PhoneIcon"
              >
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </SvgIcon>
            }
            aria-label="phone"
            label={isIconWithLabelContext ? "RECENTS" : ""}
          />
          <Tab
            icon={
              <SvgIcon
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="FavoriteIcon"
              />
            }
            aria-label="favorite"
            label={isIconWithLabelContext ? "FAVORITES" : ""}
          />
          <Tab
            icon={
              <SvgIcon
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="PersonPinIcon"
              >
                <path d="M12 2c-4.97 0-9 4.03-9 9 0 4.17 2.84 7.67 6.69 8.69L12 22l2.31-2.31C18.16 18.67 21 15.17 21 11c0-4.97-4.03-9-9-9zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.3c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
              </SvgIcon>
            }
            aria-label="person"
            label={isIconWithLabelContext ? "NEARBY" : ""}
          />
        </Tabs>
      </Box>
    </Box>
  );
};

const LinkTabsTemplate: StoryFn<typeof Tabs> = (args) => {
  const [value, setValue] = useState(0);

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs {...args} value={value} onChange={handleChange} aria-label="Nav tabs example">
            <LinkTabComponent label="Page One" href="/drafts" />
            <LinkTabComponent label="Page Two" href="/trash" />
            <LinkTabComponent label="Page Three" href="/spam" />
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
};

export const Basic = Template.bind({});
Basic.args = {};

export const Colored = Template.bind({});
Colored.args = {
  indicatorColor: "secondary",
  textColor: "primary",
};

Colored.argTypes = {
  indicatorColor: {
    control: { type: "select" },
    options: ["primary", "secondary"],
  },
  textColor: {
    control: { type: "select" },
    options: ["primary", "secondary"],
  },
};

export const WrappedLabels = WrappedLabelsTemplate.bind({});
WrappedLabels.args = {};

export const Disabled = Template.bind({});
Disabled.args = {};

export const FullWidth = Template.bind({});
FullWidth.args = {
  variant: "fullWidth",
};

export const Centered = Template.bind({});
Centered.args = {
  centered: true,
};

export const Scrollable = Template.bind({});
Scrollable.args = {
  scrollButtons: "auto",
  variant: "scrollable",
};

export const Verticale = VerticalTemplate.bind({});
Verticale.args = {
  orientation: "vertical",
  variant: "scrollable",
};

export const Icon = IconTemplate.bind({});
Icon.args = {};

export const IconWithLabel = IconTemplate.bind({});
IconWithLabel.args = {};

export const LinkTab = LinkTabsTemplate.bind({});
LinkTab.args = {};

export default {
  component: Tabs,
  title: "Components/Navigation/Tabs",
} as Meta<typeof Tabs>;
