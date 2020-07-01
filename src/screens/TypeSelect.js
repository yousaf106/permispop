import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  Text,
  Dimensions,
  ImageBackground,
  CheckBox,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {margins, paddings, colors} from '../globals/styles';
import Form from "../components/FormInput";

const{ width, height } = Dimensions.get('window');

export default class TypeSelect extends Component {



  // constructor (props) {
  // //   super (props);
  // //   this.state = {
  // //     showPassword: true,
  // //     checked: false,
  // //     email: '',
  // //     password: '',
  // //   };
  // }
  //

  checkForEmptyFields = () => {
    if (this.state.email.length === 0) {
      this.setState({showFirstNameError: true});
    }
  }

  state = {
    email: '',
    password: '',
    checked: false,
    showFirstNameError: true,
    showError: true,
    loginOnPress: false,
    passwordError: false,
    showLoginError: true,
    showPassword: true
  }



  render () {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.backgroundImage}
          source={require ('../../res/images/login_bg.jpg')}
        >
        <View style={styles.absoluteContainer}>
          <View style={styles.formContainer}>
            <Text style={styles.headingText}>Select Account Type</Text>
            </View>
            <View style={styles.buttonRow}>
              <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('StudentForm')
              }}
                                style={styles.loginButtonContainer}>
                <Text style={styles.buttonText}>
                  Student Form
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('ScreenNavigator')
              }}
                                style={styles.loginButtonContainer}>
                <Text style={styles.buttonText}>
                  Instructor Form
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('ScreenNavigator')
              }}
                                style={styles.loginButtonContainer}>
                <Text style={styles.buttonText}>
                  Driving School Form
                </Text>
              </TouchableOpacity>
            </View>

        </View>
        </ImageBackground>
        </View>
    );
  }
}
const styles = StyleSheet.create ({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  backgroundImage: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  absoluteContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(10, 128, 104,0.6)',
    alignItems: 'center',
  },
  headingText: {
    color: 'white',
    fontSize: RFValue (33),
  },
  paragraphText: {
    color: 'white',
    marginTop: margins.verticalSpace,
    fontSize: RFValue (18),
  },
  formContainer: {
    paddingTop: width*0.1,
    paddingHorizontal: width*0.05,
    alignItems: 'center',
    width: '100%',
  },
  redText: {
    color: 'red',
    fontSize: RFValue (14),
    marginTop: margins.verticalSpace,
  },
  textInput: {
    width: '85%',
    color: '#FFFFFF',
    fontSize: 20,
    marginLeft:10
  },
  formTitle: {
    color: 'white',
    marginTop: margins.verticalSpace,
    fontSize: RFValue (16),
    fontWeight: 'bold',
  },
  textInputRow: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    height: 50,
    borderColor: 'black',
    borderWidth: 0.5,
    marginTop: margins.verticalSpace,
    borderRadius: 10
  },
  textInputImageContainer: {
    width: '15%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textInputImage: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    tintColor: '#FFFFFF'
  },
  rememberMeRow: {
    width: '100%',
    marginTop: margins.verticalSpace,
    flexDirection: 'row',
  },

  checkboxRow: {
    flexDirection: 'row',
    flex: 1,
  },
  rememberMeRowText: {
    color: 'white',
    marginTop: margins.verticalSpace,
    fontSize: RFValue (15),
    textAlign: 'center',
    marginStart: 5,
  },
  buttonRow: {
    width: width,
    height: width*1.3,
    justifyContent: 'space-around',
    alignItems: 'center',
    // marginTop: margins.verticalSpace,
  },
  loginButtonContainer: {
    width: width*0.6,
    backgroundColor: colors.primary,
    height: width*0.2,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: width*0.04
  },
  registerButtonContainer: {
    width: '48%',
    backgroundColor: colors.primarybold,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 0.5,
  },
  buttonText: {
    color: 'white',
    fontSize: RFValue (20),
  },
});
