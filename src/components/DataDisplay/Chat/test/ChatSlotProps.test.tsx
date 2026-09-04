import { render } from "@testing-library/react";
import { beforeAll, describe, expect, it, vi } from "vitest";
import ChatConversationDetail from "@/components/DataDisplay/Chat/components/ChatConversationDetail";
import ChatConversationList from "@/components/DataDisplay/Chat/components/ChatConversationList";
import ChatMessageInput from "@/components/DataDisplay/Chat/components/ChatMessageInput";
import ChatParticipantDialog from "@/components/DataDisplay/Chat/components/ChatParticipantDialog";

const TAG = "data-amp-track-feature";

// jsdom has no layout: the detail view scrolls its message list on mount, so give elements a no-op scrollTo
beforeAll(() => {
  Element.prototype.scrollTo = () => {};
});

describe("Chat slotProps", () => {
  it("MessageInput tags the send button", () => {
    const { getByLabelText } = render(<ChatMessageInput onSend={vi.fn()} slotProps={{ sendButton: { [TAG]: "chat.send" } }} />);

    expect(getByLabelText("Send")).toHaveAttribute(TAG, "chat.send");
  });

  it("ConversationList tags the new conversation button", () => {
    const { container } = render(
      <ChatConversationList
        threads={[]}
        onSelectThread={vi.fn()}
        onNewConversation={vi.fn()}
        slotProps={{ newConversationButton: { [TAG]: "chat.new_conversation" } }}
      />,
    );

    expect(container.querySelector(`button[${TAG}="chat.new_conversation"]`)).not.toBeNull();
  });

  it("ConversationDetail tags the empty-state CTA, the send button and the add participants button", () => {
    const slotProps = {
      addParticipantsButton: { [TAG]: "chat.add_participants" },
      newConversationButton: { [TAG]: "chat.new_conversation" },
      sendButton: { [TAG]: "chat.send" },
    };
    const commonProps = {
      currentUserId: "me",
      onAddParticipants: vi.fn(),
      onDeleteConversation: vi.fn(),
      onNewConversation: vi.fn(),
      onSendMessage: vi.fn(),
      slotProps,
    };

    const emptyState = render(<ChatConversationDetail {...commonProps} />);
    expect(emptyState.container.querySelector(`button[${TAG}="chat.new_conversation"]`)).not.toBeNull();
    emptyState.unmount();

    const { container, getByLabelText } = render(<ChatConversationDetail {...commonProps} threadId="t1" messages={[]} participants={[]} />);
    expect(getByLabelText("Send")).toHaveAttribute(TAG, "chat.send");
    expect(container.querySelector(`button[${TAG}="chat.add_participants"]`)).not.toBeNull();
  });

  it("ParticipantDialog tags the confirm button", () => {
    const { baseElement } = render(
      <ChatParticipantDialog
        open
        onClose={vi.fn()}
        onConfirm={vi.fn()}
        onSearch={vi.fn()}
        slotProps={{ confirmButton: { [TAG]: "chat.confirm" } }}
      />,
    );

    expect(baseElement.querySelector(`button[${TAG}="chat.confirm"]`)).not.toBeNull();
  });
});
