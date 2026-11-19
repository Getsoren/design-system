import { lineIcon } from "@/components/DataDisplay/Icons/LineIcons/lineIcon";

/** Done: an event closed. Its circle has the reopening arrow's radius (9), so the two read the same size side by side */
const CircleCheckIcon = lineIcon(
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="m9 12 2 2 4-4" />
  </>,
);

export default CircleCheckIcon;
