import SvgIcon, { type SvgIconProps } from "@mui/material/SvgIcon";

const GRID = 24;
// The send arrow's stroke (1.5 in a 24px grid, drawn at 20px): every line icon of the composer keeps it at any size
const STROKE_PX = 1.25;

interface ChatLineIconProps extends Omit<SvgIconProps, "fontSize"> {
  /** Stroked path in a 24px grid, see LINE_ICON_PATHS */
  d: string;
  /** Rendered size in px */
  size?: number;
}

const ChatLineIcon = ({ d, size = 20, sx, ...props }: ChatLineIconProps) => (
  <SvgIcon viewBox={`0 0 ${GRID} ${GRID}`} {...props} sx={[{ fontSize: size }, ...(Array.isArray(sx) ? sx : [sx])]}>
    <path d={d} fill="none" stroke="currentColor" strokeWidth={(STROKE_PX * GRID) / size} strokeLinecap="round" strokeLinejoin="round" />
  </SvgIcon>
);

export default ChatLineIcon;
