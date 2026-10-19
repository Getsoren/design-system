import { SvgIcon, SvgIconProps, SxProps } from "@mui/material";

interface ThumbUpIconProps {
  color?: string;
  sx?: SxProps;
  fontSize?: SvgIconProps["fontSize"];
  /** Filled hand, e.g. once the vote is cast */
  filled?: boolean;
}

const ThumbUpIcon = ({ sx, fontSize, color = "currentColor", filled = false }: ThumbUpIconProps) => (
  <SvgIcon viewBox="0 0 24 24" fill="none" sx={sx} fontSize={fontSize}>
    <path d="M7 10v12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path
      d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={filled ? color : "none"}
    />
  </SvgIcon>
);

export default ThumbUpIcon;
