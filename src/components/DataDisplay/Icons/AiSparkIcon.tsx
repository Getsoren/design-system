import { SvgIcon, useTheme } from "@mui/material";
import { useId } from "react";
import type { AiSparkIconProps } from "@/components/DataDisplay/AiAssistant/types";
import { assistantSparkStops } from "@/components/DataDisplay/AiAssistant/utils/gradient";

/**
 * Four-point spark with concave curved edges — the filled, organic "AI" glyph
 * used across the AiAssistant components (FAB, panel header).
 */
const AiSparkIcon = ({ size = 24, color = "currentColor", variant = "solid" }: AiSparkIconProps) => {
  const gradientId = useId();
  const { palette } = useTheme();
  const isGradient = variant === "gradient";

  return (
    <SvgIcon width={size} height={size} viewBox="0 0 24 24" style={{ height: size, width: size }}>
      {isGradient && (
        <defs>
          <linearGradient id={gradientId} x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
            {/* Brand gradient: the Soren orange sinking into black (charcoal on a dark surface). */}
            {assistantSparkStops(palette.mode).map(({ color, offset }) => (
              <stop key={color} offset={offset} stopColor={color} />
            ))}
          </linearGradient>
        </defs>
      )}
      <path
        d="M12 2C12.85 7.15 16.85 11.15 22 12C16.85 12.85 12.85 16.85 12 22C11.15 16.85 7.15 12.85 2 12C7.15 11.15 11.15 7.15 12 2Z"
        fill={isGradient ? `url(#${gradientId})` : color}
      />
    </SvgIcon>
  );
};

export default AiSparkIcon;
