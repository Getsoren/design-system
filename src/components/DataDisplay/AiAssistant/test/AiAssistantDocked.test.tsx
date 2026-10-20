import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import AiAssistantEmptyState from "@/components/DataDisplay/AiAssistant/components/AiAssistantEmptyState";
import AiAssistantHeader from "@/components/DataDisplay/AiAssistant/components/AiAssistantHeader";
import AiAssistantPanel from "@/components/DataDisplay/AiAssistant/components/AiAssistantPanel";
import AiAssistantSuggestion from "@/components/DataDisplay/AiAssistant/components/AiAssistantSuggestion";

describe("docked assistant", () => {
  it("marks the panel as docked", () => {
    const { getByTestId } = render(
      <AiAssistantPanel open docked>
        <div />
      </AiAssistantPanel>,
    );

    expect(getByTestId("assistantPanel")).toHaveAttribute("data-docked", "true");
  });

  it("offers to dock or float the panel from the header, without the line under it", () => {
    const onToggleDocked = vi.fn();
    const { container, getByRole, rerender } = render(
      <AiAssistantHeader title="Soren" onClose={vi.fn()} onToggleDocked={onToggleDocked} labels={{ dock: "Dock" }} />,
    );

    fireEvent.click(getByRole("button", { name: "Dock" }));
    expect(onToggleDocked).toHaveBeenCalled();
    expect(container.querySelector("hr")).not.toBeInTheDocument();

    rerender(<AiAssistantHeader title="Soren" onClose={vi.fn()} docked onToggleDocked={onToggleDocked} labels={{ undock: "Float" }} />);
    expect(getByRole("button", { name: "Float" })).toBeInTheDocument();
  });

  it("asks what to do, with its icon and suggestions, when given a title", () => {
    const onClick = vi.fn();
    const { getByTestId, getByText } = render(
      <AiAssistantEmptyState title="What do you want to do today?" icon={<span>mark</span>}>
        <AiAssistantSuggestion onClick={onClick}>Where do my quotes stand?</AiAssistantSuggestion>
      </AiAssistantEmptyState>,
    );

    expect(getByTestId("assistantEmptyState")).toHaveTextContent("What do you want to do today?");
    expect(getByText("mark")).toBeInTheDocument();

    fireEvent.click(getByText("Where do my quotes stand?"));
    expect(onClick).toHaveBeenCalled();
  });
});
