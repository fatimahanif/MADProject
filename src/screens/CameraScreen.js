import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Camera, CameraType } from "expo-camera";
import { Touchable } from "react-native";
import { Button } from "@rneui/themed";

const CameraScreen = () => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if(!permission){
    return(
      <View>
        <Button onPress={requestPermission} title='Grant Camera Permission'/>
      </View>
    )
  }
  if (!permission.granted){
    return(
      <View>
        <Button onPress={requestPermission} title='Grant Camera Permission'/>
      </View>
    )
  }

  const toggleCameraType = () => {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  return (
    <View style={styles.container}>
      <Camera type={type} style={{flex: 1}}>
        <TouchableOpacity onPress={toggleCameraType}>
          <Text>Flip Camera</Text>
        </TouchableOpacity>
      </Camera>
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default CameraScreen;
