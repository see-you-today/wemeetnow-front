import { LoginProps } from "./../screens/Login";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useRecoilState } from "recoil";
import { wrongUser } from "../atoms/authState";
import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../apis/auth";

interface UserData {
  email: string;
  password: string;
}

export default function useAuth({ navigation }: LoginProps) {
  const [isWrongUser, setIsWrongUser] = useRecoilState<boolean>(wrongUser);

  const { mutate: loginMutate } = useMutation(
    (userData: UserData) => loginApi(userData.email, userData.password),
    {
      onSuccess: async (res) => {
        await AsyncStorage.setItem("accessToken", res.data.accessToken);
        setIsWrongUser(false);
        console.log("success");
        navigation.navigate("Home");
      },
      onError: (error) => {
        console.log(error);
        setIsWrongUser(true);
      },
    }
  );
  return [loginMutate];
}
