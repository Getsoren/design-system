import Box from "@mui/material/Box";
import type { SxProps, Theme } from "@mui/material/styles";
import PDFIcon from "@/assets/img/pdf-icon.png";

interface PdfFileIconProps {
  /** Height in px; the sheet keeps its proportions */
  size?: number;
  sx?: SxProps<Theme>;
}

/**
 * The file viewer's red PDF sheet (a machine's documents) as an inline icon: a PDF reads the same everywhere
 */
const PdfFileIcon = ({ size = 20, sx }: PdfFileIconProps) => (
  <Box
    component="img"
    src={PDFIcon}
    alt=""
    aria-hidden
    sx={[{ display: "block", flexShrink: 0, height: size, width: "auto" }, ...(Array.isArray(sx) ? sx : [sx])]}
  />
);

export default PdfFileIcon;
