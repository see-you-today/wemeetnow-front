import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useCheckLogin } from "../hooks/useAuth";
import { NavigationProps } from "../../App";
import { checkIsLoginApi } from "../apis/auth";

type SplashProps = {
  navigation: NavigationProps;
};

export default function Splash({ navigation }: SplashProps) {
  useCheckLogin(navigation);
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/wemeetnowIcon.png")}
        style={styles.image}
      ></Image>
      <Text style={styles.text}>WEMEETNOW</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 150,
    height: 150,
  },
  text: {
    fontSize: 35,
    marginTop: 16,
    fontWeight: "600",
    fontFamily: "Gaegu-Bold",
  },
});
