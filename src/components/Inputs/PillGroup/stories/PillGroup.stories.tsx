import { Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import { useState } from "react";
import FlagOutlinedIcon from "@/components/DataDisplay/Icons/FlagOutlinedIcon";
import InfoIcon from "@/components/DataDisplay/Icons/InfoIcon";
import PillGroup from "@/components/Inputs/PillGroup/PillGroup";

const YES_NO = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
];

const DAYS = [
  { label: "Saturday", value: "saturday" },
  { label: "Sunday", value: "sunday" },
  { label: "Bank holidays", value: "holidays" },
];

/** One option at a time, like a radio group; tapping the selected one calls back with it again */
export const Single: StoryFn<typeof PillGroup> = () => {
  const [value, setValue] = useState<string>();

  return (
    <Stack width={360} marginX="auto" justifyContent="center" height="100%">
      <PillGroup aria-label="Operator" options={YES_NO} value={value} onChange={setValue} />
    </Stack>
  );
};

/** Several options, like a checkbox group */
export const Multiple: StoryFn<typeof PillGroup> = () => {
  const [values, setValues] = useState<string[]>(["saturday"]);

  return (
    <Stack width={360} marginX="auto" justifyContent="center" height="100%">
      <PillGroup multiple aria-label="Days of use" options={DAYS} value={values} onChange={setValues} />
    </Stack>
  );
};

/** An icon leads the label */
export const WithIcons: StoryFn<typeof PillGroup> = () => {
  const [value, setValue] = useState<string>("flag");

  return (
    <Stack width={360} marginX="auto" justifyContent="center" height="100%">
      <PillGroup
        aria-label="Kind"
        options={[
          { icon: <FlagOutlinedIcon sx={{ fontSize: 18 }} />, label: "Flagged", value: "flag" },
          { icon: <InfoIcon sx={{ fontSize: 18 }} />, label: "Informative", value: "info" },
        ]}
        value={value}
        onChange={setValue}
      />
    </Stack>
  );
};

/** A missing answer, in the error palette or the softer warning one */
export const InError: StoryFn<typeof PillGroup> = () => (
  <Stack width={360} marginX="auto" justifyContent="center" height="100%" spacing={3}>
    <PillGroup aria-label="Operator" options={YES_NO} onChange={() => undefined} error helperText="Please pick an option" />
    <PillGroup
      aria-label="Operator"
      options={YES_NO}
      onChange={() => undefined}
      error
      errorColor="warning"
      helperText="Please pick an option"
    />
  </Stack>
);

export const Disabled: StoryFn<typeof PillGroup> = () => (
  <Stack width={360} marginX="auto" justifyContent="center" height="100%">
    <PillGroup aria-label="Operator" options={YES_NO} value="yes" onChange={() => undefined} disabled />
  </Stack>
);

export default {
  component: PillGroup,
  title: "Components/Inputs/PillGroup",
} as Meta<typeof PillGroup>;
