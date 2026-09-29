import { Box, Divider, Fade, IconButton, Stack, Theme, Tooltip, useTheme } from "@mui/material";
import { MouseEvent, ReactNode, useContext } from "react";
import ChevronLeftDoubleIcon from "@/components/DataDisplay/Icons/ChevronLeftDoubleIcon";
import CloseIcon from "@/components/DataDisplay/Icons/CloseIcon";
import { BottomLinkProps, NavigationMenuContext, NavLinkProps } from "@/components/Navigation/NavigationMenu/NavigationMenu";
import NavLinkItem from "@/components/Navigation/NavigationMenu/NavLinkItem/NavLinkItem";
import {
  NAVIGATION_DENSITY_TOKENS,
  type NavigationDensity,
  type NavigationDensityTokens,
} from "@/components/Navigation/NavigationMenu/utils/navigationDensity";
import useTranslation from "@/hooks/useTranslation/useTranslation";

export interface SideBarProps {
  children?: ReactNode;
  width?: number | string;
  Footer?: ReactNode;
  Logo?: ReactNode;
  Search?: ReactNode;
}

const buildStyles = (tokens: NavigationDensityTokens) => ({
  bottomLink: {
    "& > a, & > div": {
      "& svg": {
        color: "text.secondary",
      },
      "&:hover": {
        background: ({ palette }: Theme) => palette.grey[50],
      },
      "&.active": {
        "& svg": {
          color: "text.primary",
        },
        background: ({ palette }: Theme) => palette.grey[50],
        borderColor: "divider",
        color: "text.primary",
      },
      "&[aria-disabled='true']": {
        "& svg": {
          color: "text.disabled",
        },
        color: "text.disabled",
      },
      alignItems: "center",
      borderColor: "transparent",
      borderRadius: ({ shape }: Theme) => `${shape.borderRadius}px`,
      borderStyle: "solid",
      borderWidth: 1,
      color: "text.primary",
      display: "flex",
      fontSize: 16,
      justifyContent: "flex-start",
      paddingX: 1.25,
      paddingY: tokens.bottomLinkPaddingY,
      textAlign: "left",
      textDecoration: "none",
      width: "100%",
    },
  },
  bottomLinkWrapper: {
    paddingX: 2,
    paddingY: tokens.bottomLinkWrapperPaddingY,
  },
  container: {
    backgroundColor: "grey.A100",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  iconWrapper: {
    alignItems: "center",
    display: "flex",
    height: 24,
    justifyContent: "center",
    minWidth: 24,
  },
  // Direct children only: a composite logo (a lockup next to a badge, say) keeps its own inner sizes
  logo: {
    "& > span": {
      width: "100% ! important",
    },
    "& > svg, & > img": {
      maxWidth: "100%",
    },
    flex: 1,
    minWidth: 0,
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    paddingY: tokens.logoPaddingY,
  },
});

/** Both densities are built once: an sx object rebuilt on every render would defeat the emotion cache. */
const STYLES: Record<NavigationDensity, ReturnType<typeof buildStyles>> = {
  compact: buildStyles(NAVIGATION_DENSITY_TOKENS.compact),
  standard: buildStyles(NAVIGATION_DENSITY_TOKENS.standard),
};

const BottomNavLink = ({
  link,
  NavLink,
  isCollapsed,
  sx,
}: {
  link: BottomLinkProps;
  NavLink: ((props: NavLinkProps) => ReactNode) | undefined;
  isCollapsed: boolean;
  sx: ReturnType<typeof buildStyles>;
}) => (
  <Box sx={sx?.bottomLink}>
    <NavLinkItem component={NavLink} {...link}>
      <Tooltip title={isCollapsed ? link?.label : ""} placement="right">
        <Stack alignItems="center" spacing={1} direction="row">
          {link?.icon && (isCollapsed || !link.iconOnlyWhenCollapsed) && (
            <Box component="span" sx={sx.iconWrapper}>
              {link.icon}
            </Box>
          )}
          {link?.label && (
            <Fade in={!isCollapsed}>
              <Box component="span" display="flex" alignItems="center" gap={1}>
                {link.label}
                {link.endAdornment}
              </Box>
            </Fade>
          )}
        </Stack>
      </Tooltip>
    </NavLinkItem>
  </Box>
);

const SideBar = ({ children, ...props }: SideBarProps) => {
  const {
    hideSearchDesktop,
    closeDrawerMenu,
    disableResponsive,
    isMobile,
    isTablet,
    isDrawerOpen,
    isCollapsed,
    toggleCollapse,
    sideBarWidth,
    bottomLink,
    NavLink,
    Footer,
    Search = props.Search,
    Logo = props.Logo,
    density,
  } = useContext(NavigationMenuContext);
  const styles = STYLES[density];
  const { collapseButtonPaddingY, searchPaddingY } = NAVIGATION_DENSITY_TOKENS[density];
  const { palette } = useTheme();
  const { t } = useTranslation();
  const borderRight = isMobile && isDrawerOpen ? "none" : `solid 1px ${palette.divider}`;
  const isDesktop = !(isMobile || isTablet);
  const isInDrawer = !(isDesktop || disableResponsive);
  const width = isMobile && isInDrawer ? "100vw" : sideBarWidth || "auto";
  const displaySearch = hideSearchDesktop ? !isDesktop : true;
  const bottomLinks = (Array.isArray(bottomLink) ? bottomLink : bottomLink ? [bottomLink] : []).filter((link) => !link.hidden);

  return (
    <Box
      component="aside"
      sx={{
        ...styles.container,
        borderRight,
        overflowX: "hidden",
        transform: "translateZ(0)",
        transition: "width 0.3s ease-in-out",
        width: isCollapsed ? 80 : width,
        willChange: "width",
      }}
    >
      {/* Logo: heads the drawer only, the desktop brand lives in the app bar */}
      {Logo && !isDesktop && (
        <Stack
          sx={{
            ...styles.logoContainer,
            paddingX: 2,
          }}
          direction="row"
          alignItems="center"
          spacing={3}
        >
          <Box
            // Like the menu's links, whatever is activated in the drawer header (a logo link home,
            // a badge opening a dialog) takes the user away from the menu: the drawer closes first
            onClick={
              isInDrawer
                ? (event: MouseEvent) => {
                    if ((event.target as Element).closest("a, button")) {
                      closeDrawerMenu();
                    }
                  }
                : undefined
            }
            sx={{
              ...styles.logo,
              ...(isMobile && {
                "& > svg, & > img": {
                  ...styles.logo["& > svg, & > img"],
                  maxHeight: 25,
                  width: "auto",
                },
              }),
            }}
          >
            {Logo}
          </Box>
          {isMobile && (
            <IconButton edge="end" onClick={closeDrawerMenu} aria-label={t("close")}>
              {/* The sidebar background (grey.A100) follows the theme: the text colour reads on it in both modes. */}
              <CloseIcon color={palette.text.primary} />
            </IconButton>
          )}
        </Stack>
      )}

      {/* Search */}
      {Search && displaySearch && (
        <Box paddingX={2} paddingY={searchPaddingY}>
          {Search}
        </Box>
      )}

      {/* Menu Item */}
      <Box flex={1}>{children}</Box>

      {/* Bottom Link */}
      {bottomLinks.length > 0 && (
        <Stack sx={styles.bottomLinkWrapper} spacing={1} whiteSpace="nowrap">
          {bottomLinks.map((link, index) => (
            <BottomNavLink
              key={link.url ? `${link.url}-${index}` : index}
              link={link}
              NavLink={NavLink}
              isCollapsed={isCollapsed}
              sx={styles}
            />
          ))}
        </Stack>
      )}

      {/* Collapse button: desktop only, the drawer is never collapsed */}
      {!isInDrawer && <Divider />}
      {!isInDrawer && (
        <Box display="flex" justifyContent="flex-end">
          <IconButton
            onClick={toggleCollapse}
            disableFocusRipple
            disableTouchRipple
            sx={{
              borderRadius: 0,
              justifyContent: "flex-end",

              paddingX: 3,
              paddingY: collapseButtonPaddingY,
              width: "100%",
            }}
          >
            <ChevronLeftDoubleIcon
              sx={{
                transform: isCollapsed ? "rotate(180deg) translateX(2px)" : "rotate(0deg)",
              }}
            />
          </IconButton>
        </Box>
      )}
      {Footer}
    </Box>
  );
};

export default SideBar;
