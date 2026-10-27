import { Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogProps, Typography } from "@mui/material";
import DialogCloseIcon from "@/components/Feedback/Dialog/DialogCloseIcon/DialogCloseIcon";
import Button from "@/components/Inputs/Button/Button";

interface ButtonProps {
  onClick?(): void;
  text: string;
  loading?: boolean;
}

interface DialogValidationProps extends Omit<DialogProps, "children" | "onClose"> {
  /**
   * Title of the dialog
   */
  title?: string;
  /**
   * Subtitle of the dialog
   */
  subtitle?: string;
  /**
   * Color of the dialog
   * @default "secondary"
   */
  color?: "secondary" | "error" | "warning" | "info" | "success";
  /**
   * Button primary props
   */
  buttonPrimary?: ButtonProps;
  /**
   * Button secondary props
   */
  buttonSecondary?: ButtonProps;

  /**
   * Callback when modal is closed
   */
  onClose?: (event: {}, reason?: string) => void;
}

const BACKGROUND_ICON_SIZE = 86;

const checkAnimation = {
  "@keyframes checkIn": {
    "0%": {
      strokeDashoffset: "-30",
    },
    "100%": {
      strokeDashoffset: "0",
    },
  },
  "@keyframes circleIn": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
  "@keyframes scaleIn": {
    "0%": {
      transform: "scale(0)",
    },
    "100%": {
      transform: "scale(1)",
    },
  },
  "& svg": {
    animation: "scaleIn 0.4s ease-out",
  },
  "& svg path:first-of-type": {
    animation: "circleIn 2s ease-out",
  },
  "& svg path:last-child": {
    animation: "checkIn 0.4s ease-out 0.4s both",
    strokeDasharray: "30",
    strokeDashoffset: "-30",
  },
};

const DialogValidation = ({
  title,
  subtitle,
  buttonPrimary,
  buttonSecondary,
  onClose,
  color = "secondary",
  fullWidth = true,
  maxWidth = "xs",
  ...props
}: DialogValidationProps) => (
  <Dialog
    maxWidth={maxWidth}
    fullWidth={fullWidth}
    onClose={onClose}
    {...props}
    sx={{
      "& .MuiDialog-paper": {
        borderColor: ({ palette }) => palette[color]["30p"],
      },
    }}
  >
    <DialogContent
      sx={{
        alignItems: "center",
        backgroundColor: ({ palette }) => palette[color]["4p"],
        display: "flex",
        flexDirection: "column",
        padding: 3,
        textAlign: "center",
        ...((buttonPrimary || buttonSecondary) && { borderBottom: ({ palette }) => `1px solid ${palette[color]["12p"]}` }),
      }}
    >
      <DialogCloseIcon onClick={(e) => onClose?.(e, "closeButton")} />
      <Box
        sx={{
          alignItems: "center",
          backgroundColor: ({ palette }) => palette[color]["12p"],
          borderRadius: "50%",
          color: ({ palette }) => palette[color].main,
          display: "flex",
          flexShrink: 0,
          height: BACKGROUND_ICON_SIZE,
          justifyContent: "center",
          marginBottom: 4,
          width: BACKGROUND_ICON_SIZE,
          ...checkAnimation,
        }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 36.6666C29.2048 36.6666 36.6667 29.2047 36.6667 20C36.6667 10.7952 29.2048 3.33331 20 3.33331C10.7953 3.33331 3.33334 10.7952 3.33334 20C3.33334 29.2047 10.7953 36.6666 20 36.6666Z"
            fill="currentColor"
          />
          <path d="M28 14L17 25L12 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Box>
      <Typography variant="h4" sx={{ marginBottom: 1 }}>
        {title}
      </Typography>
      <DialogContentText variant="body2">{subtitle}</DialogContentText>
    </DialogContent>
    {(buttonPrimary || buttonSecondary) && (
      <DialogActions>
        {buttonSecondary && (
          <Button variant="outlined" size="small" isLoading={buttonSecondary?.loading} onClick={buttonSecondary?.onClick} sx={{ flex: 1 }}>
            {buttonSecondary?.text}
          </Button>
        )}
        {buttonPrimary && (
          <Button
            variant="contained"
            size="small"
            isLoading={buttonPrimary?.loading}
            onClick={buttonPrimary?.onClick}
            // Next to the secondary action, the primary one is the widest: the way the dialog leads on
            sx={buttonSecondary ? { flex: 2 } : undefined}
            endIcon={
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.27875 4.5L6.22125 5.5575L9.65625 9L6.22125 12.4425L7.27875 13.5L11.7788 9L7.27875 4.5Z" fill="currentColor" />
              </svg>
            }
          >
            {buttonPrimary?.text}
          </Button>
        )}
      </DialogActions>
    )}
  </Dialog>
);

export default DialogValidation;
