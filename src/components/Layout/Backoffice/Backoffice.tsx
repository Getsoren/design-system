import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import type { ReactNode } from "react";
import { cloneElement, isValidElement, useRef } from "react";

interface BackofficeProps {
  AppBar?: ReactNode;
  Main?: ReactNode;
  Sidebar?: ReactNode;
  /** Room kept on the right, under the app bar, for a docked panel (e.g. AI_ASSISTANT_DOCKED_SPACE); ignored on small screens */
  asideWidth?: number;
}

const Backoffice = ({ Main, Sidebar, AppBar, asideWidth = 0 }: BackofficeProps) => {
  const { breakpoints } = useTheme();
  const gridRef = useRef<HTMLDivElement>(null);
  const isSmallScreen = useMediaQuery(breakpoints.down("md"));
  const SidebarWithAppBar = isValidElement<{ AppBar?: ReactNode }>(Sidebar) ? cloneElement(Sidebar, { AppBar }) : Sidebar;

  return (
    <Stack height="100%">
      {!isSmallScreen && AppBar}
      <Stack
        height="100%"
        direction={isSmallScreen ? "column" : "row"}
        minHeight={0}
        sx={{
          "@media (prefers-reduced-motion: reduce)": { transition: "none" },
          paddingRight: isSmallScreen ? 0 : `${asideWidth}px`,
          transition: "padding-right 220ms cubic-bezier(0.2, 0, 0, 1)",
        }}
      >
        {SidebarWithAppBar}
        <Box
          flex={1}
          sx={{
            maxHeight: "100%",
            overflow: "auto",
          }}
          ref={gridRef}
        >
          <Box component="main" height="100%">
            {Main}
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Backoffice;
