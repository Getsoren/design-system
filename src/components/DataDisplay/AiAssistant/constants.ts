/** Width of the docked panel, in px */
export const AI_ASSISTANT_DOCKED_WIDTH = 420;

/** Gap between the docked panel and the screen edges, in px */
export const AI_ASSISTANT_DOCKED_INSET = 12;

/** Shadow of the docked panel, shared with the surfaces docked beside it */
export const AI_ASSISTANT_DOCKED_SHADOW = "0 4px 24px rgba(0, 0, 0, 0.06)";

/** Gap between the floating surfaces (Fab, floating panel, nudge) and the screen edges, in px, from sm up */
export const AI_ASSISTANT_FLOATING_INSET = 24;

/** Same gap on phones, in px */
export const AI_ASSISTANT_FLOATING_INSET_XS = 16;

/** Height of the Fab pill, in px: the nudge sits above it and grows from its rounded end */
export const AI_ASSISTANT_FAB_HEIGHT = 44;

/** Shadow of the Fab at rest, then hovered */
export const AI_ASSISTANT_FAB_SHADOW = "0 4px 16px rgba(0, 0, 0, 0.1)";
export const AI_ASSISTANT_FAB_HOVER_SHADOW = "0 6px 24px rgba(0, 0, 0, 0.14)";

/** Gap between the docked panel and the page beside it, in px: the page's own padding does the rest */
export const AI_ASSISTANT_DOCKED_GAP = 4;

/** Room the host layout leaves for the docked panel (e.g. Backoffice `asideWidth`) */
export const AI_ASSISTANT_DOCKED_SPACE = AI_ASSISTANT_DOCKED_WIDTH + AI_ASSISTANT_DOCKED_INSET + AI_ASSISTANT_DOCKED_GAP;

/** Diameter of the avatar, in px: the Fab pill, the thread and the thinking row line up on it */
export const AI_ASSISTANT_AVATAR_SIZE = 28;

/** The assistant's light, from its head to its tail: its mark and its avatar, and what the host app paints with it (its name) */
export const AI_ASSISTANT_GLOW_COLORS = ["#FF5A1F", "#FFB547", "#FFC4A3", "#FF7EB3"] as const;
