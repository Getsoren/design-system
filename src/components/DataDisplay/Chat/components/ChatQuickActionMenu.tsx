import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";
import type { ChatLabels } from "@/components/DataDisplay/Chat/hooks/useChatLabels";
import type { ChatQuickAction } from "@/components/DataDisplay/Chat/types";
import AttachFileIcon from "@/components/DataDisplay/Icons/AttachFileIcon";

interface ChatQuickActionMenuProps {
  anchorEl: HTMLElement | null;
  onClose: () => void;
  actions: ChatQuickAction[];
  onAction: (actionId: string) => void;
  /** "File or photo" on top, when attachments are enabled */
  onPickFile?: () => void;
  labels: ChatLabels;
}

// Concentric corners, as in the composer: the menu takes its 20px radius, the items sit 5px from its outer edge (the
// theme's 1px border + 4px) so 20 - 5 = 15, and their 40px icon tiles 6px inside an item, 15 - 6 = 9: the slightly
// square shape of the composer's buttons
const PAPER_RADIUS = 20;
const PAPER_BORDER = 1;
const ITEM_INSET = 4;
const ITEM_RADIUS = PAPER_RADIUS - PAPER_BORDER - ITEM_INSET;
const ICON_INSET = 6;
const ICON_SIZE = 40;

const itemSx = {
  borderRadius: `${ITEM_RADIUS}px`,
  gap: 1.5,
  minHeight: ICON_SIZE + 2 * ICON_INSET,
  mx: `${ITEM_INSET}px`,
  px: `${ICON_INSET}px`,
  py: `${ICON_INSET}px`,
};

interface ItemIconProps {
  children: ReactNode;
}

const ItemIcon = ({ children }: ItemIconProps) => (
  <Box
    component="span"
    sx={{
      alignItems: "center",
      backgroundColor: "action.hover",
      borderRadius: `${ITEM_RADIUS - ICON_INSET}px`,
      color: "text.primary",
      display: "inline-flex",
      flexShrink: 0,
      fontSize: 20,
      height: ICON_SIZE,
      justifyContent: "center",
      width: ICON_SIZE,
    }}
  >
    {children}
  </Box>
);

/**
 * ChatGPT-like menu of the composer's "Actions": an icon tile and a label per entry, "File or photo" first when given.
 */
const ChatQuickActionMenu = ({ anchorEl, onClose, actions, onAction, onPickFile, labels }: ChatQuickActionMenuProps) => (
  <Menu
    open={!!anchorEl}
    anchorEl={anchorEl}
    onClose={onClose}
    anchorOrigin={{ horizontal: "left", vertical: "top" }}
    transformOrigin={{ horizontal: "left", vertical: "bottom" }}
    slotProps={{
      // No side padding from the theme's list: the items' own 4px margin is the inset on every side
      list: { sx: { px: 0, py: `${ITEM_INSET}px` } },
      paper: { sx: { borderRadius: `${PAPER_RADIUS}px`, boxShadow: "0 8px 32px rgba(0, 0, 0, 0.16)", minWidth: 260, mt: -1 } },
    }}
  >
    {onPickFile && (
      <MenuItem
        onClick={() => {
          onClose();
          onPickFile();
        }}
        sx={itemSx}
      >
        <ItemIcon>
          <AttachFileIcon fontSize="inherit" />
        </ItemIcon>
        <Typography variant="body2" fontWeight={500}>
          {labels.fileOrPhoto}
        </Typography>
      </MenuItem>
    )}
    {onPickFile && <Divider sx={{ my: `${ITEM_INSET}px` }} />}
    {actions.map(({ id, label, icon }) => (
      <MenuItem
        key={id}
        onClick={() => {
          onClose();
          onAction(id);
        }}
        sx={itemSx}
      >
        {icon && <ItemIcon>{icon}</ItemIcon>}
        <Typography variant="body2" fontWeight={500}>
          {label}
        </Typography>
      </MenuItem>
    ))}
  </Menu>
);

export default ChatQuickActionMenu;
