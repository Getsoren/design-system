import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon";

const RefreshIcon = (props: SvgIconProps) => (
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <path
      d="M21 12a9 9 0 1 1-2.64-6.36M21 3v6h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SvgIcon>
);

export default RefreshIcon;
