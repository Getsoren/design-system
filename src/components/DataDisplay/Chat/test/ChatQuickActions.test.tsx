import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import ChatMessageBubble from "@/components/DataDisplay/Chat/components/ChatMessageBubble";
import ChatMessageInput from "@/components/DataDisplay/Chat/components/ChatMessageInput";
import type { ChatMessage } from "@/components/DataDisplay/Chat/types";

const quickActions = [
  { id: "extend", label: "Prolonger la location" },
  { id: "document", label: "Demander un document" },
];

const request: ChatMessage = {
  action: {
    booking: { label: "N° 34126 · Nacelle 16 m" },
    details: ["Jusqu'au 12 oct."],
    responses: [
      { id: "accept", label: "Accepter" },
      { id: "refuse", label: "Refuser", variant: "secondary" },
    ],
    status: { label: "En attente", tone: "pending" },
    title: "Demande de prolongation",
  },
  authorId: "client",
  body: "Demande de prolongation jusqu'au 12 oct.",
  createdAt: "2026-10-05T12:00:00Z",
  id: 12,
};

describe("Chat quick actions", () => {
  it("opens the order actions from a named button next to the +", () => {
    const onQuickAction = vi.fn();
    render(<ChatMessageInput onSend={vi.fn()} onUploadAttachment={vi.fn()} quickActions={quickActions} onQuickAction={onQuickAction} />);

    expect(screen.getByLabelText("Attach a file")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /Actions/ }));

    const entries = screen.getAllByRole("menuitem").map((item) => item.textContent);
    expect(entries).toEqual(["Prolonger la location", "Demander un document"]);

    fireEvent.click(screen.getByText("Prolonger la location"));
    expect(onQuickAction).toHaveBeenCalledWith("extend");
  });

  it("keeps the + alone without quick actions", () => {
    render(<ChatMessageInput onSend={vi.fn()} onUploadAttachment={vi.fn()} />);

    expect(screen.getByLabelText("Attach a file")).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /Actions/ })).toBeNull();
  });

  it("shows an action card with one-tap answers to its recipient", async () => {
    let settle = () => {};
    const onActionResponse = vi.fn(() => new Promise<void>((resolve) => (settle = resolve)));
    render(<ChatMessageBubble isOwn={false} currentUserId="supplier" message={request} onActionResponse={onActionResponse} />);

    expect(screen.getByText("Demande de prolongation")).toBeInTheDocument();
    expect(screen.getByText("N° 34126 · Nacelle 16 m")).toBeInTheDocument();
    expect(screen.getByText("En attente")).toBeInTheDocument();
    // The body only stands for the card in previews
    expect(screen.queryByText("Demande de prolongation jusqu'au 12 oct.")).toBeNull();

    fireEvent.click(screen.getByRole("button", { name: "Accepter" }));
    expect(onActionResponse).toHaveBeenCalledWith(12, "accept");
    // The other answer waits for this one
    expect(screen.getByRole("button", { name: "Refuser" })).toBeDisabled();

    settle();
    await waitFor(() => expect(screen.getByRole("button", { name: "Refuser" })).toBeEnabled());
  });

  it("opens the card's event on a click anywhere but its order and its buttons", () => {
    const onClick = vi.fn();
    const onOpenOrder = vi.fn();
    const onActionResponse = vi.fn();
    const event: ChatMessage = {
      ...request,
      action: {
        booking: { label: "N° 34126 · Nacelle 16 m", onClick: onOpenOrder },
        onClick,
        responses: [{ id: "closeEvent", label: "Clôturer" }],
        title: "Événement déclaré",
      },
    };
    render(<ChatMessageBubble isOwn currentUserId="client" message={event} onActionResponse={onActionResponse} />);

    fireEvent.click(screen.getByText("Événement déclaré"));
    expect(onClick).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByText("N° 34126 · Nacelle 16 m"));
    expect(onOpenOrder).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByRole("button", { name: "Clôturer" }));
    expect(onActionResponse).toHaveBeenCalledWith(12, "closeEvent");
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("shows an event as a media card: its photo, its kind and order, what happened, its status once settled", () => {
    const action = {
      booking: { label: "N° 284 · Chariot télescopique", reference: "N° 284" },
      cover: "https://example.com/vitre.jpg",
      details: ["Chariot télescopique", "Le 16 oct."],
      note: "Vitre brisée à la réception.",
      status: { label: "Déclaré sur la commande", tone: "warning" as const },
      title: "Casse constatée",
      variant: "event" as const,
    };
    const { container, rerender } = render(<ChatMessageBubble isOwn={false} currentUserId="client" message={{ ...request, action }} />);

    expect(container.querySelector("img")?.getAttribute("src")).toBe("https://example.com/vitre.jpg");
    expect(screen.getByText("Casse constatée — N° 284")).toBeInTheDocument();
    expect(screen.getByText("Vitre brisée à la réception.")).toBeInTheDocument();
    expect(screen.getByText("Chariot télescopique · Le 16 oct.")).toBeInTheDocument();

    rerender(
      <ChatMessageBubble
        isOwn={false}
        currentUserId="client"
        message={{ ...request, action: { ...action, status: { label: "Clôturé par Marc · 14:25", tone: "success" } } }}
      />,
    );
    expect(screen.getByText("Chariot télescopique · Le 16 oct. · Clôturé par Marc · 14:25")).toBeInTheDocument();
  });

  it("shows its author the buttons the app gives the card, none otherwise", () => {
    const onActionResponse = vi.fn();
    const action = { status: { label: "Déclaré", tone: "success" as const }, title: "Événement déclaré" };
    const event: ChatMessage = { ...request, action: { ...action, responses: [{ id: "closeEvent", label: "Clôturer" }] } };
    const { rerender } = render(<ChatMessageBubble isOwn currentUserId="client" message={event} onActionResponse={onActionResponse} />);

    fireEvent.click(screen.getByRole("button", { name: "Clôturer" }));
    expect(onActionResponse).toHaveBeenCalledWith(12, "closeEvent");

    rerender(<ChatMessageBubble isOwn currentUserId="client" message={{ ...request, action }} onActionResponse={vi.fn()} />);
    expect(screen.getByText("Événement déclaré")).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Clôturer" })).toBeNull();
  });
});
