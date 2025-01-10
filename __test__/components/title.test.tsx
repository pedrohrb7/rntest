import { render } from "@testing-library/react-native";
import Title from "../../src/components/Title";

describe("Test Title Component", () => {
  it("should render title correctly", () => {
    const { getByText } = render(<Title title="ReactNative" />);

    expect(getByText("ReactNative")).toBeTruthy();
  });

  it("should check Title style", () => {
    const { getByText } = render(<Title title="ReactNative" />);

    const titleElement = getByText("ReactNative");
    expect(titleElement.props.style).toMatchObject({
      fontSize: 30,
      color: "blue",
      marginBottom: 16,
    });
  });
});
