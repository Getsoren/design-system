import { Box, SxProps, Theme } from "@mui/material";
import { ReactNode } from "react";

export interface NumberBadgeProps {
  children: ReactNode;
  /** Palette key driving the fill (`<color>.main`) and the text (`<color>.contrastText`) */
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  /** Injected by MapView from the marker `size` when used as a marker IconComponent */
  width?: number;
  height?: number;
  sx?: SxProps<Theme>;
}

/**
 * Standalone numbered disc badge. Made to identify the same item across two surfaces —
 * e.g. a card in a list and its marker on a map — at a glance.
 */
const NumberBadge = ({ children, color = "primary", width = 28, height = 28, sx }: NumberBadgeProps) => (
  <Box
    sx={{
      alignItems: "center",
      backgroundColor: `${color}.main`,
      border: "2px solid",
      borderColor: "background.paper",
      borderRadius: "50%",
      boxShadow: "0 0 4px rgba(0,0,0,0.3)",
      color: `${color}.contrastText`,
      display: "flex",
      flexShrink: 0,
      fontSize: Math.round(width * 0.45),
      fontWeight: 600,
      height,
      justifyContent: "center",
      width,
      ...sx,
    }}
  >
    {children}
  </Box>
);

export default NumberBadge;
