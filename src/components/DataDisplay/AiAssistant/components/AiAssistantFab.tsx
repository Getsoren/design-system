import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import AiAssistantAvatar from "@/components/DataDisplay/AiAssistant/components/AiAssistantAvatar";
import AiAssistantMark from "@/components/DataDisplay/AiAssistant/components/AiAssistantMark";
import type { AiAssistantFabProps } from "@/components/DataDisplay/AiAssistant/types";
import { assistantGlowTrail, assistantOrbGradient } from "@/components/DataDisplay/AiAssistant/utils/gradient";
import CloseIcon from "@/components/DataDisplay/Icons/CloseIcon";
import NumberBadge from "@/components/DataDisplay/NumberBadge/NumberBadge";

const BADGE_SIZE = 20;
const DOT_SIZE = 10;
const PILL_HEIGHT = 44;
const PILL_AVATAR_SIZE = 28;
// Even padding around the avatar, so the folded pill is a circle.
const PILL_INSET = (PILL_HEIGHT - PILL_AVATAR_SIZE) / 2;
const PILL_EASING = "cubic-bezier(0.2, 0, 0, 1)";

interface FabBadgeProps {
  badge: AiAssistantFabProps["badge"];
  dataTestId: string;
}

const FabBadge = ({ badge, dataTestId }: FabBadgeProps) => {
  if (typeof badge === "number" && badge > 0) {
    return (
      <Box data-testid={`${dataTestId}Badge`} sx={{ position: "absolute", right: -4, top: -4 }}>
        <NumberBadge width={BADGE_SIZE} height={BADGE_SIZE} sx={{ boxShadow: "none" }}>
          {badge > 9 ? "9+" : badge}
        </NumberBadge>
      </Box>
    );
  }

  if (badge === true) {
    return (
      <Box
        data-testid={`${dataTestId}Dot`}
        sx={{
          backgroundColor: "primary.main",
          border: 2,
          borderColor: "background.paper",
          borderRadius: "50%",
          height: DOT_SIZE,
          position: "absolute",
          right: 0,
          top: 0,
          width: DOT_SIZE,
        }}
      />
    );
  }

  return null;
};

/** A rotating conic gradient, masked to a ring along the pill's outline. */
const WorkingOutline = ({ dataTestId }: { dataTestId: string }) => (
  <Box
    aria-hidden
    data-testid={`${dataTestId}Working`}
    sx={{
      "@keyframes aiAssistantFabOutline": {
        from: { transform: "rotate(0deg)" },
        to: { transform: "rotate(360deg)" },
      },
      "@media (prefers-reduced-motion: reduce)": {
        "& > *": { animation: "none" },
      },
      borderRadius: PILL_HEIGHT / 2,
      inset: -1,
      mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
      maskComposite: "exclude",
      overflow: "hidden",
      padding: "1.5px",
      pointerEvents: "none",
      position: "absolute",
      WebkitMaskComposite: "xor",
    }}
  >
    <Box
      sx={{
        animation: "aiAssistantFabOutline 2.8s linear infinite",
        aspectRatio: "1",
        background: assistantGlowTrail,
        left: "50%",
        marginLeft: "-60%",
        marginTop: "-60%",
        position: "absolute",
        top: "50%",
        width: "120%",
      }}
    />
  </Box>
);

