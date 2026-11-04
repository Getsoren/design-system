import { render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import ListAvatar from "../ListAvatar";

const PDF_URL = "https://api.test/files/booking/quote.pdf";
const IMAGE_URL = "https://api.test/files/booking/photo.jpg";

const items = [
  { id: "1", image: PDF_URL, subtitle: "quote.pdf", thumbnail: PDF_URL, title: "Devis" },
  {
    id: "2",
    image: PDF_URL.replace("quote", "invoice"),
    subtitle: "invoice.pdf",
    thumbnail: PDF_URL.replace("quote", "invoice"),
    title: "Facture",
  },
  { id: "3", image: IMAGE_URL, subtitle: "photo.jpg", thumbnail: IMAGE_URL, title: "Photo" },
];

describe("Test <ListAvatar/> file thumbnails", () => {
  afterEach(() => {
    Reflect.deleteProperty(window.navigator, "pdfViewerEnabled");
  });

  it("previews each PDF in an iframe when the browser has a PDF viewer", () => {
    Object.defineProperty(window.navigator, "pdfViewerEnabled", { configurable: true, value: true });
    const { container } = render(<ListAvatar items={items} />);

    expect(container.querySelectorAll("iframe")).toHaveLength(2);
  });

  it("loads no PDF on mount when the browser has no PDF viewer", () => {
    Object.defineProperty(window.navigator, "pdfViewerEnabled", { configurable: true, value: false });
    const { baseElement } = render(<ListAvatar items={items} />);

    expect(baseElement.querySelector("iframe")).not.toBeInTheDocument();
    expect(baseElement.querySelectorAll('[src$=".pdf"]')).toHaveLength(0);
  });
});
