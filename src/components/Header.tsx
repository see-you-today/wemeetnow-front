import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { theme } from "../utils/themes";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Header({ title }: { title: string }) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View>
        <TouchableOpacity></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 104,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.color.backGround,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginLeft: 18,
  },
});
