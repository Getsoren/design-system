import { SvgIcon, SvgIconProps } from "@mui/material";

interface StarIconProps {
  color?: string;
  fontSize?: SvgIconProps["fontSize"];
  sx?: SvgIconProps["sx"];
}

const StarIcon = ({ sx, fontSize, color = "currentColor" }: StarIconProps) => (
  <SvgIcon width="24" height="24" viewBox="0 0 24 24" fontSize={fontSize} sx={sx}>
    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill={color} />
  </SvgIcon>
);

export default StarIcon;
