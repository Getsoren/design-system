import { SvgIcon, type SxProps, type Theme } from "@mui/material";

interface CalendarPlusIconProps {
  color?: string;
  sx?: SxProps<Theme>;
}

/**
 * The app's calendar, its corner open on a plus: a day added.
 */
const CalendarPlusIcon = ({ color = "currentColor", sx }: CalendarPlusIconProps) => (
  <SvgIcon viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" sx={{ fontSize: 20, ...sx }}>
    <path
      d="M8 3v4M16 3v4M2 11h20M22 13V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9M19 16v6M16 19h6"
      stroke={color}
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SvgIcon>
);

export default CalendarPlusIcon;
