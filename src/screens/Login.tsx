import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, Text, View } from "react-native";
import React from "react";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  Profile: undefined;
};

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

export default function Login({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your ㄴdㄴapp!</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Profile")}
      />
      <StatusBar style="auto" />
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
});
