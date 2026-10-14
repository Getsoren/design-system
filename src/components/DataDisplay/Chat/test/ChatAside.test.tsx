import { fireEvent, render, screen } from "@testing-library/react";
import { beforeAll, describe, expect, it, vi } from "vitest";
import ChatConversationDetail from "@/components/DataDisplay/Chat/components/ChatConversationDetail";

beforeAll(() => {
  Element.prototype.scrollTo = () => {};
});

describe("Chat side panel", () => {
  it("shows and hides the side panel from the header, on a narrow screen", () => {
    render(
      <ChatConversationDetail
        threadId="t1"
        currentUserId="me"
        participants={[]}
        messages={[{ authorId: "u1", body: "Bonjour", createdAt: "2026-10-05T08:00:00Z", id: 1 }]}
        onAddParticipants={vi.fn()}
        onDeleteConversation={vi.fn()}
        onNewConversation={vi.fn()}
        onSendMessage={vi.fn()}
        aside={<p>N° 17280</p>}
        asideTitle="Commandes"
      />,
    );

    // jsdom matches no media query: a narrow screen, where the panel waits to be asked for
    expect(screen.queryByText("N° 17280")).not.toBeInTheDocument();

    fireEvent.click(screen.getByLabelText("Commandes"));
    expect(screen.getByText("N° 17280")).toBeInTheDocument();

    fireEvent.click(screen.getByLabelText("Close"));
    expect(screen.queryByText("N° 17280")).not.toBeInTheDocument();
  });
});
