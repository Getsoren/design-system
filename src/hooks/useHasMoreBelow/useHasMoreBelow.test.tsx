import { act, fireEvent, render } from "@testing-library/react";
import { useRef } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import useHasMoreBelow from "./useHasMoreBelow";

const Pane = () => {
  const ref = useRef<HTMLDivElement>(null);
  const hasMoreBelow = useHasMoreBelow(ref);

  return (
    <div ref={ref} data-testid="pane" data-more={hasMoreBelow}>
      <div />
    </div>
  );
};

/**
 * jsdom lays nothing out: the pane's sizes are set by hand
 */
const sizePane = (pane: HTMLElement, sizes: { scrollHeight: number; scrollTop: number; clientHeight: number }) => {
  for (const [key, value] of Object.entries(sizes)) {
    Object.defineProperty(pane, key, { configurable: true, value });
  }
};

describe("useHasMoreBelow", () => {
  beforeEach(() => {
    vi.stubGlobal(
      "ResizeObserver",
      class {
        observe = vi.fn();
        disconnect = vi.fn();
      },
    );
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("tells that content lies below the fold, until the container is scrolled to its end", () => {
    const { getByTestId } = render(<Pane />);
    const pane = getByTestId("pane");

    expect(pane).toHaveAttribute("data-more", "false");

    sizePane(pane, { clientHeight: 300, scrollHeight: 900, scrollTop: 0 });
    act(() => {
      fireEvent.scroll(pane);
    });
    expect(pane).toHaveAttribute("data-more", "true");

    sizePane(pane, { clientHeight: 300, scrollHeight: 900, scrollTop: 596 });
    act(() => {
      fireEvent.scroll(pane);
    });
    expect(pane).toHaveAttribute("data-more", "false");
  });
});
