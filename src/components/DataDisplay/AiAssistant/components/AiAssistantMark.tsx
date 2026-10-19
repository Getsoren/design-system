import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import type { AiAssistantMarkProps } from "@/components/DataDisplay/AiAssistant/types";
import { assistantGlowStops } from "@/components/DataDisplay/AiAssistant/utils/gradient";
import { SOREN_MARK_VIEWBOX } from "@/constants/sorenLogo";

const ELLIPSE = { cx: 154.5, cy: 156.5, rx: 170, ry: 95, tilt: -44 } as const;
const REST = `rotate(${ELLIPSE.tilt}deg) scale(1, 1)`;
const CYCLE_MS = 2800;
const TURN_EASE = "cubic-bezier(0.37, 0, 0.63, 1)";
const SETTLE_MS = 640;
const SETTLE_EASE = "cubic-bezier(0.2, 0, 0, 1)";
const HANDOVER_MS = 120;

// Each satellite has its own orbit and pace, so the two never move in step.
const SATELLITES = [
  { a: 232, b: 72, radius: 28, roundMs: 2100, tilt: -22 },
  { a: 275, b: 104, radius: 20, roundMs: 3300, tilt: 16 },
] as const;

// An orbit is two swings, across and up and down, a quarter of a round apart.
const ORBIT_KEYFRAMES = Object.fromEntries(
  SATELLITES.flatMap(({ a, b }, index) => [
    [`@keyframes aiAssistantMarkAcross${index}`, { from: { transform: `translateX(${-a}px)` }, to: { transform: `translateX(${a}px)` } }],
    [`@keyframes aiAssistantMarkUpDown${index}`, { from: { transform: `translateY(${-b}px)` }, to: { transform: `translateY(${b}px)` } }],
  ]),
);

const GLOW_TURN_S = 4.2;
const GLOW_SMALL = { blur: 20, size: 16, width: 70 } as const;
const GLOW_LARGE = { blur: 9, size: 96, width: 22 } as const;

// Shared by all marks: a resting mark mounted right after a working one stops or unmounts takes over its turn.
let workingMarkLeftAt = Number.NEGATIVE_INFINITY;

/** Negative delay that puts an animation of this period in phase with every other mark. */
const phaseOf = (periodMs: number, shiftMs = 0) => `-${Math.round((performance.now() + shiftMs) % periodMs)}ms`;

const glowFor = (size: number) => {
  const progress = Math.min(1, Math.max(0, (size - GLOW_SMALL.size) / (GLOW_LARGE.size - GLOW_SMALL.size)));

  return {
    blur: GLOW_SMALL.blur + (GLOW_LARGE.blur - GLOW_SMALL.blur) * progress,
    width: GLOW_SMALL.width + (GLOW_LARGE.width - GLOW_SMALL.width) * progress,
  };
};

interface SatelliteProps {
  index: number;
  radius: number;
  roundMs: number;
  tilt: number;
  delays: { across: string; upDown: string };
}

const Satellite = ({ index, radius, roundMs, tilt, delays }: SatelliteProps) => (
  <g transform={`rotate(${tilt} ${ELLIPSE.cx} ${ELLIPSE.cy})`}>
    <Box
      component="g"
      sx={{ animation: `aiAssistantMarkAcross${index} ${roundMs / 2}ms ${TURN_EASE} ${delays.across} infinite alternate` }}
    >
      <Box
        component="circle"
        cx={ELLIPSE.cx}
        cy={ELLIPSE.cy}
        r={radius}
        fill="currentColor"
        sx={{ animation: `aiAssistantMarkUpDown${index} ${roundMs / 2}ms ${TURN_EASE} ${delays.upDown} infinite alternate` }}
      />
    </Box>
  </g>
);

