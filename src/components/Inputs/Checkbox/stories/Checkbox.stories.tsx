import { FormControlLabel, FormGroup, Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import { useState } from "react";
import Checkbox from "./Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Template: StoryFn<typeof Checkbox> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Checkbox {...label} defaultChecked {...args} />
    <Checkbox {...label} {...args} />
    <Checkbox {...label} disabled {...args} />
    <Checkbox {...label} disabled checked {...args} />
  </Stack>
);

const TemplateLabel: StoryFn<typeof Checkbox> = (args) => (
  <Stack alignItems="center" justifyContent="center" height="100%">
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked {...args} />} label="Label" />
      <FormControlLabel disabled control={<Checkbox {...args} />} label="Disabled" />
    </FormGroup>
  </Stack>
);

const TemplateColor: StoryFn<typeof Checkbox> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <Checkbox {...label} defaultChecked {...args} />
    <Checkbox {...label} defaultChecked color="secondary" {...args} />
    <Checkbox {...label} defaultChecked color="info" {...args} />
    <Checkbox {...label} defaultChecked color="success" {...args} />
    <Checkbox {...label} defaultChecked color="warning" {...args} />
    <Checkbox {...label} defaultChecked color="default" {...args} />
    <Checkbox {...label} defaultChecked color="error" {...args} />
  </Stack>
);

const TemplateIndeterminate: StoryFn<typeof Checkbox> = (args) => {
  const [checked, setChecked] = useState([true, false]);

  return (
    <Stack alignItems="center" justifyContent="center" height="100%">
      <FormGroup>
        <FormControlLabel
          label="Parent"
          control={
            <Checkbox
              checked={checked[0] && checked[1]}
              indeterminate={checked[0] !== checked[1]}
              onChange={(event) => setChecked([event.target.checked, event.target.checked])}
              {...args}
            />
          }
        />
        <Stack marginLeft={3}>
          <FormControlLabel
            label="Child 1"
            control={<Checkbox checked={checked[0]} onChange={(event) => setChecked([event.target.checked, checked[1]])} {...args} />}
          />
          <FormControlLabel
            label="Child 2"
            control={<Checkbox checked={checked[1]} onChange={(event) => setChecked([checked[0], event.target.checked])} {...args} />}
          />
        </Stack>
        <FormControlLabel label="Disabled" disabled control={<Checkbox indeterminate {...args} />} />
      </FormGroup>
    </Stack>
  );
};

export const Basic = Template.bind({});
Basic.args = {};

export const Label = TemplateLabel.bind({});
Label.args = {};

export const Color = TemplateColor.bind({});
Color.args = {};

export const Indeterminate = TemplateIndeterminate.bind({});
Indeterminate.args = {};

export default {
  component: Checkbox,
  title: "Components/Inputs/Checkbox",
} as Meta<typeof Checkbox>;
