import { Box } from "@mui/material";

export interface CheckboxIconProps {
  /**
   * Ticked state
   */
  checked?: boolean;
  /**
   * Partially ticked — drawn as a bar rather than a check
   */
  indeterminate?: boolean;
}

/**
 * The box a Checkbox draws, replacing MUI's SVG icons: their shape is baked
 * into the SVG path, so it cannot be softened from the theme.
 */
const CheckboxIcon = ({ checked, indeterminate }: CheckboxIconProps) => {
  const isFilled = checked || indeterminate;

  return (
    <Box
      sx={{
        alignItems: "center",
        backgroundColor: isFilled ? "primary.main" : "transparent",
        borderColor: isFilled ? "primary.main" : "text.disabled",
        // Explicit px: a bare number in `sx` is multiplied by shape.borderRadius (8)
        borderRadius: ({ shape }) => `${shape.borderRadiusS}px`,
        borderStyle: "solid",
        borderWidth: 1.5,
        boxSizing: "border-box",
        color: "primary.contrastText",
        display: "flex",
        height: 18,
        justifyContent: "center",
        transition: "background-color 140ms ease-out, border-color 140ms ease-out",
        width: 18,
      }}
    >
      {indeterminate && <Box sx={{ backgroundColor: "currentColor", borderRadius: "1px", height: 2, width: 8 }} />}
      {checked && !indeterminate && (
        // Drawn inline rather than reusing CheckIcon, a filled glyph locked to 24px
        <Box aria-hidden component="svg" fill="none" sx={{ display: "block", height: 12, width: 12 }} viewBox="0 0 12 12">
          <path d="M2.5 6.2 4.7 8.4 9.5 3.6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} />
        </Box>
      )}
    </Box>
  );
};

export default CheckboxIcon;