/** The Soren logo's ellipse in a glow, turning with two satellites while the assistant works. */
const AiAssistantMark = ({ size = 32, color = "text.primary", isWorking = false }: AiAssistantMarkProps) => {
  const id = useId();
  const isReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const svgRef = useRef<SVGSVGElement>(null);
  const moverRef = useRef<SVGGElement>(null);
  const satellitesBehindRef = useRef<SVGGElement>(null);
  const satellitesInFrontRef = useRef<SVGGElement>(null);
  const [phaseDelay] = useState(() => phaseOf(CYCLE_MS));
  const [orbitDelays] = useState(() =>
    SATELLITES.map(({ roundMs }) => ({ across: phaseOf(roundMs), upDown: phaseOf(roundMs, roundMs / 4) })),
  );
  const [isSettling, setIsSettling] = useState(false);
  // Started working while mounted: the turn starts from the rest pose, not mid-phase.
  const [isEntering, setIsEntering] = useState(false);
  const [wasWorking, setWasWorking] = useState(isWorking);
  // Read by the mount effect only: whether this mark appeared at rest.
  const isRestingAtMountRef = useRef(!(isWorking || isReducedMotion));

  // Set during render, not in an effect, so the turn is still running when the settle reads its pose.
  if (wasWorking !== isWorking) {
    setWasWorking(isWorking);
    setIsEntering(isWorking);
    setIsSettling(!(isWorking || isReducedMotion));
  }

  const isTurning = (isWorking || isSettling) && !isReducedMotion;

  // Layout effect, so this cleanup runs before the next mark's mount effect in the same commit.
  useLayoutEffect(() => {
    if (!isWorking) {
      return;
    }

    return () => {
      workingMarkLeftAt = performance.now();
    };
  }, [isWorking]);

  // On mount only: a mark appearing at rest right after a working one left takes its turn over.
  useLayoutEffect(() => {
    if (isRestingAtMountRef.current && performance.now() - workingMarkLeftAt < HANDOVER_MS) {
      setIsSettling(true);
    }
  }, []);

  useLayoutEffect(() => {
    const svg = svgRef.current;

    if (!(svg && typeof svg.pauseAnimations === "function")) {
      return;
    }

    // The glow's colours glide only while the mark turns.
    if (isTurning) {
      svg.unpauseAnimations();
    } else {
      svg.pauseAnimations();
    }
  }, [isTurning]);

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

    const home = mover.animate([{ transform: turnPose }, { transform: REST }], {
      duration: SETTLE_MS,
      easing: SETTLE_EASE,
      fill: "forwards",
    });
    // The satellites slip away first, as the ellipse heads home.
    const leaving = [satellitesBehindRef.current, satellitesInFrontRef.current].map((satellites) =>
      satellites?.animate([{ opacity: 1 }, { opacity: 0 }], { duration: SETTLE_MS / 2, easing: SETTLE_EASE, fill: "forwards" }),
    );

    home.onfinish = () => setIsSettling(false);

    return () => {
      home.cancel();
      for (const animation of leaving) {
        animation?.cancel();
      }
      mover.style.animation = "";
    };
  }, [isSettling]);

  const glow = glowFor(size);

  return (
    <Box
      component="svg"
      ref={svgRef}
      aria-hidden
      viewBox={`0 0 ${SOREN_MARK_VIEWBOX.width} ${SOREN_MARK_VIEWBOX.height}`}
      sx={{
        "@keyframes aiAssistantMarkTurn": {
          "0%": { transform: REST },
          "25%": { transform: `rotate(${ELLIPSE.tilt + 90}deg) scale(0.72, 1.05)` },
          "50%": { transform: `rotate(${ELLIPSE.tilt + 180}deg) scale(0.86, 0.66)` },
          "75%": { transform: `rotate(${ELLIPSE.tilt + 270}deg) scale(0.7, 0.95)` },
          "100%": { transform: `rotate(${ELLIPSE.tilt + 360}deg) scale(1, 1)` },
        },
        ...ORBIT_KEYFRAMES,
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
        {/* The front half of each orbit, below its tilted axis: where a satellite passes over the ellipse. */}
        {SATELLITES.map(({ tilt }, index) => (
          <mask key={tilt} id={`${id}front${index}`} maskUnits="userSpaceOnUse" x={-300} y={-300} width={912} height={913}>
            <rect x={-300} y={ELLIPSE.cy} width={912} height={500} fill="white" transform={`rotate(${tilt} ${ELLIPSE.cx} ${ELLIPSE.cy})`} />
          </mask>
        ))}
      </defs>
      {isTurning && (
        <g ref={satellitesBehindRef}>
          {SATELLITES.map(({ tilt, radius, roundMs }, index) => (
            <Satellite key={tilt} index={index} radius={radius} roundMs={roundMs} tilt={tilt} delays={orbitDelays[index]} />
          ))}
        </g>
      )}
      <Box
        component="g"
        ref={moverRef}
        sx={{
          animation: isTurning ? `aiAssistantMarkTurn ${CYCLE_MS}ms ${TURN_EASE} ${isEntering ? "0ms" : phaseDelay} infinite` : "none",
          transform: REST,
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
      {/* The same satellites again, seen only on the front half of their orbit: they pass behind, then in front. */}
      {isTurning && (
        <g ref={satellitesInFrontRef}>
          {SATELLITES.map(({ tilt, radius, roundMs }, index) => (
            <g key={tilt} mask={`url(#${id}front${index})`}>
              <Satellite index={index} radius={radius} roundMs={roundMs} tilt={tilt} delays={orbitDelays[index]} />
            </g>
          ))}
        </g>
      )}
    </Box>
  );
};

export default AiAssistantMark;
