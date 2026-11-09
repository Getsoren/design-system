import { Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import CheckIcon from "@/components/DataDisplay/Icons/CheckIcon";
import FlagOutlinedIcon from "@/components/DataDisplay/Icons/FlagOutlinedIcon";
import StorefrontIcon from "@/components/DataDisplay/Icons/StorefrontIcon";
import InfoLine from "../InfoLine";

const Template: StoryFn<typeof InfoLine> = (args) => (
  <Stack spacing={1} maxWidth={420}>
    <InfoLine {...args} />
    <InfoLine icon={<CheckIcon color="success" />} color="text.primary">
      Closed on 9 November 2026 by Jane Doe
    </InfoLine>
    <InfoLine icon={<FlagOutlinedIcon />}>
      This event is the supplier's: you can close or reopen it, not edit it. A long sentence wraps under itself, the icon stays on its first
      line.
    </InfoLine>
  </Stack>
);

export const Default = Template.bind({});
Default.args = {
  children: "The supplier is notified of this event",
  icon: <StorefrontIcon />,
};

export default {
  component: InfoLine,
  title: "Components/Data Display/InfoLine",
} satisfies Meta<typeof InfoLine>;
