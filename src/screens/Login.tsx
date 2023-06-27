import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { theme } from "../utils/themes";

type RootStackParamList = {
  Profile: undefined;
};

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

export default function Login({ navigation }: Props) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.loginInputContainer}>
        <Text style={styles.title}>WeMeetNow</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => {
            setId(text);
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
        <TouchableOpacity style={styles.btn}>
          <View style={styles.absoluteView}>
            <Text style={styles.text}>로그인</Text>
          </View>
          {/* <Image
            source={require("../../assets/slightOceanView.jpg")}
            style={styles.img}
          /> */}
        </TouchableOpacity>
        {/* <Image source={require("../../assets/OR.png")} style={styles.image} /> */}
        {[] ? (
          <Text style={styles.warning}>
            잘못된 비밀번호입니다. 다시 확인하세요.
          </Text>
        ) : (
          ""
        )}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={styles.findPassword}>비밀번호를 잊으셨나요?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signUpButtonContainer}>
        <Text>계정이 없으신가요?</Text>
        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.findOrSignUpButton}>가입하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.color.backGround,
  },
  loginInputContainer: {
    width: 325,
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: theme.color.loginContainerBorder,
    borderRadius: 5,
  },
  title: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: "600",
    marginBottom: 25,
  },
  findPasswordTitle: {
    fontSize: 13,
  },
  image: {
    marginTop: 44,
    marginBottom: 29,
  },
  signUpButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 46,
    width: 325,
    height: 60,
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: theme.color.loginContainerBorder,
    borderRadius: 5,
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
    marginBottom: 20,
  },
  loginButton: {
    width: 289,
    height: 47,
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
    backgroundColor: "transparent",
  },
  img: {
    zIndex: 1,
    width: 289,
    height: 47,
    borderRadius: 10,
  },
  btn: {
    marginTop: 9,
    width: 289,
    height: 47,
    alignItems: "center",
    justifyContent: "center",
  },
  findOrSignUpButton: {
    fontSize: 13,
    color: theme.color.blueColor,
  },
  findPassword: {
    fontSize: 13,
    color: theme.color.blueColor,
    marginBottom: 30,
  },
});
