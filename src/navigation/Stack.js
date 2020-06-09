import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import NavigationDrawer from './Drawer/Drawer';
import {createStackNavigator} from '@react-navigation/stack';
import ToggleButton from './Drawer/ToggleButton';
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import StudentForm from '../screens/registration/StudentForm';
import {colors} from '../globals/styles';
import StepManager from '../screens/registration/instructorForm/StepManager'
const Stack = createStackNavigator ();

const navigationStack = () => (
  <Stack.Navigator>




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
        headerShown: false,
      })}
      name="Login"
      component={Login}
    />

    <Stack.Screen
      options={({navigation}) => ({
        headerShown: false,
      })}
      name="Splash"
      component={Splash}
    />
    <Stack.Screen
      name="Drawer"
      component={NavigationDrawer}
      options={({navigation}) => ({
        headerStyle: {backgroundColor: 'red'},
        headerLeft: ({}) => <ToggleButton />,
        //  headerLeft:()=>ToggleButton(navigation),
      })}
    />
  </Stack.Navigator>
);
export default navigationStack;
