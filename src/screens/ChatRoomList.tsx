import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { theme } from "../utils/themes";
import ChatRoomListItem from "../components/list/ChatRoomListItem";
import { NavigationProps } from "../../App";
import useGetChatRooms from "../hooks/useGetChatRooms";

interface ChatListProps {
  navigation: NavigationProps;
}

export default function ChatRoomList({ navigation }: ChatListProps) {
  const chatRoomListItems = useGetChatRooms(navigation);

  console.log(ChatRoomList);
  return (
    <ScrollView style={styles.container}>
      {chatRoomListItems.map((item) => (
        <ChatRoomListItem
          key={item.chatRoomId}
          chatRoomName={item.chatRoomName}
          lastMessageContent={item.lastMessageContent}
          lastMessageDateTime={item.lastMessageDateTime}
          totalNum={item.totalNum}
          chatRoomImgUrl={item.chatRoomImgUrl}
          navigation={navigation}
          chatRoomId={item.chatRoomId}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    flexDirection: "column",
    backgroundColor: theme.color.backGround,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginLeft: 18,
  },
});
