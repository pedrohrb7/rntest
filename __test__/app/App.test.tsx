import { fireEvent, render } from "@testing-library/react-native";

import App from "../../App";

describe("App Component", () => {
  it("should test render App Component", () => {
    const { getByText } = render(<App />);

    expect(getByText("Auto Tests React Native")).toBeTruthy();
  });

  it("should increase counter onPress plus button", () => {
    const { getByText, getByTestId } = render(<App />);

    const plusButton = getByText("+");
    fireEvent.press(plusButton);

    const counterText = getByTestId("counter");

    expect(counterText.props.children).toBe(1);
  });

  it("should decrease counter onPress minus button", () => {
    const { getByText, getByTestId } = render(<App />);

    const plusButton = getByText("-");
    fireEvent.press(plusButton);
    const counterText = getByTestId("counter");

    expect(counterText.props.children).toBe(-1);
  });
});
