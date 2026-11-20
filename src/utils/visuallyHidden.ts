/**
 * Out of sight but still focusable, unlike `hidden`: the keyboard and screen readers reach the element, e.g. a file
 * input drawn by its label.
 */
export const VISUALLY_HIDDEN = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: 1,
  margin: -1,
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  whiteSpace: "nowrap",
  width: 1,
} as const;
