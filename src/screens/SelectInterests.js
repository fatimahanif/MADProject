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
import Selection from "../components/SelectionComponent";

const Register = ({ navigation }) => {

    // let topics = [
    //     {name:'World', selected: false},
    //     {name:'Pakistan', selected: false},
    //     {name:'Business', selected: false},
    //     {name:'Technology', selected: false},
    //     {name:'Entertainment', selected: false},
    //     {name:'Sports', selected: false},
    //     {name:'Science', selected: false},
    //     {name:'Health', selected: false}
    // ];

    const [topicsList, setTopicsList] = useState([
        {name:'World', selected: false},
        {name:'Pakistan', selected: false},
        {name:'Business', selected: false},
        {name:'Technology', selected: false},
        {name:'Entertainment', selected: false},
        {name:'Sports', selected: false},
        {name:'Science', selected: false},
        {name:'Health', selected: false}
    ]);

    const [interests, setInterests] = useState([]);


    const addInterest = (value) => {
        // alert(value)
        // topics.map((e)=>{e.name==value?e.selected=true:e.selected=false})
        // setInterests([
        //     ...interests, 
        //     {name: value , selected: true}
        // ]);
    setTopicsList(topicsList.map(item => item.name === value ? {...item, selected : true} : item ))

    }

    // console.log(topicsList)

    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <Text style={styles.head_text}>Select Interests</Text>
            </View>

            <View style={styles.body}>
                <View style={styles.topics_container}>
                    {topicsList.map((value, index)=> 
                        <Pressable onPress={()=>{addInterest(value.name)}}>
                            <Selection title={value.name} selected={value.selected}/> 
                        </Pressable>
                    )}
                </View>

                <Pressable style={styles.button} android_ripple={{ color: "#d4a28c" }}>
                    <Text style={styles.button_text}>Continue</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D97D54",
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
        flex: 3,
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

export default Register;
