import { ThemeProvider } from "@mui/material/styles";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import LogoAvatar from "@/components/DataDisplay/LogoAvatar/LogoAvatar";
import { lightTheme } from "@/config/theme";

const renderLogo = (size?: number) =>
  render(
    <ThemeProvider theme={lightTheme}>
      <LogoAvatar size={size} />
    </ThemeProvider>,
  ).container.firstElementChild;

describe("<LogoAvatar />", () => {
  it("rounds its corners with the theme's radius at the default size", () => {
    expect(renderLogo()).toHaveStyle({ borderRadius: `${lightTheme.shape.borderRadius}px`, height: "40px" });
  });

  it("shrinks its corners with a small logo, so it never reads as a pill", () => {
    expect(renderLogo(20)).toHaveStyle({ borderRadius: "4px" });
  });

  it("keeps the theme's radius on a big logo", () => {
    expect(renderLogo(72)).toHaveStyle({ borderRadius: `${lightTheme.shape.borderRadius}px` });
  });
});
