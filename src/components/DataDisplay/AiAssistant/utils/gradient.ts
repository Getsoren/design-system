import type { PaletteMode } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { AI_ASSISTANT_GLOW_COLORS } from "@/components/DataDisplay/AiAssistant/constants";

/**
 * Brand gradient of the assistant: the Soren orange sinking into black.
 *
 * The dark end follows the theme: on a dark surface #121212 is exactly `background.paper`, so the
 * orb was eaten by its own background — a charcoal keeps the same reading there.
 */
const darkStop = (mode: PaletteMode) => (mode === "dark" ? "#3d3d3d" : "#121212");
const midDarkStop = (mode: PaletteMode) => (mode === "dark" ? "#5a5a5a" : "#2a2a2a");

/** Flowing gradient of the floating bubble and the thinking orb (animated background position). */
export const assistantOrbGradient = (mode: PaletteMode) =>
  `linear-gradient(125deg, #ff4f12 0%, #ff8459 22%, #e54710 48%, ${midDarkStop(mode)} 74%, ${darkStop(mode)} 88%, #ff4f12 100%)`;

/** Stops of the mark's glow, evenly spread and back to the first colour so the turning gradient has no seam. */
export const assistantGlowStops = [...AI_ASSISTANT_GLOW_COLORS, AI_ASSISTANT_GLOW_COLORS[0]].map((color, index, colors) => ({
  color,
  offset: index / (colors.length - 1),
}));

const TRAIL_FROM_DEG = 190;
const TRAIL_HEAD_DEG = 342;

/** Conic gradient of the light running along the pill: the glow colours fading in, the first one at its head. */
export const assistantGlowTrail = (() => {
  const [head, ...rest] = AI_ASSISTANT_GLOW_COLORS;
  const tail = [...rest].reverse();
  const step = (TRAIL_HEAD_DEG - TRAIL_FROM_DEG) / (tail.length + 1);
  const fadeIn = tail.map((color, index) => {
    const opacity = 0.45 + (0.45 * index) / Math.max(1, tail.length - 1);
    return `${alpha(color, opacity)} ${TRAIL_FROM_DEG + step * (index + 1)}deg`;
  });
  const start = alpha(tail[0] ?? head, 0);

  return `conic-gradient(from 0deg, ${start} 0deg, ${start} ${TRAIL_FROM_DEG}deg, ${fadeIn.join(", ")}, ${head} ${TRAIL_HEAD_DEG}deg, ${alpha(head, 0)} 360deg)`;
})();
