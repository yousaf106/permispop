import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity,Image} from 'react-native';
import {margins, colors} from '../globals/styles';
import {RFValue} from 'react-native-responsive-fontsize';

const FormButton = ({
  label = '',
  callback,
  showIcon = false,
  showError = false,
  errorText = '',
  icon = require ('../../res/images/tick.png'),
}) => {
  return (
    <View>
    <TouchableOpacity onPress={callback} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>

        {label}
      </Text>
      {showIcon
        ? <Image source={icon} style = {styles.icon} />
        : <View />}
    </TouchableOpacity>
    {showError
        ? <Text style={styles.redText}>{errorText}</Text>
        : <View />}
  </View>
  
  );
};
const styles = StyleSheet.create ({
  buttonContainer: {
    width: '100%',
    height: 50,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingStart: 5,
    paddingEnd: 5,
    flexDirection: 'row',
    marginTop: margins.verticalSpace,
  },
  buttonText: {
    fontSize: RFValue (15),
    color: 'white',
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginStart:5,
  },
  redText: {
    color: 'red',
    fontSize: RFValue (14),
    marginTop: margins.verticalSpace,
  },
});
export default FormButton;
