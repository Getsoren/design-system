import type { ReactNode } from "react";
import type { DataAttributes } from "@/types/dataAttributes";

export interface ChatAttachmentLink {
  /** Display label, e.g. "Commande #1234 · Bon de livraison" */
  label: string;
  onClick?: () => void;
}

export interface ChatAttachment {
  id: string;
  fileName: string;
  mimeType: string;
  /** Bytes */
  size: number;
  url: string;
  thumbnailUrl?: string | null;
  width?: number | null;
  height?: number | null;
  /** Business object the file is filed under (an order on Soren) */
  link?: ChatAttachmentLink | null;
  /** Length of a voice message, set when recorded; read from the audio file otherwise */
  durationMs?: number | null;
}

export interface ChatReaction {
  /** A single unicode emoji */
  emoji: string;
  userIds: string[];
}

/** The order a message is about: its "N° 34126" tag, clickable to open it */
export interface ChatMessageBooking {
  label: string;
  image?: string | null;
  onClick?: () => void;
}

/** An automatic message (end of rental, order shared…), shown as a centered notice rather than a bubble */
export interface ChatMessageEvent {
  /** e.g. "Fin de location confirmée" */
  title: string;
  icon?: ReactNode;
  booking?: ChatMessageBooking;
  /** e.g. ["Nacelle 16 m", "12/10/2026"], joined on one line */
  details?: string[];
}

export interface ChatMessageActionStatus {
  /** e.g. "Acceptée par Kiloutou · 14:32" */
  label: string;
  tone: "pending" | "success" | "neutral" | "error";
}

export interface ChatMessageActionResponse {
  id: string;
  label: string;
  /** Default "primary": filled in ink */
  variant?: "primary" | "secondary";
}

/** A request on an order (extend, pick up, send a document…), shown as a card with one-tap answers */
export interface ChatMessageAction {
  /** e.g. "Demande de prolongation" */
  title: string;
  /** e.g. "N° 34126 · Nacelle 16 m", with the machine's photo */
  booking?: ChatMessageBooking;
  /** e.g. ["Jusqu'au 12 oct."], one line each */
  details?: string[];
  status?: ChatMessageActionStatus;
  /** Buttons for the recipient only */
  responses?: ChatMessageActionResponse[];
  /** Comment typed with the request */
  note?: string;
}

/** An entry of the composer's "+" menu: the app opens its own dialog */
export interface ChatQuickAction {
  id: string;
  label: string;
  icon?: ReactNode;
}

export interface ChatMessage {
  id: string | number;
  authorId: string;
  body: string;
  createdAt: string;
  attachments?: ChatAttachment[] | null;
  reactions?: ChatReaction[] | null;
  event?: ChatMessageEvent | null;
  action?: ChatMessageAction | null;
}

/** May return a promise: the button then spins until it settles */
export type ChatActionResponseHandler = (messageId: ChatMessage["id"], responseId: string) => void | Promise<unknown>;

/** Resolves with the stored file; report the upload progress (0-100) through `onProgress` */
export type ChatUploadAttachment = (file: File, onProgress: (percent: number) => void) => Promise<ChatAttachment>;

/**
 * Opens the app's own dialog and resolves with the link to display, or null if cancelled. `message` is set
 * for a file already sent (the app then updates its own message data), absent for a file still in the composer.
 */
export type ChatLinkAttachment = (attachment: ChatAttachment, context: { message?: ChatMessage }) => Promise<ChatAttachmentLink | null>;

