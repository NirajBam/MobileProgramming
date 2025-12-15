import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./app/HomeScreen";
import ParcelScreen from "./app/ParcelScreen";
import RoomShiftScreen from "./app/RoomShiftScreen";
import TruckScreen from "./app/TruckScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: () => <Ionicons name="home-outline" size={24} />,
          }}
        />

        <Tab.Screen
          name="Activity"
          component={ParcelScreen}
          options={{
            tabBarIcon: () => <Ionicons name="time-outline" size={24} />,
          }}
        />

        <Tab.Screen
          name="Profile"
          component={RoomShiftScreen}
          options={{
            tabBarIcon: () => <Ionicons name="person-outline" size={24} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
