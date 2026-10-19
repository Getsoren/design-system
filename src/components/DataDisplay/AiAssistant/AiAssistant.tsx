import AiAssistantAvatar from "@/components/DataDisplay/AiAssistant/components/AiAssistantAvatar";
import AiAssistantConfirmationCard from "@/components/DataDisplay/AiAssistant/components/AiAssistantConfirmationCard";
import AiAssistantEmptyState from "@/components/DataDisplay/AiAssistant/components/AiAssistantEmptyState";
import AiAssistantFab from "@/components/DataDisplay/AiAssistant/components/AiAssistantFab";
import AiAssistantHeader from "@/components/DataDisplay/AiAssistant/components/AiAssistantHeader";
import AiAssistantMark from "@/components/DataDisplay/AiAssistant/components/AiAssistantMark";
import AiAssistantNudge from "@/components/DataDisplay/AiAssistant/components/AiAssistantNudge";
import AiAssistantPanel from "@/components/DataDisplay/AiAssistant/components/AiAssistantPanel";
import AiAssistantReplyActions from "@/components/DataDisplay/AiAssistant/components/AiAssistantReplyActions";
import AiAssistantSpotlight from "@/components/DataDisplay/AiAssistant/components/AiAssistantSpotlight";
import AiAssistantSuggestion from "@/components/DataDisplay/AiAssistant/components/AiAssistantSuggestion";
import AiAssistantThinking from "@/components/DataDisplay/AiAssistant/components/AiAssistantThinking";

/**
 * Building blocks for an in-app AI assistant (Fab, floating or docked panel, header, empty state,
 * thinking row, reply actions, confirmation cards, onboarding nudge and spotlight). Purely
 * presentational: the host app owns the agentic loop, the tools and the wording — combine with
 * Chat.MessageBubble / Chat.MessageInput / Chat.VoiceRecorder for the thread.
 */
const AiAssistant = {
  Avatar: AiAssistantAvatar,
  ConfirmationCard: AiAssistantConfirmationCard,
  EmptyState: AiAssistantEmptyState,
  Fab: AiAssistantFab,
  Header: AiAssistantHeader,
  Mark: AiAssistantMark,
  Nudge: AiAssistantNudge,
  Panel: AiAssistantPanel,
  ReplyActions: AiAssistantReplyActions,
  Spotlight: AiAssistantSpotlight,
  Suggestion: AiAssistantSuggestion,
  Thinking: AiAssistantThinking,
};

export default AiAssistant;
