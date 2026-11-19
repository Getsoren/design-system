import { Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import { useState } from "react";
import ExpandableSearch from "../ExpandableSearch";

const Template: StoryFn<typeof ExpandableSearch> = (args) => {
  const [value, setValue] = useState(args.value);

  return (
    <Stack direction="row" spacing={1} alignItems="center" justifyContent="center" height="100%">
      <ExpandableSearch {...args} value={value} onChange={setValue} />
    </Stack>
  );
};

/**
 * Folded: a click on the magnifier opens it, and it folds back once left empty.
 */
export const Basic = Template.bind({});
Basic.args = { placeholder: "Search", tooltip: "Search an event, an order or a worksite", value: "" };

/**
 * A search already typed keeps the field open.
 */
export const WithValue = Template.bind({});
WithValue.args = { placeholder: "Search", value: "Breakdown" };

/**
 * A wider field once open.
 */
export const Wide = Template.bind({});
Wide.args = { openWidth: 320, placeholder: "Search", value: "" };

export default {
  component: ExpandableSearch,
  title: "Components/Inputs/ExpandableSearch",
} as Meta<typeof ExpandableSearch>;
