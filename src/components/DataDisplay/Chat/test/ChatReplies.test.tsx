import { fireEvent, render, screen } from "@testing-library/react";
import { beforeAll, describe, expect, it, vi } from "vitest";
import ChatConversationDetail from "@/components/DataDisplay/Chat/components/ChatConversationDetail";
import type { ChatMessage } from "@/components/DataDisplay/Chat/types";

const participants = [{ firstName: "karim", lastName: "benali", userId: "u1" }];

const messages: ChatMessage[] = [
  { authorId: "me", body: "La pelle arrive à quelle heure ?", createdAt: "2026-10-05T07:00:00Z", id: 1 },
  { authorId: "u1", body: "Livraison à 8 h", createdAt: "2026-10-05T08:00:00Z", id: 2 },
  { authorId: "u1", body: "Le bon est signé", createdAt: "2026-10-05T09:00:00Z", id: 3 },
];

const detailProps = {
  currentUserId: "me",
  onAddParticipants: vi.fn(),
  onDeleteConversation: vi.fn(),
  onNewConversation: vi.fn(),
  participants,
  threadId: "t1",
};

beforeAll(() => {
  Element.prototype.scrollTo = () => {};
  Element.prototype.scrollIntoView = () => {};
});

describe("Chat replies", () => {
  it("answers a precise message: quoted in the composer, then sent with the quote", () => {
    const onSendMessage = vi.fn();
    const { container } = render(<ChatConversationDetail {...detailProps} messages={messages} onSendMessage={onSendMessage} />);

    fireEvent.click(screen.getAllByLabelText("Reply")[1]);
    const quote = container.querySelector('[data-test="chatComposerReply"]');
    expect(quote).toHaveTextContent("Karim Benali");
    expect(quote).toHaveTextContent("Livraison à 8 h");

    fireEvent.change(screen.getByPlaceholderText("Write a message..."), { target: { value: "Parfait" } });
    fireEvent.click(screen.getByRole("button", { name: "Send" }));

    expect(onSendMessage).toHaveBeenCalledWith("t1", "Parfait", undefined, {
      authorName: "Karim Benali",
      body: "Livraison à 8 h",
      messageId: 2,
    });
    expect(container.querySelector('[data-test="chatComposerReply"]')).toBeNull();
  });

  it("cancels the reply with Escape, the next message leaves as before", () => {
    const onSendMessage = vi.fn();
    const { container } = render(<ChatConversationDetail {...detailProps} messages={messages} onSendMessage={onSendMessage} />);

    fireEvent.click(screen.getAllByLabelText("Reply")[0]);
    const field = screen.getByPlaceholderText("Write a message...");
    fireEvent.keyDown(field, { key: "Escape" });
    expect(container.querySelector('[data-test="chatComposerReply"]')).toBeNull();

    fireEvent.change(field, { target: { value: "Merci" } });
    fireEvent.click(screen.getByRole("button", { name: "Send" }));
    expect(onSendMessage).toHaveBeenCalledWith("t1", "Merci");
  });

  it("quotes the answered message on top of the answer", () => {
    render(
      <ChatConversationDetail
        {...detailProps}
        messages={[
          ...messages,
          {
            authorId: "me",
            body: "Parfait",
            createdAt: "2026-10-05T09:30:00Z",
            id: 4,
            replyTo: { authorName: "Karim Benali", body: "Livraison à 8 h", messageId: 2 },
          },
        ]}
        onSendMessage={vi.fn()}
      />,
    );

    expect(screen.getByText("Parfait").closest(".MuiPaper-root")?.querySelector('[data-test="chatReplyQuote"]')).toHaveTextContent(
      "Livraison à 8 h",
    );
  });

  it("puts a divider above the first unread message", () => {
    const { container } = render(<ChatConversationDetail {...detailProps} messages={messages} unreadCount={2} onSendMessage={vi.fn()} />);

    const divider = container.querySelector('[data-test="chatUnreadDivider"]');
    expect(divider).toHaveTextContent("New messages");
    // Right above "Livraison à 8 h", the first of the two unread ones
    expect(divider?.parentElement).toHaveTextContent("Livraison à 8 h");
  });

  it("shows a notice above the composer", () => {
    render(
      <ChatConversationDetail {...detailProps} messages={messages} composerNotice="Répond en général en 20 min" onSendMessage={vi.fn()} />,
    );

    expect(screen.getByText("Répond en général en 20 min")).toBeInTheDocument();
  });
});
