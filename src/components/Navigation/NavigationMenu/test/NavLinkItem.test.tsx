import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type { NavLinkProps } from "@/components/Navigation/NavigationMenu/NavigationMenu";
import NavLinkItem from "@/components/Navigation/NavigationMenu/NavLinkItem";

const TAG = "data-amp-track-feature";

/** Mirrors react-router's NavLink: every unknown prop is spread on the anchor */
const RouterLink = ({ to, children, className: _className, end: _end, state: _state, ...rest }: NavLinkProps) => (
  <a href={to} {...rest}>
    {typeof children === "function" ? children({ isActive: false, isPending: false }) : children}
  </a>
);

describe("<NavLinkItem /> data-* props", () => {
  it("lands on the plain anchor", () => {
    const { getByText } = render(
      <NavLinkItem url="/deals" {...{ [TAG]: "nav.deals" }}>
        Deals
      </NavLinkItem>,
    );

    expect(getByText("Deals").closest("a")).toHaveAttribute(TAG, "nav.deals");
  });

  it("is forwarded to a router link component", () => {
    const { getByText } = render(
      <NavLinkItem url="/deals" component={RouterLink} {...{ [TAG]: "nav.deals" }}>
        Deals
      </NavLinkItem>,
    );

    expect(getByText("Deals").closest("a")).toHaveAttribute(TAG, "nav.deals");
  });

  it("stays on the disabled placeholder", () => {
    const { getByText } = render(
      <NavLinkItem url="/deals" disabled {...{ [TAG]: "nav.deals" }}>
        Deals
      </NavLinkItem>,
    );

    expect(getByText("Deals").closest("[aria-disabled]")).toHaveAttribute(TAG, "nav.deals");
  });
});
