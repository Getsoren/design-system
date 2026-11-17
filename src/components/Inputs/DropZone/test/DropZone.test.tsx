import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import DropZone, { type DropZoneProps } from "../DropZone";

const SHEET = new File(["sheet"], "sheet.pdf", { type: "application/pdf" });

const renderZone = (props: Partial<DropZoneProps> = {}) => {
  const onFiles = vi.fn();
  const utils = render(
    <DropZone onFiles={onFiles} data-testid="zone" inputProps={{ "data-testid": "input" }} {...props}>
      {({ isDragging }) => (isDragging ? "Drop it" : "Drop a file")}
    </DropZone>,
  );

  return { ...utils, onFiles, zone: utils.getByTestId("zone") };
};

describe("Test <DropZone/>", () => {
  it("hands over the files picked from its input, which can take the same files again", () => {
    const { getByTestId, onFiles } = renderZone();
    const input = getByTestId("input") as HTMLInputElement;

    fireEvent.change(input, { target: { files: [SHEET] } });

    expect(onFiles).toHaveBeenCalledWith([SHEET]);
    expect(input.value).toBe("");
  });

  it("tells its children while files are dragged over it, and hands over the files dropped", () => {
    const { zone, onFiles } = renderZone();

    fireEvent.dragOver(zone);
    expect(zone).toHaveTextContent("Drop it");

    fireEvent.drop(zone, { dataTransfer: { files: [SHEET] } });

    expect(onFiles).toHaveBeenCalledWith([SHEET]);
    expect(zone).toHaveTextContent("Drop a file");
  });

  it("takes nothing while disabled", () => {
    const { zone, onFiles } = renderZone({ disabled: true });

    fireEvent.dragOver(zone);
    fireEvent.drop(zone, { dataTransfer: { files: [SHEET] } });

    expect(zone).toHaveTextContent("Drop a file");
    expect(onFiles).not.toHaveBeenCalled();
  });
});
