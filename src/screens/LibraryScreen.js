import * as React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { BigNews, SmallNews } from "../components/NewsComponent";
import data from "../../assets/data/data.json";

const news_json = JSON.parse(JSON.stringify(data));
let news = [];
for (var i in news_json) {
  news.push(news_json[i]);
}
news = news[0];

// to be replaced by data from db
let saved = news.filter((item, index) => index <= 6);
let offline = news.filter((item, index) => index > 6);

const Saved = () => {
  return (
    <ScrollView style={styles.content}>
      {saved.map((item, index) => (
        <SmallNews
          key={index}
          news_source={saved[index].news_source}
          time={saved[index].time}
          authenticity={saved[index].authenticity}
          headline={saved[index].headline}
          image={saved[index].main_image}
          url={saved[index].url}
        />
      ))}
    </ScrollView>
  );
};

const Offline = () => {
  return (
    <ScrollView style={styles.content}>
      {offline.map((item, index) => (
        <SmallNews
          key={index}
          news_source={offline[index].news_source}
          time={offline[index].time}
          authenticity={offline[index].authenticity}
          headline={offline[index].headline}
          image={offline[index].main_image}
          url={offline[index].url}
        />
      ))}
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
      <Tab.Screen name="Saved" component={Saved} />
      <Tab.Screen name="Offline" component={Offline} />
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
