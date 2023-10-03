import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { ContainerProps } from "./type";
import { theme } from "../../../utils/themes";

export default function ChatRoomWrapper({ children }: ContainerProps) {
  return <ScrollView style={styles.container}>{children}</ScrollView>;
}

const styles = StyleSheet.create({
  container: {
    height: "90%",
    backgroundColor: theme.color.backGround,
  },
});
