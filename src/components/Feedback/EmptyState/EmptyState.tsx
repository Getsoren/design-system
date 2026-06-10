import { Box, Stack, Typography } from "@mui/material";
import { ElementType, ReactNode } from "react";
import EmptyStateIcon from "@/components/DataDisplay/Icons/EmptyStateIcon";
import Button, { ButtonProps } from "@/components/Inputs/Button";

export interface EmptyStateProps<RootComponent extends ElementType = "button"> {
  /** Illustration displayed above the description. Defaults to the empty state illustration. */
  icon?: ReactNode;
  /** Main message explaining the empty state */
  description?: ReactNode;
  /** Secondary message displayed below the description */
  subtitle?: ReactNode;
  /** Label of the action button. The button is only rendered when provided. */
  actionLabel?: ReactNode;
  /**
   * Props forwarded to the action button. Polymorphic like the Button component:
   * pass a routing component via `component` (e.g. `{ component: Link, to: "/home" }`).
   */
  actionProps?: ButtonProps<RootComponent>;
  /** Free slot rendered below the action button for fully custom content */
  children?: ReactNode;
}

/**
 * Centered empty state with an illustration, a description and an optional action button.
 * The action button accepts any root component, so consumers can plug their router link
 * without coupling the design system to a routing library.
 */
const EmptyState = <RootComponent extends ElementType = "button">({
  icon,
  description,
  subtitle,
  actionLabel,
  actionProps,
  children,
}: EmptyStateProps<RootComponent>) => (
  <Stack height="100%" alignItems="center" justifyContent="center" data-testid="empty-state">
    <Box mb={3}>{icon ?? <EmptyStateIcon />}</Box>
    {description && (
      <Typography variant="h6" align="center" mb={subtitle ? 1 : 4}>
        {description}
      </Typography>
    )}
    {subtitle && (
      <Typography variant="body2" align="center" color="text.secondary" mb={4}>
        {subtitle}
      </Typography>
    )}
    {actionLabel && (
      <Button variant="contained" {...actionProps}>
        {actionLabel}
      </Button>
    )}
    {children}
  </Stack>
);

export default EmptyState;
