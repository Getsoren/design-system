import { fireEvent, render, screen } from "@testing-library/react";
import { beforeAll, describe, expect, it, vi } from "vitest";
import ChatConversationDetail from "@/components/DataDisplay/Chat/components/ChatConversationDetail";
import ChatMessageInput from "@/components/DataDisplay/Chat/components/ChatMessageInput";

const quickReplies = ["C'est noté", "Merci"];

const detailProps = {
  currentUserId: "me",
  onAddParticipants: vi.fn(),
  onDeleteConversation: vi.fn(),
  onNewConversation: vi.fn(),
  participants: [],
  quickReplies,
  threadId: "t1",
};

beforeAll(() => {
  Element.prototype.scrollTo = () => {};
});

describe("Chat quick replies", () => {
  it("sends a reply in one tap, only while the field is empty", () => {
    const onSend = vi.fn();
    render(<ChatMessageInput onSend={onSend} quickReplies={quickReplies} />);

    fireEvent.click(screen.getByRole("button", { name: "C'est noté" }));
    expect(onSend).toHaveBeenCalledWith("C'est noté");

    fireEvent.change(screen.getByPlaceholderText("Write a message..."), { target: { value: "Je" } });
    expect(screen.queryByRole("group", { name: "Quick replies" })).toBeNull();
  });

  it("offers replies when the last message comes from someone else", () => {
    const onSendMessage = vi.fn();
    const message = { authorId: "u2", body: "La nacelle est livrée", createdAt: "2026-10-05T12:00:00Z", id: 1 };
    const { rerender } = render(<ChatConversationDetail {...detailProps} messages={[message]} onSendMessage={onSendMessage} />);

    fireEvent.click(screen.getByRole("button", { name: "Merci" }));
    expect(onSendMessage).toHaveBeenCalledWith("t1", "Merci");

    rerender(
      <ChatConversationDetail
        {...detailProps}
        messages={[message, { ...message, authorId: "me", body: "Merci", id: 2 }]}
        onSendMessage={onSendMessage}
      />,
    );
    expect(screen.queryByRole("group", { name: "Quick replies" })).toBeNull();
  });
});
