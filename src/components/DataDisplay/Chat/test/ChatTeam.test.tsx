import { fireEvent, render, screen } from "@testing-library/react";
import { beforeAll, describe, expect, it, vi } from "vitest";
import ChatConversationDetail from "@/components/DataDisplay/Chat/components/ChatConversationDetail";
import ChatConversationList from "@/components/DataDisplay/Chat/components/ChatConversationList";

const detailProps = {
  currentUserId: "me",
  messages: [{ authorId: "u2", body: "La benne est pleine", createdAt: "2026-10-05T12:00:00Z", id: 1 }],
  onAddParticipants: vi.fn(),
  onDeleteConversation: vi.fn(),
  onNewConversation: vi.fn(),
  onSendMessage: vi.fn(),
  participants: [{ firstName: "sophie", lastName: "durand", userId: "u2" }],
  threadId: "t1",
};

beforeAll(() => {
  Element.prototype.scrollTo = () => {};
});

describe("Chat team view", () => {
  it("shows the tabs above the list", () => {
    const onTabChange = vi.fn();
    render(
      <ChatConversationList
        threads={[]}
        onSelectThread={vi.fn()}
        onNewConversation={vi.fn()}
        tabs={[
          { id: "mine", label: "Mes conversations" },
          { count: 4, id: "team", label: "Équipe" },
        ]}
        onTabChange={onTabChange}
      />,
    );

    // The first tab is selected by default
    expect(screen.getByRole("button", { name: "Mes conversations" })).toHaveAttribute("aria-pressed", "true");
    fireEvent.click(screen.getByRole("button", { name: "Équipe 4" }));

    expect(onTabChange).toHaveBeenCalledWith("team");
  });

  it("replaces the composer with a bar to join the conversation", () => {
    const onAction = vi.fn();
    render(<ChatConversationDetail {...detailProps} readOnly={{ label: "Vous consultez la conversation de Sophie et Julie", onAction }} />);

    expect(screen.queryByPlaceholderText("Write a message...")).toBeNull();
    expect(screen.getByText("Vous consultez la conversation de Sophie et Julie")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Join the conversation" }));

    expect(onAction).toHaveBeenCalled();
  });

  it("keeps the composer without readOnly", () => {
    render(<ChatConversationDetail {...detailProps} />);

    expect(screen.getByPlaceholderText("Write a message...")).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Join the conversation" })).toBeNull();
  });
});