const AiAssistantFabPill = ({
  open,
  onClick,
  label,
  badge,
  isWorking = false,
  dataTestId = "assistantFab",
  ...dataAttributes
}: Omit<AiAssistantFabProps, "tooltip">) => (
  <Fab
    {...dataAttributes}
    variant="extended"
    onClick={onClick}
    aria-label={label}
    data-testid={dataTestId}
    sx={{
      "@media (prefers-reduced-motion: reduce)": {
        "&&, && *": { transition: "none" },
      },
      "& .aiAssistantFabIcon": {
        display: "flex",
        gridArea: "1 / 1",
        transition: `transform 280ms ${PILL_EASING}, opacity 180ms ease`,
      },
      "& .aiAssistantFabIconClose": {
        opacity: open ? 1 : 0,
        transform: open ? "rotate(0deg) scale(1)" : "rotate(-90deg) scale(0.4)",
      },
      "& .aiAssistantFabIconMark": {
        opacity: open ? 0 : 1,
        transform: open ? "rotate(90deg) scale(0.4)" : "rotate(0deg) scale(1)",
      },
      "&:hover": { backgroundColor: "background.paper", boxShadow: "0 6px 24px rgba(0, 0, 0, 0.14)" },
      backgroundColor: "background.paper",
      border: 1,
      borderColor: "divider",
      borderRadius: PILL_HEIGHT / 2,
      bottom: 24,
      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
      color: "text.primary",
      height: PILL_HEIGHT,
      minWidth: PILL_HEIGHT,
      paddingLeft: `${PILL_INSET - 1}px`,
      paddingRight: open ? `${PILL_INSET - 1}px` : 2.25,
      position: "fixed",
      right: 24,
      textTransform: "none",
      transition: `padding 280ms ${PILL_EASING}, box-shadow 200ms ease`,
      zIndex: (theme) => theme.zIndex.snackbar,
    }}
  >
    <Box sx={{ display: "grid", placeItems: "center" }}>
      <Box className="aiAssistantFabIcon aiAssistantFabIconMark">
        <AiAssistantAvatar size={PILL_AVATAR_SIZE} isBusy={isWorking && !open} />
      </Box>
      <Box className="aiAssistantFabIcon aiAssistantFabIconClose">
        <CloseIcon />
      </Box>
    </Box>
    <Box
      sx={{
        marginLeft: open ? 0 : 1.25,
        maxWidth: open ? 0 : 240,
        opacity: open ? 0 : 1,
        overflow: "hidden",
        transition: `max-width 280ms ${PILL_EASING}, margin 280ms ${PILL_EASING}, opacity 180ms ease`,
        whiteSpace: "nowrap",
      }}
    >
      <Typography variant="body2" fontWeight={500} component="span">
        {label}
      </Typography>
    </Box>
    {!open && isWorking && <WorkingOutline dataTestId={dataTestId} />}
    {!open && <FabBadge badge={badge} dataTestId={dataTestId} />}
  </Fab>
);

const AiAssistantFab = ({ label, isWorking, tooltip, ...props }: AiAssistantFabProps) =>
  label ? <AiAssistantFabPill label={label} isWorking={isWorking} {...props} /> : <AiAssistantFabOrb tooltip={tooltip} {...props} />;

/**
 * The assistant's floating action button — a liquid orb: brand gradient flow (Soren orange
 * dissolving into black),
 * blob morph, breath and pulsing aura while idle; calm circle with a close glyph when
 * the panel is open. The animations live on a ::before layer so the hit-box never
 * moves (reliable clicks, stable e2e).
 */
