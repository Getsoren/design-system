import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Notice from "../Notice";

describe("Test <Notice/>", () => {
  it("shows what it is given", () => {
    const { getByTestId } = render(<Notice data-testid="notice">No order found</Notice>);

    expect(getByTestId("notice")).toHaveTextContent("No order found");
  });
});
