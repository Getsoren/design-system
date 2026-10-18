import { SvgIcon, SvgIconProps, SxProps } from "@mui/material";

interface NewChatIconProps {
  color?: string;
  sx?: SxProps;
  fontSize?: SvgIconProps["fontSize"];
}

const NewChatIcon = ({ sx, fontSize, color = "currentColor" }: NewChatIconProps) => (
  <SvgIcon viewBox="0 0 24 24" fill="none" sx={sx} fontSize={fontSize}>
    <path
      d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </SvgIcon>
);

export default NewChatIcon;
