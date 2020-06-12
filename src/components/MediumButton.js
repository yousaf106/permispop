import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {margins, colors} from '../globals/styles';
import {RFValue} from 'react-native-responsive-fontsize';

const MediumButton = ({
  label = '',
  callback,
  showIconRight = false,
  showError = false,
  errorText = '',
  showIconLeft = false,
  leftIcon = require ('../../res/images/tick.png'),
  rightIcon = require ('../../res/images/tick.png'),
}) => {
  return (
    <View>
      <TouchableOpacity onPress={callback} style={styles.buttonContainer}>
        {showIconLeft
          ? <Image source={leftIcon} style={styles.leftIcon} />
          : <View />}

        <Text style={styles.buttonText}>

          {label}
        </Text>
        {showIconRight
          ? <Image source={rightIcon} style={styles.icon} />
          : <View />}
      </TouchableOpacity>
      {showError ? <Text style={styles.redText}>{errorText}</Text> : <View />}
    </View>
  );
};
const styles = StyleSheet.create ({
  buttonContainer: {
    height: 50,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingStart: 20,
    paddingEnd: 20,
    flexDirection: 'row',
    marginTop: margins.verticalSpace,
    borderRadius:25,
  },
  buttonText: {
    fontSize: RFValue (16),
    color: 'white',
    fontWeight:'bold',
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginStart: 5,
  },
  leftIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginEnd: 5,
  },
  redText: {
    color: 'red',
    fontSize: RFValue (14),
    marginTop: margins.verticalSpace,
  },
});
export default MediumButton;
