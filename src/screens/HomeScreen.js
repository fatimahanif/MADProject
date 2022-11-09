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
//reading data from json file
const news_json = JSON.parse(JSON.stringify(data));
let news = [];
for (var i in news_json) 
  news.push(news_json[i]);
news = news[0]

//filtering to get the news to be displeyd in small component
let news_small = news.filter((item, index)=>index>0);
// console.log(news_small.length)

// console.log(news)

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>

      {/* <Button title="topics" onPress={() => {navigation.navigate("FooterComponent");}}/> */}

      <ScrollView style={styles.scroll_style}>
        <Text style={styles.latest_head}>Latest News</Text>

        {/* displaying the main news */}
        <BigNews news_source={news[0].news_source} time={news[0].time} authenticity={news[0].authenticity} headline={news[0].headline} image={news[0].main_image} url={news[0].url}/>

        {/* displaying other news */}
        {news_small.map((item, index)=>
          <View key={index}>
            <SmallNews news_source={news_small[index].news_source} time={news_small[index].time} authenticity={news_small[index].authenticity} headline={news_small[index].headline} image={news_small[index].main_image} url={news_small[index].url} />
          </View>
        )
      }
      </ScrollView>
      {/* <Footer style={styles.footer} /> */}
      
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
