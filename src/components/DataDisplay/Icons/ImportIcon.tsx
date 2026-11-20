import { SvgIcon } from "@mui/material";

interface ImportIconProps {
  color?: string;
}

/**
 * Sending a document, with the same rounded stroke and canvas as the navigation icons.
 */
const ImportIcon = ({ color = "currentColor" }: ImportIconProps) => (
  <SvgIcon viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" sx={{ fontSize: 20 }}>
    <path
      d="M10 12.5V2.5M6.667 5.833 10 2.5l3.333 3.333M3.333 11.667v2.5c0 1.167 0 1.75.227 2.196.2.392.519.71.911.91.446.227 1.029.227 2.196.227h6.666c1.167 0 1.75 0 2.196-.227.392-.2.711-.518.911-.91.227-.446.227-1.029.227-2.196v-2.5"
      stroke={color}
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="transparent"
    />
  </SvgIcon>
);

export default ImportIcon;
