import { TextField, type TextFieldProps, Typography } from "@mui/material";
import { type ReactNode, useContext, useState } from "react";
import { ThemeContext } from "@/context/Theme/ThemeProvider";
import { formatDecimal, parseDecimalInput, sanitizeDecimalInput } from "@/utils/decimalInput";

export type DecimalFieldProps = Omit<TextFieldProps, "value" | "onChange" | "type"> & {
  /**
   * The figure the field holds; null shows it empty.
   */
  value: number | null;
  /**
   * Called with each figure typed, rounded to `maxFractionDigits`; null once the field is emptied.
   */
  onChange: (value: number | null) => void;
  /**
   * Written after the figure: what it counts, e.g. "h" or "€/h".
   */
  unit?: ReactNode;
  /**
   * Tells the figures the field takes. One it refuses is not answered: it stays in the field, marked as an error,
   * until it is corrected or the field is left. Every figure is taken by default, the empty field included.
   */
  isAccepted?: (value: number | null) => boolean;
  maxFractionDigits?: number;
};

const roundTo = (value: number, digits: number) => Math.round(value * 10 ** digits) / 10 ** digits;

/**
 * A decimal figure typed with a comma or a dot, shown in the language's number format once the field is left. The
 * text is kept as typed while the field is edited, so that "12," is not rewritten as "12".
 */
const DecimalField = ({
  value,
  onChange,
  unit,
  isAccepted,
  maxFractionDigits = 2,
  error,
  onBlur,
  slotProps,
  ...props
}: DecimalFieldProps) => {
  const [draft, setDraft] = useState<string | null>(null);
  const { language } = useContext(ThemeContext);

  const figureOf = (text: string) => {
    const figure = parseDecimalInput(text);

    return figure === undefined ? null : roundTo(figure, maxFractionDigits);
  };
  const isTaken = (figure: number | null) => isAccepted?.(figure) ?? true;

  return (
    <TextField
      type="text"
      value={draft ?? (value === null ? "" : formatDecimal(value, language, maxFractionDigits))}
      error={error || (draft !== null && !isTaken(figureOf(draft)))}
      onChange={(event) => {
        const text = sanitizeDecimalInput(event.target.value);
        const figure = figureOf(text);

        setDraft(text);

        if (isTaken(figure)) {
          onChange(figure);
        }
      }}
      onBlur={(event) => {
        setDraft(null);
        onBlur?.(event);
      }}
      slotProps={{
        ...slotProps,
        htmlInput: { inputMode: "decimal", ...slotProps?.htmlInput },
        input: {
          ...(unit !== undefined && {
            endAdornment: (
              <Typography variant="body2" color="text.secondary" whiteSpace="nowrap" flexShrink={0}>
                {unit}
              </Typography>
            ),
          }),
          ...slotProps?.input,
        },
      }}
      {...props}
    />
  );
};

export default DecimalField;
