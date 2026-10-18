/** Width of the docked panel, in px */
export const AI_ASSISTANT_DOCKED_WIDTH = 420;

/** Gap between the docked panel and the screen edges, in px */
export const AI_ASSISTANT_DOCKED_INSET = 12;

/** Corner radius of the docked panel, in px, shared with the surfaces docked beside it */
export const AI_ASSISTANT_DOCKED_RADIUS = 16;

/** Shadow of the docked panel, shared with the surfaces docked beside it */
export const AI_ASSISTANT_DOCKED_SHADOW = "0 4px 24px rgba(0, 0, 0, 0.06)";

/** Room the host layout leaves for the docked panel (e.g. Backoffice `asideWidth`) */
export const AI_ASSISTANT_DOCKED_SPACE = AI_ASSISTANT_DOCKED_WIDTH + 2 * AI_ASSISTANT_DOCKED_INSET;

/** Glow colours of the mark and of the pill's working outline, from the head of the light to its tail */
export const AI_ASSISTANT_GLOW_COLORS = ["#FF5A1F", "#FFB547", "#FFC4A3", "#FF7EB3"] as const;
