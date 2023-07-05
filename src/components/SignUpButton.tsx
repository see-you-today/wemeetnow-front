import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { LoginProps } from "../screens/Login";
import { theme } from "../utils/themes";

export default function SignUpButton({ navigation }: LoginProps) {
  return (
    <View style={styles.signUpButtonContainer}>
      <Text>계정이 없으신가요?</Text>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.findOrSignUpButton}>가입하기</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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

  findOrSignUpButton: {
    fontSize: 13,
    color: theme.color.blueColor,
  },
});
