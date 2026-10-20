import type { PaletteMode } from "@mui/material";
import type { Palette } from "@mui/material/styles";
import { AI_ASSISTANT_GLOW_COLORS } from "@/components/DataDisplay/AiAssistant/constants";

/**
 * Brand gradient of the assistant: the Soren orange (`secondary`) sinking into black.
 *
 * The dark end follows the theme: on a dark surface #121212 is exactly `background.paper`, so the
 * avatar would be eaten by its own background — a charcoal keeps the same reading there.
 */
const darkStop = (mode: PaletteMode) => (mode === "dark" ? "#3d3d3d" : "#121212");
const midDarkStop = (mode: PaletteMode) => (mode === "dark" ? "#5a5a5a" : "#2a2a2a");

/** Flowing gradient of the brand avatar (animated background position). */
export const assistantOrbGradient = ({ mode, secondary }: Palette) =>
  `linear-gradient(125deg, ${secondary.main} 0%, ${secondary.light} 22%, ${secondary.dark} 48%, ${midDarkStop(mode)} 74%, ${darkStop(mode)} 88%, ${secondary.main} 100%)`;

/** Stops of the mark's glow, evenly spread and back to the first colour so the turning gradient has no seam. */
export const assistantGlowStops = [...AI_ASSISTANT_GLOW_COLORS, AI_ASSISTANT_GLOW_COLORS[0]].map((color, index, colors) => ({
  color,
  offset: index / (colors.length - 1),
}));
