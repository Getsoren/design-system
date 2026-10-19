import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import {
  AI_ASSISTANT_DOCKED_INSET,
  AI_ASSISTANT_DOCKED_WIDTH,
  AI_ASSISTANT_FLOATING_INSET,
  AI_ASSISTANT_FLOATING_INSET_XS,
} from "@/components/DataDisplay/AiAssistant/constants";
import type { AiAssistantPanelProps } from "@/components/DataDisplay/AiAssistant/types";
import { dockedSurfaceSx } from "@/components/DataDisplay/AiAssistant/utils/docked";
import { APP_BAR_HEIGHT } from "@/constants/appBar";

const DOCKED_SX = {
  ...dockedSurfaceSx,
  maxHeight: "none",
  right: AI_ASSISTANT_DOCKED_INSET,
  // Small screens have no app bar.
  top: { md: APP_BAR_HEIGHT + AI_ASSISTANT_DOCKED_INSET, xs: AI_ASSISTANT_DOCKED_INSET },
  transformOrigin: "100% 50%",
  width: { md: AI_ASSISTANT_DOCKED_WIDTH, xs: `calc(100vw - ${2 * AI_ASSISTANT_DOCKED_INSET}px)` },
} as const;

/**
 * The assistant's chat, without a modal backdrop so the host app stays usable while the assistant
 * navigates. Floating, it takes the bottom-right corner the Fab leaves while the panel is open, and
 * grows from it; docked, it is a full-height column under the app bar, beside the content.
 */
const AiAssistantPanel = ({ open, docked = false, children, dataTestId = "assistantPanel" }: AiAssistantPanelProps) => (
  <Grow
    in={open}
    unmountOnExit
    timeout={{ enter: 220, exit: 150 }}
    easing={{ enter: "cubic-bezier(0.2, 0, 0, 1)", exit: "cubic-bezier(0.4, 0, 1, 1)" }}
  >
    <Paper
      data-testid={dataTestId}
      data-docked={docked || undefined}
      elevation={docked ? 0 : 8}
      sx={{
        borderRadius: 2,
        bottom: { sm: AI_ASSISTANT_FLOATING_INSET, xs: AI_ASSISTANT_FLOATING_INSET_XS },
        display: "flex",
        flexDirection: "column",
        height: { sm: 640, xs: `calc(100dvh - ${2 * AI_ASSISTANT_FLOATING_INSET_XS}px)` },
        maxHeight: `calc(100dvh - ${2 * AI_ASSISTANT_FLOATING_INSET}px)`,
        overflow: "hidden",
        position: "fixed",
        right: { sm: AI_ASSISTANT_FLOATING_INSET, xs: AI_ASSISTANT_FLOATING_INSET_XS },
        transformOrigin: "100% 100%",
        width: { sm: 400, xs: `calc(100vw - ${2 * AI_ASSISTANT_FLOATING_INSET_XS}px)` },
        // Snackbar level, like the Fab: opened above a modal backdrop, the panel must not be buried under it
        zIndex: (theme) => theme.zIndex.snackbar,
        ...(docked && DOCKED_SX),
      }}
    >
      {children}
    </Paper>
  </Grow>
);

export default AiAssistantPanel;
