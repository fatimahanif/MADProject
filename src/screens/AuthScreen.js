import React from "react";
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Button,
    Pressable,
} from "react-native";

const AuthScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <Text style={styles.head_text}>Welcome Back!</Text>
            </View>

            <View style={styles.form}>
                <>
                    <TextInput style={styles.input} placeholder="Username" />
                    <TextInput style={styles.input} placeholder="Password" />
                </>
                
                <Text style={styles.forgot}>Forgot Password?</Text>

                <Pressable style={styles.button} android_ripple={{color: "#d4a28c"}} onPress={()=>{navigation.navigate('SelectInterests')}}>
                    <Text style={styles.button_text}>Login</Text>
                </Pressable>

                <View style={styles.signup}>
                    <Text style={styles.signup_text} >Create an account?</Text>
                    <Pressable onPress={()=>{navigation.navigate('Register')}}>
                        <Text style={{...styles.signup_text, ...styles.signup_link}} >Signup</Text>
                    </Pressable>
                </View>

                {/* <Text> dhjsgcshcgshgc s</Text> */}

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
    head:{
        flex: 1,
        backgroundColor: '#D97D54',
        justifyContent: 'center',
        padding: 20,
    },
    head_text:{
        color: '#fff',
        fontSize: 30,
        fontFamily: "Poppins",
        textAlign: "left",
    },
    form:{
        flex: 2,
        backgroundColor: '#fff',
        borderTopLeftRadius: 26,
        borderTopRightRadius: 26,
        paddingTop: 30,
        paddingHorizontal: 20,
        // justifyContent: "center",
    },
    input: {
        borderBottomColor: "#484848",
        padding: 5,
        borderBottomWidth: 1,
        fontSize: 16,
        fontFamily: 'Poppins',
        margin: 5,
    },
    button: {
        backgroundColor: '#D97D54',
        padding: 8,
        marginTop: 10,
        elevation: 3,
        width: '100%',
        alignSelf: "center",
        borderRadius: 5,
    },
    button_text:{
        color: '#fff',
        fontSize: 16,
        fontFamily: "Poppins",
        textAlign: "center",
    },
    forgot:{
        fontSize: 12,
        color: '#484848',
        fontFamily: "Poppins",
        textAlign: "right",
        marginVertical: 5,
    },
    signup:{
        display: 'flex',
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 15,
    },
    signup_text:{
        marginLeft: 5,
        fontFamily: "Poppins",
        fontSize: 15,
    },
    signup_link:{
        fontWeight: '600',
        color: '#D97D54',
        textDecorationLine: "underline",
    },
});

export default AuthScreen;
