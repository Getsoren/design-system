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

  it("shows the count of what waits, and a quiet dot for background work", () => {
    const { getByTestId, queryByTestId, rerender } = render(<AiAssistantFab open={false} onClick={vi.fn()} badge={2} />);

    expect(getByTestId("assistantFabBadge")).toHaveTextContent("2");

    rerender(<AiAssistantFab open={false} onClick={vi.fn()} badge={12} />);
    expect(getByTestId("assistantFabBadge")).toHaveTextContent("9+");

    rerender(<AiAssistantFab open={false} onClick={vi.fn()} badge />);
    expect(queryByTestId("assistantFabBadge")).not.toBeInTheDocument();
    expect(getByTestId("assistantFabDot")).toBeInTheDocument();
  });

  it("hides the badge while the panel is open, and when nothing waits", () => {
    const { queryByTestId, rerender } = render(<AiAssistantFab open onClick={vi.fn()} badge={2} />);

    expect(queryByTestId("assistantFabBadge")).not.toBeInTheDocument();

    rerender(<AiAssistantFab open={false} onClick={vi.fn()} badge={0} />);
    expect(queryByTestId("assistantFabBadge")).not.toBeInTheDocument();
    expect(queryByTestId("assistantFabDot")).not.toBeInTheDocument();
  });

  it("turns into a labelled pill when given a label, keeping its badge", () => {
    const { getByRole, getByTestId } = render(<AiAssistantFab open={false} onClick={vi.fn()} label="Assistant IA" badge={3} />);

    const fab = getByRole("button", { name: "Assistant IA" });
    expect(fab).toHaveAttribute("data-testid", "assistantFab");
    expect(fab).toHaveTextContent("Assistant IA");
    expect(getByTestId("assistantFabBadge")).toHaveTextContent("3");
  });

  it("drops the pill's badge while the panel is open", () => {
    const { queryByTestId } = render(<AiAssistantFab open onClick={vi.fn()} label="Assistant IA" badge={3} />);

    expect(queryByTestId("assistantFabBadge")).not.toBeInTheDocument();
  });

  it("runs a light along the pill while the assistant works, and calms down once open", () => {
    const { getByTestId, queryByTestId, rerender } = render(<AiAssistantFab open={false} onClick={vi.fn()} label="Ask Soren" isWorking />);

    expect(getByTestId("assistantFabWorking")).toBeInTheDocument();

    rerender(<AiAssistantFab open onClick={vi.fn()} label="Ask Soren" isWorking />);
    expect(queryByTestId("assistantFabWorking")).not.toBeInTheDocument();

    rerender(<AiAssistantFab open={false} onClick={vi.fn()} label="Ask Soren" />);
    expect(queryByTestId("assistantFabWorking")).not.toBeInTheDocument();
  });

  it("shows the avatar's still ellipse in its glow on the pill", () => {
    const { container } = render(<AiAssistantFab open={false} onClick={vi.fn()} label="Ask Soren" />);

    expect(container.querySelectorAll("ellipse")).toHaveLength(2);
    expect(container.querySelector("linearGradient")).toBeInTheDocument();
  });
});
