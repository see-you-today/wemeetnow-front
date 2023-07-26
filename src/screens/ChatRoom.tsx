import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "../utils/themes";
import { checkChatRooms } from "../apis/chatroom";

export default function ChatRoom() {
  useEffect(() => {
    checkChatRooms().then((res) => {
      console.log(res.data);
    });
  }, []);
  return (
    <View style={styles.container}>
      <Text>dfd</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "row",
    backgroundColor: theme.color.backGround,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginLeft: 18,
  },
});
