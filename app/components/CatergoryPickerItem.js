import React from "react";
import { View, StyleSheet } from "react-native";

import Icon from "./Icon";
import AppText from "./AppText";

function CatergoryPickerItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={50} />
      <AppText style={styles.text}>{item.label}</AppText>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  text: {
    marginTop: 5,
    fontSize: 16,
    textAlign: "center",
  },
});

export default CatergoryPickerItem;
