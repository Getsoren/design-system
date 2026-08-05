import type { ReactNode } from "react";
import type { ViewMode } from "@/components/DataDisplay/PlanningTimeline/utils/timeScale";

export type PlanningTimelineViewMode = ViewMode;

/**
 * MUI palette color driving a bar's hue; "default" renders muted (grey).
 */
export type PlanningTimelineStatusColor = "default" | "error" | "info" | "success" | "warning";

/**
 * An incident (e.g. a breakdown) rendered as a hatched day-wide segment on the bar.
 */
export interface PlanningTimelineIncident {
  /**
   * Day the incident occurred — the whole day is hatched on the bar
   */
  incidentDate: string | Date;
}

/**
 * A collapsible section header grouping resources (e.g. an equipment status). Extend this interface
 * to attach your own domain data and get it back, typed, in `renderGroup` and `onGroupClick`.
 */
export interface PlanningTimelineGroup {
  /**
   * Unique id, referenced by resources via their `groupId`
   */
  id: string;
  /**
   * Text displayed in the group header
   */
  name: string;
  /**
   * Whether the group's resources are hidden. Toggle it from `onGroupClick` to make headers collapsible.
   */
  collapsed?: boolean;
  /**
   * Count shown next to the name. Defaults to the number of resources in the group (override e.g. when paginating).
   */
  childCount?: number;
  /**
   * The group's data is being fetched.
   */
  loading?: boolean;
}

/**
 * A timeline resource (a left-column cell and its horizontal track), e.g. one equipment. A resource
 * carries zero or more task bars — a resource without any task renders an empty track (e.g. an idle
 * equipment). Extend this interface to attach your own domain data and get it back, typed, in
 * `renderResource` and `onResourceClick`.
 */
export interface PlanningTimelineResource {
  /**
   * Unique id, referenced by tasks via their `resourceId`
   */
  id: string;
  /**
   * Text displayed in the left-column cell
   */
  name: string;
  /**
   * Id of the `groups` entry this resource belongs to; omit for an ungrouped top-level resource.
   */
  groupId?: string;
}

/**
 * A bar on a resource's track, e.g. one booking. Bars paint in array order (later tasks above
 * earlier ones when they overlap). Extend this interface to attach your own domain data and get it
 * back, typed, in every render prop and callback.
 */
export interface PlanningTimelineTask {
  /**
   * Unique id of the task
   */
  id: string;
  /**
   * Id of the `resources` entry this bar is drawn on.
   */
  resourceId: string;
  /**
   * Text displayed inside the bar (default `renderBar` content)
   */
  name: string;
  /**
   * Start of the bar
   */
  start: Date;
  /**
   * End of the bar
   */
  end: Date;
  /**
   * Incidents rendered as red hatched day-wide segments on the bar.
   */
  incidents?: PlanningTimelineIncident[];
  /**
   * Original planned end (before any overdue extension of `end`).
   */
  plannedEnd?: Date;
  /**
   * Task past its planned end — the segment `plannedEnd` → `end` is hatched in warning.
   */
  overdue?: boolean;
  /**
   * MUI palette color of the bar. @default "default"
   */
  statusColor?: PlanningTimelineStatusColor;
}

/**
 * Context given to `renderGroup` for a group header cell.
 */
export interface PlanningTimelineGroupContext<G extends PlanningTimelineGroup = PlanningTimelineGroup> {
  /**
   * Forwarded `onGroupClick` — call it to make the whole header clickable (e.g. a collapse toggle).
   */
  onJump: (group: G) => void;
  /**
   * True when the left column is folded away
   */
  sidebarCollapsed: boolean;
  /**
   * `group.childCount` when set, otherwise the number of resources in the group.
   */
  childCount: number;
}

/**
 * Context given to `renderResource` for a left-column resource cell.
 */
export interface PlanningTimelineResourceContext<
  R extends PlanningTimelineResource = PlanningTimelineResource,
  T extends PlanningTimelineTask = PlanningTimelineTask,
> {
  /**
   * Forwarded `onResourceClick` — call it to make the whole cell clickable like the bars.
   */
  onJump: (resource: R) => void;
  /**
   * True when one of the resource's tasks is selected (`isTaskSelected`).
   */
  selected: boolean;
  /**
   * True when the left column is folded away
   */
  sidebarCollapsed: boolean;
  /**
   * The resource's tasks (its bars), e.g. to summarize them in the cell.
   */
  tasks: T[];
}

/**
 * Context given to `renderBar` for a bar's inner content.
 */
export interface PlanningTimelineBarContext {
  /**
   * True when the left column is folded away
   */
  sidebarCollapsed: boolean;
}

