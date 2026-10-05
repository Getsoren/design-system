import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { type KeyboardEvent, type ReactNode, type TouchEvent, useRef } from "react";
import type { ChatLabels } from "@/components/DataDisplay/Chat/hooks/useChatLabels";
import type { ChatAttachment } from "@/components/DataDisplay/Chat/types";
import downloadFile from "@/components/DataDisplay/FileViewer/utils/downloadFile";
import CloseIcon from "@/components/DataDisplay/Icons/CloseIcon";
import DownloadIcon from "@/components/DataDisplay/Icons/DownloadIcon";
import KeyboardArrowLeftRoundedIcon from "@/components/DataDisplay/Icons/KeyboardArrowLeftRoundedIcon";
import KeyboardArrowRightRoundedIcon from "@/components/DataDisplay/Icons/KeyboardArrowRightRoundedIcon";

const SWIPE_THRESHOLD = 50;

interface ChatAttachmentViewerProps {
  attachments: ChatAttachment[];
  /** Index of the image shown, null when closed */
  index: number | null;
  onIndexChange: (index: number) => void;
  onClose: () => void;
  labels: ChatLabels;
  /** Under the image, e.g. the link to an order */
  renderAction?: (attachment: ChatAttachment) => ReactNode;
}

const controlSx = {
  "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
  "&.Mui-disabled": { color: "rgba(255, 255, 255, 0.3)" },
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  color: "common.white",
  height: 48,
  width: 48,
};

/**
 * Full screen image viewer: previous / next (arrows, keyboard, swipe), download, close (Escape).
 */
const ChatAttachmentViewer = ({ attachments, index, onIndexChange, onClose, labels, renderAction }: ChatAttachmentViewerProps) => {
  const touchStartXRef = useRef<number | null>(null);
  const attachment = index === null ? undefined : attachments[index];
  const hasPrevious = index !== null && index > 0;
  const hasNext = index !== null && index < attachments.length - 1;

  const goTo = (nextIndex: number) => {
    if (nextIndex >= 0 && nextIndex < attachments.length) {
      onIndexChange(nextIndex);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (index === null) {
      return;
    }

    if (e.key === "ArrowLeft") {
      goTo(index - 1);
    } else if (e.key === "ArrowRight") {
      goTo(index + 1);
    }
  };

  const handleTouchStart = (e: TouchEvent) => {
    touchStartXRef.current = e.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (e: TouchEvent) => {
    const startX = touchStartXRef.current;
    const endX = e.changedTouches[0]?.clientX;
    touchStartXRef.current = null;

    if (index === null || startX === null || endX === undefined || Math.abs(endX - startX) < SWIPE_THRESHOLD) {
      return;
    }

    goTo(endX < startX ? index + 1 : index - 1);
  };

  return (
    <Modal open={!!attachment} onClose={onClose} slotProps={{ backdrop: { sx: { backgroundColor: "common.black" } } }}>
      <Stack
        tabIndex={-1}
        onKeyDown={handleKeyDown}
        data-test="chatAttachmentViewer"
        sx={{ color: "common.white", height: "100%", outline: 0, width: "100%" }}
      >
        <Stack direction="row" alignItems="center" spacing={1} sx={{ minHeight: 64, px: 2, py: 1 }}>
          <Stack flex={1} minWidth={0}>
            <Typography variant="body1" fontWeight={500} noWrap title={attachment?.fileName}>
              {attachment?.fileName}
            </Typography>
            {attachments.length > 1 && index !== null && (
              <Typography variant="caption" sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
                {index + 1} / {attachments.length}
              </Typography>
            )}
          </Stack>
          <IconButton
            aria-label={labels.download}
            title={labels.download}
            onClick={() => attachment && downloadFile(attachment.url, attachment.fileName)}
            sx={controlSx}
          >
            <DownloadIcon />
          </IconButton>
          <IconButton aria-label={labels.close} title={labels.close} onClick={onClose} sx={controlSx}>
            <CloseIcon />
          </IconButton>
        </Stack>
        <Box
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          sx={{
            alignItems: "center",
            display: "flex",
            flex: 1,
            justifyContent: "center",
            minHeight: 0,
            position: "relative",
            px: { sm: 10, xs: 1 },
          }}
        >
          {attachment && (
            <Box
              key={attachment.id}
              component="img"
              src={attachment.url}
              alt={attachment.fileName}
              sx={{ borderRadius: 1, maxHeight: "100%", maxWidth: "100%", objectFit: "contain", userSelect: "none" }}
            />
          )}
          {attachments.length > 1 && (
            <>
              <IconButton
                aria-label={labels.previous}
                disabled={!hasPrevious}
                onClick={() => index !== null && goTo(index - 1)}
                sx={{ ...controlSx, left: 16, position: "absolute", top: "50%", transform: "translateY(-50%)" }}
              >
                <KeyboardArrowLeftRoundedIcon />
              </IconButton>
              <IconButton
                aria-label={labels.next}
                disabled={!hasNext}
                onClick={() => index !== null && goTo(index + 1)}
                sx={{ ...controlSx, position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)" }}
              >
                <KeyboardArrowRightRoundedIcon />
              </IconButton>
            </>
          )}
        </Box>
        <Stack alignItems="center" justifyContent="center" sx={{ minHeight: 72, px: 2, py: 1.5 }}>
          {attachment && renderAction?.(attachment)}
        </Stack>
      </Stack>
    </Modal>
  );
};

export default ChatAttachmentViewer;
