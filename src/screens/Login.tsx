import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { theme } from "../utils/themes";

import LoginInput from "../components/LoginInput";
import SignUpButton from "../components/SignUpButton";
import { RootStackParamList } from "../../App";

// SplashScreen.preventAutoHideAsync();

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export type LoginProps = {
  navigation: LoginScreenNavigationProp;
};

export default function Login({ navigation }: LoginProps) {
  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <LoginInput navigation={navigation} />
      <SignUpButton navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.color.backGround,
  },
  loginInputContainer: {
    width: 325,
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: theme.color.loginContainerBorder,
    borderRadius: 5,
    paddingBottom: 20,
  },
  title: {
    marginTop: 20,
    fontSize: 35,
    fontWeight: "600",
    marginBottom: 25,
    fontFamily: "Gaegu-Bold",
  },
  findPasswordTitle: {
    fontSize: 13,
  },
  image: {
    marginTop: 44,
    marginBottom: 29,
  },
  signUpButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 46,
    width: 325,
    height: 60,
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: theme.color.loginContainerBorder,
    borderRadius: 5,
  },
  input: {
    width: 290,
    height: 47,
    backgroundColor: theme.color.inputBackGround,
    borderRadius: 10,
    margin: 10,
    paddingLeft: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  warning: {
    color: theme.color.warning,
    marginTop: 20,
  },
  loginButton: {
    width: 289,
    height: 47,
  },
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
  img: {
    zIndex: 1,
    width: 289,
    height: 47,
    borderRadius: 10,
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
  findOrSignUpButton: {
    fontSize: 13,
    color: theme.color.blueColor,
  },
  findPassword: {
    fontSize: 13,
    color: theme.color.blueColor,
    marginTop: 20,
  },
});
