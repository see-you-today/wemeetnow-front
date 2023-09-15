import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { theme } from "../../utils/themes";
import { NavigationProps } from "../../../App";
import { ChatRoomListType } from "../chat/type";
import { useLastChatTime } from "../../utils/date";

interface ChatRoomListItemProps extends ChatRoomListType {
  navigation: NavigationProps;
}

export default function ChatRoomListItem({
  chatRoomImgUrl,
  chatRoomName,
  lastMessageContent,
  lastMessageDateTime,
  totalNum,
  chatRoomId,
  navigation,
}: ChatRoomListItemProps) {
  const handleOnPress = () =>
    navigation.navigate("ChatRoom", { roomId: chatRoomId });

  return (
    <TouchableOpacity onPress={handleOnPress}>
      <View style={styles.container}>
        <View style={styles.mainContent}>
          <Image
            source={{ uri: chatRoomImgUrl }}
            style={styles.chatRoomImage}
          />
          <View style={styles.chatContent}>
            <View style={styles.chatTitleBox}>
              <View style={styles.chatTitleMainContent}>
                <Text style={styles.chatRoomNameText}>{chatRoomName}</Text>
                <Text>{totalNum > 2 && totalNum}</Text>
              </View>
              <Text>{lastMessageContent}</Text>
            </View>
            <View style={styles.chatTimeContent}>
              <Text>
                {useLastChatTime(lastMessageDateTime)}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.color.backGround,
    height: 80,
    alignContent: "center",
  },
  mainContent: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  chatContent: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 16,

    justifyContent: "space-between",
  },
  chatRoomNameText: {
    fontSize: 20,
    marginRight: 10,
  },
  chatTitleBox: {
    alignItems: "center",
  },
  chatTitleMainContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  chatTimeContent: {
    marginRight: 40,
  },
  chatRoomImage: {
    width: 65,
    height: 65,
    borderRadius: 20,
  },
});
