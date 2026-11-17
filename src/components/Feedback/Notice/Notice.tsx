import { Box, type BoxProps } from "@mui/material";

export interface NoticeProps extends BoxProps {}

/**
 * A sentence on a grey tint: what could not be found or read, and the way on. Not an alert: nothing is wrong, so it
 * carries no severity and no icon of its own.
 */
const Notice = ({ sx, ...props }: NoticeProps) => (
  <Box
    sx={[
      {
        backgroundColor: "action.hover",
        borderRadius: ({ shape }) => `${shape.borderRadiusL}px`,
        paddingX: 2,
        paddingY: 1.5,
      },
      ...(Array.isArray(sx) ? sx : [sx]),
    ]}
    {...props}
  />
);

export default Notice;
