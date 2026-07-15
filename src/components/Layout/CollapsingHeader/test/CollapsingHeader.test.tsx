import { fireEvent, render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import CollapsingHeader from "../CollapsingHeader";

/** jsdom has no IntersectionObserver — the header only needs observe/disconnect to mount. */
class IntersectionObserverMock {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}

describe("Test <CollapsingHeader/>", () => {
  beforeEach(() => {
    vi.stubGlobal("IntersectionObserver", IntersectionObserverMock);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("renders the preview layout with the built-in English labels", () => {
    const { getByText } = render(
      <CollapsingHeader compactTitle="Compact title" fullTitle="Full title" onClose={vi.fn()} onOpenFullPage={vi.fn()} />,
    );
    expect(getByText("Compact title")).toBeInTheDocument();
    expect(getByText("Full title")).toBeInTheDocument();
    expect(getByText("Open full page")).toBeInTheDocument();
  });

  it("prefers the `labels` overrides over the built-in strings", () => {
    const { getByText, queryByText } = render(
      <CollapsingHeader
        compactTitle="Compact title"
        fullTitle="Full title"
        labels={{ openFullPage: "Ouvrir en pleine page" }}
        onClose={vi.fn()}
        onOpenFullPage={vi.fn()}
      />,
    );
    expect(getByText("Ouvrir en pleine page")).toBeInTheDocument();
    expect(queryByText("Open full page")).not.toBeInTheDocument();
  });

  it("hides the open-full-page link when `onOpenFullPage` is not provided", () => {
    const { queryByText } = render(<CollapsingHeader compactTitle="Compact title" fullTitle="Full title" onClose={vi.fn()} />);
    expect(queryByText("Open full page")).not.toBeInTheDocument();
  });

  it("calls `onOpenFullPage` when clicking the open-full-page link", () => {
    const onOpenFullPage = vi.fn();
    const { getByText } = render(
      <CollapsingHeader compactTitle="Compact title" fullTitle="Full title" onClose={vi.fn()} onOpenFullPage={onOpenFullPage} />,
    );
    fireEvent.click(getByText("Open full page"));
    expect(onOpenFullPage).toHaveBeenCalledTimes(1);
  });

  it("renders the full-page layout with its back link and actions", () => {
    const onBack = vi.fn();
    const { getByText } = render(
      <CollapsingHeader
        variant="fullPage"
        compactTitle="Compact title"
        fullTitle="Full title"
        backLabel="Orders"
        onBack={onBack}
        actions={<button type="button">Full actions</button>}
        compactActions={<button type="button">Compact actions</button>}
      />,
    );
    expect(getByText("Full actions")).toBeInTheDocument();
    expect(getByText("Compact actions")).toBeInTheDocument();
    fireEvent.click(getByText("Orders"));
    expect(onBack).toHaveBeenCalledTimes(1);
  });

  it("hides the back link when `onBack` is not provided", () => {
    const { queryByText } = render(
      <CollapsingHeader variant="fullPage" compactTitle="Compact title" fullTitle="Full title" backLabel="Orders" />,
    );
    expect(queryByText("Orders")).not.toBeInTheDocument();
  });
});