/**
 * localStorage keys used to persist the timeline UI preferences.
 */
export interface PlanningTimelineLocalStorageKeys {
  /**
   * Key storing the selected view mode. @default "soren-planning-timeline-view-mode"
   */
  viewMode: string;
}

/**
 * Built-in UI strings; each falls back to the design-system locale (en/fr) when not overridden.
 */
export interface PlanningTimelineLabels {
  /**
   * "Day" option of the view-mode toggle
   */
  day: string;
  /**
   * "Week" option of the view-mode toggle
   */
  week: string;
  /**
   * "Month" option of the view-mode toggle
   */
  month: string;
  /**
   * "Year" option of the view-mode toggle
   */
  year: string;
  /**
   * Toolbar button that re-centres the timeline on today
   */
  today: string;
  /**
   * Message displayed when there is no resource to show
   */
  noResult: string;
  /**
   * Accessible name of the button that folds the left column away
   */
  collapseSidebar: string;
  /**
   * Accessible name of the button that brings the left column back
   */
  expandSidebar: string;
}

export interface PlanningTimelineProps<
  G extends PlanningTimelineGroup = PlanningTimelineGroup,
  R extends PlanningTimelineResource = PlanningTimelineResource,
  T extends PlanningTimelineTask = PlanningTimelineTask,
> {
  /**
   * Collapsible section headers; resources reference them via `groupId`. Omit for a flat list of resources.
   */
  groups?: G[];
  /**
   * The timeline resources (left-column cells); tasks reference them via `resourceId`.
   */
  resources?: R[];
  /**
   * The bars; each is drawn on the resource matching its `resourceId`.
   */
  tasks?: T[];
  /**
   * Whether the timeline is loading data — shows a skeleton and disables interactions.
   */
  isLoading?: boolean;
  /**
   * Click a bar — e.g. open the task's detail view.
   */
  onTaskClick?: (task: T) => void;
  /**
   * Click a resource's left-column cell.
   */
  onResourceClick?: (resource: R) => void;
  /**
   * Click a group header — e.g. toggle its `collapsed` flag.
   */
  onGroupClick?: (group: G) => void;
  /**
   * Drag the right edge of a bar — extend the task to `newEnd`. Omit to disable resizing.
   */
  onBarResize?: (task: T, newEnd: Date) => void;
  /**
   * Group header cell renderer. Defaults to the group name, its resource count and a collapse chevron.
   */
  renderGroup?: (group: G, context: PlanningTimelineGroupContext<G>) => ReactNode;
  /**
   * Left-column resource cell renderer. Defaults to the resource name.
   */
  renderResource?: (resource: R, context: PlanningTimelineResourceContext<R, T>) => ReactNode;
  /**
   * Inner content of a bar. Defaults to the task name.
   */
  renderBar?: (task: T, context: PlanningTimelineBarContext) => ReactNode;
  /**
   * Content of the tooltip shown while hovering a bar. Omit to disable the tooltip.
   */
  renderTooltip?: (task: T) => ReactNode;
  /**
   * Whether a task is the currently selected one (e.g. its detail view is open).
   */
  isTaskSelected?: (task: T) => boolean;
  /**
   * Opaque value that changes when filters change — the timeline re-centres on today when it does.
   */
  recenterKey?: string;
  /**
   * Extra content rendered in the toolbar, just left of the view-mode toggle (e.g. a grouping switch).
   */
  toolbarActions?: ReactNode;
  /**
   * Extra content rendered in the toolbar right after the "today" button (e.g. the view's filters),
   * where it reads as part of the date controls instead of crowding the view-mode toggle.
   */
  toolbarLeadingActions?: ReactNode;
  /**
   * Title of the left (frozen) column.
   */
  sidebarTitle?: string;
  /**
   * BCP 47 locale for the axis and toolbar date labels (e.g. "fr"). @default "en"
   */
  locale?: string;
  /**
   * Override the built-in labels (e.g. to plug the host app's i18n).
   */
  labels?: Partial<PlanningTimelineLabels>;
  /**
   * Initial zoom level, when none is persisted yet. @default "day"
   */
  defaultViewMode?: PlanningTimelineViewMode;
  /**
   * localStorage keys used to persist UI preferences. Override them to namespace the keys per
   * screen/app so timelines don't share their saved view.
   * @default { viewMode: "soren-planning-timeline-view-mode" }
   */
  localStorageKeys?: Partial<PlanningTimelineLocalStorageKeys>;
  /**
   * Width (px) of the left column. @default 300
   */
  sidebarWidth?: number;
  /**
   * Height (px) of every row (group headers and resources alike). @default 36
   */
  rowHeight?: number;
}
