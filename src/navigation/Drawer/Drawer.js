import React from 'react';
import {View, Text, Button} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from '../../screens/drarwer/Profile';
import FindAnInstructor from '../../screens/drarwer/FindAnInstructor';
import Disputes from '../../screens/drarwer/Disputes';
import PendingRequests from '../../screens/drarwer/PendingRequests';
import History from '../../screens/drarwer/History';
import MyLearning from '../../screens/drarwer/MyLearning';
import FindInstructorOnMap from '../../screens/drarwer/FindInstructorOnMap';

import DrawerMenu from './DrawerMenu';
function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate ('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack ()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator ();

const navigationDrawer = ({navigation}) => (
  <Drawer.Navigator  initialRouteName="Profile" contentOptions={{activeTintColor: '#1F9C64'}} drawerContent = {
    () => <DrawerMenu
      navigation = {navigation}
    />
  }>
    <Drawer.Screen name="HomeScreen" component={HomeScreen} />
    <Drawer.Screen name="Profile" component={Profile} />
    <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    <Drawer.Screen name="FindAnInstructor" component={FindAnInstructor} />
    <Drawer.Screen name="Disputes" component={Disputes} />
    <Drawer.Screen name="PendingRequests" component={PendingRequests} />
    <Drawer.Screen name="History" component={History} />
    <Drawer.Screen name="MyLearning" component={MyLearning} />
    <Drawer.Screen name="FindInstructorOnMap" component={FindInstructorOnMap} />
  </Drawer.Navigator>
);
export default navigationDrawer;
