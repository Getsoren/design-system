import { Box, BoxProps } from "@mui/material";

export type DialogFormProps = Omit<BoxProps<"form">, "component">;

/**
 * Form wrapper for a Dialog's children: restores the Paper's flex column that a plain <form>
 * breaks. Without it the whole paper scrolls (title and close button included) instead of the
 * DialogContent, and the actions bar leaves the viewport.
 * Use it whenever a form element must sit between the Dialog and its DialogContent/DialogActions
 * (e.g. form libraries owning the submit).
 */
const DialogForm = ({ sx, ...props }: DialogFormProps) => (
  <Box
    component="form"
    sx={[{ display: "flex", flexDirection: "column", minHeight: 0, overflow: "hidden" }, ...(Array.isArray(sx) ? sx : [sx])]}
    {...props}
  />
);

export default DialogForm;
