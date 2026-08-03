export type NavigationDensity = "standard" | "compact";

export interface NavigationDensityTokens {
  /** Vertical padding of a bottom link row */
  bottomLinkPaddingY: number;
  /** Vertical padding of the block wrapping the bottom links */
  bottomLinkWrapperPaddingY: number;
  /** Vertical padding of the collapse button (its horizontal padding never changes) */
  collapseButtonPaddingY: number;
  /** Minimum height of a group header */
  groupHeaderMinHeight: number;
  /** Space above a group of items */
  groupItemMarginTop: number;
  /** Minimum height of a menu row. Never below 36: our users are on site, with gloves. */
  itemMinHeight: number;
  /** Vertical padding of a menu row */
  itemPaddingY: number;
  /** Vertical padding of the list item wrapping each row */
  listItemPaddingY: number;
  /** Space above the menu list */
  listMarginTop: number;
  /** Vertical padding of the logo block */
  logoPaddingY: number;
  /** Vertical padding of the search block */
  searchPaddingY: number;
}

/**
 * Density only changes the vertical rhythm. Deliberately absent from this table, and therefore
 * identical in every density: the font size, the horizontal gutters, the icon gutter, the
 * icon-to-label spacing, the border radius, the colours and the width of the collapsed rail.
 * Shrinking the text is not an option — density comes from the spacings.
 */
export const NAVIGATION_DENSITY_TOKENS: Record<NavigationDensity, NavigationDensityTokens> = {
  compact: {
    bottomLinkPaddingY: 0.5,
    bottomLinkWrapperPaddingY: 1.5,
    collapseButtonPaddingY: 1.5,
    groupHeaderMinHeight: 28,
    groupItemMarginTop: 1.5,
    itemMinHeight: 36,
    itemPaddingY: 0.5,
    listItemPaddingY: 0.125,
    listMarginTop: 2,
    logoPaddingY: 1.5,
    searchPaddingY: 1.5,
  },
  standard: {
    bottomLinkPaddingY: 1,
    bottomLinkWrapperPaddingY: 2,
    collapseButtonPaddingY: 3,
    groupHeaderMinHeight: 32,
    groupItemMarginTop: 2,
    itemMinHeight: 42,
    itemPaddingY: 1,
    listItemPaddingY: 0.5,
    listMarginTop: 3,
    logoPaddingY: 2,
    searchPaddingY: 2,
  },
};
