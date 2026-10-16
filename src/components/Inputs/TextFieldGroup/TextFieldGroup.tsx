import { Box, Stack, type SxProps, type Theme } from "@mui/material";
import { Children, Fragment, type PropsWithChildren, type ReactNode } from "react";
import getInvalidColor, { type InvalidColor } from "@/utils/getInvalidColor";
import getOutlineColor from "@/utils/getOutlineColor";

export interface TextFieldGroupProps extends PropsWithChildren {
  /** `row` puts two short fields side by side */
  direction?: "column" | "row";
  /** Draws the frame in the invalid colour; the helper text belongs to the consumer */
  error?: boolean;
  /** Palette of the invalid frame */
  errorColor?: InvalidColor;
  /** `segmented`: the fields sit on a grey track, the focused one lifted in white (a period picked end by end) */
  variant?: "outlined" | "segmented";
  /** Between two fields of the `segmented` variant, such as an arrow from a start to an end */
  separator?: ReactNode;
  sx?: SxProps<Theme>;
}

/** Between the track and the fields of the `segmented` variant */
const SEGMENT_GAP = 4;

/**
 * One frame around several filled TextFields: hairlines between them, the outer corners on the first and
 * the last one. The fields lose their own border, and the focused one draws its ring over the frame.
 * Every child is a field (or a wrapper holding one, such as an Autocomplete): a helper text goes under the group.
 */
const TextFieldGroup = ({
  children,
  direction = "column",
  error,
  errorColor,
  variant = "outlined",
  separator,
  sx,
}: TextFieldGroupProps) => {
  const isRow = direction === "row";

  if (variant === "segmented") {
    return (
      <Stack
        direction={direction}
        alignItems={isRow ? "center" : "stretch"}
        sx={[
          (theme) => ({
            // Concentric corners: the track's radius is the fields' plus the gap between them
            "& .MuiTextField-root .MuiFilledInput-root": {
              backgroundColor: "transparent",
              border: "none",
              borderRadius: `${theme.shape.borderRadiusL}px`,
              transition: theme.transitions.create(["background-color", "box-shadow"], { duration: theme.transitions.duration.shorter }),
            },
            "& .MuiTextField-root .MuiFilledInput-root:hover:not(.Mui-disabled, .Mui-focused)": {
              backgroundColor: theme.palette.action.hover,
            },
            "& .MuiTextField-root .MuiFilledInput-root.Mui-focused, & .MuiTextField-root .MuiFilledInput-root.Mui-error.Mui-focused": {
              backgroundColor: theme.palette.background.paper,
              boxShadow: theme.shadows[2],
            },
            "& > :not([aria-hidden])": { flex: 1, minWidth: 0 },
            backgroundColor: theme.palette.background.default,
            borderRadius: `${theme.shape.borderRadiusL + SEGMENT_GAP}px`,
            boxShadow: error ? `inset 0 0 0 1px ${getInvalidColor(theme, errorColor)}` : "none",
            padding: `${SEGMENT_GAP}px`,
          }),
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
      >
        {Children.toArray(children).map((field, index) => (
          <Fragment key={index}>
            {index > 0 && separator && (
              <Box aria-hidden sx={{ color: "text.secondary", display: "flex", flexShrink: 0, marginX: 1 }}>
                {separator}
              </Box>
            )}
            {field}
          </Fragment>
        ))}
      </Stack>
    );
  }

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
