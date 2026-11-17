import { Box, Button, Stack, Typography } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import { useState } from "react";
import UploadIcon from "@/components/DataDisplay/Icons/UploadIcon";
import DropZone from "../DropZone";

const Template: StoryFn<typeof DropZone> = (args) => {
  const [names, setNames] = useState<string[]>([]);

  return (
    <Stack alignItems="center" justifyContent="center" height="100%">
      <Box width="100%" maxWidth={560}>
        <DropZone {...args} onFiles={(files) => setNames(files.map(({ name }) => name))} sx={{ gap: 3, minHeight: 300 }}>
          {({ isDragging }) => (
            <>
              <UploadIcon sx={{ height: 40, width: 40 }} color={isDragging ? "primary" : "inherit"} />
              <Stack spacing={0.5} alignItems="center">
                <Typography variant="h5" component="p">
                  Drop your documents here
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {names.length > 0 ? names.join(" • ") : "Photos or PDFs"}
                </Typography>
              </Stack>
              {/* Decorative: the whole zone is the input's label, so the click goes through to it */}
              <Button component="span" variant="contained" size="large" sx={{ pointerEvents: "none" }}>
                Browse
              </Button>
            </>
          )}
        </DropZone>
      </Box>
    </Stack>
  );
};

export const Basic = Template.bind({});
Basic.args = { accept: "image/*,application/pdf", multiple: true };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };

export default {
  component: DropZone,
  title: "Components/Inputs/DropZone",
} as Meta<typeof DropZone>;
