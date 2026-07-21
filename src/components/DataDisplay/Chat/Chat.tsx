import Stack from "@mui/material/Stack";
import type { FC, ReactNode } from "react";
import ChatConversationDetail from "@/components/DataDisplay/Chat/components/ChatConversationDetail";
import ChatConversationList from "@/components/DataDisplay/Chat/components/ChatConversationList";
import ChatMessageBubble from "@/components/DataDisplay/Chat/components/ChatMessageBubble";
import ChatMessageInput from "@/components/DataDisplay/Chat/components/ChatMessageInput";
import ChatParticipantDialog from "@/components/DataDisplay/Chat/components/ChatParticipantDialog";
import ChatVoiceRecorder from "@/components/DataDisplay/Chat/components/ChatVoiceRecorder";

interface ChatProps {
  children: ReactNode;
  height?: string | number;
  width?: string | number;
}

interface ChatBodyProps {
  children: ReactNode;
}

const ChatBody = ({ children }: ChatBodyProps) => (
  <Stack direction="row" sx={{ flex: 1, minHeight: 0 }}>
    {children}
  </Stack>
);

type ChatComponent = FC<ChatProps> & {
  Body: typeof ChatBody;
  ConversationDetail: typeof ChatConversationDetail;
  ConversationList: typeof ChatConversationList;
  MessageBubble: typeof ChatMessageBubble;
  MessageInput: typeof ChatMessageInput;
  ParticipantDialog: typeof ChatParticipantDialog;
  VoiceRecorder: typeof ChatVoiceRecorder;
};

const Chat: ChatComponent = Object.assign(
  ({ children, height = "100%", width = "100%" }: ChatProps) => (
    <Stack height={height} width={width} flexDirection="column">
      {children}
    </Stack>
  ),
  {
    Body: ChatBody,
    ConversationDetail: ChatConversationDetail,
    ConversationList: ChatConversationList,
    MessageBubble: ChatMessageBubble,
    MessageInput: ChatMessageInput,
    ParticipantDialog: ChatParticipantDialog,
    VoiceRecorder: ChatVoiceRecorder,
  },
);

export default Chat;
