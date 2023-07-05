import axios from "axios";
import { BASE_URL } from "@env";

const axiosApi = (url: string) => axios.create({ baseURL: url });

const axiosAuthApi = (url: string, token: string | null) =>
  axios.create({
    baseURL: url,
    headers: { Authorization: `Bearer ${token}` },
  });

export const defaultInstance = axiosApi(BASE_URL);
export const authInstance = (token: string | null) =>
  axiosAuthApi(BASE_URL, token);
