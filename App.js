import { useState } from "react";
import { StyleSheet, TextInput, Text, Switch } from "react-native";
import { LogBox } from "react-native";

import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import Screen from "./app/components/Screen";

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const categories = [
  {
    label: "Hombre",
    value: 1,
  },
  {
    label: "Mujer",
    value: 2,
  },
];

export default function App() {
  const [category, setCategory] = useState(categories[0]);

  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        icon="apps"
        placeholder="Category"
      />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
