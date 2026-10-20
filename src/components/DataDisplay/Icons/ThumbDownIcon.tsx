import { SvgIcon, SvgIconProps, SxProps } from "@mui/material";

interface ThumbDownIconProps {
  color?: string;
  sx?: SxProps;
  fontSize?: SvgIconProps["fontSize"];
  /** Filled hand, e.g. once the vote is cast */
  filled?: boolean;
}

const ThumbDownIcon = ({ sx, fontSize, color = "currentColor", filled = false }: ThumbDownIconProps) => (
  <SvgIcon viewBox="0 0 24 24" fill="none" sx={sx} fontSize={fontSize}>
    <path d="M17 14V2" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path
      d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={filled ? color : "none"}
    />
  </SvgIcon>
);

export default ThumbDownIcon;
