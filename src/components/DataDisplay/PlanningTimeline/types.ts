import type { ReactNode } from "react";
import type { ViewMode } from "@/components/DataDisplay/PlanningTimeline/utils/timeScale";

export type PlanningTimelineViewMode = ViewMode;

export type PlanningTimelineTaskType = "task" | "project";

/** MUI palette color driving a bar's hue; "default" renders muted (grey). */
export type PlanningTimelineStatusColor = "default" | "error" | "info" | "success" | "warning";

/** An incident (e.g. a breakdown) rendered as a hatched day-wide segment on the bar. */
export interface PlanningTimelineIncident {
  incidentDate: string | Date;
}

/**
 * A timeline row. A "project" row is a group header (collapsible), a "task" row is a bar on the
 * time axis. Extend this interface to attach your own domain data and get it back, typed, in every
 * render prop and callback.
 */
export interface PlanningTimelineTask {
  id: string;
  type: PlanningTimelineTaskType;
  name: string;
  start: Date;
  end: Date;
  /** For project rows: whether its children rows are collapsed. */
  hideChildren?: boolean;
  /** For task rows: id of the parent project (group) row. */
  project?: string;
  /**
   * For task rows: tasks sharing the same `rowId` (within the same `project` group) are laid out on
   * one single row, each keeping its own bar — e.g. every booking of one equipment on one line. The
   * left-column cell is rendered from the row's first task; bars paint in array order (later tasks
   * above earlier ones when they overlap). Omit to keep the default one-bar-per-row layout.
   */
  rowId?: string;
  /**
   * For task rows: render the row without its bar. Use it as a placeholder to show an empty row —
   * e.g. an idle equipment with no booking. Its dates only feed the time axis range.
   */
  hideBar?: boolean;
  /** Incidents rendered as red hatched day-wide segments on the bar. */
  incidents?: PlanningTimelineIncident[];
  /** Original planned end (before any overdue extension of `end`). */
  plannedEnd?: Date;
  /** Task past its planned end — the segment `plannedEnd` → `end` is hatched in warning. */
  overdue?: boolean;
  /** MUI palette color of the bar. @default "default" */
  statusColor?: PlanningTimelineStatusColor;
  /** For project (group header) rows: number of task rows in the group. */
  childCount?: number;
  /** For project rows: the group's data is being fetched. */
  loading?: boolean;
}

/** Context given to `renderRow` for a left-column cell. */
export interface PlanningTimelineRowContext<T extends PlanningTimelineTask = PlanningTimelineTask> {
  /** Forwarded `onClick` — call it to make the whole cell clickable like the bar. */
  onJump: (task: T) => void;
  selected: boolean;
  sidebarCollapsed: boolean;
}

/** Context given to `renderBar` for a bar's inner content. */
export interface PlanningTimelineBarContext {
  sidebarCollapsed: boolean;
}

/** localStorage keys used to persist the timeline UI preferences. */
export interface PlanningTimelineLocalStorageKeys {
  /** Key storing the selected view mode. @default "soren-planning-timeline-view-mode" */
  viewMode: string;
}

/** Built-in UI strings; each falls back to the design-system locale (en/fr) when not overridden. */
export interface PlanningTimelineLabels {
  day: string;
  week: string;
  month: string;
  year: string;
  today: string;
  noResult: string;
}

export interface PlanningTimelineProps<T extends PlanningTimelineTask = PlanningTimelineTask> {
  tasks?: T[];
  isLoading?: boolean;
  /** Click a bar — e.g. open the row's detail view. */
  onClick?: (task: T) => void;
  /** Drag the right edge of a bar — extend the task to `newEnd`. Omit to disable resizing. */
  onBarResize?: (task: T, newEnd: Date) => void;
  /** Left-column cell renderer (group header or task row). Defaults to the task name. */
  renderRow?: (task: T, context: PlanningTimelineRowContext<T>) => ReactNode;
  /** Inner content of a bar. Defaults to the task name. */
  renderBar?: (task: T, context: PlanningTimelineBarContext) => ReactNode;
  renderTooltip?: (task: T) => ReactNode;
  /** Whether a task row is the currently selected one (e.g. its detail view is open). */
  isTaskSelected?: (task: T) => boolean;
  /** Opaque value that changes when filters change — the timeline re-centres on today when it does. */
  recenterKey?: string;
  /** Extra content rendered in the toolbar, just left of the view-mode toggle (e.g. a grouping switch). */
  toolbarActions?: ReactNode;
  /** Title of the left (frozen) column, also used as the collapse button tooltip. */
  sidebarTitle?: string;
  /** BCP 47 locale for the axis and toolbar date labels (e.g. "fr"). @default "en" */
  locale?: string;
  /** Override the built-in labels (e.g. to plug the host app's i18n). */
  labels?: Partial<PlanningTimelineLabels>;
  /** Initial zoom level, when none is persisted yet. @default "day" */
  defaultViewMode?: PlanningTimelineViewMode;
  /**
   * localStorage keys used to persist UI preferences. Override them to namespace the keys per
   * screen/app so timelines don't share their saved view.
   * @default { viewMode: "soren-planning-timeline-view-mode" }
   */
  localStorageKeys?: Partial<PlanningTimelineLocalStorageKeys>;
  /** Width (px) of the left column. @default 300 */
  sidebarWidth?: number;
  /** Height (px) of every row. @default 56 */
  rowHeight?: number;
}
