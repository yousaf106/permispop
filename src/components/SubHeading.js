import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {margins, colors} from '../globals/styles';
import {RFValue} from 'react-native-responsive-fontsize';
import { color } from 'react-native-reanimated';

 const FormLabel = ({label = ''}) => {
  return (
    <View>
      <View style={styles.row}>
        <Text style={styles.titleText}>
          {label}
        </Text>

        

      </View>
    </View>
  );
};
const styles = StyleSheet.create ({
  row: {
    flexDirection: 'row',
},

  titleText: {
    color: colors.gray,
    marginTop: margins.verticalSpace,
    fontSize: RFValue (12),
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