import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import RatingBadge from "../RatingBadge";

describe("Test <RatingBadge/>", () => {
  it("renders the rating with one decimal", () => {
    const { getByText } = render(<RatingBadge rating={4} />);

    expect(getByText("4.0")).toBeInTheDocument();
  });

  it("shows the breakdown tooltip on hover", async () => {
    const { getByText } = render(
      <RatingBadge rating={4.4} reviewsLabel="Based on 27 reviews" dimensions={[{ label: "Deadlines", value: 4.5 }]} />,
    );

    fireEvent.mouseOver(getByText("4.4"));

    expect(await screen.findByText("Based on 27 reviews")).toBeInTheDocument();
    expect(screen.getByText("Deadlines")).toBeInTheDocument();
    expect(screen.getByText("4.5")).toBeInTheDocument();
  });

  it("renders without a tooltip when there is nothing to reveal", () => {
    const { container, getByText } = render(<RatingBadge rating={3.2} />);

    fireEvent.mouseOver(getByText("3.2"));

    expect(container.querySelector("[aria-describedby]")).not.toBeInTheDocument();
  });
});
