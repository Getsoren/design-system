import { Avatar as MuiAvatar, SxProps, Theme } from "@mui/material";
import { ReactNode } from "react";
import StorefrontIcon from "@/components/DataDisplay/Icons/StorefrontIcon";

export interface LogoAvatarProps {
  src?: string | null;
  alt?: string;
  size?: number;
  fallbackIcon?: ReactNode;
  sx?: SxProps<Theme>;
}

/** Corner radius as a share of the side: the theme's radius at the default 40px, never a pill on a small logo */
const RADIUS_RATIO = 0.2;

/**
 * Rounded square avatar for an entity logo (supplier, agency, brand…). Falls back to a storefront
 * icon when the logo is missing or broken; pass `fallbackIcon` for other entity kinds.
 */
const LogoAvatar = ({ src, alt, size = 40, sx, fallbackIcon = <StorefrontIcon /> }: LogoAvatarProps) => (
  <MuiAvatar
    variant="rounded"
    src={src || undefined}
    alt={alt}
    sx={{
      // The fallback icon scales with the avatar whatever icon component the caller passes.
      "& svg": { fontSize: Math.round(size / 2) },
      backgroundColor: "grey.100",
      // The corners shrink with the avatar, up to the theme's radius, so a 20px logo stays a square.
      borderRadius: ({ shape }: Theme) => `${Math.min(Number(shape.borderRadius), Math.round(size * RADIUS_RATIO))}px`,
      color: "text.secondary",
      flexShrink: 0,
      height: size,
      width: size,
      ...sx,
    }}
  >
    {fallbackIcon}
  </MuiAvatar>
);

export default LogoAvatar;
