import { Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import { SyntheticEvent, useState } from "react";
import AutocompleteFilter, { AutocompleteFilterOption } from "@/components/Inputs/AutocompleteFilter";

const data = [
  { id: "1", label: "Oliver Hansen", value: "oliver-hansen" },
  { id: "2", label: "Van Henry", value: "van-henry" },
  { id: "3", label: "April Tucker", value: "april-tucker" },
  { id: "4", label: "April Tucker with very long label already", value: "april-tucker" },
];

const dataWithImage = [
  { id: "1", image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e", label: "Oliver Hansen", value: "oliver-hansen" },
  { id: "2", image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d", label: "Van Henry", value: "van-henry" },
  { id: "3", image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4", label: "April Tucker", value: "april-tucker" },
];

const Template: StoryFn<typeof AutocompleteFilter> = (args) => {
  const [selectedOptionsXSmall, setSelectedOptionsXSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsSmall, setSelectedOptionsSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsMedium, setSelectedOptionsMedium] = useState<AutocompleteFilterOption[]>([]);

  const handleChangeXSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsXSmall(value);
  };

  const handleChangeSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsSmall(value);
  };

  const handleChangeMedium = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsMedium(value);
  };

  return (
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <AutocompleteFilter {...args} size="xSmall" sx={{ width: 300 }} onChange={handleChangeXSmall} value={selectedOptionsXSmall} />
      <AutocompleteFilter {...args} size="small" sx={{ width: 300 }} onChange={handleChangeSmall} value={selectedOptionsSmall} />
      <AutocompleteFilter {...args} size="medium" sx={{ width: 300 }} onChange={handleChangeMedium} value={selectedOptionsMedium} />
    </Stack>
  );
};

const allVariants = ["standard", "chip", "filled"] as const;
const allSizes = ["xSmall", "small", "medium"] as const;

const TemplateUniqueSelection: StoryFn<typeof AutocompleteFilter> = (args) => {
  const [selectedOptions, setSelectedOptions] = useState<Record<string, AutocompleteFilterOption | null>>({});

  const handleChange = (key: string) => (_: SyntheticEvent, value: AutocompleteFilterOption | null) => {
    setSelectedOptions((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <Stack spacing={4} alignItems="center" justifyContent="center" height="100%">
      {allVariants.map((variant) => (
        <Stack key={variant} direction="row" spacing={2} alignItems="center">
          {allSizes.map((size) => (
            <AutocompleteFilter
              {...args}
              key={size}
              size={size}
              variant={variant}
              label={"xxxx"}
              sx={variant === "chip" ? undefined : { width: 300 }}
              onChange={handleChange(`${variant}-${size}`)}
              value={selectedOptions[`${variant}-${size}`] ?? null}
              multiple={false}
            />
          ))}
        </Stack>
      ))}
    </Stack>
  );
};

const TemplateFixedWidth: StoryFn<typeof AutocompleteFilter> = (args) => {
  const [selectedOptions, setSelectedOptions] = useState<Record<string, AutocompleteFilterOption[]>>({});

  const handleChange = (key: string) => (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptions((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <Stack spacing={4} alignItems="center" justifyContent="center" height="100%">
      {allVariants.map((variant) => (
        <Stack key={variant} direction="row" spacing={2} alignItems="center">
          {allSizes.map((size) => (
            <AutocompleteFilter
              {...args}
              key={size}
              size={size}
              variant={variant}
              sx={{ width: 150 }}
              onChange={handleChange(`${variant}-${size}`)}
              value={selectedOptions[`${variant}-${size}`] ?? []}
            />
          ))}
        </Stack>
      ))}
    </Stack>
  );
};

const statuses = [
  { id: "1", label: "En cours", value: "ongoing" },
  { id: "2", label: "Confirmée", value: "confirmed" },
  { id: "3", label: "Livrée", value: "delivered" },
  { id: "4", label: "Annulée", value: "cancelled" },
];

const TemplateFilled: StoryFn<typeof AutocompleteFilter> = (args) => {
  const [status, setStatus] = useState<AutocompleteFilterOption[]>([statuses[0]]);
  const [users, setUsers] = useState<AutocompleteFilterOption[]>([data[0], data[1], data[2]]);
  const [empty, setEmpty] = useState<AutocompleteFilterOption[]>([]);

  return (
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <AutocompleteFilter
        {...args}
        size="xSmall"
        label="Statut"
        onChange={(_: SyntheticEvent, value: AutocompleteFilterOption[]) => setStatus(value)}
        options={statuses}
        value={status}
      />
      <AutocompleteFilter
        {...args}
        size="small"
        label="Utilisateurs"
        onChange={(_: SyntheticEvent, value: AutocompleteFilterOption[]) => setUsers(value)}
        options={data}
        value={users}
      />
      <AutocompleteFilter
        {...args}
        size="medium"
        label="Chantier"
        onChange={(_: SyntheticEvent, value: AutocompleteFilterOption[]) => setEmpty(value)}
        options={data}
        value={empty}
      />
    </Stack>
  );
};

const TemplateChip: StoryFn<typeof AutocompleteFilter> = (args) => {
  const [selectedOptionsXSmall, setSelectedOptionsXSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsSmall, setSelectedOptionsSmall] = useState<AutocompleteFilterOption[]>([]);
  const [selectedOptionsMedium, setSelectedOptionsMedium] = useState<AutocompleteFilterOption[]>([]);

  const handleChangeXSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsXSmall(value);
  };

  const handleChangeSmall = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsSmall(value);
  };

  const handleChangeMedium = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setSelectedOptionsMedium(value);
  };

  return (
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <AutocompleteFilter {...args} size="xSmall" onChange={handleChangeXSmall} value={selectedOptionsXSmall} />
      <AutocompleteFilter {...args} size="small" onChange={handleChangeSmall} value={selectedOptionsSmall} />
      <AutocompleteFilter {...args} size="medium" onChange={handleChangeMedium} value={selectedOptionsMedium} />
    </Stack>
  );
};

const TemplateTooltip: StoryFn<typeof AutocompleteFilter> = (args) => {
  const [enabledValue, setEnabledValue] = useState<AutocompleteFilterOption[]>([]);

  const handleChangeEnabled = (_: SyntheticEvent, value: AutocompleteFilterOption[]) => {
    setEnabledValue(value);
  };

  return (
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <AutocompleteFilter {...args} sx={{ width: 300 }} onChange={handleChangeEnabled} value={enabledValue} />
      <AutocompleteFilter {...args} sx={{ width: 300 }} disabled value={[data[0]]} />
    </Stack>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  options: data,
};

export const WithImage = Template.bind({});
WithImage.args = {
  options: dataWithImage,
};

export const WithAvatar = Template.bind({});
WithAvatar.args = {
  options: [
    { id: "1", image: "avatar", label: "Oliver Hansen", value: "oliver-hansen" },
    { id: "2", image: "avatar", label: "Van Henry", value: "van-henry" },
    { id: "3", image: "avatar", label: "April Tucker", value: "april-tucker" },
  ],
};

export const WithAvatarLetter = Template.bind({});
WithAvatarLetter.args = {
  options: [
    { id: "1", image: "letter", label: "Oliver Hansen", value: "oliver-hansen" },
    { id: "2", image: "letter", label: "Van Henry", value: "van-henry" },
    { id: "3", image: "letter", label: "April Tucker", value: "april-tucker" },
  ],
};

export const DisableSelectAll = Template.bind({});
DisableSelectAll.args = {
  disableSelectAll: true,
  options: dataWithImage,
};

export const WithHeaderOptions = Template.bind({});
WithHeaderOptions.args = {
  options: [
    ...data,
    {
      id: "my-worksite",
      isHeader: true,
      label: "Mes chantiers",
      value: "my-worksite",
    },
  ],
};

export const WithoutReset = Template.bind({});
WithoutReset.args = {
  disableReset: true,
  options: data,
};

export const CheckboxDisabled = Template.bind({});
CheckboxDisabled.args = {
  disableCheckbox: true,
  options: data,
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  options: data,
  placeholder: "Search...",
};

export const ResetInputValueOnSelect = Template.bind({});
ResetInputValueOnSelect.args = {
  options: data,
  resetInputValueOnSelectOption: true,
};

export const DisableClearable = Template.bind({});
DisableClearable.args = {
  disableClearable: true,
  options: data,
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};

export const UniqueSelection = TemplateUniqueSelection.bind({});
UniqueSelection.args = {
  multiple: false,
  options: data,
};

// Same 220px width on every variant and size: chip and filled normally size to
// their content, this story checks they also behave when a width is imposed
export const FixedWidth = TemplateFixedWidth.bind({});
FixedWidth.args = {
  options: data,
  placeholder: "Filter",
};

export const ChipVariant = TemplateChip.bind({});
ChipVariant.args = {
  options: data,
  placeholder: "Search",
  variant: "chip",
};

// With a label the selection collapses into a summary: one value is spelled out
// ("Statut : En cours"), several collapse to the label plus a primary count pill
// ("Utilisateurs" + 3), empty keeps the label alone — all updated live while the
// menu is open.
export const FilledVariant = TemplateFilled.bind({});
FilledVariant.args = {
  variant: "filled",
};

// Without a label or placeholder there is no name to collapse under, so the
// filter falls back to the first value + total count pill display.
export const FilledWithoutLabel = Template.bind({});
FilledWithoutLabel.args = {
  options: data,
  variant: "filled",
};

export const WithTooltip = TemplateTooltip.bind({});
WithTooltip.args = {
  options: data,
  placeholder: "Filter",
  tooltip: "A global filter is active. Clear it to filter manually here.",
};

export default {
  component: AutocompleteFilter,
  title: "Components/Inputs/AutocompleteFilter",
} as Meta<typeof AutocompleteFilter>;
