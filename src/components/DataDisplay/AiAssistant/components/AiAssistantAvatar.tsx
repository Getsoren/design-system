import Box from "@mui/material/Box";
import AiAssistantMark from "@/components/DataDisplay/AiAssistant/components/AiAssistantMark";
import type { AiAssistantAvatarProps } from "@/components/DataDisplay/AiAssistant/types";

// Small enough for the mark's glow to fit inside the round.
const MARK_RATIO = 15 / 28;

/** The assistant's mark in a grey round. */
const AiAssistantAvatar = ({ size = 28, isWorking, isBusy }: AiAssistantAvatarProps) => (
  <Box
    sx={{
      alignItems: "center",
      backgroundColor: ({ palette }) => (palette.mode === "dark" ? "grey.800" : "grey.100"),
      borderRadius: "50%",
      display: "flex",
      flexShrink: 0,
      height: size,
      justifyContent: "center",
      width: size,
    }}
  >
    <AiAssistantMark size={Math.round(size * MARK_RATIO)} isWorking={isWorking} isBusy={isBusy} />
  </Box>
);

export default AiAssistantAvatar;
