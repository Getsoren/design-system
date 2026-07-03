import { type PointerEvent as ReactPointerEvent, useCallback, useRef, useState } from "react";

interface UseBarDragOptions {
  /** Called on pointer-up with the horizontal drag distance in px (only when it actually moved). */
  onCommit: (deltaPx: number) => void;
  disabled?: boolean;
}

interface UseBarDragResult {
  /** Live horizontal delta (px) while dragging, 0 otherwise — add it to the bar width for a live preview. */
  deltaPx: number;
  dragging: boolean;
  /** Spread onto the right-edge drag handle element. */
  handleProps: {
    onPointerDown: (event: ReactPointerEvent) => void;
    onPointerMove: (event: ReactPointerEvent) => void;
    onPointerUp: (event: ReactPointerEvent) => void;
    onPointerCancel: (event: ReactPointerEvent) => void;
  };
}

/**
 * Native pointer-events drag for resizing a bar's right edge. Uses setPointerCapture so the gesture
 * keeps tracking even when the pointer leaves the thin handle — no third-party drag lib needed.
 */
export const useBarDrag = ({ onCommit, disabled }: UseBarDragOptions): UseBarDragResult => {
  const [deltaPx, setDeltaPx] = useState(0);
  const [dragging, setDragging] = useState(false);
  const startXRef = useRef(0);

  const onPointerDown = useCallback(
    (event: ReactPointerEvent) => {
      if (disabled) {
        return;
      }
      // Stop the bar's onClick from firing when the intent is to resize.
      event.stopPropagation();
      event.preventDefault();
      startXRef.current = event.clientX;
      setDragging(true);
      event.currentTarget.setPointerCapture(event.pointerId);
    },
    [disabled],
  );

  const onPointerMove = useCallback(
    (event: ReactPointerEvent) => {
      if (!dragging) {
        return;
      }
      setDeltaPx(event.clientX - startXRef.current);
    },
    [dragging],
  );

  const end = useCallback(
    (event: ReactPointerEvent) => {
      if (!dragging) {
        return;
      }
      setDragging(false);
      const delta = event.clientX - startXRef.current;
      setDeltaPx(0);
      // Ignore micro-movements so a plain click on the handle isn't treated as a resize.
      if (Math.abs(delta) > 2) {
        onCommit(delta);
      }
    },
    [dragging, onCommit],
  );

  return {
    deltaPx: dragging ? deltaPx : 0,
    dragging,
    handleProps: {
      onPointerCancel: end,
      onPointerDown,
      onPointerMove,
      onPointerUp: end,
    },
  };
};
