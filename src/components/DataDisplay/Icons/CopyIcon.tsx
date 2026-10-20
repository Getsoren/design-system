import { SvgIcon, SvgIconProps, SxProps } from "@mui/material";

interface CopyIconProps {
  color?: string;
  sx?: SxProps;
  fontSize?: SvgIconProps["fontSize"];
}

const CopyIcon = ({ sx, fontSize, color = "currentColor" }: CopyIconProps) => (
  <SvgIcon viewBox="0 0 24 24" fill="none" sx={sx} fontSize={fontSize}>
    <path
      d="M10 8h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2ZM4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </SvgIcon>
);

export default CopyIcon;
