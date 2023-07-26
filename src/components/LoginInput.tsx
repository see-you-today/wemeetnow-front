import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { theme } from "../utils/themes";
import { useRecoilState } from "recoil";
import { wrongUser } from "../atoms/authState";
import { useAuthNavigation } from "../hooks/useAuth";
import WarningText from "./text/WarningText";
import TextLink from "./text/TextLink";
import { NavigationProps } from "../../App";

type LoginInputProps = {
  navigation: NavigationProps;
};

export default function LoginInput({ navigation }: LoginInputProps) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isWrongUser] = useRecoilState<boolean>(wrongUser);
  const { loginMutate } = useAuthNavigation(navigation);

  return (
    <View style={styles.loginInputContainer}>
      <Text style={styles.title}>WEMEETNOW</Text>
      <TextInput
        autoCapitalize="none"
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => {
          setEmail(text);
        }}
      />
      <TextInput
        autoCapitalize="none"
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => {
          setPassword(text);
        }}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          loginMutate({ email: email, password: password });
        }}
      >
        <View style={styles.absoluteView}>
          <Text style={styles.text}>로그인</Text>
        </View>
      </TouchableOpacity>
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
    </View>
  );
}

const styles = StyleSheet.create({
  loginInputContainer: {
    width: 325,
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: theme.color.border,
    borderRadius: 5,
    paddingBottom: 20,
  },
  title: {
    marginTop: 20,
    fontSize: 35,
    fontWeight: "600",
    marginBottom: 25,
    fontFamily: "Gaegu-Bold",
  },

  input: {
    width: 290,
    height: 47,
    backgroundColor: theme.color.inputBackGround,
    borderRadius: 10,
    margin: 10,
    paddingLeft: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  warning: {
    color: theme.color.warning,
    marginTop: 20,
  },

  text: {
    color: theme.color.backGround,
    fontSize: 15,
    textAlign: "center",
    fontWeight: "600",
  },
  absoluteView: {
    flex: 1,
    zIndex: 2,
    position: "absolute",
    textAlign: "center",
  },

  btn: {
    marginTop: 9,
    backgroundColor: theme.color.blueColor,
    borderRadius: 15,
    width: 289,
    height: 47,
    alignItems: "center",
    justifyContent: "center",
  },

  findPassword: {
    fontSize: 13,
    color: theme.color.blueColor,
    marginTop: 20,
  },
});
