import Box from "@mui/material/Box";
import AiAssistantMark from "@/components/DataDisplay/AiAssistant/components/AiAssistantMark";
import { AI_ASSISTANT_AVATAR_SIZE } from "@/components/DataDisplay/AiAssistant/constants";
import type { AiAssistantAvatarProps } from "@/components/DataDisplay/AiAssistant/types";
import { assistantOrbGradient } from "@/components/DataDisplay/AiAssistant/utils/gradient";
import getSubtleSurfaceColor from "@/utils/getSubtleSurfaceColor";

// Small enough for the mark's glow to fit inside the round.
const MARK_SIZE = 15;

/** The assistant's mark in a round: grey in the thread, or the flowing brand gradient where it stands for the brand. */
const AiAssistantAvatar = ({ variant = "subtle", isWorking }: AiAssistantAvatarProps) => {
  const isBrand = variant === "brand";

  return (
    <Box
      data-variant={variant}
      sx={{
        alignItems: "center",
        borderRadius: "50%",
        display: "flex",
        flexShrink: 0,
        height: AI_ASSISTANT_AVATAR_SIZE,
        justifyContent: "center",
        width: AI_ASSISTANT_AVATAR_SIZE,
        ...(isBrand
          ? {
              "@keyframes aiAssistantAvatarFlow": {
                "0%, 100%": { backgroundPosition: "0% 40%" },
                "50%": { backgroundPosition: "100% 60%" },
              },
              "@media (prefers-reduced-motion: reduce)": { "&&": { animation: "none" } },
              animation: "aiAssistantAvatarFlow 11.3s ease infinite",
              background: ({ palette }) => assistantOrbGradient(palette.mode),
              backgroundSize: "320% 320%",
            }
          : { backgroundColor: ({ palette }) => getSubtleSurfaceColor(palette) }),
      }}
    >
      <AiAssistantMark size={MARK_SIZE} color={isBrand ? "common.white" : undefined} isWorking={isWorking} />
    </Box>
  );
};

export default AiAssistantAvatar;
