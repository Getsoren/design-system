import { SvgIcon } from "@mui/material";

interface MicIconProps {
  color?: string;
}

const MicIcon = ({ color = "currentColor" }: MicIconProps) => (
  <SvgIcon width="24" height="24" viewBox="0 0 24 24">
    <path
      d="M12 14C13.66 14 15 12.66 15 11V5C15 3.34 13.66 2 12 2C10.34 2 9 3.34 9 5V11C9 12.66 10.34 14 12 14ZM11 5C11 4.45 11.45 4 12 4C12.55 4 13 4.45 13 5V11C13 11.55 12.55 12 12 12C11.45 12 11 11.55 11 11V5ZM17.91 11C17.42 11 17.01 11.36 16.93 11.85C16.52 14.2 14.47 15.99 12 15.99C9.53 15.99 7.48 14.2 7.07 11.85C6.99 11.36 6.58 11 6.09 11C5.48 11 5 11.54 5.09 12.14C5.58 15.14 7.98 17.49 11 17.92V20C11 20.55 11.45 21 12 21C12.55 21 13 20.55 13 20V17.92C16.02 17.49 18.42 15.14 18.91 12.14C19.01 11.54 18.52 11 17.91 11Z"
      fill={color}
    />
  </SvgIcon>
);

export default MicIcon;
