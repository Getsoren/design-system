import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import type { AiAssistantSuggestionProps } from "@/components/DataDisplay/AiAssistant/types";

/** A suggested prompt, listed under the empty state's title. */
const AiAssistantSuggestion = ({ children, onClick, dataTestId, ...dataAttributes }: AiAssistantSuggestionProps) => (
  <ButtonBase
    {...dataAttributes}
    onClick={onClick}
    data-testid={dataTestId}
    sx={{
      "&:hover, &:focus-visible": { backgroundColor: "action.hover" },
      border: 1,
      borderColor: "divider",
      borderRadius: "12px",
      font: "inherit",
      justifyContent: "flex-start",
      paddingX: 1.75,
      paddingY: 1.25,
      textAlign: "left",
      transition: "background-color 150ms ease",
      width: "100%",
    }}
  >
    <Typography variant="body2">{children}</Typography>
  </ButtonBase>
);

export default AiAssistantSuggestion;
