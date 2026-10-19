import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import AiAssistantHeader from "@/components/DataDisplay/AiAssistant/components/AiAssistantHeader";

describe("<AiAssistantHeader />", () => {
  it("names the assistant, with the close button last", () => {
    const onClose = vi.fn();
    const { getAllByRole, getByText } = render(<AiAssistantHeader title="Soren" onClose={onClose} labels={{ close: "Close" }} />);

    expect(getByText("Soren")).toBeInTheDocument();
    const buttons = getAllByRole("button");
    expect(buttons.at(-1)).toHaveAccessibleName("Close");
    fireEvent.click(buttons.at(-1) as HTMLElement);
    expect(onClose).toHaveBeenCalled();
  });

  it("tags the title, e.g. as a beta", () => {
    const { getByTestId } = render(<AiAssistantHeader title="Soren" tag="Beta" onClose={vi.fn()} />);

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
