import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { wrongUser } from "../../atoms/authState";
import { useAuth } from "../../hooks/useAuth";
import WarningText from "../common/text/WarningText";
import TextLink from "../common/text/TextLink";
import { NavigationProps } from "../../../App";
import AuthSubmitButton from "../common/button/AuthSubmitButton";
import AuthInput from "../common/input/AuthInput";
import AuthInputContainer from "../common/container/AuthInputContainer";
import TitleText from "../common/text/TitleText";

type LoginInputProps = {
  navigation: NavigationProps;
};

export default function LoginInput({ navigation }: LoginInputProps) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isWrongUser] = useRecoilState<boolean>(wrongUser);
  const { loginMutate } = useAuth(navigation);

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
        secureTextEntry={true}
      />
      <AuthSubmitButton
        text="로그인"
        onPress={() => loginMutate({ email, password })}
      />
      {isWrongUser && (
        <WarningText text="잘못된 비밀번호입니다. 다시 확인하세요." />
      )}
      <TextLink
        navigation={navigation}
        route="SignUp"
        text="비밀번호를 잊으셨나요?"
      />
    </AuthInputContainer>
  );
}
