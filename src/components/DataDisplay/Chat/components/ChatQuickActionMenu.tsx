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

// Paper radius 16 with a 4px inset around the items: 16 - 4 = 12
const itemSx = { borderRadius: 1.5, gap: 1.5, minHeight: 52, mx: 0.5, px: 1 };

interface ItemIconProps {
  children: ReactNode;
}

const ItemIcon = ({ children }: ItemIconProps) => (
  <Box
    component="span"
    sx={{
      alignItems: "center",
      backgroundColor: "action.hover",
      borderRadius: "50%",
      color: "text.primary",
      display: "inline-flex",
      flexShrink: 0,
      fontSize: 20,
      height: 36,
      justifyContent: "center",
      width: 36,
    }}
  >
    {children}
  </Box>
);

/**
 * ChatGPT-like menu of the composer's "+": a round icon and a label per entry, "File or photo" first.
 */
const ChatQuickActionMenu = ({ anchorEl, onClose, actions, onAction, onPickFile, labels }: ChatQuickActionMenuProps) => (
  <Menu
    open={!!anchorEl}
    anchorEl={anchorEl}
    onClose={onClose}
    anchorOrigin={{ horizontal: "left", vertical: "top" }}
    transformOrigin={{ horizontal: "left", vertical: "bottom" }}
    slotProps={{
      list: { sx: { py: 0.5 } },
      paper: { sx: { borderRadius: 2, boxShadow: "0 8px 32px rgba(0, 0, 0, 0.16)", minWidth: 260, mt: -1 } },
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
    {onPickFile && <Divider sx={{ my: 0.5 }} />}
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
