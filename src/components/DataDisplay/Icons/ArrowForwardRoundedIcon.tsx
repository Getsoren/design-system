import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon";

const ArrowForwardRoundedIcon = (props: SvgIconProps) => (
  <SvgIcon viewBox="0 0 24 24" {...props}>
    <path d="M5 12h14m-7-7 7 7-7 7" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </SvgIcon>
);

export default ArrowForwardRoundedIcon;
