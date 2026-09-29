import {
  Avatar,
  Collapse,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Stack,
  Typography,
} from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import { useState } from "react";
import ListItemCard from "@/components/DataDisplay/ListItemCard/ListItemCard";
import List from "./List";

const Template: StoryFn<typeof List> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <List sx={{ backgroundColor: "info.main", maxWidth: 360, width: "100%" }} {...args}>
      <ListItem>
        <ListItemText primary="Bulldozer" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Mini-pelle" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Dumper" />
      </ListItem>
    </List>
  </Stack>
);

const TemplateSecondary: StoryFn<typeof List> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <List sx={{ backgroundColor: "secondary.main", maxWidth: 360, width: "100%" }} {...args}>
      <ListItem>
        <ListItemText primary="Bulldozer" secondary="Lorem Ipsum" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Mini-pelle" secondary="Lorem Ipsum" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Dumper" secondary="Lorem Ipsum" />
      </ListItem>
    </List>
  </Stack>
);

const TemplateAlignItemsList: StoryFn<typeof List> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <List sx={{ maxWidth: 360, width: "100%" }} {...args}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar>RS</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <>
              <Typography sx={{ display: "inline" }} component="span" variant="body2">
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar>TH</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <>
              <Typography sx={{ display: "inline" }} component="span" variant="body2">
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar>SA</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <>
              <Typography sx={{ display: "inline" }} component="span" variant="body2">
                Sandra Adams
              </Typography>
              {" — Do you have Paris recommendations? Have you ever…"}
            </>
          }
        />
      </ListItem>
    </List>
  </Stack>
);

const TemplateNested: StoryFn<typeof List> = (args) => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <List
        sx={{ backgroundColor: "error.main", maxWidth: 360, width: "100%" }}
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Nested List Items
          </ListSubheader>
        }
        {...args}
      >
        <ListItemButton>
          <ListItemText primary="Sent mail" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="Drafts" />
        </ListItemButton>
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="Inbox" />
          {open ? "-" : "+"}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Stack>
  );
};

const TemplateListItemCard: StoryFn<typeof List> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <List sx={{ maxWidth: 360, width: "100%" }} {...args}>
      <ListItemCard isLoading size="small" />
      <ListItemCard size="small">Small brunch this weekend ?</ListItemCard>
      <ListItemCard size="small">Small summer BBQ</ListItemCard>
      <ListItemCard size="small">Small Tracktor vibes</ListItemCard>
    </List>
    <List sx={{ maxWidth: 360, width: "100%" }} {...args}>
      <ListItemCard isLoading />
      <ListItemCard>Medium brunch this weekend ?</ListItemCard>
      <ListItemCard>Medium summer BBQ</ListItemCard>
      <ListItemCard>Medium Tracktor vibes</ListItemCard>
    </List>
    <List sx={{ maxWidth: 360, width: "100%" }} {...args}>
      <ListItemCard size="large" isLoading>
        Brunch this weekend ?
      </ListItemCard>
      <ListItemCard size="large">Large brunch this weekend ?</ListItemCard>
      <ListItemCard size="large">Large summer BBQ</ListItemCard>
      <ListItemCard size="large">Large Tracktor vibes</ListItemCard>
    </List>
  </Stack>
);

const TemplateListItemCardEmpty: StoryFn<typeof List> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <List sx={{ maxWidth: 360, width: "100%" }} {...args}>
      <ListItemCard size="small" isEmpty />
    </List>
  </Stack>
);

export const Basic = Template.bind({});
Basic.args = {};

export const Dense = Template.bind({});
Dense.args = {
  dense: true,
};

export const WithTextSecondary = TemplateSecondary.bind({});
WithTextSecondary.args = {};

export const AlignItemsList = TemplateAlignItemsList.bind({});
TemplateAlignItemsList.args = {};

export const NestedList = TemplateNested.bind({});
NestedList.args = {};

export const ListOfCard = TemplateListItemCard.bind({});
ListOfCard.args = {};

export const ListOfCardEmpty = TemplateListItemCardEmpty.bind({});
ListOfCardEmpty.args = {};

export default {
  component: List,
  title: "Components/Data Display/List",
} as Meta<typeof List>;
