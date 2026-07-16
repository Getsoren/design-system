import { ReactNode } from "react";

/**
 * Built-in UI strings; each falls back to the design-system locale (en/fr) when not overridden.
 */
export interface BookingTimelineLabels {
  /** Status tooltip of a closed event. */
  closed: string;
  /** Status tooltip of an open event. */
  open: string;
}

/** Début / Fin / Livraison / Reprise milestone on the rail. */
export interface BookingTimelineAnchor {
  /** Small uppercase grey kicker above the title (e.g. "Début"). */
  eyebrow?: string;
  /** Main line — typically the formatted date (e.g. "Lundi 3 juin"). */
  title: string;
  /** Smaller muted text inline after the title (e.g. "(Livraison 8h - 12h)"). */
  titleSuffix?: string;
  /** Colours the title in warning (e.g. overdue end date). */
  warning?: boolean;
  /** Filled teal node (milestone reached) vs hollow grey ring (still to come). */
  reached?: boolean;
  /** Rendered below the title (e.g. the overdue extend / terminate call to action). */
  content?: ReactNode;
}

export interface BookingTimelineUser {
  avatar?: string | null;
  /** Avatar fallback when there is no image. */
  initials?: string;
}

export interface BookingTimelinePhoto {
  src: string;
  name?: string;
}

/** One chronological event row between the bookends. */
export interface BookingTimelineEvent {
  key: string;
  /** Event name; may embed custom content (e.g. a coloured quantity delta). */
  label: ReactNode;
  /** Plain-text version of the label, shown in the overflow tooltip when the name is truncated. */
  labelText: string;
  /** Neutral icon shown on the rail for events without an open/closed status. */
  icon?: ReactNode;
  /** Renders the flag status node — green when closed, orange when open — with its tooltip. */
  status?: "open" | "closed";
  /** Right-aligned formatted date (e.g. "5 juin"). */
  date?: string;
  /** Declarant avatar, next to the date. */
  user?: BookingTimelineUser;
  /** Tooltip of the avatar + date cluster (e.g. "Léa Girard · 09:15"). */
  tooltip?: string;
  /** Photo thumbnails, stacked as a pile before the avatar. */
  photos?: BookingTimelinePhoto[];
  /** Makes the row clickable and shows the chevron. */
  onClick?: () => void;
}

export interface BookingTimelineProps {
  /** Rental start bookend. */
  start?: BookingTimelineAnchor;
  /** Rental end bookend. */
  end?: BookingTimelineAnchor;
  /** Delivery bookend above the start — only when it happens on a different day. */
  delivery?: BookingTimelineAnchor;
  /** Retrieval bookend below the end — only when it happens on a different day. */
  retrieval?: BookingTimelineAnchor;
  /** Chronological events between the bookends. */
  events?: BookingTimelineEvent[];
  /** If true, a skeleton loading state is displayed. */
  isLoading?: boolean;
  /** Message displayed when there is nothing to show. */
  emptyMessage?: string;
  /** Override the built-in labels (e.g. to plug the host app's i18n). */
  labels?: Partial<BookingTimelineLabels>;
  /** Data attributes for testing purposes. */
  "data-test"?: string;
  /** Data attributes for testing purposes. */
  "data-testid"?: string;
}
