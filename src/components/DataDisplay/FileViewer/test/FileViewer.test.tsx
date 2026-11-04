import { render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import FileViewer from "../FileViewer";

const PDF_URL = "https://api.test/files/booking/quote.pdf";
const IMAGE_URL = "https://api.test/files/booking/photo.jpg";
const IMAGE_THUMB_URL = "https://api.test/thumbs/80/booking/photo.jpg";

const setPdfViewerEnabled = (value: boolean) => {
  Object.defineProperty(window.navigator, "pdfViewerEnabled", { configurable: true, value });
};

describe("Test <FileViewer/> thumbnail", () => {
  afterEach(() => {
    // Back to the jsdom navigator, which has no own pdfViewerEnabled
    Reflect.deleteProperty(window.navigator, "pdfViewerEnabled");
  });

  it("renders a PDF in an iframe when the browser has a PDF viewer", () => {
    setPdfViewerEnabled(true);
    const { container } = render(<FileViewer src={PDF_URL} />);
    const iframe = container.querySelector("iframe");

    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute("src", PDF_URL);
    expect(container.querySelector("img")).not.toBeInTheDocument();
  });

  it("renders a PDF in an iframe when the browser does not say whether it has a PDF viewer", () => {
    // jsdom exposes no pdfViewerEnabled, like a browser that predates the flag
    expect("pdfViewerEnabled" in window.navigator).toBe(false);
    const { container } = render(<FileViewer src={PDF_URL} />);

    expect(container.querySelector("iframe")).toHaveAttribute("src", PDF_URL);
  });

  it("never loads a PDF in an iframe when the browser has no PDF viewer", () => {
    setPdfViewerEnabled(false);
    const { container } = render(<FileViewer src={PDF_URL} />);
    const img = container.querySelector("img");

    expect(container.querySelector("iframe")).not.toBeInTheDocument();
    expect(container.querySelector(`[src="${PDF_URL}"]`)).not.toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(img?.getAttribute("src")).toContain("pdf-icon");
  });

  it("keeps an image thumbnail when the browser has no PDF viewer", () => {
    setPdfViewerEnabled(false);
    const { container } = render(<FileViewer src={IMAGE_URL} srcThumb={IMAGE_THUMB_URL} />);

    expect(container.querySelector("iframe")).not.toBeInTheDocument();
    expect(container.querySelector("img")).toHaveAttribute("src", IMAGE_THUMB_URL);
  });

  it("still shows the icon when iconOnly is passed, PDF viewer or not", () => {
    setPdfViewerEnabled(true);
    const { container } = render(<FileViewer iconOnly src={PDF_URL} />);

    expect(container.querySelector("iframe")).not.toBeInTheDocument();
    expect(container.querySelector("img")?.getAttribute("src")).toContain("pdf-icon");
  });

  it("does not mount the PDF lightbox until it is opened", () => {
    setPdfViewerEnabled(false);
    const { container, baseElement } = render(<FileViewer disableThumb src={PDF_URL} open={false} />);

    expect(container).toBeEmptyDOMElement();
    expect(baseElement.querySelector("iframe")).not.toBeInTheDocument();
  });

  it("paints the thumbnail on the paper background, and the icon on a transparent one", () => {
    setPdfViewerEnabled(true);
    const { container, rerender } = render(<FileViewer src={PDF_URL} />);
    const thumbnail = () => container.querySelector("[data-test='fileViewer']") as HTMLElement;

    expect(getComputedStyle(thumbnail()).backgroundColor).toBe("rgb(255, 255, 255)");

    rerender(<FileViewer iconOnly src={PDF_URL} />);

    expect(getComputedStyle(thumbnail()).backgroundColor).toBe("rgba(0, 0, 0, 0)");
  });
});
