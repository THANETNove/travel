import { Tabs } from "expo-router";
import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { store, persister } from "../redux/store"; // Correctly importing store and persister
import IndexStart from "../screens/IndexStart"; // Import your IndexStart component
import Login from "../screens/Login";
import ForgotPassword from "../screens/ForgotPassword";
import Register from "../screens/Register";
import UpPassword from "../screens/UpPassword";
import IndexStack from './index'; // Importing the newly named IndexStack


const Stack = createStackNavigator();

function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="HomeTab" // Renamed to avoid confusion
        component={IndexStack} // Use IndexStack as the component
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "code-slash" : "code-slash-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <Stack.Navigator
          initialRouteName="IndexStart"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="IndexStart" component={IndexStart} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="UpPassword" component={UpPassword} />
          <Stack.Screen name="Min" component={TabLayout} />
        </Stack.Navigator>
      </PersistGate>
    </Provider>
  );
}
