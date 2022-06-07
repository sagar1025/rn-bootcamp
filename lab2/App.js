/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const myName = 'Sagar';

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text
        style={styles.welcomeText}>
        Hello {myName}!
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  welcomeText: {
    textAlign:'center'
  },
  container: {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:'100%'
  }
});

export default App;
