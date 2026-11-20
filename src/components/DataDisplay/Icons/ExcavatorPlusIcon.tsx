import { SvgIcon, type SxProps, type Theme } from "@mui/material";

interface ExcavatorPlusIconProps {
  color?: string;
  sx?: SxProps<Theme>;
}

/**
 * An excavator and a plus, at the top right as on the overtime's clock: a machine added, an order's usual article.
 */
const ExcavatorPlusIcon = ({ color = "currentColor", sx }: ExcavatorPlusIconProps) => (
  <SvgIcon viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" sx={{ fontSize: 20, ...sx }}>
    <path
      d="M10.5 16h8a2.5 2.5 0 0 1 0 5h-8a2.5 2.5 0 0 1 0-5zM12 16v-5a1 1 0 0 1 1-1h2l2 3h2a1 1 0 0 1 1 1v2M12 12.5C10.5 8.5 9.5 5.5 7.5 4.5L4 9v2.5a2.5 2.5 0 0 0 2.5 2.5M19 3v6M16 6h6"
      stroke={color}
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SvgIcon>
);

export default ExcavatorPlusIcon;
