import { forwardRef, type HTMLAttributes, type Ref } from "react";
import Chip from "@/components/DataDisplay/Chip/Chip";
import FlagOutlinedIcon from "@/components/DataDisplay/Icons/FlagOutlinedIcon";

export interface EventFlagProps extends Omit<HTMLAttributes<HTMLDivElement>, "children" | "color"> {
  /** "open" (default) in warning tones, "closed" in success tones */
  status?: "open" | "closed";
}

/** Status flag of an event; forwards its ref so a Tooltip can wrap it. */
const EventFlag = ({ status = "open", ...props }: EventFlagProps, ref: Ref<HTMLDivElement>) => (
  <Chip
    {...props}
    ref={ref}
    size="small"
    color={status === "closed" ? "success" : "warning"}
    variant="outlined-rounded"
    label={<FlagOutlinedIcon sx={{ display: "block", fontSize: 16 }} />}
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
