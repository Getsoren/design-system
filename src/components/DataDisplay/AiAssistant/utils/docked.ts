import type { Theme } from "@mui/material/styles";
import type { SystemStyleObject } from "@mui/system";
import {
  AI_ASSISTANT_DOCKED_INSET,
  AI_ASSISTANT_DOCKED_SHADOW,
  AI_ASSISTANT_DOCKED_WIDTH,
} from "@/components/DataDisplay/AiAssistant/constants";

/** A card floating along the right edge of the screen: the docked panel and the surfaces docked beside it. */
export const dockedSurfaceSx = {
  border: 1,
  borderColor: "divider",
  // Twice the theme's radius (16px), like the floating panel
  borderRadius: 2,
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
    // A card, unlike the page: it keeps the panel's own inset from it
    right: AI_ASSISTANT_DOCKED_WIDTH + 2 * AI_ASSISTANT_DOCKED_INSET,
    top: top + AI_ASSISTANT_DOCKED_INSET,
  }) as const satisfies SystemStyleObject<Theme>;
