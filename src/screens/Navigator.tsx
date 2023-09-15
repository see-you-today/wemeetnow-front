import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./Tabs";
import SignUp from "./SignUp";
import Login from "./Login";
import { useRecoilValue } from "recoil";
import { isLogin } from "../atoms/authState";
import { RootStackParamList } from "../../App";
import ChatRoom from "./ChatRoom";
import Splash from "./Splash";
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigator() {
  const isSignedIn = useRecoilValue(isLogin);

  return (
    <Stack.Navigator initialRouteName="Splash">
      {isSignedIn ? (
        <>
          <Stack.Screen
            name="Tabs"
            options={{ headerShown: false }}
            component={Tabs}
          />
          <Stack.Screen
            name="ChatRoom"
            // options={{ headerShown: false }}
            component={ChatRoom}
          />
          <Stack.Screen
            name="Login"
            options={{ headerShown: false }}
            component={Login}
          />
          <Stack.Screen name="SignUp" component={SignUp} />
        </>
      ) : (
        <>
          {/* Temp */}
          {/* <Stack.Screen
            name="Tabs"
            options={{ headerShown: false }}
            component={Tabs}
          /> */}
          <Stack.Screen
            name="Login"
            options={{ headerShown: false }}
            component={Login}
          />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen
            name="Splash"
            options={{ headerShown: false }}
            component={Splash}
          />
          <Stack.Screen
            name="Tabs"
            options={{ headerShown: false }}
            component={Tabs}
          />
          <Stack.Screen name="ChatRoom" component={ChatRoom} />
          {/* 임시 */}
        </>
      )}
    </Stack.Navigator>
  );
}
