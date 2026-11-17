import { describe, expect, it } from "vitest";
import { formatDecimal, parseDecimalInput, sanitizeDecimalInput } from "@/utils/decimalInput";

describe("sanitizeDecimalInput", () => {
  it("keeps the digits and the first decimal separator only", () => {
    expect(sanitizeDecimalInput("12,5h")).toBe("12,5");
    expect(sanitizeDecimalInput("1.2.3")).toBe("1.23");
    expect(sanitizeDecimalInput("-7")).toBe("7");
  });
});

describe("parseDecimalInput", () => {
  it("reads a comma or a dot as the decimal separator", () => {
    expect(parseDecimalInput("12,5")).toBe(12.5);
    expect(parseDecimalInput("12.")).toBe(12);
    expect(parseDecimalInput("0")).toBe(0);
  });

  it("reads nothing without a digit", () => {
    expect(parseDecimalInput("")).toBeUndefined();
    expect(parseDecimalInput(",")).toBeUndefined();
  });
});

describe("formatDecimal", () => {
  it("writes a figure with the language's separator, to two decimals at most", () => {
    expect(formatDecimal(7.5, "fr")).toBe("7,5");
    expect(formatDecimal(86.254, "en")).toBe("86.25");
    expect(formatDecimal(8, "fr")).toBe("8");
  });
});
