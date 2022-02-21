import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons color={colors.primary} size={35} name="close" />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          color={colors.secondary}
          size={35}
          name="delete"
        />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/camiseta.jpg")}
      ></Image>
    </View>
  );
}
const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: 70,
    left: 30,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  deleteIcon: {
    position: "absolute",
    top: 70,
    right: 30,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
export default ViewImageScreen;
