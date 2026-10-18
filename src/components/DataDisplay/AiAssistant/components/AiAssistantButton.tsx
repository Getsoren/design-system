import Box from "@mui/material/Box";
import type { SxProps, Theme } from "@mui/material/styles";
import Button, { type ButtonProps } from "@/components/Inputs/Button/Button";

const SWEEP_MS = 1100;
const SWEEP_EASE = "cubic-bezier(0.4, 0, 0.2, 1)";

/** DS Button with an orange sweep across its label on hover or keyboard focus. */
const AiAssistantButton = ({ children, sx, variant = "contained", ...props }: ButtonProps) => (
  <Button
    variant={variant}
    {...props}
    sx={[
      {
        "@keyframes aiAssistantButtonSweep": {
          from: { backgroundPosition: "100% 0" },
          to: { backgroundPosition: "0% 0" },
        },
        "@media (prefers-reduced-motion: reduce)": {
          "&&:hover .aiAssistantButtonLabel, &&:focus-visible .aiAssistantButtonLabel": { animation: "none" },
        },
        "& .aiAssistantButtonLabel": {
          backgroundClip: "text",
          // The orange band sits in the middle of a 300% wide gradient: at rest only the label's colour shows.
          backgroundImage: ({ palette }: Theme) => {
            const base = variant === "contained" ? palette.primary.contrastText : palette.text.primary;
            const { light, main } = palette.secondary;

            return `linear-gradient(100deg, ${base} 0%, ${base} 34%, ${light} 42%, ${main} 47%, ${main} 53%, ${light} 58%, ${base} 66%, ${base} 100%)`;
          },
          backgroundPosition: "100% 0",
          backgroundSize: "300% 100%",
          color: "transparent",
          WebkitBackgroundClip: "text",
        },
        "&:hover .aiAssistantButtonLabel, &:focus-visible .aiAssistantButtonLabel": {
          animation: `aiAssistantButtonSweep ${SWEEP_MS}ms ${SWEEP_EASE} 1`,
        },
      },
      ...(Array.isArray(sx) ? sx : [sx as SxProps<Theme>]),
    ]}
  >
    <Box component="span" className="aiAssistantButtonLabel">
      {children}
    </Box>
  </Button>
);

export default AiAssistantButton;
