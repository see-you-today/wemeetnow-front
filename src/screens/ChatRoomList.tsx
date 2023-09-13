import React, { useEffect } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { theme } from "../utils/themes";
import { getChatRooms } from "../apis/chatroom";
import ChatRoomListItem from "../components/list/ChatRoomListItem";
import { NavigationProps } from "../../App";

interface ChatListProps {
  navigation: NavigationProps;
}

export default function ChatRoomList({ navigation }: ChatListProps) {
  useEffect(() => {
    getChatRooms()
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.log("채팅방 목록 실패", error));
  }, [getChatRooms]);
  return (
    <ScrollView style={styles.container}>
      {/* map 함수 */}
      <ChatRoomListItem
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
