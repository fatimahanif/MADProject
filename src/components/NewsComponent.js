import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  Linking,
  Share,
} from "react-native";

import {
  Entypo,
  AntDesign,
  Feather,
  Ionicons,
  SimpleLineIcons,
} from "@expo/vector-icons";

const shareNews = async (url) => {
  // alert(url);
  // sharing the news!!
  try {
    const result = await Share.share({
      message: url,
    });
    // if it was shared by the user
    if (result.action == Share.sharedAction) {
      // alert('sared')
    }
  } catch (error) {
    alert("An unexpected error occured!");
  }
};

const BigNews = (props) => {
  return (
    <View style={{ ...styles.container, ...props.style }}>

      {/* pressable to open news in browser */}
      <Pressable
        onPress={() => {
          Linking.openURL(props.url);
        }}
      >
        <Image style={styles.image} source={{ uri: props.image }} />

        <View style={styles.options_row}>
          <Text style={styles.source}>{props.news_source}</Text>
          <Text style={styles.source}>{props.time}</Text>
        </View>

        <Text style={styles.text}>{props.headline}</Text>
      </Pressable>
      
      {/* options */}
      <View style={styles.options_row}>
        <Text style={styles.authenticity}>
          Authenticity: {props.authenticity}%
        </Text>

        <View style={styles.options_icons}>
          {/* save or follow news */}
          <Feather name="heart" size={16} color="#D97D54" />
          {/* share news */}
          <Entypo name="share" size={16} color="#D97D54" onPress={() => { shareNews(props.url); }}/>
          {/* other options  */}
          <SimpleLineIcons name="options-vertical" size={16} color="#D97D54" />
        </View>
      </View>

    </View>
  );
};

const SmallNews = (props) => {
  return (
    <View style={{ ...styles.smallNews, ...props.style }}>
      <Image style={styles.imageSmall} source={{ uri: props.image }} />

      <View style={styles.small_news_body}>
        <View style={styles.options_row}>
          <Text style={styles.source}>{props.news_source}</Text>
          <Text style={styles.source}>{props.time}</Text>
        </View>

        <Pressable
          onPress={() => {
            Linking.openURL(props.url);
          }}
        >
          <Text style={styles.text}>{props.headline}</Text>
        </Pressable>

        {/* options */}
        <View style={styles.options_row}>
          <Text style={styles.authenticity}>
            Authenticity: {props.authenticity}%
          </Text>

          <View style={styles.options_icons_small}>
            {/* save news */}
            <Feather name="heart" size={16} color="#D97D54" />
            {/* implementing share functionality */}
            <Entypo
              name="share"
              size={16}
              color="#D97D54"
              onPress={() => {
                shareNews(props.url);
              }}
            />
            {/* other options */}
            <SimpleLineIcons
              name="options-vertical"
              size={16}
              color="#D97D54"
            />
          </View>
        </View>
        
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    // flexDirection: "row",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#cfc9ba",
    paddingVertical: 6,
  },
  image: {
    alignSelf: "center",
    height: 200,
    width: "100%",
    borderRadius: 10,
    marginVertical: 5,
  },
  text: {
    fontFamily: "Poppins",
    // alignSelf: "center",
    fontSize: 16,
  },
  authenticity: {
    fontFamily: "Poppins",
    fontSize: 13,
    color: "#D97D54",
  },
  source: {
    fontFamily: "Poppins",
    fontSize: 13,
    color: "#484848",
  },
  news_body: {
    fontSize: 16,
  },
  options_row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  options_icons: {
    flexDirection: "row",
    width: "20%",
    justifyContent: "space-between",
  },

  smallNews: {
    flexDirection: "row",
    paddingVertical: 8,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#cfc9ba",
    alignItems: "center",
  },
  imageSmall: {
    alignSelf: "center",
    height: 100,
    width: "30%",
    borderRadius: 10,
    marginVertical: 5,
  },
  small_news_body: {
    flexDirection: "column",
    width: "70%",
    paddingLeft: 7,
  },
  options_icons_small: {
    flexDirection: "row",
    width: "30%",
    justifyContent: "space-between",
  },
});

export { BigNews, SmallNews };
