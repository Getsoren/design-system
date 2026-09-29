/**
 * Public entry point of the design system.
 *
 * One block per category, alphabetical inside a block. A component ships as a pair: `export *` for its named
 * exports (props types, helpers) and `export { default as X }` for the component itself.
 */

// MUI re-exports: every Material UI component and transition is available from the package
export * from "@mui/material";
export * from "@mui/material/transitions";

// Data display
export { default as AiAssistant } from "@/components/DataDisplay/AiAssistant/AiAssistant";
export * from "@/components/DataDisplay/AiAssistant/types";
export * from "@/components/DataDisplay/ArticleImage/ArticleImage";
export { default as ArticleImage } from "@/components/DataDisplay/ArticleImage/ArticleImage";
export type { AvatarProps } from "@/components/DataDisplay/Avatar/Avatar";
export * from "@/components/DataDisplay/Avatar/Avatar";
export { default as Avatar } from "@/components/DataDisplay/Avatar/Avatar";
export * from "@/components/DataDisplay/AvatarAppBar/AvatarAppBar";
export { default as AvatarAppBar } from "@/components/DataDisplay/AvatarAppBar/AvatarAppBar";
export { default as BookingTimeline } from "@/components/DataDisplay/BookingTimeline/BookingTimeline";
export * from "@/components/DataDisplay/BookingTimeline/types";
export * from "@/components/DataDisplay/Chat/Chat";
export { default as Chat } from "@/components/DataDisplay/Chat/Chat";
export { default as ChatConversationDetail } from "@/components/DataDisplay/Chat/components/ChatConversationDetail";
export { default as ChatConversationList } from "@/components/DataDisplay/Chat/components/ChatConversationList";
export { default as ChatMessageBubble } from "@/components/DataDisplay/Chat/components/ChatMessageBubble";
export { default as ChatMessageInput } from "@/components/DataDisplay/Chat/components/ChatMessageInput";
export { default as ChatParticipantDialog } from "@/components/DataDisplay/Chat/components/ChatParticipantDialog";
export { default as ChatVoiceRecorder } from "@/components/DataDisplay/Chat/components/ChatVoiceRecorder";
export * from "@/components/DataDisplay/Chat/types";
export * from "@/components/DataDisplay/Chip/Chip";
export { default as Chip } from "@/components/DataDisplay/Chip/Chip";
export * from "@/components/DataDisplay/FileViewer/FileViewer";
export { default as FileViewer } from "@/components/DataDisplay/FileViewer/FileViewer";
export { default as AiSparkIcon } from "@/components/DataDisplay/Icons/AiSparkIcon";
export * from "@/components/DataDisplay/Kanban/Kanban";
export { default as Kanban } from "@/components/DataDisplay/Kanban/Kanban";
export * from "@/components/DataDisplay/ListAvatar/ListAvatar";
export { default as ListAvatars } from "@/components/DataDisplay/ListAvatar/ListAvatar";
export * from "@/components/DataDisplay/ListItemCard/ListItemCard";
export { default as ListItemCard } from "@/components/DataDisplay/ListItemCard/ListItemCard";
export * from "@/components/DataDisplay/Logo/Logo";
export { default as Logo } from "@/components/DataDisplay/Logo/Logo";
export type { LogoAvatarProps } from "@/components/DataDisplay/LogoAvatar/LogoAvatar";
export * from "@/components/DataDisplay/LogoAvatar/LogoAvatar";
export { default as LogoAvatar } from "@/components/DataDisplay/LogoAvatar/LogoAvatar";
export * from "@/components/DataDisplay/NumberBadge/NumberBadge";
export { default as NumberBadge } from "@/components/DataDisplay/NumberBadge/NumberBadge";
export { default as PlanningTimeline } from "@/components/DataDisplay/PlanningTimeline/PlanningTimeline";
export * from "@/components/DataDisplay/PlanningTimeline/types";
export * from "@/components/DataDisplay/RatingBadge/RatingBadge";
export { default as RatingBadge } from "@/components/DataDisplay/RatingBadge/RatingBadge";
export * from "@/components/DataDisplay/StatusIcon/StatusIcon";
export { default as StatusIcon } from "@/components/DataDisplay/StatusIcon/StatusIcon";
export * from "@/components/DataDisplay/TimeLine/TimeLine";
export { default as TimeLine } from "@/components/DataDisplay/TimeLine/TimeLine";
export * from "@/components/DataDisplay/TypographySkeleton/TypographySkeleton";
export { default as TypographySkeleton } from "@/components/DataDisplay/TypographySkeleton/TypographySkeleton";

