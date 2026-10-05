import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AttachFileIcon from "@/components/DataDisplay/Icons/AttachFileIcon";

interface ChatDropOverlayProps {
  label: string;
}

/**
 * Veil over the conversation while files are dragged over it
 */
const ChatDropOverlay = ({ label }: ChatDropOverlayProps) => (
  <Stack
    alignItems="center"
    justifyContent="center"
    spacing={1.5}
    data-test="chatDropOverlay"
    sx={{
      backdropFilter: "blur(2px)",
      backgroundColor: ({ palette }) => (palette.mode === "dark" ? "rgba(18, 18, 18, 0.88)" : "rgba(255, 255, 255, 0.9)"),
      border: "2px dashed",
      borderColor: "text.secondary",
      borderRadius: 3,
      color: "text.primary",
      inset: 8,
      pointerEvents: "none",
      position: "absolute",
      zIndex: 2,
    }}
  >
    <AttachFileIcon sx={{ fontSize: 32 }} />
    <Typography variant="subtitle1" fontWeight={600}>
      {label}
    </Typography>
  </Stack>
);

export default ChatDropOverlay;
