import { fireEvent, render } from "@testing-library/react-native";
import Form from "../../src/components/Form";

describe("Test Form Component", () => {
  it("should authorize when pass email and password correctly", () => {
    const { getByText, getByPlaceholderText } = render(<Form />);

    const inputEmail = getByPlaceholderText("Informe o email");
    const passInput = getByPlaceholderText("Informe a senha");
    const button = getByText("Entrar");

    fireEvent.changeText(inputEmail, "test@test.com");
    fireEvent.changeText(passInput, "1231");

    fireEvent.press(button);

    expect(getByText("Login autorizado!")).toBeTruthy();
  });

  it("should render message when email and pass is incorrect", () => {
    const { getByText, getByPlaceholderText } = render(<Form />);

    const inputEmail = getByPlaceholderText("Informe o email");
    const passInput = getByPlaceholderText("Informe a senha");
    const button = getByText("Entrar");

    fireEvent.changeText(inputEmail, "teste@teste.com");
    fireEvent.changeText(passInput, "1231");

    fireEvent.press(button);

    expect(getByText("Login/Senha incorretos!")).toBeTruthy();
  });
});
