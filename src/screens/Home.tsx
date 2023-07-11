import { Text, View, StyleSheet } from "react-native";
import { useCheckReissueToken } from "../hooks/useAuth";
import { RootStackParamList } from "../../App";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export type HomeProps = {
  navigation: HomeScreenNavigationProp;
};

export default function Home({ navigation }: HomeProps) {
  // const { checkIsLoginMutate } = useCheckReissueToken(navigation);
  // useEffect(() => {
  //   checkIsLoginMutate();
  // }, []);
  return (
    <View>
      <MapView style={styles.map} provider={PROVIDER_GOOGLE} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
