import { SvgIcon, SvgIconProps, SxProps } from "@mui/material";

interface CloseLineIconProps {
  color?: string;
  sx?: SxProps;
  fontSize?: SvgIconProps["fontSize"];
}

const CloseLineIcon = ({ sx, fontSize, color = "currentColor" }: CloseLineIconProps) => (
  <SvgIcon width="16" height="16" viewBox="0 0 16 16" fill="none" sx={sx} fontSize={fontSize}>
    <path d="M12 4 4 12M4 4l8 8" stroke={color} strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </SvgIcon>
);

export default CloseLineIcon;
