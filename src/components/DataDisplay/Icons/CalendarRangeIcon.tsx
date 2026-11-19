import { SvgIcon, SxProps, Theme } from "@mui/material";

const CalendarRangeIcon = ({ color = "currentColor", sx }: { color?: string; sx?: SxProps<Theme> }) => (
  <SvgIcon viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" sx={{ fontSize: 20, ...sx }}>
    <path
      d="M3.33333 4.16667H16.6667C17.5871 4.16667 18.3333 4.91286 18.3333 5.83333V15.8333C18.3333 16.7538 17.5871 17.5 16.6667 17.5H3.33333C2.41286 17.5 1.66667 16.7538 1.66667 15.8333V5.83333C1.66667 4.91286 2.41286 4.16667 3.33333 4.16667ZM13.3333 2.5V5.83333M6.66667 2.5V5.83333M1.66667 9.16667H18.3333M5 12.0833H9.16667M10.8333 14.5833H15"
      stroke={color}
      fill="none"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SvgIcon>
);

export default CalendarRangeIcon;
