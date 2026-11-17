import { Box, type BoxProps } from "@mui/material";
import { type ChangeEvent, type DragEvent, type ReactNode, useId, useState } from "react";
import type { DataAttributes } from "@/types/dataAttributes";

export interface DropZoneProps extends Omit<BoxProps<"label">, "children" | "onDrop" | "component"> {
  /**
   * Called with the files dropped on the zone or picked from it.
   */
  onFiles: (files: File[]) => void;
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  /**
   * `data-*` attributes of the file input: a test hook, an analytics tag.
   */
  inputProps?: DataAttributes;
  /**
   * What the zone shows; as a function, it is told while files are dragged over the zone.
   */
  children: ReactNode | ((state: { isDragging: boolean }) => ReactNode);
}

// Out of sight, still focusable: the keyboard reaches the input, and the zone shows its focus ring
const VISUALLY_HIDDEN = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: 1,
  margin: -1,
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  whiteSpace: "nowrap",
  width: 1,
} as const;

/**
 * A zone files are dropped on or picked from. The whole zone is the file input's label: it is clicked as a whole,
 * highlighted while files are dragged over it, and reached with the keyboard. It shows nothing of its own: its
 * children say what is expected. For a form's file field, with its label and its file names, use `File`.
 */
const DropZone = ({ onFiles, accept, multiple = false, disabled = false, inputProps, children, sx, ...props }: DropZoneProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const inputId = useId();

  const handleDrop = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setIsDragging(false);

    if (!disabled) {
      onFiles([...event.dataTransfer.files]);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onFiles([...(event.target.files ?? [])]);
    // Emptied, so that picking the same files again still fires `change`
    event.target.value = "";
  };

  return (
    <Box
      component="label"
      htmlFor={inputId}
      onDragOver={(event: DragEvent<HTMLLabelElement>) => {
        event.preventDefault();
        setIsDragging(!disabled);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
      sx={[
        {
          "&:has(input:focus-visible)": { outline: 2, outlineColor: "text.primary", outlineOffset: 2 },
          alignItems: "center",
          backgroundColor: isDragging ? "action.hover" : "background.paper",
          border: "1px dashed",
          borderColor: isDragging ? "text.primary" : "grey.300",
          borderRadius: 4,
          cursor: disabled ? "default" : "pointer",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          opacity: disabled ? 0.5 : 1,
          padding: 4,
          position: "relative",
          transition: "border-color .15s, background-color .15s",
          width: "100%",
        },
        !disabled && { "&:hover": { borderColor: "text.secondary" } },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    >
      {typeof children === "function" ? children({ isDragging }) : children}
      <input
        id={inputId}
        type="file"
        accept={accept}
        multiple={multiple}
        disabled={disabled}
        onChange={handleChange}
        style={VISUALLY_HIDDEN}
        {...inputProps}
      />
    </Box>
  );
};

export default DropZone;
