import { SvgIcon, SxProps, Theme } from "@mui/material";

const DropZoneIcon = ({ color = "currentColor", sx }: { color?: string; sx?: SxProps<Theme> }) => (
  <SvgIcon viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" sx={{ fontSize: 20, ...sx }}>
    <path
      d="M2.5 6.66667V4.16667C2.5 3.24619 3.24619 2.5 4.16667 2.5H6.66667M13.3333 2.5H15.8333C16.7538 2.5 17.5 3.24619 17.5 4.16667V6.66667M17.5 13.3333V15.8333C17.5 16.7538 16.7538 17.5 15.8333 17.5H13.3333M6.66667 17.5H4.16667C3.24619 17.5 2.5 16.7538 2.5 15.8333V13.3333"
      stroke={color}
      fill="none"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Filled rather than stroked: at 20px a ring of 1.667 stroke leaves a hole and reads as a circle,
        not as a point. */}
    <circle cx="10" cy="10" r="1.66667" fill={color} />
  </SvgIcon>
);

export default DropZoneIcon;
