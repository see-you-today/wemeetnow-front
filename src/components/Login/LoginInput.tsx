import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { wrongUser } from "../../atoms/authState";
import { useAuthNavigation } from "../../hooks/useAuth";
import WarningText from "../text/WarningText";
import TextLink from "../text/TextLink";
import { NavigationProps } from "../../../App";
import AuthSubmitButton from "../button/AuthSubmitButton";
import AuthInput from "../input/AuthInput";
import AuthInputContainer from "../container/AuthInputContainer";
import TitleText from "../text/TitleText";

type LoginInputProps = {
  navigation: NavigationProps;
};

export default function LoginInput({ navigation }: LoginInputProps) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isWrongUser] = useRecoilState<boolean>(wrongUser);
  const { loginMutate } = useAuthNavigation(navigation);

  return (
    <AuthInputContainer>
      <TitleText />
      <AuthInput
        placeholder="Email"
        setState={setEmail}
        secureTextEntry={false}
      />
      <AuthInput
        placeholder="password"
        setState={setPassword}
        secureTextEntry={false}
      />
      <AuthSubmitButton
        text="로그인"
        onPress={() => loginMutate({ email: email, password: password })}
      />
      {isWrongUser ? (
        <WarningText text="잘못된 비밀번호입니다. 다시 확인하세요." />
      ) : (
        ""
      )}
      <TextLink
        navigation={navigation}
        route="Profile"
        text="비밀번호를 잊으셨나요?"
      />
    </AuthInputContainer>
  );
}
