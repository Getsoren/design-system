import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import AiAssistantAvatar from "@/components/DataDisplay/AiAssistant/components/AiAssistantAvatar";
import {
  AI_ASSISTANT_AVATAR_SIZE,
  AI_ASSISTANT_FAB_HEIGHT,
  AI_ASSISTANT_FAB_HOVER_SHADOW,
  AI_ASSISTANT_FAB_SHADOW,
  AI_ASSISTANT_FLOATING_INSET,
} from "@/components/DataDisplay/AiAssistant/constants";
import type { AiAssistantFabProps } from "@/components/DataDisplay/AiAssistant/types";

// Even padding around the avatar.
const PILL_INSET = (AI_ASSISTANT_FAB_HEIGHT - AI_ASSISTANT_AVATAR_SIZE) / 2;

/**
 * The assistant's entry point, a pill in the bottom-right corner: its avatar and a call to ask it.
 * The host app hides it while the panel is open, the panel taking its corner.
 */
const AiAssistantFab = ({ onClick, label, dataTestId = "assistantFab", ...dataAttributes }: AiAssistantFabProps) => (
  <Fab
    {...dataAttributes}
    variant="extended"
    onClick={onClick}
    data-testid={dataTestId}
    sx={{
      "@media (prefers-reduced-motion: reduce)": { "&&": { transition: "none" } },
      "&:hover": { backgroundColor: "background.paper", boxShadow: AI_ASSISTANT_FAB_HOVER_SHADOW },
      backgroundColor: "background.paper",
      border: 1,
      borderColor: "divider",
      borderRadius: AI_ASSISTANT_FAB_HEIGHT / 2,
      bottom: AI_ASSISTANT_FLOATING_INSET,
      boxShadow: AI_ASSISTANT_FAB_SHADOW,
      color: "text.primary",
      gap: 1.25,
      height: AI_ASSISTANT_FAB_HEIGHT,
      paddingLeft: `${PILL_INSET - 1}px`,
      paddingRight: 2.25,
      position: "fixed",
      right: AI_ASSISTANT_FLOATING_INSET,
      textTransform: "none",
      transition: "box-shadow 200ms ease",
      zIndex: (theme) => theme.zIndex.snackbar,
    }}
  >
    <AiAssistantAvatar variant="brand" />
    <Typography variant="body2" fontWeight={500} component="span" noWrap>
      {label}
    </Typography>
  </Fab>
);

export default AiAssistantFab;
