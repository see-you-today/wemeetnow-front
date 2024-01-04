import { Ionicons } from "@expo/vector-icons";
import { IconProps } from "./type";

export default function ChatIcon({ size, color, focused }: IconProps) {
  const iconName = focused ? "chatbubble-sharp" : "chatbubble-outline";
  return <Ionicons name={iconName} size={size} color={color} />;
}
