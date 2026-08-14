import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import ChipQuantityEditor from "../ChipQuantityEditor";

describe("Test <ChipQuantityEditor/>", () => {
  it("renders quantity with unit", () => {
    const { getByText } = render(<ChipQuantityEditor quantity={3} unit="m" onChange={vi.fn()} />);

    expect(getByText("× 3 m")).toBeInTheDocument();
  });

  it("renders quantity without unit", () => {
    const { getByText } = render(<ChipQuantityEditor quantity={5} onChange={vi.fn()} />);

    expect(getByText("× 5")).toBeInTheDocument();
  });

  it("switches to a text field on click", () => {
    const { getByText, getByDisplayValue } = render(<ChipQuantityEditor quantity={3} onChange={vi.fn()} />);

    fireEvent.click(getByText("× 3"));

    expect(getByDisplayValue("3")).toBeInTheDocument();
  });

  it("commits a valid quantity on Enter", () => {
    const onChange = vi.fn();
    const { getByText, getByDisplayValue } = render(<ChipQuantityEditor quantity={3} onChange={onChange} />);

    fireEvent.click(getByText("× 3"));
    const input = getByDisplayValue("3");
    fireEvent.change(input, { target: { value: "7" } });
    fireEvent.keyDown(input, { key: "Enter" });

    expect(onChange).toHaveBeenCalledWith(7);
  });

  it("reverts an invalid quantity on blur", () => {
    const onChange = vi.fn();
    const { getByText, getByDisplayValue } = render(<ChipQuantityEditor quantity={3} onChange={onChange} />);

    fireEvent.click(getByText("× 3"));
    const input = getByDisplayValue("3");
    fireEvent.change(input, { target: { value: "0" } });
    fireEvent.blur(input);

    expect(onChange).not.toHaveBeenCalled();
    expect(getByText("× 3")).toBeInTheDocument();
  });

  it("cancels editing on Escape", () => {
    const onChange = vi.fn();
    const { getByText, getByDisplayValue } = render(<ChipQuantityEditor quantity={3} onChange={onChange} />);

    fireEvent.click(getByText("× 3"));
    const input = getByDisplayValue("3");
    fireEvent.change(input, { target: { value: "9" } });
    fireEvent.keyDown(input, { key: "Escape" });

    expect(onChange).not.toHaveBeenCalled();
    expect(getByText("× 3")).toBeInTheDocument();
  });

  it("does not switch to a text field when disabled", () => {
    const { getByText, queryByRole } = render(<ChipQuantityEditor disabled quantity={3} onChange={vi.fn()} />);

    fireEvent.click(getByText("× 3"));

    expect(queryByRole("textbox")).not.toBeInTheDocument();
  });
});
