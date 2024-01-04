import { isLogin } from "./../atoms/authState";
import axios, { InternalAxiosRequestConfig } from "axios";
import { BASE_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useResetRecoilState } from "recoil";
import { useNavigation } from "@react-navigation/native";
const axiosApi = (url: string) => axios.create({ baseURL: url });

const url = BASE_URL;
const axiosAuthApi = (url: string) => {
  return axios.create({
    baseURL: url,
    timeout: 6000,
  });
};

export const defaultInstance = axiosApi(url);
export const authInstance = axiosAuthApi(url);

export const reissueAccessTokenApi = async (refreshToken: string | null) => {
  return await defaultInstance.post("/api/v1/users/reissue", {
    refreshToken: refreshToken,
  });
};

// let lock = false;
// let subscribers: ((token: string) => void)[] = [];

// function subscribeTokenRefresh(cb: (token: string) => void) {
//   subscribers.push(cb);
// }

// function onRrefreshed(token: string) {
//   subscribers.forEach((cb) => cb(token));
// }

const getAccessToken = async (): Promise<string | void> => {
  try {
    const refreshToken = await AsyncStorage.getItem("refreshToken");
    const {
      data: { accessToken },
    } = await reissueAccessTokenApi(refreshToken);
    await AsyncStorage.setItem("accessToken", accessToken);
    return accessToken;
  } catch (e) {
    await AsyncStorage.removeItem("refreshToken");
    await AsyncStorage.removeItem("accessToken");
  }
};

authInstance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const accessToken = await AsyncStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

authInstance.interceptors.response.use(
  (res) => {
    console.log("success response");
    return res;
  },
  async (err) => {
    console.log("fail response");
    const {
      config,
      response: { status },
    } = err;
    if (status !== 401) {
      return Promise.reject(err);
    }
    config.sent = true;
    const accessToken = await getAccessToken();
    if (accessToken) {
      console.log("accessToken 갱신");
      config.headers.Authorization = `Bearer ${accessToken}`;
    } else {
      useResetRecoilState(isLogin);
      return Promise.reject(err);
    }
    return axios(config);
  }
);
