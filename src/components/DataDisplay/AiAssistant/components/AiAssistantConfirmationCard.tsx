import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonBase from "@mui/material/ButtonBase";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { AiAssistantConfirmationCardProps } from "@/components/DataDisplay/AiAssistant/types";
import CheckIcon from "@/components/DataDisplay/Icons/CheckIcon";
import CloseIcon from "@/components/DataDisplay/Icons/CloseIcon";

const OPEN_CLASS = "aiAssistantConfirmationCardOpen";

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
  const isPending = status === "pending";
  const isOpenable = !isPending && !!onOpen;

  const subject = (
    <Stack direction="row" alignItems="flex-start" spacing={1.25}>
      {icon && <Box sx={{ display: "flex", flexShrink: 0 }}>{icon}</Box>}
      <Typography variant="subtitle2" sx={{ minWidth: 0 }}>
        {summary}
      </Typography>
    </Stack>
  );

  return (
    <Paper
      variant="outlined"
      data-testid={dataTestId}
      sx={{
        alignSelf: "stretch",
        padding: 1.5,
        ...(isOpenable && {
          [`&:has(.${OPEN_CLASS}.Mui-focusVisible)`]: {
            outline: ({ palette }) => `2px solid ${palette.primary.main}`,
            outlineOffset: 2,
          },
          "&:hover": { backgroundColor: "action.hover" },
          position: "relative",
        }),
      }}
    >
      <Stack spacing={1}>
        {isPending ? (
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
              {isApproved ? labels.accepted : labels.declined}
            </Typography>
          </Stack>
        )}
        {isOpenable ? (
          // Stretched over the whole card, so the card opens from anywhere, while the links stay outside the button.
          <ButtonBase
            disableRipple
            className={OPEN_CLASS}
            onClick={onOpen}
            data-testid={`${dataTestId}Open`}
            sx={{
              "&::after": { content: '""', inset: 0, position: "absolute" },
              font: "inherit",
              justifyContent: "flex-start",
              position: "static",
              textAlign: "left",
            }}
          >
            {subject}
          </ButtonBase>
        ) : (
          subject
        )}
        {details && (
          <Typography variant="caption" component="pre" sx={{ fontFamily: "monospace", margin: 0, whiteSpace: "pre-wrap" }}>
            {details}
          </Typography>
        )}
        {isPending ? (
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
            // Above the stretched button's layer, so a link goes its own way.
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, position: "relative", zIndex: 1 }}>{links}</Box>
          )
        )}
      </Stack>
    </Paper>
  );
};

export default AiAssistantConfirmationCard;
