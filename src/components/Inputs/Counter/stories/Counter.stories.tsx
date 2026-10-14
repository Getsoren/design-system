import { Divider, Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import { useState } from "react";
import Counter from "@/components/Inputs/Counter/Counter";

export const Basic: StoryFn<typeof Counter> = () => {
  const [value, setValue] = useState(1);

  return (
    <Stack width={420} marginX="auto" justifyContent="center" height="100%">
      <Counter label="Quantity" value={value} min={1} max={10} onChange={setValue} />
    </Stack>
  );
};

/** A description under the label and a unit after the value */
export const WithDescriptionAndUnit: StoryFn<typeof Counter> = () => {
  const [value, setValue] = useState(8);

  return (
    <Stack width={420} marginX="auto" justifyContent="center" height="100%">
      <Counter label="Hours per day" description="Operator included" value={value} min={1} max={12} unit="h" onChange={setValue} />
    </Stack>
  );
};

/** Several rows share a list, separated by dividers */
export const InAList: StoryFn<typeof Counter> = () => {
  const [machines, setMachines] = useState(2);
  const [hours, setHours] = useState(8);

  return (
    <Stack width={420} marginX="auto" justifyContent="center" height="100%" divider={<Divider />}>
      <Counter label="Machines" value={machines} min={1} onChange={setMachines} />
      <Counter label="Hours per day" value={hours} min={1} max={12} unit="h" onChange={setHours} />
    </Stack>
  );
};

/** In error, in the error palette or the softer warning one */
export const InError: StoryFn<typeof Counter> = () => (
  <Stack width={420} marginX="auto" justifyContent="center" height="100%" spacing={3}>
    <Counter label="Quantity" value={0} min={1} onChange={() => undefined} error helperText="At least one machine" />
    <Counter label="Quantity" value={0} min={1} onChange={() => undefined} error errorColor="warning" helperText="At least one machine" />
  </Stack>
);

export const Disabled: StoryFn<typeof Counter> = () => (
  <Stack width={420} marginX="auto" justifyContent="center" height="100%">
    <Counter label="Quantity" value={3} onChange={() => undefined} disabled />
  </Stack>
);

export default {
  component: Counter,
  title: "Components/Inputs/Counter",
} as Meta<typeof Counter>;
