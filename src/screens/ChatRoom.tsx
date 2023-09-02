import React from "react";
import ChatRoomWrapper from "../components/container/ChatRoomWrapper";
import ChatMessages from "../components/chat/ChatMessages";

export default function ChatRoom() {
  return (
    <ChatRoomWrapper>
      <ChatMessages
        content="안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕"
        chatType="CHAT"
        senderName="경환"
        invitedUserName="동현"
        sendDateTime="2023-07-12T23:52:39.230313"
        notReadCount={1}
        isSender={true}
        senderImgUrl={
          "https://velog.velcdn.com/images/kyunghwan1207/post/5a260302-de64-4f74-b482-89874a0f18f8/image.png"
        }
      />
    </ChatRoomWrapper>
  );
}
