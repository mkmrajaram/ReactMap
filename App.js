import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

export default function App() {
  return (
    <View style={styles.mainScreen}>
      <Text>Main Window</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainScreen: {flex: 1},
});
