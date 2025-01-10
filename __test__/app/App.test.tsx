import { render } from "@testing-library/react-native";

import App from "../../App";

describe("App Component", () => {
  it("should test render App Component", () => {
    const { getByText } = render(<App />);

    expect(getByText("Auto Tests React Native")).toBeTruthy();
  });
});
