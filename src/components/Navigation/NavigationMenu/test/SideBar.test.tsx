import { fireEvent, render } from "@testing-library/react";
import { ComponentProps } from "react";
import { describe, expect, it, vi } from "vitest";
import { NavigationMenuContext } from "@/components/Navigation/NavigationMenu/NavigationMenu";
import SideBar from "@/components/Navigation/NavigationMenu/SideBar/SideBar";

type ContextValue = ComponentProps<typeof NavigationMenuContext.Provider>["value"];

const BASE_CONTEXT: ContextValue = {
  closeDrawerMenu: () => {},
  density: "standard",
  isCollapsed: false,
  isDrawerOpen: false,
  isMobile: false,
  isTablet: false,
  openDrawerMenu: () => {},
  toggleCollapse: () => {},
};

const renderSideBar = (context: Partial<ContextValue>) =>
  render(
    <NavigationMenuContext.Provider value={{ ...BASE_CONTEXT, ...context }}>
      <SideBar />
    </NavigationMenuContext.Provider>,
  );

const LOGO = <span data-testid="logo">Logo</span>;

describe("<SideBar /> Logo slot", () => {
  it("is not shown on desktop, where the brand lives in the app bar", () => {
    const { queryByTestId } = renderSideBar({ Logo: LOGO });

    expect(queryByTestId("logo")).not.toBeInTheDocument();
  });

  it("heads the phone drawer, next to a labelled close button", () => {
    const closeDrawerMenu = vi.fn();
    const { getByLabelText, queryByTestId } = renderSideBar({
      closeDrawerMenu,
      isDrawerOpen: true,
      isMobile: true,
      Logo: LOGO,
    });

    expect(queryByTestId("logo")).toBeInTheDocument();
    fireEvent.click(getByLabelText("Close"));
    expect(closeDrawerMenu).toHaveBeenCalledOnce();
  });

  it("closes the drawer when something in its header is activated, not on a plain click", () => {
    const closeDrawerMenu = vi.fn();
    const { getByRole, getByTestId } = renderSideBar({
      closeDrawerMenu,
      isDrawerOpen: true,
      isMobile: true,
      Logo: (
        <span>
          <span data-testid="lockup">Lockup</span>
          <button type="button">Badge</button>
        </span>
      ),
    });

    fireEvent.click(getByTestId("lockup"));
    expect(closeDrawerMenu).not.toHaveBeenCalled();

    fireEvent.click(getByRole("button", { name: "Badge" }));
    expect(closeDrawerMenu).toHaveBeenCalledOnce();
  });

  it("heads the tablet drawer, without a close button (the page shows around it)", () => {
    const { queryByLabelText, queryByTestId } = renderSideBar({ isTablet: true, Logo: LOGO });

    expect(queryByTestId("logo")).toBeInTheDocument();
    expect(queryByLabelText("Close")).not.toBeInTheDocument();
  });
});

describe("<SideBar /> bottom links", () => {
  it("leaves the hidden ones out", () => {
    const { queryByText } = renderSideBar({
      bottomLink: [
        { label: "Support", onClick: () => {} },
        { hidden: true, label: "Mobile app", onClick: () => {} },
      ],
    });

    expect(queryByText("Support")).toBeInTheDocument();
    expect(queryByText("Mobile app")).not.toBeInTheDocument();
  });

  it("renders no footer block when every link is hidden", () => {
    const { container } = renderSideBar({ bottomLink: [{ hidden: true, label: "Mobile app", onClick: () => {} }] });

    expect(container.querySelectorAll("a")).toHaveLength(0);
  });

  it("shows the end adornment right after the label", () => {
    const { getByTestId } = renderSideBar({
      bottomLink: [{ endAdornment: <span data-testid="marks">Marks</span>, label: "Mobile app", onClick: () => {} }],
    });

    expect(getByTestId("marks").parentElement).toHaveTextContent(/^Mobile appMarks$/);
  });
});
