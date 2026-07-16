import { Box, Typography } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import BookingTimeline from "../BookingTimeline";
import type { BookingTimelineEvent } from "../types";

const photo = (seed: string) => ({ name: seed, src: `https://picsum.photos/seed/${seed}/120/120` });

const events: BookingTimelineEvent[] = [
  {
    date: "5 juin",
    key: "control",
    label: "Contrôle n1",
    labelText: "Contrôle n1",
    onClick: () => {},
    status: "closed",
    tooltip: "Sophie Renaud · 08:45",
    user: { avatar: "https://i.pravatar.cc/80?img=32", initials: "SR" },
  },
  {
    date: "6 juin",
    icon: <SwapIcon />,
    key: "stock",
    label: (
      <>
        Variation de Stock{" "}
        <Box component="span" sx={{ color: "success.dark", fontWeight: 500 }}>
          +2
        </Box>
      </>
    ),
    labelText: "Variation de Stock +2",
    onClick: () => {},
    tooltip: "Léa Girard · 09:15",
    user: { avatar: "https://i.pravatar.cc/80?img=20", initials: "LG" },
  },
  {
    date: "7 juin",
    key: "breakdown",
    label: "Panne moteur",
    labelText: "Panne moteur",
    onClick: () => {},
    photos: [photo("a"), photo("b"), photo("c"), photo("d"), photo("e")],
    status: "open",
    tooltip: "Karim Benali · 10:05",
    user: { avatar: "https://i.pravatar.cc/80?img=13", initials: "KB" },
  },
  {
    date: "10 juin",
    key: "weather",
    label: "Intempéries — chantier inaccessible toute la journée",
    labelText: "Intempéries — chantier inaccessible toute la journée",
    onClick: () => {},
    status: "open",
    tooltip: "Marc Dubois · 07:30",
    user: { avatar: "https://i.pravatar.cc/80?img=12", initials: "MD" },
  },
];

/** Neutral icon example for a status-less event (apps usually map their own icon set). */
function SwapIcon() {
  return (
    <Box component="svg" viewBox="0 0 24 24" sx={{ fill: "currentColor", height: "1em", width: "1em" }}>
      <path d="M6.99 11 3 15l3.99 4v-3H14v-2H6.99zM21 9l-3.99-4v3H10v2h7.01v3z" />
    </Box>
  );
}

const Template: StoryFn<typeof BookingTimeline> = (args) => (
  <Box sx={{ maxWidth: 460 }}>
    <BookingTimeline {...args} />
  </Box>
);

/** Delivery on the start day and retrieval on the end day — folded into the Start / End anchors. */
export const SameDayDeliveryAndRetrieval = Template.bind({});
SameDayDeliveryAndRetrieval.args = {
  end: { eyebrow: "Fin", title: "Vendredi 14 juin", titleSuffix: "(Reprise 8h - 12h)" },
  events,
  start: { eyebrow: "Début", reached: true, title: "Lundi 3 juin", titleSuffix: "(Livraison 8h - 12h)" },
};

/** Delivery / retrieval on their own days — promoted to their own bookends around Start / End. */
export const SeparateDeliveryAndRetrieval = Template.bind({});
SeparateDeliveryAndRetrieval.args = {
  delivery: { eyebrow: "Livraison", reached: true, title: "Samedi 1er juin", titleSuffix: "entre 8h et 12h" },
  end: { eyebrow: "Fin", title: "Vendredi 14 juin" },
  events,
  retrieval: { eyebrow: "Reprise", title: "Lundi 17 juin", titleSuffix: "entre 8h et 12h" },
  start: { eyebrow: "Début", reached: true, title: "Lundi 3 juin" },
};

/** Overdue end date: warning title + call to action slot under the End anchor. */
export const OverdueEnd = Template.bind({});
OverdueEnd.args = {
  end: {
    content: (
      <Typography variant="body2" color="textSecondary">
        Date de fin dépassée,{" "}
        <Box component="span" sx={{ color: "text.primary", cursor: "pointer", fontWeight: 500, textDecoration: "underline" }}>
          Prolonger
        </Box>{" "}
        ou{" "}
        <Box component="span" sx={{ color: "text.primary", cursor: "pointer", fontWeight: 500, textDecoration: "underline" }}>
          Terminer
        </Box>
      </Typography>
    ),
    eyebrow: "Fin",
    title: "Vendredi 14 juin",
    warning: true,
  },
  events,
  start: { eyebrow: "Début", reached: true, title: "Lundi 3 juin", titleSuffix: "(Livraison 8h - 12h)" },
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  emptyMessage: "No events on this rental yet.",
};

export default {
  component: BookingTimeline,
  title: "Components/DataDisplay/BookingTimeline",
} as Meta<typeof BookingTimeline>;
