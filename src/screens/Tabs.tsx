import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ChatRoom from "../screens/ChatRoom";
import Maps from "./Maps";
import UserIcon from "../components/ui/UserIcon";
import { theme } from "../utils/themes";
import Friends from "./Friends";
import ChatIcon from "../components/ui/ChatIcon";
import MapIcon from "../components/ui/MapIcon";
import More from "./More";
import MoreIcon from "../components/ui/MoreIcon";
import Schedule from "./Schedule";
import CalendarIcon from "../components/ui/CalendarIcon";

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
        name="Maps"
        component={Maps}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <MapIcon color={color} size={size} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="ChatRoom"
        component={ChatRoom}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <ChatIcon color={color} size={size} focused={focused} />
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
