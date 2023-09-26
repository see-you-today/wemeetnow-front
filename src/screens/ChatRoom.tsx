import React, { useEffect, useRef, useState } from "react";
import ChatRoomWrapper from "../components/container/ChatRoomWrapper";
import ChatMessages from "../components/chat/ChatMessages";
import { WS_BASE_URL } from "@env";
import SockJS from "sockjs-client";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { CompatClient, IMessage, Stomp } from "@stomp/stompjs";
import StompJs from "@stomp/stompjs";
import { Button, StyleSheet, Text, TextInput } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, "ChatRoom">;

export default function ChatRoom({ route }: Props) {
  const [chatList, setChatList] = useState([]);
  const [chat, setChat] = useState<IMessage>();
  const client3 = useRef<CompatClient>();
  let client: any = null;
  // const client2 = useRef<CompatClient>();
  const [client2, setClient2] = useState<StompJs.Client>();
  // const [accessToken, setAccessToken] = useState<string | null>("");
  const url = WS_BASE_URL;
  const connect = () => {
    // const accessToken = await AsyncStorage.getItem("accessToken");

    const k = new SockJS(url);
    client = Stomp.over(() => k);
    client.connect({}, function (frame: any) {
      console.log("connect", frame);
      client.subscribe(`/send`, (messages: any) => {
        console.log("messages", messages);
        // LOG  messages body {"sendid":"1","receiveid":null,"content1":"hellol","content2":null}
        console.log("messages body", messages.body);
        setChat(JSON.parse(messages.body));
      });
      console.log("connect 끝");
    });
    client.reconnect_delay = 5000;
  };
  // const subcribe = (roomId: number) => {
  //   if (client.current) {
  //     client.current!.subscribe(`/${roomId}`, (messages) => {
  //       console.log("messages", messages);
  //       setChat(JSON.parse(messages.body));
  //     });
  //   }
  // };
  const sendAll = () => {
    console.log("sendAll");
    client.send(
      "/receiveall",
      {},
      JSON.stringify({
        sendid: "1",
        content1: "hellol",
      })
    );
    console.log("sendAll 끝");
    // console.log(chat);
  };
  const disConnect = () => {
    if (client) {
      client.current?.disconnect();
    }
  };
  useEffect(() => {
    connect();

    // return () => disConnect();
  }, []);
  // useEffect(() => {
  //   console.log("chat", chat);
  // }, [chat]);

  // const connect2 = async (roomId: number) => {
  //   try {
  //     const accessToken = await AsyncStorage.getItem("accessToken");
  //     console.log("url", url);
  //     console.log(accessToken);
  //     const clientData = new StompJs.Client({
  //       brokerURL: `${url}/api/v1/chats`,
  //       connectHeaders: {
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     });
  //     clientData.onConnect = function () {
  //       clientData.subscribe(
  //         `/${roomId}`,
  //         (messages) => {
  //           console.log("messages", messages);
  //           setChat(messages);
  //         },
  //         {
  //           Authorization: `Bearer ${accessToken}`,
  //         }
  //       );
  //     };
  //     clientData.activate();
  //     setClient2(clientData);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // const disConnect = () => {
  //   // 연결 끊기
  //   if (!client2) {
  //     return;
  //   }
  //   client2.deactivate();
  // };

  // useEffect(() => {
  //   const f = async () => {};
  //   connect();
  //   sendAll();
  // });
  return (
    <ChatRoomWrapper>
      {/* {chat?.map()} */}
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
      {/* <Text>dfwef</Text> */}
      {/* <TextInput style={styles.input}></TextInput> */}
      <Button title="sendAll" onPress={() => sendAll()} />
    </ChatRoomWrapper>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "red",
  },
});
