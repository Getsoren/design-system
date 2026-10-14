import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import IconButton from "@mui/material/IconButton";
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useContext, useState } from "react";
import ChatLineIcon from "@/components/DataDisplay/Chat/components/ChatLineIcon";
import { LINE_ICON_PATHS } from "@/components/DataDisplay/Chat/constants";
import type { ChatPendingAttachment } from "@/components/DataDisplay/Chat/hooks/useChatAttachmentUploads";
import type { ChatLabels } from "@/components/DataDisplay/Chat/hooks/useChatLabels";
import type { ChatAttachmentLink, ChatLinkAttachment } from "@/components/DataDisplay/Chat/types";
import formatFileSize from "@/components/DataDisplay/Chat/utils/formatFileSize";
import { getFileKind, getFileTypeLabel } from "@/components/DataDisplay/Chat/utils/getFileKind";
import FileSpreadsheetIcon from "@/components/DataDisplay/Icons/FileSpreadsheetIcon";
import FileTextIcon from "@/components/DataDisplay/Icons/FileTextIcon";
import ImageIcon from "@/components/DataDisplay/Icons/ImageIcon";
import LinkIcon from "@/components/DataDisplay/Icons/LinkIcon";
import { ThemeContext } from "@/context/Theme/ThemeProvider";

// Inside the composer's white card, as the pending voice take: 9px inside its 20px corner, so 11px; the picture 8px
// inside a tile (11 - 8 = 3, the design system's 4)
const TILE_RADIUS = 11;
const TILE_INSET = 8;
const VISUAL_SIZE = 48;
const TILE_WIDTH = 248;

interface TileVisualProps {
  item: ChatPendingAttachment;
}

/**
 * The image itself, or its kind's icon on white: the tile around it is grey
 */
const TileVisual = ({ item }: TileVisualProps) => {
  const [isBroken, setIsBroken] = useState(false);
  const kind = getFileKind(item.file.name, item.file.type);
  const Icon = { document: FileTextIcon, image: ImageIcon, other: FileTextIcon, pdf: FileTextIcon, spreadsheet: FileSpreadsheetIcon }[kind];
  const visualSx = { borderRadius: "4px", flexShrink: 0, height: VISUAL_SIZE, width: VISUAL_SIZE };

  if (item.previewUrl && !isBroken) {
    return <Box component="img" src={item.previewUrl} alt="" onError={() => setIsBroken(true)} sx={{ ...visualSx, objectFit: "cover" }} />;
  }

  return (
    <Stack alignItems="center" justifyContent="center" sx={{ ...visualSx, backgroundColor: "background.paper", color: "text.secondary" }}>
      <Icon />
    </Stack>
  );
};

interface ChatComposerAttachmentsProps {
  items: ChatPendingAttachment[];
  labels: ChatLabels;
  onRemove: (key: string) => void;
  onRetry: (key: string) => void;
  onLinkAttachment?: ChatLinkAttachment;
  onLinked: (key: string, link: ChatAttachmentLink) => void;
}

/**
 * ChatGPT's and Claude's composer: the files about to be sent sit inside the white card, above the field, as small grey
 * tiles (picture or kind, name, then the upload, the error to retry, or the order it is filed in), each with its cross.
 */
const ChatComposerAttachments = ({ items, labels, onRemove, onRetry, onLinkAttachment, onLinked }: ChatComposerAttachmentsProps) => {
  const { language } = useContext(ThemeContext);

  if (!items.length) {
    return null;
  }

  const link = async (item: ChatPendingAttachment) => {
    if (!(item.attachment && onLinkAttachment)) {
      return;
    }

    const nextLink = await onLinkAttachment({ ...item.attachment, link: item.link }, {}).catch(() => null);

    if (nextLink) {
      onLinked(item.key, nextLink);
    }
  };

  return (
    <Stack
      direction="row"
      spacing={1}
      data-test="chatComposerAttachments"
      sx={{ "& > *": { scrollSnapAlign: "start" }, m: 1, mb: 0, overflowX: "auto", scrollSnapType: "x proximity" }}
    >
      {items.map((item) => {
        const { key, file, status, progress, link: fileLink } = item;
        const isError = status === "error";
        const canLink = status === "uploaded" && !!item.attachment && !!onLinkAttachment;

        return (
          <Box
            key={key}
            data-test="chatComposerAttachment"
            sx={{
              alignItems: "center",
              backgroundColor: "action.hover",
              border: "1px solid",
              borderColor: isError ? "error.main" : "transparent",
              borderRadius: `${TILE_RADIUS}px`,
              display: "flex",
              flexShrink: 0,
              gap: 1.25,
              height: VISUAL_SIZE + 2 * TILE_INSET,
              overflow: "hidden",
              pl: `${TILE_INSET - 1}px`,
              position: "relative",
              pr: 4.5,
              width: TILE_WIDTH,
            }}
          >
            <TileVisual item={item} />
            <Stack minWidth={0} flex={1} alignItems="flex-start">
              <Typography variant="body2" fontWeight={500} noWrap maxWidth="100%" title={file.name}>
                {file.name}
              </Typography>
              {isError ? (
                <Stack direction="row" alignItems="center" spacing={0.5} minWidth={0}>
                  <Typography variant="caption" color="error.main" noWrap>
                    {labels.uploadFailed}
                  </Typography>
                  <ButtonBase onClick={() => onRetry(key)} sx={{ "&:hover": { textDecoration: "underline" }, color: "text.primary" }}>
                    <Typography variant="caption" color="inherit" fontWeight={600}>
                      {labels.retryUpload}
                    </Typography>
                  </ButtonBase>
                </Stack>
              ) : canLink ? (
                // The order the file is filed in, or the way to file it: the order page's documents
                <ButtonBase
                  onClick={() => void link(item)}
                  title={fileLink?.label ?? labels.linkAttachment}
                  sx={{ "&:hover": { color: "text.primary" }, color: "text.secondary", gap: 0.5, maxWidth: "100%" }}
                >
                  <LinkIcon sx={{ fontSize: 14 }} />
                  <Typography variant="caption" color="inherit" noWrap>
                    {fileLink?.label ?? labels.linkAttachment}
                  </Typography>
                </ButtonBase>
              ) : (
                <Typography variant="caption" color="text.secondary" noWrap maxWidth="100%">
                  {status === "uploading"
                    ? `${progress} %`
                    : `${getFileTypeLabel(file.name, file.type)} · ${formatFileSize(file.size, language)}`}
                </Typography>
              )}
            </Stack>
            <IconButton
              aria-label={`${labels.removeAttachment} ${file.name}`}
              onClick={() => onRemove(key)}
              sx={{
                "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.06)", color: "text.primary" },
                borderRadius: "6px",
                color: "text.secondary",
                height: 28,
                position: "absolute",
                right: 4,
                top: 4,
                width: 28,
              }}
            >
              <ChatLineIcon d={LINE_ICON_PATHS.close} size={16} />
            </IconButton>
            {status === "uploading" && (
              <LinearProgress
                variant="determinate"
                value={progress}
                sx={{ bottom: 0, height: 2, left: 0, position: "absolute", right: 0 }}
              />
            )}
          </Box>
        );
      })}
    </Stack>
  );
};

export default ChatComposerAttachments;
