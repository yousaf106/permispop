/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useEffect} from 'react';
import {SafeAreaView, View, Text, Button, StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import NavigationStack from './src/navigation/Stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Login from './src/screens/Login';
import ContactUs from './src/screens/ContactUs';
import StudentForm from './src/screens/registration/StudentForm';


const Drawer = createDrawerNavigator ();

const App:  () => React$Node = () => {
  useEffect (() => {
    SplashScreen.hide ();
  }, []);
  return (

    <NavigationContainer>
      <StatusBar backgroundColor={'transparent'} translucent={true} />
      <SafeAreaView style={{flex: 1}}>
        <NavigationStack />
      </SafeAreaView>
    </NavigationContainer>
  );
};

//const styles = StyleSheet.create ({});


export default App;
