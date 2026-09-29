import { Button, Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import BottomFixedPaper from "@/components/Surface/BottomFixedPaper/BottomFixedPaper";

const VIEWPORTS = {
  mobile: {
    name: "Mobile",
    styles: {
      height: "600px",
      width: "480px",
    },
  },
  tablet: {
    name: "Tablet",
    styles: {
      height: "600px",
      width: "768px",
    },
  },
};

const Template: StoryFn<typeof BottomFixedPaper> = (args) => (
  <Stack spacing={0} alignItems="center" justifyContent="center" height="100%">
    <BottomFixedPaper {...args}>
      <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
        <Button fullWidth variant="contained">
          Hello
        </Button>
        <Button fullWidth variant="contained">
          World
        </Button>
      </Stack>
    </BottomFixedPaper>
  </Stack>
);

export const Basic = Template.bind({});
Basic.args = {};
Basic.parameters = {
  viewport: {
    defaultViewport: "mobile",
    viewports: VIEWPORTS,
  },
};

export const InFalse = Template.bind({});
InFalse.args = {
  in: false,
};
InFalse.parameters = {
  viewport: {
    defaultViewport: "mobile",
    viewports: VIEWPORTS,
  },
};

export default {
  component: BottomFixedPaper,
  title: "Components/Surface/BottomFixedPaper",
} as Meta<typeof BottomFixedPaper>;
