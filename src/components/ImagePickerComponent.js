import * as ImagePicker from "expo-image-picker";
import React, { useState, useEffect } from "react";
import { Button, Image, View, Text } from "react-native";

const ImagePickerComponent = ({ onSubmit }) => {
  // image and text to display
  const [image, setImage] = useState(null);
  const [text, setText] = useState('');

  // function to pick image from gallery
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      //base 64 encoding algorithm 
      base64: true, 
    });
    // if image is selected
    if(!result.cancelled){
      setImage(result.uri);
      // running on submit event handler
      const imageText = await onSubmit(result.base64);
    }
  };

  //returning the view!!
  return(
    <View>
      <Button title="Pick an image"/>
      {image && (
        <Image source={{uri: image}} style={{width: 200, height: 200, resizeMode: "contain"}} />
      )}
    </View>
  );
};

export default ImagePickerComponent;
