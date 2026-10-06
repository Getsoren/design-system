import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import type { ReactNode } from "react";

interface ChatPillProps {
  children: ReactNode;
  onClick: () => void;
  /** Toggle pill (filter, tab): filled in ink while selected. Leave undefined for a plain action */
  selected?: boolean;
  count?: number;
  disabled?: boolean;
}

/**
 * Rounded pill as in Airbnb's inbox: filters and tabs, filled in ink once selected, and one-tap replies. 36px high,
 * still a 44px hit area (the row holding it keeps 4px above and below).
 */
const ChatPill = ({ children, onClick, selected, count, disabled }: ChatPillProps) => (
  <ButtonBase
    aria-pressed={selected}
    onClick={onClick}
    disabled={disabled}
    sx={{
      "&::after": { bottom: -4, content: '""', left: 0, position: "absolute", right: 0, top: -4 },
      "&:hover": { backgroundColor: selected ? "text.primary" : "action.hover" },
      "&.Mui-disabled": { opacity: 0.5 },
      backgroundColor: selected ? "text.primary" : "background.paper",
      border: "1px solid",
      borderColor: selected ? "text.primary" : "divider",
      borderRadius: 999,
      color: selected ? "background.paper" : "text.primary",
      flexShrink: 0,
      // A ButtonBase is a raw <button>: without this it takes the browser's system font, not the theme's
      fontFamily: ({ typography }) => typography.fontFamily,
      fontSize: ({ typography }) => typography.body2.fontSize,
      fontWeight: 500,
      gap: 0.75,
      height: 36,
      position: "relative",
      px: 2,
      transition: "background-color 120ms, color 120ms",
      whiteSpace: "nowrap",
    }}
  >
    {children}
    {count !== undefined && (
      <Box component="span" sx={{ fontVariantNumeric: "tabular-nums", opacity: 0.6 }}>
        {count}
      </Box>
    )}
  </ButtonBase>
);

export default ChatPill;
