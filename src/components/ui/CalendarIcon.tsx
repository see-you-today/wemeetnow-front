import { FontAwesome } from "@expo/vector-icons";
import { IconProps } from "./type";

export default function CalendarIcon({ size, color, focused }: IconProps) {
  const iconName = focused ? "calendar" : "calendar-o";
  return <FontAwesome name={iconName} size={size} color={color} />;
}
