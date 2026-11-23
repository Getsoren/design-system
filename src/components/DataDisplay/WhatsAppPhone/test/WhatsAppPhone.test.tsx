import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import WhatsAppPhone from "@/components/DataDisplay/WhatsAppPhone/WhatsAppPhone";

describe("<WhatsAppPhone />", () => {
  it("draws the code it is given on the phone", () => {
    render(
      <WhatsAppPhone>
        <svg data-testid="code" />
      </WhatsAppPhone>,
    );

    expect(screen.getByTestId("whatsapp-phone-code")).toContainElement(screen.getByTestId("code"));
  });

  it("draws the phone alone without a code", () => {
    const { container } = render(<WhatsAppPhone />);

    expect(screen.queryByTestId("whatsapp-phone-code")).toBeNull();
    expect(container.querySelector("img")).toBeInTheDocument();
  });
});
