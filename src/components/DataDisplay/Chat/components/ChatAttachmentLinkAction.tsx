import ButtonBase from "@mui/material/ButtonBase";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import type { ChatAttachmentLink } from "@/components/DataDisplay/Chat/types";
import LinkIcon from "@/components/DataDisplay/Icons/LinkIcon";

interface ChatAttachmentLinkActionProps {
  link?: ChatAttachmentLink | null;
  /** Text of the button shown while the file is not linked */
  label: string;
  /** Opens the app's dialog to link (or re-link) the file */
  onLink?: () => Promise<unknown>;
  /** Click on the pill of a linked file (defaults to `onLink`, to change it) */
  onClickLink?: () => void;
  /** Light text, for the dark background of the viewer */
  contrast?: boolean;
}

/**
 * "Link to an order" as a visible text button, replaced by a pill carrying the label once the file is linked.
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

  const handlePillClick = onClickLink ?? (onLink ? handleLink : undefined);

  if (!(link || onLink)) {
    return null;
  }

  const icon = isLinking ? (
    <CircularProgress size={16} color="inherit" sx={{ flexShrink: 0 }} />
  ) : (
    <LinkIcon sx={{ flexShrink: 0, fontSize: 18 }} />
  );

  return (
    <ButtonBase
      onClick={link ? handlePillClick : handleLink}
      disabled={link ? !handlePillClick : isLinking}
      sx={{
        "&:hover": { backgroundColor: contrast ? "rgba(255, 255, 255, 0.16)" : "action.hover" },
        "&.Mui-disabled": { color: contrast ? "common.white" : "text.primary" },
        // A pill on one line, a rounded box when a long label wraps
        borderRadius: "18px",
        color: contrast ? "common.white" : "text.primary",
        gap: 0.75,
        justifyContent: "flex-start",
        maxWidth: "100%",
        minHeight: 44,
        px: 1.5,
        textAlign: "left",
        ...(link && {
          // A lighter 36px pill, still a 44px hit area
          "&::after": { bottom: -4, content: '""', left: 0, position: "absolute", right: 0, top: -4 },
          backgroundColor: contrast ? "rgba(255, 255, 255, 0.12)" : "action.selected",
          border: "1px solid",
          borderColor: contrast ? "rgba(255, 255, 255, 0.24)" : "divider",
          minHeight: 36,
          my: 0.5,
          py: 0.75,
        }),
      }}
    >
      {icon}
      <Typography variant="body2" fontWeight={500} sx={{ fontSize: 13, minWidth: 0, overflowWrap: "anywhere" }}>
        {link?.label ?? label}
      </Typography>
    </ButtonBase>
  );
};

export default ChatAttachmentLinkAction;
