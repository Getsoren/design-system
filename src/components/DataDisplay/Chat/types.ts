import type { ReactNode } from "react";

export interface ChatMessage {
  id: string | number;
  authorId: string;
  body: string;
  createdAt: string;
}

export interface ChatParticipant {
  userId: string;
  firstName: string;
  lastName: string;
  avatar?: string | null;
}

export interface ChatThread {
  id: string;
  createdAt: string;
  updatedAt?: string | null;
  lastMessagePreview?: string | null;
  unreadCount?: number | null;
  participants?: ChatParticipant[] | null;
}

export interface ChatSearchUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar?: string | null;
}

export interface ChatConversationListLabels {
  messages?: string;
  search?: string;
}

export interface ChatConversationDetailLabels {
  today?: string;
  yesterday?: string;
  createYourFirstConversation?: string;
  newConversation?: string;
  writeAMessage?: string;
  send?: string;
  enterToSend?: string;
  addParticipant?: string;
  deleteConversation?: string;
  participants?: string;
  searchContacts?: string;
  add?: string;
}

export interface ChatMessageInputLabels {
  writeAMessage?: string;
  send?: string;
  enterToSend?: string;
}

export interface ChatParticipantDialogLabels {
  title?: string;
  confirm?: string;
  participants?: string;
  searchContacts?: string;
  noOptionsText?: string;
}

export interface ChatConversationListProps {
  threads?: ChatThread[];
  isLoading?: boolean;
  selectedThreadId?: string;
  onSelectThread: (threadId: string) => void;
  onNewConversation: () => void;
  avatarSrcResolver?: (src?: string | null) => string | undefined;
  labels?: ChatConversationListLabels;
  formatDate?: (date: string) => string;
  formatParticipantName?: (participant: ChatParticipant) => string;
  onLoadMore?: () => void;
  hasMore?: boolean;
}

export interface ChatConversationDetailProps {
  threadId?: string;
  participants?: ChatParticipant[] | null;
  isLoading?: boolean;
  messages?: ChatMessage[];
  currentUserId: string;
  onDeleteConversation: (threadId: string) => void;
  onNewConversation: () => void;
  onSendMessage: (threadId: string, body: string) => void;
  onAddParticipants: (participants: ChatSearchUser[]) => void;
  onSearchParticipants?: (query: string) => void;
  searchResults?: ChatSearchUser[];
  isSearchingParticipants?: boolean;
  avatarSrcResolver?: (src?: string | null) => string | undefined;
  renderAfterBubble?: (message: ChatMessage, urls: string[]) => ReactNode;
  labels?: ChatConversationDetailLabels;
  formatDayLabel?: (date: string) => string;
  isSending?: boolean;
  formatParticipantName?: (participant: ChatParticipant) => string;
  headerAction?: ReactNode;
  defaultMessage?: string;
  onAddParticipantDialogOpenChange?: (open: boolean) => void;
  messageMaxLength?: number;
}

export interface ChatMessageBubbleProps {
  isOwn: boolean;
  message: ChatMessage;
  participants?: ChatParticipant[] | null;
  avatarSrcResolver?: (src?: string | null) => string | undefined;
  renderAfterBubble?: (urls: string[]) => ReactNode;
  formatTime?: (date: string) => string;
  /** Hide the author avatar on received messages (e.g. single-author AI assistant chat) */
  hideAvatar?: boolean;
}

export interface ChatMessageInputProps {
  onSend: (message: string) => void;
  labels?: ChatMessageInputLabels;
  autoFocusKey?: string;
  isSending?: boolean;
  defaultMessage?: string;
  maxLength?: number;
}

export interface ChatParticipantDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: (participants: ChatSearchUser[]) => void;
  onSearch: (query: string) => void;
  searchResults?: ChatSearchUser[];
  isSearchLoading?: boolean;
  isConfirmLoading?: boolean;
  avatarSrcResolver?: (src?: string | null) => string | undefined;
  labels?: ChatParticipantDialogLabels;
}
