import { render } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import AiAssistantMark from "@/components/DataDisplay/AiAssistant/components/AiAssistantMark";

describe("<AiAssistantMark />", () => {
  it("draws the ellipse alone at rest, without the logo's frame, in its glow", () => {
    const { container } = render(<AiAssistantMark />);
    const shapes = container.querySelectorAll("ellipse");

    expect(container.querySelector("path")).not.toBeInTheDocument();
    expect(shapes).toHaveLength(2);
    expect(shapes[0].getAttribute("stroke")).toMatch(/^url\(#/);
    expect(shapes[1]).toHaveAttribute("fill", "currentColor");
    expect(container.querySelector("circle")).not.toBeInTheDocument();
  });

  it("sends two satellites round the ellipse while working", () => {
    const { container } = render(<AiAssistantMark isWorking />);

    // Each one drawn behind the ellipse, then again over the front half of its orbit.
    expect(container.querySelectorAll("circle")).toHaveLength(4);
  });

  it("leaves the satellites out when motion is reduced", () => {
    const original = window.matchMedia;
    window.matchMedia = vi.fn((query: string) => ({
      addEventListener: vi.fn(),
      addListener: vi.fn(),
      matches: query.includes("reduce"),
      media: query,
      removeEventListener: vi.fn(),
      removeListener: vi.fn(),
    })) as unknown as typeof window.matchMedia;
    const { container } = render(<AiAssistantMark isWorking />);

    expect(container.querySelector("circle")).not.toBeInTheDocument();
    window.matchMedia = original;
  });

  it("keeps its glow while working and once the work stops", () => {
    const { container, rerender } = render(<AiAssistantMark isWorking />);

    expect(container.querySelector("linearGradient")).toBeInTheDocument();

    // jsdom has no Web Animations API: the settle ends at once.
    rerender(<AiAssistantMark isWorking={false} />);
    expect(container.querySelectorAll("ellipse")).toHaveLength(2);
    expect(container.querySelector("linearGradient")).toBeInTheDocument();
  });

  it("lets the glow's colours glide only while the mark turns", () => {
    const pause = vi.fn();
    const unpause = vi.fn();
    // jsdom has no SMIL API.
    Object.assign(SVGSVGElement.prototype, { pauseAnimations: pause, unpauseAnimations: unpause });
    const { rerender } = render(<AiAssistantMark />);

    expect(pause).toHaveBeenCalled();

    rerender(<AiAssistantMark isWorking />);
    expect(unpause).toHaveBeenCalled();
    Reflect.deleteProperty(SVGSVGElement.prototype, "pauseAnimations");
    Reflect.deleteProperty(SVGSVGElement.prototype, "unpauseAnimations");
  });

  describe("with the Web Animations API", () => {
    const original = Element.prototype.animate;

    afterEach(() => {
      Element.prototype.animate = original;
    });

    it("lets a resting mark that appears as a working one leaves take the turn over", () => {
      Element.prototype.animate = vi.fn(() => ({ cancel: vi.fn(), onfinish: null })) as unknown as typeof Element.prototype.animate;
      const { rerender } = render(<AiAssistantMark key="thinking" isWorking />);

      rerender(<AiAssistantMark key="reply" />);

      expect(Element.prototype.animate).toHaveBeenCalled();
    });

    it("fades the satellites out as the ellipse settles home", () => {
      Element.prototype.animate = vi.fn(() => ({ cancel: vi.fn(), onfinish: null })) as unknown as typeof Element.prototype.animate;
      const { rerender } = render(<AiAssistantMark isWorking />);

      rerender(<AiAssistantMark isWorking={false} />);

      expect(Element.prototype.animate).toHaveBeenCalledWith([{ opacity: 1 }, { opacity: 0 }], expect.anything());
    });
  });
});
