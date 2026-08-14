import { Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import { useState } from "react";
import ChipQuantityEditor from "../ChipQuantityEditor";

const Template: StoryFn<typeof ChipQuantityEditor> = (args) => {
  const [quantity, setQuantity] = useState<number>(3);

  return (
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ChipQuantityEditor {...args} quantity={quantity} onChange={setQuantity} />
    </Stack>
  );
};

export const Basic = Template.bind({});
Basic.args = {};

export const WithUnit = Template.bind({});
WithUnit.args = {
  unit: "m",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export default {
  component: ChipQuantityEditor,
  title: "Components/Inputs/ChipQuantityEditor",
} as Meta<typeof ChipQuantityEditor>;
