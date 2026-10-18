import { ButtonBase, FormHelperText, Stack } from "@mui/material";
import { type KeyboardEvent, type ReactNode, useId } from "react";
import getInvalidColor, { type InvalidColor } from "@/utils/getInvalidColor";
import getOutlineColor from "@/utils/getOutlineColor";

export interface PillOption {
  value: string;
  label: ReactNode;
  /** Leading visual, sized by the consumer (18px reads well) */
  icon?: ReactNode;
}

interface PillGroupBaseProps {
  options: PillOption[];
  /** Draws the pills in the invalid colour and marks the group invalid for assistive technologies */
  error?: boolean;
  /** Palette of the invalid state and of the helper text */
  errorColor?: InvalidColor;
  helperText?: ReactNode;
  "aria-label"?: string;
  disabled?: boolean;
}

export interface PillGroupSingleProps extends PillGroupBaseProps {
  multiple?: false;
  value?: string | null;
  /** Called with the tapped option, even when it is already selected: clearing is the consumer's call */
  onChange: (value: string) => void;
}

export interface PillGroupMultipleProps extends PillGroupBaseProps {
  multiple: true;
  value?: string[];
  /** Called with the selection after the tapped option was added or removed */
  onChange: (values: string[]) => void;
}

export type PillGroupProps = PillGroupSingleProps | PillGroupMultipleProps;

const toValues = (value: PillGroupProps["value"]): string[] => {
  if (Array.isArray(value)) {
    return value;
  }
  return value == null ? [] : [value];
};

const NEXT_KEYS = new Set(["ArrowRight", "ArrowDown"]);
const PREVIOUS_KEYS = new Set(["ArrowLeft", "ArrowUp"]);

/** Short options as pills: a radio group, or a checkbox group when `multiple` */
const PillGroup = (props: PillGroupProps) => {
  const { options, error, errorColor, helperText, disabled, "aria-label": ariaLabel } = props;
  const helperTextId = useId();
  const selectedValues = new Set(toValues(props.value));

  // Arrow keys move the focus along the pills; in a radio group they select as they go, as MUI's RadioGroup does
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const isNext = NEXT_KEYS.has(event.key);
    if (!(isNext || PREVIOUS_KEYS.has(event.key))) {
      return;
    }
    const pills = [...event.currentTarget.querySelectorAll<HTMLButtonElement>("[role=radio], [role=checkbox]")];
    const index = pills.indexOf(event.target as HTMLButtonElement);
    if (index === -1) {
      return;
    }
    event.preventDefault();
    const next = pills[(index + (isNext ? 1 : pills.length - 1)) % pills.length];
    next.focus();
    if (!props.multiple) {
      props.onChange(options[pills.indexOf(next)].value);
    }
  };

  const handleClick = (value: string) => {
    if (props.multiple) {
      const next = selectedValues.has(value) ? toValues(props.value).filter((item) => item !== value) : [...toValues(props.value), value];
      props.onChange(next);
    } else {
      props.onChange(value);
    }
  };

  return (
    <Stack spacing={0.5}>
      <Stack
        direction="row"
        spacing={1}
        useFlexGap
        flexWrap="wrap"
        role={props.multiple ? "group" : "radiogroup"}
        aria-label={ariaLabel}
        aria-invalid={error || undefined}
        aria-describedby={helperText ? helperTextId : undefined}
        onKeyDown={handleKeyDown}
      >
        {options.map((option) => {
          const isSelected = selectedValues.has(option.value);

          return (
            <ButtonBase
              key={option.value}
              role={props.multiple ? "checkbox" : "radio"}
              aria-checked={isSelected}
              disabled={disabled}
              onClick={() => handleClick(option.value)}
              sx={(theme) => ({
                ...theme.typography.body2,
                "&:hover": { borderColor: theme.palette.text.primary },
                "&.Mui-disabled": { color: theme.palette.text.disabled },
                backgroundColor: isSelected ? theme.palette.grey[50] : theme.palette.background.paper,
                border: `1px solid ${error ? getInvalidColor(theme, errorColor) : isSelected ? theme.palette.text.primary : getOutlineColor(theme)}`,
                borderRadius: 999,
                boxShadow: isSelected ? `inset 0 0 0 1px ${theme.palette.text.primary}` : "none",
                fontWeight: 500,
                gap: 1,
                minHeight: 44,
                paddingX: 2.5,
                paddingY: 1,
                transition: theme.transitions.create(["border-color", "box-shadow", "background-color"], {
                  duration: theme.transitions.duration.shorter,
                }),
              })}
            >
              {option.icon}
              {option.label}
            </ButtonBase>
          );
        })}
      </Stack>
      {helperText && (
        <FormHelperText
          id={helperTextId}
          sx={(theme) => ({ color: error ? getInvalidColor(theme, errorColor) : undefined, marginLeft: 0 })}
        >
          {helperText}
        </FormHelperText>
      )}
    </Stack>
  );
};

export default PillGroup;
