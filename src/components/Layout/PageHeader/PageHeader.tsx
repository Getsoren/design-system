import { Box, Breakpoint, Container, Divider, Stack, SxProps, Typography } from "@mui/material";
import type { PropsWithChildren, ReactNode } from "react";

export type ResponsiveStyleValue<T> = T | Array<T | null> | { [key: string]: T | null };

export interface PageHeaderProps extends PropsWithChildren {
  title?: ReactNode;
  children?: ReactNode;
  maxWidth?: Breakpoint | false;
  sx?: SxProps;
  RightContent?: ReactNode;
  LeftContent?: ReactNode;
  marginBottom?: number;
  disableDivider?: boolean;
  direction?: ResponsiveStyleValue<"row" | "row-reverse" | "column" | "column-reverse">;
  alignItems?: ResponsiveStyleValue<"flex-start" | "center" | "flex-end" | "stretch" | "baseline">;
}

/**
 * Page header block: title, optional side slots and filters as children.
 * The title block's vertical padding is asymmetric on purpose: a page title belongs to the content
 * below it, so it sits closer to that content than to the app bar above.
 */
const PageHeader = ({
  title,
  children,
  sx,
  RightContent,
  LeftContent,
  disableDivider = true,
  alignItems = "center",
  direction = "row",
  // Gap below the whole header block. On pages that pass filters as `children`, this is the gap
  // between those filters and the content — not the gap under the title, which the Stack's
  // paddingBottom owns.
  marginBottom = 3,
  maxWidth = "xl",
}: PageHeaderProps) => (
  <Box marginBottom={marginBottom}>
    <Container maxWidth={maxWidth} sx={{ ...sx }}>
      {(title || LeftContent || RightContent) && (
        <Stack direction={direction} justifyContent="space-between" spacing={2} paddingTop={4} paddingBottom={2} alignItems={alignItems}>
          {title && (
            <Typography variant="h3" data-test="headerTitle">
              {title}
            </Typography>
          )}
          {LeftContent && <Box>{LeftContent}</Box>}
          {RightContent && <Box>{RightContent}</Box>}
        </Stack>
      )}
      {children}
    </Container>
    {!disableDivider && <Divider />}
  </Box>
);

export default PageHeader;
