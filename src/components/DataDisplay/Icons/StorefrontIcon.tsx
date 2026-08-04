import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon";

const StorefrontIcon = (props: SvgIconProps) => (
  <SvgIcon viewBox="0 0 20 20" {...props}>
    <path
      d="M2.5 7.5L4.16667 3.33333H15.8333L17.5 7.5M2.5 7.5H17.5M2.5 7.5V15.8333C2.5 16.7538 3.24619 17.5 4.16667 17.5H15.8333C16.7538 17.5 17.5 16.7538 17.5 15.8333V7.5M7.5 17.5V12.5H12.5V17.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SvgIcon>
);

export default StorefrontIcon;
