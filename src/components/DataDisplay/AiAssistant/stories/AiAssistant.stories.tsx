import { Alert, Chip, Stack, Typography } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import { useState } from "react";
import AiAssistant from "@/components/DataDisplay/AiAssistant/AiAssistant";
import Chat from "@/components/DataDisplay/Chat/Chat";
import type { ChatMessage } from "@/components/DataDisplay/Chat/types";

const meta: Meta = {
  component: AiAssistant.Panel,
  title: "Components/Data Display/AiAssistant",
};

export default meta;

/**
 * The full block, composed the way a host app would: FAB orb toggling the floating
 * panel, header with a host-chosen name, thinking orb, confirmation card. The host
 * app plugs its own thread (Chat.MessageBubble), input (Chat.MessageInput /
 * Chat.VoiceRecorder) and agentic logic.
 */
const PARTICIPANTS = [{ avatar: null, firstName: "Nova", lastName: "", userId: "assistant" }];

/**
 * The whole thing wired the way a host app does it — including VOICE input:
 * ChatVoiceRecorder sits in the composer via Chat.MessageInput's `startActions` slot,
 * hands its Blob to the app, which transcribes it (simulated here) and sends the text
 * like a typed message. The assistant "thinks" (orb + busy aura) then replies.
 */
export const WithVoiceInput: StoryFn = () => {
  const [open, setOpen] = useState(true);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [isThinking, setIsThinking] = useState(false);

  const append = (authorId: string, body: string) =>
    setMessages((prev) => [...prev, { authorId, body, createdAt: new Date().toISOString(), id: `${prev.length}` }]);

  const sendMessage = (body: string) => {
    append("me", body);
    setIsThinking(true);
    setTimeout(() => {
      append("assistant", `Bien reçu : « ${body} » — je m'en occupe !`);
      setIsThinking(false);
    }, 2000);
  };

  const handleRecorded = (audio: Blob) => {
    // Real app: POST the blob to its transcription endpoint, then send the returned text
    setIsTranscribing(true);
    setTimeout(() => {
      setIsTranscribing(false);
      sendMessage(`(vocal transcrit — ${(audio.size / 1024).toFixed(0)} kB) Il me faut une mini-pelle demain`);
    }, 1500);
  };

  return (
    <>
      <AiAssistant.Fab open={open} onClick={() => setOpen((prev) => !prev)} tooltip="Nova - Assistant IA" />
      <AiAssistant.Panel open={open} isBusy={isThinking || isTranscribing}>
        <AiAssistant.Header title="Nova" subtitle="Assistant IA" onClose={() => setOpen(false)} />
        {/* Same composition as a real host app: the Chat container owns the column,
            the MessageInput sits flush at the bottom (it brings its own background,
            top border and padding — no wrapper needed) */}
        <Stack flex={1} minHeight={0}>
          <Chat height="100%">
            <Stack flex={1} minHeight={0} padding={2} spacing={1} sx={{ overflowY: "auto" }}>
              {!messages.length && (
                <AiAssistant.EmptyState message="Écrivez un message ou enregistrez un vocal avec le micro du composer." />
              )}
              {messages.map((message) => (
                <Chat.MessageBubble
                  key={message.id}
                  isOwn={message.authorId === "me"}
                  hideAvatar
                  message={message}
                  participants={PARTICIPANTS}
                />
              ))}
              {isThinking && (
                <Stack direction="row" alignItems="center" spacing={1} paddingY={1}>
                  <AiAssistant.ThinkingOrb />
                </Stack>
              )}
            </Stack>
            <Chat.MessageInput
              onSend={sendMessage}
              isSending={isThinking}
              labels={{ enterToSend: "", send: "Envoyer", writeAMessage: "Écrire un message..." }}
              startActions={
                <Chat.VoiceRecorder
                  onRecorded={handleRecorded}
                  isProcessing={isTranscribing}
                  disabled={isThinking}
                  labels={{ cancel: "Annuler", record: "Enregistrer un vocal", send: "Utiliser cet enregistrement" }}
                />
              }
            />
          </Chat>
        </Stack>
      </AiAssistant.Panel>
    </>
  );
};

export const Default: StoryFn = () => {
  const [open, setOpen] = useState(true);
  const [status, setStatus] = useState<"approved" | "declined" | "pending">("pending");

  return (
    <>
      <AiAssistant.Fab open={open} onClick={() => setOpen((prev) => !prev)} tooltip="Nova - Assistant IA" />
      <AiAssistant.Panel open={open} isBusy={status === "pending"}>
        <AiAssistant.Header title="Nova" subtitle="Assistant IA" onClose={() => setOpen(false)} />
        <Stack flex={1} minHeight={0}>
          <Chat height="100%">
            <Stack flex={1} minHeight={0} padding={2} spacing={1} sx={{ overflowY: "auto" }}>
              <Alert severity="info" icon={false}>
                Le fil (bulles, saisie, vocal) vient des composants Chat.* — ici on montre les blocs propres à l&apos;assistant.
              </Alert>
              <AiAssistant.ConfirmationCard
                heading="Action à confirmer"
                summary="Créer une conversation avec Xavier Bove"
                status={status}
                onAccept={() => setStatus("approved")}
                onDecline={() => setStatus("declined")}
                labels={{ accept: "Accepter", decline: "Annuler" }}
              />
              <Stack direction="row" alignItems="center" spacing={1} paddingY={1}>
                <AiAssistant.ThinkingOrb />
                <Chip size="small" variant="outlined" label="Recherche dans l'application…" />
              </Stack>
              <Typography variant="caption" color="text.secondary">
                L&apos;aura du panneau pulse tant que status=pending (isBusy). Un envoi réarme la carte de confirmation.
              </Typography>
            </Stack>
            <Chat.MessageInput
              onSend={() => setStatus("pending")}
              labels={{ enterToSend: "", send: "Envoyer", writeAMessage: "Écrire un message..." }}
            />
          </Chat>
        </Stack>
      </AiAssistant.Panel>
    </>
  );
};
