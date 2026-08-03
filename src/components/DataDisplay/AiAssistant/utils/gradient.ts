import type { PaletteMode } from "@mui/material";

/**
 * Brand gradient of the assistant: the Soren orange sinking into black.
 *
 * The dark end follows the theme: on a dark surface #121212 is exactly `background.paper`, so the
 * orb and the spark were eaten by their own background — a charcoal keeps the same reading there.
 */
const darkStop = (mode: PaletteMode) => (mode === "dark" ? "#3d3d3d" : "#121212");
const midDarkStop = (mode: PaletteMode) => (mode === "dark" ? "#5a5a5a" : "#2a2a2a");

/** Flowing gradient of the floating bubble and the thinking orb (animated background position). */
export const assistantOrbGradient = (mode: PaletteMode) =>
  `linear-gradient(125deg, #ff4f12 0%, #ff8459 22%, #e54710 48%, ${midDarkStop(mode)} 74%, ${darkStop(mode)} 88%, #ff4f12 100%)`;

/** Stops of the spark glyph, from the orange to the dark end. */
export const assistantSparkStops = (mode: PaletteMode) => [
  { color: "#ff4f12", offset: undefined },
  { color: "#e54710", offset: "0.55" },
  { color: darkStop(mode), offset: "1" },
];
