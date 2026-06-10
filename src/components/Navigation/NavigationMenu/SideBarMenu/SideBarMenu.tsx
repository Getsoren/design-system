import { Box, Chip, Collapse, Fade, List, ListItem, Stack, SvgIcon, Theme, Tooltip, Typography } from "@mui/material";
import { isValidElement, KeyboardEvent, ReactElement, useContext, useState } from "react";
import {
  NavigationGroupItem,
  NavigationItem,
  NavigationMenuContext,
  NavLinkProps,
  ObjectNavigationItem,
} from "@/components/Navigation/NavigationMenu";
import NavLinkItem from "@/components/Navigation/NavigationMenu/NavLinkItem";

export interface SideBarMenuProps {
  NavLink?: (props: NavLinkProps) => ReactElement | null;
  translate?: (str: string) => string;
  items?: NavigationItem[];
}

const styles = {
  groupHeader: {
    alignItems: "center",
    color: "text.secondary",
    display: "flex",
    fontWeight: 600,
    justifyContent: "space-between",
    minHeight: 32,
    paddingX: 1.25,
    paddingY: 0.5,
    textTransform: "uppercase",
    userSelect: "none",
    width: "100%",
  },
  groupItem: {
    listStyle: "none",
    mt: 2,
  },
  iconWrapper: {
    alignItems: "center",
    display: "flex",
    height: 24,
    justifyContent: "center",
    minWidth: 24,
  },
  list: {
    "& [aria-disabled='true']": {
      cursor: "default",
    },
    "& button": {
      background: "none !important",
    },
    "& button, & a": {
      color: "text.primary",
    },
    "& button, & a, & [aria-disabled='true']": {
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
      alignItems: "center",
      borderColor: "transparent",
      borderRadius: ({ shape }: Theme) => `${shape.borderRadius}px`,
      borderStyle: "solid",
      borderWidth: 1,
      display: "flex",
      fontSize: 16,
      justifyContent: "flex-start",
      minHeight: 42,
      paddingX: 1.25,
      paddingY: 1,
      textAlign: "left",
      textDecoration: "none",
      width: "100%",
    },
    mt: 3,
  },
};

const chipCollapsedSx = { position: "absolute", right: -20, top: -12 };

const ChevronIcon = ({ expanded }: { expanded: boolean }) => (
  <SvgIcon
    fontSize="small"
    viewBox="0 0 24 24"
    sx={{ color: "text.secondary", transform: expanded ? "rotate(0deg)" : "rotate(-90deg)", transition: "transform 150ms" }}
  >
    <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
  </SvgIcon>
);

const isItemHidden = (item: NavigationItem, isMobile?: boolean) => {
  const hiddenOnMobile = !!(item && typeof item === "object" && "hideOnMobile" in item && isMobile && item.hideOnMobile);
  const noAccess = !!(item && typeof item === "object" && "hasAccess" in item && !item.hasAccess);

  return hiddenOnMobile || noAccess;
};

const isGroupItem = (item: NavigationItem): item is NavigationGroupItem =>
  !!item && typeof item === "object" && !isValidElement(item) && "items" in item && Array.isArray((item as NavigationGroupItem).items);

/**
 * Renders the inner content (icon, label, count) of a single navigation link.
 * Shared between top-level items and grouped items.
 */
