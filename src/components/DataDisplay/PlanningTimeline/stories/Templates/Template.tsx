import { Stack } from "@mui/material";
import type { StoryFn } from "@storybook/react-vite";
import { useState } from "react";
import PlanningTimeline from "@/components/DataDisplay/PlanningTimeline/PlanningTimeline";
import type {
  PlanningTimelineGroup,
  PlanningTimelineResource,
  PlanningTimelineTask,
} from "@/components/DataDisplay/PlanningTimeline/types";

/** Stateful wrapper: group headers collapse/expand on click, like a real consumer would wire it. */
const Template: StoryFn<typeof PlanningTimeline<PlanningTimelineGroup, PlanningTimelineResource, PlanningTimelineTask>> = ({
  groups: initialGroups,
  ...args
}) => {
  const [groups, setGroups] = useState(initialGroups);

  const handleGroupClick = (group: PlanningTimelineGroup) => {
    setGroups((prev) => prev?.map((item) => (item.id === group.id ? { ...item, collapsed: !item.collapsed } : item)));
  };

  return (
    <Stack height="90vh" minHeight={0}>
      <PlanningTimeline {...args} groups={groups} onGroupClick={handleGroupClick} />
    </Stack>
  );
};

export default Template;
