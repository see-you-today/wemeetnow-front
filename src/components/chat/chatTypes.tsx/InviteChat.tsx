import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { InviteChatProps } from "../type";
import { theme } from "../../../utils/themes";

export default function InviteChat({
  senderName,
  invitedUserName,
}: InviteChatProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {senderName}님이 {invitedUserName}님을 초대했습니다.
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
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
