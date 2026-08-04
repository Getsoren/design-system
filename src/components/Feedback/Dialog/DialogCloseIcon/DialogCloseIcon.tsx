import { IconButton, SxProps, Theme } from "@mui/material";
import { MouseEvent } from "react";
import CloseIcon from "@/components/DataDisplay/Icons/CloseIcon";

export interface DialogCloseProps {
  onClick?: (e: MouseEvent) => void;
  position?: "absolute" | "relative";
  sx?: SxProps<Theme>;
}

/**
 * Dialog close button: permanent grey outline, icon and hairline reinforced on hover.
 */
const DialogCloseIcon = ({ onClick, position = "absolute", sx }: DialogCloseProps) => (
  <IconButton
    aria-label="close"
    size="small"
    onClick={onClick}
    sx={[
      {
        "&:hover": {
          backgroundColor: ({ palette }) => palette.action.hover,
          borderColor: "text.secondary",
          color: "text.primary",
        },
        // Opaque background plus zIndex: the close button stays readable and clickable above the
        // inputs when the dialog content scrolls under it.
        backgroundColor: "background.paper",
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 1,
        color: "text.secondary",
        marginLeft: position === "absolute" ? undefined : "auto",
        position,
        // Aligned on the dialog grid: right edge level with the inputs (DialogContent padding
        // 24px), vertically centered on the title text.
        right: ({ spacing }) => spacing(3),
        top: ({ spacing }) => spacing(1.5),
        zIndex: 2,
      },
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}
  >
    <CloseIcon fontSize="small" />
  </IconButton>
);

export default DialogCloseIcon;
