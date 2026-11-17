import { type RefObject, useEffect, useState } from "react";

// Distance from the bottom (px) under which the container counts as fully scrolled
const SCROLL_END_TOLERANCE = 8;

/**
 * Whether more content lies below the fold of a scroll container, kept up to date as it resizes or scrolls: what a
 * fade or a "see more" arrow at its bottom hangs on.
 */
const useHasMoreBelow = (containerRef: RefObject<HTMLElement | null>): boolean => {
  const [hasMoreBelow, setHasMoreBelow] = useState(false);

  /**
   * Measured once the container is mounted, then on every resize of the container or of its content (results
   * arriving, a section opening: the scroll height changes without any scroll) and on every scroll. Runs again only
   * for a new container: mount the hook's owner with a `key` for that
   */
  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const update = () => setHasMoreBelow(container.scrollHeight - container.scrollTop - container.clientHeight > SCROLL_END_TOLERANCE);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(container);

    if (container.firstElementChild) {
      observer.observe(container.firstElementChild);
    }

    container.addEventListener("scroll", update, { passive: true });

    return () => {
      observer.disconnect();
      container.removeEventListener("scroll", update);
    };
  }, [containerRef]);

  return hasMoreBelow;
};

export default useHasMoreBelow;
