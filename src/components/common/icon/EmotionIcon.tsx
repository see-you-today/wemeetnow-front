import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../../../utils/themes";
export default function EmotionIcon() {
  return (
    <MaterialCommunityIcons
      name="emoticon-happy-outline"
      size={24}
      color={theme.color.emotionButtonColor}
    />
  );
}
