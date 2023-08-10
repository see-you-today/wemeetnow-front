import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import { theme } from "../utils/themes";

import LoginInput from "../components/Login/LoginInput";
import { NavigationProps } from "../../App";
import { useEffect } from "react";
import { useCheckReissueToken } from "../hooks/useAuth";
import HalfTextLink from "../components/text/HalfTextLink";
import Container from "../components/container/Container";

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
  const { checkIsLoginMutate } = useCheckReissueToken(navigation);
  useEffect(() => {
    checkIsLoginMutate();
  }, []);
  return (
    <Container>
      <StatusBar style="auto" />
      <LoginInput navigation={navigation} />
      <HalfTextLink
        navigation={navigation}
        route="SignUp"
        linkText="가입하기"
        nonLinkText="계정이 없으신가요?"
      />
    </Container>
  );
}
