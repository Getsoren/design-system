import { Button, Chip, Stack, Typography } from "@mui/material";
import type { Decorator, Meta, StoryFn } from "@storybook/react-vite";
import { useRef, useState } from "react";
import AiAssistant from "@/components/DataDisplay/AiAssistant/AiAssistant";
import type { AiAssistantVote } from "@/components/DataDisplay/AiAssistant/types";
import Chat from "@/components/DataDisplay/Chat/Chat";
import type { ChatMessage } from "@/components/DataDisplay/Chat/types";

const meta: Meta = {
  component: AiAssistant.Panel,
  title: "Components/Data Display/AiAssistant",
};

export default meta;

/** Centres an in-flow example on the canvas, like the other stories; the fixed ones (Fab, Panel, Nudge) keep their corner. */
const Centered: Decorator = (Story) => (
  <Stack height="100%" alignItems="center" justifyContent="center">
    <Story />
  </Stack>
);

const PARTICIPANTS = [{ avatar: null, firstName: "Soren", lastName: "", userId: "assistant" }];
const SUGGESTIONS = ["Où en sont mes demandes de devis ?", "Quelles locations se terminent cette semaine ?"];
const REPLY_DELAY_MS = 2500;

/**
 * The whole block, composed the way a host app does it: the Fab opens the panel and steps aside, the
 * header docks it or starts over, the empty state suggests what to ask, then the thread shows the
 * assistant at work and its replies. The host app owns the thread, the input and the agentic logic.
 */
export const Default: StoryFn = () => {
  const [open, setOpen] = useState(true);
  const [isDocked, setIsDocked] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isThinking, setIsThinking] = useState(false);
  const replyRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const append = (authorId: string, body: string) =>
    setMessages((previous) => [...previous, { authorId, body, createdAt: new Date().toISOString(), id: `${previous.length}` }]);

  const send = (body: string) => {
    append("me", body);
    setIsThinking(true);
    replyRef.current = setTimeout(() => {
      append("assistant", `Voici ce que j'ai trouvé pour « ${body} » : deux devis sont arrivés, le moins cher à 180 € HT par jour.`);
      setIsThinking(false);
    }, REPLY_DELAY_MS);
  };

  const stop = () => {
    clearTimeout(replyRef.current);
    setIsThinking(false);
  };

  return (
    <>
      {!open && <AiAssistant.Fab onClick={() => setOpen(true)} label="Demander à Soren" />}
      <AiAssistant.Panel open={open} docked={isDocked}>
        <AiAssistant.Header
          title="Soren Assistant"
          tag="Beta"
          docked={isDocked}
          onToggleDocked={() => setIsDocked((previous) => !previous)}
          onNewConversation={messages.length > 0 ? () => setMessages([]) : undefined}
          onClose={() => setOpen(false)}
          labels={{ close: "Fermer", dock: "Ancrer", newConversation: "Nouvelle conversation", undock: "Détacher" }}
        />
        <Stack flex={1} minHeight={0}>
          <Chat height="100%">
            <Stack flex={1} minHeight={0} padding={2} spacing={3} sx={{ overflowY: "auto" }}>
              {!messages.length && (
                <AiAssistant.EmptyState title="Que voulez-vous faire aujourd'hui ?" icon={<AiAssistant.Mark size={26} />}>
                  {SUGGESTIONS.map((suggestion) => (
                    <AiAssistant.Suggestion key={suggestion} onClick={() => send(suggestion)}>
                      {suggestion}
                    </AiAssistant.Suggestion>
                  ))}
                </AiAssistant.EmptyState>
              )}
              {messages.map((message) => {
                const isOwn = message.authorId === "me";

                return (
                  <Chat.MessageBubble
                    key={message.id}
                    isOwn={isOwn}
                    hideAvatar
                    variant="plain"
                    avatar={isOwn ? undefined : <AiAssistant.Avatar />}
                    renderAfterBubble={isOwn ? undefined : () => <AiAssistant.ReplyActions content={message.body} />}
                    message={message}
                    participants={PARTICIPANTS}
                  />
                );
              })}
              {isThinking && (
                <AiAssistant.Thinking
                  label="Soren réfléchit…"
                  steps={[{ id: "search", isInProgress: true, label: "Recherche dans l'application…" }]}
                  onStop={stop}
                  labels={{ stop: "Arrêter" }}
                />
              )}
            </Stack>
            <Chat.MessageInput
              variant="filled"
              onSend={send}
              isSending={isThinking}
              footnote="Soren est une IA et peut se tromper. Vérifiez ses réponses."
              labels={{ send: "Envoyer", writeAMessage: "Écrire un message..." }}
              startActions={<Chat.VoiceRecorder onRecorded={() => send("(message vocal)")} disabled={isThinking} />}
            />
          </Chat>
        </Stack>
      </AiAssistant.Panel>
    </>
  );
};

/** The entry point in the bottom-right corner; the host app hides it while the panel is open. */
export const Fab: StoryFn = () => <AiAssistant.Fab onClick={() => undefined} label="Demander à Soren" />;

/** At rest, then working with its satellites at 24, 48 and 96px. */
export const Mark: StoryFn = () => (
  <Stack direction="row" spacing={4} alignItems="center">
    <AiAssistant.Mark size={48} />
    <AiAssistant.Mark size={24} isWorking />
    <AiAssistant.Mark size={48} isWorking />
    <AiAssistant.Mark size={96} isWorking />
  </Stack>
);

