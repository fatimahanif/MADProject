import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Pressable,
  ScrollView,
} from "react-native";

const Register = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.head_text}>Register Account</Text>
      </View>

      {/* <ScrollView style={styles.form}> */}
      <View style={styles.form}>
        <>
          <TextInput
            autoComplete="off"
            style={styles.input}
            placeholder="Name"
          />
          <TextInput
            autoComplete="off"
            style={styles.input}
            placeholder="Username"
          />
          <TextInput
            autoComplete="off"
            style={styles.input}
            placeholder="Email ID"
          />
          <TextInput
            autoComplete="off"
            style={styles.input}
            placeholder="Phone Number"
          />
          <TextInput
            autoComplete="off"
            style={styles.input}
            placeholder="Password"
          />
          <TextInput
            autoComplete="off"
            style={styles.input}
            placeholder="Confirm Password"
          />
        </>

        {/* <Text style={styles.forgot}>Forgot Password?</Text> */}

        <Pressable
          style={styles.button}
          android_ripple={{ color: "#d4a28c" }}
          onPress={() => {
            navigation.navigate("VerificationCode");
          }}
        >
          <Text style={styles.button_text}>Register</Text>
        </Pressable>

        <View style={styles.signup}>
          <Text style={styles.signup_text}>Already have an account?</Text>
          <Pressable
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={{ ...styles.signup_text, ...styles.signup_link }}>
              Login
            </Text>
          </Pressable>
          {/* <Text style={{...styles.signup_text, ...styles.signup_link}} >Login</Text> */}
        </View>
      </View>
      {/* </ScrollView> */}
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
  form: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    paddingTop: 30,
    paddingHorizontal: 20,
    // alignSelf: "center",
    // justifyContent: "flex-end",
  },
  input: {
    borderBottomColor: "#484848",
    padding: 5,
    borderBottomWidth: 1,
    fontSize: 16,
    fontFamily: "Poppins",
    margin: 5,
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
  forgot: {
    fontSize: 12,
    color: "#484848",
    fontFamily: "Poppins",
    textAlign: "right",
    marginVertical: 5,
  },
  signup: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 15,
  },
  signup_text: {
    marginLeft: 5,
    fontFamily: "Poppins",
    fontSize: 15,
  },
  signup_link: {
    fontWeight: "600",
    color: "#D97D54",
    textDecorationLine: "underline",
  },
});

export default Register;
