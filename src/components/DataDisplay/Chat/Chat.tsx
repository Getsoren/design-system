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

/**
 * On a phone the list and the conversation cannot sit side by side: the body shows one pane at a
 * time — the list until a thread is selected, then the conversation (its header offers the way back).
 */
const ChatBody = ({ children }: ChatBodyProps) => (
  <Stack
    direction="row"
    sx={({ breakpoints }) => ({
      flex: 1,
      minHeight: 0,
      [breakpoints.down("sm")]: {
        '& > [data-chat-pane="list"][data-selected="true"], & > [data-chat-pane="detail"][data-selected="false"]': {
          display: "none",
        },
      },
    })}
  >
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
