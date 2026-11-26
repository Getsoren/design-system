import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import type { AiAssistantSuggestionProps } from "@/components/DataDisplay/AiAssistant/types";

/** A suggested prompt, listed under the empty state's title, or an answer offered to the assistant's question. */
const AiAssistantSuggestion = ({ children, icon, onClick, dataTestId, ...dataAttributes }: AiAssistantSuggestionProps) => (
  <ButtonBase
    {...dataAttributes}
    onClick={onClick}
    data-testid={dataTestId}
    sx={{
      "&:hover, &:focus-visible": { backgroundColor: "action.hover" },
      border: 1,
      borderColor: "divider",
      borderRadius: ({ shape }) => `${shape.borderRadiusL}px`,
      font: "inherit",
      gap: 1.5,
      justifyContent: "flex-start",
      // An icon's tile sits nearer the edge, as a list item's avatar does
      paddingLeft: icon ? 1 : 1.75,
      paddingRight: 1.75,
      paddingY: icon ? 1 : 1.25,
      textAlign: "left",
      transition: "background-color 150ms ease",
      width: "100%",
    }}
  >
    {icon && (
      // The tile of a choice card's icon, 32 px instead of 40
      <Box
        sx={{
          alignItems: "center",
          backgroundColor: "action.hover",
          borderRadius: "8px",
          color: "text.primary",
          display: "flex",
          flexShrink: 0,
          height: 32,
          justifyContent: "center",
          width: 32,
        }}
      >
        {icon}
      </Box>
    )}
    <Typography variant="body2">{children}</Typography>
  </ButtonBase>
);

export default AiAssistantSuggestion;
