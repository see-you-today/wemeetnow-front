import AsyncStorage from "@react-native-async-storage/async-storage";

import { useRecoilState } from "recoil";
import { isLogin, wrongUser } from "../atoms/authState";
import { useMutation } from "@tanstack/react-query";
import { checkIsLoginApi, loginApi, reissueAccessTokenApi } from "../apis/auth";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

export interface UserData {
  email: string;
  password: string;
}

export function useAuthNavigation(
  navigation: NativeStackNavigationProp<RootStackParamList>
) {
  const [isWrongUser, setIsWrongUser] = useRecoilState<boolean>(wrongUser);
  const [isSignedIn, setIsSignedIn] = useRecoilState<boolean>(isLogin);

  const { mutate: loginMutate } = useMutation(
    (userData: UserData) => loginApi(userData.email, userData.password),
    {
      onSuccess: async (res) => {
        await AsyncStorage.setItem("accessToken", res.data.accessToken);
        setIsWrongUser(false);
        setIsSignedIn(true);
        console.log("success");
        navigation.navigate("Tabs");
      },
      onError: (error) => {
        console.log(error);
        console.log("로그인 실패");
        setIsSignedIn(false);
        setIsWrongUser(true);
      },
    }
  );

  return { loginMutate };
}

export function useCheckReissueToken(
  navigation: NativeStackNavigationProp<RootStackParamList>
) {
  const [isWrongUser, setIsWrongUser] = useRecoilState<boolean>(wrongUser);
  const [isSignedIn, setIsSignedIn] = useRecoilState<boolean>(isLogin);

  const { mutate: checkIsLoginMutate } = useMutation(checkIsLoginApi, {
    onSuccess: (res) => {
      console.log(res.data);
      setIsWrongUser(false);
      setIsSignedIn(true);
      navigation.navigate("Tabs");
    },
    onError: async (error) => {
      console.log(error);
      console.log("checkisLogin 실패");
      //reissue token
      const refreshToken = await AsyncStorage.getItem("refreshToken");
      reissueAccessTokenMutate(refreshToken);
    },
  });

  const { mutate: reissueAccessTokenMutate } = useMutation(
    (refreshToken: string | null) => reissueAccessTokenApi(refreshToken),
    {
      onSuccess: async (res) => {
        console.log(res.data);
        setIsWrongUser(false);
        setIsSignedIn(true);
        navigation.navigate("Tabs");
      },
      onError: (error) => {
        //다시 로그인 해주세요
        // 로그인 화면으로
        console.log(error);
        console.log("다시 로그인해야함");
        setIsSignedIn(false);
        setIsWrongUser(false);
        navigation.navigate("Login");
      },
    }
  );

  return { checkIsLoginMutate };
}
