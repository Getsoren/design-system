import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon";

const ArrowUpwardRoundedIcon = (props: SvgIconProps) => (
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <path d="M12 19V5m-7 7 7-7 7 7" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </SvgIcon>
);

export default ArrowUpwardRoundedIcon;
