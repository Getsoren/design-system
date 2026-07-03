import { Stack } from "@mui/material";
import type { StoryFn } from "@storybook/react-vite";
import { useState } from "react";
import PlanningTimeline from "@/components/DataDisplay/PlanningTimeline/PlanningTimeline";
import type { PlanningTimelineTask } from "@/components/DataDisplay/PlanningTimeline/types";

/** Stateful wrapper: group headers collapse/expand on click, like a real consumer would wire it. */
const Template: StoryFn<typeof PlanningTimeline<PlanningTimelineTask>> = ({ tasks: initialTasks, ...args }) => {
  const [tasks, setTasks] = useState(initialTasks);

  const handleClick = (task: PlanningTimelineTask) => {
    if (task.type === "project") {
      setTasks((prev) => prev?.map((row) => (row.id === task.id ? { ...row, hideChildren: !row.hideChildren } : row)));
    }
  };

  return (
    <Stack height="90vh" minHeight={0}>
      <PlanningTimeline {...args} tasks={tasks} onClick={handleClick} />
    </Stack>
  );
};

export default Template;
