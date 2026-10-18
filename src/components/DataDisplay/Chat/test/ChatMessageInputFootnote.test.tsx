import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import ChatMessageInput from "@/components/DataDisplay/Chat/components/ChatMessageInput";

describe("<ChatMessageInput /> footnote", () => {
  it("shows the footnote in place of the Enter hint", () => {
    const { getByText, queryByText } = render(
      <ChatMessageInput onSend={vi.fn()} footnote="Soren can make mistakes." labels={{ enterToSend: "Enter to send" }} />,
    );

    expect(getByText("Soren can make mistakes.")).toBeInTheDocument();
    expect(queryByText("Enter to send")).not.toBeInTheDocument();
  });
});
