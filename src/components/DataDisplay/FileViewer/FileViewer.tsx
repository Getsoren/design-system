import { Box, SxProps, Theme, Tooltip, Typography } from "@mui/material";
import { PropsWithChildren, useState } from "react";
import downloadFile from "@/components/DataDisplay/FileViewer/utils/downloadFile";
import getThumbnailPath from "@/components/DataDisplay/FileViewer/utils/getThumbnailPath";
import Lightbox from "@/components/Feedback/Lightbox";
import getBrowser, { Browser } from "@/utils/getBrowser";
import isDocumentType from "@/utils/isDocumentType";

interface FileViewerPros extends PropsWithChildren {
  src?: string | null;
  srcThumb?: string | null;
  fileName?: string;
  width?: number | string;
  height?: number | string;
  sx?: SxProps;
  disableLightbox?: boolean;
  disableThumb?: boolean;
  open?: boolean;
  variant?: "default" | "rounded";
  onClickThumb?: () => void;
  onClose?(): void;
  iconOnly?: boolean;
}

const FileViewer = ({
  src,
  srcThumb,
  fileName,
  children,
  sx,
  disableLightbox,
  disableThumb,
  open,
  onClose,
  onClickThumb,
  variant,
  iconOnly = false,
  height = 152,
  width = 220,
}: FileViewerPros) => {
  // States
  const [internalOpen, setInternalOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Browser compatibility
  const browser = getBrowser();
  const isFirefox = browser === Browser.Firefox;

  // File type checks
  const lowercaseSrc = src?.toLowerCase();
  const isImage = !(lowercaseSrc?.endsWith(".pdf") || lowercaseSrc?.startsWith("blob:") || lowercaseSrc?.endsWith(".eml"));
  const isPdf = lowercaseSrc?.endsWith(".pdf");
  const isThumbnailReady = disableThumb ? true : !isLoading;
  const isDocument = isDocumentType(src) || isDocumentType(srcThumb);
  const isPdfOnFirefox = isPdf && isFirefox;

  // Styles
  const opacity = disableLightbox ? 1 : 0.8;

  // Lightbox display condition
  const shouldDisplayLightbox =
    (isImage || isPdf) && !isDocument && isThumbnailReady && !isError && !disableLightbox && src && !isPdfOnFirefox;

  // File info
  const extension = src?.split(".").pop()?.toLowerCase() || "";
  const fileNameWithExtension = fileName || src?.split("/").pop()?.split("?")[0] || "";
  const thumbnailPath = getThumbnailPath(iconOnly, isError, isDocument, extension, src || "", srcThumb || "");

  const toggleOpen = () => {
    setInternalOpen((prevState) => !prevState);
  };

  const close = () => {
    setInternalOpen(false);
    onClose?.();
  };

  const handleError = () => {
    setIsError(true);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleClick = () => {
    if ((isPdfOnFirefox || isDocument) && src) {
      downloadFile(src, fileNameWithExtension);
    }

    onClickThumb?.();
    toggleOpen();
  };

  return (
    <>
      {!(disableThumb || children) && (
        <Tooltip arrow title={isDocument || iconOnly ? fileNameWithExtension : ""}>
          <Box
            data-test="fileViewer"
            width={width}
            height={height}
            onClick={handleClick}
            sx={{
              ":hover": { opacity },
              alignSelf: "center",
              backgroundColor: ({ palette }: Theme) => palette.background.paper,
              bgcolor: iconOnly ? "transparent" : undefined,
              borderRadius: variant === "rounded" ? 1 : "0",
              boxShadow: iconOnly ? "none" : undefined,
              cursor: disableLightbox ? "default" : "pointer",
              display: "block",
              flexShrink: 0,
              overflow: "hidden",
              pointerEvents: disableLightbox ? "none" : "auto",
              position: "relative",
              userSelect: "none",
              ...sx,
            }}
          >
            <Box
              key={thumbnailPath}
              src={thumbnailPath}
              overflow="hidden"
              width="100%"
              component={isImage || iconOnly ? "img" : "iframe"}
              height={isImage || iconOnly ? "100%" : "auto"}
              onError={handleError}
              onLoad={handleLoad}
              sx={{
                "&::-webkit-scrollbar": {
                  display: "none !important",
                  width: "0 !important",
                },
                border: 0,
                cursor: "pointer",
                display: "block",
                msOverflowStyle: "none",
                objectFit: isDocument ? "contain" : "cover",
                overflow: "hidden",
                padding: isDocument && !iconOnly ? "15%" : 0,
                pointerEvents: "none !important",
                scrollbarWidth: "none",
              }}
            />
            {isDocument && !iconOnly && (
              <Typography
                sx={{
                  backgroundColor: ({ palette }: Theme) => palette.common.white,
                  bottom: "15%",
                  left: "50%",
                  paddingX: 0.8,
                  position: "absolute",
                }}
                variant="body3"
                color="black"
              >
                {extension}
              </Typography>
            )}
          </Box>
        </Tooltip>
      )}

      {/* Lightbox */}
      {shouldDisplayLightbox &&
        (isPdf ? (
          <Lightbox open={open === undefined ? internalOpen : open} onClose={close} src={src} title={fileName}>
            <Box
              component="iframe"
              src={src}
              sx={{
                border: 0,
                display: "block",
                height: "100vh",
                margin: "auto",
                width: {
                  md: "50vw",
                  xs: "100%",
                },
              }}
            />
          </Lightbox>
        ) : (
          // Images: the Lightbox renders the image itself, with its built-in loading spinner and fade-in
          <Lightbox open={open === undefined ? internalOpen : open} onClose={close} src={src} title={fileName} />
        ))}

      {children && (
        <Box
          onClick={toggleOpen}
          sx={{
            ":hover": { opacity },
            cursor: "pointer",
          }}
        >
          {children}
        </Box>
      )}
    </>
  );
};

export default FileViewer;
