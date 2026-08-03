import { Box, Divider, Fade, IconButton, Stack, Theme, Tooltip, useTheme } from "@mui/material";
import { ReactNode, useContext } from "react";
import ChevronLeftDoubleIcon from "@/components/DataDisplay/Icons/ChevronLeftDoubleIcon";
import CloseIcon from "@/components/DataDisplay/Icons/CloseIcon";
import { BottomLinkProps, NavigationMenuContext, NavLinkProps } from "@/components/Navigation/NavigationMenu/NavigationMenu";
import NavLinkItem from "@/components/Navigation/NavigationMenu/NavLinkItem";
import {
  NAVIGATION_DENSITY_TOKENS,
  type NavigationDensity,
  type NavigationDensityTokens,
} from "@/components/Navigation/NavigationMenu/utils/navigationDensity";

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
  logo: {
    "& svg, & img": {
      maxWidth: "100%",
    },
    flex: 1,
    span: {
      width: "100% ! important",
    },
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
          {link?.icon && (
            <Box component="span" sx={sx.iconWrapper}>
              {link.icon}
            </Box>
          )}
          {link?.label && (
            <Fade in={!isCollapsed}>
              <Box component="span" display="flex">
                {link.label}
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
    isMobile,
    isTablet,
    isDrawerOpen,
    isCollapsed,
    toggleCollapse,
    sideBarWidth,
    bottomLink,
    NavLink,
    Footer,
    Search = props.Logo,
    Logo = props.Logo,
    density,
  } = useContext(NavigationMenuContext);
  const styles = STYLES[density];
  const { collapseButtonPaddingY, searchPaddingY } = NAVIGATION_DENSITY_TOKENS[density];

  const { palette } = useTheme();
  const backgroundColor = palette.mode === "dark" ? palette.background.default : palette.primary.black;
  const borderRight = isMobile && isDrawerOpen ? "none" : `solid 1px ${palette.divider}`;
  const isDesktop = !(isMobile || isTablet);
  const displaySearch = hideSearchDesktop ? !isDesktop : true;

  return (
    <Box
      component="aside"
      sx={{
        ...styles.container,
        borderRight,
        overflowX: "hidden",
        transform: "translateZ(0)",
        transition: "width 0.3s ease-in-out",
        width: isCollapsed ? 80 : sideBarWidth || "auto",
        willChange: "width",
      }}
    >
      {/* Logo */}
      {Logo && (
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
            sx={{
              ...styles.logo,
              ...(isMobile && {
                "& svg, & img": {
                  ...styles.logo["& svg, & img"],
                  maxHeight: 25,
                  width: "auto",
                },
              }),
            }}
          >
            {Logo}
          </Box>
          {isMobile && (
            <IconButton onClick={closeDrawerMenu}>
              <CloseIcon color={palette.getContrastText(backgroundColor)} />
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
      {bottomLink && (
        <Stack sx={styles.bottomLinkWrapper} spacing={1} whiteSpace="nowrap">
          {Array.isArray(bottomLink) ? (
            bottomLink.map((link, index) => {
              const key = typeof link === "object" && "url" in link ? `$${link.url}-${index}` : index;

              return <BottomNavLink key={key} link={link} NavLink={NavLink} isCollapsed={isCollapsed} sx={styles} />;
            })
          ) : (
            <BottomNavLink link={bottomLink} NavLink={NavLink} isCollapsed={isCollapsed} sx={styles} />
          )}
        </Stack>
      )}

      <Divider />

      {/* Collapse button */}
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
      {Footer}
    </Box>
  );
};

export default SideBar;
