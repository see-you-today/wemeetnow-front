import React from "react";
import { StyleSheet, View } from "react-native";
import { theme } from "../../../utils/themes";
import { ContainerProps } from "./type";

export default function AuthContainer({ children }: ContainerProps) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.color.backGround,
  },
});
