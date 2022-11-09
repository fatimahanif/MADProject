import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
// import TopicsScreen from "../screens/TopicsScreen";
import TopicsComponent from "./TopicsComponent";
import { Ionicons, Entypo } from '@expo/vector-icons';

function Home() {
  return (
    <HomeScreen/>
  );
}

function Topics() {
  return (
    <TopicsComponent/>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        if (route.name === 'Home') {
          return <Entypo name="home" size={22} color={color} />
        }
        else if (route.name === 'Topics') {
          return <Entypo name="news" size={22} color={color} />
        }
        else if (route.name === 'Newsroom') {
          return <Entypo name="chat" size={22} color={color} />
        }
        else if (route.name === 'Library') {
          return <Ionicons name="library" size={22} color={color} />
        }
      },
      tabBarActiveTintColor: '#D97D54',
      tabBarInactiveTintColor: 'gray',
    })}

    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Topics" component={Topics} />
      <Tab.Screen name="Newsroom" component={Home} />
      <Tab.Screen name="Library" component={Home} />

    </Tab.Navigator>
  );
}
