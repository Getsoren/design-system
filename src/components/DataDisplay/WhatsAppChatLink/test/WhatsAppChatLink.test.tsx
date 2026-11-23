import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import WhatsAppChatLink from "@/components/DataDisplay/WhatsAppChatLink/WhatsAppChatLink";

const URL = "https://wa.me/33700000000?text=Hello";
const CODE = <svg data-testid="code" />;

/**
 * Every media query matches: the screen is a phone's
 */
const onPhone = () =>
  vi.stubGlobal("matchMedia", (query: string) => ({
    addEventListener: vi.fn(),
    addListener: vi.fn(),
    matches: true,
    media: query,
    removeEventListener: vi.fn(),
    removeListener: vi.fn(),
  }));

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("<WhatsAppChatLink />", () => {
  it("shows the code on the phone picture on a computer", () => {
    render(<WhatsAppChatLink url={URL} code={CODE} label="Open WhatsApp" />);

    expect(screen.getByTestId("whatsapp-phone-code")).toContainElement(screen.getByTestId("code"));
    expect(screen.queryByTestId("whatsapp-chat-open")).toBeNull();
  });

  it("shows the phone alone while the conversation is being prepared, whatever code it is given", () => {
    render(<WhatsAppChatLink code={CODE} label="Open WhatsApp" />);

    expect(screen.getByTestId("whatsapp-phone")).toBeInTheDocument();
    expect(screen.queryByTestId("whatsapp-phone-code")).toBeNull();
  });

  it("opens the conversation from a button on a phone", () => {
    onPhone();
    render(<WhatsAppChatLink url={URL} code={CODE} label="Open WhatsApp" />);

    expect(screen.getByTestId("whatsapp-chat-open")).toHaveAttribute("href", URL);
    expect(screen.getByTestId("whatsapp-chat-open")).toHaveTextContent("Open WhatsApp");
  });

  it("disables the button on a phone while the conversation is being prepared", () => {
    onPhone();
    render(<WhatsAppChatLink label="Open WhatsApp" />);

    expect(screen.getByTestId("whatsapp-chat-open")).toBeDisabled();
  });
});
