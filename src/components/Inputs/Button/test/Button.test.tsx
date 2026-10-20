import { alpha, ThemeProvider } from "@mui/material/styles";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Button from "@/components/Inputs/Button/Button";
import { lightTheme } from "@/config/theme";

/** The colour as the browser serializes it, e.g. "#1E1E1E" → "rgb(30, 30, 30)". */
const computed = (color: string) => {
  const probe = document.createElement("div");
  probe.style.color = color;

  return probe.style.color;
};

describe('<Button variant="soft" />', () => {
  it("sits on a quiet fill of its colour, primary by default", () => {
    const { palette } = lightTheme;
    const { getByRole } = render(
      <ThemeProvider theme={lightTheme}>
        <Button variant="soft">See the 12 rows</Button>
      </ThemeProvider>,
    );
    const style = getComputedStyle(getByRole("button", { name: "See the 12 rows" }));

    expect(style.backgroundColor).toBe(computed(alpha(palette.primary.main, palette.action.hoverOpacity)));
    expect(style.color).toBe(computed(palette.primary.main));
  });

  it("takes the colour it is given", () => {
    const { palette } = lightTheme;
    const { getByRole } = render(
      <ThemeProvider theme={lightTheme}>
        <Button variant="soft" color="error">
          Delete
        </Button>
      </ThemeProvider>,
    );
    const style = getComputedStyle(getByRole("button", { name: "Delete" }));

    expect(style.backgroundColor).toBe(computed(alpha(palette.error.main, palette.action.hoverOpacity)));
    expect(style.color).toBe(computed(palette.error.main));
  });

  it("stays in the text colour when inheriting", () => {
    const { getByRole } = render(
      <ThemeProvider theme={lightTheme}>
        <Button variant="soft" color="inherit">
          Inherit
        </Button>
      </ThemeProvider>,
    );

    expect(getComputedStyle(getByRole("button", { name: "Inherit" })).color).toBe(computed(lightTheme.palette.text.primary));
  });
});
