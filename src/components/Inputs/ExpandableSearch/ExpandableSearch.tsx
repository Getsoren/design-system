import { InputAdornment, TextField, type TextFieldProps, Tooltip } from "@mui/material";
import { type KeyboardEvent, useRef, useState } from "react";
import SearchIcon from "@/components/DataDisplay/Icons/SearchIcon";

export interface ExpandableSearchProps extends Pick<TextFieldProps, "placeholder" | "sx"> {
  value: string;
  onChange: (value: string) => void;
  /**
   * What can be looked for, told on the folded magnifier only: once open, the field says it
   */
  tooltip?: string;
  /**
   * The open field's width, in px
   */
  openWidth?: number;
}

/**
 * Folded, a round pill as a filter button beside it, the magnifier in its middle
 */
const HEIGHT = 32;
const FOLDED_WIDTH = 32;
const FONT_SIZE = 13;

/**
 * A search as a magnifier among filters: a click (or the keyboard's focus) opens it, and it folds back once left
 * empty. Escape empties and folds it without closing a dialog around it. Its width slides between the two.
 */
const ExpandableSearch = ({ value, onChange, placeholder, tooltip, openWidth = 200, sx }: ExpandableSearchProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const isOpen = isFocused || !!value;

  return (
    <Tooltip title={isOpen ? "" : (tooltip ?? "")}>
      <TextField
        size="small"
        autoComplete="off"
        inputRef={inputRef}
        // Anywhere on it, the magnifier included: the field only focuses itself on a click beside its adornment
        onClick={() => inputRef.current?.focus()}
        value={value}
        onChange={({ target }) => onChange(target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyDown={(event: KeyboardEvent<HTMLDivElement>) => {
          if (event.key === "Escape") {
            event.stopPropagation();
            onChange("");
            if (event.target instanceof HTMLElement) {
              event.target.blur();
            }
          }
        }}
        placeholder={placeholder}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
        sx={[
          {
            "& .Mui-focused .MuiInputAdornment-root": { color: "primary.main" },
            "& .MuiInputAdornment-root": { marginRight: isOpen ? 0.5 : 0 },
            "& .MuiInputAdornment-root .MuiSvgIcon-root": { fontSize: 18 },
            "& .MuiInputBase-input": { fontSize: FONT_SIZE },
            "& .MuiOutlinedInput-notchedOutline": { borderColor: "divider" },
            // A light border that darkens on hover and while typed in; 7px on the left centre the magnifier in the
            // folded circle
            "& .MuiOutlinedInput-root": {
              backgroundColor: "background.paper",
              borderRadius: HEIGHT / 2,
              cursor: isOpen ? "text" : "pointer",
              height: HEIGHT,
              paddingLeft: "7px",
              paddingRight: isOpen ? "12px" : 0,
            },
            "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              { borderColor: "text.primary", borderWidth: 1 },
            flexShrink: 0,
            overflow: "hidden",
            transition: ({ transitions }) => transitions.create("width", { duration: transitions.duration.short }),
            width: isOpen ? openWidth : FOLDED_WIDTH,
          },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
      />
    </Tooltip>
  );
};

export default ExpandableSearch;
