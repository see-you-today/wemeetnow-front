import React from "react";
import { Feather } from "@expo/vector-icons";
import { theme } from "../../../utils/themes";

export default function PlusIcon() {
  return (
    <Feather name="plus" size={24} color={theme.color.emotionButtonColor} />
  );
}
