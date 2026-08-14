import { TextField } from "@mui/material";
import { KeyboardEvent, useState } from "react";
import Chip from "@/components/DataDisplay/Chip";

export interface ChipQuantityEditorProps {
  /**
   * The current quantity displayed in the chip.
   */
  quantity: number;
  /**
   * Optional unit appended after the quantity (e.g. "m", "kg").
   */
  unit?: string;
  /**
   * Indicates if the editor is disabled. A disabled chip is not clickable.
   */
  disabled?: boolean;
  /**
   * Called with the new quantity when the user commits a valid change (strictly positive integer).
   */
  onChange: (quantity: number) => void;
}

const ChipQuantityEditor = ({ quantity, unit, disabled, onChange }: ChipQuantityEditorProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(String(quantity));

  const handleBlur = () => {
    setIsEditing(false);
    const newQuantity = parseInt(value, 10);
    if (!Number.isNaN(newQuantity) && newQuantity > 0 && newQuantity !== quantity) {
      onChange(newQuantity);
    } else {
      setValue(String(quantity));
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      handleBlur();
    }
    if (e.key === "Escape") {
      setValue(String(quantity));
      setIsEditing(false);
    }
  };

  const handleClick = () => {
    if (!(disabled || isEditing)) {
      setValue(String(quantity));
      setIsEditing(true);
    }
  };

  if (isEditing) {
    return (
      <TextField
        autoFocus
        size="tiny"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        slotProps={{ htmlInput: { style: { textAlign: "right" } } }}
        sx={{ "& .MuiInputBase-input": { padding: "2px 4px" }, maxWidth: 60 }}
      />
    );
  }

  return (
    <Chip
      size="small"
      label={`× ${quantity}${unit ? ` ${unit}` : ""}`}
      onClick={disabled ? undefined : handleClick}
      sx={{ flexShrink: 0 }}
    />
  );
};

export default ChipQuantityEditor;
