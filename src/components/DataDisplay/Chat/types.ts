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
  hideAvatar?: boolean;
}

export interface ChatMessageInputProps {
  onSend: (message: string) => void;
  labels?: ChatMessageInputLabels;
  autoFocusKey?: string;
  isSending?: boolean;
  defaultMessage?: string;
  maxLength?: number;
  /** Rendered on the left of the bottom bar, facing the send button (e.g. ChatVoiceRecorder) */
  startActions?: ReactNode;
}

export interface ChatVoiceRecorderLabels {
  record?: string;
  cancel?: string;
  send?: string;
}

export interface ChatVoiceRecorderProps {
  /**
   * Receives the recorded audio once the user validates the take
   */
  onRecorded: (audio: Blob) => void;
  /**
   * Typically a denied microphone permission
   */
  onError?: (error: unknown) => void;
  /**
   * The caller is consuming the recording (upload/transcription): spinner on the mic, new take blocked
   */
  isProcessing?: boolean;
  /**
   * Disables the mic button (e.g. the chat is busy sending) — no recording can be started
   */
  disabled?: boolean;
  /**
   * Hard stop: past this duration the take is validated automatically (default 2 min)
   */
  maxDurationMs?: number;
  /**
   * Enables Siri-style auto-send: once the user has started speaking, the take is validated automatically
   * after a trailing silence. Opt-in (default false) so a shared consumer never auto-sends by surprise.
   */
  autoSubmitOnSilence?: boolean;
  /**
   * Trailing silence, in ms, before the take is auto-validated when `autoSubmitOnSilence` is on (default
   * 2500). The timer only arms after the first speech is detected, so a slow start never cuts the user off.
   */
  silenceTimeoutMs?: number;
  /**
   * Translated strings for the tooltips (record / cancel / send) — falls back to English defaults
   */
  labels?: ChatVoiceRecorderLabels;
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
