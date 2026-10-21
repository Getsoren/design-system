import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AiAssistantAvatar from "@/components/DataDisplay/AiAssistant/components/AiAssistantAvatar";

describe("<AiAssistantAvatar />", () => {
  it("shows the assistant's portrait on a grey round, with a light around it only while it works", () => {
    const { container, queryByTestId, rerender } = render(<AiAssistantAvatar />);

    expect(container.firstElementChild).toHaveAttribute("data-variant", "subtle");
    expect(container.querySelector("img")).toBeInTheDocument();
    expect(queryByTestId("assistantAvatarLight")).toBeNull();

    rerender(<AiAssistantAvatar isWorking />);

    expect(queryByTestId("assistantAvatarLight")).toBeInTheDocument();
  });

  it("lets the brand's colours cross the brand avatar only", () => {
    const { container, rerender } = render(<AiAssistantAvatar />);
    const ground = () => container.querySelector("img")?.parentElement as HTMLElement;

    expect(getComputedStyle(ground()).animation).not.toContain("aiAssistantAvatarBand");

    rerender(<AiAssistantAvatar variant="brand" />);

    expect(getComputedStyle(ground()).animation).toContain("aiAssistantAvatarBand");
  });

  it("sets the portrait in a square with soft corners when asked", () => {
    const { container } = render(<AiAssistantAvatar size={48} rounded />);

    expect(container.querySelector("img")?.parentElement).toHaveStyle({ borderRadius: "12px" });
  });

  it("shows another portrait in place of the still one", () => {
    const { container, getByTestId } = render(<AiAssistantAvatar portrait={<span data-testid="livePortrait" />} />);

    expect(getByTestId("livePortrait")).toBeInTheDocument();
    expect(container.querySelector("img")).toBeNull();
  });
});
