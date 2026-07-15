import type {
  PlanningTimelineGroup,
  PlanningTimelineResource,
  PlanningTimelineStatusColor,
  PlanningTimelineTask,
} from "@/components/DataDisplay/PlanningTimeline/types";

const DAY_MS = 24 * 60 * 60 * 1000;

const daysFromNow = (days: number) => new Date(Date.now() + days * DAY_MS);

interface GeneratorGroup {
  name: string;
  statusColor: PlanningTimelineStatusColor;
  resourceCount: number;
  collapsed?: boolean;
  tasksPerResource?: number;
  emptyResourceCount?: number;
}

export interface PlanningTimelineData {
  groups: PlanningTimelineGroup[];
  resources: PlanningTimelineResource[];
  tasks: PlanningTimelineTask[];
}

/**
 * Build demo data: one collapsible group per config entry, its resources (one per machine), and
 * their task bars spread around today. A few bars get an incident hatch or an overdue overrun so
 * every visual state is visible.
 */
export const planningTimelineDataGenerator = (
  groups: GeneratorGroup[] = [
    { name: "To process", resourceCount: 3, statusColor: "warning" },
    { name: "In progress", resourceCount: 4, statusColor: "success" },
    { name: "Ended", resourceCount: 2, statusColor: "default" },
  ],
): PlanningTimelineData => {
  const data: PlanningTimelineData = { groups: [], resources: [], tasks: [] };

  groups.forEach((group, groupIndex) => {
    // Global machine number, continuous across groups (Excavator 1..n).
    const offset = groups.slice(0, groupIndex).reduce((sum, g) => sum + g.resourceCount + (g.emptyResourceCount ?? 0), 0);
    const tasksPerResource = Math.max(1, group.tasksPerResource ?? 1);
    const totalResources = group.resourceCount + (group.emptyResourceCount ?? 0);

    data.groups.push({ collapsed: group.collapsed ?? false, id: group.name, name: group.name });

    for (let i = 0; i < totalResources; i += 1) {
      const resourceId = `${group.name}-${i}`;
      const name = `Excavator ${offset + i + 1}`;
      data.resources.push({ groupId: group.name, id: resourceId, name });

      // The trailing `emptyResourceCount` resources keep no task — they render as empty tracks.
      if (i >= group.resourceCount) {
        continue;
      }

      const overdue = group.statusColor === "success" && i === 0 && tasksPerResource === 1;
      for (let barIndex = 0; barIndex < tasksPerResource; barIndex += 1) {
        const start = daysFromNow(i * 4 - 6 + barIndex * 5);
        const end = daysFromNow(i * 4 - 6 + barIndex * 5 + 3);
        data.tasks.push({
          end: overdue ? new Date() : end,
          id: `${resourceId}-${barIndex}`,
          incidents: i === 1 && barIndex === 0 ? [{ incidentDate: daysFromNow(-2) }] : undefined,
          name,
          overdue,
          plannedEnd: overdue ? daysFromNow(-3) : undefined,
          resourceId,
          start: overdue ? daysFromNow(-10) : start,
          statusColor: group.statusColor,
        });
      }
    }
  });

  return data;
};
