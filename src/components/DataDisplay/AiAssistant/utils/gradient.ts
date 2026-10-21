import { AI_ASSISTANT_GLOW_COLORS } from "@/components/DataDisplay/AiAssistant/constants";

/** Stops of the mark's glow, evenly spread and back to the first colour so the turning gradient has no seam. */
export const assistantGlowStops = [...AI_ASSISTANT_GLOW_COLORS, AI_ASSISTANT_GLOW_COLORS[0]].map((color, index, colors) => ({
  color,
  offset: index / (colors.length - 1),
}));
