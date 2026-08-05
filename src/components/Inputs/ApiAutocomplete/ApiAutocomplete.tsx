import { useDebounce } from "@getsoren/react-utils";
import {
  Autocomplete,
  AutocompleteChangeReason,
  AutocompleteFreeSoloValueMapping,
  AutocompleteInputChangeReason,
  AutocompleteProps,
  AutocompleteRenderGroupParams,
  AutocompleteRenderOptionState,
  Avatar,
  CircularProgress,
  InputAdornment,
  ListItem,
  ListItemAvatar,
  PopperProps,
  SxProps,
  TextField,
  TextFieldProps,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  HTMLAttributes,
  JSXElementConstructor,
  KeyboardEvent,
  ReactNode,
  Ref,
  SyntheticEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

interface ActionOption {
  label?: ReactNode;
  onClick?: () => void;
  value?: unknown;
  isActionOption?: boolean;
  isActionStartOption?: boolean;
}

export interface ApiAutocompleteProps<
  Value,
  Multiple extends boolean | undefined = false,
  DisableClearable extends boolean | undefined = false,
> {
  /**
   * Action row appended at the end of the options list
   */
  actionEndOption?: ActionOption;
  /**
   * Action row pinned at the top of the options list (e.g. a "create new…" entry)
   */
  actionStartOption?: ActionOption;
  /** Replaces the default dropdown caret (e.g. a switcher's up/down chevrons). */
  popupIcon?: ReactNode;
  limitTags?: number;
  defaultValue?: Value;
  value?: Multiple extends true ? Value[] | null : Value | null;
  label?: string;
  placeholder?: string;
  name?: string;
  keyOptionLabel: string | string[];
  noOptionsText?: ReactNode;
  getOptionLabel?: (option: Value) => string;
  renderOption?: (props: HTMLAttributes<HTMLLIElement>, option: Value & ActionOption, state: AutocompleteRenderOptionState) => ReactNode;
  searchKey?: string;
  required?: boolean;
  queryParams?: Record<string, unknown>;
  queryParamsOnFocus?: Record<string, unknown>;
  queryOptions?: Record<string, unknown>;
  helperMessage?: string | false;
  disabled?: boolean;
  disableClearable?: DisableClearable;
  width?: number | string;
  sx?: SxProps;
  error?: boolean;
  openOnFocus?: boolean;
  autoHighlight?: boolean;
  getOptionKey?: (option: Value) => string;
  size?: AutocompleteProps<Value, false, false, false>["size"];
  renderInput?: AutocompleteProps<Value, false, false, false>["renderInput"];
  InputProps?: TextFieldProps["InputProps"];
  setSelectedValue?: (value: Multiple extends true ? Value[] | null : Value | null) => void;
  shrink?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  variant?: "standard" | "outlined" | "filled";
  endAdornment?: ReactNode;
  /** Hide the circular loader shown in the input while fetching; the listbox loading state is unaffected. */
  disableInputLoader?: boolean;
  fetchOnFocus?: boolean;
  filterOptions?: (options: Value[], state: { inputValue: string }) => Value[];
  groupBy?: (option: Value) => string;
  slotProps?: AutocompleteProps<Value, false, false, false>["slotProps"];
  inputSlotProps?: TextFieldProps["slotProps"];
  disableCloseOnSelect?: boolean;
  PopperComponent?: JSXElementConstructor<PopperProps>;
  ListboxProps?: AutocompleteProps<Value, false, false, false>["ListboxProps"];
  renderGroup?: (params: AutocompleteRenderGroupParams) => ReactNode;
  filterSelectedOptions?: boolean;
  inputRef?: Ref<HTMLInputElement>;
  multiple?: Multiple;
  open?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  blurOnSelect?: "touch" | "mouse" | true | false;
  autoFocus?: boolean;
  onKeyDown?: (event: KeyboardEvent<HTMLDivElement>) => void;
  onNoResults?: (search: string) => void;
  /** Resolves the option `image` field to a displayable URL (e.g. a CDN path adapter). Identity by default. */
  getOptionImageSrc?: (imagePath: string) => string | undefined;
  onChange?(event: SyntheticEvent, value: Value | Value[] | null, reason: AutocompleteChangeReason): void;
  /**
   * Injected query hook. Structurally typed so any data layer fits (react-query hooks match as-is)
   * without making the library depend on one.
   */
  useQuery(
    params?: Record<string, unknown>,
    options?: {
      query: {
        enabled: boolean;
      };
    },
  ): {
    data?: Value[];
    isFetching: boolean;
    refetch: (refetchOptions?: Record<string, unknown>) => Promise<unknown>;
  };
}

const getEndAdornment = (isFetching: boolean, InputProps?: TextFieldProps["InputProps"], endAdornment?: ReactNode) => {
  if (isFetching) {
    return (
      <InputAdornment position="end" sx={{ position: "absolute", right: 11 }}>
        <CircularProgress color="inherit" size={20} />
      </InputAdornment>
    );
  }

  if (InputProps?.endAdornment !== undefined) {
    return InputProps?.endAdornment;
  }

  return endAdornment;
};

const ApiAutocomplete = <Value extends Record<string | symbol, any>>({
  actionEndOption,
  actionStartOption,
  popupIcon,
  blurOnSelect,
  label,
  placeholder,
  name,
  slotProps,
  disableClearable,
  setSelectedValue,
  useQuery,
  noOptionsText,
  renderOption,
  getOptionLabel: getOptionLabelProp,
  keyOptionLabel,
  queryParams,
  openOnFocus,
  autoHighlight,
  queryParamsOnFocus,
  queryOptions,
  required,
  helperMessage,
  error,
  disabled,
  defaultValue,
  onFocus,
  onBlur,
  onChange,
  sx,
  renderInput,
  variant,
  InputProps,
  size,
  shrink,
  getOptionKey,
  width,
  limitTags,
  groupBy,
  disableCloseOnSelect,
  renderGroup,
  value,
  PopperComponent,
  ListboxProps,
  multiple,
  filterSelectedOptions,
  autoFocus,
  onKeyDown,
  onNoResults,
  endAdornment,
  inputSlotProps,
  inputRef,
  open,
  onOpen,
  onClose,
  searchKey = "q",
  disableInputLoader = false,
  fetchOnFocus = false,
  filterOptions = (option) => option,
  getOptionImageSrc = (imagePath) => imagePath || undefined,
}: ApiAutocompleteProps<Value>) => {
  const [search, setSearch] = useState("");
  const [inputValue, setInputValue] = useState("");
  const debounceSearch = useDebounce(search, 300);
  const shouldHideDropdown = !(fetchOnFocus || search);
  const isDropdownOpen = open === undefined ? undefined : shouldHideDropdown ? false : open;

  const currentQueryParams = debounceSearch ? queryParams : (queryParamsOnFocus ?? queryParams);

  const isOpen = open ?? true;

  const { data, isFetching, refetch } = useQuery(
    { [searchKey]: debounceSearch || undefined, ...currentQueryParams },
    {
      query: {
        enabled: isOpen && (fetchOnFocus || !!debounceSearch),
        ...queryOptions,
      },
    },
  );

  const autocompleteOptions = useMemo(() => {
    if (!(Array.isArray(data) || actionEndOption || actionStartOption)) {
      return [];
    }

    if (actionEndOption || actionStartOption) {
      return [
        ...(actionStartOption
          ? [
              {
                id: "apiAutocompletePropsActionStartOption",
                isActionOption: true,
                isActionStartOption: true,
                label: actionStartOption?.label,
              } as unknown as Value & ActionOption,
            ]
          : []),
        ...(Array.isArray(data) ? data : []),
        ...(actionEndOption
          ? [
              {
                id: "apiAutocompletePropsActionOption",
                isActionOption: true,
                label: actionEndOption?.label,
              } as unknown as Value & ActionOption,
            ]
          : []),
      ];
    }

    const isValueIncludedInOptions = !data?.some((option) => {
      if (Array.isArray(value)) {
        return value.some((val) => option.id === val.id);
      }

      if (value && typeof value === "object" && "id" in value) {
        return option.id === value.id;
      }

      return true;
    });

    if (value && isValueIncludedInOptions) {
      return [value, ...(data || [])];
    }

    return data || [];
  }, [data, actionEndOption, actionStartOption, value]);

  const handleOnChange = useCallback(
    (_: SyntheticEvent, newValue: Value | null, reason: AutocompleteChangeReason) => {
      if (Array.isArray(newValue) && newValue.some((item) => item?.isActionOption)) {
        setInputValue("");
        (newValue.some((item) => item?.isActionStartOption) ? actionStartOption : actionEndOption)?.onClick?.();
        return;
      }

      if (Array.isArray(newValue)) {
        setSelectedValue?.(newValue);
        onChange?.(_, newValue, reason);
        return;
      }

      if (newValue?.isActionOption) {
        setInputValue("");
        (newValue.isActionStartOption ? actionStartOption : actionEndOption)?.onClick?.();
        return;
      }

      // Reset selected value when clear
      if (reason === "clear") {
        setSelectedValue?.(null);
        onChange?.(_, newValue, reason);
        return;
      }

      // Set selected value when select
      if (newValue) {
        setSelectedValue?.(newValue);
      }

      onChange?.(_, newValue, reason);
    },
    [actionEndOption, actionStartOption, onChange, setSelectedValue],
  );

  const handleOnInputChange = useCallback((_: SyntheticEvent, newInputValue: string, reason: AutocompleteInputChangeReason) => {
    setInputValue(newInputValue);

    if (reason === "input") {
      setSearch(newInputValue);
    }
  }, []);

  const onFocusHandler = useCallback(async () => {
    // Only refetch on focus if no value is already selected
    if (fetchOnFocus && !value) {
      await refetch({ [searchKey]: debounceSearch, ...queryParams });
    }

    onFocus?.();
  }, [debounceSearch, onFocus, fetchOnFocus, queryParams, refetch, searchKey, value]);

  const onBlurHandler = useCallback(() => {
    setSearch("");
    onBlur?.();
  }, [onBlur]);

  const defaultGetOptionLabel = useCallback(
    (option: Value | AutocompleteFreeSoloValueMapping<unknown>) => {
      if (Array.isArray(option)) {
        return option
          .map((opt) => {
            if (opt?.isActionOption) {
              return opt.label;
            }
            if (typeof keyOptionLabel === "string") {
              return opt?.[keyOptionLabel];
            }
            return keyOptionLabel.map((key) => opt[key]).join(" ");
          })
          .join(", ");
      }

      if (typeof keyOptionLabel === "string") {
        return option?.[keyOptionLabel];
      }

      return keyOptionLabel.map((key) => option[key]).join(" ");
    },
    [keyOptionLabel],
  );

  // Use the consumer-provided label resolver when available, otherwise fall back to the keyOptionLabel-based one.
  const getOptionLabel = useCallback(
    (option: Value | AutocompleteFreeSoloValueMapping<unknown>) =>
      getOptionLabelProp && !Array.isArray(option) && !(option as ActionOption)?.isActionOption
        ? getOptionLabelProp(option as Value)
        : defaultGetOptionLabel(option),
    [getOptionLabelProp, defaultGetOptionLabel],
  );

  const isOptionEqualToValue = useCallback(
    (option: Value, currentValue: Value) => {
      if (Array.isArray(currentValue)) {
        return currentValue.some((val) => {
          if (!(option && val)) {
            return false;
          }

          if (typeof keyOptionLabel === "string") {
            return option[keyOptionLabel] === val[keyOptionLabel];
          }

          return keyOptionLabel.map((key) => option?.[key]).join(" ") === keyOptionLabel.map((key) => val?.[key]).join(" ");
        });
      }

      if (typeof keyOptionLabel === "string") {
        return option[keyOptionLabel] === currentValue[keyOptionLabel];
      }

      return keyOptionLabel.map((key) => option?.[key]).join(" ") === keyOptionLabel.map((key) => currentValue[key]).join(" ");
    },
    [keyOptionLabel],
  );

  /**
   * Notify the parent when a non-empty search query resolves with zero results.
   * Deps are value-based (length), so repeated empty responses for the same query don't double-fire.
   */
  useEffect(() => {
    if (!onNoResults || isFetching || !debounceSearch || data === undefined) {
      return;
    }

    if (data.length === 0) {
      onNoResults(debounceSearch);
    }
  }, [onNoResults, isFetching, debounceSearch, data]);

  return (
    <Autocomplete
      {...(popupIcon ? { popupIcon } : {})}
      autoHighlight={autoHighlight}
      openOnFocus={openOnFocus}
      blurOnSelect={blurOnSelect}
      fullWidth={!width}
      filterSelectedOptions={filterSelectedOptions}
      multiple={multiple}
      limitTags={limitTags}
      groupBy={groupBy}
      disableCloseOnSelect={disableCloseOnSelect}
      disableClearable={disableClearable}
      defaultValue={defaultValue}
      value={value}
      disabled={disabled}
      filterOptions={filterOptions}
      size={size}
      renderGroup={renderGroup}
      sx={sx}
      getOptionKey={getOptionKey}
      noOptionsText={noOptionsText}
      open={isDropdownOpen}
      onOpen={onOpen}
      onClose={onClose}
      loading={isFetching}
      inputValue={inputValue}
      options={autocompleteOptions}
      onBlur={onBlurHandler}
      onFocus={onFocusHandler}
      onChange={handleOnChange}
      onInputChange={handleOnInputChange}
      getOptionLabel={getOptionLabel}
      isOptionEqualToValue={isOptionEqualToValue}
      slots={{
        popper: PopperComponent,
      }}
      slotProps={{
        listbox: ListboxProps,
        ...slotProps,
      }}
      renderOption={
        renderOption ||
        ((props, option) => {
          const { key, ...rest } = props;
          const imagePath = option && typeof option === "object" && "image" in option ? option.image : "";
          const optionLabel = getOptionLabel(option);

          return (
            <Tooltip key={key} title={optionLabel} placement="right">
              <ListItem key={key} {...rest}>
                <ListItemAvatar>
                  <Avatar variant="rounded" src={getOptionImageSrc(imagePath)}>
                    {optionLabel.charAt(0).toUpperCase()}
                  </Avatar>
                </ListItemAvatar>
                <Typography variant="body2" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
                  {optionLabel}
                </Typography>
              </ListItem>
            </Tooltip>
          );
        })
      }
      renderInput={
        renderInput ||
        ((params) => (
          <TextField
            {...params}
            data-testid="api-autocomplete"
            autoFocus={autoFocus}
            required={required}
            label={label}
            name={name}
            error={error}
            helperText={helperMessage}
            variant={variant}
            sx={{ width }}
            onKeyDown={onKeyDown}
            placeholder={placeholder}
            inputRef={inputRef}
            slotProps={{
              input: {
                ...params.InputProps,
                ...InputProps,
                endAdornment:
                  endAdornment === null
                    ? null
                    : endAdornment || getEndAdornment(isFetching && !disableInputLoader, InputProps, params.InputProps.endAdornment),
              },
              inputLabel: {
                ...params.InputLabelProps,
                shrink,
              },
              ...inputSlotProps,
            }}
          />
        ))
      }
    />
  );
};

export default ApiAutocomplete;
