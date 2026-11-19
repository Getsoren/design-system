import { lineIcon } from "@/components/DataDisplay/Icons/LineIcons/lineIcon";

/** Three dots, without a circle of their own: drawn inside the timeline's round flag, anything else */
const EllipsisIcon = lineIcon(
  <>
    <circle cx="12" cy="12" r="1" />
    <circle cx="19" cy="12" r="1" />
    <circle cx="5" cy="12" r="1" />
  </>,
);

export default EllipsisIcon;
