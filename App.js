import React, { useEffect, useState } from "react";
import { LogBox } from "react-native";
import { Button, Image } from "react-native";

import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import Screen from "./app/components/Screen";
import ImageInput from "./app/components/ImageInput";

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

export default function App() {
  const [imageUrl, setImageUrl] = useState();
  /* const requestPermission = async () => {

    if (!result.granted) {
      alert("Tou need to enable permission to access the library");
    }
  };

  useEffect(() => {
    requestPermission();
  }, []); */ //Empty array, then this function will execute only once

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) {
        setImageUrl(result.uri);
      }
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  return (
    <Screen>
      <ImageInput
        onChangeImage={(uri) => setImageUrl(uri)}
        imageUrl={imageUrl}
      />
    </Screen>
  );
}
