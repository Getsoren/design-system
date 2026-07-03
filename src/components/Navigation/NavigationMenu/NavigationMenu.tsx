import { ChipProps, SwipeableDrawer, useMediaQuery, useTheme } from "@mui/material";
import { createContext, MouseEvent, memo, ReactElement, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from "react";
import BurgerAppBar from "@/components/Navigation/NavigationMenu/BurgerAppBar";
import SideBar from "@/components/Navigation/NavigationMenu/SideBar";
import SideBarMenu from "@/components/Navigation/NavigationMenu/SideBarMenu";

export type ObjectNavigationItem = {
  url?: string;
  label?: string;
  count?: number;
  countColor?: ChipProps["color"];
  /** Small highlight chip rendered next to the label (e.g. "New"). Hidden when the sidebar is collapsed to the icon rail. */
  tag?: string;
  /** Color of the `tag` chip. @default "info" */
  tagColor?: ChipProps["color"];
  icon?: ReactNode;
  active?: boolean;
  state?: any;
  end?: boolean;
  disabled?: boolean;
  hideOnMobile?: boolean;
  hasAccess?: boolean;
  target?: string;
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
  url?: string;
  state?: any;
  end?: boolean;
  label?: ReactNode;
  active?: boolean;
  icon?: ReactNode;
  disabled?: boolean;
  onClick?: (e?: MouseEvent) => void;
  target?: string;
}

export interface NavLinkProps {
  className?: string | ((props: { isActive: boolean; isPending: boolean }) => string | undefined);
  onClick?: () => void;
  to: string;
  end?: boolean;
  children?: ReactNode | ((props: { isActive: boolean; isPending: boolean }) => ReactNode);
  state?: any;
  target?: string;
}

export type NavigationItem = ObjectNavigationItem | NavigationGroupItem | ReactNode;

export interface NavigationMenuProps {
  /**
   * Menu items
   */
  items?: NavigationItem[];
  /**
   * Override the default translations
   */
  /**
   * Enabler search field focus shortcut when pressing "ctrl + f" or "cmd + f"
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
   * Search component
   */
  Footer?: ReactNode;
  /**
   * localStorage key used to persist the sidebar collapsed state
   * @default "soren-navigation-menu-collapsed"
   */
  storageKey?: string;
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
