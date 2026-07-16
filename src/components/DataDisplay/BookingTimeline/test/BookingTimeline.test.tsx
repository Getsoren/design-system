import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import BookingTimeline from "../BookingTimeline";
import type { BookingTimelineEvent } from "../types";

const event = (overrides: Partial<BookingTimelineEvent> = {}): BookingTimelineEvent => ({
  key: "event",
  label: "Engine breakdown",
  labelText: "Engine breakdown",
  ...overrides,
});

describe("Test <BookingTimeline/>", () => {
  it("renders the anchors and the events", () => {
    const { getByText } = render(
      <BookingTimeline
        start={{ eyebrow: "Start", reached: true, title: "Monday 3 June", titleSuffix: "(Delivery 8am - 12pm)" }}
        end={{ eyebrow: "End", title: "Friday 14 June" }}
        events={[event({ date: "5 June" })]}
      />,
    );
    expect(getByText("Start")).toBeInTheDocument();
    expect(getByText("Monday 3 June")).toBeInTheDocument();
    expect(getByText("(Delivery 8am - 12pm)")).toBeInTheDocument();
    expect(getByText("End")).toBeInTheDocument();
    expect(getByText("Engine breakdown")).toBeInTheDocument();
    expect(getByText("5 June")).toBeInTheDocument();
  });

  it("renders the delivery and retrieval bookends when provided", () => {
    const { getByText } = render(
      <BookingTimeline
        delivery={{ eyebrow: "Delivery", reached: true, title: "Saturday 1 June" }}
        start={{ eyebrow: "Start", reached: true, title: "Monday 3 June" }}
        end={{ eyebrow: "End", title: "Friday 14 June" }}
        retrieval={{ eyebrow: "Retrieval", title: "Monday 17 June" }}
      />,
    );
    expect(getByText("Delivery")).toBeInTheDocument();
    expect(getByText("Retrieval")).toBeInTheDocument();
  });

  it("labels the status node with the built-in English strings", () => {
    const { getByLabelText } = render(<BookingTimeline events={[event({ status: "open" }), event({ key: "closed", status: "closed" })]} />);
    expect(getByLabelText("Open")).toBeInTheDocument();
    expect(getByLabelText("Closed")).toBeInTheDocument();
  });

  it("prefers the `labels` overrides over the built-in strings", () => {
    const { getByLabelText, queryByLabelText } = render(
      <BookingTimeline events={[event({ status: "open" })]} labels={{ open: "Ouvert" }} />,
    );
    expect(getByLabelText("Ouvert")).toBeInTheDocument();
    expect(queryByLabelText("Open")).not.toBeInTheDocument();
  });

  it("calls `onClick` when clicking an event row", () => {
    const onClick = vi.fn();
    const { getByText } = render(<BookingTimeline events={[event({ onClick })]} />);
    fireEvent.click(getByText("Engine breakdown"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("renders the end call to action content", () => {
    const { getByText } = render(<BookingTimeline end={{ content: <button type="button">Extend</button>, title: "Friday 14 June" }} />);
    expect(getByText("Extend")).toBeInTheDocument();
  });

  it("stacks at most three photo thumbnails and overlays the remaining count", () => {
    const photos = Array.from({ length: 5 }, (_, i) => ({ name: `photo-${i}`, src: `https://example.com/${i}.jpg` }));
    const { getAllByRole, getByText } = render(<BookingTimeline events={[event({ photos })]} />);
    expect(getAllByRole("img")).toHaveLength(3);
    expect(getByText("+2")).toBeInTheDocument();
  });

  it("shows the empty message when there is nothing to display", () => {
    const { getByText } = render(<BookingTimeline emptyMessage="No events" />);
    expect(getByText("No events")).toBeInTheDocument();
  });

  it("shows the skeleton loading state", () => {
    const { container } = render(<BookingTimeline isLoading />);
    expect(container.querySelectorAll(".MuiSkeleton-root").length).toBeGreaterThan(0);
  });
});
