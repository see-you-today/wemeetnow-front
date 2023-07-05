import { defaultInstance } from "./index";
import { AxiosResponse } from "axios";

export async function loginApi(
  email: string,
  password: string
): Promise<AxiosResponse<any>> {
  return await defaultInstance.post("/api/v1/users/login", {
    email: email,
    password: password,
  });
}

