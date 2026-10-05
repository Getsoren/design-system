import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import ChatAttachmentLinkAction from "@/components/DataDisplay/Chat/components/ChatAttachmentLinkAction";
import ChatAttachmentViewer from "@/components/DataDisplay/Chat/components/ChatAttachmentViewer";
import ChatFileCard from "@/components/DataDisplay/Chat/components/ChatFileCard";
import type { ChatLabels } from "@/components/DataDisplay/Chat/hooks/useChatLabels";
import type { ChatAttachment, ChatLinkAttachment, ChatMessage } from "@/components/DataDisplay/Chat/types";
import { isPreviewableImage } from "@/components/DataDisplay/Chat/utils/getFileKind";
import downloadFile from "@/components/DataDisplay/FileViewer/utils/downloadFile";
import DownloadIcon from "@/components/DataDisplay/Icons/DownloadIcon";
import LinkIcon from "@/components/DataDisplay/Icons/LinkIcon";

const MAX_WIDTH = 320;
const MAX_SINGLE_IMAGE_HEIGHT = 400;
const MAX_GRID_TILES = 4;

interface ChatMessageAttachmentsProps {
  message: ChatMessage;
  attachments: ChatAttachment[];
  labels: ChatLabels;
  onLinkAttachment?: ChatLinkAttachment;
}

/**
 * Box of a lone image: its own ratio (known before loading, so the list does not jump), within 320 × 400.
 */
const getSingleImageSize = ({ width, height }: ChatAttachment) => {
  const ratio = width && height ? width / height : 4 / 3;
  const displayWidth = Math.min(MAX_WIDTH, MAX_SINGLE_IMAGE_HEIGHT * ratio);

  return { aspectRatio: `${ratio}`, width: displayWidth };
};

/**
 * Attachments of a sent message: images as a grid opening a full screen viewer, other files as cards.
 */
const ChatMessageAttachments = ({ message, attachments, labels, onLinkAttachment }: ChatMessageAttachmentsProps) => {
  const [viewerIndex, setViewerIndex] = useState<number | null>(null);
  const images = attachments.filter(({ fileName, mimeType, thumbnailUrl }) => isPreviewableImage(fileName, mimeType, thumbnailUrl));
  const files = attachments.filter((attachment) => !images.includes(attachment));
  const visibleImages = images.slice(0, MAX_GRID_TILES);
  const hiddenImagesCount = images.length - visibleImages.length;

  const renderLinkAction = (attachment: ChatAttachment, contrast?: boolean) => (
    <ChatAttachmentLinkAction
      link={attachment.link}
      label={labels.linkAttachment}
      onLink={onLinkAttachment ? () => onLinkAttachment(attachment, { message }) : undefined}
      onClickLink={attachment.link?.onClick}
      contrast={contrast}
    />
  );

  return (
    <>
      {images.length > 0 && (
        <Box
          data-test="chatMessageImages"
          sx={{
            display: "grid",
            gap: 0.5,
            gridTemplateColumns: images.length === 1 ? "1fr" : "1fr 1fr",
            maxWidth: "100%",
            width: images.length === 1 ? getSingleImageSize(images[0]).width : MAX_WIDTH,
          }}
        >
          {visibleImages.map((image, index) => {
            const isLastTile = index === visibleImages.length - 1;
            // Three images: the first one spans the row, the two others share the next
            const isWide = images.length === 3 && index === 0;

            return (
              <ButtonBase
                key={image.id}
                aria-label={`${labels.openFile} ${image.fileName}`}
                onClick={() => setViewerIndex(index)}
                sx={{
                  aspectRatio: images.length === 1 ? getSingleImageSize(image).aspectRatio : isWide ? "2 / 1" : "1",
                  backgroundColor: ({ palette }) => (palette.mode === "dark" ? "grey.800" : "grey.100"),
                  borderRadius: 2,
                  gridColumn: isWide ? "span 2" : undefined,
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Box
                  component="img"
                  src={image.thumbnailUrl || image.url}
                  alt={image.fileName}
                  loading="lazy"
                  decoding="async"
                  sx={{ display: "block", height: "100%", objectFit: "cover", width: "100%" }}
                />
                {image.link && (
                  <Stack
                    alignItems="center"
                    justifyContent="center"
                    title={image.link.label}
                    sx={{
                      backgroundColor: "rgba(255, 255, 255, 0.92)",
                      borderRadius: "50%",
                      bottom: 8,
                      color: "common.black",
                      height: 28,
                      left: 8,
                      position: "absolute",
                      width: 28,
                    }}
                  >
                    <LinkIcon sx={{ fontSize: 16 }} />
                  </Stack>
                )}
                {isLastTile && hiddenImagesCount > 0 && (
                  <Stack
                    alignItems="center"
                    justifyContent="center"
                    sx={{ backgroundColor: "rgba(0, 0, 0, 0.5)", color: "common.white", inset: 0, position: "absolute" }}
                  >
                    <Typography variant="h5" fontWeight={600}>
                      +{hiddenImagesCount}
                    </Typography>
                  </Stack>
                )}
              </ButtonBase>
            );
          })}
        </Box>
      )}
      {files.map((file) => (
        <Box key={file.id} width={MAX_WIDTH} maxWidth="100%">
          <ChatFileCard
            fileName={file.fileName}
            mimeType={file.mimeType}
            size={file.size}
            onClick={() => window.open(file.url, "_blank", "noopener,noreferrer")}
            onClickLabel={labels.openFile}
            actions={
              <IconButton
                aria-label={`${labels.download} ${file.fileName}`}
                title={labels.download}
                onClick={() => downloadFile(file.url, file.fileName)}
                sx={{ height: 44, width: 44 }}
              >
                <DownloadIcon sx={{ fontSize: 20 }} />
              </IconButton>
            }
          >
            {(file.link || onLinkAttachment) && (
              <Box px={1} pb={0.5}>
                {renderLinkAction(file)}
              </Box>
            )}
          </ChatFileCard>
        </Box>
      ))}
      <ChatAttachmentViewer
        attachments={images}
        index={viewerIndex}
        onIndexChange={setViewerIndex}
        onClose={() => setViewerIndex(null)}
        labels={labels}
        renderAction={(attachment) => renderLinkAction(attachment, true)}
      />
    </>
  );
};

export default ChatMessageAttachments;
