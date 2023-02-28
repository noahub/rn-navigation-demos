import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import UserScreen from "./screens/UserScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function App() {
  const Drawer = createDrawerNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <>
      {/* <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            drawerActiveBackgroundColor: "#be97f5",
            drawerActiveTintColor: "#6a00ff",
          }}
        >
          <Drawer.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{
              headerStyle: { backgroundColor: "#6a00ff" },
              headerTintColor: "white",
              drawerLabel: "Welcome Screen",
              drawerIcon: ({ color, size }) => (
                <Ionicons name="home" color={color} size={size} />
              ),
            }}
          />
          <Drawer.Screen
            name="User"
            component={UserScreen}
            options={{
              drawerIcon: ({ color, size }) => (
                <Ionicons name="person" color={color} size={size} />
              ),
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer> */}
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveBackgroundColor: "#ddc4ff",
            tabBarActiveTintColor: "#6a00ff",
          }}
        >
          <Tab.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{
              headerStyle: { backgroundColor: "#6a00ff" },
              headerTintColor: "white",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="User"
            component={UserScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="person" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
