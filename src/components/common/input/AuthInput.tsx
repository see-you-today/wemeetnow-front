import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { theme } from "../../../utils/themes";

interface AuthInputProps {
  placeholder: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
  secureTextEntry: boolean;
}

export default function AuthInput({
  placeholder,
  setState,
  secureTextEntry,
}: AuthInputProps) {
  return (
    <>
      <TextInput
        autoCapitalize="none"
        style={styles.input}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        onChangeText={(text) => setState(text)}
      />
    </>
  );
}

const styles = StyleSheet.create({
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
});
