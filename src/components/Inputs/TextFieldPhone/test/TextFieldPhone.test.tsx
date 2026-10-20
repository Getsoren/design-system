import { fireEvent, render, screen } from "@testing-library/react";
import { useState } from "react";
import { describe, expect, it, vi } from "vitest";
import TextFieldPhone, { type TextFieldPhoneProps } from "../TextFieldPhone";

const ControlledPhone = (props: Partial<TextFieldPhoneProps>) => {
  const [value, setValue] = useState("");

  return <TextFieldPhone label="Phone" value={value} onChange={setValue} {...props} />;
};

describe("Test <TextFieldPhone/>", () => {
  it("is a phone input", () => {
    render(<ControlledPhone />);
    const input = screen.getByLabelText("Phone");

    expect(input).toHaveAttribute("type", "tel");
    expect(input).toHaveAttribute("inputmode", "tel");
  });

  it("formats the number by pairs as it is typed", () => {
    render(<ControlledPhone />);
    const input = screen.getByLabelText("Phone");

    fireEvent.change(input, { target: { value: "0634393949" } });

    expect(input).toHaveValue("06 34 39 39 49");
  });

  it("gives the formatted number to onChange", () => {
    const onChange = vi.fn();
    render(<TextFieldPhone label="Phone" value="" onChange={onChange} />);

    fireEvent.change(screen.getByLabelText("Phone"), { target: { value: "063" } });

    expect(onChange).toHaveBeenCalledWith("06 3");
  });

  it("formats with the given format", () => {
    render(<ControlledPhone format={(digits) => digits.slice(0, 4)} />);
    const input = screen.getByLabelText("Phone");

    fireEvent.change(input, { target: { value: "0634393949" } });

    expect(input).toHaveValue("0634");
  });

  it("still hands the input to the given ref", () => {
    const inputRef = { current: null as HTMLInputElement | null };
    render(<ControlledPhone inputRef={inputRef} />);

    expect(inputRef.current).toBe(screen.getByLabelText("Phone"));
  });
});
