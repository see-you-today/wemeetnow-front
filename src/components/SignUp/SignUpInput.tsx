import React, { useState } from "react";
import AuthInputContainer from "../common/container/AuthInputContainer";
import TitleText from "../common/text/TitleText";
import AuthInput from "../common/input/AuthInput";
import AuthSubmitButton from "../common/button/AuthSubmitButton";

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
