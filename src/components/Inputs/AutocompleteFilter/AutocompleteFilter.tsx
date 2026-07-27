import {
  AutocompletePaperSlotPropsOverrides,
  AutocompleteValue,
  Avatar,
  Badge,
  Box,
  Button,
  Checkbox,
  ChipTypeMap,
  Divider,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Autocomplete as MuiAutocomplete,
  AutocompleteProps as MuiAutocompleteProps,
  Paper,
  PaperProps,
  TextField,
  Theme,
  Tooltip,
  TooltipProps,
  Typography,
  useTheme,
} from "@mui/material";
import type { AutocompleteChangeDetails, AutocompleteChangeReason } from "@mui/material/useAutocomplete";
import {
  ElementType,
  forwardRef,
  HTMLAttributes,
  isValidElement,
  JSXElementConstructor,
  ReactNode,
  Ref,
  SyntheticEvent,
  useState,
} from "react";
import ChevronIcon from "@/components/DataDisplay/Icons/ChevronIcon";
import CloseIcon from "@/components/DataDisplay/Icons/CloseIcon";
import useTranslation from "@/hooks/useTranslation";
import pxToRem from "@/utils/pxToRem";

type ItemPropsWithKey = {
  key: string | number;
  className: string;
  disabled: boolean;
  "data-item-index": number;
  tabIndex: -1;
  onDelete: (event: any) => void;
};

export type AutocompleteFilterOption<T = unknown> = {
  id?: string | number | null;
  label?: ReactNode;
  image?: string | "letter" | "avatar";
  isHeader?: boolean;
  value?: T;
};

export interface AutocompleteFilterProps<
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends false,
  ChipComponent extends ElementType = ChipTypeMap["defaultComponent"],
  Value = unknown,
> extends Omit<
    MuiAutocompleteProps<AutocompleteFilterOption<Value>, Multiple, DisableClearable, FreeSolo, ChipComponent>,
    "options" | "onChange" | "freeSolo" | "renderInput" | "value"
  > {
  /**
   * Variant of the Autocomplete
   */
  variant?: "standard" | "chip" | "filled";
  /**
   * Width of the Autocomplete
   */
  width?: string | number;
  /**
   *  Value
   *  @default undefined
   */
  value?: AutocompleteFilterOption<Value>[] | AutocompleteFilterOption<Value> | string | null;
  /**
   *  Options to display
   *  @default undefined
   */
  options?: string[] | AutocompleteFilterOption<Value>[];
  /**
   *  Placeholder
   */
  placeholder?: string;
  /**
   *  Name of the filtered dimension, kept visible in the summary once a value is selected
   *  @default placeholder
   */
  label?: string;
  /**
   *  If true, collapses the selection into a summary: one value is spelled out ("Label : value"),
   *  several collapse to a count badge, and the label stays visible as placeholder otherwise
   *  @default false
   */
  summary?: boolean;
  /**
   *  If true, the checkbox is disabled
   *  @default false
   */
  disableCheckbox?: boolean;
  /**
   *  If true, the select all options are disabled
   *  @default false
   */
  disableSelectAll?: boolean;
  /**
   *  If true, the reset option is disabled
   *  @default false
   */
  disableReset?: boolean;
  /**
   *  If true, the input value is reset when an option is selected
   *  Works only with controlled input
   *  @default false
   */
  resetInputValueOnSelectOption?: boolean;
  /**
   *  Callback when the value change
   * @param event
   * @param value
   * @param reason
   * @param details
   */
  onChange?: (
    event: SyntheticEvent,
    value: AutocompleteFilterOption<Value>[] | AutocompleteFilterOption<Value> | null | [] | any,
    reason?: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<AutocompleteFilterOption<Value>>,
  ) => void;
  /**
   *  Locale text
   *  @default undefined
   */
  localeText?: {
    selectAll?: string;
    reset?: string;
  };
  /**
   *  When provided, wraps the field in a Tooltip with this content.
   *  Useful to explain a disabled state without wrapping the component at every call site.
   *  @default undefined
   */
  tooltip?: ReactNode;
  /**
   *  Extra props forwarded to the Tooltip (e.g. placement). Ignored when `tooltip` is not set.
   *  @default undefined
   */
  tooltipProps?: Omit<TooltipProps, "title" | "children">;
}

const checkboxStyle = { padding: 0, paddingRight: 1 };

