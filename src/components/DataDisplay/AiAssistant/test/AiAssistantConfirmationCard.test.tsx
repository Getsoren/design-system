import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import AiAssistantConfirmationCard from "@/components/DataDisplay/AiAssistant/components/AiAssistantConfirmationCard";

const props = {
  heading: "Action to confirm",
  labels: { accept: "Accept", accepted: "Action accepted", decline: "Cancel", declined: "Action cancelled" },
  onAccept: vi.fn(),
  onDecline: vi.fn(),
  summary: "Report a breakdown on order 37207",
};

describe("<AiAssistantConfirmationCard />", () => {
  it("says the decision on the heading line once accepted, with no button left", () => {
    const { getByTestId, queryByText, queryByRole } = render(<AiAssistantConfirmationCard {...props} status="approved" />);

    expect(getByTestId("assistantConfirmationCardDecision")).toHaveTextContent("Action accepted");
    expect(queryByText("Action to confirm")).not.toBeInTheDocument();
    expect(queryByRole("button", { name: "Accept" })).not.toBeInTheDocument();
  });

  it("opens what the action produced, while its links go their own way", () => {
    const onOpen = vi.fn();
    const onLink = vi.fn();
    const { getByRole, getByText } = render(
      <AiAssistantConfirmationCard
        {...props}
        status="approved"
        icon={<span>flag</span>}
        onOpen={onOpen}
        links={
          <button type="button" onClick={onLink}>
            Order 37207
          </button>
        }
      />,
    );

    expect(getByText("flag")).toBeInTheDocument();
    fireEvent.click(getByRole("button", { name: "Order 37207" }));
    expect(onLink).toHaveBeenCalled();
    expect(onOpen).not.toHaveBeenCalled();

    fireEvent.click(getByText("Report a breakdown on order 37207"));
    expect(onOpen).toHaveBeenCalled();
  });

  it("keeps its links outside the button that opens it", () => {
    const { getByRole, getByTestId } = render(
      <AiAssistantConfirmationCard {...props} status="approved" onOpen={vi.fn()} links={<a href="/orders/37207">Order 37207</a>} />,
    );

    const open = getByTestId("assistantConfirmationCardOpen");
    expect(open.tagName).toBe("BUTTON");
    expect(open).toHaveTextContent("Report a breakdown on order 37207");
    expect(open).not.toContainElement(getByRole("link", { name: "Order 37207" }));
    expect(getByTestId("assistantConfirmationCard")).not.toHaveAttribute("role");
  });

  it("opens nothing while the action waits for a decision", () => {
    const { queryByTestId } = render(<AiAssistantConfirmationCard {...props} status="pending" onOpen={vi.fn()} />);

    expect(queryByTestId("assistantConfirmationCardOpen")).not.toBeInTheDocument();
  });
});
