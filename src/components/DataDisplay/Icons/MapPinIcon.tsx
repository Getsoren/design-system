import { SvgIcon, SxProps, Theme } from "@mui/material";

const MapPinIcon = ({ color = "currentColor", sx }: { color?: string; sx?: SxProps<Theme> }) => (
  <SvgIcon viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" sx={{ fontSize: 20, ...sx }}>
    <path
      d="M16.6667 8.33333C16.6667 12.8486 11.6667 15 10 18.3333C8.33333 15 3.33333 12.8486 3.33333 8.33333C3.33333 4.65143 6.31811 1.66667 10 1.66667C13.6819 1.66667 16.6667 4.65143 16.6667 8.33333ZM12.5 8.33333C12.5 9.71405 11.3807 10.8333 10 10.8333C8.61929 10.8333 7.5 9.71405 7.5 8.33333C7.5 6.95262 8.61929 5.83333 10 5.83333C11.3807 5.83333 12.5 6.95262 12.5 8.33333Z"
      stroke={color}
      fill="none"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SvgIcon>
);

export default MapPinIcon;
