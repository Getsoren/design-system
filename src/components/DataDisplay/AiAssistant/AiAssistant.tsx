import AiAssistantAvatar from "@/components/DataDisplay/AiAssistant/components/AiAssistantAvatar";
import AiAssistantButton from "@/components/DataDisplay/AiAssistant/components/AiAssistantButton";
import AiAssistantConfirmationCard from "@/components/DataDisplay/AiAssistant/components/AiAssistantConfirmationCard";
import AiAssistantEmptyState from "@/components/DataDisplay/AiAssistant/components/AiAssistantEmptyState";
import AiAssistantFab from "@/components/DataDisplay/AiAssistant/components/AiAssistantFab";
import AiAssistantHeader from "@/components/DataDisplay/AiAssistant/components/AiAssistantHeader";
import AiAssistantMark from "@/components/DataDisplay/AiAssistant/components/AiAssistantMark";
import AiAssistantNudge from "@/components/DataDisplay/AiAssistant/components/AiAssistantNudge";
import AiAssistantPanel from "@/components/DataDisplay/AiAssistant/components/AiAssistantPanel";
import AiAssistantSpotlight from "@/components/DataDisplay/AiAssistant/components/AiAssistantSpotlight";
import AiAssistantSuggestion from "@/components/DataDisplay/AiAssistant/components/AiAssistantSuggestion";
import AiAssistantThinkingOrb from "@/components/DataDisplay/AiAssistant/components/AiAssistantThinkingOrb";

/**
 * Building blocks for an in-app AI assistant (FAB orb, floating panel, header,
 * thinking orb, confirmation cards). Purely presentational: the host app owns the
 * agentic loop, the tools and the wording (assistant name, i18n labels) — combine
 * with Chat.MessageBubble / Chat.MessageInput / Chat.VoiceRecorder for the thread.
 */
const AiAssistant = {
  Avatar: AiAssistantAvatar,
  Button: AiAssistantButton,
  ConfirmationCard: AiAssistantConfirmationCard,
  EmptyState: AiAssistantEmptyState,
  Fab: AiAssistantFab,
  Header: AiAssistantHeader,
  Mark: AiAssistantMark,
  Nudge: AiAssistantNudge,
  Panel: AiAssistantPanel,
  Spotlight: AiAssistantSpotlight,
  Suggestion: AiAssistantSuggestion,
  ThinkingOrb: AiAssistantThinkingOrb,
};

export default AiAssistant;
