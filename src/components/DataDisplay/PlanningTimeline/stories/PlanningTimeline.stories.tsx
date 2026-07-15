import { Paper, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import type { Meta } from "@storybook/react-vite";
import Template from "@/components/DataDisplay/PlanningTimeline/stories/Templates/Template";
import { planningTimelineDataGenerator } from "@/components/DataDisplay/PlanningTimeline/stories/utils/planningTimelineDataGenerator";
import PlanningTimeline from "../PlanningTimeline";

export const Default = Template.bind({});
Default.args = {
  sidebarTitle: "Equipment",
  tasks: planningTimelineDataGenerator(),
};

export const WithResizableBars = Template.bind({});
WithResizableBars.args = {
  onBarResize: (task, newEnd) => {
    // In a real app: open a confirmation dialog / call the API, then refresh `tasks`.
    console.info(`"${task.name}" extended to ${newEnd.toDateString()}`);
  },
  sidebarTitle: "Equipment",
  tasks: planningTimelineDataGenerator(),
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  renderTooltip: (task) => (
    <Paper sx={{ p: 1.5 }}>
      <Typography variant="body2">{task.name}</Typography>
      <Typography color="textSecondary" variant="caption">
        {task.start.toDateString()} → {task.end.toDateString()}
      </Typography>
    </Paper>
  ),
  sidebarTitle: "Equipment",
  tasks: planningTimelineDataGenerator(),
};

export const FrenchLabels = Template.bind({});
FrenchLabels.args = {
  labels: { day: "Jour", month: "Mois", noResult: "Aucun résultat", today: "Aujourd'hui", week: "Semaine", year: "Année" },
  locale: "fr",
  sidebarTitle: "Équipement",
  tasks: planningTimelineDataGenerator(),
};

export const MultipleBarsPerRow = Template.bind({});
MultipleBarsPerRow.args = {
  sidebarTitle: "Equipment",
  tasks: planningTimelineDataGenerator([
    { barsPerRow: 3, name: "Rented", statusColor: "success", taskCount: 3 },
    { barsPerRow: 2, name: "Available soon", statusColor: "info", taskCount: 2 },
  ]),
};

export const WithToolbarActions = Template.bind({});
WithToolbarActions.args = {
  sidebarTitle: "Equipment",
  tasks: planningTimelineDataGenerator(),
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
  sidebarTitle: "Equipment",
  tasks: planningTimelineDataGenerator([
    { collapsed: true, name: "To process", statusColor: "warning", taskCount: 3 },
    { name: "In progress", statusColor: "success", taskCount: 4 },
  ]),
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  sidebarTitle: "Equipment",
  tasks: [],
};

export default {
  component: PlanningTimeline,
  parameters: {
    docs: {
      description: {
        component:
          "Virtualized Gantt-like timeline: collapsible group rows, zoomable time axis (day/week/month/year), drag-to-extend bars, overdue and incident hatches. Rows and bars are fully customisable via `renderRow` / `renderBar` / `renderTooltip`, and every callback is typed with your own task type (extend `PlanningTimelineTask`).",
      },
    },
  },
  title: "Components/Data Display/PlanningTimeline",
} as Meta<typeof PlanningTimeline>;
