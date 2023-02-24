import { getLocalStorage } from "../helpers";

export const cartInitialState = JSON.parse(getLocalStorage("cart")) || [];
