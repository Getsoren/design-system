import { useCallback, useRef, useState } from "react";

// Width of the fade applied on a scrollable edge
const FADE = 24;

/**
 * Fades the edges of a horizontally scrollable container to hint at hidden content.
 * Returns props to spread on the scroll container: a ref, an onScroll handler and a
 * dynamic `maskImage` that fades only the edges that still overflow (right when there
 * is more to reveal, left once scrolled). Pure CSS mask, so it is background-agnostic.
 */
const useScrollFadeMask = <T extends HTMLElement = HTMLDivElement>() => {
  const [edges, setEdges] = useState({ left: false, right: false });
  const nodeRef = useRef<T | null>(null);
  const observerRef = useRef<ResizeObserver | null>(null);

  const updateEdges = useCallback(() => {
    const el = nodeRef.current;
    if (!el) {
      return;
    }
    const { clientWidth, scrollLeft, scrollWidth } = el;
    const maxScroll = scrollWidth - clientWidth;
    // Bail on identical values: the observers fire liberally and each new object would re-render.
    setEdges((prev) => {
      const next = { left: scrollLeft > 1, right: scrollLeft < maxScroll - 1 };
      return prev.left === next.left && prev.right === next.right ? prev : next;
    });
  }, []);

  /**
   * Callback ref rather than a mount effect: consumers often render `null` while their data loads,
   * so the container can appear well after the hook has mounted — a mount effect would find no node
   * and never run again, leaving the mask off until the first scroll. Attaching here runs whenever
   * the node actually (un)mounts. The observer also watches the first child (the content row):
   * content can start overflowing when children mount or grow without the container itself resizing.
   */
  const ref = useCallback(
    (node: T | null) => {
      observerRef.current?.disconnect();
      observerRef.current = null;
      nodeRef.current = node;

      if (!node) {
        return;
      }

      const observer = new ResizeObserver(updateEdges);
      observer.observe(node);
      if (node.firstElementChild) {
        observer.observe(node.firstElementChild);
      }
      observerRef.current = observer;
      updateEdges();
    },
    [updateEdges],
  );

  const leftStop = edges.left ? `transparent 0, black ${FADE}px` : "black 0";
  const rightStop = edges.right ? `black calc(100% - ${FADE}px), transparent 100%` : "black 100%";
  const maskImage = `linear-gradient(to right, ${leftStop}, ${rightStop})`;

  return {
    maskImage,
    onScroll: updateEdges,
    ref,
  };
};

export default useScrollFadeMask;
