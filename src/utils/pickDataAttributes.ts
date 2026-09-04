import type { DataAttributes } from "@/types/dataAttributes";

/**
 * Extracts the `data-*` entries of a props/config object, e.g. to forward analytics tags or test hooks
 * from a navigation item to the DOM node it renders while the other keys stay on the component.
 */
const pickDataAttributes = (source: object): DataAttributes =>
  Object.fromEntries(Object.entries(source).filter(([key]) => key.startsWith("data-"))) as DataAttributes;

export default pickDataAttributes;
