import { Box } from "@mui/material";
import { forwardRef, type HTMLAttributes, type ReactNode, type Ref } from "react";
import Chip from "@/components/DataDisplay/Chip/Chip";
import FlagOutlinedIcon from "@/components/DataDisplay/Icons/FlagOutlinedIcon";

export interface EventFlagProps extends Omit<HTMLAttributes<HTMLDivElement>, "children" | "color"> {
  /** "open" (default) in warning tones, "closed" in success tones */
  status?: "open" | "closed";
  /**
   * What the event is, drawn in the status' colour; the flag when none is given
   */
  icon?: ReactNode;
}

/** Status flag of an event; forwards its ref so a Tooltip can wrap it. */
const EventFlag = ({ status = "open", icon, ...props }: EventFlagProps, ref: Ref<HTMLDivElement>) => (
  <Chip
    {...props}
    ref={ref}
    size="small"
    color={status === "closed" ? "success" : "warning"}
    variant="outlined-rounded"
    label={
      icon ? (
        // Any icon at the flag's size, stroked or filled in the status' colour
        <Box sx={{ "& svg": { display: "block", fontSize: 16 }, display: "flex" }}>{icon}</Box>
      ) : (
        <FlagOutlinedIcon sx={{ display: "block", fontSize: 16 }} />
      )
    }
    sx={{
      "& .MuiChip-label": { alignItems: "center", display: "flex", px: 0 },
      borderRadius: "50%",
      flexShrink: 0,
      height: 24,
      minWidth: 0,
      width: 24,
    }}
  />
);

export default forwardRef(EventFlag);
