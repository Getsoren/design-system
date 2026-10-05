import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import type { ChatAttachmentLink } from "@/components/DataDisplay/Chat/types";
import KeyboardArrowRightRoundedIcon from "@/components/DataDisplay/Icons/KeyboardArrowRightRoundedIcon";
import LinkIcon from "@/components/DataDisplay/Icons/LinkIcon";

interface ChatAttachmentLinkActionProps {
  link?: ChatAttachmentLink | null;
  /** Text shown while the file is not linked */
  label: string;
  /** Opens the app's dialog to link (or re-link) the file */
  onLink?: () => Promise<unknown>;
  /** Click on a linked file's row (defaults to `onLink`, to change it) */
  onClickLink?: () => void;
  /** Light button for the dark background of the viewer */
  contrast?: boolean;
}

/**
 * Footer row of a file card, as on Slack or Linear: "Link to an order" while unlinked, then the order it is filed under.
 */
const ChatAttachmentLinkAction = ({ link, label, onLink, onClickLink, contrast }: ChatAttachmentLinkActionProps) => {
  const [isLinking, setIsLinking] = useState(false);

  const handleLink = () => {
    if (!onLink || isLinking) {
      return;
    }

    setIsLinking(true);
    onLink()
      .catch(() => {})
      .finally(() => setIsLinking(false));
  };

  const handleLinkedClick = onClickLink ?? (onLink ? handleLink : undefined);

  if (!(link || onLink)) {
    return null;
  }

  return (
    <ButtonBase
      onClick={link ? handleLinkedClick : handleLink}
      disabled={link ? !handleLinkedClick : isLinking}
      title={link?.label}
      sx={{
        "&.Mui-disabled": { color: contrast ? "common.white" : "text.primary" },
        gap: 1,
        justifyContent: "flex-start",
        minHeight: 44,
        px: 1.5,
        textAlign: "left",
        transition: "background-color 80ms, color 80ms",
        ...(contrast
          ? {
              "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
              backgroundColor: "rgba(255, 255, 255, 0.12)",
              borderRadius: 2,
              color: "common.white",
              maxWidth: 360,
            }
          : {
              "&:hover": { backgroundColor: "action.hover", color: "text.primary" },
              borderTop: "1px solid",
              borderTopColor: "divider",
              color: link ? "text.primary" : "text.secondary",
              width: "100%",
            }),
      }}
    >
      <Box component="span" sx={{ color: link && !contrast ? "text.secondary" : "inherit", display: "inline-flex", flexShrink: 0 }}>
        {isLinking ? <CircularProgress size={14} color="inherit" /> : <LinkIcon sx={{ fontSize: 16 }} />}
      </Box>
      <Typography variant="body2" noWrap sx={{ flex: 1, fontSize: 13, fontWeight: link ? 500 : 400, minWidth: 0 }}>
        {link?.label ?? label}
      </Typography>
      {link && handleLinkedClick && (
        <KeyboardArrowRightRoundedIcon sx={{ color: contrast ? "inherit" : "text.disabled", flexShrink: 0, fontSize: 18 }} />
      )}
    </ButtonBase>
  );
};

export default ChatAttachmentLinkAction;