// Feedback
export * from "@/components/Feedback/Dialog/DialogCloseIcon/DialogCloseIcon";
export { default as DialogCloseIcon } from "@/components/Feedback/Dialog/DialogCloseIcon/DialogCloseIcon";
export * from "@/components/Feedback/Dialog/DialogForm/DialogForm";
export { default as DialogForm } from "@/components/Feedback/Dialog/DialogForm/DialogForm";
export * from "@/components/Feedback/Dialog/DialogPopper/DialogPopper";
export { default as DialogPopper } from "@/components/Feedback/Dialog/DialogPopper/DialogPopper";
export * from "@/components/Feedback/Dialog/DialogValidation/DialogValidation";
export { default as DialogValidation } from "@/components/Feedback/Dialog/DialogValidation/DialogValidation";
export type { EmptyStateProps } from "@/components/Feedback/EmptyState/EmptyState";
export { default as EmptyState } from "@/components/Feedback/EmptyState/EmptyState";
export * from "@/components/Feedback/ErrorState/ErrorState";
export { default as ErrorState } from "@/components/Feedback/ErrorState/ErrorState";
export * from "@/components/Feedback/Lightbox/Lightbox";
export { default as Lightbox } from "@/components/Feedback/Lightbox/Lightbox";

// Inputs
export * from "@/components/Inputs/ActionAppBar/ActionAppBar";
export { default as ActionAppBar } from "@/components/Inputs/ActionAppBar/ActionAppBar";
export * from "@/components/Inputs/ApiAutocomplete/ApiAutocomplete";
export { default as ApiAutocomplete } from "@/components/Inputs/ApiAutocomplete/ApiAutocomplete";
export * from "@/components/Inputs/AutocompleteFilter/AutocompleteFilter";
export { default as AutocompleteFilter } from "@/components/Inputs/AutocompleteFilter/AutocompleteFilter";
export type { ButtonProps } from "@/components/Inputs/Button/Button";
export { default as Button } from "@/components/Inputs/Button/Button";
export * from "@/components/Inputs/CheckboxCard/CheckboxCard";
export { default as CheckboxCard } from "@/components/Inputs/CheckboxCard/CheckboxCard";
export * from "@/components/Inputs/ChipFilter/ChipFilter";
export { default as ChipFilter } from "@/components/Inputs/ChipFilter/ChipFilter";
export * from "@/components/Inputs/ChipQuantityEditor/ChipQuantityEditor";
export { default as ChipQuantityEditor } from "@/components/Inputs/ChipQuantityEditor/ChipQuantityEditor";
export * from "@/components/Inputs/CountryAutocomplete/CountryAutocomplete";
export { default as CountryAutocomplete } from "@/components/Inputs/CountryAutocomplete/CountryAutocomplete";
export * from "@/components/Inputs/File/File";
export { default as File } from "@/components/Inputs/File/File";
export * from "@/components/Inputs/QuantityField/QuantityField";
export { default as QuantityField } from "@/components/Inputs/QuantityField/QuantityField";
export * from "@/components/Inputs/TextArea/TextArea";
export { default as TextArea } from "@/components/Inputs/TextArea/TextArea";
export * from "@/components/Inputs/TextFieldAppBar/TextFieldAppBar";
export { default as TextFieldAppBar } from "@/components/Inputs/TextFieldAppBar/TextFieldAppBar";
export * from "@/components/Inputs/TextFieldAutosize/TextFieldAutosize";
export { default as TextFieldAutosize } from "@/components/Inputs/TextFieldAutosize/TextFieldAutosize";
export * from "@/components/Inputs/TextFieldPassword/TextFieldPassword";
export { default as TextFieldPassword } from "@/components/Inputs/TextFieldPassword/TextFieldPassword";

