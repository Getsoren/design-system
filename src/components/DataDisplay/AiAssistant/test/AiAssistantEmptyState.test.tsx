import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AiAssistantEmptyState from "@/components/DataDisplay/AiAssistant/components/AiAssistantEmptyState";

describe("<AiAssistantEmptyState />", () => {
  it("shows the welcome's icon as given, with no silhouette behind it", () => {
    const { container, getByTestId } = render(<AiAssistantEmptyState title="Que voulez-vous faire ?" icon={<span data-testid="icon" />} />);

    expect(getByTestId("icon")).toBeInTheDocument();
    expect(container.querySelector("path")).toBeNull();
  });
});
