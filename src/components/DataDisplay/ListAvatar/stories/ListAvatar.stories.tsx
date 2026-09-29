import { Box, IconButton, Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import ArticleImage from "@/components/DataDisplay/ArticleImage/ArticleImage";
import CheckIcon from "@/components/DataDisplay/Icons/CheckIcon";
import CloseIcon from "@/components/DataDisplay/Icons/CloseIcon";
import ListAvatar from "../ListAvatar";

const data = [
  {
    id: 1,
    onClick: () => {
      alert("Item clicked");
    },
    subtitle: "With onClick",
    title: "Basic",
  },
  {
    chipColor: "secondary",
    chipLabel: "New",
    id: 2,
    subtitle: "Lorem Ipsum",
    title: "Chip",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    onClick: () => {
      alert("Primary item clicked");
    },
    secondaryAction: (
      <IconButton
        onClick={(e) => {
          e.stopPropagation();
          alert("Secondary action clicked");
        }}
      >
        <CloseIcon />
      </IconButton>
    ),
    subtitle: "Lorem Ipsum",
    title: "Secondary action with a very long text that should be truncated",
  },
  {
    icon: <CloseIcon />,
    id: 4,
    subtitle: "Lorem Ipsum",
    title: "Icon",
  },
  {
    Avatar: <ArticleImage width={40} height={40} />,
    id: 5,
    subtitle: "Lorem Ipsum",
    title: "Custom avatar",
  },
  {
    Avatar: <ArticleImage width={40} height={40} />,
    id: 6,
    subtitle: "Lorem Ipsum",
    title: "Title with a very long text that should be truncated",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    subtitle: "Lorem Ipsum",
    title: "Image",
  },
  {
    id: 8,
    image: "https://www.soundczech.cz/temp/lorem-ipsum.pdf",
    subtitle: "Lorem Ipsum",
    title: "PDF",
  },
];

const Template: StoryFn<typeof ListAvatar> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Box maxWidth={320}>
      <ListAvatar items={data} {...args} />
    </Box>
  </Stack>
);

export const Basic = Template.bind({});
Basic.args = {};

export const AlwaysDisplaySecondaryAction = Template.bind({});
AlwaysDisplaySecondaryAction.args = {
  alwaysDisplaySecondaryAction: true,
};

export const ItemAlwaysDisplaySecondaryAction = Template.bind({});
ItemAlwaysDisplaySecondaryAction.args = {
  items: [
    {
      alwaysDisplaySecondaryAction: true,
      id: 1,
      secondaryAction: (
        <IconButton size="small">
          <CheckIcon />
        </IconButton>
      ),
      subtitle: "Always visible",
      title: "Item 1",
    },
    {
      id: 2,
      secondaryAction: (
        <IconButton size="small">
          <CloseIcon />
        </IconButton>
      ),
      subtitle: "Visible on hover",
      title: "Item 2",
    },
    {
      alwaysDisplaySecondaryAction: true,
      id: 3,
      secondaryAction: (
        <IconButton size="small">
          <CheckIcon />
        </IconButton>
      ),
      subtitle: "Always visible",
      title: "Item 3",
    },
    {
      id: 4,
      secondaryAction: (
        <IconButton size="small">
          <CloseIcon />
        </IconButton>
      ),
      subtitle: "Visible on hover",
      title: "Item 4",
    },
  ],
};

export const MixedSecondaryAction = Template.bind({});
MixedSecondaryAction.args = {
  items: [
    {
      id: 1,
      persistentSecondaryAction: (
        <IconButton size="small">
          <CheckIcon />
        </IconButton>
      ),
      secondaryAction: (
        <IconButton size="small">
          <CloseIcon />
        </IconButton>
      ),
      subtitle: "Persistent + hover",
      title: "Item 1 with very long subtitle",
    },
    {
      id: 2,
      persistentSecondaryAction: (
        <IconButton size="small">
          <CheckIcon />
        </IconButton>
      ),
      subtitle: "Persistent action only",
      title: "Item 2",
    },
    {
      id: 3,
      secondaryAction: (
        <IconButton size="small">
          <CloseIcon />
        </IconButton>
      ),
      subtitle: "Hover action only",
      title: "Item 3",
    },
  ],
  sx: {
    maxWidth: 300,
  },
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};

