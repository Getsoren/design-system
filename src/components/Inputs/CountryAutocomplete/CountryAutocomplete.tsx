import { Autocomplete, Box, createFilterOptions, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import isoToEmojiFlag from "@/utils/isoToEmojiFlag";

export interface CountryOption {
  /** ISO 3166-1 alpha-2 code — "FR" */
  codeIso2: string;
  /** Human-readable country name */
  country: string;
  /** International dialing prefix — "+33" */
  phoneCode: string;
}

export interface CountryAutocompleteProps {
  /** Options offered by the picker — the list (and its fetching) belongs to the consumer */
  countries: CountryOption[];
  /** Forwarded as `data-test` on the root element, for end-to-end selectors */
  dataTest?: string;
  /** ISO2 code shown while `value` is null, resolved from `countries` — e.g. the tenant's home country */
  defaultCountryCode?: string;
  /** Field label, already translated by the consumer (the design system only bundles en/fr) */
  label: string;
  /** Fires on user selection only — never for the resolved `defaultCountryCode` */
  onChange: (country: CountryOption) => void;
  /** Marks the field required (label asterisk) — validation itself belongs to the consumer */
  required?: boolean;
  /** Controlled selection; `null` shows `defaultCountryCode` (or nothing) until the user picks */
  value: CountryOption | null;
  /** Field width — the closed field only shows flag + ISO2 code, so its natural width is stable */
  width?: number | string;
}

const filterOptions = createFilterOptions<CountryOption>({
  matchFrom: "any",
  stringify: (option) => `${option.country} ${option.codeIso2} ${option.phoneCode}`,
  trim: true,
});

/**
 * Country picker showing flag + ISO2 code, searchable by name, code or phone prefix.
 * Purely presentational: the country list (and the label translation) belong to the consumer.
 */
const CountryAutocomplete = ({
  countries,
  dataTest,
  defaultCountryCode,
  label,
  onChange,
  required,
  value,
  width = 110,
}: CountryAutocompleteProps) => {
  // What the field shows: the controlled value, or the default resolved from the list until a selection is made
  const displayedValue = value ?? countries.find((option) => option.codeIso2 === defaultCountryCode) ?? null;

  return (
    <Autocomplete
      // The flag adornment is outside MUI's click-to-open zone (the input itself): opening on
      // focus makes the whole field a target, flag included — and helps keyboard users too
      openOnFocus
      disableClearable
      data-test={dataTest}
      sx={{
        "& .MuiInputBase-root": { flexWrap: "nowrap" },
        // The extra `.MuiInputBase-root` level outweighs MUI's own `.MuiAutocomplete-inputRoot .MuiAutocomplete-input`
        // padding rule — same specificity would lose on injection order
        "& .MuiInputBase-root .MuiAutocomplete-input": { minWidth: 0, paddingLeft: 0 },
        flexShrink: 0,
        width,
      }}
      value={displayedValue as CountryOption}
      options={countries}
      onChange={(_, newValue) => newValue && onChange(newValue)}
      isOptionEqualToValue={(option, optionValue) => option.codeIso2 === optionValue.codeIso2}
      getOptionLabel={(option) => option.codeIso2}
      slotProps={{ paper: { sx: { minWidth: 320 } } }}
      filterOptions={filterOptions}
      renderOption={({ key, ...props }, option) => (
        <Box key={key} component="li" {...props}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography fontSize={24}>{isoToEmojiFlag(option.codeIso2)}</Typography>
            <Stack direction="row" alignItems="baseline" spacing={0.5}>
              <Typography>{option.codeIso2}</Typography>
              <Typography variant="caption" color="textSecondary">
                {option.country} {option.phoneCode}
              </Typography>
            </Stack>
          </Stack>
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          fullWidth
          label={label}
          required={required}
          slotProps={{
            input: {
              ...params.InputProps,
              // `color: initial` un-tints the emoji: the adornment's default `action.active` colour
              // (54% alpha) visibly dims the flag glyph. 20px + 1px nudge optically centers it on
              // the input text — values checked pixel-wise in the Storybook story.
              startAdornment: displayedValue && (
                <InputAdornment position="start" disableTypography sx={{ color: "initial", fontSize: 20, transform: "translateY(1px)" }}>
                  {isoToEmojiFlag(displayedValue.codeIso2)}
                </InputAdornment>
              ),
            },
          }}
        />
      )}
    />
  );
};

export default CountryAutocomplete;
