import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { theme } from "../../../utils/themes";
import EmotionIcon from "../icon/EmotionIcon";
import PlusIcon from "../icon/PlusIcon";
export default function ChatInput({
  myChat,
  onChangeText,
}: {
  myChat: string;
  onChangeText: (text: string) => void;
}) {
  return (
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
          value={myChat}
          onChangeText={onChangeText}
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
  );
}
const styles = StyleSheet.create({
  inputView: {
    height: 60,
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
