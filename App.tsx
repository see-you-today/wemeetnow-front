import { StyleSheet} from "react-native";

import React from "react";
import { NavigationContainer } from "@react-navigation/native"; // 전체 네비게이션을 감싸는 컨테이너 불러오기
import Profile from "./src/screens/Profile";
import Login from "./src/screens/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
