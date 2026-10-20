import { SvgIcon, type SvgIconProps } from "@mui/material";

interface MicIconProps extends Omit<SvgIconProps, "color"> {
  color?: string;
}

const MicIcon = ({ color = "currentColor", ...props }: MicIconProps) => (
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <path
      d="M12 3a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3ZM18 11a6 6 0 0 1-12 0M12 17v4"
      fill="none"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SvgIcon>
);

export default MicIcon;
