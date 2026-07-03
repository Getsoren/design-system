import {
  Button,
  Checkbox,
  Chip,
  ChipProps,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuProps,
  Radio,
  Stack,
  Tooltip,
} from "@mui/material";
import { MouseEvent, ReactNode, useEffect, useState } from "react";
import ChevronIcon from "@/components/DataDisplay/Icons/ChevronIcon";
import CloseIcon from "@/components/DataDisplay/Icons/CloseIcon";
import InfoIcon from "@/components/DataDisplay/Icons/InfoIcon";
import useMenu from "@/hooks/useMenu";
import useTranslation from "@/hooks/useTranslation";
import pxToRem from "@/utils/pxToRem";

export type OptionValue = string | number;

type Option<T = OptionValue> = {
  id?: string | number;
  label: string;
  value: T;
  /**
   * Optional information text. When provided, an info icon is displayed next to the
   * option label, showing this text in a tooltip on hover.
   */
  info?: string;
};

interface ChipFilterBaseProps<T = OptionValue> {
  /**
   * The label of the chip filter.
   */
  label?: ChipProps["label"];
  /**
   * The label displayed in the menu for the chip filter, only with multiple options.
   */
  labelMenu?: string;
  /**
   * The size of the chip filter.
   */
  size?: ChipProps["size"];
  /**
   * The variant of the chip filter.
   */
  variant?: ChipProps["variant"];
  /**
   * Indicates if the chip filter is disabled.
   */
  disabled?: ChipProps["disabled"];
  /**
   * The options available for selection in the chip filter.
   * If "options" is not provided, it acts as a simple toggle.
   */
  options?: Option<T> | Option<T>[];
  /**
   * Indicates if there should be a separator between the label menu and the options selected in the menu.
   * Defaults to ":"
   */
  separatorBetweenLabelAndOptionSelected?: string;
  /**
   * Indicates if the label should only be displayed after a selection is made.
   */
  labelOnlyAfterSelection?: boolean;
  /**
   * When true, changes are applied immediately without needing to click "Apply".
   * When false (default), changes require clicking "Apply" to be applied.
   */
  applyOnSelect?: boolean;
  /**
   * Hides the menu header row (the labelMenu title and its close button).
   * Useful when the chip itself is the only expected way to toggle the menu.
   */
  hideMenuHeader?: boolean;
  /**
   * Compact menu rendering: dense menu items and smaller option labels,
   * for tight containers (e.g. a menu nested inside a popover).
   */
  denseMenu?: boolean;
  /**
   * Props forwarded to the underlying MUI Menu (e.g. elevation, sx, slotProps).
   * Passing slotProps replaces the default paper minWidth.
   */
  menuProps?: Partial<Omit<MenuProps, "open" | "anchorEl" | "onClose">>;
}

// Toggle mode interface (boolean) - inferred from presence of 'checked'
export interface ChipFilterToggleProps extends ChipFilterBaseProps<boolean> {
  /**
   * The checked state of the toggle. When provided, the component acts as a toggle.
   */
  checked?: boolean;
  /**
   * Callback function triggered when the checked state changes.
   * @param checked
   */
  onCheckedChange?: (checked: boolean) => void;
  /**
   *  Exclude these props for toggle mode
   */
  multiple?: never;
  /**
   *  Exclude these props for toggle mode
   */
  value?: never;
  /**
   *  Exclude these props for toggle mode
   */
  onChange?: never;
}

// Single selection interface
export interface ChipFilterSingleProps<T = OptionValue> extends ChipFilterBaseProps<T> {
  /**
   * Indicates if the chip filter allows multiple selections.
   */
  multiple?: false;
  /**
   * The value of the chip filter.
   */
  value?: T;
  /**
   * Callback function triggered when the value of the chip filter changes.
   * @param value
   */
  onChange?: (value?: T) => void;
  /**
   *  Exclude these props for toggle mode
   */
  checked?: never;
  /**
   *  Exclude these props for toggle mode
   */
  onCheckedChange?: never;
}

