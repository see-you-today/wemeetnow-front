import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { getChatRooms } from "../apis/chat";
import { RootStackParamList } from "../../App";
import { useEffect, useState } from "react";
import { ChatRoomListType } from "../components/chat/type";

export default function useGetChatRooms(
  navigation: NativeStackNavigationProp<RootStackParamList>
) {
  const [chatRoomList, setChatRoomList] = useState<ChatRoomListType[]>([]);

  useEffect(() => {
    getChatRooms()
      .then((res) => {
        const data = res.data;
        setChatRoomList(data.chatRoomDtoList);
      })
      .catch((error) => console.log("채팅방 목록 실패", error));
  }, [getChatRooms]);
  return chatRoomList;
}
