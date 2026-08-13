import { Box, Card, Stack, Typography } from "@mui/material";
import type { ReactNode } from "react";
import CheckIcon from "@/components/DataDisplay/Icons/CheckIcon";

export interface CheckboxCardProps {
  /** Secondary line under the label — one line, ellipsized */
  description?: string;
  /** Leading visual, rendered in a 40px tile — an outlined icon, an avatar, an illustration */
  icon: ReactNode;
  /** Selected state — the card is a stateless toggle (`aria-checked`), the group logic
   * (single or multi select) belongs to the consumer. For a plain radio list without icon
   * or description, prefer `FormControlLabel variant="card"` with a Radio. */
  isSelected: boolean;
  /** Main line — one line, ellipsized */
  label: string;
  onClick: () => void;
}

/**
 * Large tap-target selection card: icon tile, label, optional description and a check indicator.
 * Sized for tablet use in the field.
 */
const CheckboxCard = ({ description, icon, isSelected, label, onClick }: CheckboxCardProps) => (
  <Card
    component="button"
    type="button"
    onClick={onClick}
    role="checkbox"
    aria-checked={isSelected}
    sx={{
      "&:hover": { borderColor: "text.primary" },
      alignItems: "center",
      backgroundColor: isSelected ? "action.hover" : "background.paper",
      borderColor: isSelected ? "text.primary" : "divider",
      borderWidth: isSelected ? 2 : 1,
      cursor: "pointer",
      display: "flex",
      gap: 1.5,
      minHeight: 64,
      padding: isSelected ? "11px 15px" : "12px 16px",
      textAlign: "left",
      transition: "border-color 0.2s, background-color 0.2s",
      width: "100%",
    }}
  >
    <Box
      sx={{
        alignItems: "center",
        backgroundColor: "action.hover",
        borderRadius: "8px",
        color: "text.primary",
        display: "flex",
        flexShrink: 0,
        height: 40,
        justifyContent: "center",
        width: 40,
      }}
    >
      {icon}
    </Box>
    <Stack spacing={0.25} flex={1} minWidth={0}>
      <Typography variant="h6" noWrap>
        {label}
      </Typography>
      {description && (
        <Typography variant="body2" color="textSecondary" noWrap>
          {description}
        </Typography>
      )}
    </Stack>

    <Box
      sx={{
        alignItems: "center",
        color: "text.primary",
        display: "flex",
        flexShrink: 0,
        opacity: isSelected ? 1 : 0,
        transition: "opacity 0.2s",
      }}
    >
      <CheckIcon />
    </Box>
  </Card>
);

export default CheckboxCard;
