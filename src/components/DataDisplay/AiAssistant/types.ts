import type { ReactNode } from "react";
import type { DataAttributes } from "@/types/dataAttributes";

/** Extra `data-*` props (e.g. an analytics feature id) land on the Fab button itself */
export interface AiAssistantFabProps extends DataAttributes {
  /** Opens the panel — the host app owns the open state, and hides the Fab while the panel is open */
  onClick: () => void;
  /** Call to ask the assistant, next to its avatar (e.g. "Ask Soren") — its text names the button */
  label: ReactNode;
  /** Replaces the avatar's still portrait, e.g. a video of it */
  portrait?: ReactNode;
  /** Test hook on the Fab button (defaults to "assistantFab") */
  dataTestId?: string;
}

export interface AiAssistantMarkProps {
  /** Side of the square, in px (defaults to 32) */
  size?: number;
  /** Theme path or CSS colour of the ellipse (defaults to text.primary) */
  color?: string;
  /** The ellipse turns with two satellites, then settles back into its pose once false */
  isWorking?: boolean;
}

export interface AiAssistantAvatarProps {
  /** "subtle" (default): a grey round, e.g. beside a reply; "brand": the brand's colours cross it now and then, e.g. on the Fab */
  variant?: "subtle" | "brand";
  /** A light turns around it while the assistant works */
  isWorking?: boolean;
  /** Side in px (defaults to AI_ASSISTANT_AVATAR_SIZE) */
  size?: number;
  /** A square with soft corners instead of a round, e.g. above a welcome */
  rounded?: boolean;
  /** Replaces the still portrait, e.g. a video of it on a transparent background */
  portrait?: ReactNode;
}

export interface AiAssistantNudgeProps {
  /** Bubble visibility — animated in/out of the Fab corner, unmounted when closed */
  open: boolean;
  /** Short headline of the nudge (host-app wording, already translated) */
  title: string;
  /** One-click dismiss (close button, or "finish" past the last step) — the host app decides what "seen" means */
  onClose: () => void;
  /** Body of the bubble: one string = plain text; an array = one entry per step, walked with the built-in stepper */
  content?: string | string[];
  /** Custom body — rendered instead of `content` when provided */
  children?: ReactNode;
  /** Controlled index of the displayed `content` step (defaults to 0) — controlled so the host can sync a spotlight */
  activeStep?: number;
  /** Called with the target step index when the user navigates the stepper */
  onStepChange?: (step: number) => void;
  /** Stepper wording (host-app i18n) — the stepper only shows with multi-step content AND labels */
  labels?: { previous: string; next: string; finish: string };
  /** Test hook on the bubble ("assistantNudge"); the close and next buttons append "Close" / "Next" */
  dataTestId?: string;
}

export interface AiAssistantSpotlightProps {
  /** Element the spotlight follows while mounted (rect re-read on resize/scroll/tick) */
  anchor: HTMLElement;
  /** Shield the whole app: every click is swallowed, the lit window is the only click target */
  blocking?: boolean;
  /** Blocking mode only: the user clicked the lit window */
  onWindowClick?: () => void;
  /** Test hook on the lit window ("assistantSpotlight"); the blocking shield appends "Overlay" */
  dataTestId?: string;
}

export interface AiAssistantPanelProps {
  /** Panel visibility — grows from the corner when opening, unmounted when closed */
  open: boolean;
  /** Full-height column under the app bar; the host layout leaves room for it (AI_ASSISTANT_DOCKED_SPACE) */
  docked?: boolean;
  /** Panel content — typically Header + a Chat.* composition owned by the host app */
  children: ReactNode;
  /** Test hook on the panel container (defaults to "assistantPanel") */
  dataTestId?: string;
}

export interface AiAssistantHeaderProps {
  /** Product name of the assistant — a brand chosen by the host app */
  title: ReactNode;
  /** Small uppercase tag after the title (e.g. "Beta") */
  tag?: string;
  /** Close action of the panel — rendered as the trailing icon button */
  onClose: () => void;
  /** Picks the glyph of the dock toggle */
  docked?: boolean;
  /** Shows a button to dock or float the panel */
  onToggleDocked?: () => void;
  /** Shows a "new conversation" button */
  onNewConversation?: () => void;
  /** Accessible names of the header buttons */
  labels?: { close?: string; dock?: string; newConversation?: string; undock?: string };
}

export interface AiAssistantEmptyStateProps {
  /** Question to the user (e.g. "What do you want to do today?") */
  title: string;
  /** Shown above the title, e.g. the assistant's avatar */
  icon?: ReactNode;
  /** Rendered under the title — typically AiAssistant.Suggestion entries */
  children?: ReactNode;
}

export interface AiAssistantSuggestionProps extends DataAttributes {
  /** What the user could ask */
  children: ReactNode;
  onClick: () => void;
  dataTestId?: string;
}

export interface AiAssistantThinkingStep {
  /** Stable key of the step, e.g. its activity kind */
  id: string;
  label: string;
  /** Pulses while true; a done step stays, greyed */
  isInProgress: boolean;
}

export interface AiAssistantThinkingProps {
  /** What the assistant is doing, next to the working avatar (e.g. "Thinking…") */
  label: string;
  /** One line per step of the turn, under the label */
  steps?: AiAssistantThinkingStep[];
  /** Shows a button to cut the turn short */
  onStop?: () => void;
  labels?: { stop?: string };
  /** `data-*` attributes of the stop button, e.g. analytics ids or test hooks */
  slotProps?: { stopButton?: DataAttributes };
  /** Test hook on the row (defaults to "assistantThinking"); the steps append "Steps" */
  dataTestId?: string;
}

export type AiAssistantVote = "up" | "down";

export interface AiAssistantReplyActionsProps {
  /** Text the copy button puts on the clipboard */
  content: string;
  /** Vote cast on the reply, null when none */
  vote?: AiAssistantVote | null;
  /** Called with the new vote, or null when the user takes theirs back; the vote buttons only show with it */
  onVote?: (vote: AiAssistantVote | null) => void;
  /** Accessible names and tooltips (host-app i18n) */
  labels?: { copy?: string; copied?: string; helpful?: string; notHelpful?: string };
  /** `data-*` attributes of each button, e.g. analytics ids */
  slotProps?: { copyButton?: DataAttributes; upVoteButton?: DataAttributes; downVoteButton?: DataAttributes };
  /** Test hook on the row (defaults to "assistantReplyActions") */
  dataTestId?: string;
}

export interface AiAssistantConfirmationCardProps {
  /** Small caption above the action ("Action to confirm") */
  heading: string;
  /** Human-readable sentence describing the action */
  summary: string;
  /** Raw params fallback, rendered monospace when provided */
  details?: string;
  /** Lifecycle of the confirmation — "pending" shows both buttons, the others freeze the outcome */
  status: "approved" | "declined" | "pending";
  /** Called when the user approves the action */
  onAccept: () => void;
  /** Called when the user declines the action */
  onDecline: () => void;
  /** Wording (host-app i18n): the buttons, then the decision that replaces the heading once made */
  labels: { accept: string; decline: string; accepted: string; declined: string };
  /** Rendered left of the summary */
  icon?: ReactNode;
  /** Once decided, makes the card clickable (e.g. to open what the action created) */
  onOpen?: () => void;
  /** Once decided, rendered under the summary */
  links?: ReactNode;
  /** Test hook on the card (defaults to "assistantConfirmationCard") */
  dataTestId?: string;
}
