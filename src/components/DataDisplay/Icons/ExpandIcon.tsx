import { SvgIcon, SvgIconProps, SxProps } from "@mui/material";

interface ExpandIconProps {
  color?: string;
  sx?: SxProps;
  fontSize?: SvgIconProps["fontSize"];
}

const ExpandIcon = ({ sx, fontSize, color = "currentColor" }: ExpandIconProps) => (
  <SvgIcon width="16" height="16" viewBox="0 0 16 16" fill="none" sx={sx} fontSize={fontSize}>
    <path
      d="M9.18527 6.81484L13.3334 2.66669M13.3334 2.66669H9.77786M13.3334 2.66669V6.22224M6.8149 9.18521L2.66675 13.3334M2.66675 13.3334H6.2223M2.66675 13.3334L2.66675 9.7778"
      stroke={color}
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </SvgIcon>
);

export default ExpandIcon;
