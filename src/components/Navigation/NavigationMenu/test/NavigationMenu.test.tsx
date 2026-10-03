import { fireEvent, render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import NavigationMenu from "@/components/Navigation/NavigationMenu/NavigationMenu";

const STORAGE_KEY = "test-navigation-menu-collapsed";

// A bottom link whose icon only shows on the collapsed rail: whether it is there says which state the menu shows.
const FEEDBACK = {
  icon: <span data-testid="feedback-icon" />,
  iconOnlyWhenCollapsed: true,
  label: "Feedback",
  onClick: () => {},
};

const renderMenu = () => render(<NavigationMenu items={[]} bottomLink={FEEDBACK} storageKey={STORAGE_KEY} />);

const collapseToggle = (container: HTMLElement) => {
  const buttons = container.querySelectorAll("aside button");

  return buttons[buttons.length - 1];
};

describe("<NavigationMenu /> collapse toggle", () => {
  afterEach(() => localStorage.removeItem(STORAGE_KEY));

  it("collapses and expands the sidebar at the first click, with nothing else to render it", () => {
    const { container, queryByTestId } = renderMenu();

    expect(queryByTestId("feedback-icon")).not.toBeInTheDocument();

    fireEvent.click(collapseToggle(container));
    expect(queryByTestId("feedback-icon")).toBeInTheDocument();
    expect(localStorage.getItem(STORAGE_KEY)).toBe("true");

    fireEvent.click(collapseToggle(container));
    expect(queryByTestId("feedback-icon")).not.toBeInTheDocument();
    expect(localStorage.getItem(STORAGE_KEY)).toBe("false");
  });

  it("opens collapsed when that was the last choice", () => {
    localStorage.setItem(STORAGE_KEY, "true");
    const { queryByTestId } = renderMenu();

    expect(queryByTestId("feedback-icon")).toBeInTheDocument();
  });
});
