import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import type { AiAssistantMarkProps } from "@/components/DataDisplay/AiAssistant/types";
import { assistantGlowStops } from "@/components/DataDisplay/AiAssistant/utils/gradient";
import { SOREN_MARK_VIEWBOX } from "@/constants/sorenLogo";

const ELLIPSE = { cx: 154.5, cy: 156.5, rx: 170, ry: 95, tilt: -44 } as const;
const REST = `rotate(${ELLIPSE.tilt}deg) scale(1, 1)`;
// Same area as the ellipse.
const CIRCLE = `rotate(${ELLIPSE.tilt}deg) scale(0.75, 1.34)`;
const CYCLE_MS = 2800;
const TURN_EASE = "cubic-bezier(0.37, 0, 0.63, 1)";
const SETTLE_MS = 640;
const SETTLE_EASE = "cubic-bezier(0.2, 0, 0, 1)";
const HANDOVER_MS = 120;
const BREATH_MS = 9000;
const BREATH_EASE = "cubic-bezier(0.45, 0, 0.55, 1)";
const STRETCH_MS = 10000;

const GLOW_TURN_S = 4.2;
const GLOW_SMALL = { blur: 20, size: 16, width: 70 } as const;
const GLOW_LARGE = { blur: 9, size: 96, width: 22 } as const;

// Shared by all marks: a resting mark mounted right after a working one stops or unmounts takes over its turn.
let workingMarkLeftAt = Number.NEGATIVE_INFINITY;

const glowFor = (size: number) => {
  const progress = Math.min(1, Math.max(0, (size - GLOW_SMALL.size) / (GLOW_LARGE.size - GLOW_SMALL.size)));

  return {
    blur: GLOW_SMALL.blur + (GLOW_LARGE.blur - GLOW_SMALL.blur) * progress,
    width: GLOW_SMALL.width + (GLOW_LARGE.width - GLOW_SMALL.width) * progress,
  };
};

