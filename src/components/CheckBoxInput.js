import React, {Component} from 'react';
import {View, Text, StyleSheet, CheckBox, TouchableOpacity} from 'react-native';
import {margins, colors} from '../globals/styles';
import {RFValue} from 'react-native-responsive-fontsize';

const CheckBoxInput = ({
  label = '',
  isRequired = true,
  isChecked = false,
  callback,
  showError = false,
  errorText = '',
  onFocus = null,
}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          callback (isChecked);
        }}
        style={styles.checkboxRow}
      >
        <CheckBox
          value={isChecked}
          onValueChange={() => {
            callback (isChecked);
          }}
          onFocus={() => (onFocus != null ? onFocus (isRequired) : null)}
        />
        <Text style={styles.rememberMeRowText}>{label}</Text>
      </TouchableOpacity>
      {showError ? <Text style={styles.redText}>{errorText}</Text> : <View />}
    </View>
  );
};
const styles = StyleSheet.create ({
  checkboxRow: {
    width: '100%',
    marginTop: margins.verticalSpace,
    flexDirection: 'row',
  },
  rememberMeRowText: {
    color: 'black',
    fontSize: RFValue (15),
    textAlign: 'left',
    marginTop: 5,
    marginStart: 5,
    flex:1,
  },
  redText: {
    color: 'red',
    fontSize: RFValue (14),
    marginTop: margins.verticalSpace,
  },
});
export default CheckBoxInput;
