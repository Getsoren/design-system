import { phoneNumberAdapter } from "@getsoren/react-utils";
import { TextField, type TextFieldProps } from "@mui/material";
import { useForkRef } from "@mui/material/utils";
import { type ChangeEvent, useRef } from "react";
import { computeNextPhone } from "@/components/Inputs/TextFieldPhone/utils/computeNextPhone";

export interface TextFieldPhoneProps extends Omit<TextFieldProps, "type" | "value" | "onChange"> {
  /** Number as displayed, e.g. "06 34 39 39 49" */
  value: string;
  /** Called with the formatted number on each change */
  onChange: (value: string) => void;
  /** Display of the digits left by an edit, e.g. to cap their count (defaults to `phoneNumberAdapter`: French pairs) */
  format?: (digits: string) => string;
}

const formatByCountry = (digits: string) => phoneNumberAdapter(digits);

/**
 * A phone number field formatted as it is typed ("06 34 39 39 49"), the caret kept after the digit it followed:
 * reformatting would otherwise send it to the end on each edit in the middle of the number.
 */
const TextFieldPhone = ({ value, onChange, format = formatByCountry, inputRef, slotProps, ...props }: TextFieldPhoneProps) => {
  const ownInputRef = useRef<HTMLInputElement>(null);
  const handleInputRef = useForkRef(inputRef, ownInputRef);

  const handleChange = ({ nativeEvent, target }: ChangeEvent<HTMLInputElement>) => {
    const { caret, formatted } = computeNextPhone({
      caret: target.selectionStart ?? target.value.length,
      format,
      inputType: nativeEvent instanceof InputEvent ? nativeEvent.inputType : "",
      previous: value,
      rawValue: target.value,
    });

    onChange(formatted);
    // After React has written the new value — also when it equals the previous one
    requestAnimationFrame(() => ownInputRef.current?.setSelectionRange(caret, caret));
  };

  return (
    <TextField
      type="tel"
      autoComplete="tel"
      {...props}
      slotProps={{ ...slotProps, htmlInput: { inputMode: "tel", ...slotProps?.htmlInput } }}
      value={value}
      inputRef={handleInputRef}
      onChange={handleChange}
    />
  );
};

export default TextFieldPhone;