// Layout
export * from "@/components/Layout/Backoffice/Backoffice";
export { default as Backoffice } from "@/components/Layout/Backoffice/Backoffice";
export { default as CollapsingHeader } from "@/components/Layout/CollapsingHeader/CollapsingHeader";
export * from "@/components/Layout/CollapsingHeader/types";
export * from "@/components/Layout/PageHeader/PageHeader";
export { default as PageHeader } from "@/components/Layout/PageHeader/PageHeader";

// Navigation
export * from "@/components/Navigation/NavigationMenu/NavigationMenu";
export { default as NavigationMenu } from "@/components/Navigation/NavigationMenu/NavigationMenu";
export * from "@/components/Navigation/TabPanel/TabPanel";
export { default as TabPanel } from "@/components/Navigation/TabPanel/TabPanel";
export * from "@/components/Navigation/Tabs/LinkTab/LinkTab";
export { default as LinkTab } from "@/components/Navigation/Tabs/LinkTab/LinkTab";

// Surface
export * from "@/components/Surface/AppBar/AppBar";
export { default as AppBar } from "@/components/Surface/AppBar/AppBar";
export * from "@/components/Surface/BottomFixedPaper/BottomFixedPaper";
export { default as BottomFixedPaper } from "@/components/Surface/BottomFixedPaper/BottomFixedPaper";
export * from "@/components/Surface/CardModal/CardModal";
export { default as CardModal } from "@/components/Surface/CardModal/CardModal";

// Utility components
export * from "@/components/Utils/HasPermission/HasPermission";
export { default as HasPermission } from "@/components/Utils/HasPermission/HasPermission";

// Theme
export { default as theme } from "@/config/theme";

// Context providers
export * from "@/context/Permission/PermissionProvider";
export { default as PermissionProvider } from "@/context/Permission/PermissionProvider";
export * from "@/context/Snackbar/SnackbarProvider";
export { default as SnackbarProvider } from "@/context/Snackbar/SnackbarProvider";
export type { ThemeProviderProps } from "@/context/Theme/ThemeProvider";
export { default as ThemeProvider } from "@/context/Theme/ThemeProvider";

// Hooks
export * from "@/hooks/useMenu/useMenu";
export { default as useMenu } from "@/hooks/useMenu/useMenu";
export * from "@/hooks/usePermission/usePermission";
export { default as usePermission } from "@/hooks/usePermission/usePermission";
export * from "@/hooks/useScrollFadeMask/useScrollFadeMask";
export { default as useScrollFadeMask } from "@/hooks/useScrollFadeMask/useScrollFadeMask";
export * from "@/hooks/useSnackbar/useSnackbar";
export { default as useSnackbar } from "@/hooks/useSnackbar/useSnackbar";
export * from "@/hooks/useTabs/useTabs";
export { default as useTabs } from "@/hooks/useTabs/useTabs";

// Shared types
export type { DataAttributes } from "@/types/dataAttributes";

// Utility functions
export * from "@/utils/getBackgroundImageElevation";
export { default as getBackgroundImageElevation } from "@/utils/getBackgroundImageElevation";
export { default as isoToEmojiFlag } from "@/utils/isoToEmojiFlag";
export { default as pickDataAttributes } from "@/utils/pickDataAttributes";
export * from "@/utils/pxToRem";
export { default as pxToRem } from "@/utils/pxToRem";
