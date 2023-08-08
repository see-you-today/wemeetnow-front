import AsyncStorage from "@react-native-async-storage/async-storage";
import { authInstance, defaultInstance } from "./index";
import { AxiosResponse } from "axios";

export const loginApi = async (
  email: string,
  password: string
): Promise<AxiosResponse> => {
  return await defaultInstance.post("/api/v1/users/login", {
    email,
    password,
  });
};

export const checkIsLoginApi = async (): Promise<AxiosResponse<any>> => {
  return (await authInstance).get("/api/v1/users/check-is-logined");
};

export const reissueAccessTokenApi = async (refreshToken: string | null) => {
  return await defaultInstance.post("/api/v1/users/reissue", {
    refresh_token: refreshToken,
  });
};
