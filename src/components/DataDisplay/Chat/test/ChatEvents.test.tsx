import { fireEvent, render, screen } from "@testing-library/react";
import { beforeAll, describe, expect, it, vi } from "vitest";
import ChatConversationDetail from "@/components/DataDisplay/Chat/components/ChatConversationDetail";
import ChatMessageBubble from "@/components/DataDisplay/Chat/components/ChatMessageBubble";
import type { ChatMessage } from "@/components/DataDisplay/Chat/types";

const participants = [{ firstName: "sophie", lastName: "durand", userId: "u2" }];

const endOfRental = (id: string, createdAt = "2026-10-05T15:55:00Z", onClick?: () => void): ChatMessage => ({
  authorId: "u2",
  body: "Fin de location confirmée au 12/10/2026 ✅",
  createdAt,
  event: { booking: { label: "N° 34126", onClick }, details: ["Nacelle 16 m", "12/10/2026"], title: `Fin de location ${id}` },
  id,
});

const messages: ChatMessage[] = [
  { authorId: "u2", body: "Bonjour", createdAt: "2026-10-05T15:00:00Z", id: "m1" },
  endOfRental("e1", "2026-10-05T15:10:00Z"),
  endOfRental("e2", "2026-10-05T15:20:00Z"),
  endOfRental("e3", "2026-10-05T15:30:00Z"),
  { authorId: "me", body: "Merci", createdAt: "2026-10-05T16:00:00Z", id: "m2" },
];

const detailProps = {
  currentUserId: "me",
  onAddParticipants: vi.fn(),
  onDeleteConversation: vi.fn(),
  onNewConversation: vi.fn(),
  onSendMessage: vi.fn(),
  participants,
  threadId: "t1",
};

beforeAll(() => {
  Element.prototype.scrollTo = () => {};
});

describe("Chat automatic messages", () => {
  it("shows an event as a notice, not a bubble", () => {
    const onClick = vi.fn();
    const { container } = render(
      <ChatMessageBubble
        isOwn={false}
        message={endOfRental("e1", undefined, onClick)}
        participants={participants}
        formatTime={() => "17:55"}
      />,
    );

    expect(screen.getByText("Fin de location e1")).toBeInTheDocument();
    // One quiet line: title, details, order, author and time
    expect(container.querySelector('[data-test="chatEvent"]')).toHaveTextContent(
      "Fin de location e1 · Nacelle 16 m · 12/10/2026 · N° 34126 · Sophie · 17:55",
    );
    expect(screen.queryByText(/✅/)).toBeNull();
    expect(container.querySelector(".MuiPaper-root")).toBeNull();

    fireEvent.click(screen.getByText("N° 34126"));
    expect(onClick).toHaveBeenCalled();
  });

  it("folds consecutive events into one line, unfolded on click", () => {
    render(<ChatConversationDetail {...detailProps} messages={messages} />);

    expect(screen.queryByText("Fin de location e1")).toBeNull();
    fireEvent.click(screen.getByText("3 order updates"));

    expect(screen.getByText("Fin de location e1")).toBeInTheDocument();
    expect(screen.getByText("Fin de location e3")).toBeInTheDocument();
  });

  it("filters messages and updates", () => {
    render(<ChatConversationDetail {...detailProps} messages={messages} />);

    fireEvent.click(screen.getByRole("button", { name: "Messages" }));
    expect(screen.getByText("Bonjour")).toBeInTheDocument();
    expect(screen.queryByText("3 order updates")).toBeNull();

    fireEvent.click(screen.getByRole("button", { name: "Updates" }));
    expect(screen.queryByText("Bonjour")).toBeNull();
    // Shown one by one once filtered
    expect(screen.getByText("Fin de location e2")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Updates" })).toHaveAttribute("aria-pressed", "true");
  });

  it("hides the filter without events, or when disabled", () => {
    const { rerender } = render(<ChatConversationDetail {...detailProps} messages={[messages[0], messages[4]]} />);
    expect(screen.queryByRole("button", { name: "All" })).toBeNull();

    rerender(<ChatConversationDetail {...detailProps} messages={messages} eventsFilter={false} />);
    expect(screen.queryByRole("button", { name: "All" })).toBeNull();
  });
});