export interface ChatParticipant {
  userId: string;
  firstName: string;
  lastName: string;
  avatar?: string | null;
  /** When this participant last read the thread: my messages sent before it show as seen */
  lastReadAt?: string | null;
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

/** A pill above the conversation list, e.g. "My conversations" / "Team" */
export interface ChatConversationListTab {
  id: string;
  label: string;
  count?: number;
}

/** A thread read without being one of its participants: a bar to join it replaces the composer */
export interface ChatConversationReadOnly {
  /** e.g. "Vous consultez la conversation de Sophie et Julie" */
  label: ReactNode;
  /** Default "Join the conversation" */
  actionLabel?: string;
  /** May return a promise: the button then spins until it settles */
  onAction: () => void | Promise<unknown>;
}

export interface ChatConversationListLabels {
  messages?: string;
  search?: string;
}

export interface ChatAttachmentLabels {
  attachFile?: string;
  dropFilesHere?: string;
  removeAttachment?: string;
  retryUpload?: string;
  uploadFailed?: string;
  fileTooLarge?: string;
  unsupportedFileType?: string;
  tooManyFiles?: string;
  linkAttachment?: string;
  download?: string;
  openFile?: string;
  previous?: string;
  next?: string;
  close?: string;
}

export interface ChatReactionLabels {
  addReaction?: string;
  /** Title of the list of who reacted */
  reactions?: string;
  /** Under my own reaction in that list */
  removeReaction?: string;
  searchEmoji?: string;
  /** Header of the recently used emojis in the picker */
  recentEmojis?: string;
  you?: string;
}

export interface ChatVoiceMessageLabels {
  voiceMessage?: string;
  play?: string;
  pause?: string;
  voiceMessageFailed?: string;
  recordVoiceMessage?: string;
  cancelRecording?: string;
  sendVoiceMessage?: string;
}

export interface ChatReadReceiptLabels {
  /** Optimistic message, not acknowledged yet */
  sending?: string;
  sent?: string;
  /** Followed by the readers' names and times */
  seenBy?: string;
}

export interface ChatEventLabels {
  /** Filter pills above the conversation */
  filterAll?: string;
  filterMessages?: string;
  filterUpdates?: string;
  /** After the count of a folded run of automatic messages: "3 order updates" */
  orderUpdates?: string;
  /** Before the author of an automatic message: "by Sophie · 17:55" */
  eventBy?: string;
}

export interface ChatQuickActionLabels {
  /** The composer's "+" button */
  moreActions?: string;
  /** First entry of its menu, the former paperclip */
  fileOrPhoto?: string;
}

export interface ChatQuickReplyLabels {
  /** Name of the group of one-tap replies above the field */
  quickReplies?: string;
}

export interface ChatTeamLabels {
  /** Default action of the read-only bar */
  joinConversation?: string;
}

export interface ChatConversationDetailLabels
  extends ChatAttachmentLabels,
    ChatReactionLabels,
    ChatVoiceMessageLabels,
    ChatReadReceiptLabels,
    ChatEventLabels,
    ChatQuickActionLabels,
    ChatTeamLabels,
    ChatQuickReplyLabels {
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
  back?: string;
}

export interface ChatMessageInputLabels extends ChatAttachmentLabels, ChatVoiceMessageLabels, ChatQuickActionLabels, ChatQuickReplyLabels {
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

/** `data-*` attributes forwarded to the conversation list's inner controls */
export interface ChatConversationListSlotProps {
  newConversationButton?: DataAttributes;
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
  slotProps?: ChatConversationListSlotProps;
  /** Front-like pills above the list, e.g. "My conversations" / "Team" */
  tabs?: ChatConversationListTab[];
  /** Default: the first tab */
  selectedTab?: string;
  onTabChange?: (tabId: string) => void;
}

/** `data-*` attributes forwarded to the conversation detail's inner controls */
export interface ChatConversationDetailSlotProps {
  addParticipantsButton?: DataAttributes;
  /** The empty-state CTA shown while no thread is selected */
  newConversationButton?: DataAttributes;
  sendButton?: DataAttributes;
}

export interface ChatConversationDetailProps {
  threadId?: string;
  participants?: ChatParticipant[] | null;
  isLoading?: boolean;
  messages?: ChatMessage[];
  currentUserId: string;
  onDeleteConversation: (threadId: string) => void;
  onNewConversation: () => void;
  onSendMessage: (threadId: string, body: string, attachments?: ChatAttachment[]) => void;
  onAddParticipants: (participants: ChatSearchUser[]) => void | Promise<unknown>;
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
  slotProps?: ChatConversationDetailSlotProps;
  onBack?: () => void;
  /** Enables the paperclip, drag & drop and paste */
  onUploadAttachment?: ChatUploadAttachment;
  /** Default: images (jpeg, png, webp, heic), pdf, word, excel */
  attachmentAccept?: string;
  /** Default 10 per message */
  maxAttachments?: number;
  /** Bytes, default 25 MB */
  maxAttachmentSize?: number;
  /** Enables "link to an order" on a file, in the composer (once uploaded) and on a sent message */
  onLinkAttachment?: ChatLinkAttachment;
  /** Enables reactions: "mine" is derived from `currentUserId` being in `reaction.userIds` */
  onToggleReaction?: (messageId: ChatMessage["id"], emoji: string) => void;
  /** One-tap reactions of the pill above a message, default ["👍", "✅", "👀", "🙏", "😂", "❤️"] */
  quickReactions?: string[];
  /**
   * Mic next to the paperclip, with `onUploadAttachment`: a validated take is uploaded and sent at once as its own
   * message (empty body, the audio as its only attachment). Default true
   */
  enableVoiceMessages?: boolean;
  /**
   * With `onLinkAttachment`: every file joining the composer opens the link dialog at once, one after the other
   * (cancelling one skips the rest of the batch). Default true
   */
  linkAttachmentsOnAdd?: boolean;
  /** WhatsApp-like ticks next to the time of my messages: sent, then seen once another participant read it. Default true */
  showReadReceipts?: boolean;
  /** "All · Messages · Updates" pills above a conversation that holds automatic messages (`message.event`). Default true */
  eventsFilter?: boolean;
  /** Turns the paperclip into a "+" opening a menu: "File or photo" first, then these actions */
  quickActions?: ChatQuickAction[];
  onQuickAction?: (actionId: string) => void;
  /** Answer to an action card (`message.action`), from its recipient */
  onActionResponse?: ChatActionResponseHandler;
  /** A colleague's thread read from the team view: a bar to join it replaces the composer */
  readOnly?: ChatConversationReadOnly | null;
  /** One-tap replies above the field, shown while it is empty and the last message comes from someone else */
  quickReplies?: string[];
}

export interface ChatMessageBubbleLabels
  extends ChatAttachmentLabels,
    ChatReactionLabels,
    ChatVoiceMessageLabels,
    ChatReadReceiptLabels,
    ChatEventLabels {}

export interface ChatMessageBubbleProps {
  isOwn: boolean;
  message: ChatMessage;
  participants?: ChatParticipant[] | null;
  avatarSrcResolver?: (src?: string | null) => string | undefined;
  renderAfterBubble?: (urls: string[]) => ReactNode;
  formatTime?: (date: string) => string;
  hideAvatar?: boolean;
  /** Required to tell "my" reactions apart */
  currentUserId?: string;
  formatParticipantName?: (participant: ChatParticipant) => string;
  onLinkAttachment?: ChatLinkAttachment;
  onToggleReaction?: (messageId: ChatMessage["id"], emoji: string) => void;
  quickReactions?: string[];
  labels?: ChatMessageBubbleLabels;
  /** Ticks next to the time of my messages, read from the participants' `lastReadAt`. Default true */
  showReadReceipts?: boolean;
  /** Answer to an action card (`message.action`): its buttons only show to the recipient */
  onActionResponse?: ChatActionResponseHandler;
}

/** `data-*` attributes forwarded to the message input's inner controls */
export interface ChatMessageInputSlotProps {
  sendButton?: DataAttributes;
}

/** Imperative handle of the message input, e.g. to feed it files dropped elsewhere */
export interface ChatMessageInputHandle {
  addFiles: (files: File[]) => void;
}

export interface ChatMessageInputProps {
  onSend: (message: string, attachments?: ChatAttachment[]) => void;
  labels?: ChatMessageInputLabels;
  autoFocusKey?: string;
  isSending?: boolean;
  defaultMessage?: string;
  maxLength?: number;
  /** Rendered on the left of the bottom bar, facing the send button (e.g. ChatVoiceRecorder) */
  startActions?: ReactNode;
  slotProps?: ChatMessageInputSlotProps;
  onUploadAttachment?: ChatUploadAttachment;
  attachmentAccept?: string;
  maxAttachments?: number;
  maxAttachmentSize?: number;
  onLinkAttachment?: ChatLinkAttachment;
  /** Mic next to the paperclip, with `onUploadAttachment`. Default true */
  enableVoiceMessages?: boolean;
  /** Opens `onLinkAttachment` as soon as files join the composer. Default true */
  linkAttachmentsOnAdd?: boolean;
  /** Turns the paperclip into a "+" opening a menu: "File or photo" first, then these actions */
  quickActions?: ChatQuickAction[];
  onQuickAction?: (actionId: string) => void;
  /** One-tap replies above the field while it is empty: a tap sends the reply */
  quickReplies?: string[];
}

export interface ChatVoiceRecorderLabels {
  record?: string;
  cancel?: string;
  send?: string;
}

export interface ChatVoiceRecorderProps {
  /**
   * Receives the recorded audio and its length once the user validates the take
   */
  onRecorded: (audio: Blob, durationMs: number) => void;
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

/** `data-*` attributes forwarded to the participant dialog's inner controls */
export interface ChatParticipantDialogSlotProps {
  confirmButton?: DataAttributes;
}

export interface ChatParticipantDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: (participants: ChatSearchUser[]) => void | Promise<unknown>; // May return a promise: the dialog then shows the confirm button loading and only closes on success.
  onSearch: (query: string) => void;
  searchResults?: ChatSearchUser[];
  isSearchLoading?: boolean;
  isConfirmLoading?: boolean;
  avatarSrcResolver?: (src?: string | null) => string | undefined;
  labels?: ChatParticipantDialogLabels;
  slotProps?: ChatParticipantDialogSlotProps;
}