const SideBarNavRow = ({ item }: { item: ObjectNavigationItem }) => {
  const { NavLink, isCollapsed } = useContext(NavigationMenuContext);
  const { count, countColor, url, label, icon, active, disabled, target, end, state } = item;

  return (
    <NavLinkItem url={url} component={NavLink} active={active} disabled={disabled} target={target} end={end} state={state}>
      <Tooltip title={isCollapsed ? label : ""} placement="right">
        <Stack direction="row" component="span" spacing={1.5} width="100%" alignItems="center">
          {icon ? (
            <Box component="div" sx={{ ...styles.iconWrapper, position: "relative" }}>
              {icon}
              {isCollapsed && !!count && (
                <Chip color={countColor || "warning"} size="small" label={count} variant="rounded" sx={chipCollapsedSx} />
              )}
            </Box>
          ) : (
            isCollapsed && (
              <Box component="div" sx={{ ...styles.iconWrapper, position: "relative" }}>
                {typeof label === "string" ? label.charAt(0) : ""}
                {!!count && <Chip color={countColor || "warning"} size="small" label={count} variant="rounded" sx={chipCollapsedSx} />}
              </Box>
            )
          )}
          <Fade in={!isCollapsed}>
            <Stack direction="row" justifyContent="space-between" flex={1} whiteSpace="nowrap">
              {label}
              {!!count && <Chip color={countColor || "warning"} size="small" label={count} variant="rounded" />}
            </Stack>
          </Fade>
        </Stack>
      </Tooltip>
    </NavLinkItem>
  );
};

/**
 * Renders a labelled section grouping several navigation links.
 * The header can optionally collapse/expand the group. When the sidebar is
 * collapsed to its icon rail, the header is hidden and the icons stay visible.
 */
const SideBarMenuGroup = ({ group }: { group: NavigationGroupItem }) => {
  const { isMobile, isCollapsed } = useContext(NavigationMenuContext);
  const { groupLabel, items, collapsible = false, defaultExpanded = true } = group;
  const [expanded, setExpanded] = useState(defaultExpanded);

  const visibleItems = items.filter((child) => !isItemHidden(child, isMobile));

  if (!visibleItems.length) {
    return null;
  }

  // When collapsed to the icon rail there is no header to toggle, so keep icons visible.
  const open = isCollapsed || !collapsible || expanded;

  const toggle = () => collapsible && setExpanded((prev) => !prev);
  const handleKeyDown = (event: KeyboardEvent) => {
    if (collapsible && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      toggle();
    }
  };

  return (
    <Box component="li" sx={styles.groupItem}>
      {!isCollapsed && (
        <Box
          component="div"
          role={collapsible ? "button" : undefined}
          tabIndex={collapsible ? 0 : undefined}
          aria-expanded={collapsible ? expanded : undefined}
          onClick={toggle}
          onKeyDown={handleKeyDown}
          sx={{ ...styles.groupHeader, cursor: collapsible ? "pointer" : "default" }}
        >
          <Typography variant="caption" component="span" fontWeight="inherit" letterSpacing={0.5} color="inherit">
            {groupLabel}
          </Typography>
          {collapsible && <ChevronIcon expanded={expanded} />}
        </Box>
      )}
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List disablePadding component="ul">
          {visibleItems.map((child, index) => (
            <ListItem key={`${child.url}-${child.label}-${index}`} disableGutters sx={{ paddingY: 0.5 }}>
              <SideBarNavRow item={child} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </Box>
  );
};

const SideBarMenu = ({ items, ...props }: SideBarMenuProps) => {
  const { NavLink = props.NavLink, isMobile } = useContext(NavigationMenuContext);

  return (
    <Box px={2} component="nav">
      <List sx={{ ...styles.list }}>
        {items
          ?.filter((item) => !isItemHidden(item, isMobile))
          .map((item, index) => {
            // Is React Element then return it
            if (isValidElement(item)) {
              return item;
            }

            // Is a group then render a labelled section
            if (isGroupItem(item)) {
              return <SideBarMenuGroup key={`group-${item.groupLabel}-${index}`} group={item} />;
            }

            // Is Object then return NavLinkItem
            if (item && typeof item === "object" && "label" in item) {
              const key = `${item.url}-${item.label}-${index}`;

              return (
                <ListItem key={key} disableGutters sx={{ paddingY: 0.5 }}>
                  <SideBarNavRow item={item} />
                </ListItem>
              );
            }

            return null;
          })}
      </List>
    </Box>
  );
};

export default SideBarMenu;
