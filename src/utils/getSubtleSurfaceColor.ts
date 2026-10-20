import type { Palette } from "@mui/material/styles";

/** Grey that sets a surface apart from the paper it sits on (avatar round, own message, filled composer), in both modes. */
const getSubtleSurfaceColor = ({ grey, mode }: Palette) => (mode === "dark" ? grey[800] : grey[100]);

export default getSubtleSurfaceColor;
