import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { JoinChatProps } from "../type";
import { theme } from "../../../utils/themes";

export default function JoinChat({ invitedUserName }: JoinChatProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{invitedUserName}님이 들어왔습니다.</Text>
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
