import { fireEvent, render } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import PlanningTimeline from "../PlanningTimeline";
import type { PlanningTimelineTask } from "../types";

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
});
