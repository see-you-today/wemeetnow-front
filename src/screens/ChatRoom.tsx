import React, { useEffect, useRef, useState } from "react";
import ChatMessages from "../components/chat/ChatMessages";
import { WS_BASE_URL } from "@env";
import SockJS from "sockjs-client";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { CompatClient, IMessage, Stomp } from "@stomp/stompjs";
import StompJs from "@stomp/stompjs";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import PlusIcon from "../components/ui/icon/PlusIcon";
import { theme } from "../utils/themes";
import EmotionIcon from "../components/ui/icon/EmotionIcon";

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
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scorllView}>
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
        <ChatMessages
          content="안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕안녕"
          chatType="CHAT"
          senderName="경환"
          invitedUserName="동현"
          sendDateTime="2023-07-12T23:52:39.230313"
          notReadCount={1}
          isSender={false}
          senderImgUrl={
            "https://velog.velcdn.com/images/kyunghwan1207/post/5a260302-de64-4f74-b482-89874a0f18f8/image.png"
          }
        />
        {/* <Text>dfwef</Text> */}
        {/* <TextInput style={styles.input}></TextInput> */}
        <Button title="sendAll" onPress={() => sendAll()} />
      </ScrollView>
      <View style={styles.inputView}>
        <TouchableOpacity style={styles.plus}>
          <PlusIcon />
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.realInput}
            // value=""
            multiline
            autoCapitalize="none"
            keyboardType="default"
          />
          <TouchableOpacity style={styles.emotion}>
            <EmotionIcon />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    height: "100%",
    backgroundColor: theme.color.chatBackground,
  },
  scorllView: {
    flex: 10,
    height: "auto",
    flexDirection: "column",
  },
  inputView: {
    flexDirection: "row",
    backgroundColor: "green",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    paddingVertical: 4,
  },
  inputContainer: {
    flex: 9,
    padding: 6,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    width: "100%",
    flexDirection: "row",
    alignContent: "center",
  },
  realInput: {
    flex: 8,
    maxHeight: 130,
    fontSize: 18,
    paddingHorizontal: 12,
  },
  emotion: {
    flex: 1,
    width: 40,
    height: 40,
    alignSelf: "flex-end",
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
  },
  plus: {
    flex: 1,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    width: "100%",
    height: 40,
    marginLeft: 14,
    marginBottom: 4,
  },
});
