import React from 'react';
import {View, Text, Button} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
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
  <Drawer.Navigator initialRouteName="HomeScreen"
  drawerContent = {
    ()=><DrawerMenu navigation = {navigation}/>
  }>
    <Drawer.Screen name="HomeScreen" component={HomeScreen} />
    <Drawer.Screen name="Notifications" component={NotificationsScreen} />
  </Drawer.Navigator>
);
export default navigationDrawer;
