import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import NavigationDrawer from './Drawer/Drawer';
import {createStackNavigator} from '@react-navigation/stack';
import ToggleButton from './Drawer/ToggleButton';
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import ContactUs from '../screens/ContactUs';
import FaqScreen from '../screens/FaqScreen';
import StudentForm from '../screens/registration/StudentForm';
import Details from '../screens/registration/drivingSchoolForm/Details';
import Packages from '../screens/Packages';
import {colors} from '../globals/styles';
import StepManager from '../screens/registration/instructorForm/StepManager';
import navigationDrawer from './Drawer/Drawer';
import SchoolStepManager from '../screens/registration/drivingSchoolForm/StepManager';
import ScreenNavigator from '../screens/registration/ScreenNavigator';
import TypeSelect from '../screens/TypeSelect';

const Stack = createStackNavigator();

const navigationStack = () => (
  <Stack.Navigator initialRouteName={'Splash'}>
    <Stack.Screen
      options={({navigation}) => ({
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTitleStyle: {
          color: 'white',
        },
        title: 'Registration',
      })}
      name="ScreenNavigator"
      component={ScreenNavigator}
    />
    <Stack.Screen
      options={({navigation}) => ({
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTitleStyle: {
          color: 'white',
        },
        title: 'Instructor Registration',
      })}
      name="StepManager"
      component={StepManager}
    />
    <Stack.Screen
      options={({navigation}) => ({
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTitleStyle: {
          color: 'white',
        },
        title: 'Student Registration',
      })}
      name="StudentForm"
      component={StudentForm}
    />
    <Stack.Screen
      options={({navigation}) => ({
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTitleStyle: {
          color: 'white',
        },
        title: 'Contact Us',
      })}
      name="ContactUs"
      component={ContactUs}
    />
    <Stack.Screen
      options={({navigation}) => ({
        headerShown: false,
      })}
      name="TypeSelect"
      component={TypeSelect}
    />
    <Stack.Screen
      options={({navigation}) => ({
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTitleStyle: {
          color: 'white',
        },
        title: 'FAQs',
      })}
      name="FaqScreen"
      component={FaqScreen}
    />
    <Stack.Screen
      options={({navigation}) => ({
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTitleStyle: {
          color: 'white',
        },
        title: 'Our Price Packages',
      })}
      name="Packages"
      component={Packages}
    />
    <Stack.Screen

      options={({navigation}) => ({
        // headerStyle: {
        //   backgroundColor: colors.primary,
        // },
        // headerTitleStyle: {
        //   color: 'white',
        // },
        // title: "Home",
        headerShown: false,
      })}
      name="navigationDrawer"
      component={navigationDrawer}
    />
    <Stack.Screen
      options={({navigation}) => ({
        headerShown: false,
      })}
      name="Login"
      component={Login}
    />
    <Stack.Screen
      options={({navigation}) => ({
        headerShown: false
      })}
      name="Splash"
      component={Splash}
    />
    <Stack.Screen
      name="Drawer"
      component={NavigationDrawer}

      options={({navigation}) => ({
        // headerStyle: {backgroundColor: 'red'},
        headerLeft: ({}) => <ToggleButton/>,
        //  headerLeft:()=>ToggleButton(navigation),
      })}

    />
  </Stack.Navigator>
);
export default navigationStack;