/** The mark in a grey round, or on the brand gradient with `variant="brand"`; the button toggles `isWorking`. */
export const Avatar: StoryFn = () => {
  const [isWorking, setIsWorking] = useState(false);

  return (
    <Stack spacing={2} alignItems="flex-start">
      <Stack direction="row" spacing={2} alignItems="center">
        <AiAssistant.Avatar isWorking={isWorking} />
        <AiAssistant.Avatar variant="brand" isWorking={isWorking} />
        <Typography variant="body2" color="text.secondary">
          {isWorking ? "Soren réfléchit…" : "Voici les 3 commandes à comparer."}
        </Typography>
      </Stack>
      <Button size="small" variant="outlined" onClick={() => setIsWorking((previous) => !previous)}>
        {isWorking ? "Répondre" : "Réfléchir"}
      </Button>
    </Stack>
  );
};

/** In place of the next reply: the working avatar, then one line per step, the one in progress pulsing. */
export const Thinking: StoryFn = () => (
  <Stack width={400}>
    <AiAssistant.Thinking
      label="Soren réfléchit…"
      steps={[
        { id: "read", isInProgress: false, label: "Consultation des données…" },
        { id: "search", isInProgress: true, label: "Recherche dans l'application…" },
      ]}
      onStop={() => undefined}
      labels={{ stop: "Arrêter" }}
    />
  </Stack>
);

/** Under a reply: copy it, and vote on it once the host app listens to votes. */
export const ReplyActions: StoryFn = () => {
  const [vote, setVote] = useState<AiAssistantVote | null>(null);

  return (
    <Stack spacing={0.5} width={400}>
      <Typography variant="body2">Deux devis sont arrivés pour la mini-pelle, le moins cher à 180 € HT par jour.</Typography>
      <AiAssistant.ReplyActions
        content="Deux devis sont arrivés pour la mini-pelle, le moins cher à 180 € HT par jour."
        vote={vote}
        onVote={setVote}
        labels={{ copied: "Copié", copy: "Copier", helpful: "Utile", notHelpful: "Pas utile" }}
      />
    </Stack>
  );
};

/** The gate before a mutating action; once decided, it opens what the action produced, its links going their own way. */
export const ConfirmationCard: StoryFn = () => {
  const [status, setStatus] = useState<"approved" | "declined" | "pending">("pending");

  return (
    <Stack width={400} spacing={1}>
      <AiAssistant.ConfirmationCard
        heading="Action à confirmer"
        summary="Déclarer une panne sur la commande 37207"
        status={status}
        onAccept={() => setStatus("approved")}
        onDecline={() => setStatus("declined")}
        onOpen={() => undefined}
        links={<Typography variant="body2">Commande 37207</Typography>}
        labels={{ accept: "Accepter", accepted: "Action acceptée", decline: "Annuler", declined: "Action annulée" }}
      />
      <Button size="small" onClick={() => setStatus("pending")} disabled={status === "pending"} sx={{ alignSelf: "flex-start" }}>
        Recommencer
      </Button>
    </Stack>
  );
};

/**
 * The contextual nudge: a compact one-shot bubble growing from the Fab WITHOUT opening
 * the panel — how a host app nudges the user on a specific screen (onboarding hints).
 * Closing it here re-arms the story via the Fab.
 */
export const Nudge: StoryFn = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <AiAssistant.Fab onClick={() => setOpen(true)} label="Demander à Soren" />
      <AiAssistant.Nudge
        open={open}
        title="Choisissez votre matériel principal"
        onClose={() => setOpen(false)}
        content="C'est le matériel au cœur de votre location — vous pourrez ajouter d'autres matériels et accessoires juste après. Deux façons de le trouver : tapez directement une référence dans la recherche, ou parcourez les catégories du catalogue."
      />
    </>
  );
};

/**
 * Multi-step content: an array + labels turn on the built-in stepper (n/N, previous /
 * next, finish on the last step). The step is controlled, so the host app can mirror it
 * — e.g. spotlighting the element each step talks about.
 */
export const NudgeWithSteps: StoryFn = () => {
  const [open, setOpen] = useState(true);
  const [step, setStep] = useState(0);

  return (
    <>
      <AiAssistant.Fab
        onClick={() => {
          setStep(0);
          setOpen(true);
        }}
        label="Demander à Soren"
      />
      <AiAssistant.Nudge
        open={open}
        title="Tout se pilote depuis votre commande"
        onClose={() => setOpen(false)}
        content={[
          "Le bloc Articles récapitule le matériel commandé et ses prix.",
          "Juste en dessous, ajoutez des contacts pour donner accès à la commande à vos équipes.",
          "Et surtout : le bouton Événement en haut vous permet de déclarer tout ce qui se passe sur votre location.",
        ]}
        activeStep={step}
        onStepChange={setStep}
        labels={{ finish: "Terminer", next: "Suivant", previous: "Précédent" }}
      />
    </>
  );
};

/**
 * The spotlight: dims everything but the anchored element, with the orbiting shine and
 * the breathing aura — how a host app points at a screen element (nudge target, tour
 * step). Non-blocking here: the button stays clickable under the highlight.
 */
export const Spotlight: StoryFn = () => {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const [clicks, setClicks] = useState(0);

  return (
    <>
      <Chip ref={setAnchor} label={`Élément mis en lumière — ${clicks} clic(s)`} onClick={() => setClicks((count) => count + 1)} />
      {anchor && <AiAssistant.Spotlight anchor={anchor} />}
    </>
  );
};

Mark.decorators = [Centered];
Avatar.decorators = [Centered];
Thinking.decorators = [Centered];
ReplyActions.decorators = [Centered];
ConfirmationCard.decorators = [Centered];
Spotlight.decorators = [Centered];
