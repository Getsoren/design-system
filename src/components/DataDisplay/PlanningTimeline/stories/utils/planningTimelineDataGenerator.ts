import type { PlanningTimelineStatusColor, PlanningTimelineTask } from "@/components/DataDisplay/PlanningTimeline/types";

const DAY_MS = 24 * 60 * 60 * 1000;

const daysFromNow = (days: number) => new Date(Date.now() + days * DAY_MS);

interface GeneratorGroup {
  name: string;
  statusColor: PlanningTimelineStatusColor;
  taskCount: number;
  collapsed?: boolean;
  /** Above 1, each row gets that many bars sharing the same `rowId` (one line per machine). */
  barsPerRow?: number;
}

/**
 * Build demo rows: one collapsible "project" header per group, then its "task" bars spread around
 * today. A few bars get an incident hatch or an overdue overrun so every visual state is visible.
 */
export const planningTimelineDataGenerator = (
  groups: GeneratorGroup[] = [
    { name: "To process", statusColor: "warning", taskCount: 3 },
    { name: "In progress", statusColor: "success", taskCount: 4 },
    { name: "Ended", statusColor: "default", taskCount: 2 },
  ],
): PlanningTimelineTask[] =>
  groups.flatMap((group, groupIndex) => {
    // Global machine number, continuous across groups (Excavator 1..n).
    const offset = groups.slice(0, groupIndex).reduce((sum, { taskCount }) => sum + taskCount, 0);

    const barsPerRow = Math.max(1, group.barsPerRow ?? 1);

    const rows: PlanningTimelineTask[] = Array.from({ length: group.taskCount }, (_, i) => {
      const overdue = group.statusColor === "success" && i === 0 && barsPerRow === 1;
      // One task per bar; above one bar per row they share a `rowId` and split the row timespan.
      return Array.from({ length: barsPerRow }, (_, barIndex): PlanningTimelineTask => {
        const start = daysFromNow(i * 4 - 6 + barIndex * 5);
        const end = daysFromNow(i * 4 - 6 + barIndex * 5 + 3);
        return {
          end: overdue ? new Date() : end,
          id: `${group.name}-${i}-${barIndex}`,
          incidents: i === 1 && barIndex === 0 ? [{ incidentDate: daysFromNow(-2) }] : undefined,
          name: `Excavator ${offset + i + 1}`,
          overdue,
          plannedEnd: overdue ? daysFromNow(-3) : undefined,
          project: group.name,
          rowId: barsPerRow > 1 ? `${group.name}-${i}` : undefined,
          start: overdue ? daysFromNow(-10) : start,
          statusColor: group.statusColor,
          type: "task",
        };
      });
    }).flat();

    const allDates = rows.flatMap((row) => [row.start.getTime(), row.end.getTime()]);
    const header: PlanningTimelineTask = {
      childCount: group.taskCount,
      end: new Date(Math.max(...allDates)),
      hideChildren: group.collapsed ?? false,
      id: group.name,
      name: group.name,
      start: new Date(Math.min(...allDates)),
      type: "project",
    };

    return [header, ...rows];
  });
