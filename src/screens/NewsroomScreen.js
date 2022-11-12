import * as React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { BigNews, SmallNews } from "../components/NewsComponent";

const Rooms = () => {
  return (
    <ScrollView style={styles.content}>
    </ScrollView>
  );
};

const Invites = () => {
  return (
    <ScrollView style={styles.content}>
    </ScrollView>
  );
};

const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // tabBarScrollEnabled: true,
        tabBarActiveTintColor: "#D97D54",
        tabBarInactiveTintColor: "gray",
        tabBarIndicatorStyle: {
          backgroundColor: "#D97D54",
        },
      })}
    >
      <Tab.Screen name="Your Rooms" component={Rooms} />
      <Tab.Screen name="Invites" component={Invites} />
      <Tab.Screen name="Join a Room" component={Invites} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 12,
    backgroundColor: "#fff",
  },
});

export default App;
