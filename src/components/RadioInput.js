import React, {Component} from 'react';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import {RFValue} from 'react-native-responsive-fontsize';
import {View} from 'react-native';
import {colors,margins}from '../globals/styles';
export default (RadioInput = ({values = [], callback = null,formHorizontal = false, labelHorizontal = true}) => {
  return (
    <View style = {{marginTop:margins.verticalSpace}}>
      <RadioForm
        radio_props={values}
        initial={0}
        formHorizontal={formHorizontal}
        labelHorizontal={labelHorizontal}
        buttonColor={colors.primary}
        selectedButtonColor = {colors.primary}
        animation={true}
        labelStyle={labelHorizontal ? {fontSize: RFValue(16),  marginEnd:5,}:{fontSize: RFValue(16),  marginEnd:0,}}
        onPress={value => {
          callback (value);
        }}
      />
    </View>
  );
});
