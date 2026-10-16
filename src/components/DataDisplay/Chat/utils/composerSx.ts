import type { Theme } from "@mui/material/styles";

// Concentric corners: the composer is rounded at 20px and its 40px buttons sit 9px from its outer edge (1px border
// + 8px padding), so they take 20 - 9 = 11px: the slightly square shape of the app's buttons, hugging its corners
export const COMPOSER_RADIUS = 20;
export const COMPOSER_INNER_RADIUS = `${COMPOSER_RADIUS - 9}px`;
// Every icon of the bottom bar, in its own 40px cell
export const COMPOSER_ICON_SIZE = 20;

export const composerIconSx = {
  "@media (hover: none)": { height: 44, width: 44 },
  borderRadius: COMPOSER_INNER_RADIUS,
  height: 40,
  width: 40,
};

/**
 * The bottom bar's named tools ("Attach a file", "Actions"): outlined, their icon in a 40px cell as the icon buttons';
 * the label folds away on a phone
 */
export const composerToolSx = (isActive: boolean) => ({
  "& [data-label]": { display: { sm: "inline", xs: "none" } },
  "&:hover": { backgroundColor: "action.hover", color: "text.primary" },
  backgroundColor: isActive ? "action.hover" : "transparent",
  border: "1px solid",
  borderColor: "divider",
  borderRadius: COMPOSER_INNER_RADIUS,
  color: isActive ? "text.primary" : "text.secondary",
  fontFamily: ({ typography }: Theme) => typography.fontFamily,
  fontSize: ({ typography }: Theme) => typography.body2.fontSize,
  fontWeight: 500,
  gap: 0.75,
  height: 40,
  minWidth: 0,
  pl: `${(40 - COMPOSER_ICON_SIZE) / 2 - 1}px`,
  pr: { sm: 1.5, xs: `${(40 - COMPOSER_ICON_SIZE) / 2 - 1}px` },
  whiteSpace: "nowrap",
});
