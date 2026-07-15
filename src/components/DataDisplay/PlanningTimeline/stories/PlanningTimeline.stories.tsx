import { Avatar, Chip, Paper, Stack, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import type { Meta } from "@storybook/react-vite";
import Template from "@/components/DataDisplay/PlanningTimeline/stories/Templates/Template";
import { planningTimelineDataGenerator } from "@/components/DataDisplay/PlanningTimeline/stories/utils/planningTimelineDataGenerator";
import PlanningTimeline from "../PlanningTimeline";

const DAY_MS = 24 * 60 * 60 * 1000;
const daysFromNow = (days: number) => new Date(Date.now() + days * DAY_MS);

export const Default = Template.bind({});
Default.args = {
  groups: [
    { id: "rented", name: "Rented" },
    { id: "available", name: "Available" },
  ],
  resources: [
    { groupId: "rented", id: "excavator-1", name: "Excavator 1" },
    { groupId: "rented", id: "excavator-2", name: "Excavator 2" },
    { groupId: "available", id: "excavator-3", name: "Excavator 3" },
  ],
  sidebarTitle: "Equipment",
  tasks: [
    {
      end: daysFromNow(3),
      id: "booking-1",
      name: "Booking 1",
      resourceId: "excavator-1",
      start: daysFromNow(-4),
      statusColor: "success",
    },
    {
      end: daysFromNow(-1),
      id: "booking-2",
      name: "Booking 2",
      resourceId: "excavator-2",
      start: daysFromNow(-6),
      statusColor: "success",
    },
    { end: daysFromNow(9), id: "booking-3", name: "Booking 3", resourceId: "excavator-2", start: daysFromNow(2), statusColor: "info" },
  ],
};

export const WithResizableBars = Template.bind({});
WithResizableBars.args = {
  ...planningTimelineDataGenerator(),
  onBarResize: (task, newEnd) => {
    // In a real app: open a confirmation dialog / call the API, then refresh `tasks`.
    console.info(`"${task.name}" extended to ${newEnd.toDateString()}`);
  },
  sidebarTitle: "Equipment",
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  ...planningTimelineDataGenerator(),
  renderTooltip: (task) => (
    <Paper sx={{ p: 1.5 }}>
      <Typography variant="body2">{task.name}</Typography>
      <Typography color="textSecondary" variant="caption">
        {task.start.toDateString()} → {task.end.toDateString()}
      </Typography>
    </Paper>
  ),
  sidebarTitle: "Equipment",
};

export const FrenchLabels = Template.bind({});
FrenchLabels.args = {
  ...planningTimelineDataGenerator(),
  labels: { day: "Jour", month: "Mois", noResult: "Aucun résultat", today: "Aujourd'hui", week: "Semaine", year: "Année" },
  locale: "fr",
  sidebarTitle: "Équipement",
};

export const WithCustomGroupCell = Template.bind({});
WithCustomGroupCell.args = {
  ...planningTimelineDataGenerator(),
  renderGroup: (group, { childCount, onJump }) => (
    <Stack alignItems="center" direction="row" spacing={1} onClick={() => onJump(group)} sx={{ cursor: "pointer", height: "100%", px: 2 }}>
      <Typography variant="body2" fontWeight="bold" textTransform="uppercase">
        {group.name}
      </Typography>
      <Chip label={`${childCount} machines`} size="small" variant="outlined" />
    </Stack>
  ),
  sidebarTitle: "Equipment",
};

export const WithCustomResourceCell = Template.bind({});
WithCustomResourceCell.args = {
  ...planningTimelineDataGenerator(),
  renderResource: (resource, { onJump, tasks }) => (
    <Stack
      alignItems="center"
      direction="row"
      spacing={1.5}
      onClick={() => onJump(resource)}
      sx={{ cursor: "pointer", height: "100%", px: 2 }}
    >
      <Avatar sx={{ fontSize: 14, height: 32, width: 32 }}>{resource.name.charAt(0)}</Avatar>
      <Stack minWidth={0}>
        <Typography noWrap variant="body2">
          {resource.name}
        </Typography>
        <Typography color="textSecondary" variant="caption">
          {tasks.length} booking{tasks.length > 1 ? "s" : ""}
        </Typography>
      </Stack>
    </Stack>
  ),
  sidebarTitle: "Equipment",
};

export const WithCustomBarContent = Template.bind({});
WithCustomBarContent.args = {
  ...planningTimelineDataGenerator(),
  renderBar: (task) => (
    <Stack alignItems="center" direction="row" spacing={1} sx={{ height: "100%" }}>
      <Avatar sx={{ fontSize: 11, height: 22, width: 22 }}>{task.name.charAt(0)}</Avatar>
      <Typography noWrap variant="caption" sx={{ color: "inherit" }}>
        {task.name}
      </Typography>
    </Stack>
  ),
  sidebarTitle: "Equipment",
};

export const MultipleBarsPerResource = Template.bind({});
MultipleBarsPerResource.args = {
  ...planningTimelineDataGenerator([
    { name: "Rented", resourceCount: 3, statusColor: "success", tasksPerResource: 3 },
    { name: "Available soon", resourceCount: 2, statusColor: "info", tasksPerResource: 2 },
  ]),
  sidebarTitle: "Equipment",
};

export const WithEmptyResources = Template.bind({});
WithEmptyResources.args = {
  ...planningTimelineDataGenerator([
    { name: "Rented", resourceCount: 3, statusColor: "success" },
    { emptyResourceCount: 2, name: "Idle", resourceCount: 1, statusColor: "info" },
  ]),
  sidebarTitle: "Equipment",
};

export const WithToolbarActions = Template.bind({});
WithToolbarActions.args = {
  ...planningTimelineDataGenerator(),
  sidebarTitle: "Equipment",
  toolbarActions: (
    <ToggleButtonGroup exclusive size="small" value="status">
      <ToggleButton value="status" sx={{ textTransform: "none" }}>
        Status
      </ToggleButton>
      <ToggleButton value="category" sx={{ textTransform: "none" }}>
        Category
      </ToggleButton>
    </ToggleButtonGroup>
  ),
};

export const CollapsedGroup = Template.bind({});
CollapsedGroup.args = {
  ...planningTimelineDataGenerator([
    { collapsed: true, name: "To process", resourceCount: 3, statusColor: "warning" },
    { name: "In progress", resourceCount: 4, statusColor: "success" },
  ]),
  sidebarTitle: "Equipment",
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  resources: [],
  sidebarTitle: "Equipment",
  tasks: [],
};

export default {
  component: PlanningTimeline,
  parameters: {
    docs: {
      description: {
        component:
          "Virtualized Gantt-like timeline fed by three flat collections: `groups` (collapsible section headers), `resources` (left-column cells, referenced by `groupId`) and `tasks` (bars, drawn on the resource matching their `resourceId` — several tasks can share one resource, and a resource without tasks renders an empty track). Zoomable time axis (day/week/month/year), drag-to-extend bars, overdue and incident hatches. Cells and bars are fully customisable via `renderGroup` / `renderResource` / `renderBar` / `renderTooltip`, and every callback is typed with your own group/resource/task types.",
      },
    },
  },
  title: "Components/Data Display/PlanningTimeline",
} as Meta<typeof PlanningTimeline>;
