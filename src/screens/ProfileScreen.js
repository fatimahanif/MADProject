import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Button,
  Pressable,
} from "react-native";
import { Avatar, Overlay } from "@rneui/themed";
import { Feather, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

type OverlayComponentProps = {};

const ProfileScreen: React.FunctionComponent<OverlayComponentProps> = (
  props
) => {
  const navigation = useNavigation();

  // for overlay dispaly
  const [visible, setVisible] = useState(false);
  // changing visibility of overlay
  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View style={styles.container}>
      <>
        <View style={styles.profileInfo}>
          <View style={styles.profileRow}>
            {/* Avatar */}
            <Avatar
              size={60}
              rounded
              title="FH"
              containerStyle={styles.avatar}
            />
            {/* name and username */}
            <View style={styles.namesRow}>
              <Text style={styles.name}>{props.name}Fatima Hanif</Text>
              <Text style={styles.username}>{props.username}fatima123</Text>
            </View>
          </View>

          <Pressable onPress={toggleOverlay}>
            {/* edit icon opens overlay on press*/}
            <AntDesign name="edit" size={24} color="black" />
          </Pressable>

          {/* overlay */}
          <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
            <View style={styles.overlay}>
              {/* input fields */}
              <TextInput
                autoComplete="off"
                style={styles.input}
                placeholder="Name"
                value='Fatima Hanif'
              />
              <TextInput
                autoComplete="off"
                style={styles.input}
                placeholder="Username"
                value='fatima123'
              />
              <TextInput
                autoComplete="off"
                style={styles.input}
                placeholder="Email ID"
                value='fatimahanif303@gmail.com'
              />
              <TextInput
                autoComplete="off"
                style={styles.input}
                placeholder="Phone Number"
                value='+92-318-5152910'
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

              {/* save button */}
              <Pressable
                style={styles.button}
                android_ripple={{ color: "#d4a28c" }}
                onPress={toggleOverlay}
              >
                <Text style={styles.button_text}>Save</Text>
              </Pressable>
            </View>
          </Overlay>
        </View>

        {/* email and phone number */}
        <View style={styles.contactInfo}>
          <View style={styles.contactRow}>
            <Feather name="mail" size={24} color="#D97D54" />
            <Text style={styles.contactText}>{props.email}fatimahanif303@gmail.com</Text>
          </View>

          <View style={styles.contactRow}>
            <Feather name="phone" size={24} color="#D97D54" />
            <Text style={styles.contactText}>{props.phone}+92-318-5152910</Text>
          </View>
        </View>
      </>

      {/* interests row */}

      <Pressable
        style={styles.button}
        android_ripple={{ color: "#d4a28c" }}
        onPress={() => {
          // navigation.goBack();
          navigation.navigate("Home");
        }}
      >
        <Text style={styles.button_text}>Logout</Text>
      </Pressable>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingTop: 20,
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
  input: {
    borderBottomColor: "#484848",
    padding: 5,
    borderBottomWidth: 1,
    fontSize: 16,
    fontFamily: "Poppins",
    margin: 5,
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  profileRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    backgroundColor: "#D97D54",
  },
  namesRow: {
    marginLeft: 15,
  },
  name: {
    fontWeight: "bold",
    fontSize: 24,
    fontFamily: "Poppins",
  },
  username: {
    fontSize: 18,
    fontFamily: "Poppins",
  },
  overlay: {
    padding: 20,
  },
  contactInfo: {
    padding: 15,
  },
  contactRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 3,
  },
  contactText: {
    fontFamily: "Poppins",
    fontSize: 16,
    marginLeft: 10,
  },
});

export default ProfileScreen;
