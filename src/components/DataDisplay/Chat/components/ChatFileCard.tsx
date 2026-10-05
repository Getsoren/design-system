import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { type ReactNode, useContext } from "react";
import formatFileSize from "@/components/DataDisplay/Chat/utils/formatFileSize";
import { getFileKind, getFileTypeLabel } from "@/components/DataDisplay/Chat/utils/getFileKind";
import FileSpreadsheetIcon from "@/components/DataDisplay/Icons/FileSpreadsheetIcon";
import FileTextIcon from "@/components/DataDisplay/Icons/FileTextIcon";
import ImageIcon from "@/components/DataDisplay/Icons/ImageIcon";
import { ThemeContext } from "@/context/Theme/ThemeProvider";

export const FILE_CARD_VISUAL_SIZE = 48;

interface ChatFileIconProps {
  fileName: string;
  mimeType?: string | null;
}

export const ChatFileIcon = ({ fileName, mimeType }: ChatFileIconProps) => {
  const kind = getFileKind(fileName, mimeType);
  const Icon = { document: FileTextIcon, image: ImageIcon, other: FileTextIcon, pdf: FileTextIcon, spreadsheet: FileSpreadsheetIcon }[kind];

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      flexShrink={0}
      sx={{
        backgroundColor: ({ palette }) => (palette.mode === "dark" ? "grey.800" : "grey.100"),
        borderRadius: 1.5,
        color: "text.secondary",
        height: FILE_CARD_VISUAL_SIZE,
        width: FILE_CARD_VISUAL_SIZE,
      }}
    >
      <Icon />
    </Stack>
  );
};

interface ChatFileCardProps {
  fileName: string;
  mimeType?: string | null;
  size: number;
  /** Replaces the type icon, e.g. the square preview of an image */
  visual?: ReactNode;
  /** Makes the name and icon a button, e.g. to open the file */
  onClick?: () => void;
  onClickLabel?: string;
  /** Buttons on the right (download, remove) */
  actions?: ReactNode;
  /** Upload in progress (0-100) */
  progress?: number;
  /** Replaces the type and size line, e.g. an upload error */
  error?: string;
  children?: ReactNode;
}

/**
 * A file as a card: type icon (or preview), truncated name, "PDF · 1,2 MB", actions on the right.
 */
const ChatFileCard = ({
  fileName,
  mimeType,
  size,
  visual,
  onClick,
  onClickLabel,
  actions,
  progress,
  error,
  children,
}: ChatFileCardProps) => {
  const { language } = useContext(ThemeContext);
  const details = (
    <>
      {visual ?? <ChatFileIcon fileName={fileName} mimeType={mimeType} />}
      <Stack minWidth={0} flex={1} alignItems="flex-start" textAlign="left">
        <Typography variant="body2" fontWeight={500} noWrap maxWidth="100%" title={fileName}>
          {fileName}
        </Typography>
        <Typography variant="caption" color={error ? "error.main" : "text.secondary"} noWrap maxWidth="100%">
          {error ?? `${getFileTypeLabel(fileName, mimeType)} · ${formatFileSize(size, language)}`}
        </Typography>
      </Stack>
    </>
  );

  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
        border: "1px solid",
        borderColor: error ? "error.main" : "divider",
        borderRadius: 2,
        color: "text.primary",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Stack direction="row" alignItems="center" spacing={0.5} sx={{ minHeight: 64, pl: 1, pr: 0.5, py: 1 }}>
        {onClick ? (
          <ButtonBase
            onClick={onClick}
            aria-label={onClickLabel ? `${onClickLabel} ${fileName}` : undefined}
            sx={{ borderRadius: 1.5, flex: 1, gap: 1.5, justifyContent: "flex-start", minHeight: 48, minWidth: 0 }}
          >
            {details}
          </ButtonBase>
        ) : (
          <Stack direction="row" alignItems="center" spacing={1.5} flex={1} minWidth={0}>
            {details}
          </Stack>
        )}
        {actions}
      </Stack>
      {children}
      {progress !== undefined && (
        <LinearProgress
          variant="determinate"
          value={progress}
          color="inherit"
          aria-label={fileName}
          sx={{ bottom: 0, color: "text.primary", height: 3, left: 0, position: "absolute", right: 0 }}
        />
      )}
    </Box>
  );
};

export default ChatFileCard;
