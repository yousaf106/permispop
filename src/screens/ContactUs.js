import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, Text, TouchableOpacity} from 'react-native';
import {colors, margins, paddings} from '../globals/styles';
import Form from '../components/FormInput';
import CalandarInput from '../components/CalendarInput';
import Dropdown from '../components/DropdownInput';
import UploadAvatar from '../components/UploadAvatar';
import FormLabel from '../components/FormLabel';
import UploadButton from '../components/UploadButton';
import {RFValue} from 'react-native-responsive-fontsize';
import CheckBoxInput from '../components/CheckBoxInput';
import FormButton from '../components/FormButton';
import Toast from 'react-native-simple-toast';

export default class ContactUs extends Component {
  constructor (props) {
    super (props);
    this.state = {
      date: '01-01-2002',
      selectedDropdownValue: '',
      highwatCheckedBox: false,
      termsCheckBox: false,
      showTermsError: false,
      nephText: '',
      isNephCkecked: false,
      showNephError: false,
      showIsNephCheckedError: false,
      nameText: '',
      showNameError: '',
      surNameText: '',
      showEmailError: '',

      messageText: '',
      messageError: '',

      addressText: '',
      showAddressError: false,

      complementText: '',

      zipCodeText: '',
      showZipCodeError: false,

      cityText: '',
      showCityError: false,

      email_address: '',

      phoneText: '',
      showPhoneError: '',

      secondEmailText: '',
      secondPhoneText: '',

      passwordText: '',
      showPasswordError: false,
      passwordErrorText: '',

      confirmPasswordText: '',
      showConfirmPasswordError: false,
      confirmPasswordErrorText: '',

      profileUri: '',
      backUri: '',
      frontUri:'',
      showProfileError: false,
      showFrontError: false,
      showBackError: false,


      numberOfHoursText:'',
    };
  }

  checkForEmptyFields = () => {
    if (this.state.nameText.length === 0)
      this.setState ({showNameError: true});
    else this.setState ({showNameError: false});
    if (this.state.surNameText.length === 0)
      this.setState ({showEmailError: true});
    else this.setState ({showEmailError: false});
    if (this.state.profileUri.length === 0)
      this.setState ({showProfileError: true});
    else this.setState ({showProfileError: false});
    if (this.state.messageText.length === 0)
      this.setState ({messageError: true});
    else this.setState ({messageError: false});
    if (this.state.frontUri.length === 0)
      this.setState ({showFrontError: true});
    else this.setState ({showFrontError: false});
    if (this.state.backUri.length === 0) this.setState ({showBackError: true});
    else this.setState ({showBackError: false});
    if (this.state.addressText.length === 0)
      this.setState ({showAddressError: true});
    else this.setState ({showAddressError: false});

    if (this.state.zipCodeText.length === 0)
      this.setState ({showZipCodeError: true});
    else this.setState ({showZipCodeError: false});

    if (this.state.cityText.length === 0) this.setState ({showCityError: true});
    else this.setState ({showCityError: false});

    if (this.state.emailText.length === 0)
      this.setState ({showEmailError: true});
    else this.setState ({showEmailError: false});

    if (this.state.phoneText.length === 0)
      this.setState ({showPhoneError: true});
    else this.setState ({showPhoneError: false});

    if (this.state.passwordText.length === 0)
      this.setState ({
        showPasswordError: true,
        passwordErrorText: 'Password field should not be empty',
      });
    else this.setState ({showPasswordError: false});

    if (this.state.confirmPasswordText.length === 0)
      this.setState ({
        showConfirmPasswordError: true,
        confirmPasswordErrorText: 'Password field should not be empty',
      });
    else this.setState ({showConfirmPasswordError: false});

    if(this.state.passwordText.length!=0 && this.state.confirmPasswordText.length!=0)
    {

      if(this.state.confirmPasswordText!= this.state.passwordText)
        this.setState({showConfirmPasswordError:true,confirmPasswordErrorText:'Passwords do not match'});
      else
        this.setState({showConfirmPasswordError:false});
    }

    if (this.state.nephText.length < 12 && this.state.nephText.length > 0)
      this.setState ({showNephError: true});
    else this.setState ({showNephError: false});

    if (this.state.nephText.length > 0 && !this.state.isNephCkecked)
      this.setState ({showIsNephCheckedError: true});
    else this.setState ({showIsNephCheckedError: false});

    if (this.state.nephText.length === 0)
      this.setState ({showNephError: false});

    if (!this.state.termsCheckBox) this.setState ({showTermsError: true});
    else this.setState ({showTermsError: false});
  };

