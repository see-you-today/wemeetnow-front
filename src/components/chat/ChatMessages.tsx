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

  return <View></View>;
}
