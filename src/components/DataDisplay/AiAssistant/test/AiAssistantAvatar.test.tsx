import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AiAssistantAvatar from "@/components/DataDisplay/AiAssistant/components/AiAssistantAvatar";

describe("<AiAssistantAvatar />", () => {
  it("sets the mark in the text colour on a grey round by default", () => {
    const { container } = render(<AiAssistantAvatar />);

    expect(container.firstElementChild).toHaveAttribute("data-variant", "subtle");
    expect(getComputedStyle(container.querySelector("svg") as SVGSVGElement).color).not.toBe("rgb(255, 255, 255)");
  });

  it("sets a white mark on the brand round", () => {
    const { container } = render(<AiAssistantAvatar variant="brand" />);

    expect(container.firstElementChild).toHaveAttribute("data-variant", "brand");
    expect(getComputedStyle(container.querySelector("svg") as SVGSVGElement).color).toBe("rgb(255, 255, 255)");
  });
});
