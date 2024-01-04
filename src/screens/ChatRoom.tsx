import React, { useEffect, useRef, useState } from "react";
import ChatMessages from "../components/chat/ChatMessage";
import { WS_BASE_URL } from "@env";
import SockJS from "sockjs-client";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import * as StompJs from "@stomp/stompjs";

import {
  Button,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import PlusIcon from "../components/common/icon/PlusIcon";
import { theme } from "../utils/themes";
import EmotionIcon from "../components/common/icon/EmotionIcon";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { reissueAccessTokenApi } from "../apis";

type Props = NativeStackScreenProps<RootStackParamList, "ChatRoom">;

const url = WS_BASE_URL;

export default function ChatRoom({ route }: Props) {
  const [chatList, setChatList] = useState([]);
  const [accessTokenValue, setAccessTokenValue] = useState<string | null>(null);
  const [chat, setChat] = useState<[]>([]);
  const client = useRef<StompJs.Client>();

  const getAccessToken = async (): Promise<string | void> => {
    try {
      const refreshToken = await AsyncStorage.getItem("refreshToken");
      const {
        data: { accessToken },
      } = await reissueAccessTokenApi(refreshToken);
      await AsyncStorage.setItem("accessToken", accessToken);
      console.log("accessTokenAwait", accessToken);
      return accessToken;
    } catch (e) {
      await AsyncStorage.removeItem("refreshToken");
      await AsyncStorage.removeItem("accessToken");
    }
  };
  const connect = async () => {
    const accessToken = await getAccessToken();
    console.log("accessToken22", accessToken);
    client.current = new StompJs.Client({
      brokerURL: `${url}`,
      onConnect: () => {
        console.log("onConnect Success");
        subscribe();
      },
      connectHeaders: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    client.current.activate();
  };
  const disconnect = () => {
    client.current?.deactivate();
    console.log("채팅이 종료되었습니다.");
  };
  const subscribe = () => {
    client.current?.subscribe(`/sub/chat-room/2`, (messages: any) => {
      console.log("messages", messages);
      // LOG  messages body {"sendid":"1","receiveid":null,"content1":"hellol","content2":null}
      console.log("messages body", messages.body);
      // setChat(JSON.parse(messages.body));
    });
  };
  const sendChat = async () => {
    console.log("send-chat");
    // console.log(client.current);
    // route.params?.roomId
    client.current?.publish({
      destination: "/send-chat",

      body: JSON.stringify({
        chatRoomId: 2,
        content: "hellol",
        chatType: "CHAT",
      }),
    });
    console.log("send-chat 끝");
    // console.log(chat);
  };

  useEffect(() => {
    connect();
    return () => console.log(new Date()); // 채팅방 나간 시간
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.scorllView}>
        {/* {chat?.map()} */}
        <ScrollView>
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
          {/* {/* <Button title="sendAll" onPress={() => sendAll()} /> */}
          <Button title="sendChat" onPress={() => sendChat()} />
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={styles.inputView}>
        <TouchableOpacity style={styles.plus}>
          <PlusIcon />
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.realInput}
            multiline
            autoCapitalize="none"
            keyboardType="default"
          />
          <TouchableOpacity style={styles.emotion}>
            <View style={styles.submitButton}>
              <Text style={styles.submitText}>입력</Text>
            </View>
          </TouchableOpacity>
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
    backgroundColor: theme.color.chatInputBackGround,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    paddingVertical: 4,
  },
  inputContainer: {
    flex: 9,
    padding: 6,
    backgroundColor: theme.color.chatInputBackGround,
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
    color: theme.color.backGround,
  },
  emotion: {
    flex: 1,
    width: 40,
    height: 40,
    alignSelf: "flex-end",
    backgroundColor: theme.color.chatInputBackGround,
    justifyContent: "center",
    alignItems: "center",
  },
  submitButton: {
    flex: 1,
    width: 40,
    height: 40,
    borderRadius: 5,
    alignSelf: "flex-end",
    backgroundColor: theme.color.chatSubmitButtonColor,
    justifyContent: "center",
    alignItems: "center",
    color: theme.color.chatSubmitTextColor,
  },
  submitText: {
    color: theme.color.chatSubmitTextColor,
  },
  plus: {
    flex: 1,
    backgroundColor: theme.color.chatInputBackGround,
    justifyContent: "center",
    borderRadius: 100,
    alignItems: "center",
    alignSelf: "flex-end",
    width: "100%",
    height: 40,
    marginLeft: 14,
    marginBottom: 4,
  },
});
