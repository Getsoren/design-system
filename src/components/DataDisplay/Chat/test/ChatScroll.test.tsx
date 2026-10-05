import { act, fireEvent, render } from "@testing-library/react";
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import ChatConversationDetail from "@/components/DataDisplay/Chat/components/ChatConversationDetail";

// jsdom has neither layout nor ResizeObserver: the test drives both
const resizeCallbacks: (() => void)[] = [];
const OriginalResizeObserver = globalThis.ResizeObserver;

const notifyResize = () =>
  act(() => {
    for (const callback of resizeCallbacks) {
      callback();
    }
  });

/**
 * Gives the scrolling area a fake geometry: a 400px viewport over `contentHeight` of messages.
 */
const mockGeometry = (container: HTMLElement, initialContentHeight: number) => {
  let contentHeight = initialContentHeight;
  let scrollTop = 0;

  Object.defineProperties(container, {
    clientHeight: { configurable: true, get: () => 400 },
    scrollHeight: { configurable: true, get: () => contentHeight },
    scrollTop: {
      configurable: true,
      get: () => scrollTop,
      set: (value: number) => {
        scrollTop = Math.min(value, contentHeight - 400);
      },
    },
  });

  return {
    getScrollTop: () => scrollTop,
    grow: (height: number) => {
      contentHeight += height;
    },
  };
};

const renderConversation = () => {
  const { container } = render(
    <ChatConversationDetail
      threadId="t1"
      currentUserId="me"
      participants={[]}
      messages={[{ authorId: "me", body: "Bonjour", createdAt: "2026-10-05T08:00:00Z", id: 1 }]}
      onAddParticipants={vi.fn()}
      onDeleteConversation={vi.fn()}
      onNewConversation={vi.fn()}
      onSendMessage={vi.fn()}
    />,
  );
  const scrollArea = container.querySelector<HTMLElement>('[data-test="chatMessages"]');

  if (!scrollArea) {
    throw new Error("The scrolling area is missing");
  }

  return scrollArea;
};

beforeAll(() => {
  Element.prototype.scrollTo = () => {};
  globalThis.ResizeObserver = class {
    callback: () => void;

    constructor(callback: () => void) {
      this.callback = callback;
      resizeCallbacks.push(callback);
    }

    observe() {}

    unobserve() {}

    disconnect() {
      resizeCallbacks.splice(resizeCallbacks.indexOf(this.callback), 1);
    }
  } as unknown as typeof ResizeObserver;
});

afterAll(() => {
  globalThis.ResizeObserver = OriginalResizeObserver;
});

describe("Chat scroll", () => {
  it("keeps a reader at the bottom there when the content grows (reaction, image, composer tray)", () => {
    const container = renderConversation();
    const geometry = mockGeometry(container, 1000);

    container.scrollTop = 600;
    fireEvent.scroll(container);
    geometry.grow(120);
    notifyResize();

    expect(geometry.getScrollTop()).toBe(720);
  });

  it("leaves a reader up in the history where they are", () => {
    const container = renderConversation();
    const geometry = mockGeometry(container, 1000);

    container.scrollTop = 200;
    fireEvent.scroll(container);
    geometry.grow(120);
    notifyResize();

    expect(geometry.getScrollTop()).toBe(200);
  });
});
