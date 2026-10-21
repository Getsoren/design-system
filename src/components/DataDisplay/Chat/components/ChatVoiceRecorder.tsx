import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { alpha, type Theme } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { useEffect, useRef, useState } from "react";
import type { ChatVoiceRecorderProps } from "@/components/DataDisplay/Chat/types";
import CheckIcon from "@/components/DataDisplay/Icons/CheckIcon";
import CloseIcon from "@/components/DataDisplay/Icons/CloseIcon";
import MicIcon from "@/components/DataDisplay/Icons/MicIcon";
import useTranslation from "@/hooks/useTranslation/useTranslation";

// Normalized RMS (0..1) above which the mic input counts as speech rather than ambient/room noise
const SPEECH_RMS_THRESHOLD = 0.02;
const WAVE_BARS = 28;
const WAVE_STEP_MS = 70;
const WAVE_FULL_RMS = 0.18;

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
  labels,
  isProcessing = false,
  disabled = false,
  isHighlighted = false,
  startLabel,
  autoSubmitOnSilence = false,
  maxDurationMs = 120_000,
  silenceTimeoutMs = 2_500,
}: ChatVoiceRecorderProps) => {
  const { t } = useTranslation();
  const [isRecording, setIsRecording] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [levels, setLevels] = useState<number[]>(() => Array(WAVE_BARS).fill(0));
  const recorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  // Read by the recorder's onstop: cancel discards the take instead of emitting it
  const discardRef = useRef(false);
  // Web Audio graph used for the live wave and silence detection (Siri-style auto-send)
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
   * Feeds the live wave and, when enabled, auto-validates the take after `silenceTimeoutMs` of trailing silence —
   * but only once the user has actually started speaking, so a slow start is never cut off.
   */
  const monitorLevel = (stream: MediaStream) => {
    const AudioContextCtor =
      window.AudioContext ?? (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;

    if (!AudioContextCtor) {
      return;
    }

    const watchesSilence = autoSubmitOnSilence && !!silenceTimeoutMs;

    const audioContext = new AudioContextCtor();
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 2048;
    audioContext.createMediaStreamSource(stream).connect(analyser);
    audioContextRef.current = audioContext;

    const samples = new Uint8Array(analyser.fftSize);
    let hasSpoken = false;
    let lastSoundAt = performance.now();
    let lastBarAt = 0;

    const tick = () => {
      analyser.getByteTimeDomainData(samples);
      // RMS of the waveform centered on 128 (silence) → normalized 0..1 loudness
      const rms = Math.sqrt(samples.reduce((sum, value) => sum + (value - 128) ** 2, 0) / samples.length) / 128;
      const now = performance.now();

      if (rms > SPEECH_RMS_THRESHOLD) {
        hasSpoken = true;
        lastSoundAt = now;
      }

      if (now - lastBarAt >= WAVE_STEP_MS) {
        lastBarAt = now;
        // Square root, so a quiet voice still moves the bars.
        const level = Math.min(1, Math.sqrt(rms / WAVE_FULL_RMS));
        setLevels((previous) => [...previous.slice(1), level]);
      }

      if (watchesSilence && hasSpoken && now - lastSoundAt >= silenceTimeoutMs) {
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
          onRecorded(new Blob(chunks, { type: recorder.mimeType || "audio/webm" }));
        }
        releaseStream();
      };

      streamRef.current = stream;
      recorderRef.current = recorder;
      recorder.start();
      monitorLevel(stream);
      setElapsedSeconds(0);
      setLevels(Array(WAVE_BARS).fill(0));
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
    const callSx = isHighlighted
      ? ({ palette }: Theme) => ({
          // A slow halo that calls the eye, gone while the mic cannot be used.
          "@keyframes chatVoiceCall": {
            "0%": { boxShadow: `0 0 0 0 ${alpha(palette.primary.main, 0.3)}` },
            "70%, 100%": { boxShadow: `0 0 0 10px ${alpha(palette.primary.main, 0)}` },
          },
          "@media (prefers-reduced-motion: reduce)": { "&&": { animation: "none" } },
          "&:hover": { backgroundColor: "primary.dark" },
          "&.Mui-disabled": { animation: "none" },
          animation: "chatVoiceCall 1.8s ease-out infinite",
          backgroundColor: "primary.main",
          color: "primary.contrastText",
        })
      : undefined;

    if (startLabel) {
      return (
        <Button
          variant="contained"
          onClick={start}
          disabled={disabled || isProcessing}
          data-test="chatVoiceStart"
          startIcon={isProcessing ? <CircularProgress size={16} color="inherit" /> : <MicIcon sx={{ fontSize: 20 }} />}
          sx={callSx}
        >
          {startLabel}
        </Button>
      );
    }

    return (
      <Tooltip title={labels?.record ?? t("recordVoiceMessage")}>
        <span>
          <IconButton onClick={start} disabled={disabled || isProcessing} data-test="chatVoiceStart" sx={callSx}>
            {isProcessing ? <CircularProgress size={20} /> : <MicIcon sx={{ fontSize: 20 }} />}
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
          // error.main reads pinkish on such a small dot.
          backgroundColor: "error.dark",
          borderRadius: "50%",
          flexShrink: 0,
          height: 6,
          width: 6,
        }}
      />
      <Typography variant="caption" color="text.secondary" sx={{ fontVariantNumeric: "tabular-nums", minWidth: 36 }}>
        {formatElapsed(elapsedSeconds)}
      </Typography>
      <Stack direction="row" alignItems="center" spacing="2px" aria-hidden sx={{ height: 20, paddingX: 0.5 }} data-test="chatVoiceWave">
        {levels.map((level, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: "text.secondary",
              borderRadius: 1,
              flexShrink: 0,
              height: `${Math.max(2, Math.round(level * 18))}px`,
              transition: "height 70ms linear",
              width: 2,
            }}
          />
        ))}
      </Stack>
      <Tooltip title={labels?.cancel ?? t("cancel")}>
        <IconButton size="small" onClick={() => stop(true)} data-test="chatVoiceCancel">
          <CloseIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title={labels?.send ?? t("useRecording")}>
        <IconButton size="small" color="primary" onClick={() => stop(false)} data-test="chatVoiceSend">
          <CheckIcon />
        </IconButton>
      </Tooltip>
    </Stack>
  );
};

export default ChatVoiceRecorder;
