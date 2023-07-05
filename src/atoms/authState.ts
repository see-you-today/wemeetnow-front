import { atom } from "recoil";

export const wrongUser = atom<boolean>({
  key: "wrongUser",
  default: false,
});
