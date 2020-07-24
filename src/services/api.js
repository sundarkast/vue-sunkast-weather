import axios from "axios";

export const API = axios.create({
  baseURL: "https://api.weatherbit.io/v2.0/"
});
export const key = "61a55239e25047abb671c9ed3db7ae66";
