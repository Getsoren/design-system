import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { useEffect, useRef, useState } from "react";
import ChatLineIcon from "@/components/DataDisplay/Chat/components/ChatLineIcon";
import { LINE_ICON_PATHS } from "@/components/DataDisplay/Chat/constants";
import type { ChatVoiceRecorderProps } from "@/components/DataDisplay/Chat/types";

// Normalized RMS (0..1) above which the mic input counts as speech rather than ambient/room noise
const SPEECH_RMS_THRESHOLD = 0.02;
// WhatsApp-like live waveform: the last levels of the mic, scrolling to the left
const LEVEL_BAR_COUNT = 16;
const LEVEL_SAMPLE_MS = 70;
const SILENT_LEVELS = Array.from({ length: LEVEL_BAR_COUNT }, () => 0);

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
  onRecordingChange,
  labels,
  buttonSx,
  isProcessing = false,
  disabled = false,
  autoSubmitOnSilence = false,
  maxDurationMs = 120_000,
  silenceTimeoutMs = 2_500,
}: ChatVoiceRecorderProps) => {
  const [isRecording, setIsRecording] = useState(false);
  const iconButtonSx = [{ height: 44, width: 44 }, ...(Array.isArray(buttonSx) ? buttonSx : [buttonSx])];
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  // What the mic hears, 0 to 1: the user sees they are heard
  const [levels, setLevels] = useState<number[]>(SILENT_LEVELS);
  const recorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const startedAtRef = useRef(0);
  // Read by the recorder's onstop: cancel discards the take instead of emitting it
  const discardRef = useRef(false);
  // Web Audio graph used only for silence detection (Siri-style auto-send)
  const audioContextRef = useRef<AudioContext | null>(null);
  const silenceFrameRef = useRef<number | null>(null);

  const stopSilenceMonitor = () => {
    if (silenceFrameRef.current !== null) {
      cancelAnimationFrame(silenceFrameRef.current);
      silenceFrameRef.current = null;
    }
    // AudioContext.close() is async and can reject if already closed — ignore, the stream is torn down anyway
    audioContextRef.current?.close().catch(() => {});
    audioContextRef.current = null;
  };

  const releaseStream = () => {
    stopSilenceMonitor();
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

  /**
   * Watches the mic level: it feeds the live waveform and, when `autoSubmitOnSilence` is on, validates the take after
   * `silenceTimeoutMs` of trailing silence — but only once the user has actually started speaking, so a slow start is
   * never cut off.
   */
  const monitorLevel = (stream: MediaStream) => {
    const AudioContextCtor =
      window.AudioContext ?? (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;

    if (!AudioContextCtor) {
      return;
    }

    const audioContext = new AudioContextCtor();
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 2048;
    audioContext.createMediaStreamSource(stream).connect(analyser);
    audioContextRef.current = audioContext;

    const samples = new Uint8Array(analyser.fftSize);
    let hasSpoken = false;
    let lastSoundAt = performance.now();
    let lastSampleAt = 0;

    const tick = () => {
      analyser.getByteTimeDomainData(samples);
      // RMS of the waveform centered on 128 (silence) → normalized 0..1 loudness
      const rms = Math.sqrt(samples.reduce((sum, value) => sum + (value - 128) ** 2, 0) / samples.length) / 128;
      const now = performance.now();

      if (now - lastSampleAt >= LEVEL_SAMPLE_MS) {
        lastSampleAt = now;
        // Square root: a voice (RMS 0.02 to 0.25) fills the bars without shouting
        setLevels((previous) => [...previous.slice(1), Math.min(1, Math.sqrt(rms) * 2)]);
      }

      if (rms > SPEECH_RMS_THRESHOLD) {
        hasSpoken = true;
        lastSoundAt = now;
      }

      if (autoSubmitOnSilence && silenceTimeoutMs && hasSpoken && now - lastSoundAt >= silenceTimeoutMs) {
        stop(false);
        return;
      }

      silenceFrameRef.current = requestAnimationFrame(tick);
    };

    silenceFrameRef.current = requestAnimationFrame(tick);
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
          onRecorded(new Blob(chunks, { type: recorder.mimeType || "audio/webm" }), Date.now() - startedAtRef.current);
        }
        releaseStream();
      };

      streamRef.current = stream;
      recorderRef.current = recorder;
      startedAtRef.current = Date.now();
      recorder.start();
      setLevels(SILENT_LEVELS);
      monitorLevel(stream);
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

  // biome-ignore lint/correctness/useExhaustiveDependencies: only the take's start and end matter
  useEffect(() => {
    onRecordingChange?.(isRecording);
  }, [isRecording]);

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
          <IconButton
            aria-label={labels?.record ?? "Record a voice message"}
            onClick={start}
            disabled={disabled || isProcessing}
            data-test="chatVoiceStart"
            sx={iconButtonSx}
          >
            {isProcessing ? <CircularProgress size={20} /> : <ChatLineIcon d={LINE_ICON_PATHS.mic} />}
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
      <Stack direction="row" alignItems="center" spacing="2px" aria-hidden data-test="chatVoiceLevels" sx={{ height: 24, px: 0.5 }}>
        {levels.map((level, index) => (
          <Box
            // biome-ignore lint/suspicious/noArrayIndexKey: a fixed row of bars, the levels scroll through it
            key={index}
            sx={{
              backgroundColor: "text.primary",
              borderRadius: 1,
              flexShrink: 0,
              height: 4 + Math.round(level * 20),
              transition: "height 70ms linear",
              width: 3,
            }}
          />
        ))}
      </Stack>
      <Tooltip title={labels?.cancel ?? "Cancel"}>
        <IconButton onClick={() => stop(true)} data-test="chatVoiceCancel" sx={iconButtonSx}>
          <ChatLineIcon d={LINE_ICON_PATHS.close} />
        </IconButton>
      </Tooltip>
      <Tooltip title={labels?.send ?? "Use this recording"}>
        {/* The step's main action, black as the send button it stands in for */}
        <IconButton
          onClick={() => stop(false)}
          data-test="chatVoiceSend"
          sx={[
            ...iconButtonSx,
            {
              "&:hover": { backgroundColor: "primary.dark" },
              backgroundColor: "primary.main",
              color: "primary.contrastText",
            },
          ]}
        >
          <ChatLineIcon d={LINE_ICON_PATHS.check} />
        </IconButton>
      </Tooltip>
    </Stack>
  );
};

export default ChatVoiceRecorder;
