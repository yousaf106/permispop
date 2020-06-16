import React, {Component} from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {colors, margins} from '../globals/styles';
import {RFValue} from 'react-native-responsive-fontsize';
import {TextField} from 'react-native-ui-lib'
// export default class FormInput extends Component {
//   constructor (props) {
//     super (props);
//   }

//   render () {
//     return <div />;
//   }
// }

const Form = ({
  callback,
  isRequired = true,
  formType = 'default',
  hideText = false,
  showError = false,
  errorText = '',
  onFocus = null,
  inputLimit = null,
  value = '',
  placeholder,

}) => {
  return (
    <View>

      <View style={styles.textInputContainer}>
        <TextField
          placeholder={placeholder}
          floatOnFocus={true}
          floatingPlaceholder={true}
          keyboardType={formType}
          secureTextEntry={hideText}
          underlineColorAndroid={'transparent'}
          style={styles.textInput}
          onChangeText={callback}
          value = {value}
          maxLength = {inputLimit}
          onFocus = {()=>onFocus!=null ? onFocus(isRequired):null}
        />
      </View>
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
    borderColor: 'gray',
    // borderBottomWidth: 1,
    borderRadius:5,
    marginBottom: margins.verticalSpace,
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
export default Form;
