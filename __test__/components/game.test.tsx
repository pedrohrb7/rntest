import AxiosMockAdapter from "axios-mock-adapter";

import { api } from "../../src/services/api";
import { Game } from "../../src/components/Game";
import { fireEvent, render, waitFor } from "@testing-library/react-native";

const mockApi = new AxiosMockAdapter(api);

describe("Game Component", () => {
  afterEach(() => {
    mockApi.reset();
  });

  it("should render data correctly", async () => {
    mockApi.onGet("next-api/?api=game&id=15").reply(200, {
      title: "Teste Render",
      image_url: "https://sujeitoprogramador.com/next-api/foto15.png",
    });

    const { getByText, getByTestId } = render(<Game />);

    await waitFor(() => {
      expect(getByText("Teste Render")).toBeTruthy();
      expect(getByTestId("avatar").props.source.uri).toBe(
        "https://sujeitoprogramador.com/next-api/foto15.png",
      );
    });
  });

  it("should render error msg on reqError", async () => {
    mockApi.onGet("next-api/?api=game&id=15").networkError();

    const { findByText } = render(<Game />);

    const errorMessage = await findByText("Error ao buscar dados");

    expect(errorMessage).toBeTruthy();
  });

  it("should change title and image on click button", async () => {
    mockApi.onGet("next-api/?api=game&id=4").reply(200, {
      title: "Red Dead Redemption 2",
      image_url: "https://sujeitoprogramador.com/next-api/foto4.png",
    });

    const { getByText, getByTestId } = render(<Game />);
    const button = getByText("Trocar");

    fireEvent.press(button);

    await waitFor(() => {
      expect(getByText("Red Dead Redemption 2")).toBeTruthy();
      expect(getByTestId("avatar").props.source.uri).toBe(
        "https://sujeitoprogramador.com/next-api/foto4.png",
      );
    });
  });

  it("should display errorMessage when api fails", async () => {
    mockApi.onGet("next-api/?api=game&id=4").networkError();

    const { getByText, findByText } = render(<Game />);
    const button = getByText("Trocar");

    fireEvent.press(button);

    const errorMessage = await findByText("Error ao buscar dados");

    expect(errorMessage).toBeTruthy();
  });
});
