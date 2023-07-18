import axios from "axios";
import { BASE_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

const axiosApi = (url: string) => axios.create({ baseURL: url });

const url = BASE_URL;

const axiosAuthApi = async (url: string) => {
  const token = await AsyncStorage.getItem("accessToken");
  return axios.create({
    baseURL: url,
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const defaultInstance = axiosApi(url);
export const authInstance = axiosAuthApi(url);
