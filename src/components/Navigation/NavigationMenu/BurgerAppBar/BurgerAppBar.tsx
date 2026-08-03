import { AppBar, IconButton, Stack, Toolbar, useTheme } from "@mui/material";
import { cloneElement, ReactElement, useContext } from "react";
import MenuIcon from "@/components/DataDisplay/Icons/MenuIcon";
import { NavigationMenuContext } from "@/components/Navigation/NavigationMenu/NavigationMenu";

const cloneElementWithProps = <T extends Record<string, unknown>>(element: ReactElement, props: T): ReactElement =>
  cloneElement(element, props as any);

const BurgerAppBar = () => {
  const { openDrawerMenu, AppBar: AppBarComponent } = useContext(NavigationMenuContext);
  const { palette } = useTheme();
  const background = palette.mode === "dark" ? palette.background.default : palette.primary.black;
  const AppBarWithTrigger = AppBarComponent ? cloneElementWithProps(AppBarComponent, { onClickBurger: openDrawerMenu }) : AppBarComponent;

  if (AppBarComponent) {
    return AppBarWithTrigger;
  }

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background,
        borderBottom: ({ palette: paletteColor }) => `1px solid ${paletteColor.mode === "dark" ? paletteColor.divider : background}`,
      }}
    >
      <Toolbar component={Stack} direction="row" spacing={3} height="100%" justifyContent="space-between">
        <IconButton onClick={openDrawerMenu} edge="end" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default BurgerAppBar;
