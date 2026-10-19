import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import AiAssistantAvatar from "@/components/DataDisplay/AiAssistant/components/AiAssistantAvatar";
import { AI_ASSISTANT_AVATAR_SIZE } from "@/components/DataDisplay/AiAssistant/constants";
import type { AiAssistantFabProps } from "@/components/DataDisplay/AiAssistant/types";

const PILL_HEIGHT = 44;
// Even padding around the avatar.
const PILL_INSET = (PILL_HEIGHT - AI_ASSISTANT_AVATAR_SIZE) / 2;

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
      "&:hover": { backgroundColor: "background.paper", boxShadow: "0 6px 24px rgba(0, 0, 0, 0.14)" },
      backgroundColor: "background.paper",
      border: 1,
      borderColor: "divider",
      borderRadius: PILL_HEIGHT / 2,
      bottom: 24,
      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
      color: "text.primary",
      gap: 1.25,
      height: PILL_HEIGHT,
      paddingLeft: `${PILL_INSET - 1}px`,
      paddingRight: 2.25,
      position: "fixed",
      right: 24,
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
