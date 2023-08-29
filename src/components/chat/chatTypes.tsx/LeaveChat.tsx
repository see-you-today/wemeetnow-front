import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LeaveChatProps } from "../type";
import { theme } from "../../../utils/themes";

export default function LeaveChat({ senderName }: LeaveChatProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{senderName}님이 채팅방을 나갔습니다.</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
  },
  text: {
    borderRadius: 12,
    padding: 6,
    fontSize: 12,
    overflow: "hidden",
    color: theme.color.backGround,
    backgroundColor: theme.color.chatNotice,
  },
});
