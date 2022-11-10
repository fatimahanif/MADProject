import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Entypo } from '@expo/vector-icons';

import HomeScreen from "../screens/HomeScreen";
import CameraScreen from "../screens/CameraScreen";
import TopicsComponent from "./TopicsComponent";
import ImagePickerComponet from "./ImagePickerComponent";

const Home = () => {
  return (
    <HomeScreen/>
  );
}

const Topics = () => {
  return (
    <TopicsComponent/>
  );
}

const Camera = () => {
  return (
    <CameraScreen/>
  )
}

const ImageToText = () => {
  return( 
    <ImagePickerComponet onSubmit={console.log} /> 
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
        else if (route.name === ' ') {
          return <Ionicons name="camera" size={24} color={color} />
        }
      },
      tabBarActiveTintColor: '#D97D54',
      tabBarInactiveTintColor: 'gray',
    })}

    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Topics" component={Topics} />
      <Tab.Screen name=" " component={Camera} />
      <Tab.Screen name="Newsroom" component={ImageToText} />
      <Tab.Screen name="Library" component={Home} />

    </Tab.Navigator>
  );
}