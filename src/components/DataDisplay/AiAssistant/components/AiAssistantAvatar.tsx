import Box from "@mui/material/Box";
import portrait from "@/assets/img/soren-assistant.webp";
import { AI_ASSISTANT_AVATAR_SIZE, AI_ASSISTANT_GLOW_COLORS } from "@/components/DataDisplay/AiAssistant/constants";
import type { AiAssistantAvatarProps } from "@/components/DataDisplay/AiAssistant/types";
import { getSubtleSurfaceColor } from "@/utils/colors";

const [ORANGE, AMBER, , PINK] = AI_ASSISTANT_GLOW_COLORS;
// A band of the brand's colours, parked off the avatar between two crossings.
const BRAND_BAND = `linear-gradient(45deg, ${ORANGE}00 36%, ${ORANGE}99 44%, ${AMBER}cc 50%, ${PINK}99 56%, ${PINK}00 64%)`;
// Back to the first colour, so the turning light has no seam.
const WORKING_LIGHT = `conic-gradient(${[...AI_ASSISTANT_GLOW_COLORS, AI_ASSISTANT_GLOW_COLORS[0]].join(", ")})`;

/** The assistant's portrait on a grey round; where it stands for the brand, the brand's colours cross it now and then. */
const AiAssistantAvatar = ({
  portrait: livePortrait,
  variant = "subtle",
  isWorking = false,
  rounded = false,
  size = AI_ASSISTANT_AVATAR_SIZE,
}: AiAssistantAvatarProps) => {
  const radius = rounded ? Math.round(size / 4) : size / 2;
  const lightWidth = Math.max(2, Math.round(size / 24));

  return (
    <Box data-variant={variant} sx={{ flexShrink: 0, height: size, position: "relative", width: size }}>
      {isWorking && (
        // The light keeps the avatar's shape, a little larger: only its colours turn.
        <Box
          aria-hidden
          data-testid="assistantAvatarLight"
          sx={{ borderRadius: `${radius + lightWidth}px`, inset: -lightWidth, overflow: "hidden", position: "absolute" }}
        >
          <Box
            sx={{
              "@keyframes aiAssistantAvatarLight": { to: { transform: "rotate(1turn)" } },
              "@media (prefers-reduced-motion: reduce)": { "&&": { animation: "none" } },
              animation: "aiAssistantAvatarLight 1600ms linear infinite",
              background: WORKING_LIGHT,
              // The square's diagonal, so the colours always cover its corners.
              inset: "-21%",
              position: "absolute",
            }}
          />
        </Box>
      )}
      <Box
        sx={{
          ...(variant === "brand" && {
            "@keyframes aiAssistantAvatarBand": {
              "0%, 70%": { backgroundPosition: "120% -20%" },
              "95%, 100%": { backgroundPosition: "-20% 120%" },
            },
            "@media (prefers-reduced-motion: reduce)": { "&&": { animation: "none" } },
            // Every 10 s, from bottom left to top right: caught out of the corner of the eye.
            animation: "aiAssistantAvatarBand 10s cubic-bezier(0.5, 0.05, 0.45, 0.95) infinite",
            backgroundImage: BRAND_BAND,
            backgroundPosition: "120% -20%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "300% 300%",
          }),
          backgroundColor: ({ palette }) => getSubtleSurfaceColor(palette),
          borderRadius: `${radius}px`,
          height: size,
          overflow: "hidden",
          position: "relative",
          width: size,
        }}
      >
        {livePortrait ?? (
          <Box component="img" src={portrait} alt="" draggable={false} sx={{ display: "block", height: 1, objectFit: "cover", width: 1 }} />
        )}
      </Box>
    </Box>
  );
};

export default AiAssistantAvatar;
