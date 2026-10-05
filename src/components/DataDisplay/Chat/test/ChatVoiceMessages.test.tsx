import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import ChatConversationDetail from "@/components/DataDisplay/Chat/components/ChatConversationDetail";
import ChatMessageBubble from "@/components/DataDisplay/Chat/components/ChatMessageBubble";
import type { ChatAttachment, ChatMessage } from "@/components/DataDisplay/Chat/types";

const voice: ChatAttachment = {
  durationMs: 12_000,
  fileName: "vocal-20261005-091204.webm",
  id: "voice-1",
  mimeType: "audio/webm",
  size: 48_000,
  url: "https://files.example.com/vocal-20261005-091204.webm",
};

const voiceMessage: ChatMessage = { attachments: [voice], authorId: "u1", body: "", createdAt: "2026-10-05T08:00:00Z", id: 7 };

/** Hands a short take over as soon as the recording stops */
class FakeMediaRecorder {
  static isTypeSupported = (mimeType: string) => mimeType === "audio/webm";

  mimeType: string;

  ondataavailable: ((event: { data: Blob }) => void) | null = null;

  onstop: (() => void) | null = null;

  constructor(_stream: unknown, options?: { mimeType?: string }) {
    this.mimeType = options?.mimeType ?? "audio/webm";
  }

  start() {}

  stop() {
    this.ondataavailable?.({ data: new Blob(["voice"], { type: this.mimeType }) });
    this.onstop?.();
  }
}

const commonDetailProps = {
  currentUserId: "me",
  messages: [],
  onAddParticipants: vi.fn(),
  onDeleteConversation: vi.fn(),
  onNewConversation: vi.fn(),
  participants: [],
  threadId: "t1",
};

const recordATake = async (container: HTMLElement) => {
  fireEvent.click(screen.getByRole("button", { name: "Record a voice message" }));
  await waitFor(() => expect(container.querySelector('[data-test="chatVoiceSend"]')).not.toBeNull());
  fireEvent.click(container.querySelector('[data-test="chatVoiceSend"]') as HTMLElement);
};

beforeAll(() => {
  Element.prototype.scrollTo = () => {};
  vi.stubGlobal("MediaRecorder", FakeMediaRecorder);
  Object.defineProperty(navigator, "mediaDevices", {
    configurable: true,
    value: { getUserMedia: () => Promise.resolve({ getTracks: () => [{ stop: () => {} }] }) },
  });
});

afterAll(() => {
  vi.unstubAllGlobals();
});

describe("Chat voice messages", () => {
  it("plays a voice message from its own bubble, with its duration", () => {
    render(<ChatMessageBubble isOwn={false} message={voiceMessage} onLinkAttachment={vi.fn()} />);

    expect(screen.getByRole("group", { name: "Voice message" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Play" })).toBeInTheDocument();
    expect(screen.getByText("0:12")).toBeInTheDocument();
    expect(screen.queryByText("Link to an order")).toBeNull();
  });

  it("uploads a validated take and sends it at once, alone and with an empty body", async () => {
    const onSendMessage = vi.fn();
    const onUploadAttachment = vi.fn((file: File) =>
      Promise.resolve<ChatAttachment>({
        fileName: file.name,
        id: "uploaded-voice",
        mimeType: file.type,
        size: file.size,
        url: "blob:voice",
      }),
    );
    const { container } = render(
      <ChatConversationDetail
        {...commonDetailProps}
        onSendMessage={onSendMessage}
        onUploadAttachment={onUploadAttachment}
        attachmentAccept="application/pdf"
      />,
    );

    await recordATake(container);

    await waitFor(() => expect(onSendMessage).toHaveBeenCalledTimes(1));
    const [file] = onUploadAttachment.mock.calls[0];
    expect(file.name).toMatch(/^vocal-\d{8}-\d{6}\.webm$/);
    expect(file.type).toBe("audio/webm");
    expect(onSendMessage).toHaveBeenCalledWith("t1", "", [
      expect.objectContaining({ durationMs: expect.any(Number), id: "uploaded-voice", mimeType: "audio/webm" }),
    ]);
    expect(container.querySelector('[data-test="chatAttachmentTray"]')).toBeNull();
  });

  it("offers a retry when the voice message fails to upload", async () => {
    const onSendMessage = vi.fn();
    const onUploadAttachment = vi
      .fn()
      .mockRejectedValueOnce(new Error("network"))
      .mockImplementation((file: File) =>
        Promise.resolve<ChatAttachment>({
          fileName: file.name,
          id: "uploaded-voice",
          mimeType: file.type,
          size: file.size,
          url: "blob:voice",
        }),
      );
    const { container } = render(
      <ChatConversationDetail {...commonDetailProps} onSendMessage={onSendMessage} onUploadAttachment={onUploadAttachment} />,
    );

    await recordATake(container);
    expect(await screen.findByText("Voice message not sent")).toBeInTheDocument();
    expect(onSendMessage).not.toHaveBeenCalled();

    fireEvent.click(screen.getByText("Retry"));

    await waitFor(() => expect(onSendMessage).toHaveBeenCalledWith("t1", "", [expect.objectContaining({ id: "uploaded-voice" })]));
    expect(onUploadAttachment.mock.calls[1][0]).toBe(onUploadAttachment.mock.calls[0][0]);
    expect(screen.queryByText("Voice message not sent")).toBeNull();
  });

  it("leaves the mic out when voice messages are disabled", () => {
    render(
      <ChatConversationDetail {...commonDetailProps} onSendMessage={vi.fn()} onUploadAttachment={vi.fn()} enableVoiceMessages={false} />,
    );

    expect(screen.queryByLabelText("Record a voice message")).toBeNull();
  });
});
