import React from "react";
import AuthContainer from "../components/common/container/AuthContainer";
import SignUpInput from "../components/SignUp/SignUpInput";

export default function SignUp() {
  return (
    <AuthContainer>
      <SignUpInput />
    </AuthContainer>
  );
}
