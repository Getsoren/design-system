/**
 * `data-*` attributes forwarded verbatim to a DOM element: analytics tags (e.g. `data-amp-track-feature`),
 * test hooks, onboarding anchors. Only `data-` keys are accepted, so a slot can carry tracking metadata
 * without being able to override handlers, styles or accessibility attributes.
 */
export type DataAttributes = Record<`data-${string}`, string | number | boolean | undefined>;
