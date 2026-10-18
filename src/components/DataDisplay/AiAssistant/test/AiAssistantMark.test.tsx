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
  });

  it("keeps its glow while working and once the work stops", () => {
    const { container, rerender } = render(<AiAssistantMark isWorking />);

    expect(container.querySelector("linearGradient")).toBeInTheDocument();

    // jsdom has no Web Animations API: the settle ends at once.
    rerender(<AiAssistantMark isWorking={false} />);
    expect(container.querySelectorAll("ellipse")).toHaveLength(2);
    expect(container.querySelector("linearGradient")).toBeInTheDocument();
  });

  it("lets the glow's colours glide only while the assistant works", () => {
    const pause = vi.fn();
    const unpause = vi.fn();
    // jsdom has no SMIL API.
    Object.assign(SVGSVGElement.prototype, { pauseAnimations: pause, unpauseAnimations: unpause });
    const { rerender } = render(<AiAssistantMark />);

    expect(pause).toHaveBeenCalled();

    rerender(<AiAssistantMark isBusy />);
    expect(unpause).toHaveBeenCalled();
    Reflect.deleteProperty(SVGSVGElement.prototype, "pauseAnimations");
    Reflect.deleteProperty(SVGSVGElement.prototype, "unpauseAnimations");
  });

  it("keeps the same ellipse in its glow while breathing at rest", () => {
    const { container, rerender } = render(<AiAssistantMark isBreathing />);

    expect(container.querySelectorAll("ellipse")).toHaveLength(2);

    rerender(<AiAssistantMark />);
    expect(container.querySelectorAll("ellipse")).toHaveLength(2);
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

    it("eases the pose home once it stops breathing, rather than snapping", () => {
      Element.prototype.animate = vi.fn(() => ({ cancel: vi.fn(), onfinish: null })) as unknown as typeof Element.prototype.animate;
      // Far from the previous test's working mark, so no hand-over.
      const now = vi.spyOn(performance, "now").mockReturnValue(1e12);
      const { rerender } = render(<AiAssistantMark isBreathing />);

      expect(Element.prototype.animate).not.toHaveBeenCalled();

      rerender(<AiAssistantMark />);
      expect(Element.prototype.animate).toHaveBeenCalled();
      now.mockRestore();
    });
  });
});
