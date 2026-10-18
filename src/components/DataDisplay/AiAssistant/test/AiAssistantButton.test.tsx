import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import AiAssistantButton from "@/components/DataDisplay/AiAssistant/components/AiAssistantButton";

describe("<AiAssistantButton />", () => {
  it("is a button carrying its words in the sweeping label", () => {
    const onClick = vi.fn();
    const { getByRole } = render(<AiAssistantButton onClick={onClick}>Lancer</AiAssistantButton>);
    const button = getByRole("button", { name: "Lancer" });

    expect(button.querySelector(".aiAssistantButtonLabel")).toHaveTextContent("Lancer");
    button.click();
    expect(onClick).toHaveBeenCalled();
  });
});
