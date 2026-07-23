import type { ReactNode } from "react";

export interface AiAssistantFabProps {
  /** Panel visibility — the FAB shows a close glyph and calms down when open */
  open: boolean;
  onClick: () => void;
  /** Tooltip content (e.g. the assistant's name) */
  tooltip?: string;
  dataTestId?: string;
}

export interface AiAssistantPanelProps {
  open: boolean;
  /** The assistant is working (streaming/tools): the panel breathes an iridescent aura */
  isBusy?: boolean;
  children: ReactNode;
  dataTestId?: string;
}

export interface AiAssistantHeaderProps {
  /** Product name of the assistant — a brand chosen by the host app */
  title: string;
  subtitle?: string;
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
  status: "approved" | "declined" | "pending";
  onAccept: () => void;
  onDecline: () => void;
  labels: { accept: string; decline: string };
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
