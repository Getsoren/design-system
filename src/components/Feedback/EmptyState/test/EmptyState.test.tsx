import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import EmptyState from "../EmptyState";

describe("Test <EmptyState/>", () => {
  it("renders the default illustration and description", () => {
    const { container, getByText } = render(<EmptyState description="No data" />);

    expect(container.querySelector("svg")).toBeInTheDocument();
    expect(getByText("No data")).toBeInTheDocument();
  });

  it("renders the subtitle below the description", () => {
    const { getByText } = render(<EmptyState description="No data" subtitle="Add one to get started" />);

    expect(getByText("No data")).toBeInTheDocument();
    expect(getByText("Add one to get started")).toBeInTheDocument();
  });

  it("renders a custom icon instead of the default illustration", () => {
    const { getByTestId } = render(<EmptyState icon={<span data-testid="custom-icon" />} />);

    expect(getByTestId("custom-icon")).toBeInTheDocument();
  });

  it("does not render an action button without actionLabel", () => {
    const { queryByRole } = render(<EmptyState description="No data" />);

    expect(queryByRole("button")).not.toBeInTheDocument();
  });

  it("renders the action with a custom root component", () => {
    const { getByRole } = render(<EmptyState actionLabel="Go back" actionProps={{ component: "a", href: "/home" }} />);

    const link = getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveProperty("textContent", "Go back");
    expect(link.getAttribute("href")).toBe("/home");
  });
});
