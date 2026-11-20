import { alpha, keyframes, type Theme } from "@mui/material";
import { AI_ASSISTANT_GLOW_COLORS } from "@/components/DataDisplay/AiAssistant/constants";

const scan = keyframes`
  from { top: 0%; }
  to { top: 100%; }
`;

/**
 * Scan line sweeping a document while the assistant reads it, in its colours: its glow as tall as the picture allows.
 * Set on an absolutely placed box over the picture; still when reduced motion is requested.
 */
export const aiAssistantScanLineSxOf = ({ glowHeight, lineHeight }: { glowHeight: number; lineHeight: number }) =>
  ({
    "@media (prefers-reduced-motion: reduce)": { animation: "none" },
    "&::after": {
      background: `linear-gradient(90deg, ${AI_ASSISTANT_GLOW_COLORS.join(", ")})`,
      bottom: 0,
      boxShadow: `0 0 ${lineHeight * 4}px ${alpha(AI_ASSISTANT_GLOW_COLORS[1], 0.8)}`,
      content: '""',
      height: lineHeight,
      left: 0,
      position: "absolute",
      right: 0,
    },
    animation: `${scan} 1.6s ease-in-out infinite alternate`,
    background: `linear-gradient(to bottom, transparent 0%, ${alpha(AI_ASSISTANT_GLOW_COLORS[3], 0.12)} 100%)`,
    height: glowHeight,
    left: 0,
    pointerEvents: "none",
    position: "absolute",
    right: 0,
    transform: "translateY(-100%)",
  }) as const;

const shimmer = keyframes`
  from { background-position: 100% 0; }
  to { background-position: -100% 0; }
`;

/**
 * A text the assistant is working on: a light runs through it, in its colours. Plain grey text when reduced motion is
 * requested.
 */
export const AI_ASSISTANT_SHIMMER_TEXT_SX = {
  "@media (prefers-reduced-motion: reduce)": { animation: "none", background: "none", color: "text.secondary" },
  animation: `${shimmer} 2s linear infinite`,
  backgroundClip: "text",
  backgroundImage: ({ palette }: Theme) =>
    `linear-gradient(90deg, ${palette.text.secondary} 30%, ${AI_ASSISTANT_GLOW_COLORS[0]} 50%, ${palette.text.secondary} 70%)`,
  backgroundSize: "200% 100%",
  color: "transparent",
  // Safari clips a background to its text with the prefix only
  WebkitBackgroundClip: "text",
} as const;
