import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useContext, useState } from "react";
import ChatAttachmentLinkAction from "@/components/DataDisplay/Chat/components/ChatAttachmentLinkAction";
import ChatFileCard, { FILE_CARD_VISUAL_SIZE } from "@/components/DataDisplay/Chat/components/ChatFileCard";
import type { ChatPendingAttachment, ChatRejectedFile } from "@/components/DataDisplay/Chat/hooks/useChatAttachmentUploads";
import type { ChatLabels } from "@/components/DataDisplay/Chat/hooks/useChatLabels";
import type { ChatAttachmentLink, ChatLinkAttachment } from "@/components/DataDisplay/Chat/types";
import formatFileSize from "@/components/DataDisplay/Chat/utils/formatFileSize";
import CloseIcon from "@/components/DataDisplay/Icons/CloseIcon";
import InfoIcon from "@/components/DataDisplay/Icons/InfoIcon";
import RefreshIcon from "@/components/DataDisplay/Icons/RefreshIcon";
import { ThemeContext } from "@/context/Theme/ThemeProvider";

interface ChatAttachmentTrayProps {
  items: ChatPendingAttachment[];
  rejectedFiles: ChatRejectedFile[];
  labels: ChatLabels;
  maxAttachments: number;
  maxAttachmentSize: number;
  onRemove: (key: string) => void;
  onRetry: (key: string) => void;
  onLinkAttachment?: ChatLinkAttachment;
  onLinked: (key: string, link: ChatAttachmentLink) => void;
}

interface TrayPreviewProps {
  src: string;
}

/**
 * Square local preview of an image, falling back on the type icon when the browser cannot draw the file
 */
const TrayPreview = ({ src }: TrayPreviewProps) => {
  const [isBroken, setIsBroken] = useState(false);

  if (isBroken) {
    return null;
  }

  return (
    <Box
      component="img"
      src={src}
      alt=""
      onError={() => setIsBroken(true)}
      sx={{ borderRadius: 1.5, flexShrink: 0, height: FILE_CARD_VISUAL_SIZE, objectFit: "cover", width: FILE_CARD_VISUAL_SIZE }}
    />
  );
};

/**
 * Files waiting in the composer: preview, upload progress, retry, link to an order, and the refused files.
 */
const ChatAttachmentTray = ({
  items,
  rejectedFiles,
  labels,
  maxAttachments,
  maxAttachmentSize,
  onRemove,
  onRetry,
  onLinkAttachment,
  onLinked,
}: ChatAttachmentTrayProps) => {
  const { language } = useContext(ThemeContext);

  if (!(items.length || rejectedFiles.length)) {
    return null;
  }

  const rejectionReason = {
    count: `${labels.tooManyFiles} (${maxAttachments} max)`,
    size: `${labels.fileTooLarge} (${formatFileSize(maxAttachmentSize, language)} max)`,
    type: labels.unsupportedFileType,
  };

  return (
    <Stack spacing={1} mb={1.5} data-test="chatAttachmentTray">
      {rejectedFiles.length > 0 && (
        <Stack spacing={0.5} role="alert">
          {rejectedFiles.map(({ fileName, reason }, index) => (
            <Stack key={`${fileName}-${index}`} direction="row" alignItems="center" spacing={1} color="error.main">
              <InfoIcon sx={{ fontSize: 18 }} />
              <Typography variant="caption" noWrap>
                {rejectionReason[reason]} · {fileName}
              </Typography>
            </Stack>
          ))}
        </Stack>
      )}
      {items.length > 0 && (
        <Stack
          direction="row"
          spacing={1}
          sx={{ "& > *": { scrollSnapAlign: "start" }, overflowX: "auto", pb: 0.5, scrollSnapType: "x proximity" }}
        >
          {items.map(({ key, file, previewUrl, status, progress, attachment, link }) => (
            <Box key={key} flexShrink={0} width={272}>
              <ChatFileCard
                fileName={file.name}
                mimeType={file.type}
                size={file.size}
                visual={previewUrl ? <TrayPreview src={previewUrl} /> : undefined}
                progress={status === "uploading" ? progress : undefined}
                error={status === "error" ? labels.uploadFailed : undefined}
                actions={
                  <IconButton
                    aria-label={`${labels.removeAttachment} ${file.name}`}
                    onClick={() => onRemove(key)}
                    sx={{ height: 44, width: 44 }}
                  >
                    <CloseIcon sx={{ fontSize: 20 }} />
                  </IconButton>
                }
              >
                {status === "error" && (
                  <Button
                    color="inherit"
                    startIcon={<RefreshIcon sx={{ fontSize: 16 }} />}
                    onClick={() => onRetry(key)}
                    sx={{ mb: 0.5, minHeight: 44, ml: 1 }}
                  >
                    {labels.retryUpload}
                  </Button>
                )}
                {status === "uploaded" && attachment && onLinkAttachment && (
                  <Box px={1} pb={0.5}>
                    <ChatAttachmentLinkAction
                      link={link}
                      label={labels.linkAttachment}
                      onLink={async () => {
                        const nextLink = await onLinkAttachment({ ...attachment, link }, {});

                        if (nextLink) {
                          onLinked(key, nextLink);
                        }
                      }}
                    />
                  </Box>
                )}
              </ChatFileCard>
            </Box>
          ))}
        </Stack>
      )}
    </Stack>
  );
};

export default ChatAttachmentTray;
