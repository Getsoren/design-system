import Box from "@mui/material/Box";
import type { Theme } from "@mui/material/styles";
import type { ReactNode } from "react";

interface ChatIconTileProps {
  children: ReactNode;
  /** Concentric with the row holding it: the row's radius minus the inset around the tile */
  radius: number;
  size?: number;
}

/**
 * The grey square behind an action's icon, in the composer's Actions menu and the orders panel alike
 */
const ChatIconTile = ({ children, radius, size = 40 }: ChatIconTileProps) => (
  <Box
    component="span"
    sx={{
      alignItems: "center",
      backgroundColor: ({ palette }: Theme) => (palette.mode === "dark" ? palette.grey[500] : palette.grey[100]),
      borderRadius: `${radius}px`,
      color: "text.primary",
      display: "inline-flex",
      flexShrink: 0,
      fontSize: 20,
      height: size,
      justifyContent: "center",
      width: size,
    }}
  >
    {children}
  </Box>
);

export default ChatIconTile;
