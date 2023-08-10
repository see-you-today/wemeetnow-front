import React from "react";
import { StyleSheet, Text } from "react-native";

export default function TitleText() {
  return <Text style={styles.title}>WEMEETNOW</Text>;
}
const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    fontSize: 35,
    fontWeight: "600",
    marginBottom: 25,
    fontFamily: "Gaegu-Bold",
  },
});
