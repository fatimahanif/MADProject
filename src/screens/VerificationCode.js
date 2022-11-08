import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Pressable,
} from "react-native";

const VerificationCode = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.head_text}>Verify Account</Text>
      </View>

      <View style={styles.form}>
        <>
          <TextInput style={styles.input} placeholder="Verification Code" />
        </>

        <Text style={styles.resend}>Resend Code</Text>

        <Pressable
          style={styles.button}
          android_ripple={{ color: "#d4a28c" }}
          onPress={() => {
            navigation.navigate("SelectInterests");
          }}
        >
          <Text style={styles.button_text}>Verify</Text>
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
  form: {
    flex: 2,
    backgroundColor: "#fff",
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    paddingTop: 50,
    paddingHorizontal: 20,
    // justifyContent: "center",
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
  resend: {
    fontSize: 12,
    color: "#484848",
    fontFamily: "Poppins",
    textAlign: "right",
    marginVertical: 5,
  },
});

export default VerificationCode;
