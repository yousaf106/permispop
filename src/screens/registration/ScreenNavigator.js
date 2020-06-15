import * as React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors} from '../../globals/styles';
import StudentForm from './StudentForm';
import InstructorForm from './instructorForm/StepManager';
import DrivingSchoolForm from './drivingSchoolForm/StepManager';
import {RFValue} from 'react-native-responsive-fontsize';
function HomeScreen () {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen () {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator ();

export default function App () {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#FFFFFF',
        inactiveTintColor: 'black',
        style: {
          backgroundColor: colors.primary,

        },
        labelStyle: {
          textAlign: 'center',
          fontSize: RFValue (12),
        },
        indicatorStyle: {
          borderBottomColor: '#87B56A',
          borderBottomWidth: 2,
        },
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'StundentForm') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'StundentForm') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }
          // You can return any component that you like here!
          if (route.name === 'StundentForm')
            return (
              <Image
                source={require ('../../../res/images/student.png')}
                style={{width: 30, height: 30,marginTop:5, tintColor: color, resizeMode:'contain'}}
              />
            );
          if (route.name === 'Instructor')
            return (
              <Image
                source={require ('../../../res/images/instructor.png')}
                style={{width: 30, height: 30,marginTop:5, tintColor: color,resizeMode:'contain'}}
              />
            );
          if (route.name === 'DrivingSchool')
            return (
              <Image
                source={require ('../../../res/images/driving_school.png')}
                style={{width: 30, height: 30, marginTop:5,tintColor: color,resizeMode:'contain'}}
              />
            );
        },
      })}
    >
      <Tab.Screen
        name="StundentForm"
        options={{
          tabBarLabel: 'Student',
        }}
        component={StudentForm}
      />
      <Tab.Screen
        name="Instructor"
        options={{
          tabBarLabel: 'Instructor',
        }}
        component={InstructorForm}
      />

      <Tab.Screen
        name="DrivingSchool"
        options={{
          tabBarLabel: 'Driving School',
        }}
        component={DrivingSchoolForm}
      />

    </Tab.Navigator>
  );
  function getImage (routeName) {
    console.warn (routeName);
    switch (routeName) {
      case 'StundentForm':
        return require ('../../../res/images/student.png');
      case 'Instructor':
        require ('../../../res/images/instructor.png');
      case 'DrivingSchool':
        require ('../../../res/images/driving_school.png');
      default:
        return null;
    }
  }
}
const styles = StyleSheet.create ({
  icon: {},
});
