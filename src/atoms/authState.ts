import { atom } from "recoil";

export const wrongUser = atom<boolean>({
  key: "wrongUser",
  default: false,
});

export const isLogin = atom<boolean>({
  key: "isLogin",
  default: false,
});
