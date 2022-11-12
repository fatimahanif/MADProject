import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Entypo } from '@expo/vector-icons';
import { Avatar } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CameraScreen from "../screens/CameraScreen";
import LibraryScreen from "../screens/LibraryScreen";
import NewsroomScreen from "../screens/NewsroomScreen";
import TopicsComponent from "./TopicsComponent";
import ImagePickerComponent from "./ImagePickerComponent";

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
    <ImagePickerComponent onSubmit={console.log} /> 
  );
}

// const Profile= () => {
//   return (
//     <ProfileScreen />
//     // <ProfileScreen name='Fatima Hanif' username='fatima123' email='fatimahanif303@gmail.com' phone='+92-318-5152910' />
//   )
// }

const Newsroom = () => {
  return(
    <NewsroomScreen/>
  )
}

const Library = () => {
  return(
    <LibraryScreen/>
  )
}

const Header = (props) => {
  const navigation = useNavigation();
  return(
    <View style={styles.header}>
      <Text style={styles.headerText}>{props.title}</Text>
      <Avatar size={36} rounded title="FH" containerStyle={styles.avatar} onPress={()=>navigation.navigate("ProfileScreen")} />
    </View>
  )
}

const Tab = createBottomTabNavigator();

export default function App({navigation}) {
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
      tabBarStyle: {paddingBottom: 5, paddingTop: 5}
    })}
    >
      <Tab.Screen name="Home" component={Home}  options={{ headerTitle: () => <Header title='Home' />, headerShadowVisible: false }}/>
      <Tab.Screen name="Topics" component={Topics} options={{ headerTitle: () => <Header title='Topics' />, headerShadowVisible: false  }}/>
      <Tab.Screen name=" " component={Camera} options={{headerShown: false}}/>
      {/* <Tab.Screen name="Newsroom" component={Profile} /> */}
      <Tab.Screen name="Newsroom" component={Newsroom} options={{ headerTitle: () => <Header title='Newsroom' />, headerShadowVisible: false  }}/>
      <Tab.Screen name="Library" component={Library} options={{ headerTitle: () => <Header title='Library' /> , headerShadowVisible: false }}/>

    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row", 
    width: '100%', 
    justifyContent: "space-between", 
    alignItems: "center",
    marginTop: 10,
  },
  headerText: {
    fontSize: 20, 
    fontFamily: 'Poppins',
    alignSelf: "center",
  },
  avatar:{
    backgroundColor: "#D97D54",
  },
});
