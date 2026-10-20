import { FormHelperText, IconButton, Stack, SvgIcon, type Theme, Typography } from "@mui/material";
import type { ReactNode } from "react";
import useTranslation from "@/hooks/useTranslation/useTranslation";
import { getInvalidColor, getOutlineColor, type InvalidColor } from "@/utils/colors";

export interface CounterProps {
  label: ReactNode;
  /** Secondary line under the label */
  description?: ReactNode;
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onChange: (value: number) => void;
  /** Suffix after the value, e.g. "h" */
  unit?: string;
  error?: boolean;
  /** Palette of the helper text when in error */
  errorColor?: InvalidColor;
  helperText?: ReactNode;
  disabled?: boolean;
  /** Test id of the row; its parts get the `-minus`, `-value` and `-plus` suffixes */
  testId?: string;
}

const buttonSx = (theme: Theme) => ({
  "&:hover": { borderColor: theme.palette.text.primary },
  "&.Mui-disabled": { borderColor: theme.palette.divider, color: theme.palette.text.disabled },
  border: `1px solid ${getOutlineColor(theme)}`,
  borderRadius: "50%",
  color: theme.palette.text.primary,
  height: 32,
  width: 32,
});

/** Rounds to the step's decimals, so 0.1 + 0.2 reads 0.3 */
const roundToStep = (value: number, step: number): number => {
  const decimals = (String(step).split(".")[1] ?? "").length;
  return Number(value.toFixed(decimals));
};

/** A labelled row with a value stepped by a minus and a plus button */
const Counter = ({
  label,
  description,
  value,
  min = 0,
  max = Number.POSITIVE_INFINITY,
  step = 1,
  onChange,
  unit,
  error,
  errorColor,
  helperText,
  disabled,
  testId,
}: CounterProps) => {
  const { t } = useTranslation();

  return (
    <Stack spacing={0.5} data-testid={testId}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2} sx={{ minHeight: 64 }}>
        <Stack minWidth={0}>
          <Typography variant="body1" color={disabled ? "text.disabled" : "text.primary"}>
            {label}
          </Typography>
          {description && (
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          )}
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <IconButton
            size="small"
            aria-label={t("decrement")}
            disabled={disabled || value <= min}
            onClick={() => onChange(Math.max(min, roundToStep(value - step, step)))}
            sx={buttonSx}
            data-testid={testId ? `${testId}-minus` : undefined}
          >
            <SvgIcon viewBox="0 0 24 24" sx={{ fontSize: 16 }}>
              <path d="M18 13H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1z" />
            </SvgIcon>
          </IconButton>
          <Typography
            variant="body1"
            color={disabled ? "text.disabled" : "text.primary"}
            sx={{ minWidth: 32, textAlign: "center" }}
            data-testid={testId ? `${testId}-value` : undefined}
          >
            {value}
            {unit ? ` ${unit}` : ""}
          </Typography>
          <IconButton
            size="small"
            aria-label={t("increment")}
            disabled={disabled || value >= max}
            onClick={() => onChange(Math.min(max, roundToStep(value + step, step)))}
            sx={buttonSx}
            data-testid={testId ? `${testId}-plus` : undefined}
          >
            <SvgIcon viewBox="0 0 24 24" sx={{ fontSize: 16 }}>
              <path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z" />
            </SvgIcon>
          </IconButton>
        </Stack>
      </Stack>
      {helperText && (
        <FormHelperText sx={(theme) => ({ color: error ? getInvalidColor(theme, errorColor) : undefined, marginLeft: 0 })}>
          {helperText}
        </FormHelperText>
      )}
    </Stack>
  );
};

export default Counter;
