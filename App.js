import { StyleSheet } from 'react-native';

import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import { LogBox } from 'react-native';
import ListItem from './app/components/ListItem';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

export default function App() {
  return (
      <Screen>
          <ListItem title="my title" subtitle="subtitle"/>
      </Screen>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

