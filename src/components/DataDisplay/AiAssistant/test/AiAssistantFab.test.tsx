import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import AiAssistantFab from "@/components/DataDisplay/AiAssistant/components/AiAssistantFab";

describe("<AiAssistantFab />", () => {
  it("forwards data-* props to the button so analytics tags land on the DOM node", () => {
    const { getByTestId } = render(<AiAssistantFab open={false} onClick={vi.fn()} data-amp-track-feature="assistant.open" />);

    const fab = getByTestId("assistantFab");
    expect(fab.tagName).toBe("BUTTON");
    expect(fab).toHaveAttribute("data-amp-track-feature", "assistant.open");
  });

  it("keeps the test id in control even when a data-testid is passed as a data prop", () => {
    const { getByTestId } = render(<AiAssistantFab open={false} onClick={vi.fn()} dataTestId="customFab" />);

    expect(getByTestId("customFab")).toBeInTheDocument();
  });
});
