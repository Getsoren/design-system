import { SvgIcon } from "@mui/material";
import { useId } from "react";
import type { AiSparkIconProps } from "@/components/DataDisplay/AiAssistant/types";

/**
 * Four-point spark with concave curved edges — the filled, organic "AI" glyph
 * used across the AiAssistant components (FAB, panel header).
 */
const AiSparkIcon = ({ size = 24, color = "currentColor", variant = "solid" }: AiSparkIconProps) => {
  const gradientId = useId();
  const isGradient = variant === "gradient";

  return (
    <SvgIcon width={size} height={size} viewBox="0 0 24 24" style={{ height: size, width: size }}>
      {isGradient && (
        <defs>
          <linearGradient id={gradientId} x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4f8dff" />
            <stop offset="0.5" stopColor="#8b5cf6" />
            <stop offset="1" stopColor="#00c8ff" />
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
