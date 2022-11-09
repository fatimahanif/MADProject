import React, { useState } from "react";
import { StyleSheet, Text, Pressable, View, Image } from "react-native";
import { Entypo, AntDesign, Feather, Ionicons, SimpleLineIcons } from "@expo/vector-icons";

const BigNews = (props) => {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      <Image style={styles.image} source={require('../../assets/images/newsimage.jpg')}  />
      
      <View style={styles.options_row}>
        <Text style={styles.source}>The News</Text>
        <Text style={styles.source}>10 hours ago</Text>
      </View>

      <Text style={styles.text}>Long march: PTI moves IHC seeking permission for jalsa in Islamabad</Text>

      <View style={styles.options_row}>
        <Text style={styles.authenticity}>Authenticity: 90%</Text>

        <View style={styles.options_icons}>
          <Feather name="heart" size={16} color="#D97D54" />
          <Entypo name="share" size={16} color="#D97D54" />
          <SimpleLineIcons name="options-vertical" size={16} color="#D97D54" />
        </View>

      </View>

      {/* <Text style={styles.news_body}>ISLAMABAD: In order to avert the bloodshed and looming collision between the marchers...</Text> */}
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
  options_row:{
    flexDirection: "row",
    justifyContent: "space-between",
  },
  options_icons:{
    flexDirection: "row",
    width: "20%",
    justifyContent: "space-between",
  },
});

export default BigNews;
