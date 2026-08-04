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
