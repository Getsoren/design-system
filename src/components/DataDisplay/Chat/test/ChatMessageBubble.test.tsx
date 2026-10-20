import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ChatMessageBubble from "@/components/DataDisplay/Chat/components/ChatMessageBubble";

const message = { authorId: "assistant", body: "Here are your open events.", createdAt: "2026-10-17T15:23:00Z", id: "1" };

describe("<ChatMessageBubble />", () => {
  it("keeps both sides in bubbles by default", () => {
    const { container } = render(<ChatMessageBubble isOwn={false} message={message} hideAvatar />);

    expect(container.querySelector(".MuiPaper-root")).toBeInTheDocument();
  });

  it("shows a plain reply as text, with no surface", () => {
    const { container, getByTestId } = render(<ChatMessageBubble isOwn={false} message={message} variant="plain" />);

    expect(getByTestId("chatMessagePlain")).toHaveTextContent("Here are your open events.");
    expect(container.querySelector(".MuiPaper-root")).not.toBeInTheDocument();
    expect(container.querySelector(".MuiAvatar-root")).not.toBeInTheDocument();
  });

  it("sets the user's own plain message on the right", () => {
    const { getByTestId } = render(<ChatMessageBubble isOwn message={{ ...message, authorId: "me" }} variant="plain" />);

    expect(getByTestId("chatMessagePlainOwn")).toHaveTextContent("Here are your open events.");
  });
});
