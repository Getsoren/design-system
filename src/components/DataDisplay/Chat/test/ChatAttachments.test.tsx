import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeAll, describe, expect, it, vi } from "vitest";
import ChatConversationDetail from "@/components/DataDisplay/Chat/components/ChatConversationDetail";
import ChatMessageInput from "@/components/DataDisplay/Chat/components/ChatMessageInput";
import type { ChatAttachment } from "@/components/DataDisplay/Chat/types";
import formatFileSize from "@/components/DataDisplay/Chat/utils/formatFileSize";
import matchesAccept from "@/components/DataDisplay/Chat/utils/matchesAccept";

const createFile = (name: string, type: string, size = 1024) => new File([new Uint8Array(size)], name, { type });

const toAttachment = (file: File): ChatAttachment => ({
  fileName: file.name,
  id: `id-${file.name}`,
  mimeType: file.type,
  size: file.size,
  url: `https://files.example.com/${file.name}`,
});

const selectFiles = (container: HTMLElement, files: File[]) => {
  const input = container.querySelector<HTMLInputElement>('[data-test="chatAttachFileInput"]');

  if (!input) {
    throw new Error("The attach input is missing");
  }

  fireEvent.change(input, { target: { files } });
};

const commonDetailProps = {
  currentUserId: "me",
  messages: [],
  onAddParticipants: vi.fn(),
  onDeleteConversation: vi.fn(),
  onNewConversation: vi.fn(),
  participants: [],
  threadId: "t1",
};

beforeAll(() => {
  Element.prototype.scrollTo = () => {};
  URL.createObjectURL = vi.fn(() => "blob:preview");
  URL.revokeObjectURL = vi.fn();
});

