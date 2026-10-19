import { describe, expect, it } from "vitest";
import { AI_ASSISTANT_DOCKED_INSET, AI_ASSISTANT_DOCKED_SPACE } from "@/components/DataDisplay/AiAssistant/constants";
import { getAiAssistantNeighbourSx } from "@/components/DataDisplay/AiAssistant/utils/docked";

describe("getAiAssistantNeighbourSx", () => {
  it("sets a surface beside the docked panel, under the given top, with the panel's look", () => {
    expect(getAiAssistantNeighbourSx(60)).toMatchObject({
      border: 1,
      bottom: AI_ASSISTANT_DOCKED_INSET,
      overflow: "hidden",
      right: AI_ASSISTANT_DOCKED_SPACE,
      top: 60 + AI_ASSISTANT_DOCKED_INSET,
    });
  });

  it("starts from the top of the screen by default", () => {
    expect(getAiAssistantNeighbourSx().top).toBe(AI_ASSISTANT_DOCKED_INSET);
  });
});
