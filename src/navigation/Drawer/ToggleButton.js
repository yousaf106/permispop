import React from 'react';
import {TouchableOpacity, Image, StyleSheet, Alert} from 'react-native';
import {useNavigation, DrawerActions} from '@react-navigation/native';
const ToggleButton = () => {
  const navigation = useNavigation ();

  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={() => {
        navigation.dispatch (DrawerActions.toggleDrawer ());
      }}
    >
      <Image
        style={styles.icon}
        source={require ('../../../res/images/drawer.png')}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create ({
  icon: {
    width: 20,
    height: 20,
  },
  wrapper: {
    marginStart: 5,
    padding: 10,
  },
});
export default ToggleButton;
