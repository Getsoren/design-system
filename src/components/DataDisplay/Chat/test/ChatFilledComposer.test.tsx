import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import ChatMessageBubble from "@/components/DataDisplay/Chat/components/ChatMessageBubble";
import ChatMessageInput from "@/components/DataDisplay/Chat/components/ChatMessageInput";

describe("chat beside an AI assistant", () => {
  it("sends from the filled composer and shows its footnote", () => {
    const onSend = vi.fn();
    const { getByPlaceholderText, getByRole, getByText } = render(
      <ChatMessageInput
        variant="filled"
        onSend={onSend}
        footnote="Soren can make mistakes."
        labels={{ send: "Send", writeAMessage: "Write" }}
      />,
    );

    fireEvent.change(getByPlaceholderText("Write"), { target: { value: "Where do my quotes stand?" } });
    fireEvent.click(getByRole("button", { name: "Send" }));

    expect(onSend).toHaveBeenCalledWith("Where do my quotes stand?");
    expect(getByText("Soren can make mistakes.")).toBeInTheDocument();
  });

  it("puts the avatar beside a plain reply and its actions under it", () => {
    const message = { authorId: "assistant", body: "Two quotes are in.", createdAt: "2026-10-17T15:23:00Z", id: "1" };
    const { getByTestId, getByText } = render(
      <ChatMessageBubble
        isOwn={false}
        message={message}
        variant="plain"
        avatar={<span>mark</span>}
        renderAfterBubble={() => <button type="button">Copy</button>}
      />,
    );

    expect(getByTestId("chatMessagePlain")).toHaveTextContent("Two quotes are in.");
    expect(getByText("mark")).toBeInTheDocument();
    expect(getByText("Copy")).toBeInTheDocument();
  });
});
