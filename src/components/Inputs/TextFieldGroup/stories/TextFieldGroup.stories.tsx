import { FormHelperText, MenuItem, Stack, TextField } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import TextFieldGroup from "@/components/Inputs/TextFieldGroup/TextFieldGroup";

const HOURS = ["08:00", "09:00", "10:00", "11:00", "12:00"];

/** Two fields stacked, the usual contact pair */
export const Column: StoryFn<typeof TextFieldGroup> = () => (
  <Stack width={360} marginX="auto" justifyContent="center" height="100%">
    <TextFieldGroup>
      <TextField variant="filled" label="Name" />
      <TextField variant="filled" label="Phone" type="tel" />
    </TextFieldGroup>
  </Stack>
);

/** Two selects side by side, a time range */
export const Row: StoryFn<typeof TextFieldGroup> = () => (
  <Stack width={360} marginX="auto" justifyContent="center" height="100%">
    <TextFieldGroup direction="row">
      <TextField variant="filled" label="Start" select defaultValue="08:00">
        {HOURS.map((hour) => (
          <MenuItem key={hour} value={hour}>
            {hour}
          </MenuItem>
        ))}
      </TextField>
      <TextField variant="filled" label="End" select defaultValue="12:00">
        {HOURS.map((hour) => (
          <MenuItem key={hour} value={hour}>
            {hour}
          </MenuItem>
        ))}
      </TextField>
    </TextFieldGroup>
  </Stack>
);

/** The frame takes the invalid colour; the helper text is the consumer's */
export const InError: StoryFn<typeof TextFieldGroup> = () => (
  <Stack width={360} marginX="auto" justifyContent="center" height="100%" spacing={0.5}>
    <TextFieldGroup direction="row" error>
      <TextField variant="filled" label="Start" defaultValue="12:00" />
      <TextField variant="filled" label="End" defaultValue="08:00" />
    </TextFieldGroup>
    <FormHelperText error>The end must come after the start</FormHelperText>
  </Stack>
);

/** The softer warning palette, for an answer still to be given */
export const WarningError: StoryFn<typeof TextFieldGroup> = () => (
  <Stack width={360} marginX="auto" justifyContent="center" height="100%">
    <TextFieldGroup error errorColor="warning">
      <TextField variant="filled" label="Name" />
      <TextField variant="filled" label="Phone" type="tel" />
    </TextFieldGroup>
  </Stack>
);

export default {
  component: TextFieldGroup,
  title: "Components/Inputs/TextFieldGroup",
} as Meta<typeof TextFieldGroup>;
