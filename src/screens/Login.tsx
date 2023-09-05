import { StatusBar } from "expo-status-bar";

import LoginInput from "../components/Login/LoginInput";
import { NavigationProps } from "../../App";
import { useEffect } from "react";
import HalfTextLink from "../components/text/HalfTextLink";
import AuthContainer from "../components/container/AuthContainer";

// SplashScreen.preventAutoHideAsync();

type LoginProps = {
  navigation: NavigationProps;
};

export default function Login({ navigation }: LoginProps) {
  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);
  // const { checkIsLoginMutate } = useCheckReissueToken(navigation);
  // useEffect(() => {
  //   checkIsLoginMutate();
  // }, [checkIsLoginMutate]);
  return (
    <AuthContainer>
      <StatusBar style="auto" />
      <LoginInput navigation={navigation} />
      <HalfTextLink
        navigation={navigation}
        route="SignUp"
        linkText="가입하기"
        nonLinkText="계정이 없으신가요?"
      />
    </AuthContainer>
  );
}
