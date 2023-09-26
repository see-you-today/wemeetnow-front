import AsyncStorage from "@react-native-async-storage/async-storage";

import { useRecoilState, useSetRecoilState } from "recoil";
import { isLogin, wrongUser } from "../atoms/authState";
import { useMutation, useQuery } from "@tanstack/react-query";
import { checkIsLoginApi, loginApi } from "../apis/auth";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { useEffect } from "react";

export interface UserData {
  email: string;
  password: string;
}

export function useAuth(
  navigation: NativeStackNavigationProp<RootStackParamList>
) {
  const [isWrongUser, setIsWrongUser] = useRecoilState<boolean>(wrongUser);
  const [isSignedIn, setIsSignedIn] = useRecoilState<boolean>(isLogin);

  const { mutate: loginMutate } = useMutation(
    (userData: UserData) => loginApi(userData.email, userData.password),
    {
      onSuccess: async (res) => {
        await AsyncStorage.setItem("accessToken", res.data.accessToken);
        await AsyncStorage.setItem("refreshToken", res.data.refreshToken);
        setIsWrongUser(false);
        console.log("success");
        navigation.navigate("Tabs");
      },
      onError: (error) => {
        console.log(error);
        console.log("로그인 실패");
        setIsWrongUser(true);
      },
    }
  );

  return { loginMutate };
}

export const useCheckLogin = async (
  navigation: NativeStackNavigationProp<RootStackParamList>
) => {
  useEffect(() => {
    const api = async () => {
      checkIsLoginApi()
        .then((data) => {
          navigation.navigate("Tabs");
        })
        .catch((err) => {
          console.log("checkIsLogin실패", err);
          navigation.navigate("Login");
        });
    };
    api();
  }, []);
};

// export function useCheckLogin(
//   navigation: NativeStackNavigationProp<RootStackParamList>
// ) {
//   const setIsSignedIn = useSetRecoilState(isLogin);

//   const { data, isLoading } = useQuery(["checkLogin"], () => checkIsLoginApi, {
//     onSuccess: () => {
//       console.log("check 성공");
//       setIsSignedIn(true);
//     },

//     onError: () => {
//       console.log("check실패");
//       setIsSignedIn(false);
//       navigation.navigate("Login");
//     },
//   });
//   return [data, isLoading];
// }
// export function useCheckReissueToken(
//   navigation: NativeStackNavigationProp<RootStackParamList>
// ) {
//   const [isWrongUser, setIsWrongUser] = useRecoilState<boolean>(wrongUser);
//   const [isSignedIn, setIsSignedIn] = useRecoilState<boolean>(isLogin);

//   const { mutate: checkIsLoginMutate } = useMutation(checkIsLoginApi, {
//     onSuccess: (res) => {
//       console.log(res.data);
//       setIsWrongUser(false);
//       setIsSignedIn(true);
//       console.log("checklogin 성공");
//     },
//     onError: async (error) => {
//       console.log(error);
//       console.log("checkisLogin 실패");
//       //reissue token
//       const refreshToken = await AsyncStorage.getItem("refreshToken");
//       reissueAccessTokenMutate(refreshToken);
//     },
//   });

//   const { mutate: reissueAccessTokenMutate } = useMutation(
//     (refreshToken: string | null) => reissueAccessTokenApi(refreshToken),
//     {
//       onSuccess: async (res) => {
//         console.log(res.data);
//         console.log("erere");
//         setIsWrongUser(false);
//         setIsSignedIn(true);
//         // navigation.navigate("Tabs");
//       },
//       onError: (error) => {
//         //다시 로그인 해주세요
//         // 로그인 화면으로
//         console.log(error);
//         console.log("다시 로그인해야함");
//         setIsSignedIn(false);
//         setIsWrongUser(false);
//         // navigation.navigate("Login");
//       },
//     }
//   );

//   return { checkIsLoginMutate };
// }
