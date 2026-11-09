import { Box, Typography } from "@mui/material";
import type { ReactNode } from "react";

export interface InfoLineProps {
  /**
   * Set in a 24px box, centred on the first line of the text
   */
  icon: ReactNode;
  children: ReactNode;
  /**
   * Primary for the facts of a summary, secondary for hints around a form
   */
  color?: "text.primary" | "text.secondary";
}

/**
 * An icon and a sentence, without frame or background so it never reads as a field
 */
const InfoLine = ({ icon, children, color = "text.secondary" }: InfoLineProps) => (
  <Typography variant="body2" color={color} component="div" sx={{ display: "flex", gap: 1.5 }}>
    {/* One line high, so the icon stays centred on the first line of a sentence that wraps */}
    <Box
      sx={{
        alignItems: "center",
        color: "text.secondary",
        display: "flex",
        flexShrink: 0,
        height: "1lh",
        justifyContent: "center",
        width: 24,
      }}
    >
      {icon}
    </Box>
    <Box sx={{ flex: 1, minWidth: 0 }}>{children}</Box>
  </Typography>
);

export default InfoLine;
