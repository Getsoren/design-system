import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import CheckboxCard from "../CheckboxCard";

describe("Test <CheckboxCard/>", () => {
  it("is a checkbox by default and reports the click", () => {
    const onClick = vi.fn();
    const { getByRole } = render(<CheckboxCard label="Livraison" selected onClick={onClick} />);
    const card = getByRole("checkbox", { name: "Livraison" });

    expect(card).toHaveAttribute("aria-checked", "true");
    fireEvent.click(card);
    expect(onClick).toHaveBeenCalledOnce();
  });

  it("is a radio when asked", () => {
    const { getByRole } = render(<CheckboxCard control="radio" label="Dépôt nord" selected={false} onClick={() => undefined} />);

    expect(getByRole("radio", { name: "Dépôt nord" })).toHaveAttribute("aria-checked", "false");
  });

  it("is a plain pressed button without a control", () => {
    const { getByRole } = render(<CheckboxCard control="none" label="Béton" selected onClick={() => undefined} />);

    expect(getByRole("button", { name: "Béton" })).toHaveAttribute("aria-pressed", "true");
  });

  it("shows the description and the test id", () => {
    const { getByText, getByTestId } = render(
      <CheckboxCard label="Chantier" description="12 Rue de la Paix" selected={false} onClick={() => undefined} testId="card" />,
    );

    expect(getByText("12 Rue de la Paix")).toBeInTheDocument();
    expect(getByTestId("card")).toBeInTheDocument();
  });
});
