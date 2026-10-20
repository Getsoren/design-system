import { phoneNumberAdapter } from "@getsoren/react-utils";
import { describe, expect, it } from "vitest";
import { computeNextPhone } from "@/components/Inputs/TextFieldPhone/utils/computeNextPhone";

/** The field after typing `rawValue`, the caret at `caret` (its end by default) */
const type = (previous: string, rawValue: string, caret = rawValue.length, inputType = "insertText") =>
  computeNextPhone({ caret, format: (digits) => phoneNumberAdapter(digits), inputType, previous, rawValue });

describe("computeNextPhone", () => {
  it("formats the number by pairs as it is typed", () => {
    expect(type("06 3", "06 34")).toEqual({ caret: 5, formatted: "06 34" });
    expect(type("06 34", "06 343")).toEqual({ caret: 7, formatted: "06 34 3" });
    expect(type("06 34 39 39 4", "06 34 39 39 49").formatted).toBe("06 34 39 39 49");
  });

  it("drops what is not a digit", () => {
    expect(type("06", "06a").formatted).toBe("06");
  });

  it("keeps the caret after the digit it followed when typing in the middle", () => {
    // "06 34 39" with a 1 typed after the 0
    expect(type("06 34 39", "016 34 39", 2)).toEqual({ caret: 2, formatted: "01 63 43 9" });
  });

  it("deletes the digit before a separator rather than the separator alone", () => {
    // Backspace right after the space of "06 34"
    expect(type("06 34", "0634", 2, "deleteContentBackward")).toEqual({ caret: 1, formatted: "03 4" });
  });

  it("deletes the digit after a separator on a forward delete", () => {
    // Delete right before the space of "06 34"
    expect(type("06 34", "0634", 2, "deleteContentForward")).toEqual({ caret: 2, formatted: "06 4" });
  });

  it("clamps the caret when the format drops digits", () => {
    const capped = computeNextPhone({
      caret: 3,
      format: (digits) => digits.slice(0, 2),
      inputType: "insertText",
      previous: "06",
      rawValue: "063",
    });

    expect(capped).toEqual({ caret: 2, formatted: "06" });
  });
});
