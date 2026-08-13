import { Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import { useState } from "react";
import CountryAutocomplete, { CountryOption } from "@/components/Inputs/CountryAutocomplete/CountryAutocomplete";

/** One country per supported app locale: fr, en, es, it, pt, de, ar */
const countries: CountryOption[] = [
  { codeIso2: "FR", country: "France", phoneCode: "+33" },
  { codeIso2: "GB", country: "United Kingdom", phoneCode: "+44" },
  { codeIso2: "ES", country: "España", phoneCode: "+34" },
  { codeIso2: "IT", country: "Italia", phoneCode: "+39" },
  { codeIso2: "PT", country: "Portugal", phoneCode: "+351" },
  { codeIso2: "DE", country: "Deutschland", phoneCode: "+49" },
  { codeIso2: "SA", country: "السعودية", phoneCode: "+966" },
];

const Template: StoryFn<typeof CountryAutocomplete> = (args) => {
  const [value, setValue] = useState<CountryOption | null>(null);

  return (
    <Stack direction="row" alignItems="center" justifyContent="center" height="100%">
      <CountryAutocomplete {...args} countries={countries} value={value} onChange={setValue} />
    </Stack>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Country code",
};

export const WithDefaultCountry = Template.bind({});
WithDefaultCountry.args = {
  defaultCountryCode: "FR",
  label: "Country code",
};

export default {
  component: CountryAutocomplete,
  title: "Components/Inputs/CountryAutocomplete",
} as Meta<typeof CountryAutocomplete>;
