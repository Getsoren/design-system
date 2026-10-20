import { createTheme } from "@mui/material/styles";
import { describe, expect, it } from "vitest";
import getSubtleSurfaceColor from "@/utils/getSubtleSurfaceColor";

describe("getSubtleSurfaceColor", () => {
  it("lightens the paper in light mode and darkens it in dark mode", () => {
    const light = createTheme().palette;
    const dark = createTheme({ palette: { mode: "dark" } }).palette;

    expect(getSubtleSurfaceColor(light)).toBe(light.grey[100]);
    expect(getSubtleSurfaceColor(dark)).toBe(dark.grey[800]);
  });
});
