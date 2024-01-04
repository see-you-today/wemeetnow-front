import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinkProps } from "./type";
import { theme } from "../../../utils/themes";

type HalfTextLinkProps = LinkProps & { linkText: string; nonLinkText: string };

export default function HalfTextLink({
  navigation,
  route,
  linkText,
  nonLinkText,
}: HalfTextLinkProps) {
  return (
    <View style={styles.signUpButtonContainer}>
      <Text>{nonLinkText}</Text>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate(route)}
      >
        <Text style={styles.findOrSignUpButton}>{linkText}</Text>
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
    borderColor: theme.color.border,
    borderRadius: 5,
  },

  findOrSignUpButton: {
    fontSize: 13,
    color: theme.color.blueColor,
  },
});
