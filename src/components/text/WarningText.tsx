import React from "react";
import { StyleSheet, Text } from "react-native";
import { theme } from "../../utils/themes";

type Props = {
  text: string;
};

export default function WarningText({ text }: Props) {
  return <Text style={styles.warning}>{text}</Text>;
}

const styles = StyleSheet.create({
  warning: {
    color: theme.color.warning,
    marginTop: 20,
  },
});
