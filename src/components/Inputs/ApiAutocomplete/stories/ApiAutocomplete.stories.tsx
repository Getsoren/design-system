import { Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import { useMemo } from "react";
import ApiAutocomplete from "@/components/Inputs/ApiAutocomplete/ApiAutocomplete";

const MACHINES = [
  { id: "1", image: "https://placehold.co/80x80?text=M1", name: "Mini excavator 1.5T" },
  { id: "2", image: "https://placehold.co/80x80?text=M2", name: "Excavator 8T" },
  { id: "3", image: "https://placehold.co/80x80?text=M3", name: "Dumper 6T" },
  { id: "4", image: "", name: "Telescopic handler" },
  { id: "5", image: "", name: "Roller compactor" },
];

/** Story stand-in for the injected query hook: filters a static list with the `q` param. */
const useFakeQuery = (params?: Record<string, unknown>) => {
  const search = String(params?.q ?? "").toLowerCase();
  const data = useMemo(() => MACHINES.filter((machine) => machine.name.toLowerCase().includes(search)), [search]);

  return { data, isFetching: false, refetch: () => Promise.resolve() };
};

const BASE_ARGS = {
  fetchOnFocus: true,
  keyOptionLabel: "name",
  label: "Machine",
  useQuery: useFakeQuery,
  width: 320,
};

const Template: StoryFn<typeof ApiAutocomplete> = (args) => (
  <Stack spacing={2} alignItems="center" justifyContent="flex-start" height={400} paddingTop={5}>
    <ApiAutocomplete {...args} />
  </Stack>
);

export const Basic = Template.bind({});
Basic.args = { ...BASE_ARGS };

export const WithActionEndOption = Template.bind({});
WithActionEndOption.args = {
  ...BASE_ARGS,
  actionEndOption: {
    label: "+ Create a machine",
    onClick: () => alert("create"),
  },
};

export const WithActionStartOption = Template.bind({});
WithActionStartOption.args = {
  ...BASE_ARGS,
  actionStartOption: {
    label: "+ Create a machine",
    onClick: () => alert("create"),
  },
};

export default {
  component: ApiAutocomplete,
  title: "Components/Inputs/ApiAutocomplete",
} as Meta<typeof ApiAutocomplete>;
