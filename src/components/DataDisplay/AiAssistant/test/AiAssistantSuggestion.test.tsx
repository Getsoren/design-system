import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import AiAssistantSuggestion from "@/components/DataDisplay/AiAssistant/components/AiAssistantSuggestion";

describe("<AiAssistantSuggestion />", () => {
  it("answers a click", () => {
    const onClick = vi.fn();
    render(<AiAssistantSuggestion onClick={onClick}>Panne électrique</AiAssistantSuggestion>);

    fireEvent.click(screen.getByRole("button", { name: "Panne électrique" }));

    expect(onClick).toHaveBeenCalledOnce();
  });

  it("draws its icon before the text", () => {
    render(
      <AiAssistantSuggestion icon={<svg data-testid="icon" />} onClick={vi.fn()}>
        Panne électrique
      </AiAssistantSuggestion>,
    );
    const button = screen.getByRole("button", { name: "Panne électrique" });

    expect(button.firstElementChild).toContainElement(screen.getByTestId("icon"));
  });
});
