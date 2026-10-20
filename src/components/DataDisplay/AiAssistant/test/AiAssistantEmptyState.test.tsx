import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AiAssistantEmptyState from "@/components/DataDisplay/AiAssistant/components/AiAssistantEmptyState";
import { SOREN_MARK_PATH } from "@/constants/sorenLogo";

const OUTLINE_PATH = SOREN_MARK_PATH.slice(0, SOREN_MARK_PATH.indexOf("Z") + 1);

describe("<AiAssistantEmptyState />", () => {
  it("sets the welcome's icon in the logo's silhouette, a square with soft corners", () => {
    const { container, getByTestId } = render(<AiAssistantEmptyState title="Que voulez-vous faire ?" icon={<span data-testid="icon" />} />);

    expect(container.querySelector("path")).toHaveAttribute("d", OUTLINE_PATH);
    expect(getByTestId("icon")).toBeInTheDocument();
  });
});
