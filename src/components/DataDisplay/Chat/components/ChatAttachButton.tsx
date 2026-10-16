import ButtonBase from "@mui/material/ButtonBase";
import { useRef } from "react";
import ChatLineIcon from "@/components/DataDisplay/Chat/components/ChatLineIcon";
import { LINE_ICON_PATHS } from "@/components/DataDisplay/Chat/constants";
import { COMPOSER_ICON_SIZE, composerToolSx } from "@/components/DataDisplay/Chat/utils/composerSx";

interface ChatAttachButtonProps {
  label: string;
  accept: string;
  onFiles: (files: File[]) => void;
}

const ChatAttachButton = ({ label, accept, onFiles }: ChatAttachButtonProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <ButtonBase aria-label={label} onClick={() => fileInputRef.current?.click()} data-test="chatAttachFile" sx={composerToolSx(false)}>
        <ChatLineIcon d={LINE_ICON_PATHS.paperclip} size={COMPOSER_ICON_SIZE} />
        <span data-label>{label}</span>
      </ButtonBase>
      <input
        ref={fileInputRef}
        type="file"
        multiple
        hidden
        accept={accept}
        data-test="chatAttachFileInput"
        onChange={(event) => {
          onFiles(Array.from(event.target.files ?? []));
          // Picking the same file again after removing it must fire a new change
          event.target.value = "";
        }}
      />
    </>
  );
};

export default ChatAttachButton;
