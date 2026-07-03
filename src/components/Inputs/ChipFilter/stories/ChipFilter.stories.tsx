import { Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import { useState } from "react";
import ChipFilter from "@/components/Inputs/ChipFilter/ChipFilter";

const options = [
  { id: "1", label: "Filter 1", value: "filter-1" },
  { id: "2", label: "Filter 2", value: "filter-2" },
  { id: "3", label: "Filter 3", value: "filter-3" },
  { id: "4", label: "Filter 4", value: "filter-4" },
];

const optionsWithInfo = [
  { id: "1", info: "This filter only keeps active items.", label: "Filter with info !", value: "filter-1" },
  { id: "2", label: "Filter 2", value: "filter-2" },
  { id: "3", info: "Archived items are excluded from this filter.", label: "Filter 3", value: "filter-3" },
  { id: "4", label: "Filter 4", value: "filter-4" },
];

const Template: StoryFn<typeof ChipFilter> = (args) => {
  const [valueSmall, setValueSmall] = useState<string>();
  const [valueMedium, setValueMedium] = useState<string>();

  const handleChangeSmall = (newValue?: string) => {
    setValueSmall(newValue);
  };

  const handleChangeMedium = (newValue?: string) => {
    setValueMedium(newValue);
  };

  return (
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ChipFilter
        size="small"
        label="Small"
        onChange={handleChangeSmall}
        value={valueSmall}
        options={options}
        labelMenu="Make your choice"
        disabled={args?.disabled}
        labelOnlyAfterSelection={args?.labelOnlyAfterSelection}
        separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected}
        applyOnSelect={args?.applyOnSelect}
      />
      <ChipFilter
        size="medium"
        label="Medium"
        onChange={handleChangeMedium}
        value={valueMedium}
        options={options}
        labelMenu="Make your choice"
        disabled={args?.disabled}
        labelOnlyAfterSelection={args?.labelOnlyAfterSelection}
        separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected}
        applyOnSelect={args?.applyOnSelect}
      />
    </Stack>
  );
};

const MultipleTemplate: StoryFn<typeof ChipFilter> = (args) => {
  const [valueSmallMultiple, setValueSmallMultiple] = useState<string[]>([]);
  const [valueMediumMultiple, setValueMediumMultiple] = useState<string[]>([]);

  const handleChangeSmallMultiple = (newValue: string[]) => {
    setValueSmallMultiple(newValue);
  };

  const handleChangeMediumMultiple = (newValue: string[]) => {
    setValueMediumMultiple(newValue);
  };

  return (
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ChipFilter
        multiple
        size="small"
        label="Small Multiple"
        onChange={handleChangeSmallMultiple}
        value={valueSmallMultiple}
        options={options}
        labelMenu="Select multiple options"
        disabled={args?.disabled}
        labelOnlyAfterSelection={args?.labelOnlyAfterSelection}
        separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected}
      />
      <ChipFilter
        multiple
        size="medium"
        label="Medium Multiple"
        onChange={handleChangeMediumMultiple}
        value={valueMediumMultiple}
        options={options}
        labelMenu="Select multiple options"
        disabled={args?.disabled}
        labelOnlyAfterSelection={args?.labelOnlyAfterSelection}
        separatorBetweenLabelAndOptionSelected={args?.separatorBetweenLabelAndOptionSelected}
      />
    </Stack>
  );
};

const WithInfoTemplate: StoryFn<typeof ChipFilter> = (args) => {
  const [value, setValue] = useState<string>();
  const [valueMultiple, setValueMultiple] = useState<string[]>([]);

  return (
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ChipFilter
        size="medium"
        label="Single"
        onChange={setValue}
        value={value}
        options={optionsWithInfo}
        labelMenu="Make your choice"
        disabled={args?.disabled}
      />
      <ChipFilter
        multiple
        size="medium"
        label="Multiple"
        onChange={setValueMultiple}
        value={valueMultiple}
        options={optionsWithInfo}
        labelMenu="Select multiple options"
        disabled={args?.disabled}
      />
    </Stack>
  );
};

const DenseMenuTemplate: StoryFn<typeof ChipFilter> = () => {
  const [value, setValue] = useState<string[]>([]);

  return (
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ChipFilter
        multiple
        applyOnSelect
        hideMenuHeader
        denseMenu
        size="small"
        variant="outlined"
        label="Dense menu"
        onChange={setValue}
        value={value}
        options={options}
        labelMenu="Dense menu"
      />
    </Stack>
  );
};

const ToggleTemplate: StoryFn<typeof ChipFilter> = () => {
  const [valueSmallToggle, setValueSmallToggle] = useState<boolean>(false);
  const [valueMediumToggle, setValueMediumToggle] = useState<boolean>(false);

  const handleChangeSmallToggle = (newValue: boolean) => {
    setValueSmallToggle(newValue);
  };

  const handleChangeMediumToggle = (newValue: boolean) => {
    setValueMediumToggle(newValue);
  };

  return (
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" height="100%">
      <ChipFilter size="small" label="Small" onCheckedChange={handleChangeSmallToggle} checked={valueSmallToggle} />
      <ChipFilter size="medium" label="Medium" onCheckedChange={handleChangeMediumToggle} checked={valueMediumToggle} />
    </Stack>
  );
};

export const Basic = Template.bind({});
Basic.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Multiple = MultipleTemplate.bind({});
Multiple.args = {};

export const MultipleDisabled = MultipleTemplate.bind({});
MultipleDisabled.args = {
  disabled: true,
};

export const Toggle = ToggleTemplate.bind({});
Toggle.args = {};

export const WithInfo = WithInfoTemplate.bind({});
WithInfo.args = {};

export const LabelOnlyAfterSelection = Template.bind({});
LabelOnlyAfterSelection.args = {
  labelOnlyAfterSelection: true,
};

export const MultipleLabelOnlyAfterSelection = MultipleTemplate.bind({});
MultipleLabelOnlyAfterSelection.args = {
  labelOnlyAfterSelection: true,
};

export const CustomSeparator = Template.bind({});
CustomSeparator.args = {
  separatorBetweenLabelAndOptionSelected: "/",
};

export const ApplyOnSelect = Template.bind({});
ApplyOnSelect.args = {
  applyOnSelect: true,
};

export const DenseMenu = DenseMenuTemplate.bind({});
DenseMenu.args = {};

export default {
  component: ChipFilter,
  title: "Components/Inputs/ChipFilter",
} as Meta<typeof ChipFilter>;