const AiAssistantFabOrb = ({ open, onClick, tooltip, badge, dataTestId = "assistantFab", ...dataAttributes }: AiAssistantFabProps) => (
  <Tooltip title={tooltip} placement="left">
    <Fab
      {...dataAttributes}
      size="medium"
      onClick={onClick}
      data-testid={dataTestId}
      sx={{
        "@keyframes aiAssistantAura": {
          "0%": { boxShadow: "0 0 0 0 rgba(255, 79, 18, 0.45), 0 6px 22px rgba(255, 79, 18, 0.3)" },
          "70%": { boxShadow: "0 0 0 14px rgba(255, 79, 18, 0), 0 6px 26px rgba(255, 79, 18, 0.42)" },
          "100%": { boxShadow: "0 0 0 0 rgba(255, 79, 18, 0), 0 6px 22px rgba(255, 79, 18, 0.3)" },
        },
        /**
         * Liquid orb: subtle undulation (radii stay within 42-58%), but through 7
         * irregularly spaced keyframes — no even 25/50/75 grid — so the gentle morph
         * never reads as a metronome.
         */
        "@keyframes aiAssistantBlob": {
          "0%, 100%": { borderRadius: "58% 42% 55% 45% / 48% 56% 44% 52%" },
          "13%": { borderRadius: "46% 54% 57% 43% / 55% 45% 55% 45%" },
          "29%": { borderRadius: "55% 45% 43% 57% / 44% 53% 47% 56%" },
          "41%": { borderRadius: "43% 57% 52% 48% / 56% 44% 55% 45%" },
          "58%": { borderRadius: "56% 44% 46% 54% / 46% 56% 43% 54%" },
          "72%": { borderRadius: "47% 53% 56% 44% / 54% 46% 53% 47%" },
          "87%": { borderRadius: "53% 47% 44% 56% / 49% 55% 45% 55%" },
        },
        // Breathing halo (two layered soft glows swelling and settling) — the same aura
        // language as the onboarding nudge spotlight, scaled to the orb. Lives on its
        // own ::after layer: it must COMPOSE with the sonar wave above, and two
        // box-shadow animations on one element would override each other.
        "@keyframes aiAssistantBreath": {
          "0%, 100%": { boxShadow: "0 0 16px 4px rgba(255, 79, 18, 0.3), 0 0 44px 16px rgba(255, 79, 18, 0.14)" },
          "50%": { boxShadow: "0 0 28px 9px rgba(255, 79, 18, 0.44), 0 0 70px 26px rgba(255, 79, 18, 0.22)" },
        },
        // The gradient wanders diagonally through 4 corners instead of ping-ponging on one axis
        "@keyframes aiAssistantFlow": {
          "0%": { backgroundPosition: "0% 40%" },
          "27%": { backgroundPosition: "60% 90%" },
          "52%": { backgroundPosition: "100% 40%" },
          "78%": { backgroundPosition: "40% 0%" },
          "100%": { backgroundPosition: "0% 40%" },
        },
        // Gentle breath with a barely asymmetric squash — organic, but no visible roll
        "@keyframes aiAssistantWobble": {
          "0%, 100%": { transform: "scale(1)" },
          "21%": { transform: "scale(1.04, 0.99)" },
          "38%": { transform: "scale(0.99, 1.03)" },
          "57%": { transform: "scale(1.05, 1.01)" },
          "79%": { transform: "scale(1, 1.03)" },
        },
        // Doubled selector (&&) so this a11y override beats the base rules regardless of emission order
        "@media (prefers-reduced-motion: reduce)": {
          "&& .aiAssistantFabIcon": { transition: "none" },
          "&&::after": { animation: "none" },
          "&&::before": { animation: "none" },
        },
        /**
         * Mark <-> close morph: both icons are stacked in one grid cell and rotate 90°
         * clockwise together during the cross-fade.
         */
        "& .aiAssistantFabIcon": {
          display: "flex",
          gridArea: "1 / 1",
          transition: "transform 280ms cubic-bezier(0.2, 0, 0, 1), opacity 180ms ease",
        },
        "& .aiAssistantFabIconClose": {
          opacity: open ? 1 : 0,
          transform: open ? "rotate(0deg) scale(1)" : "rotate(-90deg) scale(0.4)",
        },
        "& .aiAssistantFabIconMark": {
          opacity: open ? 0 : 1,
          transform: open ? "rotate(90deg) scale(0.4)" : "rotate(0deg) scale(1)",
        },
        // The breathing halo layer, UNDER the orb: composes with (never replaces) the
        // sonar wave pulsing on ::before. Calm and gone while the panel is open.
        "&::after": {
          animation: open ? "none" : "aiAssistantBreath 3.4s ease-in-out infinite",
          borderRadius: "50%",
          boxShadow: open ? "none" : "0 0 16px 4px rgba(255, 79, 18, 0.3), 0 0 44px 16px rgba(255, 79, 18, 0.14)",
          content: '""',
          inset: 0,
          pointerEvents: "none",
          position: "absolute",
          zIndex: -2,
        },
        /**
         * The living orb is a ::before layer: it flows, undulates (blob morph) and
         * breathes while the button's own hit-box stays perfectly still. Amplitudes are
         * kept subtle; the aliveness comes from timing — mutually prime durations
         * (11.3 / 8.7 / 6.1 / 4.1s) so the composite motion realigns only after minutes,
         * and negative delays that scatter the phases from the very first frame.
         */
        "&::before": {
          animation: open
            ? "aiAssistantFlow 5s ease infinite"
            : "aiAssistantFlow 11.3s ease -5.3s infinite, aiAssistantBlob 8.7s ease-in-out -2.7s infinite, aiAssistantWobble 6.1s ease-in-out -1.9s infinite, aiAssistantAura 4.1s ease-out -1.3s infinite",
          background: ({ palette }) => assistantOrbGradient(palette.mode),
          backgroundSize: "320% 320%",
          borderRadius: "50%",
          content: '""',
          inset: 0,
          position: "absolute",
          transition: "border-radius 300ms ease",
          zIndex: -1,
        },
        "&:hover": {
          "&::before": { filter: "brightness(1.12)" },
          background: "transparent",
        },
        background: "transparent",
        bottom: 24,
        boxShadow: "none",
        color: "common.white",
        position: "fixed",
        right: 24,
        // Snackbar level (above modal backdrops): the assistant stays reachable while a
        // modal flow is open (e.g. the host app's command bar) — Panel and Nudge match
        zIndex: (theme) => theme.zIndex.snackbar,
      }}
    >
      {!open && <FabBadge badge={badge} dataTestId={dataTestId} />}
      <Box sx={{ display: "grid", placeItems: "center" }}>
        <Box className="aiAssistantFabIcon aiAssistantFabIconMark">
          <AiAssistantMark size={22} color="common.white" />
        </Box>
        <Box className="aiAssistantFabIcon aiAssistantFabIconClose">
          <CloseIcon />
        </Box>
      </Box>
    </Fab>
  </Tooltip>
);

export default AiAssistantFab;
