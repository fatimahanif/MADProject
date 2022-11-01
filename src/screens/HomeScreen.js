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

const Home = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Text>Home Page</Text>
            <Footer/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#D97D54",
        // alignItems: 'center',
        justifyContent: "center",
        // padding: 10,
    },
    head: {
        flex: 1,
        backgroundColor: "#D97D54",
        justifyContent: "center",
        padding: 20,
    },
    head_text: {
        color: "#fff",
        fontSize: 30,
        fontFamily: "Poppins",
        textAlign: "left",
    },
    body: {
        flex: 2,
        backgroundColor: "#fff",
        borderTopLeftRadius: 26,
        borderTopRightRadius: 26,
        paddingTop: 30,
        paddingHorizontal: 20,
        // alignSelf: "center",
    },
    topics_container:{
        marginVertical: 20,
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    topic: {
        padding: 13,
        borderWidth: 2,
        margin: 5,
        borderColor: '#D97D54',
        borderRadius: 100,
        textAlign: "center",
    },
    button: {
        backgroundColor: "#D97D54",
        padding: 8,
        marginTop: 10,
        elevation: 3,
        width: "100%",
        alignSelf: "center",
        borderRadius: 5,
    },
    button_text: {
        color: "#fff",
        fontSize: 16,
        fontFamily: "Poppins",
        textAlign: "center",
    },
});

export default Home;
