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
import InviteChat from "./chatTypes.tsx/InviteChat";
import JoinChat from "./chatTypes.tsx/JoinChat";
import { ChatProps } from "./type";
import LeaveChat from "./chatTypes.tsx/LeaveChat";
import MyChat from "./chatTypes.tsx/MyChat";
import OtherChat from "./chatTypes.tsx/OtherChat";

interface ChatMessageProps {
  content: string;
  chatType: "CHAT" | "JOIN" | "INVITE" | "LEAVE";
  senderName: string;
  invitedUserName: string | null;
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
}: ChatProps) {
  return (
    <>
      {chatType === "INVITE" ? (
        invitedUserName != null ? (
          <InviteChat
            senderName={senderName}
            invitedUserName={invitedUserName}
          />
        ) : (
          <></>
        )
      ) : chatType === "JOIN" ? (
        invitedUserName != null ? (
          <JoinChat invitedUserName={invitedUserName} />
        ) : (
          <></>
        )
      ) : chatType === "LEAVE" ? (
        senderName != null ? (
          <LeaveChat senderName={senderName} />
        ) : (
          <></>
        )
      ) : isSender === true ? (
        <MyChat
          content={content}
          sendDateTime={sendDateTime}
          notReadCount={notReadCount}
        />
      ) : (
        <OtherChat
          content={content}
          senderName={senderName}
          sendDateTime={sendDateTime}
          notReadCount={notReadCount}
          senderImgUrl={senderImgUrl}
        />
      )}
    </>
  );
}