// Multiple selection interface
export interface ChipFilterMultipleProps<T = OptionValue> extends ChipFilterBaseProps<T> {
  /**
   * Indicates if the chip filter allows multiple selections.
   */
  multiple: true;
  /**
   * The value of the chip filter.
   */
  value?: T[];
  /**
   * Callback function triggered when the value of the chip filter changes.
   * @param value
   */
  onChange?: (value: T[]) => void;
  /**
   *  Exclude these props for toggle mode
   */
  checked?: never;
  /**
   *  Exclude these props for toggle mode
   */
  onCheckedChange?: never;
}

export type ChipFilterProps<T = OptionValue> = ChipFilterToggleProps | ChipFilterSingleProps<T> | ChipFilterMultipleProps<T>;

/**
 * MUI Chip clones its deleteIcon with a `.MuiChip-deleteIcon` className and an onClick handler.
 * Both are intentionally ignored here: the className would override the color inherited from
 * the chip, and the onClick would stop clicks from bubbling to the chip (which opens the menu).
 */
const DeleteIconWrapper = ({ children }: { children: ReactNode }) => (
  <Stack
    alignItems="center"
    justifyContent="center"
    sx={{
      marginLeft: -0.5,
      marginRight: 0.5,
      position: "relative",
    }}
  >
    {children}
  </Stack>
);

// Overloaded function signatures
function ChipFilter(props: ChipFilterToggleProps): ReactNode;
// eslint-disable-next-line no-redeclare
function ChipFilter<T = OptionValue>(props: ChipFilterSingleProps<T>): ReactNode;
// eslint-disable-next-line no-redeclare
function ChipFilter<T = OptionValue>(props: ChipFilterMultipleProps<T>): ReactNode;

/**
 * ChipFilter component that can function as a toggle, single selection, or multiple selection filter.
 * @param label
 * @param value
 * @param onChange
 * @param checked
 * @param onCheckedChange
 * @param options
 * @param variant
 * @param disabled
 * @param labelMenu
 * @param labelOnlyAfterSelection
 * @param separatorBetweenLabelAndOptionSelected
 * @param multiple
 * @param size
 * @param applyOnSelect
 * @param hideMenuHeader
 * @param denseMenu
 * @param menuProps
 * @constructor
 */
