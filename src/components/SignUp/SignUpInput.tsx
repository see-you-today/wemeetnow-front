import React, { useState } from "react";
import AuthInputContainer from "../container/AuthInputContainer";
import TitleText from "../text/TitleText";
import AuthInput from "../input/AuthInput";
import AuthSubmitButton from "../button/AuthSubmitButton";

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
