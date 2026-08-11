import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Stack from "@mui/material/Stack";
import { useRef, useState } from "react";
import ChatParticipantAutocomplete, {
  type ChatParticipantAutocompleteHandle,
} from "@/components/DataDisplay/Chat/components/ChatParticipantAutocomplete";
import type { ChatParticipantDialogProps, ChatSearchUser } from "@/components/DataDisplay/Chat/types";
import DialogCloseIcon from "@/components/Feedback/Dialog/DialogCloseIcon";
import Button from "@/components/Inputs/Button";

const ChatParticipantDialog = ({
  open,
  onClose,
  onConfirm,
  onSearch,
  searchResults,
  isSearchLoading,
  isConfirmLoading,
  avatarSrcResolver,
  labels,
}: ChatParticipantDialogProps) => {
  const [selectedParticipants, setSelectedParticipants] = useState<ChatSearchUser[]>([]);
  const [isConfirming, setIsConfirming] = useState(false);
  const autocompleteRef = useRef<ChatParticipantAutocompleteHandle>(null);

  const handleConfirm = async () => {
    if (!selectedParticipants.length || isConfirming) {
      return;
    }

    const result = onConfirm(selectedParticipants);

    // An async confirm keeps the dialog open with the button loading, and only closes once it
    // resolves; a rejection leaves the selection in place so the caller's error surface gets a retry.
    if (result instanceof Promise) {
      setIsConfirming(true);
      try {
        await result;
      } catch {
        return;
      } finally {
        setIsConfirming(false);
      }
    }

    setSelectedParticipants([]);
    onClose();
  };

  return (
    <Dialog fullWidth maxWidth="sm" open={open} onClose={onClose} onAnimationEnd={() => autocompleteRef.current?.focus()}>
      <DialogCloseIcon onClick={onClose} />
      <DialogTitle variant="h3" paddingBottom={2}>
        {labels?.title ?? "New Conversation"}
      </DialogTitle>
      <DialogContent sx={{ overflow: "visible" }}>
        <Stack spacing={2} marginTop={1}>
          <ChatParticipantAutocomplete
            ref={autocompleteRef}
            value={selectedParticipants}
            onChange={setSelectedParticipants}
            onInputChange={onSearch}
            options={searchResults}
            isLoading={isSearchLoading}
            avatarSrcResolver={avatarSrcResolver}
            labels={{ noOptionsText: labels?.noOptionsText, participants: labels?.participants, searchContacts: labels?.searchContacts }}
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button
          fullWidth
          variant="contained"
          onClick={handleConfirm}
          disabled={!selectedParticipants.length}
          loading={isConfirmLoading || isConfirming}
        >
          {labels?.confirm ?? "Chat"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ChatParticipantDialog;
