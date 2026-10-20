import type { Theme } from "@mui/material";
import type { Palette } from "@mui/material/styles";

export type InvalidColor = "error" | "warning";

/** Resting border of a control: grey 400 in light mode, the translucent outline of the dark palette otherwise */
export const getOutlineColor = (theme: Theme): string =>
  theme.palette.mode === "light" ? theme.palette.grey[400] : theme.palette.border.outline;

/**
 * Resting border of a surface read as content rather than as a form control (card, text area): grey 200 in light
 * mode, the same dark outline as a control otherwise
 */
export const getSoftOutlineColor = ({ border, grey, mode }: Palette): string => (mode === "light" ? grey[200] : border.outline);

/** Colour of an invalid control: the error palette, or the softer warning one for an answer still to be given */
export const getInvalidColor = (theme: Theme, color: InvalidColor = "error"): string =>
  color === "warning" ? theme.palette.warning.dark : theme.palette.error.main;

/** Grey that sets a surface apart from the paper it sits on (avatar round, own message, filled composer), in both modes. */
export const getSubtleSurfaceColor = ({ grey, mode }: Palette): string => (mode === "dark" ? grey[800] : grey[100]);
