import type { Theme } from "@mui/material/styles";
import type { SystemStyleObject } from "@mui/system";
import {
  AI_ASSISTANT_DOCKED_INSET,
  AI_ASSISTANT_DOCKED_RADIUS,
  AI_ASSISTANT_DOCKED_SHADOW,
  AI_ASSISTANT_DOCKED_SPACE,
} from "@/components/DataDisplay/AiAssistant/constants";

/** A card floating along the right edge of the screen: the docked panel and the surfaces docked beside it. */
export const dockedSurfaceSx = {
  border: 1,
  borderColor: "divider",
  borderRadius: `${AI_ASSISTANT_DOCKED_RADIUS}px`,
  bottom: AI_ASSISTANT_DOCKED_INSET,
  boxShadow: AI_ASSISTANT_DOCKED_SHADOW,
  height: "auto",
} as const satisfies SystemStyleObject<Theme>;

/**
 * Docks a fixed surface (e.g. an entity preview) beside the docked panel, under `top` (e.g. APP_BAR_HEIGHT).
 * Meant for screens where the panel is docked as a column, from md up.
 */
export const getAiAssistantNeighbourSx = (top = 0) =>
  ({
    ...dockedSurfaceSx,
    overflow: "hidden",
    right: AI_ASSISTANT_DOCKED_SPACE,
    top: top + AI_ASSISTANT_DOCKED_INSET,
  }) as const satisfies SystemStyleObject<Theme>;
