import { getInitials } from "@getsoren/react-utils";
import { Theme } from "@mui/material";
import AvatarGroup from "@mui/material/AvatarGroup";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";
import { useState } from "react";
import Avatar from "@/components/DataDisplay/Avatar";
import ChatParticipantDialog from "@/components/DataDisplay/Chat/components/ChatParticipantDialog";
import type {
  ChatConversationDetailLabels,
  ChatConversationDetailSlotProps,
  ChatParticipant,
  ChatSearchUser,
} from "@/components/DataDisplay/Chat/types";
import formatParticipantNames from "@/components/DataDisplay/Chat/utils/formatParticipantNames";
import DeleteIcon from "@/components/DataDisplay/Icons/DeleteIcon";
import MoreHorizIcon from "@/components/DataDisplay/Icons/MoreHorizIcon";
import PersonAddIcon from "@/components/DataDisplay/Icons/PersonAddIcon";
import useMenu from "@/hooks/useMenu";

interface ChatConversationDetailHeaderProps {
  threadId: string;
  participants?: ChatParticipant[] | null;
  onDeleteConversation: (threadId: string) => void;
  onAddParticipants: (participants: ChatSearchUser[]) => void | Promise<unknown>;
  onSearchParticipants?: (query: string) => void;
  searchResults?: ChatSearchUser[];
  isSearchingParticipants?: boolean;
  avatarSrcResolver?: (src?: string | null) => string | undefined;
  labels?: ChatConversationDetailLabels;
  formatParticipantName?: (participant: ChatParticipant) => string;
  headerAction?: ReactNode;
  onAddParticipantDialogOpenChange?: (open: boolean) => void;
  slotProps?: Pick<ChatConversationDetailSlotProps, "addParticipantsButton">;
}

const ChatConversationDetailHeader = ({
  threadId,
  participants,
  onDeleteConversation,
  onAddParticipants,
  onSearchParticipants,
  searchResults,
  isSearchingParticipants,
  avatarSrcResolver,
  labels,
  formatParticipantName,
  headerAction,
  onAddParticipantDialogOpenChange,
  slotProps,
}: ChatConversationDetailHeaderProps) => {
  const { isMenuOpen, anchorMenu, closeMenu, openMenu } = useMenu();
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const participantNames = formatParticipantNames(participants, formatParticipantName);

  const handleDelete = () => {
    closeMenu();
    onDeleteConversation(threadId);
  };

  const handleOpenAddDialog = () => {
    closeMenu();
    setAddDialogOpen(true);
    onAddParticipantDialogOpenChange?.(true);
  };

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ borderBottom: ({ palette }) => `1px solid ${palette.divider}`, px: 3, py: 1.5 }}
      >
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <AvatarGroup max={3}>
            {participants?.map(({ userId, avatar, firstName, lastName }) => (
              <Avatar
                key={userId}
                src={avatarSrcResolver?.(avatar)}
                sx={{ backgroundColor: ({ palette }: Theme) => (palette.mode === "dark" ? "grey.500" : "grey.100") }}
              >
                {getInitials({ firstName, lastName }, true)}
              </Avatar>
            ))}
          </AvatarGroup>
          <Typography variant="subtitle2" fontWeight={600}>
            {participantNames}
          </Typography>
        </Stack>
        {/* Adding a participant is the frequent action, so it gets a button of its own; the menu
            keeps what stays rare and destructive. */}
        {headerAction ?? (
          <Stack direction="row" alignItems="center" spacing={1}>
            <Tooltip arrow title={labels?.addParticipant ?? "Add Participant"}>
              <IconButton
                {...slotProps?.addParticipantsButton}
                size="small"
                aria-label={labels?.addParticipant ?? "Add Participant"}
                onClick={handleOpenAddDialog}
                sx={{
                  "&:hover": { backgroundColor: ({ palette }: Theme) => (palette.mode === "dark" ? "grey.400" : "grey.200") },
                  backgroundColor: ({ palette }: Theme) => (palette.mode === "dark" ? "grey.500" : "grey.100"),
                  color: "text.primary",
                }}
              >
                <PersonAddIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <IconButton size="small" onClick={openMenu}>
              <MoreHorizIcon fontSize="small" />
            </IconButton>
            <Menu
              open={isMenuOpen}
              onClose={closeMenu}
              anchorEl={anchorMenu}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
            >
              <MenuItem onClick={handleDelete}>
                <ListItemIcon>
                  <DeleteIcon fontSize="small" color="error" />
                </ListItemIcon>
                <Typography color="error">{labels?.deleteConversation ?? "Delete Conversation"}</Typography>
              </MenuItem>
            </Menu>
          </Stack>
        )}
      </Stack>
      <ChatParticipantDialog
        open={addDialogOpen}
        onClose={() => {
          setAddDialogOpen(false);
          onAddParticipantDialogOpenChange?.(false);
        }}
        onConfirm={onAddParticipants}
        onSearch={onSearchParticipants ?? (() => {})}
        searchResults={searchResults}
        isSearchLoading={isSearchingParticipants}
        avatarSrcResolver={avatarSrcResolver}
        labels={{
          confirm: labels?.add ?? "Add",
          participants: labels?.participants,
          searchContacts: labels?.searchContacts,
          title: labels?.addParticipant ?? "Add Participant",
        }}
      />
    </>
  );
};

export default ChatConversationDetailHeader;
