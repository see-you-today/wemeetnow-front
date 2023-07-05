import { StyleSheet } from "react-native";

import React from "react";
import { NavigationContainer } from "@react-navigation/native"; // 전체 네비게이션을 감싸는 컨테이너 불러오기
import Profile from "./src/screens/Profile";
import Login from "./src/screens/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "./src/screens/SignUp";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./src/screens/Home";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient();

export type RootStackParamList = {
  Profile: undefined;
  SignUp: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Login"
              component={Login}
            />
          </Stack.Navigator>
        </RecoilRoot>
      </QueryClientProvider>
    </NavigationContainer>
  );
}