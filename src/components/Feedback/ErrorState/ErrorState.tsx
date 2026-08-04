import { Box, Divider, Stack, Typography } from "@mui/material";
import { ReactNode } from "react";
import RefreshIcon from "@/components/DataDisplay/Icons/RefreshIcon";
import Logo from "@/components/DataDisplay/Logo";
import Button from "@/components/Inputs/Button";
import useTranslation from "@/hooks/useTranslation";

export interface ErrorStateProps {
  /** Shows the brand logo above the message (full-page crash screens) */
  fullPage?: boolean;
  /** Reload/retry callback — the host app owns the navigation strategy */
  onReload?: () => void;
  title?: ReactNode;
  description?: ReactNode;
  actionLabel?: ReactNode;
}

/**
 * Error screen counterpart of EmptyState: headline, hairline divider and a reload action.
 * Router-agnostic — the reload behaviour comes from `onReload`.
 */
const ErrorState = ({ fullPage, onReload, title, description, actionLabel }: ErrorStateProps) => {
  const { t } = useTranslation();

  return (
    <Stack sx={{ alignItems: "center", height: "100%", justifyContent: "center" }}>
      {fullPage && (
        <>
          <Logo component="svg" />
          <Box marginY={4} />
        </>
      )}
      <Typography variant="h2" textAlign="center">
        {title ?? t("oops")}
        <br />
        {description ?? t("anErrorOccurred")}
      </Typography>
      <Divider sx={{ marginY: 4, width: 200 }} />
      {onReload && (
        <Button variant="contained" onClick={onReload} startIcon={<RefreshIcon />}>
          {actionLabel ?? t("reload")}
        </Button>
      )}
    </Stack>
  );
};

export default ErrorState;
