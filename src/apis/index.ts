import axios from "axios";
import { BASE_URL } from "@env";
const baseUrl = BASE_URL;

const axiosApi = (url: string) => axios.create({ baseURL: url });

const axiosAuthApi = (url: string, token: string | null) =>
  axios.create({
    baseURL: url,
    headers: { Authorization: `Bearer ${token}` },
  });

export const defaultInstance = axiosApi(baseUrl);
export const authInstance = (token: string | null) =>
  axiosAuthApi(baseUrl, token);
