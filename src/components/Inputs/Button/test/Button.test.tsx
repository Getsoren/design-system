import { ThemeProvider } from "@mui/material/styles";
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
  it("sits on a quiet grey fill, in the text colour", () => {
    const { getByRole } = render(
      <ThemeProvider theme={lightTheme}>
        <Button variant="soft">See the 12 rows</Button>
      </ThemeProvider>,
    );
    const style = getComputedStyle(getByRole("button", { name: "See the 12 rows" }));

    expect(style.backgroundColor).toBe(computed(lightTheme.palette.action.hover));
    expect(style.color).toBe(computed(lightTheme.palette.text.primary));
  });
});