export const WithAction = Template.bind({});
WithAction.args = {
  action: {
    icon: <CheckIcon />,
    title: "Action here !",
  },
};

export const WithImage = Template.bind({});
WithImage.args = {
  items: [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      subtitle: "Lorem Ipsum",
      title: "Basic",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      subtitle: "Lorem Ipsum",
      title: "Basic",
    },
  ],
};

export const WithPdf = Template.bind({});
WithPdf.args = {
  items: [
    {
      id: 1,
      image: "https://www.soundczech.cz/temp/lorem-ipsum.pdf",
      subtitle: "Lorem Ipsum",
      title: "PDF n°1",
    },
    {
      id: 2,
      image: "https://pousses.fr/sites/default/files/2019-08/pdf_test_1.pdf",
      subtitle: "Lorem Ipsum",
      title: "PDF n°2",
    },
  ],
};

export const disabledLightBox = Template.bind({});
disabledLightBox.args = {
  disableLightbox: true,
  items: [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      subtitle: "Lorem Ipsum",
      title: "Basic",
    },
    {
      id: 2,
      image: "https://www.soundczech.cz/temp/lorem-ipsum.pdf",
      subtitle: "Lorem Ipsum",
      title: "Basic",
    },
  ],
};

export const Thumbnail = Template.bind({});
Thumbnail.args = {
  items: [
    {
      id: 1,
      image: "https://placehold.co/1000",
      subtitle: "Lorem Ipsum",
      thumbnail: "https://placehold.co/500",
      title: "Basic",
    },
    {
      id: 2,
      image: "https://placehold.co/1000",
      subtitle: "Lorem Ipsum",
      thumbnail: "https://placehold.co/500",
      title: "Basic",
    },
  ],
};

export const Document = Template.bind({});
Document.args = {
  items: [
    {
      id: 1,
      image: "https://www.test.com/test.csv",
      subtitle: "Lorem Ipsum",
      title: "CSV image path",
    },
    {
      id: 2,
      image: "https://www.test.com/test.csv",
      subtitle: "Lorem Ipsum",
      title: "XLS image path",
    },
    {
      id: 3,
      image: "https://www.test.com/test.csv",
      subtitle: "Lorem Ipsum",
      title: "XLSX image path",
    },
  ],
};

export const WithDivider = Template.bind({});
WithDivider.args = {
  items: [
    {
      id: 1,
      subtitle: "Lorem Ipsum",
      title: "Basic",
    },
    {
      divider: true,
      id: 2,
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      subtitle: "Lorem Ipsum",
      title: "Basic",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      subtitle: "Lorem Ipsum",
      title: "Basic",
    },
  ],
};

export const DoubleAvatar = Template.bind({});
DoubleAvatar.args = {
  items: [
    {
      id: 1,
      subtitle: "Lorem Ipsum",
      thumbnail: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      thumbnailSecondary: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Basic",
    },
    {
      id: 2,
      subtitle: "Lorem Ipsum",
      thumbnail: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      thumbnailSecondary: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Basic",
    },
  ],
};

export const DensityComfortable = Template.bind({});
DensityComfortable.args = {
  density: "comfortable",
  items: [
    {
      id: 1,
      subtitle: "Lorem Ipsum",
      thumbnail: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      thumbnailSecondary: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Basic",
    },
    {
      id: 2,
      subtitle: "Lorem Ipsum",
      thumbnail: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      thumbnailSecondary: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Basic",
    },
  ],
};

export const ItemCustomStyle = Template.bind({});
ItemCustomStyle.args = {
  density: "comfortable",
  items: [
    {
      id: 1,
      subtitle: "Lorem Ipsum",
      sx: {
        backgroundColor: ({ palette }) => palette.info["8p"],
        border: ({ palette }) => `${palette.info["30p"]} 1px solid`,
      },
      thumbnail: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      thumbnailSecondary: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Basic",
    },
    {
      id: 2,
      subtitle: "Lorem Ipsum",
      thumbnail: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      thumbnailSecondary: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Basic",
    },
  ],
};

export default {
  component: ListAvatar,
  title: "Components/Data Display/ListAvatar",
} as Meta<typeof ListAvatar>;
