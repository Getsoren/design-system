import { describe, expect, it } from "vitest";
import { AI_ASSISTANT_GLOW_COLORS } from "@/components/DataDisplay/AiAssistant/constants";
import { assistantGlowStops } from "@/components/DataDisplay/AiAssistant/utils/gradient";

describe("the assistant's glow", () => {
  it("goes all round the mark from the one list of colours, back to the first", () => {
    expect(assistantGlowStops.map(({ color }) => color)).toEqual([...AI_ASSISTANT_GLOW_COLORS, AI_ASSISTANT_GLOW_COLORS[0]]);
    expect(assistantGlowStops[0].offset).toBe(0);
    expect(assistantGlowStops.at(-1)?.offset).toBe(1);
  });
});
