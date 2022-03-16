import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, ActivityIndicator } from "react-native";

import AppButton from "../components/AppButton";
import Card from "../components/Card";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import routes from "../navigation/routes";
import Screen from "../components/Screen";

function ListingsScreen({ navigation }) {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    setLoading(true);
    const response = await listingsApi.getListings();
    setLoading(false);

    if (!response.ok) return setError(true);

    setError(false);
    setListings(response.data);
  };

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Couldn't retrieve the listings</AppText>
          <AppButton title="Retry" onPress={loadListings} />
        </>
      )}
      {loading && (
        <ActivityIndicator
          style={styles.indicator}
          size="large"
          color="#A26360"
        />
      )}
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={"$" + item.price}
            image={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  indicator: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  screen: {
    padding: 20,
    backgroundColor: colors.lightgrey,
  },
});
export default ListingsScreen;
