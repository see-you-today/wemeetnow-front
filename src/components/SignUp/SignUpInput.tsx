import React, { useState } from "react";
import AuthInputContainer from "../ui/container/AuthInputContainer";
import TitleText from "../ui/text/TitleText";
import AuthInput from "../ui/input/AuthInput";
import AuthSubmitButton from "../ui/button/AuthSubmitButton";

export default function SignUpInput() {
  return (
    <AuthInputContainer>
      <TitleText />
      {/* <AuthInput />
      <AuthInput />
      <AuthInput />
      <AuthInput />
      <AuthSubmitButton text="회원가입" /> */}
    </AuthInputContainer>
  );
}
