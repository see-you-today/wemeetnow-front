import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MyChatProps } from "../type";
import { theme } from "../../../utils/themes";
import { useSendTime } from "../../../hooks/useSendTime";

export default function MyChat({
  content,
  sendDateTime,
  notReadCount,
}: MyChatProps) {
  const sendTime = useSendTime(sendDateTime);
  return (
    <View style={styles.chatBox}>
      <View style={styles.chatContentBox}>
        <View style={styles.sendTimeBox}>
          <Text style={styles.notReadCount}>
            {notReadCount > 0 && notReadCount}
          </Text>
          <Text style={styles.sendTime}>{sendTime}</Text>
        </View>
        <Text style={styles.content}>{content}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  chatBox: {
    flexDirection: "row",
    marginTop: 15,
    marginRight: 10,
    justifyContent: "flex-end",
  },

  chatContentBox: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  content: {
    maxWidth: "70%",
    padding: 8,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: theme.color.blueColor,
    color: theme.color.backGround,
  },
  sendTimeBox: {
    marginRight: 8,
    alignSelf: "flex-end",
    alignItems: "flex-end",
  },
  sendTime: {
    color: theme.color.chatBackground,
  },
  notReadCount: {
    color: theme.color.blueColor,
  },
});
