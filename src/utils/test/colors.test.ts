import { describe, expect, it } from "vitest";
import { darkTheme, lightTheme } from "@/config/theme";
import { getInvalidColor, getOutlineColor, getSoftOutlineColor, getSubtleSurfaceColor } from "@/utils/colors";

describe("getOutlineColor", () => {
  it("is grey 400 in light mode and the dark outline in dark mode", () => {
    expect(getOutlineColor(lightTheme)).toBe(lightTheme.palette.grey[400]);
    expect(getOutlineColor(darkTheme)).toBe(darkTheme.palette.border.outline);
  });
});

describe("getSoftOutlineColor", () => {
  it("is grey 200 in light mode and the dark outline in dark mode", () => {
    expect(getSoftOutlineColor(lightTheme.palette)).toBe(lightTheme.palette.grey[200]);
    expect(getSoftOutlineColor(darkTheme.palette)).toBe(darkTheme.palette.border.outline);
  });
});

describe("getInvalidColor", () => {
  it("is the error colour by default and the dark warning one on demand", () => {
    expect(getInvalidColor(lightTheme)).toBe(lightTheme.palette.error.main);
    expect(getInvalidColor(lightTheme, "warning")).toBe(lightTheme.palette.warning.dark);
  });
});

describe("getSubtleSurfaceColor", () => {
  it("lightens the paper in light mode and darkens it in dark mode", () => {
    expect(getSubtleSurfaceColor(lightTheme.palette)).toBe(lightTheme.palette.grey[100]);
    expect(getSubtleSurfaceColor(darkTheme.palette)).toBe(darkTheme.palette.grey[800]);
  });
});
