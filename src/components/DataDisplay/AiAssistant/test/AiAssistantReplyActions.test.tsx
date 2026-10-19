import { act, fireEvent, render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import AiAssistantReplyActions from "@/components/DataDisplay/AiAssistant/components/AiAssistantReplyActions";

const labels = { copied: "Copied!", copy: "Copy", helpful: "Helpful", notHelpful: "Not helpful" };

const stubClipboard = (writeText: (text: string) => Promise<void>) =>
  Object.defineProperty(navigator, "clipboard", { configurable: true, value: { writeText } });

describe("<AiAssistantReplyActions />", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
    Reflect.deleteProperty(navigator, "clipboard");
  });

  it("copies the reply, says so for a moment, then offers to copy again", async () => {
    const writeText = vi.fn(() => Promise.resolve());
    stubClipboard(writeText);
    const { getByRole } = render(<AiAssistantReplyActions content="Two quotes are in." labels={labels} />);

    fireEvent.click(getByRole("button", { name: "Copy" }));
    // Lets the clipboard's promise settle.
    await act(() => Promise.resolve());

    expect(writeText).toHaveBeenCalledWith("Two quotes are in.");
    expect(getByRole("button", { name: "Copy" }).querySelector("path")).not.toHaveAttribute("stroke");

    act(() => {
      vi.advanceTimersByTime(1500);
    });

    expect(getByRole("button", { name: "Copy" }).querySelector("path")).toHaveAttribute("stroke");
  });

  it("stays quiet when the clipboard is out of reach", async () => {
    stubClipboard(() => Promise.reject(new Error("denied")));
    const { getByRole } = render(<AiAssistantReplyActions content="Two quotes are in." />);

    fireEvent.click(getByRole("button", { name: "Copy" }));
    // Lets the clipboard's promise settle.
    await act(() => Promise.resolve());

    // Still the copy glyph (stroked), never the check.
    expect(getByRole("button", { name: "Copy" }).querySelector("path")).toHaveAttribute("stroke");
  });

  it("only offers to vote when the host app listens to votes", () => {
    const { queryByRole } = render(<AiAssistantReplyActions content="Two quotes are in." labels={labels} />);

    expect(queryByRole("button", { name: "Helpful" })).not.toBeInTheDocument();
    expect(queryByRole("button", { name: "Not helpful" })).not.toBeInTheDocument();
  });

  it("casts a vote, and takes it back on a second press", () => {
    const onVote = vi.fn();
    const { getByRole, rerender } = render(<AiAssistantReplyActions content="…" labels={labels} onVote={onVote} />);

    expect(getByRole("button", { name: "Helpful" })).toHaveAttribute("aria-pressed", "false");
    fireEvent.click(getByRole("button", { name: "Helpful" }));
    expect(onVote).toHaveBeenLastCalledWith("up");

    rerender(<AiAssistantReplyActions content="…" labels={labels} vote="up" onVote={onVote} />);
    expect(getByRole("button", { name: "Helpful" })).toHaveAttribute("aria-pressed", "true");
    fireEvent.click(getByRole("button", { name: "Helpful" }));
    expect(onVote).toHaveBeenLastCalledWith(null);

    fireEvent.click(getByRole("button", { name: "Not helpful" }));
    expect(onVote).toHaveBeenLastCalledWith("down");
  });

  it("puts each button's data attributes on it", () => {
    const { getByRole } = render(
      <AiAssistantReplyActions
        content="…"
        labels={labels}
        onVote={vi.fn()}
        slotProps={{
          copyButton: { "data-feature": "copy" },
          downVoteButton: { "data-feature": "down" },
          upVoteButton: { "data-feature": "up" },
        }}
      />,
    );

    expect(getByRole("button", { name: "Copy" })).toHaveAttribute("data-feature", "copy");
    expect(getByRole("button", { name: "Helpful" })).toHaveAttribute("data-feature", "up");
    expect(getByRole("button", { name: "Not helpful" })).toHaveAttribute("data-feature", "down");
  });
});
