import { View, StyleSheet } from "react-native";
import { useCheckReissueToken } from "../hooks/useAuth";
import { NavigationProps } from "../../App";
import { useEffect, useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";

type HomeProps = {
  navigation: NavigationProps;
};

export default function Maps({ navigation }: HomeProps) {
  const { checkIsLoginMutate } = useCheckReissueToken(navigation);
  useEffect(() => {
    checkIsLoginMutate();
  }, []);
  const [userLocation, setUserLocation] =
    useState<Location.LocationObject | null>(null);

  useEffect(() => {
    async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("위치 승인 거절");
        return;
      }

      console.log("위치 승인 성공");
      const location = await Location.getCurrentPositionAsync();
      setUserLocation(location);
    };
  }, []);
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        region={{
          latitude: userLocation ? userLocation.coords.latitude : 37.5666103,
          longitude: userLocation ? userLocation.coords.longitude : 126.9783882,
          latitudeDelta: 0.001,
          longitudeDelta: 0.008,
        }}
      />
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
