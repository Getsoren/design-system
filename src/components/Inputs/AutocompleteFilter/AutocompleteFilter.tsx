import {
  AutocompletePaperSlotPropsOverrides,
  AutocompleteValue,
  Avatar,
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
  Popper,
  PopperProps,
  TextField,
  Theme,
  Tooltip,
  TooltipProps,
  Typography,
} from "@mui/material";
import type { AutocompleteChangeDetails, AutocompleteChangeReason } from "@mui/material/useAutocomplete";
import type { Instance } from "@popperjs/core";
import {
  ElementType,
  forwardRef,
  HTMLAttributes,
  isValidElement,
  JSXElementConstructor,
  ReactNode,
  Ref,
  RefObject,
  SyntheticEvent,
  useEffect,
  useRef,
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

/** Summary shown inside the filter once it holds a value: one value is spelled out, several collapse to the label; the count badge shows from the first selection */
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
  return { count: 1, text: label ? `${label} : ${texts[0]}` : texts[0] };
};

/** Primary pill shared by the summary count and the collapsed-tags "+N" badge, so every count in the filter reads the same */
const CountPill = ({
  children,
  compact,
  inverted,
  withMargin,
}: {
  children: ReactNode;
  compact?: boolean;
  inverted?: boolean;
  withMargin?: boolean;
}) => (
  <Box
    component="span"
    sx={{
      alignItems: "center",
      // Inverted on the chip variant, whose selected background is already dark
      backgroundColor: inverted ? "grey.100" : "primary.main",
      borderRadius: 99,
      color: inverted ? "text.primary" : "primary.contrastText",
      display: "inline-flex",
      flexShrink: 0,
      fontSize: pxToRem(11),
      fontWeight: 500,
      // Slightly shorter inside the chip variant so the pill never touches the chip's edges
      height: compact ? 16 : 18,
      justifyContent: "center",
      lineHeight: 1,
      marginLeft: withMargin ? 0.75 : 0,
      minWidth: compact ? 16 : 18,
      paddingX: "5px",
    }}
  >
    {/* Poppins' vertical metrics leave digits ~0.5px above the geometric center at this size */}
    <Box component="span" sx={{ position: "relative", top: "0.5px" }}>
      {children}
    </Box>
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
  const isChipVariant = variant === "chip";

  return function RenderCount(more: number) {
    return (
      <CountPill compact={isChipVariant} inverted={isChipVariant}>
        {`+${more}`}
      </CountPill>
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
    <Paper sx={{ minWidth: 350 }} {...props}>
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

/**
 * Popper kept aligned with the field: anchored on its left edge rather than centered
 * (the panel is often wider than the field), and repositioned when opening the filter
 * resizes the field — the appearing input can widen it, which would leave the panel offset.
 */
const AnchorResizePopper = ({ anchorEl, popperRef, sx, ...props }: PopperProps) => {
  const instanceRef = useRef<Instance | null>(null);

  const handlePopperRef = (instance: Instance | null) => {
    instanceRef.current = instance;
    if (typeof popperRef === "function") {
      popperRef(instance);
    } else if (popperRef) {
      (popperRef as RefObject<Instance | null>).current = instance;
    }
  };

  /**
   * popper.js only recomputes on window scroll/resize, so watch the anchor itself
   * and reposition the panel whenever the field changes size
   */
  useEffect(() => {
    if (!(anchorEl instanceof HTMLElement)) {
      return undefined;
    }

    const observer = new ResizeObserver(() => {
      instanceRef.current?.update();
    });

    observer.observe(anchorEl);

    return () => observer.disconnect();
  }, [anchorEl]);

  return (
    <Popper
      placement="bottom-start"
      {...props}
      anchorEl={anchorEl}
      popperRef={handlePopperRef}
      sx={[({ zIndex }: Theme) => ({ zIndex: zIndex.modal }), ...(Array.isArray(sx) ? sx : [sx])]}
    />
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
    slotProps,
    tooltip,
    tooltipProps,
    size = "small",
    disableCloseOnSelect = true,
    multiple = true,
    options = [],
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
  const summaryLabel = label ?? placeholder;
  const withSummary = !!summaryLabel;
  const isSearching = internalOpen && !!finalInputValue;
  const isClearable = (!!finalInputValue || hasValue) && !disableClearable;
  const showsSummary = withSummary && hasValue && !isSearching;
  const showsLabelInPlaceholder = withSummary && !showsSummary;
  // Blurred with the selection displayed outside the input (summary or first value + pill),
  // the input is invisible dead weight that only truncates the label — collapse it entirely.
  // Single mode without a summary keeps it: the value lives in the input itself.
  const hidesInput = hasValue && (multiple || showsSummary) && !internalOpen;

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
        popper: AnchorResizePopper,
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

              // No left margin: the summary sits where the placeholder label sits,
              // the field keeps the same indent with or without a selection
              return (
                <Box component="span" sx={{ alignItems: "center", display: "inline-flex", minWidth: 0 }}>
                  <Typography
                    component="span"
                    overflow="hidden"
                    sx={{ fontSize: "inherit", fontWeight: "inherit" }}
                    textOverflow="ellipsis"
                    whiteSpace="nowrap"
                  >
                    {text}
                  </Typography>
                  {count > 0 && (
                    <CountPill inverted={isChipVariant} withMargin>
                      {count}
                    </CountPill>
                  )}
                </Box>
              );
            }
          : multiple
            ? (selectedValue, getItemProps) => {
                if (!(Array.isArray(selectedValue) && selectedValue.length)) {
                  return null;
                }

                // Hide the values only while the user is typing, so the input has room for the search text
                if (isSearching) {
                  return null;
                }

                const optionLabel = (option: AutocompleteFilterOption<Value> | string) =>
                  typeof option === "object" && "label" in option && option?.label ? option.label : option.toString();

                // Same shape as the summary mode: first value spelled out, total count pill from
                // the first selection, in one center-aligned container so the pill stays level with
                // the value. Rendered identically focused and blurred (a fragment instead of an
                // array also keeps MUI's limitTags splicing from producing a second, different collapse).
                const [first] = selectedValue;
                const { key } = getItemProps({ index: 0 }) as ItemPropsWithKey;

                return (
                  <Box key={key} component="span" sx={{ alignItems: "center", display: "inline-flex", minWidth: 0 }}>
                    {/* minWidth 0 so the value ellipsises instead of pushing the input (and its caret) out of the field */}
                    <Typography minWidth={0} whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                      {optionLabel(first)}
                    </Typography>
                    <CountPill compact={isChipVariant} inverted={isChipVariant} withMargin>
                      {selectedValue.length}
                    </CountPill>
                  </Box>
                );
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
            return (
              <InputAdornment
                position="end"
                sx={{
                  color: "text.primary",
                  position: "absolute",
                  // Mirrors the left padding, a touch more air on the tallest size
                  right: size === "medium" ? "8px" : "6px",
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
                {isClearable && (
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
                    ...(isClearable && {
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
            // Reopen on click anywhere in the field: after a single-mode select the panel
            // closes but the input keeps focus, so no focus event will ever fire again —
            // clicking the summary/label was a dead zone until the field was blurred
            onClick={() => {
              if (!params.disabled) {
                setInternalOpen(true);
              }
            }}
            sx={{
              // The input class is doubled like the flexWrap rule below: MUI's own
              // `min-width: 30px` on the multiple-mode input ties this rule's specificity,
              // and losing the injection-order race left a 30px hole in the summary
              "& .MuiInputBase-root .MuiInputBase-input.MuiInputBase-input": {
                ...(hidesInput
                  ? {
                      flex: "0 0 0px",
                      minWidth: 0,
                      // Horizontal only: the vertical padding is what gives the standard
                      // field its height per size — zeroed, a closed medium collapsed to
                      // the small height. !important so it beats MUI's own !important-free
                      // padding rules of equal specificity regardless of injection order
                      paddingLeft: "0 !important",
                      paddingRight: "0 !important",
                    }
                  : {
                      flex: !(multiple && (internalOpen || finalInputValue)) || internalOpen ? 1 : 0,
                      // Breathing room between the summary/count and the caret — only when such an
                      // element precedes the input: in single mode without a summary the value lives
                      // in the input itself, and the margin would shift it on open.
                      // Standard's input keeps its 5px left padding (chip/filled zero it), so 1px
                      // of margin lands the caret ~6px after the value, same gap as the pills
                      ...(hasValue &&
                        (multiple || showsSummary) && {
                          marginLeft: isChipVariant || isFilledVariant ? 0.75 : "1px",
                        }),
                      // Keep the placeholder label from being clipped by the min-width floor.
                      // Once open, keep enough width for the blinking text caret: squeezed
                      // to zero by the summary, nothing shows the field accepts typing
                      minWidth: showsLabelInPlaceholder
                        ? "max-content"
                        : isChipVariant || isFilledVariant
                          ? hasValue && (multiple || showsSummary)
                            ? 12
                            : 0
                          : internalOpen
                            ? 24
                            : 0,
                    }),
              },
              // Keep the input on the summary line instead of wrapping the filter to two rows.
              // The class is doubled on purpose: MUI's multiple-mode `flex-wrap: wrap` on the
              // inputRoot has the same specificity as a single-class sx rule, so the winner
              // would depend on style injection order — the input randomly dropped under the summary.
              "& .MuiInputBase-root.MuiInputBase-root": {
                flexWrap: "nowrap",
              },
              ...(!(isChipVariant || isFilledVariant) && {
                // MUI gives sizeSmall a 6px left padding while medium and the custom xSmall get 9px —
                // align the three (root 9px + input 5px = same 14px text inset as the other sizes)
                "& .MuiOutlinedInput-root.MuiInputBase-sizeSmall": {
                  // Skipped while the input is collapsed: both rules are !important at
                  // equal specificity, this one must not resurrect the phantom width
                  ...(!hidesInput && {
                    "& .MuiAutocomplete-input": {
                      paddingLeft: "5px !important",
                    },
                  }),
                  paddingLeft: "9px !important",
                },
                // At rest the clear cross is invisible (MUI reveals it on hover/focus), yet its
                // slot stays reserved and stops the summary 26px before the visible icons — give
                // that slot back to the label, and re-reserve it exactly when the cross appears.
                // !important: MUI's hasClearIcon padding rules tie this sx's specificity
                ...(!internalOpen &&
                  isClearable &&
                  !params.disabled && {
                    "& .MuiInputBase-root.MuiInputBase-root": {
                      // 26 + 4 + 9: MUI's own chevron-only reservation, as if there were no cross
                      paddingRight: "39px !important",
                      transition: "padding-right 0.2s ease-in-out",
                    },
                    "&:hover .MuiInputBase-root, & .MuiInputBase-root.Mui-focused": {
                      // 52 + 4 + 9: MUI's two-icon reservation, restored while the cross shows
                      paddingRight: "65px !important",
                    },
                  }),
              }),
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
                    // A text cursor while open, so the field reads as an input
                    cursor: internalOpen ? "text" : "pointer",
                    padding: "0 !important",
                  },
                  maxWidth: FILLED_MAX_WIDTH,
                  minWidth: 90,
                  "p.MuiTypography-root": {
                    fontSize: getFilledStyle(size).fontSize,
                    margin: 0,
                  },
                  // MUI gives sizeSmall a 6px padding while medium and the custom xSmall get 9px —
                  // align the three, with a touch more air on the tallest size
                  paddingLeft: size === "medium" ? "11px !important" : "9px !important",
                  paddingRight: size === "medium" ? "32px !important" : "30px !important",
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
