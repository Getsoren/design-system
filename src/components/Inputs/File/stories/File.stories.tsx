import { Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import { useRef, useState } from "react";
import Button from "@/components/Inputs/Button/Button";
import File, { HTMLInputElementFile } from "@/components/Inputs/File/File";

const Template: StoryFn<typeof File> = (args) => {
  const inputRef = useRef<HTMLInputElementFile>(null);
  const inputMediumRef = useRef<HTMLInputElementFile>(null);

  return (
    <Stack
      spacing={2}
      height="100%"
      alignItems="center"
      justifyContent="center"
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        // eslint-disable-next-line no-alert
        alert("Submitted");
      }}
    >
      <File size="small" {...args} ref={inputRef} />
      <File size="medium" {...args} ref={inputMediumRef} />
      <Stack direction="row" spacing={1}>
        <Button onClick={() => inputRef?.current?.reset()} color="error" variant="outlined">
          Reset
        </Button>
        <Button onClick={() => inputMediumRef?.current?.reset()} color="error" variant="outlined">
          Reset medium
        </Button>
        {args?.required && (
          <Button type="submit" variant="contained">
            Submit
          </Button>
        )}
      </Stack>
    </Stack>
  );
};

const ControlledTemplate: StoryFn<typeof File> = (args) => {
  const [files, setFiles] = useState<null | FileList>(null);

  return (
    <Stack spacing={2} height="100%" alignItems="center" justifyContent="center">
      <File {...args} size="small" value={files} onChange={({ target }) => setFiles(target.files)} />
      <Button variant="contained" onClick={() => setFiles(null)} disabled={!files?.length}>
        Remove files
      </Button>
    </Stack>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  label: "Ajouter une photo ou un fichier",
};

export const FileMultiple = Template.bind({});
FileMultiple.args = {
  label: "Ajouter une photo ou un fichier",
  multiple: true,
};

export const Required = Template.bind({});
Required.args = {
  label: "Ajouter une photo ou un fichier",
  required: true,
};

export const WithLabelAndHelperText = Template.bind({});
WithLabelAndHelperText.args = {
  helperText: "SVG, PNG, JPG or GIF (max. 3MB)",
  label: "Ajouter une photo ou un fichier",
};

export const DirectionRow = Template.bind({});
DirectionRow.args = {
  label: "Ajouter une photo ou un fichier",
  variant: "horizontal",
};

export const DirectionRowMultiple = Template.bind({});
DirectionRowMultiple.args = {
  label: "Ajouter une photo ou un fichier",
  multiple: true,
  variant: "horizontal",
};

export const WithError = Template.bind({});
WithError.args = {
  error: true,
  helperText: "Fichier invalide",
  label: "Ajouter une photo ou un fichier",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  helperText: "SVG, PNG, JPG or GIF (max. 3MB)",
  label: "Ajouter une photo ou un fichier",
};

export const Controlled = ControlledTemplate.bind({});
Controlled.args = {
  label: "Controlled File Input",
};

export default {
  component: File,
  title: "Components/Inputs/File",
} as Meta<typeof File>;
