import { Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import { useState } from "react";
import TextFieldPhone from "../TextFieldPhone";

const Template: StoryFn<typeof TextFieldPhone> = (args) => {
  const [value, setValue] = useState("");

  return (
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <TextFieldPhone label="Phone" placeholder="06 00 00 00 00" {...args} value={value} onChange={setValue} />
    </Stack>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  variant: "outlined",
};

export const TenDigitsAtMost = Template.bind({});
TenDigitsAtMost.args = {
  format: (digits: string) => digits.slice(0, 10).replace(/(\d{2})(?=\d)/g, "$1 "),
  variant: "filled",
};

export default {
  component: TextFieldPhone,
  title: "Components/Inputs/TextFieldPhone",
} as Meta<typeof TextFieldPhone>;