/** Widest a filled filter may get before its summary ellipsises */
const FILLED_MAX_WIDTH = 260;

/** A flat colour as a background layer, so rest and hover tints can stack */
const overlay = (color: string) => `linear-gradient(${color}, ${color})`;

const getChipStyle = (size: "xSmall" | "small" | "medium") => {
  if (size === "xSmall") {
    return {
      fontSize: pxToRem(12),
      height: 20,
    };
  }

  if (size === "small") {
    return {
      fontSize: pxToRem(13),
      height: 24,
    };
  }

  return {
    fontSize: pxToRem(14),
    height: 32,
  };
};

const getFilledStyle = (size: "xSmall" | "small" | "medium") => {
  if (size === "xSmall") {
    return {
      fontSize: pxToRem(12),
      height: 26,
    };
  }

  if (size === "small") {
    return {
      fontSize: pxToRem(13),
      height: 32,
    };
  }

  // small and medium share the font size on purpose (a small Button CTA is 13px), only the height differs
  return {
    fontSize: pxToRem(13),
    height: 40,
  };
};

const getOptionText = (option: AutocompleteFilterOption | string) => {
  if (typeof option === "string") {
    return option;
  }

  return typeof option?.label === "string" ? option.label : "";
};

/** Summary shown inside the filter once it holds a value: one value is spelled out, several collapse to a count */
const getSummary = (value: string | AutocompleteFilterOption | AutocompleteFilterOption[] | null | undefined, label?: string) => {
  const selected = Array.isArray(value) ? value : [value];
  const texts = selected.filter(Boolean).map((option) => getOptionText(option as AutocompleteFilterOption | string));

  if (!texts.length) {
    return { count: 0, text: label || "" };
  }

  if (texts.length > 1) {
    return { count: texts.length, text: label || "" };
  }

  // U+202F (narrow no-break space) before the colon, per French typography.
  return { count: 0, text: label ? `${label} : ${texts[0]}` : texts[0] };
};

const SummaryCount = ({ children }: { children: number }) => (
  <Box
    component="span"
    sx={{
      alignItems: "center",
      backgroundColor: "text.primary",
      borderRadius: 99,
      color: "text.contrast",
      display: "inline-flex",
      flexShrink: 0,
      fontSize: pxToRem(11),
      fontWeight: 500,
      height: 18,
      justifyContent: "center",
      lineHeight: 1,
      marginLeft: 0.75,
      minWidth: 18,
      paddingX: "5px",
    }}
  >
    {children}
  </Box>
);

const getFinalValue = (value: string | AutocompleteFilterOption | AutocompleteFilterOption[] | null | undefined, multiple?: boolean) => {
  if (multiple) {
    if (!value) {
      return [];
    }
    return Array.isArray(value) ? value : [value];
  }
  return value || null;
};

const Count = (variant?: "standard" | "chip" | "filled") => {
  const { palette } = useTheme();
  const color = palette.mode === "light" ? "default" : "primary";
  const isChipVariant = variant === "chip";

  return function RenderCount(more: number) {
    return (
      <Badge
        badgeContent={`+${more}`}
        color={color}
        sx={{
          "& .MuiBadge-badge": {
            ...(isChipVariant && {
              backgroundColor: "grey.100",
              color: "text.primary",
              // Slightly shorter than the badge's 20px default so it never touches the chip's edges
              height: 16,
              minWidth: 16,
            }),
            position: "relative",
            transform: "none",
          },
          alignItems: "center",
        }}
      />
    );
  };
};

const PaperComponent = <
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends false,
  ChipComponent extends ElementType,
  Value,
