import { Box, SxProps } from "@mui/material";
import { ForwardedRef, forwardRef } from "react";
import {
  SOREN_LOCKUP_MARK_PATH,
  SOREN_LOCKUP_VIEWBOX,
  SOREN_MARK_PATH,
  SOREN_MARK_VIEWBOX,
  SOREN_WORDMARK_PATHS,
} from "@/components/DataDisplay/Logo/sorenLogoPaths";

interface SorenLogoProps {
  height: number | string;
  width: number | string;
  /** Fill of the wordmark. */
  color: string;
  /** Fill of the mark. */
  colorShape: string;
  /** The mark alone. */
  withoutText?: boolean;
  sx?: SxProps;
}

/**
 * The Soren logo drawn inline, so both inks come from props: the signature (mark + wordmark)
 * or the mark alone. The mark and the wordmark are separate groups (`.sorenLogoMark`,
 * `.sorenLogoWordmark`), so a caller can animate one after the other.
 */
const SorenLogo = ({ height, width, color, colorShape, withoutText, sx }: SorenLogoProps, ref: ForwardedRef<SVGSVGElement>) => {
  const viewBox = withoutText ? SOREN_MARK_VIEWBOX : SOREN_LOCKUP_VIEWBOX;

  return (
    <Box
      component="svg"
      ref={ref}
      role="img"
      aria-label="Soren"
      viewBox={`0 0 ${viewBox.width} ${viewBox.height}`}
      sx={{ height, width, ...sx }}
    >
      {withoutText ? (
        <path fill={colorShape} d={SOREN_MARK_PATH} />
      ) : (
        <>
          <g className="sorenLogoMark">
            <path fill={colorShape} d={SOREN_LOCKUP_MARK_PATH} />
          </g>
          <g className="sorenLogoWordmark">
            {SOREN_WORDMARK_PATHS.map((path) => (
              <path key={path} fill={color} d={path} />
            ))}
          </g>
        </>
      )}
    </Box>
  );
};

export default forwardRef(SorenLogo);
