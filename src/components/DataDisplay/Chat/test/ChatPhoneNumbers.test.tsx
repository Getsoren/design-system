import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ChatMessageBubble from "@/components/DataDisplay/Chat/components/ChatMessageBubble";
import splitPhoneNumbers from "@/components/DataDisplay/Chat/utils/splitPhoneNumbers";

const telLinks = (text: string) => splitPhoneNumbers(text).flatMap(({ href }) => (href ? [href] : []));

describe("Chat phone numbers", () => {
  it("finds French numbers whatever the separators", () => {
    expect(telLinks("06 12 34 56 78")).toEqual(["tel:+33612345678"]);
    expect(telLinks("Appelez le 06.12.34.56.78.")).toEqual(["tel:+33612345678"]);
    expect(telLinks("0612345678 ou 04-72-00-00-00")).toEqual(["tel:+33612345678", "tel:+33472000000"]);
    expect(telLinks("+33 6 12 34 56 78")).toEqual(["tel:+33612345678"]);
    expect(telLinks("+33 (0)6 12 34 56 78")).toEqual(["tel:+33612345678"]);
    expect(telLinks("0033612345678")).toEqual(["tel:+33612345678"]);
  });

  it("leaves other numbers alone", () => {
    expect(telLinks("Commande N° 34126, SIRET 12345678901234, 1 200 €")).toEqual([]);
    expect(telLinks("Réf. 106123456789")).toEqual([]);
  });

  it("makes the numbers of a message callable, next to its links", () => {
    render(
      <ChatMessageBubble
        isOwn={false}
        message={{
          authorId: "u2",
          body: "Le chauffeur : 06 12 34 56 78. Suivi : https://example.com/track/0612345678",
          createdAt: "2026-10-05T12:00:00Z",
          id: 1,
        }}
      />,
    );

    expect(screen.getByRole("link", { name: "06 12 34 56 78" })).toHaveAttribute("href", "tel:+33612345678");
    expect(screen.getByRole("link", { name: "06 12 34 56 78" })).toHaveAttribute("title", "Call 06 12 34 56 78");
    expect(screen.getByRole("link", { name: "https://example.com/track/0612345678" })).toHaveAttribute(
      "href",
      "https://example.com/track/0612345678",
    );
    expect(screen.getAllByRole("link")).toHaveLength(2);
  });
});
