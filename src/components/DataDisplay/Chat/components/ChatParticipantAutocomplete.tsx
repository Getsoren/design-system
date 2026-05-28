import { getInitials } from "@getsoren/react-utils";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { type Ref, useImperativeHandle, useRef } from "react";
import Avatar from "@/components/DataDisplay/Avatar";
import type { ChatSearchUser } from "@/components/DataDisplay/Chat/types";
import Chip from "@/components/DataDisplay/Chip";

export interface ChatParticipantAutocompleteHandle {
  focus: () => void;
}

interface ChatParticipantAutocompleteProps {
  ref?: Ref<ChatParticipantAutocompleteHandle>;
  value: ChatSearchUser[];
  onChange: (value: ChatSearchUser[]) => void;
  onInputChange?: (query: string) => void;
  options?: ChatSearchUser[];
  isLoading?: boolean;
  avatarSrcResolver?: (src?: string | null) => string | undefined;
  labels?: {
    participants?: string;
    searchContacts?: string;
    noOptionsText?: string;
  };
}

const getFullName = (user: ChatSearchUser) => `${user.firstName} ${user.lastName}`;

const ChatParticipantAutocomplete = ({
  ref,
  value,
  onChange,
  onInputChange,
  options,
  isLoading,
  avatarSrcResolver,
  labels,
}: ChatParticipantAutocompleteProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    },
  }));

  return (
    <Autocomplete
      open
      multiple
      disablePortal
      disableCloseOnSelect
      options={options ?? []}
      getOptionLabel={getFullName}
      filterOptions={(x) => x}
      loading={isLoading}
      noOptionsText={labels?.noOptionsText}
      isOptionEqualToValue={(option, val) => option.id === val.id}
      value={value}
      slotProps={{
        listbox: {
          sx: {
            maxHeight: 400,
          },
        },
        paper: {
          elevation: 0,
          sx: {
            border: 0,
            borderRadius: 0,
          },
        },
        popper: {
          sx: {
            position: "relative !important",
            transform: "none !important",
          },
        },
      }}
      onChange={(_, val) => onChange(val)}
      onInputChange={(_, val, reason) => {
        if (reason === "input") {
          onInputChange?.(val);
        }
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          inputRef={inputRef}
          label={labels?.participants ?? "Participants"}
          placeholder={labels?.searchContacts ?? "Search contacts..."}
          slotProps={{
            input: {
              ...params.InputProps,
              endAdornment: (
                <>
                  {isLoading ? <CircularProgress size={20} /> : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            },
          }}
        />
      )}
      renderValue={(val, getTagProps) =>
        val.map((option, index) => {
          const { key, ...tagProps } = getTagProps({ index });
          return <Chip key={key} label={getFullName(option)} {...tagProps} />;
        })
      }
      renderOption={(props, option) => (
        <li {...props} key={option.id}>
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Avatar src={avatarSrcResolver?.(option.avatar)} alt={getFullName(option)}>
              {getInitials({ firstName: option.firstName, lastName: option.lastName }, true)}
            </Avatar>
            <Stack>
              <Typography textTransform="capitalize">{getFullName(option)}</Typography>
              <Typography variant="caption" color="text.secondary">
                {option.email}
              </Typography>
            </Stack>
          </Stack>
        </li>
      )}
    />
  );
};

export default ChatParticipantAutocomplete;
