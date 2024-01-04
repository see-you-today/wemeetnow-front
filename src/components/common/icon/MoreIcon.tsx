import { Ionicons } from "@expo/vector-icons";
import { IconProps } from "./type";

export default function MoreIcon({ size, color, focused }: IconProps) {
  const iconName = focused
    ? "md-ellipsis-horizontal-sharp"
    : "md-ellipsis-horizontal-outline";
  return <Ionicons name={iconName} size={size} color={color} />;
}
