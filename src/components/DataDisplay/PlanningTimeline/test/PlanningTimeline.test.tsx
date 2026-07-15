import { fireEvent, render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import PlanningTimeline from "../PlanningTimeline";
import type { PlanningTimelineTask } from "../types";

/** jsdom has no layout (elements measure 0×0) — give them a size so the virtualizer renders rows. */
const mockElementSize = () => {
  vi.spyOn(HTMLElement.prototype, "offsetHeight", "get").mockReturnValue(800);
  vi.spyOn(HTMLElement.prototype, "offsetWidth", "get").mockReturnValue(1200);
};

const tasks: PlanningTimelineTask[] = [
  { end: new Date(), hideChildren: false, id: "group-1", name: "Group 1", start: new Date(), type: "project" },
  {
    end: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    id: "task-1",
    name: "Task 1",
    project: "group-1",
    start: new Date(),
    statusColor: "success",
    type: "task",
  },
];

describe("Test <PlanningTimeline/>", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders the toolbar with the built-in English labels", () => {
    const { getByText } = render(<PlanningTimeline tasks={tasks} sidebarTitle="Equipment" />);
    expect(getByText("Today")).toBeInTheDocument();
    expect(getByText("Day")).toBeInTheDocument();
    expect(getByText("Week")).toBeInTheDocument();
    expect(getByText("Month")).toBeInTheDocument();
    expect(getByText("Year")).toBeInTheDocument();
    expect(getByText("Equipment")).toBeInTheDocument();
  });

  it("prefers the `labels` overrides over the built-in strings", () => {
    const { getByText, queryByText } = render(<PlanningTimeline tasks={tasks} labels={{ today: "Aujourd'hui" }} />);
    expect(getByText("Aujourd'hui")).toBeInTheDocument();
    expect(queryByText("Today")).not.toBeInTheDocument();
  });

  it("shows the empty state when there is no task", () => {
    const { getByText } = render(<PlanningTimeline tasks={[]} />);
    expect(getByText("No result")).toBeInTheDocument();
  });

  it("shows a skeleton while loading", () => {
    const { container, queryByText } = render(<PlanningTimeline isLoading />);
    expect(container.querySelector(".MuiSkeleton-root")).toBeInTheDocument();
    expect(queryByText("Today")).not.toBeInTheDocument();
  });

  it("persists the selected view mode under the custom localStorage key", () => {
    const { getByText } = render(<PlanningTimeline tasks={tasks} localStorageKeys={{ viewMode: "my-app.planningViewMode" }} />);
    fireEvent.click(getByText("Year"));
    expect(localStorage.getItem("my-app.planningViewMode")).toBe("year");
    expect(getByText("Year").closest("button")).toHaveClass("Mui-selected");
  });

  it("restores the persisted view mode on mount", () => {
    localStorage.setItem("soren-planning-timeline-view-mode", "month");
    const { getByText } = render(<PlanningTimeline tasks={tasks} />);
    expect(getByText("Month").closest("button")).toHaveClass("Mui-selected");
  });

  it("falls back to `defaultViewMode` when the stored value is invalid", () => {
    localStorage.setItem("soren-planning-timeline-view-mode", "bogus");
    const { getByText } = render(<PlanningTimeline tasks={tasks} defaultViewMode="week" />);
    expect(getByText("Week").closest("button")).toHaveClass("Mui-selected");
  });

  it("merges tasks sharing a rowId into a single row with one bar per task", () => {
    mockElementSize();

    const DAY = 24 * 60 * 60 * 1000;
    const multiBarTasks: PlanningTimelineTask[] = [
      { end: new Date(), id: "group-1", name: "Group 1", start: new Date(), type: "project" },
      {
        end: new Date(Date.now() + 2 * DAY),
        id: "booking-1",
        name: "Booking 1",
        project: "group-1",
        rowId: "equipment-1",
        start: new Date(),
        type: "task",
      },
      {
        end: new Date(Date.now() + 6 * DAY),
        id: "booking-2",
        name: "Booking 2",
        project: "group-1",
        rowId: "equipment-1",
        start: new Date(Date.now() + 4 * DAY),
        type: "task",
      },
    ];

    const { getByText, queryByText, getAllByText } = render(
      <PlanningTimeline tasks={multiBarTasks} renderBar={(task) => `bar:${task.id}`} renderRow={(task) => `row:${task.id}`} />,
    );

    expect(getByText("bar:booking-1")).toBeInTheDocument();
    expect(getByText("bar:booking-2")).toBeInTheDocument();
    expect(getAllByText(/^row:/)).toHaveLength(2); // the group header row + the merged equipment row
    expect(getByText("row:booking-1")).toBeInTheDocument();
    expect(queryByText("row:booking-2")).not.toBeInTheDocument();
  });

  it("renders toolbarActions in the toolbar", () => {
    const { getByText } = render(<PlanningTimeline tasks={tasks} toolbarActions={<button type="button">Group by</button>} />);
    expect(getByText("Group by")).toBeInTheDocument();
    expect(getByText("Day")).toBeInTheDocument();
  });

  it("renders a row but no bar for a hideBar placeholder task", () => {
    mockElementSize();

    const placeholderTasks: PlanningTimelineTask[] = [
      { end: new Date(), hideBar: true, id: "idle-1", name: "Idle equipment", start: new Date(), type: "task" },
    ];

    const { getByText, queryByText } = render(
      <PlanningTimeline tasks={placeholderTasks} renderBar={(task) => `bar:${task.id}`} renderRow={(task) => `row:${task.id}`} />,
    );

    expect(getByText("row:idle-1")).toBeInTheDocument();
    expect(queryByText("bar:idle-1")).not.toBeInTheDocument();
  });
});