  areAllFieldsClear = () => {
    if (
      !this.state.name &&
      !this.state.email_address &&
      !this.state.showProfileError &&
      !this.state.messageError &&
      !this.state.showFrontError &&
      !this.state.showBackError &&
      !this.state.showAddressError &&
      !this.state.showZipCodeError &&
      !this.state.showCityError &&
      !this.state.showEmailError &&
      !this.state.showPhoneError &&
      !this.state.showPasswordError &&
      !this.state.showConfirmPasswordError &&
      !this.state.showNephError &&
      !this.state.showIsNephCheckedError &&
      !this.state.showTermsError
    ) {
      Toast.show('You May Proceed (Debud Text)');

    } else Toast.show ('Fill all the required fields (Debud Text)');
  };

  render () {
    return (
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 20}}
        >


          <FormLabel  />

          <Form
            callback={text => {
              this.setState ({nameText: text});
              if (text.length === 0) {
                this.setState ({showNameError: true});
              } else this.setState ({showNameError: false});
            }}
            onFocus={isRequired => {
              if (this.state.nameText.length === 0)
                this.setState ({showNameError: true});
            }}
            showError={this.state.showNameError}
            errorText={'Name Should Not Be Empty'}
            value = {this.state.nameText}
            placeholder={'Enter Name'}
          />

          <FormLabel  />

          <Form
            callback={text => {
              this.setState ({email_address: text});
              if (text.length === 0) {
                this.setState ({showEmailError: true});
              } else this.setState ({showEmailError: false});
            }}
            onFocus={isRequired => {
              if (this.state.email_address.length === 0)
                this.setState ({showEmailError: true});
            }}
            showError={this.state.showEmailError}
            errorText={'Email Should Not Be Empty'}
            value = {this.state.surNameText}
            placeholder={'Enter Email'}

          />



          <View style={styles.verticalSpace} />

          <FormLabel  />

          <Form
            value = {this.state.phoneText}
            callback={text => {
              this.setState ({phoneText: text});
              if (text.length === 0) {
                this.setState ({showPhoneError: true});
              } else this.setState ({showPhoneError: false});
            }}
            onFocus={isRequired => {
              if (this.state.phoneText.length === 0)
                this.setState ({showPhoneError: true});
            }}
            showError={this.state.showPhoneError}
            errorText={'First Name Should Not Be Empty'}
            formType="phone-pad"
            placeholder={'Enter Phone Number'}
          />

          <FormLabel  />

          <Form
            callback={text => {
              this.setState ({addressText: text});
              if (text.length === 0) {
                this.setState ({showAddressError: true});
              } else this.setState ({showAddressError: false});
            }}
            onFocus={isRequired => {
              if (this.state.addressText.length === 0)
                this.setState ({showAddressError: true});
            }}
            showError={this.state.showAddressError}
            errorText={'Address Should Not Be Empty'}
            value = {this.state.addressText}
            placeholder={'Enter Address'}

          />

          <FormLabel  />

          <Form
            callback={text => {
              this.setState ({messageText: text});
              if (text.length === 0) {
                this.setState ({messageError: true});
              } else this.setState ({messageError: false});
            }}
            onFocus={isRequired => {
              if (this.state.messageText.length === 0)
                this.setState ({messageError: true});
            }}
            showError={this.state.messageError}
            errorText={'Message Should Not Be Empty'}
            value = {this.state.messageText}
            placeholder={'Enter Message'}

          />

          <View style={styles.verticalSpace} />
          <View style={styles.verticalSpace} />
          <View style={styles.verticalSpace} />
          <View style={styles.verticalSpace} />
          <View style={styles.verticalSpace} />



          <View style={styles.containerImage}>
            {/* <TouchableOpacity
     style = {{width:20,height:20,backgroundColor:'red'}}
     onPress = {this.selectFile}
     /> */}
            <TouchableOpacity
              onPress={() => {this.props.navigation.navigate('FaqScreen')}}
              style={styles.buttonContainer}
            >
              <Text style={styles.buttonText}>
                Send
              </Text>
            </TouchableOpacity>

            {this.state.name === ''
              ||
              this.state.email_address === ''
              ||
              this.state.phoneText === ''
              ||
              this.state.messageText === ''
              ? <Text style={styles.redTextImage}>Fields are empty</Text>
              : <View />}
          </View>


        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    paddingStart: paddings.horizontalPadding,
    paddingEnd: paddings.horizontalPadding,
    backgroundColor: 'white',
    width: '100%',
    height: '100%',

  },
  verticalSpace: {
    marginTop: margins.verticalSpace,
  },
  redText: {
    color: 'red',
    fontSize: RFValue (14),
  },

  containerImage: {
    width: '100%',
    // margin: 2,
    marginTop: margins.verticalSpace,
  },
  buttonContainer: {
    width: '100%',
    height: 50,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingStart:5,
    paddingEnd:5,
    borderRadius:25,
    elevation: 7
  },
  buttonText: {
    fontSize: RFValue (15),
    color: 'white',
  },
  redTextImage: {
    color: 'red',
    fontSize: RFValue (14),
    marginTop: margins.verticalSpace,
  },


});
