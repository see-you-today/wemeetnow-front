import { Ionicons } from "@expo/vector-icons";
import { IconProps } from "./type";

export default function MapIcon({ size, color, focused }: IconProps) {
  const iconName = focused ? "ios-map" : "ios-map-outline";
  return <Ionicons name={iconName} size={size} color={color} />;
}
