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
  it("toggles a reaction from its pill", () => {
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

    fireEvent.click(screen.getByLabelText("👀 1 · Alice Martin"));

    expect(onToggleReaction).toHaveBeenCalledWith(42, "👀");
  });

  it("marks my pill when the current user is among the userIds", () => {
    render(<ChatMessageBubble isOwn={false} message={message} participants={participants} currentUserId="me" onToggleReaction={vi.fn()} />);

    expect(screen.getByLabelText("👍 2 · You, Alice Martin")).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByLabelText("👀 1 · Alice Martin")).toHaveAttribute("aria-pressed", "false");
    // A reaction nobody holds anymore is not shown
    expect(screen.queryByLabelText(/^🙏/)).toBeNull();
  });

  it("shows the reactions read-only without onToggleReaction", () => {
    render(<ChatMessageBubble isOwn message={{ ...message, authorId: "me" }} currentUserId="me" />);

    expect(screen.getByLabelText("👍 2 · You")).toBeDisabled();
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
