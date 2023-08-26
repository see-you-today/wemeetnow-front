import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./Tabs";
import SignUp from "./SignUp";
import Login from "./Login";
import { useRecoilValue } from "recoil";
import { isLogin } from "../atoms/authState";
import { RootStackParamList } from "../../App";
import ChatRoom from "./ChatRoom";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigator() {
  const isSignedIn = useRecoilValue(isLogin);

  return (
    <Stack.Navigator initialRouteName="Tabs">
      {isSignedIn ? (
        <>
          <Stack.Screen
            name="Tabs"
            options={{ headerShown: false }}
            component={Tabs}
          />
        </>
      ) : (
        <>
          {/* Temp */}
          <Stack.Screen
            name="Tabs"
            options={{ headerShown: false }}
            component={Tabs}
          />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen
            name="Login"
            options={{ headerShown: false }}
            component={Login}
          />
          {/* 임시 */}
          <Stack.Screen name="ChatRoom" component={ChatRoom} />
        </>
      )}
    </Stack.Navigator>
  );
}
