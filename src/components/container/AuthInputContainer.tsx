import React from "react";
import { StyleSheet, View } from "react-native";
import { theme } from "../../utils/themes";
import { ContainerProps } from "./type";

const AuthInputContainer = ({ children }: ContainerProps) => {
  return <View style={styles.loginInputContainer}>{children}</View>;
};

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
});

export default AuthInputContainer;
