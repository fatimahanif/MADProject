import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    Pressable,
    View,
} from "react-native";

const Footer = (props) => {
    return (
        <View style={ {...styles.topic, ...props.style} } >
            {/* <View > */}
                <Text style={styles.text} >Home</Text>
                <Text style={styles.text} >Topics</Text>
                <Text style={styles.text} >Newsroom</Text>
                <Text style={styles.text} >Library</Text>
            {/* </View> */}
        </View>
    );
}

const styles = StyleSheet.create({
    topic: {
        display: "flex",
        flexDirection: "row",
        padding: 12,
        // borderWidth: 2,
        margin: 5,
        // borderColor: '#D97D54',
        // borderRadius: 100,
        // alignItems: "center",
        justifyContent: "space-evenly",
    },
    text:{
        textAlign: "center",
        fontFamily: "Poppins",
        alignSelf: "center",
    },
});

export default Footer;