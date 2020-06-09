/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useEffect} from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import NavigationStack from './src/navigation/Stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator ();

const App:  () => React$Node = () => {
  useEffect (() => {
    SplashScreen.hide ();
  }, []);
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <NavigationStack />
      </SafeAreaView>
    </NavigationContainer>
  );
};

//const styles = StyleSheet.create ({});

export default App;
