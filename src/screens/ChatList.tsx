import React, { useEffect } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { theme } from "../utils/themes";
import { checkChatRooms } from "../apis/chatroom";
import ChatRoomList from "../components/list/ChatRoomList";
import { NavigationProps } from "../../App";

interface ChatListProps {
  navigation: NavigationProps;
}

export default function ChatList({ navigation }: ChatListProps) {
  useEffect(() => {
    checkChatRooms()
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.log("채팅방 목록 실패", error));
  }, [checkChatRooms]);
  return (
    <ScrollView style={styles.container}>
      <ChatRoomList
        chatRoomName={"title"}
        lastChat="message"
        lastChatTime="10시"
        memberCount={6}
        image={require("../../assets/wemeetnowIcon.png")}
        navigation={navigation}
        id={12}
      />
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
