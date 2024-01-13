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
import { ChatProps } from "../components/chat/type";

type Props = NativeStackScreenProps<RootStackParamList, "ChatRoom">;

const url = WS_BASE_URL;

export default function ChatRoom({ route }: Props) {
  const [chatList, setChatList] = useState<ChatProps[]>([]);
  const [accessTokenValue, setAccessTokenValue] = useState<string | null>(null);
  const [myChat, setMyChat] = useState<string>("");
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

      connectHeaders: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    client.current.onConnect = () => {
      console.log("성공 onConnect");
      client.current?.subscribe(
        `/sub/chat-room/${route.params?.roomId}`,
        (messages: any) => {
          console.log("messages", messages);
          // LOG  messages body {"sendid":"1","receiveid":null,"content1":"hellol","content2":null}
          console.log("messages body", messages.body);
          // setChat(JSON.parse(messages.body));
        },
        { Authorization: `Bearer ${accessToken}` }
      );
    };
    client.current.onStompError = (frame) => {};
    client.current.activate();
  };
  const disconnect = () => {
    client.current?.deactivate();
    console.log("채팅이 종료되었습니다.");
  };
  // const subscribe = () => {
  //   client.current?.subscribe(
  //     `/sub/chat-room/${route.params?.roomId}`,
  //     (messages: any) => {
  //       console.log("messages", messages);
  //       // LOG  messages body {"sendid":"1","receiveid":null,"content1":"hellol","content2":null}
  //       console.log("messages body", messages.body);
  //       // setChat(JSON.parse(messages.body));
  //     }
  //   );
  // };
  const sendChat = async () => {
    console.log("send-chat");
    const accessToken = await getAccessToken();

    scrollViewRef.current?.scrollToEnd();

    // console.log(client.current);
    // route.params?.roomId
    client.current?.publish({
      destination: "/api/v1/chats",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        chatRoomId: route.params?.roomId,
        content: myChat,
        chatType: "CHAT",
        invitedUserName: undefined,
      }),
    });
    console.log("send-chat 끝");
    console.log(myChat);
    // console.log(chat);
    // setChatList((prev) => [...prev, { content: "hellol" }]);
  };

  useEffect(() => {
    // 잘 적용이 안됨
    // scrollViewRef.current?.scrollToEnd({ animated: true });
    const subscribe = async () => {
      await connect();
    };
    // connect();
    subscribe();
    return () => console.log(new Date()); // 채팅방 나간 시간
  }, []);

  return (
    <SafeAreaView style={styles.container}>
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
        {chatList.map((chat) => (
          <ChatMessages
            content={chat.content}
            chatType={chat.chatType}
            senderName={chat.senderName}
            invitedUserName={chat.invitedUserName}
            sendDateTime={chat.sendDateTime}
            notReadCount={chat.notReadCount}
            isSender={chat.isSender}
            senderImgUrl={chat.senderImgUrl}
          />
        ))}

        {/* {/* <Button title="sendAll" onPress={() => sendAll()} /> */}
        <Button title="sendChat" onPress={() => sendChat()} />
      </ScrollView>
      {Platform.OS === "ios" ? (
        <InputAccessoryView>
          <ChatInput
            myChat={myChat}
            onChangeText={(text: string) => {
              setMyChat(text);
            }}
          />
        </InputAccessoryView>
      ) : (
        <ChatInput
          myChat={myChat}
          onChangeText={(text: string) => {
            setMyChat(text);
          }}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {},
  container: {
    flex: 1,
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
