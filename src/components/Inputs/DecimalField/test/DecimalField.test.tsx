import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ThemeContext } from "@/context/Theme/ThemeProvider";
import DecimalField, { type DecimalFieldProps } from "../DecimalField";

const renderField = (props: Partial<DecimalFieldProps> = {}, language: "en" | "fr" = "fr") => {
  const onChange = vi.fn();
  const utils = render(
    <ThemeContext.Provider value={{ language }}>
      <DecimalField value={7.5} onChange={onChange} unit="h" {...props} />
    </ThemeContext.Provider>,
  );

  return { ...utils, input: utils.getByRole("textbox"), onChange };
};

describe("Test <DecimalField/>", () => {
  it("writes its figure in the language's number format, with its unit", () => {
    const { input, getByText } = renderField();

    expect(input).toHaveValue("7,5");
    expect(getByText("h")).toBeInTheDocument();
  });

  it("follows the theme's language", () => {
    expect(renderField({}, "en").input).toHaveValue("7.5");
  });

  it("answers the figure typed, with a comma or a dot, rounded to two decimals", () => {
    const { input, onChange } = renderField();

    fireEvent.change(input, { target: { value: "12,5" } });
    fireEvent.change(input, { target: { value: "8.256" } });

    expect(onChange.mock.calls).toEqual([[12.5], [8.26]]);
  });

  it("keeps the text as typed while it is edited, and answers none once emptied", () => {
    const { input, onChange } = renderField();

    fireEvent.change(input, { target: { value: "12," } });
    expect(input).toHaveValue("12,");

    fireEvent.change(input, { target: { value: "" } });
    expect(onChange).toHaveBeenLastCalledWith(null);
  });

  it("keeps a figure it refuses in the field, in error, without answering it", () => {
    const { input, onChange } = renderField({ isAccepted: (hours) => hours !== null && hours <= 24 });

    fireEvent.change(input, { target: { value: "25" } });

    expect(onChange).not.toHaveBeenCalled();
    expect(input).toHaveValue("25");
    expect(input).toHaveAttribute("aria-invalid", "true");

    fireEvent.blur(input);

    expect(input).toHaveValue("7,5");
    expect(input).toHaveAttribute("aria-invalid", "false");
  });
});
