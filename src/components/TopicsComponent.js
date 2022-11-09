import * as React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { BigNews, SmallNews } from "./NewsComponent";
import HomeScreen from "../screens/HomeScreen";
import data from "../../assets/data/data.json";

const news_json = JSON.parse(JSON.stringify(data));
let news = [];
for (var i in news_json) {
  news.push(news_json[i]);
}
news = news[0];

//filtering news according to topics
let latest = news;
let pakistan = news.filter((item, index) => item.category == "Pakistan");
let world = news.filter((item, index) => item.category == "World");
let business = news.filter((item, index) => item.category == "Business");
let technology = news.filter((item, index) => item.category == "Technology");
let entertainment = news.filter((item, index) => item.category == "Entertainment");
let sports = news.filter((item, index) => item.category == "Sports");
let health = news.filter((item, index) => item.category == "Health");

const Latest = () => {
  return (
    <ScrollView style={styles.content}>
      {latest.map((item, index) => (
          <SmallNews key={index}
            news_source={latest[index].news_source}
            time={latest[index].time}
            authenticity={latest[index].authenticity}
            headline={latest[index].headline}
            image={latest[index].main_image}
            url={latest[index].url}
          />
      ))}
    </ScrollView>
  );
}

const Pakistan = () => {
  return (
    <ScrollView style={styles.content}>
      {pakistan.map((item, index) => (
          <SmallNews key={index}
            news_source={pakistan[index].news_source}
            time={pakistan[index].time}
            authenticity={pakistan[index].authenticity}
            headline={pakistan[index].headline}
            image={pakistan[index].main_image}
            url={pakistan[index].url}
          />
      ))}
    </ScrollView>
  );
}

const World = () => {
  return (
    <ScrollView style={styles.content}>
      {world.map((item, index) => (
          <SmallNews key={index}
            news_source={world[index].news_source}
            time={world[index].time}
            authenticity={world[index].authenticity}
            headline={world[index].headline}
            image={world[index].main_image}
            url={world[index].url}
          />
      ))}
    </ScrollView>
  );
}

const Business = () => {
  return (
    <ScrollView style={styles.content}>
      {business.map((item, index) => (
          <SmallNews key={index}
            news_source={business[index].news_source}
            time={business[index].time}
            authenticity={business[index].authenticity}
            headline={business[index].headline}
            image={business[index].main_image}
            url={business[index].url}
          />
      ))}
    </ScrollView>
  );
}

const Technology = () => {
  return (
    <ScrollView style={styles.content}>
      {technology.map((item, index) => (
          <SmallNews key={index}
            news_source={technology[index].news_source}
            time={technology[index].time}
            authenticity={technology[index].authenticity}
            headline={technology[index].headline}
            image={technology[index].main_image}
            url={technology[index].url}
          />
      ))}
    </ScrollView>
  );
}

const Entertainment = () => {
  return (
    <ScrollView style={styles.content}>
      {entertainment.map((item, index) => (
          <SmallNews key={index}
            news_source={entertainment[index].news_source}
            time={entertainment[index].time}
            authenticity={entertainment[index].authenticity}
            headline={entertainment[index].headline}
            image={entertainment[index].main_image}
            url={entertainment[index].url}
          />
      ))}
    </ScrollView>
  );
}

const Sports = () => {
  return (
    <ScrollView style={styles.content}>
      {sports.map((item, index) => (
          <SmallNews key={index}
            news_source={sports[index].news_source}
            time={sports[index].time}
            authenticity={sports[index].authenticity}
            headline={sports[index].headline}
            image={sports[index].main_image}
            url={sports[index].url}
          />
      ))}
    </ScrollView>
  );
}

const Health = () => {
  return (
    <ScrollView style={styles.content}>
      {health.map((item, index) => (
          <SmallNews key={index}
            news_source={health[index].news_source}
            time={health[index].time}
            authenticity={health[index].authenticity}
            headline={health[index].headline}
            image={health[index].main_image}
            url={health[index].url}
          />
      ))}
    </ScrollView>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarScrollEnabled: true,
        tabBarActiveTintColor: "#D97D54",
        tabBarInactiveTintColor: "gray",
        tabBarIndicatorStyle: {
          backgroundColor: "#D97D54",
        },
      })}
    >
      <Tab.Screen name="Latest" component={Latest} />
      <Tab.Screen name="Pakistan" component={Pakistan} />
      <Tab.Screen name="World" component={World} />
      <Tab.Screen name="Business" component={Business} />
      <Tab.Screen name="Technology" component={Technology} />
      <Tab.Screen name="Entertainment" component={Entertainment} />
      <Tab.Screen name="Sports" component={Sports} />
      <Tab.Screen name="Science" component={Technology} />
      <Tab.Screen name="Health" component={Health} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 12,
    backgroundColor: "#fff",
  },
});
