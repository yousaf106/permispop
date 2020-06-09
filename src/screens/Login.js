import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  Text,
  CheckBox,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {margins, paddings, colors} from '../globals/styles';
export default class Login extends Component {
  constructor (props) {
    super (props);
    this.state = {
      showPassword: true,
      checked: false,
      email: '',
      password: '',
    };
  }
  render () {
    return (
      <View style={styles.container}>
        <Image
          style={styles.backgroundImage}
          source={require ('../../res/images/login_bg.jpg')}
        />
        <View style={styles.absoluteContainer}>
          <View style={styles.formContainer}>
            <Text style={styles.headingText}>Login</Text>
            <Text style={styles.paragraphText}>
              Enter your email and password to login with Permispop
            </Text>
            <Text style={styles.formTitle}>
              Email
            </Text>
            <View style={styles.textInputRow}>
              <TextInput
                value={this.state.email}
                onChangeText={text => this.setState ({email: text})}
                keyboardType={'email-address'}
                style={styles.textInput}
                underlineColorAndroid={'transparent'}
              />
              <View style={styles.textInputImageContainer}>
                <Image
                  style={styles.textInputImage}
                  source={require ('../../res/images/user.png')}
                />
              </View>
            </View>
            <Text style={styles.formTitle}>
              Password
            </Text>
            <View style={styles.textInputRow}>
              <TextInput
                value={this.state.password}
                onChangeText={text => this.setState ({password: text})}
                secureTextEntry={this.state.showPassword ? true : false}
                style={styles.textInput}
                underlineColorAndroid={'transparent'}
              />
              <TouchableOpacity
                activeOpacity={1.0}
                onPress={() =>
                  this.setState ({showPassword: !this.state.showPassword})}
                style={styles.textInputImageContainer}
              >
                <Image
                  style={styles.textInputImage}
                  source={
                    this.state.showPassword
                      ? require ('../../res/images/hide_password.jpg')
                      : require ('../../res/images/show_password.png')
                  }
                />
              </TouchableOpacity>
            </View>

            <View style={styles.rememberMeRow}>
              <TouchableOpacity
                onPress={() => this.setState ({checked: !this.state.checked})}
                style={styles.checkboxRow}
              >
                <CheckBox
                  value={this.state.checked}
                  onValueChange={() =>
                    this.setState ({checked: !this.state.checked})}
                />
                <Text style={styles.rememberMeRowText}>Remember Me</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                  style={[
                    styles.rememberMeRowText,
                    {marginStart: 0, textAlign: 'left'},
                  ]}
                >
                  Forgot Password
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.loginButtonContainer}>
                <Text style={styles.buttonText}>
                  LOGIN
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.registerButtonContainer}>
                <Text style={styles.buttonText}>
                  REGISTER NOW
                </Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create ({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
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
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
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
    paddingStart: paddings.horizontalPadding,
    paddingEnd: paddings.horizontalPadding,
    width: '100%',
  },
  textInput: {
    width: '85%',
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
    backgroundColor: 'white',
    height: 50,
    borderColor: 'black',
    borderWidth: 0.5,
    marginTop: margins.verticalSpace,
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
    marginTop: 5,
    marginStart: 5,
  },
  buttonRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: margins.verticalSpace,
  },
  loginButtonContainer: {
    width: '48%',
    backgroundColor: colors.primary,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 0.5,
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
    fontSize: RFValue (15),
  },
});
