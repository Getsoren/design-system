import { SvgIcon, SxProps, Theme } from "@mui/material";

const ReceiptIcon = ({ color = "currentColor", sx }: { color?: string; sx?: SxProps<Theme> }) => (
  <SvgIcon viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" sx={{ fontSize: 20, ...sx }}>
    <path
      d="M3.33333 2.5V17.5L5.83333 15.8333L8.33333 17.5L10 15.8333L11.6667 17.5L14.1667 15.8333L16.6667 17.5V2.5L14.1667 4.16667L11.6667 2.5L10 4.16667L8.33333 2.5L5.83333 4.16667L3.33333 2.5ZM6.66667 7.5H13.3333M6.66667 10.8333H13.3333"
      stroke={color}
      fill="none"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SvgIcon>
);

export default ReceiptIcon;
