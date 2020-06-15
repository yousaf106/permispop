import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {margins, colors} from '../globals/styles';
import {Picker} from '@react-native-community/picker';
import {RFValue} from 'react-native-responsive-fontsize';

export default (Dropdown = ({
  values = [],
  selectedValue = '',
  callback,
  isRequired = true,
}) => {
  return (
    <View>
 
      <View style={styles.dropDownInputContainer}>

        <Picker
          selectedValue={selectedValue}
          style={styles.picker}
          onValueChange={callback}
          // onValueChange={(itemValue, itemIndex) =>
          //   this.setState ({language: itemValue})}
        >
          {values.map ((item, index) => {
            return <Picker.Item label={item} value={item} />;
          })}
        </Picker>

      </View>
    </View>
  );
});
const styles = StyleSheet.create ({
  dropDownInputContainer: {
    width: '100%',
    backgroundColor: 'white',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius:5,
    marginTop: margins.verticalSpace,
  },
  row: {
    flexDirection: 'row',
  },

  titleText: {
    color: 'black',
    marginTop: margins.verticalSpace,
    fontSize: RFValue (15),
  },
  picker: {
    height: 50,
    width: '100%',
  },
  asteric: {
    color: 'red',
    marginTop: margins.verticalSpace,
    marginStart: 5,
    fontSize: RFValue (14),
    fontWeight: 'bold',
  },
});
