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
import {BigNews, SmallNews} from "../components/NewsComponent";

import data from "../../assets/data/data.json";

// console.log(data);
const news_json = JSON.parse(JSON.stringify(data));
let news = [];
for (var i in news_json) 
  news.push(news_json[i]);
news = news[0]
console.log(news)

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll_style}>
        <Text style={styles.latest_head}>Latest News</Text>

        {/* displaying the main news */}
        <BigNews news_source={news[0].news_source} time={news[0].time} authenticity={news[0].authenticity} headline={news[0].headline} image={news[0].main_image}/>

        {/* displaying other news */}
        {news.map((item, index)=>
          <View>
            <SmallNews news_source={news[index].news_source} time={news[index].time} authenticity={news[index].authenticity} headline={news[index].headline} image={news[index].main_image} />
          </View>
        )
      }

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

export default Home;
