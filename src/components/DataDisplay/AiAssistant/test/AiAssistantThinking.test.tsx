import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import AiAssistantThinking from "@/components/DataDisplay/AiAssistant/components/AiAssistantThinking";

describe("<AiAssistantThinking />", () => {
  it("says what the assistant does beside its working avatar", () => {
    const { container, getByRole, queryByTestId, queryByRole } = render(<AiAssistantThinking label="Thinking…" />);

    expect(getByRole("status")).toHaveTextContent("Thinking…");
    // The working mark: two satellites, each drawn behind and in front of the ellipse.
    expect(container.querySelectorAll("circle")).toHaveLength(4);
    expect(queryByTestId("assistantThinkingSteps")).not.toBeInTheDocument();
    expect(queryByRole("button")).not.toBeInTheDocument();
  });

  it("lists the steps of the turn, in order", () => {
    const { getByTestId } = render(
      <AiAssistantThinking
        label="Thinking…"
        steps={[
          { id: "read", isInProgress: false, label: "Reading the data" },
          { id: "search", isInProgress: true, label: "Searching the app" },
        ]}
      />,
    );

    expect(getByTestId("assistantThinkingSteps")).toHaveTextContent("Reading the dataSearching the app");
  });

  it("lets the user cut the turn short", () => {
    const onStop = vi.fn();
    const { getByRole } = render(
      <AiAssistantThinking
        label="Thinking…"
        onStop={onStop}
        labels={{ stop: "Stop" }}
        slotProps={{ stopButton: { "data-testid": "stop" } }}
      />,
    );

    const stop = getByRole("button", { name: "Stop" });
    expect(stop).toHaveAttribute("data-testid", "stop");
    fireEvent.click(stop);
    expect(onStop).toHaveBeenCalledTimes(1);
  });
});
