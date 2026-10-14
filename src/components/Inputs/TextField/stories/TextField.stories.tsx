import { Autocomplete, InputAdornment, MenuItem, TextField as MuiTextField, Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import TextField from "./TextField";

const Template: StoryFn<typeof TextField> = (args) => (
  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
    <TextField id="tiny" label="Tiny" size="tiny" {...args} />
    <TextField id="xSmall" label="xSmall" size="xSmall" {...args} />
    <TextField id="small" label="Small" size="small" {...args} />
    <TextField id="medium" label="Medium" size="medium" {...args} />
  </Stack>
);

export const Basic = Template.bind({});
Basic.args = {
  variant: "outlined",
};

export const Filled = Template.bind({});
Filled.args = {
  variant: "filled",
};

/** Every state of the default-size filled field, the form field of the apps */
export const FilledStates: StoryFn<typeof TextField> = () => (
  <Stack spacing={3} width={360} marginX="auto" justifyContent="center" minHeight="100%" paddingY={3}>
    <MuiTextField id="filled-empty" label="Empty" variant="filled" />
    <MuiTextField id="filled-value" label="With a value" variant="filled" defaultValue="Some text" />
    <MuiTextField id="filled-required" label="Required" variant="filled" required />
    <MuiTextField id="filled-no-label" placeholder="Without a label" variant="filled" />
    <MuiTextField id="filled-helper" label="With a helper text" variant="filled" helperText="Helper text" />
    <MuiTextField id="filled-error" label="In error" variant="filled" error helperText="Error text" defaultValue="Wrong value" />
    <MuiTextField id="filled-disabled" label="Disabled" variant="filled" disabled defaultValue="Locked value" />
    <MuiTextField
      id="filled-suffix"
      label="With a suffix"
      variant="filled"
      slotProps={{ input: { endAdornment: <InputAdornment position="end">kg</InputAdornment> } }}
    />
    <MuiTextField
      id="filled-suffix-shrunk"
      label="With a suffix, label kept shrunk"
      variant="filled"
      slotProps={{ input: { endAdornment: <InputAdornment position="end">kg</InputAdornment> }, inputLabel: { shrink: true } }}
    />
    <MuiTextField
      id="filled-suffix-value"
      label="With a suffix and a value"
      variant="filled"
      defaultValue="250"
      slotProps={{ input: { endAdornment: <InputAdornment position="end">kg</InputAdornment> } }}
    />
    <MuiTextField
      id="filled-prefix"
      label="With a prefix"
      variant="filled"
      slotProps={{ input: { startAdornment: <InputAdornment position="start">€</InputAdornment> } }}
    />
    <MuiTextField id="filled-select" label="Select" variant="filled" select defaultValue="b">
      <MenuItem value="a">Option A</MenuItem>
      <MenuItem value="b">Option B</MenuItem>
    </MuiTextField>
    <Autocomplete
      options={["Option A", "Option B"]}
      renderInput={(params) => <MuiTextField {...params} id="filled-autocomplete" label="Autocomplete" variant="filled" />}
    />
    <Autocomplete
      options={["Option A", "Option B"]}
      renderInput={(params) => (
        <MuiTextField {...params} id="filled-autocomplete-no-label" placeholder="Autocomplete without a label" variant="filled" />
      )}
    />
    <MuiTextField id="filled-multiline" label="Multiline" variant="filled" multiline minRows={3} />
    <MuiTextField id="filled-multiline-no-label" placeholder="Multiline without a label" variant="filled" multiline minRows={3} />
  </Stack>
);

export const Standard = Template.bind({});
Standard.args = {
  variant: "standard",
};

export const Search = Template.bind({});
Search.args = {
  type: "search",
};

export const TypeFile = Template.bind({});
TypeFile.args = {
  label: "",
  type: "file",
};

export const TypeFileWithHelperText = Template.bind({});
TypeFileWithHelperText.args = {
  helperText: "Helper text",
  label: "",
  type: "file",
};

export const Multiline = Template.bind({});
Multiline.args = {
  minRows: 3,
  multiline: true,
};

export const MultilineFilled = Template.bind({});
MultilineFilled.args = {
  minRows: 3,
  multiline: true,
  variant: "filled",
};

export const DateField = Template.bind({});
DateField.args = {
  label: "",
  type: "date",
};

export const Time = Template.bind({});
Time.args = {
  label: "",
  type: "time",
};

export default {
  component: TextField,
  title: "Components/Inputs/TextField",
} as Meta<typeof TextField>;
