import { fireEvent, render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import PlanningTimeline from "../PlanningTimeline";
import type { PlanningTimelineGroup, PlanningTimelineResource, PlanningTimelineTask } from "../types";

const DAY = 24 * 60 * 60 * 1000;

/** jsdom has no layout (elements measure 0×0) — give them a size so the virtualizer renders rows. */
const mockElementSize = () => {
  vi.spyOn(HTMLElement.prototype, "offsetHeight", "get").mockReturnValue(800);
  vi.spyOn(HTMLElement.prototype, "offsetWidth", "get").mockReturnValue(1200);
};

const groups: PlanningTimelineGroup[] = [{ id: "group-1", name: "Group 1" }];
const resources: PlanningTimelineResource[] = [{ groupId: "group-1", id: "resource-1", name: "Resource 1" }];
const tasks: PlanningTimelineTask[] = [
  {
    end: new Date(Date.now() + 3 * DAY),
    id: "task-1",
    name: "Task 1",
    resourceId: "resource-1",
    start: new Date(),
    statusColor: "success",
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
    const { getByText } = render(<PlanningTimeline groups={groups} resources={resources} tasks={tasks} sidebarTitle="Equipment" />);
    expect(getByText("Today")).toBeInTheDocument();
    expect(getByText("Day")).toBeInTheDocument();
    expect(getByText("Week")).toBeInTheDocument();
    expect(getByText("Month")).toBeInTheDocument();
    expect(getByText("Year")).toBeInTheDocument();
    expect(getByText("Equipment")).toBeInTheDocument();
  });

  it("prefers the `labels` overrides over the built-in strings", () => {
    const { getByText, queryByText } = render(
      <PlanningTimeline groups={groups} resources={resources} tasks={tasks} labels={{ today: "Aujourd'hui" }} />,
    );
    expect(getByText("Aujourd'hui")).toBeInTheDocument();
    expect(queryByText("Today")).not.toBeInTheDocument();
  });

  it("shows the empty state when there is no resource", () => {
    const { getByText } = render(<PlanningTimeline resources={[]} tasks={[]} />);
    expect(getByText("No result")).toBeInTheDocument();
  });

  it("shows a skeleton while loading", () => {
    const { container, queryByText } = render(<PlanningTimeline isLoading />);
    expect(container.querySelector(".MuiSkeleton-root")).toBeInTheDocument();
    expect(queryByText("Today")).not.toBeInTheDocument();
  });

  it("persists the selected view mode under the custom localStorage key", () => {
    const { getByText } = render(
      <PlanningTimeline groups={groups} resources={resources} tasks={tasks} localStorageKeys={{ viewMode: "my-app.planningViewMode" }} />,
    );
    fireEvent.click(getByText("Year"));
    expect(localStorage.getItem("my-app.planningViewMode")).toBe("year");
    expect(getByText("Year").closest("button")).toHaveClass("Mui-selected");
  });

  it("restores the persisted view mode on mount", () => {
    localStorage.setItem("soren-planning-timeline-view-mode", "month");
    const { getByText } = render(<PlanningTimeline groups={groups} resources={resources} tasks={tasks} />);
    expect(getByText("Month").closest("button")).toHaveClass("Mui-selected");
  });

  it("falls back to `defaultViewMode` when the stored value is invalid", () => {
    localStorage.setItem("soren-planning-timeline-view-mode", "bogus");
    const { getByText } = render(<PlanningTimeline groups={groups} resources={resources} tasks={tasks} defaultViewMode="week" />);
    expect(getByText("Week").closest("button")).toHaveClass("Mui-selected");
  });

  it("draws every task referencing a resource on that single resource line", () => {
    mockElementSize();

    const equipmentResources: PlanningTimelineResource[] = [{ groupId: "group-1", id: "equipment-1", name: "Equipment 1" }];
    const bookings: PlanningTimelineTask[] = [
      { end: new Date(Date.now() + 2 * DAY), id: "booking-1", name: "Booking 1", resourceId: "equipment-1", start: new Date() },
      {
        end: new Date(Date.now() + 6 * DAY),
        id: "booking-2",
        name: "Booking 2",
        resourceId: "equipment-1",
        start: new Date(Date.now() + 4 * DAY),
      },
    ];

    const { getByText } = render(
      <PlanningTimeline
        groups={groups}
        resources={equipmentResources}
        tasks={bookings}
        renderBar={(task) => `bar:${task.id}`}
        renderResource={(resource) => `resource:${resource.id}`}
        renderGroup={(group) => `group:${group.id}`}
      />,
    );

    expect(getByText("group:group-1")).toBeInTheDocument();
    expect(getByText("resource:equipment-1")).toBeInTheDocument();
    expect(getByText("bar:booking-1")).toBeInTheDocument();
    expect(getByText("bar:booking-2")).toBeInTheDocument();
  });

  it("renders a resource without tasks as an empty track", () => {
    mockElementSize();

    const idleResources: PlanningTimelineResource[] = [{ id: "idle-1", name: "Idle equipment" }];
    const idleTasks: PlanningTimelineTask[] = [];

    const { getByText, queryByText } = render(
      <PlanningTimeline
        resources={idleResources}
        tasks={idleTasks}
        renderBar={(task) => `bar:${task.id}`}
        renderResource={(resource) => `resource:${resource.id}`}
      />,
    );

    expect(getByText("resource:idle-1")).toBeInTheDocument();
    expect(queryByText(/^bar:/)).not.toBeInTheDocument();
  });

  it("hides the resources of a collapsed group and shows its resource count", () => {
    mockElementSize();

    const collapsedGroups: PlanningTimelineGroup[] = [{ collapsed: true, id: "group-1", name: "Group 1" }];

    const { getByText, queryByText } = render(
      <PlanningTimeline
        groups={collapsedGroups}
        resources={resources}
        tasks={tasks}
        renderResource={(resource) => `resource:${resource.id}`}
      />,
    );

    expect(getByText("Group 1")).toBeInTheDocument();
    expect(getByText("1")).toBeInTheDocument(); // derived childCount
    expect(queryByText("resource:resource-1")).not.toBeInTheDocument();
  });

  it("calls the click callbacks of each layer", () => {
    mockElementSize();

    const onGroupClick = vi.fn();
    const onResourceClick = vi.fn();
    const onTaskClick = vi.fn();

    const { getByText } = render(
      <PlanningTimeline
        groups={groups}
        resources={resources}
        tasks={tasks}
        onGroupClick={onGroupClick}
        onResourceClick={onResourceClick}
        onTaskClick={onTaskClick}
        renderBar={(task) => `bar:${task.id}`}
      />,
    );

    fireEvent.click(getByText("Group 1"));
    expect(onGroupClick).toHaveBeenCalledWith(groups[0]);

    fireEvent.click(getByText("Resource 1"));
    expect(onResourceClick).toHaveBeenCalledWith(resources[0]);

    fireEvent.click(getByText("bar:task-1"));
    expect(onTaskClick).toHaveBeenCalledWith(tasks[0]);
  });

  it("renders toolbarActions in the toolbar", () => {
    const { getByText } = render(
      <PlanningTimeline groups={groups} resources={resources} tasks={tasks} toolbarActions={<button type="button">Group by</button>} />,
    );
    expect(getByText("Group by")).toBeInTheDocument();
    expect(getByText("Day")).toBeInTheDocument();
  });
});
