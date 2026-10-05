import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon";

const PlusIcon = (props: SvgIconProps) => (
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
  </SvgIcon>
);

export default PlusIcon;
