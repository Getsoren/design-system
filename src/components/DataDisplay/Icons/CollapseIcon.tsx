import { SvgIcon, SvgIconProps, SxProps } from "@mui/material";

interface CollapseIconProps {
  color?: string;
  sx?: SxProps;
  fontSize?: SvgIconProps["fontSize"];
}

const CollapseIcon = ({ sx, fontSize, color = "currentColor" }: CollapseIconProps) => (
  <SvgIcon width="16" height="16" viewBox="0 0 16 16" fill="none" sx={sx} fontSize={fontSize}>
    <path
      d="M13.3334 2.66669L9.18527 6.81484M9.18527 6.81484H12.7408M9.18527 6.81484V3.25929M2.66675 13.3334L6.8149 9.18521M6.8149 9.18521H3.25934M6.8149 9.18521V12.7408"
      stroke={color}
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </SvgIcon>
);

export default CollapseIcon;
