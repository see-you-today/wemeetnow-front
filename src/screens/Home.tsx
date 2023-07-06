import { Text, View } from "react-native";
import { useCheckReissueToken } from "../hooks/useAuth";
import { RootStackParamList } from "../../App";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect } from "react";

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export type HomeProps = {
  navigation: HomeScreenNavigationProp;
};

export default function Home({ navigation }: HomeProps) {
  const { checkIsLoginMutate } = useCheckReissueToken(navigation);
  useEffect(() => {
    checkIsLoginMutate();
  }, []);
  return (
    <View>
      <Text>HomePage</Text>
    </View>
  );
}
