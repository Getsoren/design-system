import { Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import { ReactNode, useState } from "react";
import ChatBubbleIcon from "@/components/DataDisplay/Icons/ChatBubbleIcon";
import FlagOutlinedIcon from "@/components/DataDisplay/Icons/FlagOutlinedIcon";
import InfoIcon from "@/components/DataDisplay/Icons/InfoIcon";
import CheckboxCard from "@/components/Inputs/CheckboxCard/CheckboxCard";

const options: { description?: string; icon: ReactNode; id: string; label: string }[] = [
  { description: "12 Rue de la Croisette, 06400 Cannes", icon: <FlagOutlinedIcon />, id: "worksite", label: "Chantier Croisette" },
  { icon: <ChatBubbleIcon />, id: "order", label: "Commander du matériel" },
  { icon: <InfoIcon />, id: "billing", label: "Suivre la facturation" },
];

/** Single select: one card at a time, like a radio group */
const SingleTemplate: StoryFn<typeof CheckboxCard> = () => {
  const [selected, setSelected] = useState("worksite");

  return (
    <Stack spacing={1.5} maxWidth={420} marginX="auto" justifyContent="center" height="100%">
      {options.map((option) => (
        <CheckboxCard
          key={option.id}
          icon={option.icon}
          label={option.label}
          description={option.description}
          isSelected={selected === option.id}
          onClick={() => setSelected(option.id)}
        />
      ))}
    </Stack>
  );
};

/** Multi select: the card is a stateless toggle, the group logic belongs to the consumer */
const MultiTemplate: StoryFn<typeof CheckboxCard> = () => {
  const [selected, setSelected] = useState<string[]>(["order"]);

  return (
    <Stack spacing={1.5} maxWidth={420} marginX="auto" justifyContent="center" height="100%">
      {options.map((option) => (
        <CheckboxCard
          key={option.id}
          icon={option.icon}
          label={option.label}
          description={option.description}
          isSelected={selected.includes(option.id)}
          onClick={() =>
            setSelected((previous) => (previous.includes(option.id) ? previous.filter((id) => id !== option.id) : [...previous, option.id]))
          }
        />
      ))}
    </Stack>
  );
};

export const SingleSelect = SingleTemplate.bind({});

export const MultiSelect = MultiTemplate.bind({});

export default {
  component: CheckboxCard,
  title: "Components/Inputs/CheckboxCard",
} as Meta<typeof CheckboxCard>;
