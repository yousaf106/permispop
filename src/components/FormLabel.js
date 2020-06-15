import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {margins, colors} from '../globals/styles';
import {RFValue} from 'react-native-responsive-fontsize';

 const FormLabel = ({label = '', isRequired = true}) => {
  return (
    <View>
      <View style={styles.row}>
        <Text style={styles.titleText}>
          {label}
        </Text>

        {isRequired ? <Text style={styles.asteric}>*</Text> : <View />}

      </View>
    </View>
  );
};
const styles = StyleSheet.create ({
  row: {
    flexDirection: 'row',
},

  titleText: {
    color: 'black',
    marginTop: margins.verticalSpace,
    fontSize: RFValue (15),
    fontFamily:'sans-serif-light',
    letterSpacing:2,
  },

  asteric: {
    color: 'red',
    marginTop: margins.verticalSpace,
    marginStart: 5,
    fontSize: RFValue (14),
    fontWeight: 'bold',
  },
});
export default FormLabel;