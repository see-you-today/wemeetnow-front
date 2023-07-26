import React from "react";
import { NavigationContainer } from "@react-navigation/native"; // 전체 네비게이션을 감싸는 컨테이너 불러오기
import Login from "./src/screens/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "./src/screens/SignUp";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import { useFonts } from "expo-font";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import Tabs from "./src/screens/Tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";

const queryClient = new QueryClient();

export type RootStackParamList = {
  Profile: undefined;
  SignUp: undefined;
  Home: undefined;
  Login: undefined;
  Tabs: undefined;
};
export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator();
export default function App() {
  const [fontsLoaded] = useFonts({
    "Gaegu-Bold": require("./assets/fonts/Gaegu-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
            <Stack.Navigator initialRouteName="Login">
              <Stack.Screen
                name="Tabs"
                options={{ headerShown: false }}
                component={Tabs}
              />
              <Stack.Screen
                name="Login"
                options={{ headerShown: false }}
                component={Login}
              />
              <Stack.Screen name="SignUp" component={SignUp} />
            </Stack.Navigator>
          </RecoilRoot>
        </QueryClientProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
