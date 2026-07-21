import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import type { AiAssistantPanelProps } from "@/components/DataDisplay/AiAssistant/types";

/**
 * Floating chat widget — no modal backdrop, so the host app stays visible (and usable)
 * while the assistant navigates. While `isBusy`, a soft iridescent aura breathes around
 * the panel; every animation frame keeps an ambient depth shadow (the animation
 * overrides the elevation one).
 */
const AiAssistantPanel = ({ open, isBusy = false, children, dataTestId = "assistantPanel" }: AiAssistantPanelProps) => (
  <Fade in={open} unmountOnExit>
    <Paper
      data-testid={dataTestId}
      elevation={8}
      sx={{
        "@keyframes aiAssistantPanelAura": {
          "0%": {
            boxShadow: "0 0 24px 4px rgba(139, 92, 246, 0.3), 0 0 40px 10px rgba(0, 200, 255, 0.16), 0 12px 40px rgba(0, 0, 0, 0.2)",
          },
          "70%": {
            boxShadow: "0 0 52px 16px rgba(139, 92, 246, 0.16), 0 0 72px 22px rgba(0, 200, 255, 0.28), 0 12px 40px rgba(0, 0, 0, 0.2)",
          },
          "100%": {
            boxShadow: "0 0 24px 4px rgba(139, 92, 246, 0.3), 0 0 40px 10px rgba(0, 200, 255, 0.16), 0 12px 40px rgba(0, 0, 0, 0.2)",
          },
        },
        // Doubled selector (&&) so this a11y override beats the base rule regardless of emission order
        "@media (prefers-reduced-motion: reduce)": {
          "&&": { animation: "none" },
        },
        animation: isBusy ? "aiAssistantPanelAura 2.4s ease-out infinite" : "none",
        borderRadius: 3,
        bottom: 96,
        display: "flex",
        flexDirection: "column",
        height: { sm: 560, xs: "calc(100dvh - 112px)" },
        maxHeight: "calc(100dvh - 120px)",
        overflow: "hidden",
        position: "fixed",
        right: { sm: 24, xs: 16 },
        width: { sm: 400, xs: "calc(100vw - 32px)" },
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      {children}
    </Paper>
  </Fade>
);

export default AiAssistantPanel;