// eslint-disable-next-line no-redeclare,react/function-component-definition
function ChipFilter<T = OptionValue>({
  label,
  value,
  onChange,
  checked,
  onCheckedChange,
  options,
  variant,
  disabled,
  labelMenu,
  labelOnlyAfterSelection,
  applyOnSelect,
  hideMenuHeader,
  denseMenu,
  menuProps,
  separatorBetweenLabelAndOptionSelected = ":",
  multiple = false,
  size = "medium",
}: ChipFilterProps<T>): ReactNode {
  // Detect toggle mode from presence of 'checked' prop
  const isToggleMode = checked !== undefined;

  const [internalValue, setInternalValue] = useState(() => {
    if (isToggleMode) {
      return checked;
    }
    if (multiple) {
      return value || [];
    }
    return value as T | undefined;
  });

  // Determine if component has a value
  const hasValue = (() => {
    if (isToggleMode) {
      return checked;
    }
    if (multiple) {
      return (value as T[])?.length > 0;
    }
    return value !== undefined && value !== null;
  })();

  const { anchorMenu, openMenu, isMenuOpen, closeMenu } = useMenu();
  const { t } = useTranslation();
  const isArrayOfOptions = Array.isArray(options);
  const hasOptions = options !== undefined;

  const applyChanges = (newValue: boolean | T | T[] | undefined) => {
    if (isToggleMode) {
      onCheckedChange?.(newValue as boolean);
    } else if (multiple) {
      (onChange as (val: T[]) => void)?.(newValue as T[]);
    } else {
      (onChange as (val?: T) => void)?.(newValue as T);
    }
  };

  const handleApply = () => {
    applyChanges(internalValue);
    closeMenu();
  };

  const handleReset = () => {
    if (isToggleMode) {
      const resetValue = false;
      setInternalValue(resetValue);
      onCheckedChange?.(resetValue);
    } else if (multiple) {
      const resetValue: T[] = [];
      setInternalValue(resetValue);
      (onChange as (val: T[]) => void)?.(resetValue);
    } else {
      const resetValue: T | undefined = undefined;
      setInternalValue(resetValue);
      (onChange as (val?: T) => void)?.(resetValue);
    }
    closeMenu();
  };

  const handleClickChip = (event: MouseEvent<HTMLDivElement>) => {
    // Toggle mode without options - simple toggle
    if (isToggleMode && !hasOptions) {
      const newChecked = !checked;
      onCheckedChange?.(newChecked);
      return;
    }

    // If has options, open menu
    if (hasOptions && isArrayOfOptions) {
      openMenu(event);
      return;
    }

    // Single option toggle behavior
    if (hasOptions && !isArrayOfOptions) {
      if (isToggleMode) {
        const newChecked = !checked;
        onCheckedChange?.(newChecked);
      } else {
        const newValue = value !== undefined && value !== null ? undefined : (options as Option<T>)?.value;

        if (multiple) {
          (onChange as (val: T[]) => void)?.(newValue === undefined ? [] : [newValue]);
        } else {
          (onChange as (val?: T) => void)?.(newValue);
        }
      }
    }
  };

  const handleOptionClick = (optionValue: T) => {
    let newValue: boolean | T | T[];

    if (isToggleMode) {
      // For toggle mode, clicking an option sets it as checked
      newValue = true;
      setInternalValue(newValue);
    } else if (multiple) {
      const currentValues = (internalValue as T[]) || [];
      newValue = currentValues.includes(optionValue) ? currentValues.filter((v) => v !== optionValue) : [...currentValues, optionValue];
      setInternalValue(newValue);
    } else {
      newValue = optionValue;
      setInternalValue(newValue);
    }

    // Apply changes immediately if immediateApply is true
    if (applyOnSelect) {
      applyChanges(newValue);

      // For single selection mode, close menu immediately
      if (!(multiple || isToggleMode)) {
        closeMenu();
      }
    }
  };

  const isOptionSelected = (optionValue: T): boolean => {
    if (isToggleMode) {
      return checked;
    }
    if (multiple) {
      return (internalValue as T[])?.includes(optionValue);
    }
    return internalValue === optionValue;
  };

  const getSelectedOptionLabel = (val: T | T[]): string | undefined => {
    if (!isArrayOfOptions) {
      return (options as Option<T>)?.label;
    }

    return `${labelMenu ? `${labelMenu} ${separatorBetweenLabelAndOptionSelected} ` : ""}${
      (options as Option<T>[]).find((option) => option.value === val)?.label || ""
    }`;
  };

  const getChipLabel = (): ReactNode => {
    // Toggle mode
    if (isToggleMode) {
      if (labelOnlyAfterSelection && hasValue) {
        return label;
      }
      // Show label with checked indicator if needed
      return label;
    }

    // If hide selected value
    if (labelOnlyAfterSelection && hasValue) {
      const currentValues = value || [];
      const selectedCount = Array.isArray(currentValues) ? currentValues.length : 1;

      return `${label || labelMenu}${multiple && selectedCount > 1 ? ` (${selectedCount})` : ""}`;
    }

    // Mode multiple selection
    if (multiple && hasValue) {
      const currentValues = (value as T[]) || [];
      const selectedCount = currentValues.length;

      if (selectedCount === 1) {
        const selectedLabel = getSelectedOptionLabel(currentValues[0]);
        return selectedLabel || label;
      }

      if (selectedCount > 1) {
        const firstSelectedLabel = getSelectedOptionLabel(currentValues[0]);
        const additionalCount = selectedCount - 1;
        return `${firstSelectedLabel || String(currentValues[0])}... (+${additionalCount})`;
      }
    }

    if (!(multiple || isToggleMode) && value !== undefined && value !== null && isArrayOfOptions) {
      const selectedLabel = getSelectedOptionLabel(value);
      return selectedLabel || label;
    }

    // No value selected
    return label;
  };

  /**
   * Sync internal state when controlled props change externally (e.g. parent reset).
   */
  useEffect(() => {
    if (isToggleMode) {
      setInternalValue(checked);
    } else if (multiple) {
      setInternalValue(value || []);
    } else {
      setInternalValue(value as T | undefined);
    }
  }, [isToggleMode, multiple, checked, value]);

  return (
    <>
      {/* Chip */}
      <Chip
        disabled={disabled}
        size={size}
        label={getChipLabel()}
        variant={variant}
        deleteIcon={
          hasOptions && isArrayOfOptions ? (
            <DeleteIconWrapper>
              <ChevronIcon
                fontSize="small"
                sx={{
                  transform: isMenuOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "opacity 0.2s ease-in-out",
                  ...(hasValue && {
                    ".MuiChip-root:hover &": {
                      opacity: 0,
                    },
                  }),
                }}
              />
              {hasValue && (
                <Stack
                  alignItems="center"
                  justifyContent="center"
                  onClick={(event) => {
                    event.stopPropagation();
                    handleReset();
                  }}
                  sx={{
                    ".MuiChip-root:hover &": {
                      opacity: 1,
                    },
                    color: "text.contrast",
                    left: "50%",
                    opacity: 0,
                    position: "absolute",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    transition: "opacity 0.2s ease-in-out",
                  }}
                >
                  <CloseIcon sx={{ fontSize: pxToRem(16) }} />
                </Stack>
              )}
            </DeleteIconWrapper>
          ) : undefined
        }
        onClick={handleClickChip}
        onDelete={hasOptions && isArrayOfOptions ? () => {} : undefined}
        color={hasValue ? "active" : "default"}
      />

      {/* Menu */}
      {hasOptions && isArrayOfOptions && (
        <Menu
          slotProps={{
            paper: {
              sx: {
                minWidth: 350,
              },
            },
          }}
          {...menuProps}
          anchorEl={anchorMenu}
          open={isMenuOpen}
          onClose={closeMenu}
        >
          {/* label Menu & close icon */}
          {!hideMenuHeader && (
            <Stack component="li" direction="row" paddingLeft={2} marginBottom={1}>
              <ListItemText>{labelMenu}</ListItemText>
              <IconButton onClick={closeMenu}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </Stack>
          )}

          {/* Options */}
          {(options as Option<T>[]).map((option, index) => {
            const key = `${option.id || option.value}-${index}`;
            const isSelected = isOptionSelected(option.value);

            return (
              <MenuItem key={key} dense={denseMenu} onClick={() => handleOptionClick(option.value)}>
                <ListItemIcon>
                  {multiple || isToggleMode ? (
                    <Checkbox disableRipple checked={isSelected} sx={{ padding: 0 }} />
                  ) : (
                    <Radio disableRipple checked={isSelected} sx={{ padding: 0 }} />
                  )}
                </ListItemIcon>
                <ListItemText
                  slotProps={denseMenu ? { primary: { variant: "body2" } } : undefined}
                  sx={{ color: "text.secondary", flexGrow: 0 }}
                >
                  {option.label}
                </ListItemText>
                {option.info && (
                  <Tooltip title={option.info}>
                    <IconButton size="small" sx={{ color: "text.secondary", marginLeft: 0.5 }} onClick={(event) => event.stopPropagation()}>
                      <InfoIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                )}
              </MenuItem>
            );
          })}

          {/* Actions - Hide when immediateApply is true */}
          {!applyOnSelect && (
            <Stack component="li" direction="row" justifyContent="flex-end" spacing={1} marginTop={1}>
              <Button size="small" onClick={handleReset}>
                {t("reset")}
              </Button>
              <Button variant="contained" size="small" onClick={handleApply}>
                {t("apply")}
              </Button>
            </Stack>
          )}
        </Menu>
      )}
    </>
  );
}

export default ChipFilter;
