import { Box, Stack, type SxProps, type Theme } from "@mui/material";
import type { PropsWithChildren } from "react";
import getInvalidColor, { type InvalidColor } from "@/utils/getInvalidColor";
import getOutlineColor from "@/utils/getOutlineColor";

export interface TextFieldGroupProps extends PropsWithChildren {
  /** `row` puts two short fields side by side */
  direction?: "column" | "row";
  /** Draws the frame in the invalid colour; the helper text belongs to the consumer */
  error?: boolean;
  /** Palette of the invalid frame */
  errorColor?: InvalidColor;
  sx?: SxProps<Theme>;
}

/**
 * One frame around several filled TextFields: hairlines between them, the outer corners on the first and
 * the last one. The fields lose their own border, and the focused one draws its ring over the frame.
 * Every child is a field (or a wrapper holding one, such as an Autocomplete): a helper text goes under the group.
 */
const TextFieldGroup = ({ children, direction = "column", error, errorColor, sx }: TextFieldGroupProps) => {
  const isRow = direction === "row";

  return (
    <Box
      sx={[
        (theme) => ({
          border: `1px solid ${error ? getInvalidColor(theme, errorColor) : getOutlineColor(theme)}`,
          borderRadius: `${theme.shape.borderRadius}px`,
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Stack
        direction={direction}
        sx={(theme) => {
          const radius = theme.shape.borderRadius;
          const firstRadius = isRow ? `${radius}px 0 0 ${radius}px` : `${radius}px ${radius}px 0 0`;
          const lastRadius = isRow ? `0 ${radius}px ${radius}px 0` : `0 0 ${radius}px ${radius}px`;

          return {
            // Selectors carry one class more than the filled variant's, so they win over it whatever the order
            "& .MuiTextField-root .MuiFilledInput-root": { border: "none", borderRadius: 0 },
            "& .MuiTextField-root .MuiFilledInput-root.Mui-focused, & .MuiTextField-root .MuiFilledInput-root.Mui-error.Mui-focused": {
              boxShadow: `0 0 0 2px ${theme.palette.text.primary}`,
              position: "relative",
              zIndex: 1,
            },
            // The field may be the child itself or sit in a wrapper (an Autocomplete)
            "& > .MuiTextField-root:first-of-type .MuiFilledInput-root, & > :first-of-type .MuiTextField-root .MuiFilledInput-root": {
              borderRadius: firstRadius,
            },
            "& > .MuiTextField-root:last-of-type .MuiFilledInput-root, & > :last-of-type .MuiTextField-root .MuiFilledInput-root": {
              borderRadius: lastRadius,
            },
            "& > *": { flex: 1, minWidth: 0 },
            "& > * + *": isRow
              ? { borderLeft: `1px solid ${theme.palette.grey[400]}` }
              : { borderTop: `1px solid ${theme.palette.grey[400]}` },
          };
        }}
      >
        {children}
      </Stack>
    </Box>
  );
};

export default TextFieldGroup;
