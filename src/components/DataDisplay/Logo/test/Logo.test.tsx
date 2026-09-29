import { render, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Logo from "../Logo";

describe("Test <Logo/>", () => {
  it("render img", async () => {
    const { container, getByRole } = render(<Logo component="img" />);
    const svg = container.querySelector("svg");
    const img = await waitFor(() => getByRole("img"));

    expect(svg).not.toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(img).toHaveProperty("alt", "Tracktor");
  });

  it("render svg", () => {
    const { container } = render(<Logo component="svg" />);
    const img = container.querySelector("img");
    const svg = container.querySelector("svg");

    expect(svg).toBeInTheDocument();
    expect(img).not.toBeInTheDocument();
  });

  it("render the Soren signature as img", async () => {
    const { getByRole } = render(<Logo brand="soren" component="img" />);
    const img = await waitFor(() => getByRole("img"));

    expect(img).toHaveProperty("alt", "Soren");
  });

  it("render the Soren signature inline, mark and wordmark in their own inks", () => {
    const { container, getByRole } = render(<Logo brand="soren" component="svg" color="#111111" colorShape="#222222" />);

    expect(getByRole("img")).toHaveAttribute("aria-label", "Soren");
    expect(container.querySelector(".sorenLogoMark path")).toHaveAttribute("fill", "#222222");
    expect(container.querySelector(".sorenLogoWordmark path")).toHaveAttribute("fill", "#111111");
  });

  it("render the Soren mark alone", () => {
    const { container } = render(<Logo brand="soren" component="svg" withoutText />);

    expect(container.querySelectorAll("path")).toHaveLength(1);
    expect(container.querySelector(".sorenLogoWordmark")).not.toBeInTheDocument();
  });
});
