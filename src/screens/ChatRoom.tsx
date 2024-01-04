import React, { useEffect, useRef, useState } from "react";
import ChatMessages from "../components/chat/ChatMessage";
import { WS_BASE_URL } from "@env";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import * as StompJs from "@stomp/stompjs";

import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Platform,
  InputAccessoryView,
} from "react-native";
import { theme } from "../utils/themes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { reissueAccessTokenApi } from "../apis";
import ChatInput from "../components/common/input/ChatInput";

type Props = NativeStackScreenProps<RootStackParamList, "ChatRoom">;

const url = WS_BASE_URL;

export default function ChatRoom({ route }: Props) {
  const [chatList, setChatList] = useState([]);
  const [accessTokenValue, setAccessTokenValue] = useState<string | null>(null);
  const [chat, setChat] = useState<[]>([]);
  const scrollViewRef = useRef<ScrollView>(null);
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
    scrollViewRef.current?.scrollToEnd();

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
    // 잘 적용이 안됨
    // scrollViewRef.current?.scrollToEnd({ animated: true });

    connect();
    return () => console.log(new Date()); // 채팅방 나간 시간
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* {chat?.map()} */}

      <ScrollView
        ref={scrollViewRef}
        style={styles.scrollView}
        automaticallyAdjustKeyboardInsets={true}
        automaticallyAdjustContentInsets={false}
        keyboardDismissMode="interactive"
        keyboardShouldPersistTaps="handled"
        contentInsetAdjustmentBehavior="never"
        maintainVisibleContentPosition={{
          minIndexForVisible: 0,
          autoscrollToTopThreshold: 80,
        }}
      >
        <ChatMessages
          content="4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444"
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
          content="33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333"
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
          content="22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222"
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
          content="1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
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
          content="0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
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
      {Platform.OS === "ios" ? (
        <InputAccessoryView>
          <ChatInput />
        </InputAccessoryView>
      ) : (
        <ChatInput />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: theme.color.chatBackground,
  },
  keyboardAvoidingscorllView: {
    height: "auto",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  scrollView: {
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
