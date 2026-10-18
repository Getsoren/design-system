import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import {
  AI_ASSISTANT_DOCKED_INSET,
  AI_ASSISTANT_DOCKED_RADIUS,
  AI_ASSISTANT_DOCKED_SHADOW,
  AI_ASSISTANT_DOCKED_WIDTH,
} from "@/components/DataDisplay/AiAssistant/constants";
import type { AiAssistantPanelProps } from "@/components/DataDisplay/AiAssistant/types";

const DOCKED_SX = {
  border: 1,
  borderColor: "divider",
  borderRadius: `${AI_ASSISTANT_DOCKED_RADIUS}px`,
  bottom: AI_ASSISTANT_DOCKED_INSET,
  boxShadow: AI_ASSISTANT_DOCKED_SHADOW,
  height: "auto",
  maxHeight: "none",
  right: AI_ASSISTANT_DOCKED_INSET,
  transformOrigin: "100% 50%",
  width: { md: AI_ASSISTANT_DOCKED_WIDTH, xs: `calc(100vw - ${2 * AI_ASSISTANT_DOCKED_INSET}px)` },
} as const;

const CORNER_SX = {
  bottom: { sm: 24, xs: 16 },
  height: { sm: 640, xs: "calc(100dvh - 32px)" },
  maxHeight: "calc(100dvh - 48px)",
  transformOrigin: "100% 100%",
} as const;

/**
 * Floating chat widget — no modal backdrop, so the host app stays visible (and usable)
 * while the assistant navigates. It opens by growing out of the Fab (scale + fade
 * anchored past the bottom-right corner, toward the button) — as fast as the previous
 * fade, but the motion tells where the panel comes from. While `isBusy`, a soft
 * iridescent aura breathes around the panel; every animation frame keeps an ambient
 * depth shadow (the animation overrides the elevation one).
 */
const AiAssistantPanel = ({
  open,
  isBusy = false,
  docked = false,
  dockedTop = 0,
  withFab = true,
  children,
  dataTestId = "assistantPanel",
}: AiAssistantPanelProps) => (
  <Grow
    in={open}
    unmountOnExit
    timeout={{ enter: 220, exit: 150 }}
    easing={{ enter: "cubic-bezier(0.2, 0, 0, 1)", exit: "cubic-bezier(0.4, 0, 1, 1)" }}
  >
    <Paper
      data-testid={dataTestId}
      data-docked={docked || undefined}
      elevation={docked ? 0 : 8}
      sx={{
        "@keyframes aiAssistantPanelAura": {
          "0%": {
            boxShadow: "0 0 24px 4px rgba(255, 79, 18, 0.3), 0 0 40px 10px rgba(229, 71, 16, 0.16), 0 12px 40px rgba(0, 0, 0, 0.2)",
          },
          "70%": {
            boxShadow: "0 0 52px 16px rgba(255, 79, 18, 0.16), 0 0 72px 22px rgba(229, 71, 16, 0.28), 0 12px 40px rgba(0, 0, 0, 0.2)",
          },
          "100%": {
            boxShadow: "0 0 24px 4px rgba(255, 79, 18, 0.3), 0 0 40px 10px rgba(229, 71, 16, 0.16), 0 12px 40px rgba(0, 0, 0, 0.2)",
          },
        },
        // Doubled selector (&&) so this a11y override beats the base rule regardless of emission order
        "@media (prefers-reduced-motion: reduce)": {
          "&&": { animation: "none" },
        },
        animation: isBusy ? "aiAssistantPanelAura 2.4s ease-out infinite" : "none",
        borderRadius: 2,
        bottom: 96,
        display: "flex",
        flexDirection: "column",
        height: { sm: 560, xs: "calc(100dvh - 112px)" },
        maxHeight: "calc(100dvh - 120px)",
        overflow: "hidden",
        position: "fixed",
        right: { sm: 24, xs: 16 },
        // Scale origin sits below the bottom-right corner, on the Fab's center (24px
        // inset, ~48px under the panel) — the grow visually starts from the button
        transformOrigin: "calc(100% - 24px) calc(100% + 48px)",
        width: { sm: 400, xs: "calc(100vw - 32px)" },
        // Snackbar level, like the Fab it grows from: a Fab clickable above a modal
        // backdrop must open a panel that is not buried under that same backdrop
        zIndex: (theme) => theme.zIndex.snackbar,
        ...(!withFab && CORNER_SX),
        // Small screens have no app bar: dockedTop only applies from md up.
        ...(docked && { ...DOCKED_SX, top: { md: dockedTop + AI_ASSISTANT_DOCKED_INSET, xs: AI_ASSISTANT_DOCKED_INSET } }),
      }}
    >
      {children}
    </Paper>
  </Grow>
);

export default AiAssistantPanel;
