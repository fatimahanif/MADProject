import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Pressable,
  ScrollView,
} from "react-native";
import Footer from "../components/FooterTabs";
import TopicsTabs from "../components/TopicsTabs";

import data from "../../assets/data/data.json";

// console.log(data);
//reading data from json file
const news_json = JSON.parse(JSON.stringify(data));
let news = [];
for (var i in news_json) news.push(news_json[i]);
news = news[0];

//filtering to get the news to be displeyd in small component
let news_small = news.filter((item, index) => index > 0);
// console.log(news_small.length)

// console.log(news)

const Topics = () => {
  return (
    <View style={styles.container}>

      <TopicsTabs/>

      <ScrollView>
      </ScrollView>

      <Footer style={styles.footer} />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // backgroundColor: "#D97D54",
    // alignItems: 'center',
    // justifyContent: "center",
    // padding: 10,
    // width: "100%"
  },
  latest_head: {
    fontFamily: "Poppins",
    color: "#D97D54",
    // fontWeight: "bold",
    fontSize: 20,
  },
  footer: {
    // alignSelf: "flex-end",
    // justifyContent: "flex-end",
    // alignItems: "baseline",
  },
  scroll_style: {
    paddingHorizontal: 12,
    paddingVertical: 15,
  },
});

export default Topics;
