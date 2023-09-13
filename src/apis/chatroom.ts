import { AxiosResponse } from "axios";

import { authInstance, defaultInstance } from "./index";

export async function getChatRooms(): Promise<AxiosResponse<any>> {
  return (await authInstance).get("/api/v1/chat-rooms");
}
export async function setChatRoom(
  chatRoomName: string,
  participantIdList: [number]
): Promise<AxiosResponse<any>> {
  return (await authInstance).post("/api/v1/chat-rooms", {
    chatRoomName: chatRoomName,
    participantIdList: participantIdList, // 초대당한 사용자들의 id값의 리스트 (방 생성자 미포함)
  });
}
