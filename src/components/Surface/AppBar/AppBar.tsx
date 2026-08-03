import {
  AppBar as AppBarMui,
  AvatarProps,
  alpha,
  Box,
  ButtonProps,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  SxProps,
  TextFieldProps,
  Theme,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { cloneElement, isValidElement, MouseEventHandler, PropsWithChildren, ReactNode } from "react";
import AvatarAppBar from "@/components/DataDisplay/AvatarAppBar";
import MenuIcon from "@/components/DataDisplay/Icons/MenuIcon";
import Logo, { LogoProps } from "@/components/DataDisplay/Logo";
import ActionAppBar from "@/components/Inputs/ActionAppBar";
import TextFieldAppBar from "@/components/Inputs/TextFieldAppBar";
import { NavigationItem, NavLinkProps } from "@/components/Navigation/NavigationMenu/NavigationMenu";
import NavLinkItem from "@/components/Navigation/NavigationMenu/NavLinkItem";
import useMenu from "@/hooks/useMenu";

interface AppBarProps extends PropsWithChildren {
  NavLink?: (props: NavLinkProps) => ReactNode;
  Avatar?: ReactNode;
  Action?: ReactNode;
  Search?: ReactNode;
  Logo?: ReactNode;
  position?: "fixed" | "absolute" | "sticky" | "static" | "relative";
  elevation?: number;
  sx?: SxProps;
  onClickBurger?(): void;
  actionProps?: ButtonProps;
  logoProps?: LogoProps;
  searchProps?: TextFieldProps;
  avatarProps?: Omit<AvatarProps, "onClick"> & {
    menuItems?: NavigationItem[];
    onClick?: MouseEventHandler<HTMLButtonElement>;
    "data-testid"?: string;
  };
}

const DEFAULT_AVATAR_MENU_ID = "appBarAvatarMenu";

const AppBar = ({
  Avatar: AvatarComponent,
  Search: SearchComponent,
  Action: ActionComponent,
  Logo: LogoComponent,
  NavLink,
  avatarProps,
  searchProps,
  actionProps,
  logoProps,
  children,
  onClickBurger,
  sx,
  position = "static",
  elevation = 0,
}: AppBarProps) => {
  const { breakpoints } = useTheme();
  const { closeMenu, isMenuOpen, anchorMenu, openMenu } = useMenu<HTMLButtonElement>();
  const { menuItems, onClick: onAvatarClick, ...avatarPropsWithoutItems } = avatarProps || {};
  const isMobile = useMediaQuery(breakpoints.down("sm"));
  const isTablet = useMediaQuery(breakpoints.between("sm", "md"));
  const isSmallScreen = isMobile || isTablet;

  const styles = {
    logoContainer: {
      a: {
        display: "flex",
      },
      alignItems: "center",
      display: "flex",
    },
    menuItem: {
      "& > a": {
        alignItems: "center",
        color: "inherit",
        display: "flex",
        paddingX: 2,
        paddingY: 1,
        textDecoration: "none",
        width: "100%",
      },
      "& > a.active": {
        backgroundColor: ({ palette }: Theme) => alpha(palette.primary.main, palette.action.selectedOpacity),
      },
      "& > a.active:hover": {
        backgroundColor: ({ palette }: Theme) => alpha(palette.primary.main, palette.action.selectedOpacity + palette.action.hoverOpacity),
      },
      overflow: "hidden",
      padding: "0 !important",
    },
    paddingX: isMobile ? 1 : 3,
    ...sx,
  };

  if (children) {
    return (
      <AppBarMui position={position} elevation={elevation} sx={styles}>
        {children}
      </AppBarMui>
    );
  }

  return (
    <>
      <AppBarMui position={position} elevation={elevation} sx={styles}>
        <Stack direction="row" sx={{ alignItems: "center", height: "100%", width: "100%" }} spacing={1}>
          {isSmallScreen && (
            <IconButton onClick={onClickBurger} edge="end" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          )}
          {isSmallScreen || LogoComponent === null ? null : (
            <Box sx={styles.logoContainer}>{LogoComponent || <Logo mode="dark" {...logoProps} />}</Box>
          )}
          <Stack alignItems="center" direction="row" justifyContent={isMobile ? "flex-end" : "center"} spacing={1} flex={1}>
            {isMobile && (ActionComponent === null ? null : ActionComponent || (actionProps ? <ActionAppBar {...actionProps} /> : null))}
            {SearchComponent === null ? null : SearchComponent || <TextFieldAppBar {...searchProps} />}
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            {!isMobile && (ActionComponent === null ? null : ActionComponent || (actionProps ? <ActionAppBar {...actionProps} /> : null))}
            {AvatarComponent === null
              ? null
              : AvatarComponent || (
                  <IconButton
                    sx={{ p: 0 }}
                    disableRipple
                    aria-haspopup={menuItems ? "menu" : undefined}
                    aria-controls={menuItems && isMenuOpen ? DEFAULT_AVATAR_MENU_ID : undefined}
                    aria-expanded={menuItems ? isMenuOpen : undefined}
                    onClick={(e) => {
                      openMenu(e);
                      onAvatarClick?.(e);
                    }}
                  >
                    <AvatarAppBar {...avatarPropsWithoutItems} />
                  </IconButton>
                )}
          </Stack>
        </Stack>
      </AppBarMui>
      {menuItems && (
        <Menu
          id={DEFAULT_AVATAR_MENU_ID}
          anchorEl={anchorMenu}
          open={isMenuOpen}
          onClose={closeMenu}
          anchorOrigin={{
            horizontal: "right",
            vertical: "bottom",
          }}
          slotProps={{
            backdrop: {
              invisible: false,
            },
            // Close the menu on any item click (covers custom element children, not just object items).
            list: {
              onClick: closeMenu,
            },
            paper: {
              sx: {
                minWidth: 260,
              },
            },
          }}
        >
          {menuItems?.map((item, index) => {
            // Is React Element then return it
            if (isValidElement(item)) {
              if (item.key) {
                return item;
              }

              const key = `${menuItems}-${index}`;
              return cloneElement(item, { key }); // Add key to the element
            }

            // Is Object then return NavLinkItem
            if (item && typeof item === "object" && "url" in item) {
              const { url, label, icon, active, end, state } = item;
              const key = `${url}-${label}-${index}`;

              return (
                <MenuItem key={key} sx={styles.menuItem} onClick={closeMenu}>
                  <NavLinkItem url={url} key={key} component={NavLink} active={active} end={end} state={state}>
                    {icon && <ListItemIcon>{icon}</ListItemIcon>}
                    {label && <ListItemText>{label}</ListItemText>}
                  </NavLinkItem>
                </MenuItem>
              );
            }

            return null;
          })}
        </Menu>
      )}
    </>
  );
};

export default AppBar;
