import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {colors, margins} from '../globals/styles';
import {RFValue} from 'react-native-responsive-fontsize';
import DatePicker from 'react-native-datepicker';
import React, {Component} from 'react';

const CalendarInput = ({callback, isRequired = true, date = '01-01-2002', showError = false,
errorText = '',}) => {
  return (
    <View>

      <DatePicker
        style={{width: '100%', marginTop: margins.verticalSpace}}
        date={date} //initial date from state
        mode="date" //The enum of date, datetime and time
        placeholder=""
        format="DD-MM-YYYY"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        minDate = {'01-01-2002'}
        customStyles={{
          dateInput: {
            width: '100%',
            backgroundColor: 'white',
            height: 50,
            borderColor: 'black',
            borderWidth: 0.5,
            marginTop: margins.verticalSpace,
          },
          dateText: {
            alignSelf: 'baseline',
            marginStart: 5,
            textAlign: 'left',
            color: 'black',
          },

          placeholderText: {
            alignSelf: 'baseline',
            marginStart: 5,
            textAlign: 'left',
          },
        }}
        onDateChange={callback}
      />
  {showError
        ? <Text style={styles.redText}>{errorText}</Text>
        : <View />}
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
  },
  textInput: {
    width: '100%',
  },
  textInputContainer: {
    width: '100%',
    backgroundColor: 'white',
    height: 50,
    borderColor: 'black',
    borderWidth: 0.5,
    marginTop: margins.verticalSpace,
  },
  asteric: {
    color: 'red',
    marginTop: margins.verticalSpace,
    marginStart: 5,
    fontSize: RFValue (14),
    fontWeight: 'bold',
  },
  redText: {
    color: 'red',
    fontSize: RFValue (14),
    marginTop: margins.verticalSpace,
  },
});
export default CalendarInput;
