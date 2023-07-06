import AsyncStorage from "@react-native-async-storage/async-storage";
import { authInstance, defaultInstance } from "./index";
import { AxiosResponse } from "axios";

export async function loginApi(
  email: string,
  password: string
): Promise<AxiosResponse> {
  return await defaultInstance.post("/api/v1/users/login", {
    email: email,
    password: password,
  });
}

export async function checkIsLoginApi(): Promise<AxiosResponse<any>> {
  return (await authInstance).get("/api/v1/users/check-is-logined");
}

export async function reissueAccessTokenApi(refreshToken: string | null) {
  return await defaultInstance.post("/api/v1/users/reissue", {
    refresh_token: refreshToken,
  });
}
