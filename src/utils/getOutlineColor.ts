import type { Theme } from "@mui/material";

/** Resting border of a control: grey 400 in light mode, the translucent outline of the dark palette otherwise */
const getOutlineColor = (theme: Theme): string => (theme.palette.mode === "light" ? theme.palette.grey[400] : theme.palette.border.outline);

export default getOutlineColor;
