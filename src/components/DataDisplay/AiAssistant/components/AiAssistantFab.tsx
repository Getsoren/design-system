import Fab from "@mui/material/Fab";
import Tooltip from "@mui/material/Tooltip";
import type { AiAssistantFabProps } from "@/components/DataDisplay/AiAssistant/types";
import AiSparkIcon from "@/components/DataDisplay/Icons/AiSparkIcon";
import CloseIcon from "@/components/DataDisplay/Icons/CloseIcon";

/**
 * The assistant's floating action button — a liquid orb: iridescent gradient flow,
 * blob morph, breath and pulsing aura while idle; calm circle with a close glyph when
 * the panel is open. The animations live on a ::before layer so the hit-box never
 * moves (reliable clicks, stable e2e).
 */
const AiAssistantFab = ({ open, onClick, tooltip, dataTestId = "assistantFab" }: AiAssistantFabProps) => (
  <Tooltip title={tooltip} placement="left">
    <Fab
      size="medium"
      onClick={onClick}
      data-testid={dataTestId}
      sx={{
        "@keyframes aiAssistantAura": {
          "0%": { boxShadow: "0 0 0 0 rgba(139, 92, 246, 0.45), 0 6px 22px rgba(0, 176, 255, 0.35)" },
          "70%": { boxShadow: "0 0 0 14px rgba(139, 92, 246, 0), 0 6px 26px rgba(0, 176, 255, 0.5)" },
          "100%": { boxShadow: "0 0 0 0 rgba(139, 92, 246, 0), 0 6px 22px rgba(0, 176, 255, 0.35)" },
        },
        // Liquid orb: the button's own shape undulates (blob morph) and gently breathes
        "@keyframes aiAssistantBlob": {
          "0%, 100%": { borderRadius: "58% 42% 55% 45% / 48% 56% 44% 52%" },
          "25%": { borderRadius: "45% 55% 48% 52% / 56% 44% 56% 44%" },
          "50%": { borderRadius: "52% 48% 42% 58% / 44% 52% 48% 56%" },
          "75%": { borderRadius: "48% 52% 58% 42% / 52% 46% 54% 48%" },
        },
        "@keyframes aiAssistantBreath": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        "@keyframes aiAssistantFlow": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "@keyframes aiAssistantSpark": {
          "0%, 100%": { opacity: 1, transform: "scale(1) rotate(0deg)" },
          "50%": { opacity: 0.9, transform: "scale(1.14) rotate(10deg)" },
        },
        // Doubled selector (&&) so this a11y override beats the base rules regardless of emission order
        "@media (prefers-reduced-motion: reduce)": {
          "&& svg": { animation: "none" },
          "&&::before": { animation: "none" },
        },
        "& svg": {
          animation: open ? "none" : "aiAssistantSpark 2.8s ease-in-out infinite",
        },
        /**
         * The living orb is a ::before layer: it flows, undulates (blob morph) and breathes
         * while the button's own hit-box stays perfectly still.
         */
        "&::before": {
          animation: open
            ? "aiAssistantFlow 5s ease infinite"
            : "aiAssistantFlow 5s ease infinite, aiAssistantBlob 7s ease-in-out infinite, aiAssistantBreath 4.5s ease-in-out infinite, aiAssistantAura 2.8s ease-out infinite",
          background: "linear-gradient(125deg, #4f8dff 0%, #8b5cf6 30%, #00c8ff 60%, #ff5fa2 85%, #4f8dff 100%)",
          backgroundSize: "320% 320%",
          borderRadius: "50%",
          content: '""',
          inset: 0,
          position: "absolute",
          transition: "border-radius 300ms ease",
          zIndex: -1,
        },
        "&:hover": {
          "&::before": { filter: "brightness(1.12)" },
          background: "transparent",
        },
        background: "transparent",
        bottom: 24,
        boxShadow: "none",
        color: "common.white",
        position: "fixed",
        right: 24,
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      {open ? <CloseIcon /> : <AiSparkIcon />}
    </Fab>
  </Tooltip>
);

export default AiAssistantFab;
