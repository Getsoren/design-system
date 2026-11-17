import { alpha, Box, type SxProps, type Theme } from "@mui/material";
import { type ReactNode, useState } from "react";

export interface TileProps {
  /**
   * The picture; without one, or when it fails to load, `children` stands for it.
   */
  src?: string;
  alt?: string;
  /**
   * Side of the square, in px.
   */
  size?: number;
  /**
   * `filled`: a grey tile, the default. `outlined`: on the surface's own colour. `dashed`: the place of something
   * that is not there yet.
   */
  variant?: "filled" | "outlined" | "dashed";
  /**
   * Tints the tile and what it holds with a palette colour, in place of its variant's own.
   */
  color?: "primary" | "secondary" | "success" | "info" | "warning" | "error";
  /**
   * Laid over the tile, clipped to it: a progress line, a scrim.
   */
  overlay?: ReactNode;
  /**
   * What stands for the picture: an icon, a short label.
   */
  children?: ReactNode;
  sx?: SxProps<Theme>;
  "data-testid"?: string;
}

const VARIANT_SX = {
  dashed: { backgroundColor: "transparent", border: 1.5, borderColor: "text.disabled", borderStyle: "dashed", color: "text.secondary" },
  filled: { backgroundColor: "grey.100", border: 1, borderColor: "divider", color: "text.secondary" },
  outlined: { backgroundColor: "background.paper", border: 1, borderColor: "divider", color: "text.primary" },
} as const;

/**
 * A square tile of a list row: a picture, or the icon or label that stands for it.
 */
const Tile = ({ src, alt = "", size = 40, variant = "filled", color, overlay, children, sx, ...props }: TileProps) => {
  const [failedSrc, setFailedSrc] = useState<string>();
  const isPictureShown = !!src && failedSrc !== src;

  return (
    <Box
      sx={[
        {
          alignItems: "center",
          borderRadius: 1,
          display: "flex",
          flexShrink: 0,
          height: size,
          justifyContent: "center",
          overflow: "hidden",
          position: "relative",
          width: size,
        },
        // A picture is framed as a filled tile whatever stands for it otherwise
        color && !isPictureShown
          ? ({ palette }) => ({ backgroundColor: alpha(palette[color].dark, 0.12), color: palette[color].dark })
          : VARIANT_SX[isPictureShown && variant === "dashed" ? "filled" : variant],
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    >
      {isPictureShown ? (
        <Box
          component="img"
          src={src}
          alt={alt}
          onError={() => setFailedSrc(src)}
          sx={{ height: "100%", objectFit: "cover", width: "100%" }}
        />
      ) : (
        children
      )}
      {overlay}
    </Box>
  );
};

export default Tile;
