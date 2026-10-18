import type { ReactNode } from "react";
import type { DataAttributes } from "@/types/dataAttributes";

/** Extra `data-*` props (e.g. an analytics feature id) land on the FAB button itself */
export interface AiAssistantFabProps extends DataAttributes {
  /** Panel visibility — the FAB shows a close glyph and calms down when open */
  open: boolean;
  /** Toggles the panel — the FAB never owns the open state, the host app does */
  onClick: () => void;
  /** Tooltip content (e.g. the assistant's name) */
  tooltip?: string;
  /** Turns the orb into a pill showing the avatar and this label */
  label?: string;
  /** Pill only: a light runs along the outline while the assistant works in the background */
  isWorking?: boolean;
  /** A count, or `true` for a dot; hidden while the panel is open */
  badge?: number | boolean;
  /** Test hook on the FAB button (defaults to "assistantFab") */
  dataTestId?: string;
}

export interface AiAssistantMarkProps {
  /** Side of the square, in px (defaults to 32) */
  size?: number;
  /** Theme path or CSS colour of the ellipse (defaults to text.primary) */
  color?: string;
  /** The ellipse turns, then settles back into its pose once false */
  isWorking?: boolean;
  /** Background work: only the glow's colours move */
  isBusy?: boolean;
  /** Idle motion at rest, ignored while working */
  isBreathing?: boolean;
  /** Pose at rest (defaults to "ellipse") */
  restShape?: "ellipse" | "circle";
}

export interface AiAssistantAvatarProps extends Omit<AiAssistantMarkProps, "size" | "color"> {
  /** Diameter in px (defaults to 28) */
  size?: number;
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
  /** Panel visibility — grows out of the Fab when opening, unmounted when closed */
  open: boolean;
  /** The assistant is working (streaming/tools): the panel breathes an iridescent aura */
  isBusy?: boolean;
  /** Panel content — typically Header + a Chat.* composition owned by the host app */
  children: ReactNode;
  /** Full-height column on the right; the host layout leaves room for it (AI_ASSISTANT_DOCKED_SPACE) */
  docked?: boolean;
  /** Top offset of the docked panel, e.g. APP_BAR_HEIGHT (defaults to 0) */
  dockedTop?: number;
  /** False when the host hides the Fab while the panel is open: the panel then takes the corner (defaults to true) */
  withFab?: boolean;
  /** Test hook on the panel container (defaults to "assistantPanel") */
  dataTestId?: string;
}

export interface AiAssistantHeaderProps {
  /** Product name of the assistant — a brand chosen by the host app */
  title: string;
  /** Secondary caption next to the title (e.g. "Assistant IA") */
  subtitle?: string;
  /** Small uppercase tag after the title (e.g. "Beta") */
  tag?: string;
  /** Close action of the panel — rendered as the trailing icon button */
  onClose: () => void;
  /** Rendered before the header buttons */
  actions?: ReactNode;
  /** Rendered before the title */
  icon?: ReactNode;
  /** Line under the header (defaults to true) */
  divider?: boolean;
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
  /** Invitation shown while the thread is empty (e.g. "I'm Atlas, ask me anything…") */
  message?: string;
  /** Question to the user (e.g. "What do you want to do today?"); switches to a left-aligned layout above the composer */
  title?: string;
  /** With a `title` only: shown above it, on the logo's silhouette */
  icon?: ReactNode;
  /** Rendered under the invitation — quick actions, suggestion pills… */
  children?: ReactNode;
}

export interface AiAssistantSuggestionProps extends DataAttributes {
  /** What the user could ask */
  children: ReactNode;
  onClick: () => void;
  dataTestId?: string;
}

export interface AiAssistantThinkingOrbProps {
  /** Orb diameter in px */
  size?: number;
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
  /** Button wording (host-app i18n); once decided, `accepted` / `declined` replace the heading (default to the button labels) */
  labels: { accept: string; decline: string; accepted?: string; declined?: string };
  /** Rendered left of the summary */
  icon?: ReactNode;
  /** Once decided, makes the card clickable (e.g. to open what the action created) */
  onOpen?: () => void;
  /** Once decided, rendered under the summary */
  links?: ReactNode;
  /** Test hook on the card (defaults to "assistantConfirmationCard") */
  dataTestId?: string;
}
