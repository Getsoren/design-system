import { Box, Chip, Collapse, Fade, List, ListItem, Stack, SvgIcon, Theme, Tooltip, Typography } from "@mui/material";
import { isValidElement, KeyboardEvent, useContext, useState } from "react";
import {
  NavigationGroupItem,
  NavigationItem,
  NavigationMenuContext,
  ObjectNavigationItem,
} from "@/components/Navigation/NavigationMenu/NavigationMenu";
import NavLinkItem from "@/components/Navigation/NavigationMenu/NavLinkItem";
import {
  NAVIGATION_DENSITY_TOKENS,
  type NavigationDensity,
  type NavigationDensityTokens,
} from "@/components/Navigation/NavigationMenu/utils/navigationDensity";
import pickDataAttributes from "@/utils/pickDataAttributes";

export interface SideBarMenuProps {
  items?: NavigationItem[];
}

const buildStyles = (tokens: NavigationDensityTokens) => ({
  groupHeader: {
    alignItems: "center",
    color: "text.secondary",
    display: "flex",
    fontWeight: 600,
    justifyContent: "space-between",
    minHeight: tokens.groupHeaderMinHeight,
    paddingX: 1.25,
    paddingY: 0.5,
    textTransform: "uppercase",
    userSelect: "none",
    width: "100%",
  },
  groupItem: {
    listStyle: "none",
    mt: tokens.groupItemMarginTop,
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
      minHeight: tokens.itemMinHeight,
      paddingX: 1.25,
      paddingY: tokens.itemPaddingY,
      textAlign: "left",
      textDecoration: "none",
      width: "100%",
    },
    mt: tokens.listMarginTop,
  },
});

/** Both densities are built once: an sx object rebuilt on every render would defeat the emotion cache. */
const STYLES: Record<NavigationDensity, ReturnType<typeof buildStyles>> = {
  compact: buildStyles(NAVIGATION_DENSITY_TOKENS.compact),
  standard: buildStyles(NAVIGATION_DENSITY_TOKENS.standard),
};

// The chip is absolutely positioned inside the 24px icon wrapper: shrink-to-fit width plus MUI's default
// `max-width: 100%` would clamp it to 24px and ellipsize the label, so let it size to its content.
const chipCollapsedSx = { maxWidth: "none", position: "absolute", right: -20, top: -12, width: "max-content" };

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
  const { NavLink, density, isCollapsed } = useContext(NavigationMenuContext);
  const styles = STYLES[density];
  const { count, countColor, tag, tagColor, url, label, icon, active, disabled, target, end, state } = item;

  return (
    <NavLinkItem
      url={url}
      component={NavLink}
      active={active}
      disabled={disabled}
      target={target}
      end={end}
      state={state}
      {...pickDataAttributes(item)}
    >
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
              {/* `label` is a text node: margin-based Stack spacing skips it, so use flex gap instead. */}
              <Stack direction="row" component="span" alignItems="center" sx={{ gap: 1 }}>
                {label}
                {tag && <Chip color={tagColor || "info"} size="small" label={tag} variant="rounded" />}
              </Stack>
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
  const { density, isMobile, isCollapsed } = useContext(NavigationMenuContext);
  const { listItemPaddingY } = NAVIGATION_DENSITY_TOKENS[density];
  const { groupLabel, items, collapsible = false, defaultExpanded = true } = group;
  const [expanded, setExpanded] = useState(defaultExpanded);
  const styles = STYLES[density];

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
      {/* Animate the header height when the sidebar collapses so items below slide smoothly instead of jumping. */}
      <Collapse in={!isCollapsed}>
        <Box
          component="div"
          role={collapsible && !isCollapsed ? "button" : undefined}
          tabIndex={collapsible && !isCollapsed ? 0 : undefined}
          aria-expanded={collapsible && !isCollapsed ? expanded : undefined}
          onClick={toggle}
          onKeyDown={handleKeyDown}
          sx={{ ...styles.groupHeader, cursor: collapsible ? "pointer" : "default" }}
        >
          <Typography variant="caption" component="span" fontWeight="inherit" letterSpacing={0.5} color="inherit">
            {groupLabel}
          </Typography>
          {collapsible && <ChevronIcon expanded={expanded} />}
        </Box>
      </Collapse>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List disablePadding component="ul">
          {visibleItems.map((child, index) => (
            <ListItem key={`${child.url}-${child.label}-${index}`} disableGutters sx={{ paddingY: listItemPaddingY }}>
              <SideBarNavRow item={child} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </Box>
  );
};

const SideBarMenu = ({ items }: SideBarMenuProps) => {
  const { density, isMobile } = useContext(NavigationMenuContext);
  const { listItemPaddingY } = NAVIGATION_DENSITY_TOKENS[density];
  const styles = STYLES[density];

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
                <ListItem key={key} disableGutters sx={{ paddingY: listItemPaddingY }}>
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
