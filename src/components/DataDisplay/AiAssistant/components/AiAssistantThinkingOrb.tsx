import Box from "@mui/material/Box";
import type { AiAssistantThinkingOrbProps } from "@/components/DataDisplay/AiAssistant/types";

/**
 * Living mini-orb shown while the assistant thinks — same visual language as the FAB
 * orb: iridescent flow, blob morph, breath and pulsing aura (aura spread scales with
 * size). Emotion emits @keyframes globally, hence the size-suffixed aura name (its
 * content differs per size — the same name would collide).
 */
const AiAssistantThinkingOrb = ({ size = 22 }: AiAssistantThinkingOrbProps) => {
  const auraName = `aiAssistantOrbAura${size}`;
  const auraSpread = Math.max(4, Math.round(size * 0.4));

  return (
    <Box
      sx={{
        [`@keyframes ${auraName}`]: {
          "0%": { boxShadow: "0 0 0 0 rgba(139, 92, 246, 0.45), 0 2px 10px rgba(0, 176, 255, 0.35)" },
          "70%": { boxShadow: `0 0 0 ${auraSpread}px rgba(139, 92, 246, 0), 0 2px 12px rgba(0, 176, 255, 0.5)` },
          "100%": { boxShadow: "0 0 0 0 rgba(139, 92, 246, 0), 0 2px 10px rgba(0, 176, 255, 0.35)" },
        },
        "@keyframes aiAssistantOrbBlob": {
          "0%, 100%": { borderRadius: "58% 42% 55% 45% / 48% 56% 44% 52%" },
          "25%": { borderRadius: "45% 55% 48% 52% / 56% 44% 56% 44%" },
          "50%": { borderRadius: "52% 48% 42% 58% / 44% 52% 48% 56%" },
          "75%": { borderRadius: "48% 52% 58% 42% / 52% 46% 54% 48%" },
        },
        "@keyframes aiAssistantOrbBreath": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.12)" },
        },
        "@keyframes aiAssistantOrbFlow": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        // Doubled selector (&&) so this a11y override beats the base rule regardless of emission order
        "@media (prefers-reduced-motion: reduce)": {
          "&&": { animation: "none" },
        },
        animation: `aiAssistantOrbFlow 3.2s ease infinite, aiAssistantOrbBlob 4.5s ease-in-out infinite, aiAssistantOrbBreath 2.6s ease-in-out infinite, ${auraName} 2.2s ease-out infinite`,
        background: "linear-gradient(125deg, #4f8dff 0%, #8b5cf6 30%, #00c8ff 60%, #ff5fa2 85%, #4f8dff 100%)",
        backgroundSize: "320% 320%",
        borderRadius: "58% 42% 55% 45% / 48% 56% 44% 52%",
        flexShrink: 0,
        height: size,
        width: size,
      }}
    />
  );
};

export default AiAssistantThinkingOrb;
