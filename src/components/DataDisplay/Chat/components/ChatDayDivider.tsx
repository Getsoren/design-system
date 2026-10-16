import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

interface ChatDayDividerProps {
  label: string;
}

/**
 * The day, centered above its first message: just the text, no line
 */
const ChatDayDivider = ({ label }: ChatDayDividerProps) => (
  <Divider
    sx={{
      "& .MuiDivider-wrapper": { alignItems: "center", display: "flex", paddingX: 1.5, paddingY: 0.75 },
      "&::after": { borderTop: "none" },
      "&::before": { borderTop: "none" },
    }}
  >
    {/* lineHeight 1: the tall caption line height (1.66) pushes the text below the optical center */}
    <Typography variant="caption" color="text.secondary" lineHeight={1}>
      {label}
    </Typography>
  </Divider>
);

export default ChatDayDivider;
