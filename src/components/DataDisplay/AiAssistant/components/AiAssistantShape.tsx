import Box from "@mui/material/Box";
import { SOREN_MARK_PATH, SOREN_MARK_VIEWBOX } from "@/constants/sorenLogo";

// First sub-path of the logo: its outline, without the ellipse cut out of it.
const OUTLINE_PATH = SOREN_MARK_PATH.slice(0, SOREN_MARK_PATH.indexOf("Z") + 1);

/** Logo silhouette filling its positioned parent; content on top must be positioned too. */
const AiAssistantShape = () => (
  <Box
    component="svg"
    aria-hidden
    viewBox={`0 0 ${SOREN_MARK_VIEWBOX.width} ${SOREN_MARK_VIEWBOX.height}`}
    sx={{
      color: ({ palette }) => (palette.mode === "dark" ? palette.grey[800] : palette.grey[100]),
      height: "100%",
      inset: 0,
      position: "absolute",
      width: "100%",
    }}
  >
    <path d={OUTLINE_PATH} fill="currentColor" />
  </Box>
);

export default AiAssistantShape;
