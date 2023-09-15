import { StatusBar } from "expo-status-bar";

import LoginInput from "../components/Login/LoginInput";
import { NavigationProps } from "../../App";
import HalfTextLink from "../components/text/HalfTextLink";
import AuthContainer from "../components/container/AuthContainer";

type LoginProps = {
  navigation: NavigationProps;
};

export default function Login({ navigation }: LoginProps) {
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
