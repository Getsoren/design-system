import { Box, Typography } from "@mui/material";
import { MouseEvent, ReactNode, useContext } from "react";
import { NavigationMenuContext, NavLinkProps, ObjectNavigationItem } from "@/components/Navigation/NavigationMenu/NavigationMenu";
import pickDataAttributes from "@/utils/pickDataAttributes";

interface NavLinkItemProps extends Omit<ObjectNavigationItem, "label"> {
  children?: ReactNode;
  component?: (props: NavLinkProps) => ReactNode;
  onClick?: (event?: MouseEvent) => void;
  target?: string;
}

const NavLinkItem = ({ url, end, children, active, state, component, disabled, onClick, target, ...rest }: NavLinkItemProps) => {
  const { closeDrawerMenu } = useContext(NavigationMenuContext);
  const dataAttributes = pickDataAttributes(rest); // Only the `data-*` keys travel to the DOM: the rest of the item config (count, icon...) is rendering data

  const handleClick = (event?: MouseEvent) => {
    onClick?.(event);
    closeDrawerMenu?.();
  };

  if (disabled) {
    return (
      <Typography {...dataAttributes} component="div" color="text.disabled" aria-disabled="true" onClick={handleClick}>
        {children}
      </Typography>
    );
  }

  if (component && url) {
    const Component = component;
    return (
      <Component {...dataAttributes} onClick={handleClick} to={url} end={end} state={state} target={target}>
        {children}
      </Component>
    );
  }

  return (
    <Box
      {...dataAttributes}
      component="a"
      href={url}
      onClick={handleClick}
      className={active ? "active" : undefined}
      data-end={end}
      data-state={state}
      sx={{ cursor: "pointer" }}
      target={target}
    >
      {children}
    </Box>
  );
};

export default NavLinkItem;
