import { Box } from "@mui/material";
import CheckIcon from "@/components/DataDisplay/Icons/CheckIcon";

export interface CheckDiscProps {
  /**
   * The disc's diameter, in pixels; the check takes 60 % of it.
   */
  size: number;
}

/**
 * A white check on the success colour's dark shade: something done, as a document filed or a step completed.
 */
const CheckDisc = ({ size }: CheckDiscProps) => (
  <Box
    sx={{
      alignItems: "center",
      backgroundColor: "success.dark",
      borderRadius: "50%",
      color: "common.white",
      display: "flex",
      flexShrink: 0,
      height: size,
      justifyContent: "center",
      width: size,
    }}
    data-testid="check-disc"
  >
    <CheckIcon sx={{ fontSize: Math.round(size * 0.6) }} />
  </Box>
);

export default CheckDisc;
