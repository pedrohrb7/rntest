import axios from "axios";

// https://sujeitoprogramador.com/next-api/?api=game&id=15
export const api = axios.create({
  baseURL: "https://sujeitoprogramador.com",
});
