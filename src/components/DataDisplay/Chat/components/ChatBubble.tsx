import Paper from "@mui/material/Paper";
import type { ReactNode } from "react";
import { BUBBLE_RADIUS, getReceivedBubbleBackground } from "@/components/DataDisplay/Chat/constants";

// The design system's small radius for the corner pointing at the author
const TAIL_RADIUS = 4;

interface ChatBubbleProps {
  children: ReactNode;
  isOwn?: boolean;
  /** Last bubble of a run: its bottom corner on the author's side points at them */
  hasTail?: boolean;
}

const ChatBubble = ({ children, isOwn, hasTail }: ChatBubbleProps) => (
  <Paper
    sx={{
      backgroundColor: isOwn ? "tertiary.light" : getReceivedBubbleBackground,
      border: 0,
      // "!important": the sorted keys put the borderRadius shorthand after the corner it refines
      ...(hasTail && { [isOwn ? "borderBottomRightRadius" : "borderBottomLeftRadius"]: `${TAIL_RADIUS}px !important` }),
      borderRadius: `${BUBBLE_RADIUS}px`,
      // Only the white bubbles need a shadow to stand out of the conversation's grey
      boxShadow: isOwn ? "0 1px 2px rgba(0, 0, 0, 0.08)" : "none",
      px: 2,
      py: 1.25,
    }}
  >
    {children}
  </Paper>
);

export default ChatBubble;
