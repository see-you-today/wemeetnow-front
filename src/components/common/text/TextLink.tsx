import React from "react";
import { NavigationProps, RootStackParamList } from "../../../../App";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { theme } from "../../../utils/themes";
import { LinkProps } from "./type";

type TextLinkProps = LinkProps & { text: string; roomId?: number };

export default function TextLink({
  navigation,
  route,
  text,
  roomId,
}: TextLinkProps) {
  const handlePress = () => navigation.navigate(route);

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={handlePress}>
      <Text style={styles.findPassword}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  findPassword: {
    fontSize: 13,
    color: theme.color.blueColor,
    marginTop: 20,
  },
});
