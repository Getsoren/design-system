import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { type KeyboardEvent, type MouseEvent, useEffect, useMemo, useRef, useState } from "react";
import type { ChatLabels } from "@/components/DataDisplay/Chat/hooks/useChatLabels";
import type { ChatAttachment } from "@/components/DataDisplay/Chat/types";
import PauseRoundedIcon from "@/components/DataDisplay/Icons/PauseRoundedIcon";
import PlayArrowRoundedIcon from "@/components/DataDisplay/Icons/PlayArrowRoundedIcon";

const BAR_COUNT = 32;
const KEYBOARD_STEP = 0.05;

interface ChatVoiceMessageProps {
  attachment: ChatAttachment;
  isOwn?: boolean;
  labels: ChatLabels;
}

// One voice message plays at a time: starting one pauses the previous
let playingAudio: HTMLAudioElement | null = null;

const formatDuration = (seconds: number) => `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, "0")}`;

/**
 * Bar heights (0.2 to 1) drawn from the attachment id: the same message always gets the same waveform, without
 * decoding the audio. FNV-1a seeds a mulberry32 generator; a sine envelope softens both ends.
 */
const getWaveform = (id: string): number[] => {
  let seed = 2166136261;

  for (const char of id) {
    seed = Math.imul(seed ^ char.charCodeAt(0), 16777619);
  }

  return Array.from({ length: BAR_COUNT }, (_, index) => {
    seed = (seed + 0x6d2b79f5) | 0;
    let value = Math.imul(seed ^ (seed >>> 15), seed | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    const random = ((value ^ (value >>> 14)) >>> 0) / 4294967296;
    const envelope = 0.55 + 0.45 * Math.sin(((index + 0.5) / BAR_COUNT) * Math.PI);

    return 0.2 + 0.8 * random * envelope;
  });
};

/**
 * A voice message as a bubble: round play / pause button, waveform filling up with the playback (a click moves the
 * playhead), the duration then the elapsed time.
 */
const ChatVoiceMessage = ({ attachment, isOwn, labels }: ChatVoiceMessageProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  // MediaRecorder webm files have no duration in their header: seeking far away makes the browser compute it
  const isResolvingDurationRef = useRef(false);
  const [duration, setDuration] = useState(attachment.durationMs ? attachment.durationMs / 1000 : 0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const waveform = useMemo(() => getWaveform(attachment.id), [attachment.id]);
  const progress = duration ? Math.min(currentTime / duration, 1) : 0;
  const hasStarted = isPlaying || currentTime > 0;

  const readDuration = () => {
    const audio = audioRef.current;

    if (!audio || attachment.durationMs) {
      return;
    }

    if (Number.isFinite(audio.duration)) {
      setDuration(audio.duration);

      if (isResolvingDurationRef.current) {
        isResolvingDurationRef.current = false;
        audio.currentTime = 0;
      }
    } else if (!isResolvingDurationRef.current) {
      isResolvingDurationRef.current = true;
      audio.currentTime = 1e101;
    }
  };

  const togglePlayback = () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (!audio.paused) {
      audio.pause();
      return;
    }

    if (playingAudio && playingAudio !== audio) {
      playingAudio.pause();
    }

    playingAudio = audio;
    audio.play().catch(() => setIsPlaying(false));
  };

  const seek = (ratio: number) => {
    const audio = audioRef.current;

    if (!(audio && duration)) {
      return;
    }

    const time = Math.min(Math.max(ratio, 0), 1) * duration;
    audio.currentTime = time;
    setCurrentTime(time);
  };

  const handleWaveformClick = (e: MouseEvent<HTMLElement>) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();

    if (width) {
      seek((e.clientX - left) / width);
    }
  };

  const handleWaveformKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    const step = { ArrowLeft: -KEYBOARD_STEP, ArrowRight: KEYBOARD_STEP }[e.key];

    if (step) {
      e.preventDefault();
      seek(progress + step);
    }
  };

  /**
   * The playhead follows the audio frame by frame while it plays ("timeupdate" only fires a few times a second)
   */
  useEffect(() => {
    if (!isPlaying) {
      return;
    }

    let frame = 0;
    const tick = () => {
      setCurrentTime(audioRef.current?.currentTime ?? 0);
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isPlaying]);

  useEffect(
    () => () => {
      if (playingAudio === audioRef.current) {
        playingAudio?.pause();
        playingAudio = null;
      }
    },
    [],
  );

  const barColor = isOwn ? "primary.contrastText" : "text.primary";

  return (
    <Paper
      role="group"
      aria-label={labels.voiceMessage}
      data-test="chatVoiceMessage"
      sx={{
        alignItems: "center",
        backgroundColor: isOwn ? "primary.main" : "tertiary.light",
        border: 0,
        borderBottomLeftRadius: isOwn ? undefined : "5px ! important",
        borderBottomRightRadius: isOwn ? "5px ! important" : undefined,
        borderRadius: 2,
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        color: isOwn ? "primary.contrastText" : "text.primary",
        display: "flex",
        gap: 1,
        maxWidth: "100%",
        px: 1,
        py: 0.5,
        width: 260,
      }}
    >
      <IconButton
        aria-label={isPlaying ? labels.pause : labels.play}
        onClick={togglePlayback}
        sx={{
          "&:hover": { backgroundColor: isOwn ? "primary.contrastText" : "primary.main", opacity: 0.85 },
          backgroundColor: isOwn ? "primary.contrastText" : "primary.main",
          color: isOwn ? "primary.main" : "primary.contrastText",
          flexShrink: 0,
          height: 44,
          width: 44,
        }}
      >
        {isPlaying ? <PauseRoundedIcon /> : <PlayArrowRoundedIcon />}
      </IconButton>
      <Box
        role="slider"
        tabIndex={0}
        aria-label={labels.voiceMessage}
        aria-valuemin={0}
        aria-valuemax={Math.round(duration)}
        aria-valuenow={Math.floor(currentTime)}
        aria-valuetext={formatDuration(currentTime)}
        onClick={handleWaveformClick}
        onKeyDown={handleWaveformKeyDown}
        sx={{ alignItems: "center", cursor: "pointer", display: "flex", flex: 1, height: 44, justifyContent: "space-between", minWidth: 0 }}
      >
        {waveform.map((height, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: barColor,
              borderRadius: 1,
              flexShrink: 0,
              height: 4 + height * 24,
              opacity: (index + 0.5) / BAR_COUNT <= progress ? 1 : 0.35,
              width: 3,
            }}
          />
        ))}
      </Box>
      <Typography
        variant="caption"
        sx={{
          color: isOwn ? "primary.contrastText" : "text.secondary",
          fontVariantNumeric: "tabular-nums",
          minWidth: 32,
          textAlign: "right",
        }}
      >
        {duration || hasStarted ? formatDuration(hasStarted ? currentTime : Math.max(1, Math.round(duration))) : ""}
      </Typography>
      {/* biome-ignore lint/a11y/useMediaCaption: a voice message has no caption track */}
      <audio
        ref={audioRef}
        src={attachment.url}
        preload={attachment.durationMs ? "none" : "metadata"}
        onLoadedMetadata={readDuration}
        onDurationChange={readDuration}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        // Keeps the playhead moving where animation frames are throttled (background tab)
        onTimeUpdate={(e) => {
          if (!e.currentTarget.paused) {
            setCurrentTime(e.currentTarget.currentTime);
          }
        }}
        onEnded={(e) => {
          setIsPlaying(false);
          e.currentTarget.currentTime = 0;
          setCurrentTime(0);
        }}
        hidden
      />
    </Paper>
  );
};

export default ChatVoiceMessage;