>({
  variant,
  children,
  disableSelectAll,
  localeText,
  disableReset,
  onChange,
  loading,
  options,
  value,
  multiple,
  ...props
}: PaperProps &
  Pick<
    AutocompleteFilterProps<Multiple, DisableClearable, FreeSolo, ChipComponent, Value>,
    "disableSelectAll" | "localeText" | "disableReset" | "onChange" | "options" | "value" | "loading" | "multiple"
  >) => {
  const { t } = useTranslation();
  const allChecked = Array.isArray(value) ? value?.length === options?.length : false;
  const optionsIsArrayOfStrings = Array.isArray(options) && options.every((option) => typeof option === "string");
  const headerOptions = (!optionsIsArrayOfStrings && options?.filter((option) => option?.isHeader)) || [];

  return (
    <Paper sx={{ minWidth: 250 }} {...props}>
      {multiple && !loading && (!disableSelectAll || !!headerOptions?.length) && (
        <>
          <List role="listbox">
            {!disableSelectAll && (
              <ListItem
                disablePadding
                role="option"
                onMouseDown={(e) => {
                  // Prevent blur
                  e.stopPropagation();
                  e.preventDefault();

                  if (allChecked) {
                    onChange?.(e, [], "removeOption");
                    return;
                  }

                  onChange?.(e, options || [], "selectOption");
                }}
              >
                <ListItemButton disableRipple>
                  <Checkbox disableRipple id="select-all-checkbox" checked={allChecked} sx={checkboxStyle} />
                  <ListItemText primary={localeText?.selectAll || t("selectAll")} slotProps={{ primary: { variant: "body2" } }} />
                  {!disableReset && (
                    <Button
                      variant="link"
                      size="small"
                      sx={{
                        marginX: 1,
                        textDecoration: "none",
                      }}
                      onClick={(e) => {
                        onChange?.(e, [], "removeOption");
                      }}
                      onMouseDown={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                      }}
                    >
                      <Typography variant="body2">{localeText?.reset || t("reset")}</Typography>
                    </Button>
                  )}
                </ListItemButton>
              </ListItem>
            )}
            {!optionsIsArrayOfStrings &&
              headerOptions?.map((option, index) => {
                const key = `header-options-${index}`;
                const checked =
                  Array.isArray(value) &&
                  value.some(
                    (val) =>
                      JSON.stringify(val) === JSON.stringify(option) ||
                      (val && typeof val === "object" && "id" in val && val?.id === option?.id),
                  );

                return (
                  <ListItem
                    key={key}
                    disablePadding
                    onMouseDown={(e) => {
                      e.stopPropagation();
                      e.preventDefault();

                      if (checked) {
                        const newValue = Array.isArray(value)
                          ? value?.filter(
                              (val) =>
                                !(
                                  JSON.stringify(val) === JSON.stringify(option) ||
                                  (val && typeof val === "object" && "id" in val && val?.id === option?.id)
                                ),
                            )
                          : [];

                        onChange?.(e, newValue as AutocompleteFilterOption<Value>[], "removeOption");
                        return;
                      }

                      onChange?.(e, [...(Array.isArray(value) ? value : []), option], "selectOption");
                    }}
                  >
                    <ListItemButton disableRipple>
                      <Checkbox disableRipple checked={checked} sx={checkboxStyle} />
                      <ListItemText primary={option?.label} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
          </List>
          <Divider />
        </>
      )}
      {children}
    </Paper>
  );
};

const AutocompleteFilter = <
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends false,
  ChipComponent extends ElementType,
  Value,
>(
  {
    variant,
    onChange,
    disableCheckbox,
    placeholder,
    label,
    summary,
    localeText,
    disableReset,
    disableSelectAll,
    value,
    onFocus,
    onBlur,
    open,
    getOptionLabel,
    onInputChange,
    inputValue,
    disableClearable,
    loading,
    resetInputValueOnSelectOption,
    renderOption,
    renderValue,
    width,
    sx,
    size = "small",
    disableCloseOnSelect = true,
    multiple = true,
    options = [],
    slotProps,
    tooltip,
    tooltipProps,
    ...props
  }: AutocompleteFilterProps<Multiple, DisableClearable, FreeSolo, ChipComponent, Value> & { inputValue?: string },
  ref: Ref<HTMLDivElement>,
) => {
  const { t } = useTranslation();
  const [internalOpen, setInternalOpen] = useState(false);
  const [internalInputValue, setInternalInputValue] = useState("");
  const finalInputValue = inputValue || internalInputValue;
  const isChipVariant = variant === "chip";
  const isFilledVariant = variant === "filled";
  const hasValue = Array.isArray(value) ? !!value.length : value !== undefined && value !== null;
  const finalValue = getFinalValue(value, multiple);
  const withSummary = !!summary;
  const summaryLabel = label ?? placeholder;
  const isSearching = internalOpen && !!finalInputValue;
  const showsSummary = withSummary && hasValue && !isSearching;
  const showsLabelInPlaceholder = withSummary && !showsSummary;

  const handleChange = (
    event: SyntheticEvent,
    newValue: AutocompleteValue<AutocompleteFilterOption<Value>, Multiple, DisableClearable, FreeSolo>,
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<AutocompleteFilterOption<Value>>,
  ) => {
    if (newValue === null) {
      onChange?.(event, multiple ? [] : null, reason, details);
      return;
    }

    onChange?.(event, newValue as AutocompleteFilterOption<Value>[], reason, details);

    if (!(disableCloseOnSelect && multiple)) {
      setInternalOpen(false);
    }
  };

  const autocomplete = (
    <MuiAutocomplete
      freeSolo={false as FreeSolo}
      multiple={multiple as Multiple}
      disableClearable={disableClearable as DisableClearable}
      value={finalValue as AutocompleteValue<AutocompleteFilterOption<Value>, Multiple, DisableClearable, FreeSolo>}
      options={options as AutocompleteFilterOption<Value>[]}
      loading={loading}
      ref={ref}
      size={size}
      disableCloseOnSelect={disableCloseOnSelect}
      onChange={handleChange}
      getLimitTagsText={Count(variant)}
      inputValue={finalInputValue}
      open={open || internalOpen}
      onOpen={() => setInternalOpen(true)}
      sx={{
        width,
        ...sx,
      }}
      slots={{
        paper: PaperComponent as JSXElementConstructor<HTMLAttributes<HTMLElement>>,
      }}
      slotProps={{
        ...slotProps,
        paper: {
          disableReset,
          disableSelectAll,
          loading,
          localeText,
          multiple,
          onChange,
          options,
          value,
          variant,
          ...slotProps?.paper,
        } as AutocompletePaperSlotPropsOverrides,
      }}
      onInputChange={(_, newInputValue, reason) => {
        if (
          (reason === "reset" && internalOpen && !resetInputValueOnSelectOption) ||
          (reason === "selectOption" && !resetInputValueOnSelectOption) ||
          (reason === "removeOption" && !resetInputValueOnSelectOption)
        ) {
          return;
        }

        if (!inputValue) {
          setInternalInputValue(newInputValue);
        }

        onInputChange?.(_, newInputValue, reason);
      }}
      onFocus={(event) => {
        setInternalOpen(true);
        onFocus?.(event);
      }}
      onBlur={(event) => {
        setInternalOpen(false);
        onBlur?.(event);
      }}
      getOptionLabel={
        getOptionLabel ||
        ((option) => {
          const label = typeof option === "object" && "label" in option ? option.label : option;
          return String(label);
        })
      }
      renderOption={
        renderOption ||
        ((optionProps, option: AutocompleteFilterOption<Value> | string, { selected }) => {
          const isHeader = typeof option !== "string" && option.isHeader;

          if (loading || isHeader) {
            return null;
          }

          const id = typeof option === "string" ? option : option?.id || option?.value || "";
          const label = typeof option === "string" ? option : option?.label;
          const image = typeof option === "string" ? undefined : option?.image;
          const key = `${id}-${optionProps?.key}`;

          return (
            <ListItem {...optionProps} key={key}>
              {!disableCheckbox && <Checkbox disableRipple checked={selected} sx={checkboxStyle} />}
              {image && (
                <ListItemAvatar
                  sx={{
                    height: 24,
                    marginRight: 1,
                    minWidth: "auto",
                    width: 24,
                  }}
                >
                  <Avatar variant="rounded" src={image} sx={{ height: 24, width: 24 }}>
                    {image === "letter" && typeof label === "string" && label?.charAt(0).toUpperCase()}
                  </Avatar>
                </ListItemAvatar>
              )}
              {typeof label === "string" ? (
                <Typography variant="body2" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden" title={label}>
                  {label}
                </Typography>
              ) : (
                label
              )}
            </ListItem>
          );
        })
      }
      renderValue={
        renderValue ||
        (withSummary
          ? (selectedValue) => {
              if (!showsSummary) {
                return null;
              }

              const { count, text } = getSummary(selectedValue as AutocompleteFilterOption[], summaryLabel);

              return (
                <Box component="span" sx={{ alignItems: "center", display: "inline-flex", marginLeft: 1, minWidth: 0 }}>
                  <Typography
                    component="span"
                    overflow="hidden"
                    sx={{ fontSize: "inherit", fontWeight: "inherit" }}
                    textOverflow="ellipsis"
                    whiteSpace="nowrap"
                  >
                    {text}
                  </Typography>
                  {count > 1 && <SummaryCount>{count}</SummaryCount>}
                </Box>
              );
            }
          : multiple
            ? (selectedValue, getItemProps, ownerState) => {
                if (Array.isArray(selectedValue)) {
                  return selectedValue.map((option, index) => {
                    if (ownerState?.focused) {
                      return null;
                    }

                    const { key } = getItemProps({ index }) as ItemPropsWithKey;

                    return (
                      <Typography key={key} marginX={1} whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                        {typeof option === "object" && "label" in option && option?.label ? option.label : option.toString()}
                      </Typography>
                    );
                  });
                }

                return null;
              }
            : undefined)
      }
      renderInput={(params) => {
        const getPlaceholder = () => {
          // No placeholder while the summary is on screen, otherwise the label prints twice
          if (withSummary) {
            return showsLabelInPlaceholder ? (placeholder ?? summaryLabel) : undefined;
          }

          if (!internalOpen && ((Array.isArray(value) && value.length) || (!Array.isArray(value) && value))) {
            return undefined;
          }

          return placeholder;
        };

        const getAdornmentElement = () => {
          if (isFilledVariant) {
            const isClearable = (finalInputValue || hasValue) && !disableClearable;

            return (
              <InputAdornment
                position="end"
                sx={{
                  color: "text.primary",
                  position: "absolute",
                  right: 6,
                }}
              >
                {isClearable ? (
                  // Always visible, hover does not exist on a touch screen
                  <IconButton
                    aria-label={t("clear")}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setInternalInputValue("");
                      onInputChange?.(e, "", "clear");
                      // Clear the value only if there is a value
                      if (hasValue) {
                        onChange?.(e, multiple ? [] : null, "clear");
                      }
                    }}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    size="small"
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: pxToRem(16),
                        pointerEvents: "none",
                      },
                      "&:hover": { backgroundColor: "action.selected" },
                      color: "text.primary",
                      cursor: "pointer",
                      padding: "3px",
                      pointerEvents: "auto",
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                ) : (
                  <ChevronIcon
                    fontSize="small"
                    sx={{
                      cursor: "pointer",
                      transform: internalOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s ease-in-out",
                    }}
                  />
                )}
              </InputAdornment>
            );
          }

          if (isChipVariant) {
            return (
              <InputAdornment
                position="end"
                sx={{
                  color: hasValue ? "text.contrast" : "text.primary",
                  position: "absolute",
                  right: 5,
                  transform: internalOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease-in-out",
                }}
              >
                {(finalInputValue || hasValue) && !disableClearable && (
                  <IconButton
                    size="small"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setInternalInputValue("");
                      onInputChange?.(e, "", "clear");
                      // Clear the value only if there is a value
                      if (hasValue) {
                        onChange?.(e, multiple ? [] : null, "clear");
                      }
                    }}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    sx={{
                      ".MuiTextField-root:hover &": {
                        opacity: 1,
                      },
                      "& .MuiSvgIcon-root": {
                        fontSize: pxToRem(16),
                        pointerEvents: "none",
                      },
                      color: hasValue ? "text.contrast" : "text.primary",
                      cursor: "pointer",
                      left: "50%",
                      opacity: 0,
                      padding: "2px",
                      pointerEvents: "auto",
                      position: "absolute",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                      transition: "opacity 0.2s ease-in-out",
                      zIndex: 1,
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                )}

                <ChevronIcon
                  fontSize="small"
                  sx={{
                    cursor: "pointer",
                    transition: "opacity 0.2s ease-in-out",
                    ...((finalInputValue || hasValue) &&
                      !disableClearable && {
                        ".MuiTextField-root:hover &": {
                          opacity: 0,
                        },
                      }),
                  }}
                />
              </InputAdornment>
            );
          }

          if (internalOpen) {
            return (
              <InputAdornment
                position="end"
                sx={{
                  position: "absolute",
                  right: 8,
                }}
              >
                {finalInputValue && !disableClearable && (
                  <IconButton
                    size="small"
                    onClick={(e) => {
                      setInternalInputValue("");
                      onInputChange?.(e, "", "clear");
                    }}
                    sx={{ marginRight: "-3px" }}
                  >
                    <CloseIcon sx={{ fontSize: pxToRem(20) }} />
                  </IconButton>
                )}
                {isValidElement(params.InputProps?.endAdornment) &&
                  typeof params.InputProps.endAdornment === "object" &&
                  "props" in params.InputProps.endAdornment &&
                  params.InputProps.endAdornment.props &&
                  typeof params.InputProps.endAdornment.props === "object" &&
                  "children" in params.InputProps.endAdornment.props &&
                  Array.isArray(params.InputProps.endAdornment.props.children) &&
                  params.InputProps.endAdornment.props.children[1]}
              </InputAdornment>
            );
          }

          if (isValidElement(params.InputProps?.endAdornment)) {
            return params.InputProps.endAdornment;
          }

          return null;
        };

        return (
          <TextField
            sx={{
              "& .MuiInputBase-root .MuiInputBase-input": {
                flex: !(multiple && (internalOpen || finalInputValue)) || internalOpen ? 1 : 0,
                minWidth: 0,
              },
              ...(isChipVariant && {
                "& .MuiInputBase-root": {
                  backgroundColor: hasValue ? "text.primary" : "grey.100",
                  borderRadius: 20,
                  color: hasValue ? "text.contrast" : "text.primary",
                  fieldset: {
                    borderColor: "transparent !important",
                  },
                  fontSize: getChipStyle(size).fontSize,
                  height: getChipStyle(size).height,
                  input: {
                    padding: "0 !important",
                  },
                  minWidth: 90,
                  "p.MuiTypography-root": {
                    fontSize: getChipStyle(size).fontSize,
                    margin: 0,
                  },
                  paddingRight: "30px !important",
                  paddingY: "0 !important",
                },
              }),
              ...(isFilledVariant && {
                "& .MuiInputBase-root": {
                  "&:hover": {
                    // Overlays stack as background layers, so a set filter keeps its selected tint and gains the hover one on top
                    backgroundImage: (theme: Theme) =>
                      hasValue
                        ? `${overlay(theme.palette.action.selected)}, ${overlay(theme.palette.action.hover)}`
                        : overlay(theme.palette.action.hover),
                  },
                  backgroundColor: "grey.100",
                  // Keep the input on the summary line instead of wrapping the filter to two rows
                  flexWrap: "nowrap",
                  ...(hasValue && {
                    backgroundImage: (theme: Theme) => overlay(theme.palette.action.selected),
                  }),
                  // Explicit px: a bare number is multiplied by shape.borderRadius, `borderRadius: 20` came out as 160px
                  borderRadius: (theme: Theme) => `${theme.shape.borderRadius}px`,
                  color: "text.primary",
                  cursor: "pointer",
                  fieldset: {
                    borderColor: "transparent !important",
                  },
                  fontSize: getFilledStyle(size).fontSize,
                  fontWeight: 400,
                  height: getFilledStyle(size).height,
                  input: {
                    // The placeholder is a label here, not a hint, so it keeps full contrast
                    "&::placeholder": {
                      color: "text.primary",
                      opacity: 1,
                    },
                    cursor: "pointer",
                    padding: "0 !important",
                    // Keep the placeholder label from being clipped once it passes the 90px floor
                    ...(showsLabelInPlaceholder && { minWidth: "max-content !important" }),
                  },
                  maxWidth: FILLED_MAX_WIDTH,
                  minWidth: 90,
                  "p.MuiTypography-root": {
                    fontSize: getFilledStyle(size).fontSize,
                    margin: 0,
                  },
                  // MUI gives sizeSmall a 6px padding while medium and the custom xSmall get 9px — align all three
                  paddingLeft: "9px !important",
                  paddingRight: "30px !important",
                  paddingY: "0 !important",
                },
              }),
            }}
            {...params}
            slotProps={{
              htmlInput: {
                ...params.inputProps,
                ...(placeholder && { "aria-label": placeholder }),
                ...(withSummary && showsLabelInPlaceholder && summaryLabel && { size: summaryLabel.length + 2 }),
              },
              input: {
                ...params.InputProps,
                endAdornment: getAdornmentElement(),
              },
            }}
            placeholder={getPlaceholder()}
          />
        );
      }}
      {...props}
    />
  );

  if (!tooltip) {
    return autocomplete;
  }

  return (
    <Tooltip title={tooltip} {...tooltipProps}>
      {autocomplete}
    </Tooltip>
  );
};

export default forwardRef(AutocompleteFilter);
