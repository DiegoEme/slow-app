import { View, StyleSheet } from 'react-native';
import AppText from './app/components/AppText';

import Card from './app/components/Card';
import ListingDetailsScrenn from './app/screens/ListingDetailsScrenn';
import MessagesScreen from './app/screens/MessagesScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

export default function App() {
  return (
      <MessagesScreen />
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