/** The Soren logo's ellipse in a glow, turning while the assistant works. */
const AiAssistantMark = ({
  size = 32,
  color = "text.primary",
  isWorking = false,
  isBusy = false,
  isBreathing = false,
  restShape = "ellipse",
}: AiAssistantMarkProps) => {
  const id = useId();
  const isReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const svgRef = useRef<SVGSVGElement>(null);
  const moverRef = useRef<SVGGElement>(null);
  // Negative delay: every working mark turns in phase with the others.
  const [phaseDelay] = useState(() => `-${Math.round(performance.now() % CYCLE_MS)}ms`);
  const [isSettling, setIsSettling] = useState(false);
  const [settlingFrom, setSettlingFrom] = useState<"breath" | "turn">("turn");
  // Started working while mounted: the turn starts from the rest pose, not mid-phase.
  const [isEntering, setIsEntering] = useState(false);
  const [wasWorking, setWasWorking] = useState(isWorking);
  const [wasBreathing, setWasBreathing] = useState(isBreathing);

  // Set during render, not in an effect, so the turn is still running when the settle reads its pose.
  if (wasWorking !== isWorking) {
    setWasWorking(isWorking);
    setIsEntering(isWorking);
    setIsSettling(!(isWorking || isReducedMotion));
    setSettlingFrom("turn");
  }

  if (wasBreathing !== isBreathing) {
    setWasBreathing(isBreathing);

    if (!(isBreathing || isWorking || isReducedMotion)) {
      setIsSettling(true);
      setSettlingFrom("breath");
    }
  }

  const isTurning = (isWorking || (isSettling && settlingFrom === "turn")) && !isReducedMotion;
  const isBreathingNow = !(isWorking || isReducedMotion) && (isSettling ? settlingFrom === "breath" : isBreathing);
  const isGliding = (isTurning || isBusy) && !isReducedMotion;
  const restPose = restShape === "circle" ? CIRCLE : REST;

  // Layout effect, so this cleanup runs before the next mark's mount effect in the same commit.
  useLayoutEffect(() => {
    if (!isWorking) {
      return;
    }

    return () => {
      workingMarkLeftAt = performance.now();
    };
  }, [isWorking]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: on mount only, when a hand-over can happen
  useLayoutEffect(() => {
    if (!(isWorking || isReducedMotion) && performance.now() - workingMarkLeftAt < HANDOVER_MS) {
      setIsSettling(true);
      setSettlingFrom("turn");
    }
  }, []);

  useLayoutEffect(() => {
    const svg = svgRef.current;

    if (!(svg && typeof svg.pauseAnimations === "function")) {
      return;
    }

    if (isGliding) {
      svg.unpauseAnimations();
    } else {
      svg.pauseAnimations();
    }
  }, [isGliding]);

  useEffect(() => {
    const mover = moverRef.current;

    if (!isSettling) {
      return;
    }

    if (!(mover && typeof mover.animate === "function")) {
      setIsSettling(false);
      return;
    }

    const turnPose = getComputedStyle(mover).transform;
    mover.style.animation = "none";

    const home = mover.animate([{ transform: turnPose }, { transform: restPose }], {
      duration: SETTLE_MS,
      easing: SETTLE_EASE,
      fill: "forwards",
    });

    home.onfinish = () => setIsSettling(false);

    return () => {
      home.cancel();
      mover.style.animation = "";
    };
  }, [isSettling, restPose]);

  const glow = glowFor(size);

  return (
    <Box
      component="svg"
      ref={svgRef}
      aria-hidden
      viewBox={`0 0 ${SOREN_MARK_VIEWBOX.width} ${SOREN_MARK_VIEWBOX.height}`}
      sx={{
        "@keyframes aiAssistantMarkBreath": {
          "0%, 100%": { transform: REST },
          "25%": { transform: `rotate(${ELLIPSE.tilt + 8}deg) scale(0.8, 1.25)` },
          "38%": { transform: `rotate(${ELLIPSE.tilt + 6}deg) scale(0.75, 1.34)` },
          "62%": { transform: `rotate(${ELLIPSE.tilt - 7}deg) scale(0.95, 1.05)` },
          "80%": { transform: REST },
        },
        "@keyframes aiAssistantMarkStretch": {
          "0%, 48%, 100%": { transform: CIRCLE },
          "60%": { transform: `rotate(${ELLIPSE.tilt - 4}deg) scale(1.04, 0.96)` },
          "66%, 70%": { transform: REST },
          "84%": { transform: CIRCLE },
        },
        "@keyframes aiAssistantMarkTurn": {
          "0%": { transform: REST },
          "25%": { transform: `rotate(${ELLIPSE.tilt + 90}deg) scale(0.72, 1.05)` },
          "50%": { transform: `rotate(${ELLIPSE.tilt + 180}deg) scale(0.86, 0.66)` },
          "75%": { transform: `rotate(${ELLIPSE.tilt + 270}deg) scale(0.7, 0.95)` },
          "100%": { transform: `rotate(${ELLIPSE.tilt + 360}deg) scale(1, 1)` },
        },
        color,
        display: "block",
        flexShrink: 0,
        height: size,
        overflow: "visible",
        width: size,
      }}
    >
      <defs>
        <filter id={`${id}blur`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation={glow.blur} />
        </filter>
        <linearGradient id={`${id}glow`} x1="0" y1="0" x2="1" y2="1">
          {assistantGlowStops.map(({ color, offset }) => (
            <stop key={offset} offset={offset} stopColor={color} />
          ))}
          {!isReducedMotion && (
            <animateTransform
              attributeName="gradientTransform"
              type="rotate"
              values="0 .5 .5;360 .5 .5"
              dur={`${GLOW_TURN_S}s`}
              repeatCount="indefinite"
            />
          )}
        </linearGradient>
      </defs>
      <Box
        component="g"
        ref={moverRef}
        sx={{
          animation: isTurning
            ? `aiAssistantMarkTurn ${CYCLE_MS}ms ${TURN_EASE} ${isEntering ? "0ms" : phaseDelay} infinite`
            : isBreathingNow
              ? restShape === "circle"
                ? `aiAssistantMarkStretch ${STRETCH_MS}ms ${BREATH_EASE} infinite`
                : `aiAssistantMarkBreath ${BREATH_MS}ms ${BREATH_EASE} infinite`
              : "none",
          transform: restPose,
          transformBox: "fill-box",
          transformOrigin: "center",
        }}
      >
        {/* Under the filled ellipse, so only the outer half of the blurred stroke shows. */}
        <ellipse
          cx={ELLIPSE.cx}
          cy={ELLIPSE.cy}
          rx={ELLIPSE.rx}
          ry={ELLIPSE.ry}
          fill="none"
          stroke={`url(#${id}glow)`}
          strokeWidth={glow.width}
          filter={`url(#${id}blur)`}
        />
        <ellipse cx={ELLIPSE.cx} cy={ELLIPSE.cy} rx={ELLIPSE.rx} ry={ELLIPSE.ry} fill="currentColor" />
      </Box>
    </Box>
  );
};

export default AiAssistantMark;
