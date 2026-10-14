import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import PillGroup from "../PillGroup";

const OPTIONS = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "no" },
];

describe("Test <PillGroup/>", () => {
  it("renders a radio group and reports the tapped option", () => {
    const onChange = vi.fn();
    const { getByRole } = render(<PillGroup aria-label="Operator" options={OPTIONS} value="yes" onChange={onChange} />);

    expect(getByRole("radiogroup", { name: "Operator" })).toBeInTheDocument();
    expect(getByRole("radio", { name: "Yes" })).toHaveAttribute("aria-checked", "true");

    fireEvent.click(getByRole("radio", { name: "No" }));

    expect(onChange).toHaveBeenCalledWith("no");
  });

  it("toggles the tapped option in and out of a multiple selection", () => {
    const onChange = vi.fn();
    const { getByRole } = render(<PillGroup multiple aria-label="Days" options={OPTIONS} value={["yes"]} onChange={onChange} />);

    fireEvent.click(getByRole("checkbox", { name: "No" }));
    expect(onChange).toHaveBeenLastCalledWith(["yes", "no"]);

    fireEvent.click(getByRole("checkbox", { name: "Yes" }));
    expect(onChange).toHaveBeenLastCalledWith([]);
  });

  it("shows the helper text", () => {
    const { getByText } = render(<PillGroup options={OPTIONS} onChange={() => undefined} error helperText="Required" />);

    expect(getByText("Required")).toBeInTheDocument();
  });
});
