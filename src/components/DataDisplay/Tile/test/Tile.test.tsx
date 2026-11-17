import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Tile from "../Tile";

describe("Test <Tile/>", () => {
  it("shows its picture, in place of what stands for it", () => {
    const { container, queryByText } = render(<Tile src="/sheet.png">W2</Tile>);

    expect(container.querySelector("img")).toHaveAttribute("src", "/sheet.png");
    expect(queryByText("W2")).not.toBeInTheDocument();
  });

  it("falls back to its children without a picture, or when it fails to load", () => {
    const { container, getByText } = render(<Tile src="/sheet.pdf">W2</Tile>);

    fireEvent.error(container.querySelector("img") as HTMLImageElement);

    expect(container.querySelector("img")).not.toBeInTheDocument();
    expect(getByText("W2")).toBeInTheDocument();
  });

  it("lays its overlay over the tile", () => {
    const { getByTestId } = render(<Tile overlay={<span data-testid="scan" />} data-testid="tile" />);

    expect(getByTestId("tile")).toContainElement(getByTestId("scan"));
  });
});
