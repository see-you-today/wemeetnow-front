import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { theme } from "../../../utils/themes";
import { MutationOptions, UseMutateFunction } from "@tanstack/react-query";
import { UserData } from "../../../hooks/useAuth";
import { AxiosResponse } from "axios";

interface AuthSubmitButtonProps {
  text: string;
  onPress: () => void;
}

export default function AuthSubmitButton({
  text,
  onPress,
}: AuthSubmitButtonProps) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <View style={styles.absoluteView}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
});
