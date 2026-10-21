import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import AiAssistantFab from "@/components/DataDisplay/AiAssistant/components/AiAssistantFab";

describe("<AiAssistantFab />", () => {
  it("is a button named by its call, opening the panel", () => {
    const onClick = vi.fn();
    const { getByRole } = render(<AiAssistantFab onClick={onClick} label="Ask Soren" />);

    const fab = getByRole("button", { name: "Ask Soren" });
    expect(fab).toHaveAttribute("data-testid", "assistantFab");
    fireEvent.click(fab);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("forwards data-* props to the button so analytics tags land on the DOM node", () => {
    const { getByTestId } = render(<AiAssistantFab onClick={vi.fn()} label="Ask Soren" data-amp-track-feature="assistant.open" />);

    expect(getByTestId("assistantFab")).toHaveAttribute("data-amp-track-feature", "assistant.open");
  });

  it("keeps the test id in control even when a data-testid is passed as a data prop", () => {
    const { getByTestId } = render(<AiAssistantFab onClick={vi.fn()} label="Ask Soren" dataTestId="customFab" />);

    expect(getByTestId("customFab")).toBeInTheDocument();
  });

  it("wears the brand avatar, its portrait replaceable", () => {
    const { container, getByTestId, rerender } = render(<AiAssistantFab onClick={vi.fn()} label="Ask Soren" />);

    expect(container.querySelector("[data-variant]")).toHaveAttribute("data-variant", "brand");
    expect(container.querySelector("img")).toBeInTheDocument();

    rerender(<AiAssistantFab onClick={vi.fn()} label="Ask Soren" portrait={<span data-testid="livePortrait" />} />);

    expect(getByTestId("livePortrait")).toBeInTheDocument();
  });

  it("takes a label with markup, its text still naming the button", () => {
    const { getByRole } = render(
      <AiAssistantFab
        onClick={vi.fn()}
        label={
          <span>
            Ask <strong>Ren</strong>
          </span>
        }
      />,
    );

    expect(getByRole("button", { name: "Ask Ren" })).toBeInTheDocument();
  });
});
