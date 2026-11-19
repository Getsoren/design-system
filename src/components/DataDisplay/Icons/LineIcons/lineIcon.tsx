import { SvgIcon, SxProps, Theme } from "@mui/material";
import { ReactNode } from "react";

export type LineIconComponent = (props: { sx?: SxProps<Theme> }) => ReactNode;

/**
 * A line icon in the navigation's style (Lucide): drawn on a 24 grid with round strokes of 2, shown at 20 px, as the
 * menu's icons are drawn on 20 with strokes of 1.67.
 */
export const lineIcon =
  (paths: ReactNode): LineIconComponent =>
  ({ sx }) => (
    <SvgIcon
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      sx={{ fill: "none", fontSize: 20, ...sx }}
    >
      {paths}
    </SvgIcon>
  );
