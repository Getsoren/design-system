import { Grid, Stack } from "@mui/material";
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

const CATALOG = [
  { description: "Béton · Fabrication", id: "betonniere", label: "Bétonnière" },
  { description: "Béton · Travail du béton", id: "lissage", label: "Lisseuse à béton, modèle à moteur thermique" },
  { description: "Terrassement", id: "minipelle", label: "Mini-pelle 1,5 t" },
];

const Picture = ({ hue }: { hue: number }) => (
  <div style={{ background: `hsl(${hue} 60% 70%)`, borderRadius: 8, height: "80%", width: "80%" }} />
);

/** Single select: one card at a time, like a radio group */
export const SingleSelect: StoryFn<typeof CheckboxCard> = () => {
  const [selected, setSelected] = useState("worksite");

  return (
    <Stack spacing={1.5} maxWidth={420} marginX="auto" justifyContent="center" height="100%">
      {options.map((option) => (
        <CheckboxCard
          key={option.id}
          icon={option.icon}
          label={option.label}
          description={option.description}
          selected={selected === option.id}
          onClick={() => setSelected(option.id)}
        />
      ))}
    </Stack>
  );
};

/** Multi select: the card is a stateless toggle, the group logic belongs to the consumer */
export const MultiSelect: StoryFn<typeof CheckboxCard> = () => {
  const [selected, setSelected] = useState<string[]>(["order"]);

  return (
    <Stack spacing={1.5} maxWidth={420} marginX="auto" justifyContent="center" height="100%">
      {options.map((option) => (
        <CheckboxCard
          key={option.id}
          icon={option.icon}
          label={option.label}
          description={option.description}
          selected={selected.includes(option.id)}
          onClick={() =>
            setSelected((previous) => (previous.includes(option.id) ? previous.filter((id) => id !== option.id) : [...previous, option.id]))
          }
        />
      ))}
    </Stack>
  );
};

/** The indicator before the texts: a circle filled with a check, or a dot for a radio */
export const ControlAtStart: StoryFn<typeof CheckboxCard> = () => {
  const [checked, setChecked] = useState<string[]>(["delivery"]);
  const [radio, setRadio] = useState("depot");

  return (
    <Stack spacing={3} maxWidth={420} marginX="auto" justifyContent="center" height="100%">
      <Stack spacing={1.5}>
        <CheckboxCard
          controlPlacement="start"
          label="Livraison sur le chantier"
          selected={checked.includes("delivery")}
          onClick={() => setChecked((p) => (p.includes("delivery") ? p.filter((i) => i !== "delivery") : [...p, "delivery"]))}
        />
        <CheckboxCard
          controlPlacement="start"
          label="Reprise en fin de location"
          selected={checked.includes("retrieval")}
          onClick={() => setChecked((p) => (p.includes("retrieval") ? p.filter((i) => i !== "retrieval") : [...p, "retrieval"]))}
        />
      </Stack>
      <Stack spacing={1.5}>
        <CheckboxCard
          control="radio"
          controlPlacement="start"
          label="Dépôt nord"
          description="Entrée par la rue des Lilas"
          selected={radio === "depot"}
          onClick={() => setRadio("depot")}
        />
        <CheckboxCard
          control="radio"
          controlPlacement="start"
          label="Autre lieu"
          selected={radio === "other"}
          onClick={() => setRadio("other")}
        />
      </Stack>
    </Stack>
  );
};

/** Content around the texts: something before them, an icon after them */
export const WithLeadingAndTrailing: StoryFn<typeof CheckboxCard> = () => {
  const [selected, setSelected] = useState(true);

  return (
    <Stack spacing={1.5} maxWidth={420} marginX="auto" justifyContent="center" height="100%">
      <CheckboxCard
        controlPlacement="start"
        leading={<div style={{ background: "hsl(20 80% 60%)", borderRadius: "50%", height: 32, width: 32 }} />}
        label="Camille Durand"
        description="Ajoutez votre numéro pour la livraison"
        selected={selected}
        onClick={() => setSelected((value) => !value)}
      />
      <CheckboxCard control="none" trailing={<FlagOutlinedIcon />} label="Autre contact" selected={false} onClick={() => undefined} />
    </Stack>
  );
};

/** A catalog: vertical cards with a picture, no indicator, one of them loading */
export const Catalog: StoryFn<typeof CheckboxCard> = () => {
  const [selected, setSelected] = useState("lissage");

  return (
    <Grid container spacing={2} maxWidth={720} marginX="auto" alignContent="center" height="100%">
      {CATALOG.map((item, index) => (
        <Grid key={item.id} size={4}>
          <CheckboxCard
            layout="vertical"
            control="none"
            picture={index === 2 ? undefined : <Picture hue={index * 90} />}
            isPictureLoading={index === 2}
            label={item.label}
            description={item.description}
            selected={selected === item.id}
            onClick={() => setSelected(item.id)}
          />
        </Grid>
      ))}
    </Grid>
  );
};

/** A horizontal card with a picture after the texts, and a disabled one */
export const PictureAndDisabled: StoryFn<typeof CheckboxCard> = () => (
  <Stack spacing={1.5} maxWidth={420} marginX="auto" justifyContent="center" height="100%">
    <CheckboxCard
      controlPlacement="start"
      picture={<Picture hue={200} />}
      label="Bétonnière"
      description="350 L"
      selected
      onClick={() => undefined}
    />
    <CheckboxCard
      icon={<InfoIcon />}
      label="Indisponible"
      description="Hors catalogue"
      selected={false}
      disabled
      onClick={() => undefined}
    />
  </Stack>
);

export default {
  component: CheckboxCard,
  title: "Components/Inputs/CheckboxCard",
} as Meta<typeof CheckboxCard>;
