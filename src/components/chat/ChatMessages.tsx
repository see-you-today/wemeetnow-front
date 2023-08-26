import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { theme } from "../../utils/themes";
import dayjs from "dayjs";
import "dayjs/locale/ko";

interface ChatMessageProps {
  content: string;
  chatType: "CHAT" | "JOIN" | "INVITE" | "LEAVE";
  senderName: string;
  invitedUserName?: string;
  sendDateTime: string;
  notReadCount: number;
  isSender: boolean;
  senderImgUrl: string;
}

export default function ChatMessage({
  content,
  chatType,
  senderName,
  invitedUserName,
  sendDateTime,
  notReadCount,
  isSender,
  senderImgUrl,
}: ChatMessageProps) {
  const date = new Date(sendDateTime);
  const sendTime = dayjs(date, "YYYY-MM-DD HH:mm:ss")
    .locale("ko")
    .format("A h:mm");

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
