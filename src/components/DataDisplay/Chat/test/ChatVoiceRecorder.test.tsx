import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import ChatVoiceRecorder from "@/components/DataDisplay/Chat/components/ChatVoiceRecorder";

describe("ChatVoiceRecorder", () => {
  it("fills the mic when it is the action to take", () => {
    const { getByRole, rerender } = render(<ChatVoiceRecorder onRecorded={vi.fn()} />);
    const plainBackground = getComputedStyle(getByRole("button")).backgroundColor;

    rerender(<ChatVoiceRecorder isHighlighted onRecorded={vi.fn()} />);

    expect(getComputedStyle(getByRole("button")).backgroundColor).not.toBe(plainBackground);
  });

  it("writes its label next to the mic when given one", () => {
    const { getByRole } = render(<ChatVoiceRecorder isHighlighted startLabel="Try your voice" onRecorded={vi.fn()} />);

    expect(getByRole("button", { name: "Try your voice" })).toBeInTheDocument();
  });
});
