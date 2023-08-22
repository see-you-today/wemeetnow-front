import React from "react";
import { NavigationContainer } from "@react-navigation/native"; // 전체 네비게이션을 감싸는 컨테이너 불러오기
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot, useRecoilValue } from "recoil";
import { useFonts } from "expo-font";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigator from "./src/screens/Navigator";

const queryClient = new QueryClient();

export type RootStackParamList = {
  Profile: undefined;
  SignUp: undefined;
  Home: undefined;
  Login: undefined;
  ChatRoom: { roomId: number } | undefined;
  Tabs: undefined;
};
export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

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
            <Navigator />
          </RecoilRoot>
        </QueryClientProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
