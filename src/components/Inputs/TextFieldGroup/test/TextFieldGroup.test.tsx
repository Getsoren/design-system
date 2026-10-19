import { TextField } from "@mui/material";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import TextFieldGroup from "../TextFieldGroup";

describe("Test <TextFieldGroup/>", () => {
  it("puts the separator between the fields of a segmented group", () => {
    const { getAllByText, getByLabelText } = render(
      <TextFieldGroup direction="row" variant="segmented" separator="to">
        <TextField variant="filled" label="Start" />
        <TextField variant="filled" label="End" />
        <TextField variant="filled" label="Return" />
      </TextFieldGroup>,
    );

    expect(getByLabelText("Start")).toBeInTheDocument();
    expect(getAllByText("to")).toHaveLength(2);
  });

  it("keeps the hairlines of the outlined group, without a separator", () => {
    const { queryByText } = render(
      <TextFieldGroup direction="row" separator="to">
        <TextField variant="filled" label="Start" />
        <TextField variant="filled" label="End" />
      </TextFieldGroup>,
    );

    expect(queryByText("to")).not.toBeInTheDocument();
  });
});
