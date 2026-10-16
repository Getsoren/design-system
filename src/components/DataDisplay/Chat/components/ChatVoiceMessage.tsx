import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { type KeyboardEvent, type MouseEvent, useEffect, useMemo, useRef, useState } from "react";
import ChatLineIcon from "@/components/DataDisplay/Chat/components/ChatLineIcon";
import { BUBBLE_RADIUS, getReceivedBubbleBackground, LINE_ICON_PATHS } from "@/components/DataDisplay/Chat/constants";
import type { ChatLabels } from "@/components/DataDisplay/Chat/hooks/useChatLabels";
import type { ChatAttachment } from "@/components/DataDisplay/Chat/types";
import PauseRoundedIcon from "@/components/DataDisplay/Icons/PauseRoundedIcon";
import PlayArrowRoundedIcon from "@/components/DataDisplay/Icons/PlayArrowRoundedIcon";

const BAR_COUNT = 32;
const KEYBOARD_STEP = 0.05;
// Same shape as the text bubble: 16px corners, the 5px tail on the author's side
// As the text bubbles: the design system's borderRadiusL, the pointed corner at its borderRadiusS
const TAIL_RADIUS = 4;
// Even inset around the button, so its corners are concentric with the bubble's (inner = outer - inset)
const BUTTON_INSET = 6;
const BUTTON_SIZE = 44;
const BUTTON_RADIUS = BUBBLE_RADIUS - BUTTON_INSET;
const BUTTON_TAIL_RADIUS = Math.max(TAIL_RADIUS - BUTTON_INSET, 2);

// In the composer, before it is sent: 9px inside its 20px corner (20 - 9 = 11), its play button 4px inside (11 - 4 = 7)
const COMPOSER_RADIUS = 11;
const COMPOSER_INSET = 4;
const COMPOSER_BUTTON_SIZE = 40;

interface ChatVoiceMessageProps {
  attachment: ChatAttachment;
  isOwn?: boolean;
  /** "composer": a take waiting to be sent, inside the composer's white card rather than as a sent bubble */
  variant?: "bubble" | "composer";
  /** In the composer: a trash button at the end of the pill, as tall as the play button */
  onRemove?: () => void;
  removeLabel?: string;
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
 * A voice message as a bubble: play / pause button, waveform filling up with the playback (a click moves the
 * playhead), the duration then the elapsed time.
 */
const ChatVoiceMessage = ({ attachment, isOwn, labels, variant = "bubble", onRemove, removeLabel }: ChatVoiceMessageProps) => {
  const isInComposer = variant === "composer";
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
    } else if (audio.duration === Number.POSITIVE_INFINITY && !isResolvingDurationRef.current) {
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

    // Still parked at the far end by the duration workaround: play from the start
    if (isResolvingDurationRef.current) {
      isResolvingDurationRef.current = false;
      audio.currentTime = 0;
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

  return (
    <Paper
      role="group"
      aria-label={labels.voiceMessage}
      data-test="chatVoiceMessage"
      sx={{
        alignItems: "center",
        backgroundColor: isInComposer ? "action.hover" : isOwn ? "tertiary.light" : getReceivedBubbleBackground,
        border: 0,
        borderRadius: `${isInComposer ? COMPOSER_RADIUS : BUBBLE_RADIUS}px`,
        ...(!isInComposer && (isOwn ? { borderBottomRightRadius: `${TAIL_RADIUS}px` } : { borderBottomLeftRadius: `${TAIL_RADIUS}px` })),
        boxShadow: isInComposer ? "none" : "0 1px 3px rgba(0,0,0,0.1)",
        color: "text.primary",
        display: "flex",
        gap: 1.25,
        maxWidth: "100%",
        p: `${isInComposer ? COMPOSER_INSET : BUTTON_INSET}px`,
        pr: onRemove ? `${COMPOSER_INSET}px` : 1.5,
        width: onRemove ? 300 : 260,
      }}
    >
      <IconButton
        aria-label={isPlaying ? labels.pause : labels.play}
        onClick={togglePlayback}
        sx={{
          "&:hover": { backgroundColor: "primary.main", opacity: 0.85 },
          backgroundColor: "primary.main",
          // The corner next to the bubble's tail follows it, the others follow the bubble's 16px
          borderRadius: `${isInComposer ? COMPOSER_RADIUS - COMPOSER_INSET : BUTTON_RADIUS}px`,
          color: "primary.contrastText",
          ...(!(isOwn || isInComposer) && { borderBottomLeftRadius: `${BUTTON_TAIL_RADIUS}px` }),
          flexShrink: 0,
          height: isInComposer ? COMPOSER_BUTTON_SIZE : BUTTON_SIZE,
          width: isInComposer ? COMPOSER_BUTTON_SIZE : BUTTON_SIZE,
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
        sx={{
          alignItems: "center",
          cursor: "pointer",
          display: "flex",
          flex: 1,
          height: BUTTON_SIZE,
          justifyContent: "space-between",
          minWidth: 0,
        }}
      >
        {waveform.map((height, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: "text.primary",
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
          color: "text.secondary",
          fontVariantNumeric: "tabular-nums",
          minWidth: 32,
          textAlign: "right",
        }}
      >
        {duration || hasStarted ? formatDuration(hasStarted ? currentTime : Math.max(1, Math.round(duration))) : ""}
      </Typography>
      {onRemove && (
        <IconButton
          aria-label={removeLabel}
          title={removeLabel}
          onClick={onRemove}
          sx={{
            "&:hover": { backgroundColor: "action.hover", color: "text.primary" },
            borderRadius: `${COMPOSER_RADIUS - COMPOSER_INSET}px`,
            color: "text.secondary",
            flexShrink: 0,
            height: COMPOSER_BUTTON_SIZE,
            width: COMPOSER_BUTTON_SIZE,
          }}
        >
          <ChatLineIcon d={LINE_ICON_PATHS.trash} />
        </IconButton>
      )}
      {/* biome-ignore lint/a11y/useMediaCaption: a voice message has no caption track */}
      <audio
        ref={audioRef}
        src={attachment.url}
        preload={attachment.durationMs ? "none" : "metadata"}
        onLoadedMetadata={readDuration}
        onDurationChange={readDuration}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        // The seek of the duration workaround lands here; otherwise keeps the playhead moving where animation
        // frames are throttled (background tab)
        onTimeUpdate={(e) => {
          if (isResolvingDurationRef.current) {
            readDuration();
          } else if (!e.currentTarget.paused) {
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
