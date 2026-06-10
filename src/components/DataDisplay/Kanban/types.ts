import { ChipProps } from "@mui/material";
import { MouseEvent, ReactElement, ReactNode } from "react";

export type KanbanCardVariant = "primary" | "secondary";

export type KanbanChipFormat = {
  color: ChipProps["color"];
  variant?: ChipProps["variant"];
};

export type HeaderColumnChip = Record<string, KanbanChipFormat>;

/**
 * Mapping of booking statuses to their corresponding chip variants and colors.
 * This is used to style the status chips in the Kanban columns.
 */
export const defaultKanbanChip: Record<string, KanbanChipFormat> = {
  canceled: { color: "error" },
  confirmed: { color: "success" },
  costing: { color: "default" },
  ended: { color: "default" },
  linking: { color: "info" },
  oneShot: { color: "success" },
  quotation: { color: "default" },
  request: { color: "warning" },
  requested: { color: "info" },
  started: { color: "success" },
  subleasing: { color: "warning" },
  validated: { color: "warning" },
  waiting_for_confirmation: { color: "info" },
  waiting_for_validation: { color: "success" },
};

/**
 * Props for configuring the empty state of the Kanban component.
 */
export interface KanbanEmptyStateProps {
  title: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

/**
 * Props for each subtitle item in a Kanban card.
 */
export interface SubtitleDataItemProps {
  text: ReactNode;
  icon?: ReactNode;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
}

/**
 * Props for each item in a Kanban column.
 * Each item represents a card in the Kanban board.
 */
export interface KanbanDataItemProps {
  id: string;
  image: string | undefined;
  imageTitle?: string;
  headerTitle?: string;
  title: string;
  secondaryImage?: string;
  secondaryImageText?: string;
  subtitle?: SubtitleDataItemProps;
  subtitles?: SubtitleDataItemProps[];
  tag: string;
  titleLineClamp?: number;
  Footer?: ReactNode;
  RightFooter?: ReactNode;
}

/**
 * Props for each column in the Kanban board.
 * Each column contains multiple Kanban items.
 */
export interface KanbanDataProps {
  name: string;
  label?: string;
  count?: number;
  isLoading?: boolean;
  isFetching?: boolean;
  isFetched?: boolean;
  items: KanbanDataItemProps[];
}

export interface KanbanProps {
  /**
   * The height of the Kanban component.
   */
  height?: string | number;
  /**
   * The width of each Kanban list.
   */
  listWidth?: string | number;
  /**
   * Disables the count of items in the Kanban list.
   */
  disableCount?: boolean;
  /**
   * The number of items to display per page.
   */
  itemPerPage?: number;
  /**
   * Variant for the chip column.
   */
  chipColumVariant?: "filled" | "outlined";
  /**
   * If true, the Kanban column will display a dot indicator in the chip.
   */
  chipColumDot?: boolean;
  /**
   * Status of the chip in the Kanban column.
   */
  chipStatus?: string;
  /**
   * Function to load more items when the user scrolls to the end of the list.
   * @param startIndex
   * @param stopIndex
   * @param status
   */
  loadMoreItems?: (startIndex: number, stopIndex: number, status?: string) => Promise<void> | void;
  /**
   * Function triggered when an item is clicked.
   * @param id
   */
  onClickItem?: (id: string) => void;
  /**
   * Trigger when column is visible
   * @param listName
   */
  onColumnInView?: (name: string) => void;
  /**
   * The ID of the currently active item.
   */
  activeItemId?: string;
  /**
   * Custom mapping of booking statuses to chip variants/colors.
   * Keys can be any string, but the value must be { color, variant? }.
   */
  headerColumnChip?: HeaderColumnChip;
  /**
   * The Kanban data to be displayed.
   */
  data: KanbanDataProps[];
  /**
   * Variant of the Kanban cards.
   * @default "primary"
   */
  variant?: KanbanCardVariant;
  /**
   * Optional empty state configuration.
   */
  emptyState?: ReactElement | KanbanEmptyStateProps;
}
