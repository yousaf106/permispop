import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {margins, colors} from '../globals/styles';
import {RFValue} from 'react-native-responsive-fontsize';

 const FormLabel = ({heading = ''}) => {
  return (
    <View>
      <View style={styles.row}>
        <Text style={styles.titleText}>
          {heading}
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
    color: 'black',
    marginTop: margins.verticalSpace,
    fontSize: RFValue (19),
    fontWeight:'bold'
},

});
export default FormLabel;