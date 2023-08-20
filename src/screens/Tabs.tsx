import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ChatRoom from "../screens/ChatRoom";
import Maps from "./Maps";
import UserIcon from "../components/ui/icon/UserIcon";
import { theme } from "../utils/themes";
import Friends from "./Friends";
import ChatIcon from "../components/ui/icon/ChatIcon";
import MapIcon from "../components/ui/icon/MapIcon";
import More from "./More";
import MoreIcon from "../components/ui/icon/MoreIcon";
import Schedule from "./Schedule";
import CalendarIcon from "../components/ui/icon/CalendarIcon";
import Header from "../components/Header";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Maps"
      screenOptions={{
        tabBarInactiveTintColor: theme.color.black,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.color.black,
      }}
    >
      <Tab.Screen
        name="Friends"
        component={Friends}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <UserIcon color={color} size={size} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="ChatRoom"
        component={ChatRoom}
        options={{
          header: ({ navigation, route, options }) => {
            return <Header title="채팅" />;
          },
          tabBarIcon: ({ color, size, focused }) => (
            <ChatIcon color={color} size={size} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Maps"
        component={Maps}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <MapIcon color={color} size={size} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={Schedule}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <CalendarIcon color={color} size={size} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <MoreIcon color={color} size={size} focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
