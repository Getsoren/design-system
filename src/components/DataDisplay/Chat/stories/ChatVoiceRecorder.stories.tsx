import { Paper, Stack, Typography } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react-vite";
import { useState } from "react";
import ChatVoiceRecorder from "@/components/DataDisplay/Chat/components/ChatVoiceRecorder";

const meta: Meta<typeof ChatVoiceRecorder> = {
  component: ChatVoiceRecorder,
  parameters: { layout: "centered" },
  title: "Components/Data Display/ChatVoiceRecorder",
};

export default meta;

/**
 * Records through the real microphone (allow the permission prompt), then simulates a
 * 2s consumption of the take (the caller's transcription/upload drives isProcessing).
 */
export const Default: StoryFn<typeof ChatVoiceRecorder> = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [lastTake, setLastTake] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleRecorded = (audio: Blob) => {
    setIsProcessing(true);
    setTimeout(() => {
      setLastTake(`${audio.type || "audio"} — ${(audio.size / 1024).toFixed(1)} kB`);
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <Stack spacing={2} width={360} height="100%" justifyContent="center">
      <Paper variant="outlined" sx={{ alignItems: "center", display: "flex", gap: 1, paddingX: 2, paddingY: 1 }}>
        <Typography variant="body2" color="text.secondary" flex={1}>
          Écrire un message…
        </Typography>
        <ChatVoiceRecorder
          onRecorded={handleRecorded}
          onError={(err) => setError(err instanceof Error ? err.message : String(err))}
          isProcessing={isProcessing}
          labels={{ cancel: "Annuler", record: "Enregistrer un vocal", send: "Utiliser cet enregistrement" }}
        />
      </Paper>
      {lastTake && <Typography variant="caption">Dernière prise : {lastTake}</Typography>}
      {error && (
        <Typography variant="caption" color="error">
          {error}
        </Typography>
      )}
    </Stack>
  );
};
