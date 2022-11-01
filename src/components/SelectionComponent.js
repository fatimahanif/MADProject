import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    Pressable,
    View,
} from "react-native";

const Selection = (props) => {
    const [pressed, setPressed] = useState(props.selected);
    // console.log(props.selected + " , " + pressed)
    return (
            // <View style={ ({pressed}) => {return pressed ? {...styles.topic, backgroundColor: "#D97D54"}: {...styles.topic, ...props.style}}}>
            <View style={ {...styles.topic, ...props.style} } >
                {/* <Pressable > */}
                    <View >
                        <Text style={styles.text} >{props.title}</Text>
                    </View>
                {/* </Pressable> */}
            </View>
    );
}

const styles = StyleSheet.create({
    topic: {
        display: "flex",
        flexDirection: "row",
        padding: 12,
        borderWidth: 2,
        margin: 5,
        borderColor: '#D97D54',
        borderRadius: 100,
        // alignItems: "center",
        // justifyContent: "center",
    },
    text:{
        textAlign: "center",
        fontFamily: "Poppins",
        alignSelf: "center",
    },
});

export default Selection;