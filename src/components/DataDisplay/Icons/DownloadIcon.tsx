import { SvgIcon, SxProps, Theme } from "@mui/material";

/**
 * Tray with an arrow dropping into it — the same stroke family as the other house icons, rather than
 * the filled Material glyph. Next to `MapPinIcon` or `DropZoneIcon`, a Material icon reads as a
 * borrowed set.
 */
const DownloadIcon = ({ color = "currentColor", sx }: { color?: string; sx?: SxProps<Theme> }) => (
  <SvgIcon viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" sx={{ fontSize: 20, ...sx }}>
    <path
      d="M17.5 12.5v3.333a1.667 1.667 0 0 1-1.667 1.667H4.167A1.667 1.667 0 0 1 2.5 15.833V12.5M5.833 8.333 10 12.5l4.167-4.167M10 12.5V2.5"
      stroke={color}
      fill="none"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SvgIcon>
);

export default DownloadIcon;
