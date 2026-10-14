import type { Theme } from "@mui/material";

export type InvalidColor = "error" | "warning";

/** Colour of an invalid control: the error palette, or the softer warning one for an answer still to be given */
const getInvalidColor = (theme: Theme, color: InvalidColor = "error"): string =>
  color === "warning" ? theme.palette.warning.dark : theme.palette.error.main;

export default getInvalidColor;
