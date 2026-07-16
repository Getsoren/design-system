import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon";

const ArrowBackRoundedIcon = (props: SvgIconProps) => (
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <path d="M19 12H5m7 7-7-7 7-7" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </SvgIcon>
);

export default ArrowBackRoundedIcon;
