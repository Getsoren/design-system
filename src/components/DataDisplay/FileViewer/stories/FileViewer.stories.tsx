import { Grid, Stack } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import { useState } from "react";
import FileViewer from "@/components/DataDisplay/FileViewer/FileViewer";
import Button from "@/components/Inputs/Button/Button";

const testFilePDF = "https://pousses.fr/sites/default/files/2019-08/pdf_test_1.pdf";
const testImage = "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e";
const testFilePNG = "https://upload.wikimedia.org/wikipedia/commons/6/6a/PNG_Test.png";
const csvFile = "https://app.api.dev.tracktor.fr/files/bookings/000039906/15ce1b4d-3da4-9543-2640-f267cd668130.csv";
const svgFile = "https://upload.wikimedia.org/wikipedia/commons/b/bd/Test.svg";
const jpgFile = "https://commons.wikimedia.org/wiki/File:JPG_Test.jpg";

const TemplateBasic: StoryFn<typeof FileViewer> = (args) => {
  const { width, disableLightbox } = args;

  return (
    <Stack direction="row" height="100%" alignItems="center" justifyContent="center" spacing={5}>
      <FileViewer src={testImage} width={width} disableLightbox={disableLightbox} {...args} />
      <FileViewer src={testFilePDF} width={width} disableLightbox={disableLightbox} {...args} />
    </Stack>
  );
};

const TemplateOneFile: StoryFn<typeof FileViewer> = (args) => {
  const { width, disableLightbox } = args;

  return (
    <Stack direction="row" height="100%" alignItems="center" justifyContent="center" spacing={5}>
      <FileViewer src={testImage} width={width} disableLightbox={disableLightbox} {...args} />
    </Stack>
  );
};

const TemplateMultiIcon: StoryFn<typeof FileViewer> = (args) => {
  const { width, disableLightbox, iconOnly } = args;

  return (
    <Stack height="100%" alignItems="center" justifyContent="center">
      <Grid container spacing={5} justifyContent="center" alignItems="center">
        {/* Ligne du haut avec 3 icônes */}
        <Grid size={12} container justifyContent="center" spacing={5}>
          <Grid>
            <FileViewer
              iconOnly={iconOnly}
              src={csvFile}
              width={width}
              disableLightbox={disableLightbox}
              fileName="Document CSV"
              {...args}
            />
          </Grid>
          <Grid>
            <FileViewer
              iconOnly={iconOnly}
              src={testFilePDF}
              width={width}
              disableLightbox={disableLightbox}
              fileName="Document PDF"
              {...args}
            />
          </Grid>
          <Grid>
            <FileViewer
              iconOnly={iconOnly}
              src={testFilePNG}
              width={width}
              disableLightbox={disableLightbox}
              fileName="Image PNG"
              {...args}
            />
          </Grid>
        </Grid>

        {/* Ligne du bas avec 2 icônes */}
        <Grid size={12} container justifyContent="center" spacing={5}>
          <Grid>
            <FileViewer
              iconOnly={iconOnly}
              src={svgFile}
              width={width}
              disableLightbox={disableLightbox}
              fileName="No reconize extension"
              {...args}
            />
          </Grid>
          <Grid>
            <FileViewer iconOnly={iconOnly} src={jpgFile} width={width} disableLightbox={disableLightbox} fileName="Image JPG" {...args} />
          </Grid>
        </Grid>
      </Grid>
    </Stack>
  );
};

const TemplateNoThumb: StoryFn<typeof FileViewer> = (args) => {
  const [pathFile, setPathFile] = useState<string>("");
  const [openLightBox, setOpenLightBox] = useState<boolean>(false);

  const handleOpenLightBoxPDF = () => {
    setPathFile(testFilePDF);
    setOpenLightBox(!openLightBox);
  };

  const handleOpenLightBoxImage = () => {
    setPathFile(testImage);
    setOpenLightBox(!openLightBox);
  };

  const handleCloseLightBox = () => {
    setOpenLightBox(false);
  };

  return (
    <>
      <Stack direction="row" height="100%" alignItems="center" justifyContent="center" spacing={5}>
        <Button variant="contained" onClick={handleOpenLightBoxPDF}>
          Open PDF
        </Button>
        <Button variant="outlined" onClick={handleOpenLightBoxImage}>
          Open Image
        </Button>
      </Stack>
      <FileViewer {...args} src={pathFile} open={openLightBox} onClose={handleCloseLightBox} />
    </>
  );
};

export const Basic = TemplateBasic.bind({});
Basic.args = {
  width: 220,
};

export const DisableLightbox = TemplateBasic.bind({});
DisableLightbox.args = {
  disableLightbox: true,
  width: 220,
};

export const DisableThumb = TemplateNoThumb.bind({});
DisableThumb.args = {
  disableThumb: true,
  width: 220,
};

export const RoundedVariant = TemplateBasic.bind({});
RoundedVariant.args = {
  variant: "rounded",
  width: 220,
};

export const Thumbnail = TemplateOneFile.bind({});
Thumbnail.args = {
  src: "https://placehold.co/1000",
  srcThumb: "https://placehold.co/500",
  variant: "rounded",
  width: 220,
};

export const Document = TemplateOneFile.bind({});
Document.args = {
  fileName: "Document CSV",
  height: 115,
  src: csvFile,
  width: 174,
};

export const NotFound = TemplateOneFile.bind({});
NotFound.args = {
  src: "https://a.a/a.png",
};

export const IconOnly = TemplateMultiIcon.bind({});
IconOnly.args = {
  height: 115,
  iconOnly: true,
  width: 100,
};

export default {
  component: FileViewer,
  title: "Components/Data Display/FileViewer",
} as Meta<typeof FileViewer>;
