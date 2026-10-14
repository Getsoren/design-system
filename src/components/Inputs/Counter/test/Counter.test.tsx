import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Counter from "../Counter";

describe("Test <Counter/>", () => {
  it("steps the value within its bounds", () => {
    const onChange = vi.fn();
    const { getByRole } = render(<Counter label="Quantity" value={2} min={1} max={3} onChange={onChange} />);

    fireEvent.click(getByRole("button", { name: "Increase" }));
    expect(onChange).toHaveBeenLastCalledWith(3);

    fireEvent.click(getByRole("button", { name: "Decrease" }));
    expect(onChange).toHaveBeenLastCalledWith(1);
  });

  it("disables the button at a bound", () => {
    const { getByRole } = render(<Counter label="Quantity" value={1} min={1} onChange={() => undefined} />);

    expect(getByRole("button", { name: "Decrease" })).toBeDisabled();
    expect(getByRole("button", { name: "Increase" })).toBeEnabled();
  });

  it("shows the unit and the test ids", () => {
    const { getByTestId } = render(<Counter label="Hours" value={8} unit="h" onChange={() => undefined} testId="hours" />);

    expect(getByTestId("hours-value")).toHaveTextContent("8 h");
    expect(getByTestId("hours-plus")).toBeInTheDocument();
  });
});
