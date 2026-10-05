import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import ChatMessageBubble from "@/components/DataDisplay/Chat/components/ChatMessageBubble";
import type { ChatMessage } from "@/components/DataDisplay/Chat/types";

const participants = [{ firstName: "alice", lastName: "martin", userId: "u1" }];

const message: ChatMessage = {
  authorId: "u1",
  body: "Livraison confirmée",
  createdAt: "2026-10-05T08:00:00Z",
  id: 42,
  reactions: [
    { emoji: "👍", userIds: ["u1", "me"] },
    { emoji: "👀", userIds: ["u1"] },
    { emoji: "🙏", userIds: [] },
  ],
};

describe("Chat reactions", () => {
  it("reacts from the pill opened by the smiley", () => {
    const onToggleReaction = vi.fn();
    render(
      <ChatMessageBubble
        isOwn={false}
        message={message}
        participants={participants}
        currentUserId="me"
        onToggleReaction={onToggleReaction}
      />,
    );

    fireEvent.click(screen.getByLabelText("Add a reaction"));
    fireEvent.click(screen.getByLabelText("👀"));

    expect(onToggleReaction).toHaveBeenCalledWith(42, "👀");
  });

  it("sums up the reactions under the bubble and removes mine from the list", () => {
    const onToggleReaction = vi.fn();
    render(
      <ChatMessageBubble
        isOwn={false}
        message={message}
        participants={participants}
        currentUserId="me"
        onToggleReaction={onToggleReaction}
      />,
    );

    // A reaction nobody holds anymore is not shown
    const summary = screen.getByLabelText("Reactions · 👍 2, 👀 1");
    expect(summary).toHaveTextContent("👍👀3");

    fireEvent.click(summary);
    // One line per person and emoji: Alice reacted twice
    expect(screen.getAllByText("Alice Martin")).toHaveLength(2);
    fireEvent.click(screen.getByText("Remove"));

    expect(onToggleReaction).toHaveBeenCalledWith(42, "👍");
  });

  it("shows the reactions read-only without onToggleReaction", () => {
    render(<ChatMessageBubble isOwn message={{ ...message, authorId: "me" }} currentUserId="me" />);

    expect(screen.getByLabelText("Reactions · 👍 2, 👀 1")).toBeInTheDocument();
    expect(screen.queryByLabelText("Add a reaction")).toBeNull();
  });

  it("renders a files-only message without an empty text bubble", () => {
    const { container } = render(
      <ChatMessageBubble
        isOwn
        currentUserId="me"
        message={{
          attachments: [{ fileName: "bl.pdf", id: "a1", mimeType: "application/pdf", size: 1024, url: "https://files.example.com/bl.pdf" }],
          authorId: "me",
          body: "",
          createdAt: "2026-10-05T08:00:00Z",
          id: 43,
        }}
      />,
    );

    expect(screen.getByText("bl.pdf")).toBeInTheDocument();
    expect(container.querySelector(".MuiPaper-root")).toBeNull();
  });
});
