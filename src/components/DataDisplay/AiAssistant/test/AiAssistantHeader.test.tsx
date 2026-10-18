import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import AiAssistantHeader from "@/components/DataDisplay/AiAssistant/components/AiAssistantHeader";

describe("<AiAssistantHeader />", () => {
  it("puts the host app's actions before the close button", () => {
    const onClose = vi.fn();
    const { getAllByRole, getByRole } = render(
      <AiAssistantHeader title="Nova" onClose={onClose} actions={<button type="button">3 running</button>} />,
    );

    const buttons = getAllByRole("button");
    expect(buttons[0]).toHaveTextContent("3 running");

    fireEvent.click(buttons[buttons.length - 1]);
    expect(onClose).toHaveBeenCalled();
    expect(getByRole("button", { name: "3 running" })).toBeInTheDocument();
  });

  it("shows the name alone when the icon is null", () => {
    const { container, getByText } = render(<AiAssistantHeader title="Soren" onClose={vi.fn()} icon={null} />);

    expect(getByText("Soren")).toBeInTheDocument();
    expect(container.querySelectorAll("svg")).toHaveLength(1);
  });

  it("tags the title, e.g. as a beta", () => {
    const { getByTestId } = render(<AiAssistantHeader title="Soren" tag="Beta" onClose={vi.fn()} icon={null} />);

    expect(getByTestId("assistantHeaderTag")).toHaveTextContent("Beta");
  });

  it("offers a new conversation from the header when asked to", () => {
    const onNewConversation = vi.fn();
    const { getByRole } = render(
      <AiAssistantHeader title="Soren" onClose={vi.fn()} onNewConversation={onNewConversation} labels={{ newConversation: "New" }} />,
    );

    fireEvent.click(getByRole("button", { name: "New" }));
    expect(onNewConversation).toHaveBeenCalled();
  });
});
