import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import { ChatMessageProps } from "./type";
import { theme } from "../../../utils/themes";
import { useSendTime } from "./hooks/useSendTime";

export default function MyChat({
  content,
  senderName,
  sendDateTime,
  notReadCount,
  senderImgUrl,
}: ChatMessageProps) {
  const sendTime = useSendTime(sendDateTime);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: senderImgUrl }} />
      <View style={styles.chatBox}>
        <Text style={styles.senderName}>{senderName}</Text>
        <View style={styles.chatContentBox}>
          <Text style={styles.content}>{content}</Text>
          <View style={styles.sendTimeBox}>
            <Text style={styles.notReadCount}>
              {notReadCount > 0 && notReadCount}
            </Text>
            <Text style={styles.sendTime}>{sendTime}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: 250,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 18,
  },
  chatBox: {
    marginLeft: 10,
    maxWidth: "80%",
  },
  senderName: {
    marginBottom: 8,
  },
  chatContentBox: {
    flexDirection: "row",
    alignItems: "center",
  },

  content: {
    padding: 8,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: theme.color.chatBackground,
    color: theme.color.backGround,
  },
  sendTimeBox: {
    alignSelf: "flex-end",
    marginLeft: 8,
  },
  sendTime: {
    color: theme.color.chatBackground,
  },
  notReadCount: {
    color: theme.color.blueColor,
  },
});
