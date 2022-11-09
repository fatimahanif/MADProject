import React, { useState } from "react";
import { StyleSheet, Text, Pressable, View, Image } from "react-native";
import { Entypo } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';

const Footer = (props) => {
  return (
    <View style={{ ...styles.topic, ...props.style }}>

      <View style={styles.tab}>
        {/* <Image style={styles.image} source={require('../../assets/images/home.png')}/> */}
        <Entypo style={styles.image} name="home" size={22} color="#D97D54" />
        <Text style={styles.text}>Home</Text>
      </View>

      <View style={styles.tab}>
        {/* <Image style={styles.image} source={require('../../assets/images/topics.png')}/> */}
        <Entypo style={styles.image} name="news" size={22} color="#4f4f4f" />
        <Text style={styles.text}>Topics</Text>
      </View>

      <View style={styles.tab}>
        <Entypo style={styles.image} name="chat" size={22} color="#4f4f4f" />
        {/* <Image style={styles.image} source={require('../../assets/images/newsroom.png')}/> */}
        <Text style={styles.text}>Newsroom</Text>
      </View>

      <View style={styles.tab}>
        {/* <Image style={styles.image} source={require('../../assets/images/library.png')}/> */}
        <Ionicons name="library" size={24} color="#4f4f4f" />
        <Text style={styles.text}>Library</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  topic: {
    display: "flex",
    flexDirection: "row",
    padding: 12,
    // borderWidth: 2,
    margin: 5,
    // borderColor: '#D97D54',
    // borderRadius: 100,
    // alignSelf: "flex-end",
    // justifyContent: "space-evenly",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#cfc9ba"
  },
  tab: {
    alignSelf: "center",
  },
  image: {
    // justifyContent: "space-evenly",
    alignSelf: "center",
    // height: 22,
    // width: 22,
  },
  text: {
    textAlign: "center",
    fontFamily: "Poppins",
    alignSelf: "center",
    fontSize: 12,
    color: "#4f4f4f",
  }
});

export default Footer;
