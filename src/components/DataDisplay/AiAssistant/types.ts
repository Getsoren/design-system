import type { ReactNode } from "react";

export interface AiAssistantFabProps {
  /** Panel visibility — the FAB shows a close glyph and calms down when open */
  open: boolean;
  /** Toggles the panel — the FAB never owns the open state, the host app does */
  onClick: () => void;
  /** Tooltip content (e.g. the assistant's name) */
  tooltip?: string;
  /** Test hook on the FAB button (defaults to "assistantFab") */
  dataTestId?: string;
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
  /** Test hook on the panel container (defaults to "assistantPanel") */
  dataTestId?: string;
}

export interface AiAssistantHeaderProps {
  /** Product name of the assistant — a brand chosen by the host app */
  title: string;
  /** Secondary caption next to the title (e.g. "Assistant IA") */
  subtitle?: string;
  /** Close action of the panel — rendered as the trailing icon button */
  onClose: () => void;
  /** Defaults to the gradient AI spark */
  icon?: ReactNode;
}

export interface AiAssistantEmptyStateProps {
  /** Invitation shown while the thread is empty (e.g. "I'm Atlas, ask me anything…") */
  message: string;
  /** Rendered centered under the invitation — quick actions, suggestion pills… */
  children?: ReactNode;
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
  /** Button wording (host-app i18n) */
  labels: { accept: string; decline: string };
  /** Test hook on the card (defaults to "assistantConfirmationCard") */
  dataTestId?: string;
}

export interface AiSparkIconProps {
  /** Icon box in px */
  size?: number;
  /** Solid fill — ignored with variant="gradient" */
  color?: string;
  /** "solid" (currentColor/color) or "gradient" (brand gradient) */
  variant?: "gradient" | "solid";
}
