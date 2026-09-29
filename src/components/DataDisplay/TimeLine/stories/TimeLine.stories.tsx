import { Link, Stack, Tooltip, Typography } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import TimeLine from "@/components/DataDisplay/TimeLine/TimeLine";

const items = [
  {
    Action: <Link color="inherit">Action</Link>,
    active: true,
    isLastElement: false,
    key: "1",
    subtitle: "First Event Subtitle",
    tag: {
      color: "secondary",
      label: "First Tag",
    },
    title: "First Event",
  } as const,
  {
    active: false,
    Footer: "Footer",
    isLastElement: false,
    key: "2",
    onClick: () => null,
    subtitle: "Second Event Subtitle",
    tag: {
      color: "warning",
      label: "Second Tag",
    },
    title: "Second Event",
  } as const,
  {
    Action: <Link color="inherit">Action</Link>,
    active: false,
    key: "3",
    subtitle: "Third Event Subtitle",
    tag: {
      color: "info",
      label: "Third Tag",
    },
    title: "Third Event with a very long title that should be truncated",
  } as const,
];

const Template: StoryFn<typeof TimeLine> = (args) => (
  <Stack spacing={2} height="100%" alignItems="center" justifyContent="center">
    <TimeLine containerStyle={{ maxWidth: 400 }} {...args} />
  </Stack>
);

export const Basic = Template.bind({});
Basic.args = {
  isLoading: false,
  items,
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};

export const EmptyMessage = Template.bind({});
EmptyMessage.args = {
  emptyMessage: "No events to display.",
  items: [],
};

export const CollapseItems = Template.bind({});
CollapseItems.args = {
  items: [
    {
      active: true,
      collapseItems: [
        {
          onClick: () => null,
          subtitle: "First Collapse Item Subtitle",
          title: "First Collapse Item clickable",
        },
        {
          file: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
          subtitle: "Second Collapse Item Subtitle with very long subtitle that should be truncated",
          tag: {
            color: "error",
            label: "Second Tag",
          },
          title: "Second Collapse Item with very long title that should be truncated",
        },
        {
          file: ["https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"],
          subtitle: "Third Collapse Item Subtitle",
          title: "Third Collapse Item",
        },
        {
          file: ["https://images.unsplash.com/photo-1551963831-b3b1ca40c98e", "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"],
          subtitle: "Fourth Collapse Item Subtitle",
          title: "Fourth Collapse Item",
        },
      ],
      subtitle: "Second Event Subtitle",
      tag: {
        color: "warning",
        label: "Second Tag",
      },
      title: "Collapse Event",
    },
    ...items,
  ],
};

export const CollapseItemsDefaultOpen = Template.bind({});
CollapseItemsDefaultOpen.args = {
  items: [
    {
      active: true,
      collapseDefaultOpen: true,
      collapseItems: [
        {
          onClick: () => {
            // eslint-disable-next-line no-alert
            alert("first Collapse Item clicked");
          },
          subtitle: "First Collapse Item Subtitle",
          title: "First Collapse Item clickable",
        },
        {
          file: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
          subtitle: "Second Collapse Item Subtitle with very long subtitle that should be truncated",
          tag: {
            color: "error",
            label: "Second Tag",
          },
          title: "Second Collapse Item with very long title that should be truncated",
        },
        {
          file: ["https://pousses.fr/sites/default/files/2019-08/pdf_test_1.pdf"],
          onClick: () => {
            // eslint-disable-next-line no-alert
            alert("Third Collapse Item clicked");
          },
          subtitle: "Third Collapse Item Subtitle",
          title: "Third Collapse Item",
        },
        {
          file: [
            "https://app.api.dev.tracktor.fr/files/bookings/000039906/15ce1b4d-3da4-9543-2640-f267cd668130.csv",
            "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
          ],
          subtitle: "Fourth Collapse Item Subtitle",
          title: "Fourth Collapse Item",
        },
      ],
      subtitle: "Second Event Subtitle",
      tag: {
        color: "warning",
        label: "Second Tag",
      },
      title: "Collapse Event",
    },
    ...items,
  ],
};

export const CollapseCustom = Template.bind({});
CollapseCustom.args = {
  items: [
    {
      active: true,
      Collapse: <Typography>Collapsed content</Typography>,
      Footer: "Footer",
      subtitle: "Second Event Subtitle",
      tag: {
        color: "warning",
        label: "Second Tag",
      },
      title: "Second Event",
    },
    ...items,
  ],
};

export const VariantHover = Template.bind({});
VariantHover.args = {
  items: [
    {
      Action: <Link color="inherit">Action</Link>,
      active: true,
      collapseItems: [
        {
          onClick: () => null,
          subtitle: "First Collapse Item Subtitle",
          title: "First Collapse Item clickable",
        },
        {
          file: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
          subtitle: "Second Collapse Item Subtitle with very long subtitle that should be truncated",
          tag: {
            color: "error",
            label: "Second Tag",
          },
          title: "Second Collapse Item with very long title that should be truncated",
        },
        {
          file: ["https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"],
          subtitle: "Third Collapse Item Subtitle",
          title: "Third Collapse Item",
        },
        {
          file: ["https://images.unsplash.com/photo-1551963831-b3b1ca40c98e", "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"],
          subtitle: "Second Collapse Item Subtitle",
          title: "Fourth Collapse Item",
        },
      ],
      subtitle: "Second Event Subtitle",
      tag: {
        color: "warning",
        label: "Second Tag",
      },
      title: "Collapse Event",
    },
    ...items,
  ],
  variant: "hover",
};

export const CustomSubtitle = Template.bind({});
CustomSubtitle.args = {
  items: [
    {
      active: true,
      key: "custom-subtitle-1",
      subtitle: (
        <Tooltip title="Ceci est un sous-titre personnalisé 👌" enterDelay={300}>
          <Typography variant="body2" color="textSecondary" sx={{ cursor: "help", textDecoration: "underline" }}>
            Survolez-moi pour voir le tooltip
          </Typography>
        </Tooltip>
      ),
      tag: {
        color: "info",
        label: "Custom",
      },
      title: "Event with custom subtitle",
    },
    {
      active: false,
      key: "custom-subtitle-2",
      subtitle: (
        <Link href="https://www.tracktor.fr" target="_blank" rel="noopener noreferrer" color="secondary" underline="hover">
          Ouvrir Tracktor.fr
        </Link>
      ),
      tag: {
        color: "secondary",
        label: "Link",
      },
      title: "Event with subtitle link",
    },
  ],
};

export default {
  component: TimeLine,
  title: "Components/Data Display/TimeLine",
} as Meta<typeof TimeLine>;
