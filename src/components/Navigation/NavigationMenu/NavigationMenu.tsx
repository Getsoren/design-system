import { ChipProps, SwipeableDrawer, useMediaQuery, useTheme } from "@mui/material";
import { createContext, MouseEvent, memo, ReactElement, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from "react";
import BurgerAppBar from "@/components/Navigation/NavigationMenu/BurgerAppBar";
import SideBar from "@/components/Navigation/NavigationMenu/SideBar";
import SideBarMenu from "@/components/Navigation/NavigationMenu/SideBarMenu";
import type { NavigationDensity } from "@/components/Navigation/NavigationMenu/utils/navigationDensity";

export * from "@/components/Navigation/NavigationMenu/utils/navigationDensity";

export type ObjectNavigationItem = {
  /**
   * Destination URL of the link
   */
  url?: string;
  /**
   * Text displayed for the link
   */
  label?: string;
  /**
   * Number displayed in a chip next to the label
   */
  count?: number;
  /**
   * Color of the `count` chip
   */
  countColor?: ChipProps["color"];
  /**
   * Small highlight chip rendered next to the label (e.g. "New").
   * Hidden when the sidebar is collapsed to the icon rail.
   */
  tag?: string;
  /**
   * Color of the `tag` chip
   * @default "info"
   */
  tagColor?: ChipProps["color"];
  /**
   * Icon displayed before the label
   */
  icon?: ReactNode;
  /**
   * Force the active state of the link
   */
  active?: boolean;
  /**
   * State passed to the router NavLink
   */
  state?: any;
  /**
   * Only mark the link active on an exact URL match (react-router NavLink `end` prop)
   */
  end?: boolean;
  /**
   * Disable the link
   */
  disabled?: boolean;
  /**
   * Hide the link on mobile
   */
  hideOnMobile?: boolean;
  /**
   * Hide the link when the user has no access to it
   */
  hasAccess?: boolean;
  /**
   * Target attribute of the link (e.g. "_blank")
   */
  target?: string;
  /**
   * `data-*` attributes set on the rendered link element (analytics tags, test hooks), e.g. `"data-amp-track-feature"`
   */
  [dataAttribute: `data-${string}`]: string | number | boolean | undefined;
};

export type NavigationGroupItem = {
  /**
   * Section title displayed above the grouped links
   */
  groupLabel: string;
  /**
   * Links belonging to this group
   */
  items: ObjectNavigationItem[];
  /**
   * Allow the group to be collapsed/expanded by clicking its header.
   * Set to false to keep the group permanently expanded.
   * @default false
   */
  collapsible?: boolean;
  /**
   * Initial expanded state when collapsible
   * @default true
   */
  defaultExpanded?: boolean;
  /**
   * Hide the whole group on mobile
   */
  hideOnMobile?: boolean;
  /**
   * Hide the whole group when the user has no access to it
   */
  hasAccess?: boolean;
};

export interface BottomLinkProps {
  /**
   * Destination URL of the link
   */
  url?: string;
  /**
   * State passed to the router NavLink
   */
  state?: any;
  /**
   * Only mark the link active on an exact URL match (react-router NavLink `end` prop)
   */
  end?: boolean;
  /**
   * Content displayed for the link
   */
  label?: ReactNode;
  /**
   * Force the active state of the link
   */
  active?: boolean;
  /**
   * Icon displayed before the label
   */
  icon?: ReactNode;
  /**
   * Disable the link
   */
  disabled?: boolean;
  /**
   * Callback fired when the link is clicked
   */
  onClick?: (e?: MouseEvent) => void;
  /**
   * Target attribute of the link (e.g. "_blank")
   */
  target?: string;
  /**
   * `data-*` attributes set on the rendered link element (analytics tags, test hooks), e.g. `"data-amp-track-feature"`
   */
  [dataAttribute: `data-${string}`]: string | number | boolean | undefined;
}

export interface NavLinkProps {
  /**
   * Class name applied to the link, or a function receiving the link state and returning it
   */
  className?: string | ((props: { isActive: boolean; isPending: boolean }) => string | undefined);
  /**
   * Callback fired when the link is clicked
   */
  onClick?: () => void;
  /**
   * Destination URL of the link
   */
  to: string;
  /**
   * Only mark the link active on an exact URL match (react-router NavLink `end` prop)
   */
  end?: boolean;
  /**
   * Content of the link, or a function receiving the link state and returning it
   */
  children?: ReactNode | ((props: { isActive: boolean; isPending: boolean }) => ReactNode);
  /**
   * State passed to the router NavLink
   */
  state?: any;
  /**
   * Target attribute of the link (e.g. "_blank")
   */
  target?: string;
  /**
   * `data-*` attributes written on the navigation item; a router link spreads them on its `<a>`
   */
  [dataAttribute: `data-${string}`]: string | number | boolean | undefined;
}

export type NavigationItem = ObjectNavigationItem | NavigationGroupItem | ReactNode;

export interface NavigationMenuProps {
  /**
   * Menu items
   */
  items?: NavigationItem[];
  /**
   * Enable search field focus shortcut when pressing "ctrl + f" or "cmd + f"
   */
  enableSearchFocusShortcut?: boolean;
  /**
   * Disable responsive behavior
   */
  disableResponsive?: boolean;
  /**
   * Hide search field on desktop
   */
  hideSearchDesktop?: boolean;
  /**
   * Width of the sidebar, only for desktop
   * @default 270
   */
  sideBarWidth?: number;
  /**
   * Component to render the bottom link
   */
  bottomLink?: BottomLinkProps | BottomLinkProps[] | null | false;
  /**
   * Component to router nav links.
   * This component is used to render the links in the main menu &  mobile bottom navigation
   * It should be a react-router-dom NavLink or a compatible component
   * @param props
   * @constructor
   */
  NavLink?: (props: NavLinkProps) => ReactNode;
  /**
   * Logo component
   */
  Logo?: ReactNode;
  /**
   * Search component
   */
  Search?: ReactNode;
  /**
   * AppBar component for small screens
   */
  AppBar?: ReactElement;
  /**
   * Footer component displayed at the bottom of the sidebar
   */
  Footer?: ReactNode;
  /**
   * localStorage key used to persist the sidebar collapsed state
   * @default "soren-navigation-menu-collapsed"
   */
  storageKey?: string;
  /**
   * Vertical density of the navigation. A closed set owned by the design system: "compact" only
   * tightens the vertical rhythm (row height, paddings, gaps between blocks). Font size, horizontal
   * gutters, icon gutter and collapsed rail are identical in both densities.
   * @default "standard"
   */
  density?: NavigationDensity;
}

const DEFAULT_COLLAPSED_STORAGE_KEY = "soren-navigation-menu-collapsed";

const getStoredCollapsed = (storageKey: string) => {
  try {
    return globalThis.localStorage?.getItem(storageKey) === "true";
  } catch {
    // localStorage unavailable (SSR, privacy mode...)
    return false;
  }
};

const DEFAULT_CONTEXT_VALUE = {
  closeDrawerMenu: () => {},
  density: "standard" as NavigationDensity,
  isCollapsed: false,
  isDrawerOpen: false,
  isMobile: false,
  isTablet: false,
  openDrawerMenu: () => {},
  toggleCollapse: () => {},
};

type NavigationMenuContextValue = NavigationMenuProps & typeof DEFAULT_CONTEXT_VALUE;

export const NavigationMenuContext = createContext<NavigationMenuContextValue>(DEFAULT_CONTEXT_VALUE);

const NavigationMenuFactory = () => {
  const { items, disableResponsive, isMobile, isTablet, isDrawerOpen, closeDrawerMenu, sideBarWidth, openDrawerMenu } =
    useContext(NavigationMenuContext);

  if ((isMobile || isTablet) && !disableResponsive) {
    return (
      <>
        <BurgerAppBar />
        <SwipeableDrawer anchor="left" open={isDrawerOpen} onClose={closeDrawerMenu} onOpen={openDrawerMenu}>
          <SideBar>
            <SideBarMenu items={items} />
          </SideBar>
        </SwipeableDrawer>
      </>
    );
  }

  return (
    <SideBar width={sideBarWidth}>
      <SideBarMenu items={items} />
    </SideBar>
  );
};

const NavigationMenu = ({
  AppBar,
  NavLink,
  Search,
  Logo,
  Footer,
  items,
  enableSearchFocusShortcut,
  disableResponsive,
  hideSearchDesktop,
  bottomLink,
  sideBarWidth = 260,
  storageKey = DEFAULT_COLLAPSED_STORAGE_KEY,
  density = "standard",
}: NavigationMenuProps) => {
  const { breakpoints } = useTheme();
  const [isDrawerOpen, setIsDrawerOpen] = useState(DEFAULT_CONTEXT_VALUE.isDrawerOpen);
  const [isCollapsed, setIsCollapsed] = useState(() => getStoredCollapsed(storageKey));
  const isMobile = useMediaQuery(breakpoints.down("sm"));
  const isTablet = useMediaQuery(breakpoints.between("sm", "md"));

  const closeDrawerMenu = useCallback(() => {
    setIsDrawerOpen(false);
  }, []);

  const openDrawerMenu = useCallback(() => {
    setIsDrawerOpen(true);
  }, []);

  const toggleCollapse = useCallback(() => {
    setIsCollapsed((prev) => !prev);
  }, []);

  /**
   * Persist the sidebar collapsed state so it survives page reloads
   */
  useEffect(() => {
    try {
      globalThis.localStorage?.setItem(storageKey, String(isCollapsed));
    } catch {
      // localStorage unavailable (SSR, privacy mode...)
    }
  }, [isCollapsed, storageKey]);

  const value = useMemo(
    () => ({
      AppBar,
      bottomLink,
      closeDrawerMenu,
      density,
      disableResponsive,
      enableSearchFocusShortcut,
      Footer,
      hideSearchDesktop,
      isCollapsed,
      isDrawerOpen,
      isMobile,
      isTablet,
      items,
      Logo,
      NavLink,
      openDrawerMenu,
      Search,
      sideBarWidth,
      toggleCollapse,
    }),
    [
      closeDrawerMenu,
      density,
      disableResponsive,
      isDrawerOpen,
      isMobile,
      isTablet,
      items,
      openDrawerMenu,
      sideBarWidth,
      Logo,
      NavLink,
      enableSearchFocusShortcut,
      Search,
      hideSearchDesktop,
      bottomLink,
      AppBar,
      Footer,
      isCollapsed,
      toggleCollapse,
    ],
  );

  return (
    <NavigationMenuContext.Provider value={value}>
      <NavigationMenuFactory />
    </NavigationMenuContext.Provider>
  );
};

export default memo(NavigationMenu);