describe("Chat attachments", () => {
  it("sends the uploaded files with the text, in a single message", async () => {
    const onSendMessage = vi.fn();
    const onUploadAttachment = vi.fn((file: File) => Promise.resolve(toAttachment(file)));
    const pdf = createFile("bon-de-livraison.pdf", "application/pdf");
    const { container } = render(
      <ChatConversationDetail {...commonDetailProps} onSendMessage={onSendMessage} onUploadAttachment={onUploadAttachment} />,
    );

    selectFiles(container, [pdf]);
    fireEvent.change(screen.getByPlaceholderText("Write a message..."), { target: { value: "Voici le BL" } });
    await waitFor(() => expect(screen.getByLabelText("Send")).toBeEnabled());
    fireEvent.click(screen.getByLabelText("Send"));

    expect(onUploadAttachment).toHaveBeenCalledWith(pdf, expect.any(Function));
    expect(onSendMessage).toHaveBeenCalledWith("t1", "Voici le BL", [toAttachment(pdf)]);
    expect(screen.queryByText("bon-de-livraison.pdf")).toBeNull();
  });

  it("sends files without any text", async () => {
    const onSend = vi.fn();
    const pdf = createFile("photo.pdf", "application/pdf");
    const { container } = render(<ChatMessageInput onSend={onSend} onUploadAttachment={(file) => Promise.resolve(toAttachment(file))} />);

    selectFiles(container, [pdf]);
    await waitFor(() => expect(screen.getByLabelText("Send")).toBeEnabled());
    fireEvent.click(screen.getByLabelText("Send"));

    expect(onSend).toHaveBeenCalledWith("", [toAttachment(pdf)]);
  });

  it("keeps the former call when there is no file", () => {
    const onSendMessage = vi.fn();
    render(<ChatConversationDetail {...commonDetailProps} onSendMessage={onSendMessage} />);

    fireEvent.change(screen.getByPlaceholderText("Write a message..."), { target: { value: "Bonjour" } });
    fireEvent.click(screen.getByLabelText("Send"));

    expect(onSendMessage.mock.calls).toEqual([["t1", "Bonjour"]]);
  });

  it("disables Send while an upload is running", async () => {
    let resolveUpload: (attachment: ChatAttachment) => void = () => {};
    const pdf = createFile("devis.pdf", "application/pdf");
    const { container } = render(
      <ChatMessageInput
        onSend={vi.fn()}
        onUploadAttachment={() =>
          new Promise<ChatAttachment>((resolve) => {
            resolveUpload = resolve;
          })
        }
      />,
    );

    fireEvent.change(screen.getByPlaceholderText("Write a message..."), { target: { value: "Le devis" } });
    selectFiles(container, [pdf]);

    expect(screen.getByLabelText("Send")).toBeDisabled();

    await act(async () => resolveUpload(toAttachment(pdf)));

    expect(screen.getByLabelText("Send")).toBeEnabled();
  });

  it("refuses a file above the size limit, without uploading it", () => {
    const onUploadAttachment = vi.fn();
    const { container } = render(<ChatMessageInput onSend={vi.fn()} onUploadAttachment={onUploadAttachment} maxAttachmentSize={1024} />);

    selectFiles(container, [createFile("plan.pdf", "application/pdf", 2048)]);

    expect(onUploadAttachment).not.toHaveBeenCalled();
    expect(screen.getByRole("alert")).toHaveTextContent("File too large (1 KB max) · plan.pdf");
  });

  it("refuses unsupported types and files beyond the maximum", () => {
    const onUploadAttachment = vi.fn(() => new Promise<ChatAttachment>(() => {}));
    const { container } = render(<ChatMessageInput onSend={vi.fn()} onUploadAttachment={onUploadAttachment} maxAttachments={1} />);

    selectFiles(container, [
      createFile("a.pdf", "application/pdf"),
      createFile("b.pdf", "application/pdf"),
      createFile("c.zip", "application/zip"),
    ]);

    expect(onUploadAttachment).toHaveBeenCalledTimes(1);
    expect(screen.getByRole("alert")).toHaveTextContent("Too many files (1 max) · b.pdf");
    expect(screen.getByRole("alert")).toHaveTextContent("File type not supported · c.zip");
  });

  it("offers a retry when the upload fails", async () => {
    const onUploadAttachment = vi
      .fn()
      .mockRejectedValueOnce(new Error("network"))
      .mockImplementation((file: File) => Promise.resolve(toAttachment(file)));
    const { container } = render(<ChatMessageInput onSend={vi.fn()} onUploadAttachment={onUploadAttachment} />);

    selectFiles(container, [createFile("bl.pdf", "application/pdf")]);
    fireEvent.click(await screen.findByText("Retry"));

    await waitFor(() => expect(screen.getByLabelText("Send")).toBeEnabled());
    expect(onUploadAttachment).toHaveBeenCalledTimes(2);
  });

  it("opens the order link as soon as a file joins the composer and sends it with the file", async () => {
    const onSend = vi.fn();
    const pdf = createFile("bl.pdf", "application/pdf");
    const link = { label: "Commande #24817 · Bon de livraison" };
    const onLinkAttachment = vi.fn(() => Promise.resolve(link));
    const { container } = render(
      <ChatMessageInput
        onSend={onSend}
        onUploadAttachment={(file) => Promise.resolve(toAttachment(file))}
        onLinkAttachment={onLinkAttachment}
      />,
    );

    selectFiles(container, [pdf]);
    await screen.findByText(link.label);
    expect(onLinkAttachment).toHaveBeenCalledWith(expect.objectContaining({ fileName: "bl.pdf", mimeType: "application/pdf" }), {});
    fireEvent.click(screen.getByLabelText("Send"));

    expect(onSend).toHaveBeenCalledWith("", [{ ...toAttachment(pdf), link }]);
  });

  it("keeps the link one click away when the dialog is dismissed", async () => {
    const pdf = createFile("bl.pdf", "application/pdf");
    const { container } = render(
      <ChatMessageInput
        onSend={vi.fn()}
        onUploadAttachment={(file) => Promise.resolve(toAttachment(file))}
        onLinkAttachment={() => Promise.resolve(null)}
      />,
    );

    selectFiles(container, [pdf]);

    expect(await screen.findByText("Link to an order")).toBeInTheDocument();
  });
});

describe("Chat attachment utils", () => {
  it("formats sizes in the app language", () => {
    expect(formatFileSize(1.2 * 1024 * 1024, "fr")).toBe("1,2 Mo");
    expect(formatFileSize(350 * 1024, "en")).toBe("350 KB");
  });

  it("matches the accept attribute rules", () => {
    expect(matchesAccept({ name: "IMG_0001.HEIC", type: "" }, "image/png,.heic")).toBe(true);
    expect(matchesAccept({ name: "photo.png", type: "image/png" }, "image/*")).toBe(true);
    expect(matchesAccept({ name: "archive.zip", type: "application/zip" }, "image/*,application/pdf")).toBe(false);
  });
});
