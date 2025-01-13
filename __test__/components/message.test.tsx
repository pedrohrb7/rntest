import { fireEvent, render, screen } from "@testing-library/react-native";
import Message from "../../src/components/Message";

describe("Test Message Component", () => {
  it("should test message Component", () => {
    const { getByTestId } = render(<Message />);

    expect(getByTestId("message").props.children).toBe("loading...");
  });

  it("should switch on click button", () => {
    render(<Message />);
    expect(screen.getByTestId("message").props.children).toBe("loading...");

    fireEvent.press(screen.getByText("Acessar"));
    expect(screen.getByTestId("message").props.children).toBe("Seja bem-vindo");
  });
});
