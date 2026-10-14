import { render } from "@testing-library/react";
import { beforeAll, describe, expect, it, vi } from "vitest";
import ChatConversationDetail from "@/components/DataDisplay/Chat/components/ChatConversationDetail";
import type { ChatMessage } from "@/components/DataDisplay/Chat/types";

const participants = [
  { firstName: "alice", lastName: "martin", userId: "u1" },
  { firstName: "louis", lastName: "dupont", userId: "me" },
];

const messages: ChatMessage[] = [
  { authorId: "u1", body: "La pelle est livrée", createdAt: "2026-10-05T08:00:00Z", id: 1 },
  { authorId: "u1", body: "Le bon est signé", createdAt: "2026-10-05T08:02:00Z", id: 2 },
  // Twenty minutes later: a new run
  { authorId: "u1", body: "Vous la gardez jusqu'à quand ?", createdAt: "2026-10-05T08:22:00Z", id: 3 },
  { authorId: "me", body: "Merci", createdAt: "2026-10-05T08:23:00Z", id: 4 },
  { authorId: "me", body: "Jusqu'au 15", createdAt: "2026-10-05T08:24:00Z", id: 5 },
];

beforeAll(() => {
  Element.prototype.scrollTo = () => {};
});

describe("Chat runs", () => {
  it("gathers an author's messages a few minutes apart under one name and one time", () => {
    const { container } = render(
      <ChatConversationDetail
        threadId="t1"
        currentUserId="me"
        participants={participants}
        messages={messages}
        onAddParticipants={vi.fn()}
        onDeleteConversation={vi.fn()}
        onNewConversation={vi.fn()}
        onSendMessage={vi.fn()}
      />,
    );

    const metas = Array.from(container.querySelectorAll('[data-test="chatMessageMeta"]'), ({ textContent }) => textContent);

    // Alice's two runs open on her name, my run closes on its time
    expect(metas).toHaveLength(3);
    expect(metas[0]).toContain("Alice Martin");
    expect(metas[1]).toContain("Alice Martin");
    expect(metas[2]).not.toContain("Louis");
  });
});
