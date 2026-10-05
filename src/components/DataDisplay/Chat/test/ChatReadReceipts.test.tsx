import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ChatMessageBubble from "@/components/DataDisplay/Chat/components/ChatMessageBubble";
import type { ChatMessage, ChatParticipant } from "@/components/DataDisplay/Chat/types";

const message: ChatMessage = { authorId: "me", body: "La nacelle part demain", createdAt: "2026-10-05T12:00:00Z", id: 7 };

const participants = (lastReadAt: string | null): ChatParticipant[] => [
  { firstName: "louis", lastName: "martin", lastReadAt: "2026-10-05T13:00:00Z", userId: "me" },
  { firstName: "marc", lastName: "dupont", lastReadAt, userId: "u2" },
];

const formatTime = (date: string) => date.slice(11, 16);

const renderOwn = (props: Partial<Parameters<typeof ChatMessageBubble>[0]>) =>
  render(<ChatMessageBubble isOwn currentUserId="me" message={message} formatTime={formatTime} {...props} />);

describe("Chat read receipts", () => {
  it("shows one tick while nobody else has read the message", () => {
    renderOwn({ participants: participants("2026-10-05T11:59:00Z") });

    expect(screen.getByLabelText("Sent")).toHaveAttribute("data-status", "sent");
  });

  it("shows two ticks with the readers once another participant has read it", () => {
    renderOwn({ participants: participants("2026-10-05T12:32:00Z") });

    expect(screen.getByLabelText("Seen by Marc Dupont · 12:32")).toHaveAttribute("data-status", "read");
  });

  it("shows a clock on an optimistic message", () => {
    renderOwn({ message: { ...message, id: "temp-1" }, participants: participants("2026-10-05T12:32:00Z") });

    expect(screen.getByLabelText("Sending")).toHaveAttribute("data-status", "sending");
  });

  it("shows no tick on the others' messages, nor when disabled", () => {
    const { container } = render(
      <>
        <ChatMessageBubble isOwn={false} currentUserId="me" message={{ ...message, authorId: "u2" }} participants={participants(null)} />
        <ChatMessageBubble isOwn currentUserId="me" message={message} participants={participants(null)} showReadReceipts={false} />
      </>,
    );

    expect(container.querySelector('[data-test="chatReadReceipt"]')).toBeNull();
  });
});
