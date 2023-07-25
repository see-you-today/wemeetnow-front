import { FontAwesome } from "@expo/vector-icons";
import { IconProps } from "./type";

export default function UserIcon({ size, color, focused }: IconProps) {
  const iconName = focused ? "user" : "user-o";
  return <FontAwesome name={iconName} size={size} color={color} />;
}
