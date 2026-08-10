import Box from "@mui/material/Box";
import Portal from "@mui/material/Portal";
import { alpha } from "@mui/material/styles";
import { useCallback, useEffect, useState } from "react";
import type { AiAssistantSpotlightProps } from "@/components/DataDisplay/AiAssistant/types";

/** Breathing room around the anchor, so the highlight breathes a little */
const SPOTLIGHT_PADDING = 6;

/** The anchor can move without firing resize/scroll (animations, layout) — light poll */
const TRACK_INTERVAL_MS = 200;

/**
 * The assistant's visual language for POINTING at things (host apps use it for
 * contextual nudges and guided tours): dims the whole screen except a window around
 * `anchor`, crowned by the "magic AI" shine — a comet orbiting a constant luminous
 * ring — and a breathing aura, all in the orb's brand orange. Non-blocking by default
 * (pointer-events none, the host app stays fully usable); `blocking` adds a
 * full-screen click shield for guided walks. Purely presentational: consumers own
 * anchor resolution, auto-scroll and interaction semantics.
 */
const AiAssistantSpotlight = ({
  anchor,
  blocking = false,
  onWindowClick,
  dataTestId = "assistantSpotlight",
}: AiAssistantSpotlightProps) => {
  const [rect, setRect] = useState(() => anchor.getBoundingClientRect());

  const update = useCallback(() => setRect(anchor.getBoundingClientRect()), [anchor]);

  /**
   * Track the anchor: resize/scroll for the obvious moves, plus a light interval —
   * poppers grow, layouts settle and steps swap the anchor without firing either event.
   */
  useEffect(() => {
    update();
    const interval = window.setInterval(update, TRACK_INTERVAL_MS);

    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, true);

    return () => {
      window.clearInterval(interval);
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update, true);
    };
  }, [update]);

  return (
    <Portal>
      {/* Blocking only: invisible click-shield over the WHOLE app (the dim itself is
          the window's shadow) — swallows every interaction outside the window */}
      {blocking && (
        <Box data-testid={`${dataTestId}Overlay`} sx={(theme) => ({ inset: 0, position: "fixed", zIndex: theme.zIndex.snackbar - 1 })} />
      )}
      {/* The lit window. Blocking: clicking it is the acknowledge gesture — the click
          stops HERE, the element underneath is shown, never operated. Non-blocking:
          the window lets every click through. */}
      <Box
        data-testid={dataTestId}
        onClick={blocking ? onWindowClick : undefined}
        sx={(theme) => ({
          borderRadius: 2,
          boxShadow: `0 0 0 200vmax ${alpha(theme.palette.common.black, 0.55)}`,
          cursor: blocking ? "pointer" : undefined,
          height: rect.height + SPOTLIGHT_PADDING * 2,
          left: rect.left - SPOTLIGHT_PADDING,
          pointerEvents: blocking ? "auto" : "none",
          position: "fixed",
          top: rect.top - SPOTLIGHT_PADDING,
          transition: "all 0.3s ease",
          width: rect.width + SPOTLIGHT_PADDING * 2,
          // Right under the assistant bubble (snackbar level), above modal backdrops
          zIndex: theme.zIndex.snackbar - 1,
        })}
      />
      {/* Breathing aura emanating from the ring: layered soft shadows swelling and
          settling — same visual language as the Panel's busy aura and the Fab's halo. */}
      <Box
        aria-hidden
        sx={(theme) => ({
          "@keyframes aiAssistantSpotlightAura": {
            "0%, 100%": {
              boxShadow: "0 0 22px 5px rgba(255, 79, 18, 0.3), 0 0 60px 22px rgba(255, 79, 18, 0.14)",
            },
            "50%": {
              boxShadow: "0 0 38px 12px rgba(255, 79, 18, 0.44), 0 0 95px 36px rgba(255, 79, 18, 0.22)",
            },
          },
          // Doubled selector so this a11y override beats the base rule regardless of emission order
          "@media (prefers-reduced-motion: reduce)": { "&&": { animation: "none" } },
          animation: "aiAssistantSpotlightAura 3.4s ease-in-out infinite",
          borderRadius: 2.5,
          boxShadow: "0 0 22px 5px rgba(255, 79, 18, 0.3), 0 0 60px 22px rgba(255, 79, 18, 0.14)",
          height: rect.height + SPOTLIGHT_PADDING * 2,
          left: rect.left - SPOTLIGHT_PADDING,
          pointerEvents: "none",
          position: "fixed",
          top: rect.top - SPOTLIGHT_PADDING,
          width: rect.width + SPOTLIGHT_PADDING * 2,
          zIndex: theme.zIndex.snackbar - 1,
        })}
      />
      {/* The "magic AI" shine: an animated luminous border hugging the lit window —
          a comet with a long tail orbiting a faint CONSTANT ring (the border is always
          fully drawn, so the sweep reads as light travelling on it, never as a shape
          being cut). Pure CSS, halo + crisp layers. */}
      {[
        // The soft halo behind…
        { blur: 7, ringOpacity: 0.7, ringWidth: 7 },
        // …and the crisp shine on top
        { blur: 0, ringOpacity: 1, ringWidth: 2.5 },
      ].map((layer) => (
        <Box
          key={layer.ringWidth}
          aria-hidden
          sx={(theme) => ({
            "@keyframes aiAssistantSpotlightShine": { to: { transform: "rotate(1turn)" } },
            // Doubled selector so this a11y override beats the base rule regardless of emission order
            "@media (prefers-reduced-motion: reduce)": { "&&::before": { animation: "none" } },
            "&::before": {
              animation: "aiAssistantSpotlightShine 4.2s linear infinite",
              // A comet with a LONG progressive tail and a soft head — abrupt ends read
              // as the ring being cut while it orbits
              background:
                "conic-gradient(transparent 0deg, rgba(255, 79, 18, 0.05) 70deg, rgba(255, 79, 18, 0.16) 150deg, rgba(255, 79, 18, 0.42) 215deg, #FF4F12 252deg, #FFC9A8 270deg, rgba(255, 201, 168, 0.4) 285deg, transparent 310deg, transparent 360deg)",
              content: '""',
              inset: "-75%",
              position: "absolute",
            },
            // Faint CONSTANT ring under the comet
            backgroundColor: "rgba(255, 79, 18, 0.16)",
            borderRadius: 2.5,
            filter: layer.blur ? `blur(${layer.blur}px)` : undefined,
            height: rect.height + SPOTLIGHT_PADDING * 2,
            left: rect.left - SPOTLIGHT_PADDING,
            // Ring mask (the `mask` SHORTHAND — content-box is invalid inside mask-image):
            // only `padding` px of the spinning gradient stays visible
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            opacity: layer.ringOpacity,
            overflow: "hidden",
            padding: `${layer.ringWidth}px`,
            pointerEvents: "none",
            position: "fixed",
            top: rect.top - SPOTLIGHT_PADDING,
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            width: rect.width + SPOTLIGHT_PADDING * 2,
            zIndex: theme.zIndex.snackbar - 1,
          })}
        />
      ))}
    </Portal>
  );
};

export default AiAssistantSpotlight;
