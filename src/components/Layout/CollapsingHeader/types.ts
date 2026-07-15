import { ContainerProps } from "@mui/material";
import { ReactNode } from "react";

/**
 * Built-in UI strings; each falls back to the design-system locale (en/fr) when not overridden.
 */
export interface CollapsingHeaderLabels {
  close: string;
  escape: string;
  openFullPage: string;
  openFullScreen: string;
}

export interface CollapsingHeaderProps {
  /** One-line title of the compact sticky bar (small thumbnail + name + chips). */
  compactTitle: ReactNode;
  /** Large title block of the full header (thumbnail + name + chips row). */
  fullTitle: ReactNode;
  /** Rendered below the full title (e.g. action buttons). */
  actions?: ReactNode;
  /** Right side of the compact sticky bar — full-page mode only, hidden on mobile. */
  compactActions?: ReactNode;
  /**
   * "preview": panel layout with the open-full-page link and close button above the title.
   * "fullPage": page layout with the back link above the title and compact actions in the sticky bar.
   * @default "preview"
   */
  variant?: "preview" | "fullPage";
  /** Preview only: close the panel. */
  onClose?: () => void;
  /** Preview only: open the entity full page. */
  onOpenFullPage?: () => void;
  /** Full page only: back link label. */
  backLabel?: string;
  /** Full page only: back link handler. */
  onBack?: () => void;
  /** Full page only: width of the header container — a breakpoint, or a px value. @default "lg" */
  maxWidth?: ContainerProps["maxWidth"] | number;
  /** Override the built-in labels (e.g. to plug the host app's i18n). */
  labels?: Partial<CollapsingHeaderLabels>;
}
