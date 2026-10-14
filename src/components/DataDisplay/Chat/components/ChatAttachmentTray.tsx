import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import type { ChatRejectedFile } from "@/components/DataDisplay/Chat/hooks/useChatAttachmentUploads";
import type { ChatLabels } from "@/components/DataDisplay/Chat/hooks/useChatLabels";
import formatFileSize from "@/components/DataDisplay/Chat/utils/formatFileSize";
import CloseIcon from "@/components/DataDisplay/Icons/CloseIcon";
import InfoIcon from "@/components/DataDisplay/Icons/InfoIcon";
import RefreshIcon from "@/components/DataDisplay/Icons/RefreshIcon";
import { ThemeContext } from "@/context/Theme/ThemeProvider";

interface ChatAttachmentTrayProps {
  rejectedFiles: ChatRejectedFile[];
  labels: ChatLabels;
  maxAttachments: number;
  maxAttachmentSize: number;
  /** A voice message failed to upload: retry it or drop it */
  voiceFailure?: { onRetry: () => void; onDismiss: () => void } | null;
}

/**
 * Above the composer, what went wrong with its files: the refused ones, a voice message that failed to upload.
 */
const ChatAttachmentTray = ({ rejectedFiles, labels, maxAttachments, maxAttachmentSize, voiceFailure }: ChatAttachmentTrayProps) => {
  const { language } = useContext(ThemeContext);

  // The files themselves sit inside the composer's card (ChatComposerAttachments): only what went wrong shows here
  if (!(rejectedFiles.length || voiceFailure)) {
    return null;
  }

  const rejectionReason = {
    count: `${labels.tooManyFiles} (${maxAttachments} max)`,
    size: `${labels.fileTooLarge} (${formatFileSize(maxAttachmentSize, language)} max)`,
    type: labels.unsupportedFileType,
  };

  return (
    <Stack spacing={1} mb={1.5} data-test="chatAttachmentTray">
      {voiceFailure && (
        <Stack direction="row" alignItems="center" spacing={1} role="alert" data-test="chatVoiceFailure">
          <Stack direction="row" alignItems="center" spacing={1} color="error.main" flex={1} minWidth={0}>
            <InfoIcon sx={{ fontSize: 18 }} />
            <Typography variant="caption" noWrap>
              {labels.voiceMessageFailed}
            </Typography>
          </Stack>
          <Button color="inherit" startIcon={<RefreshIcon sx={{ fontSize: 16 }} />} onClick={voiceFailure.onRetry} sx={{ minHeight: 44 }}>
            {labels.retryUpload}
          </Button>
          <IconButton aria-label={labels.removeAttachment} onClick={voiceFailure.onDismiss} sx={{ height: 44, width: 44 }}>
            <CloseIcon sx={{ fontSize: 20 }} />
          </IconButton>
        </Stack>
      )}
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
    </Stack>
  );
};

export default ChatAttachmentTray;
