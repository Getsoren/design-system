import CircularProgress from "@mui/material/CircularProgress";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { useEffect, useRef, useState } from "react";
import type { ChatVoiceRecorderProps } from "@/components/DataDisplay/Chat/types";
import CheckIcon from "@/components/DataDisplay/Icons/CheckIcon";
import CloseIcon from "@/components/DataDisplay/Icons/CloseIcon";
import MicIcon from "@/components/DataDisplay/Icons/MicIcon";

/** First recording mime the browser supports (Safari records mp4, everyone else webm/opus) */
const pickMimeType = (): string | undefined =>
  ["audio/webm;codecs=opus", "audio/webm", "audio/mp4"].find(
    (mime) => typeof MediaRecorder !== "undefined" && MediaRecorder.isTypeSupported(mime),
  );

const formatElapsed = (seconds: number): string =>
  `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;

/**
 * Voice input for a chat composer: mic button that expands into a recording panel
 * (pulsing dot, elapsed time, cancel / validate). Transport-agnostic — it only hands
 * the recorded audio Blob to `onRecorded`; transcription/upload is the caller's job
 * (drive `isProcessing` while it runs).
 */
export const ChatVoiceRecorder = ({
  onRecorded,
  onError,
  isProcessing = false,
  disabled = false,
  maxDurationMs = 120_000,
  labels,
}: ChatVoiceRecorderProps) => {
  const [isRecording, setIsRecording] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const recorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  // Read by the recorder's onstop: cancel discards the take instead of emitting it
  const discardRef = useRef(false);

  const releaseStream = () => {
    streamRef.current?.getTracks().forEach((track) => {
      track.stop();
    });
    streamRef.current = null;
    recorderRef.current = null;
    setIsRecording(false);
  };

  const stop = (discard: boolean) => {
    discardRef.current = discard;
    recorderRef.current?.stop();
  };

  const start = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mimeType = pickMimeType();
      const recorder = new MediaRecorder(stream, mimeType ? { mimeType } : undefined);

      chunksRef.current = [];
      discardRef.current = false;
      recorder.ondataavailable = (event) => {
        if (event.data.size) {
          chunksRef.current.push(event.data);
        }
      };
      recorder.onstop = () => {
        const chunks = chunksRef.current;
        chunksRef.current = [];

        if (!discardRef.current && chunks.length) {
          onRecorded(new Blob(chunks, { type: recorder.mimeType || "audio/webm" }));
        }
        releaseStream();
      };

      streamRef.current = stream;
      recorderRef.current = recorder;
      recorder.start();
      setElapsedSeconds(0);
      setIsRecording(true);
    } catch (error) {
      // Typically a denied microphone permission
      onError?.(error);
      releaseStream();
    }
  };

  /**
   * Recording clock + hard stop at maxDurationMs (the take is validated, WhatsApp-style)
   */
  useEffect(() => {
    if (!isRecording) {
      return;
    }

    const interval = setInterval(() => setElapsedSeconds((prev) => prev + 1), 1000);
    const timeout = setTimeout(() => stop(false), maxDurationMs);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [isRecording, maxDurationMs]);

  /**
   * Release the microphone if the component unmounts mid-recording
   */
  useEffect(
    () => () => {
      discardRef.current = true;
      recorderRef.current?.stop();
    },
    [],
  );

  if (!isRecording) {
    return (
      <Tooltip title={labels?.record ?? "Record a voice message"}>
        <span>
          <IconButton onClick={start} disabled={disabled || isProcessing} data-test="chatVoiceStart">
            {isProcessing ? <CircularProgress size={20} /> : <MicIcon />}
          </IconButton>
        </span>
      </Tooltip>
    );
  }

  return (
    <Stack direction="row" alignItems="center" spacing={0.5} data-test="chatVoicePanel">
      <Stack
        component="span"
        sx={{
          "@keyframes chatVoicePulse": {
            "0%, 100%": { opacity: 1, transform: "scale(1)" },
            "50%": { opacity: 0.35, transform: "scale(0.8)" },
          },
          "@media (prefers-reduced-motion: reduce)": {
            "&&": { animation: "none" },
          },
          animation: "chatVoicePulse 1.2s ease-in-out infinite",
          backgroundColor: "error.main",
          borderRadius: "50%",
          height: 10,
          width: 10,
        }}
      />
      <Typography variant="caption" color="text.secondary" sx={{ fontVariantNumeric: "tabular-nums", minWidth: 40 }}>
        {formatElapsed(elapsedSeconds)}
      </Typography>
      <Tooltip title={labels?.cancel ?? "Cancel"}>
        <IconButton size="small" onClick={() => stop(true)} data-test="chatVoiceCancel">
          <CloseIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title={labels?.send ?? "Use this recording"}>
        <IconButton size="small" color="primary" onClick={() => stop(false)} data-test="chatVoiceSend">
          <CheckIcon />
        </IconButton>
      </Tooltip>
    </Stack>
  );
};

export default ChatVoiceRecorder;
