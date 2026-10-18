import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { KeyboardEvent } from "react";
import type { AiAssistantConfirmationCardProps } from "@/components/DataDisplay/AiAssistant/types";
import CheckIcon from "@/components/DataDisplay/Icons/CheckIcon";
import CloseIcon from "@/components/DataDisplay/Icons/CloseIcon";

/**
 * Human-in-the-loop gate for destructive assistant actions: shows what is about to be
 * done and blocks until the user accepts or declines. After the choice, the card stays
 * in the thread as a record of the decision.
 */
const AiAssistantConfirmationCard = ({
  heading,
  summary,
  details,
  status,
  onAccept,
  onDecline,
  labels,
  icon,
  onOpen,
  links,
  dataTestId = "assistantConfirmationCard",
}: AiAssistantConfirmationCardProps) => {
  const isApproved = status === "approved";
  const isOpenable = status !== "pending" && !!onOpen;
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.target === event.currentTarget && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      onOpen?.();
    }
  };

  return (
    <Paper
      variant="outlined"
      data-testid={dataTestId}
      {...(isOpenable && { onClick: onOpen, onKeyDown: handleKeyDown, role: "button", tabIndex: 0 })}
      sx={{
        alignSelf: "stretch",
        padding: 1.5,
        ...(isOpenable && { "&:hover": { backgroundColor: "action.hover" }, cursor: "pointer" }),
      }}
    >
      <Stack spacing={1}>
        {status === "pending" ? (
          <Typography variant="caption" color="text.secondary">
            {heading}
          </Typography>
        ) : (
          // success.dark: the readable green of the status chips.
          <Stack direction="row" alignItems="center" spacing={0.5} data-testid={`${dataTestId}Decision`}>
            <Box sx={{ "& svg": { fontSize: 16 }, color: isApproved ? "success.dark" : "text.disabled", display: "flex" }}>
              {isApproved ? <CheckIcon /> : <CloseIcon />}
            </Box>
            <Typography variant="caption" color={isApproved ? "success.dark" : "text.secondary"}>
              {isApproved ? (labels.accepted ?? labels.accept) : (labels.declined ?? labels.decline)}
            </Typography>
          </Stack>
        )}
        <Stack direction="row" alignItems="flex-start" spacing={1.25}>
          {icon && <Box sx={{ display: "flex", flexShrink: 0 }}>{icon}</Box>}
          <Typography variant="subtitle2" sx={{ minWidth: 0 }}>
            {summary}
          </Typography>
        </Stack>
        {details && (
          <Typography variant="caption" component="pre" sx={{ fontFamily: "monospace", margin: 0, whiteSpace: "pre-wrap" }}>
            {details}
          </Typography>
        )}
        {status === "pending" ? (
          <Stack direction="row" spacing={1}>
            <Button size="small" variant="contained" data-testid={`${dataTestId}Accept`} onClick={onAccept}>
              {labels.accept}
            </Button>
            <Button size="small" variant="outlined" data-testid={`${dataTestId}Decline`} onClick={onDecline}>
              {labels.decline}
            </Button>
          </Stack>
        ) : (
          links && (
            // A click on a link must not open the card as well.
            <Box onClick={(event) => event.stopPropagation()} sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
              {links}
            </Box>
          )
        )}
      </Stack>
    </Paper>
  );
};

export default AiAssistantConfirmationCard;
