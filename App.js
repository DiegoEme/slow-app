import React, { useState, useEffect } from "react";
import { LogBox } from "react-native";
import NetInfo from "@react-native-community/netinfo";
import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
import navigationTheme from "./app/navigation/navigationTheme";
import storage from "./app/auth/storage";

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

export default function App() {
  const [user, setUser] = useState();

  const restoreUser = async () => {
    const user = await storage.getUser();
    if (user) setUser(user);
  };

  useEffect(() => {
    restoreUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
