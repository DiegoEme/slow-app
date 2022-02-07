import { View, StyleSheet } from 'react-native';
import AppText from './app/components/AppText';

import Card from './app/components/Card';
import ListingDetailsScrenn from './app/screens/ListingDetailsScrenn';
import ViewImageScreen from './app/screens/ViewImageScreen';

export default function App() {
  return (
      <ViewImageScreen />
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

