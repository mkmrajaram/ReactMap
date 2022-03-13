import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store';
import {View, StyleSheet} from 'react-native';
import HomeScreen from './src/screens/Home/HomeScreen';
export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.mainScreen}>
        <HomeScreen />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  mainScreen: {flex: 1},
});
