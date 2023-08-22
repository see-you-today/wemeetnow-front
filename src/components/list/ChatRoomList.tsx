import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageSourcePropType,
} from "react-native";
import { theme } from "../../utils/themes";
import { NavigationProp } from "@react-navigation/native";
import { NavigationProps } from "../../../App";

interface ChatRoomListProps {
  image: ImageSourcePropType;
  chatRoomName: string;
  lastChat: string;
  lastChatTime: string;
  memberCount: number;
  id: number;
  navigation: NavigationProps;
}

export default function ChatRoomList({
  image,
  chatRoomName,
  lastChat,
  lastChatTime,
  memberCount,
  id,
  navigation,
}: ChatRoomListProps) {
  const handleOnPress = () => navigation.navigate("ChatRoom", { roomId: 2 });

  return (
    <TouchableOpacity onPress={handleOnPress}>
      <View style={styles.container}>
        <View style={styles.mainContent}>
          <Image source={image} style={styles.chatRoomImage} />
          <View style={styles.chatContent}>
            <View style={styles.chatTitleBox}>
              <View style={styles.chatTitleMainContent}>
                <Text style={styles.chatRoomNameText}>{chatRoomName}</Text>
                <Text>{memberCount > 2 && memberCount}</Text>
              </View>
              <Text>{lastChat}</Text>
            </View>
            <View style={styles.chatTimeContent}>
              <Text>{lastChatTime}</Text>
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
    alignItems: "center",
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
