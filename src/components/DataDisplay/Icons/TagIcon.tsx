import { SvgIcon, SxProps, Theme } from "@mui/material";

const TagIcon = ({ color = "currentColor", sx }: { color?: string; sx?: SxProps<Theme> }) => (
  <SvgIcon viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" sx={{ fontSize: 20, ...sx }}>
    <path
      d="M10.4408 2.5H4.16667C3.24619 2.5 2.5 3.24619 2.5 4.16667V10.4408C2.5 10.8828 2.67563 11.3068 2.98819 11.6193L9.21231 17.8434C9.86319 18.4943 10.9185 18.4943 11.5694 17.8434L17.8434 11.5694C18.4943 10.9185 18.4943 9.86319 17.8434 9.21231L11.6193 2.98819C11.3068 2.67563 10.8828 2.5 10.4408 2.5ZM6.66667 7.5C7.12691 7.5 7.5 7.12691 7.5 6.66667C7.5 6.20643 7.12691 5.83333 6.66667 5.83333C6.20643 5.83333 5.83333 6.20643 5.83333 6.66667C5.83333 7.12691 6.20643 7.5 6.66667 7.5Z"
      stroke={color}
      fill="none"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SvgIcon>
);

export default TagIcon;
