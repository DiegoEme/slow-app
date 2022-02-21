import React from "react";
import { Image, View, StyleSheet } from "react-native";

import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

function ListingDetailsScrenn(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/camiseta.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Camiseta negra a la venta</AppText>
        <AppText style={styles.price}>$150</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/face1.jpg")}
            title="Diego Eme"
            subtitle="5 listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScrenn;
