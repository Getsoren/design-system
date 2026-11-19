import { SvgIcon } from "@mui/material";

/**
 * Material Icons has no plain hard hat (its closest, `Engineering`, adds a face and gears),
 * so this one is drawn at the same outlined weight to sit next to the other role icons.
 */
const HardHatOutlinedIcon = () => (
  <SvgIcon viewBox="0 0 24 24" fill="none">
    <path
      d="M5.5 16.25v-2.5a6.5 6.5 0 0 1 13 0v2.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.75 16.25h16.5a1.25 1.25 0 0 1 0 2.5H3.75a1.25 1.25 0 0 1 0-2.5Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.5 7.8v8.45M14.5 7.8v8.45"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SvgIcon>
);

export default HardHatOutlinedIcon;
