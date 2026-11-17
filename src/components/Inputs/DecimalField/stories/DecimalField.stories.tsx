import { Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import { useState } from "react";
import DecimalField from "../DecimalField";

const Template: StoryFn<typeof DecimalField> = (args) => {
  const [value, setValue] = useState<number | null>(args.value);

  return (
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <DecimalField {...args} value={value} onChange={setValue} sx={{ width: 120 }} />
    </Stack>
  );
};

export const Basic = Template.bind({});
Basic.args = { label: "Hours", unit: "h", value: 7.5 };

export const Rate = Template.bind({});
Rate.args = { label: "Hourly rate", unit: "€/h", value: 41.63 };

/**
 * Only a day's hours are answered: 25 stays in the field, in error, until it is corrected.
 */
export const Accepted = Template.bind({});
Accepted.args = { isAccepted: (hours) => hours !== null && hours > 0 && hours <= 24, label: "Hours a day", unit: "h", value: 8 };

export default {
  component: DecimalField,
  title: "Components/Inputs/DecimalField",
} as Meta<typeof DecimalField>;
