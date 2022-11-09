import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Tab, TabView, Text } from "@rneui/themed";
import {BigNews, SmallNews} from "../components/NewsComponent";

import data from "../../assets/data/data.json";

const TopicsTabs = (props) => {
  const [index, setIndex] = useState(0);

  let topics = [
    "Latest",
    "Pakistan",
    "World",
    "Business",
    "Technology",
    "Entertainment",
    "Sports",
    "Science",
    "Health",
  ];

  //reading data from json file
  const news_json = JSON.parse(JSON.stringify(data));
  let news = [];
  for (var i in news_json) 
    news.push(news_json[i]);
  news = news[0]

  //filtering to get the news to be displeyd in small component
  let latest = news.filter((item, index)=>item.category=='Pakistan');
  console.log(latest)

  return (
    <>
      <Tab
        value={index}
        style={{ backgroundColor: "#f2f2f2" }}
        onChange={(index) => setIndex(index)}
        indicatorStyle={styles.indicator}
        scrollable={true}
      >
        <Tab.Item title="Latest" titleStyle={styles.title} />
        <Tab.Item title="Pakistan" titleStyle={styles.title} />
        <Tab.Item title="World" titleStyle={styles.title} />
        <Tab.Item title="Business" titleStyle={styles.title} />
        <Tab.Item title="Technology" titleStyle={styles.title} />
        <Tab.Item title="Entertainment" titleStyle={styles.title} />
        <Tab.Item title="Sports" titleStyle={styles.title} />
        <Tab.Item title="Science" titleStyle={styles.title} />
        <Tab.Item title="Health" titleStyle={styles.title} />

        {/* {topics.map((item, index)=>{
          console.log(item);
          <Tab.Item title={item} titleStyle={styles.title} />
        })} */}
      </Tab>

      <TabView value={index} onChange={setIndex}>

        {/* Latest */}
        <TabView.Item>
          {/* {latest.map((item, index)=>
            <View>
              <SmallNews news_source={latest[index].news_source} time={latest[index].time} authenticity={latest[index].authenticity} headline={latest[index].headline} image={latest[index].main_image} />
            </View>
          )} */}
          <SmallNews news_source={latest[0].news_source} time={latest[0].time} authenticity={latest[0].authenticity} headline={latest[0].headline} image={latest[0].main_image} />
        </TabView.Item>
        {/* Pakistan */}
        <TabView.Item>
          <Text h1>dgchshcfsjg</Text>
        </TabView.Item>
        {/* World */}
        <TabView.Item>
          <Text h1>dgchshcfsjg</Text>
        </TabView.Item>
        {/* Business */}
        <TabView.Item>
          <Text h1>dgchshcfsjg</Text>
        </TabView.Item>
        {/* Technology */}
        <TabView.Item>
          <Text h1>dgchshcfsjg</Text>
        </TabView.Item>
        {/* Entertainment */}
        <TabView.Item>
          <Text h1>dgchshcfsjg</Text>
        </TabView.Item>
        {/* Sports */}
        <TabView.Item>
          <Text h1>dgchshcfsjg</Text>
        </TabView.Item>
        {/* Science */}
        <TabView.Item>
          <Text h1>dgchshcfsjg</Text>
        </TabView.Item>
        {/* Health */}
        <TabView.Item>
          <Text h1>dgchshcfsjg</Text>
        </TabView.Item>

      </TabView>
    </>
  );
};

const styles = StyleSheet.create({
  tabs: {
    backgroundColor: "#f2f2f2",
  },
  indicator: {
    backgroundColor: "#D97D54",
    height: 2,
  },
  title: {
    fontSize: 14,
    fontFamily: "Poppins",
    color: "#000",
  },
});

export default TopicsTabs;
