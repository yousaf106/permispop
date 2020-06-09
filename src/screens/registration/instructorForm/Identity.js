import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {margins, paddings} from '../../../globals/styles';
import Form from '../../../components/FormInput';
import CalandarInput from '../../../components/CalendarInput';
import Dropdown from '../../../components/DropdownInput';
import UploadAvatar from '../../../components/UploadAvatar';
import FormLabel from '../../../components/FormLabel';
import UploadButton from '../../../components/UploadButton';
import {RFValue} from 'react-native-responsive-fontsize';
import CheckBoxInput from '../../../components/CheckBoxInput';
import FormButton from '../../../components/FormButton';
import Toast from 'react-native-simple-toast';
import {validateEmail} from '../../../globals/functions';
export default class Identity extends Component {
  constructor (props) {
    super (props);
    this.state = {
      date: '01-01-2002',
      selectedDropdownValue: '',
      fitstNameText: '',
      showFirstNameError: '',
      surNameText: '',
      showSurNameError: '',

      placeOfBirthText: '',
      PlaceOfBirthError: '',

      addressText: '',
      showAddressError: false,

      complementText: '',

      zipCodeText: '',
      showZipCodeError: false,

      cityText: '',
      showCityError: false,

      emailText: '',
      showEmailError: '',
      emailErrorText:'Email is required',


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
    };
  }

  checkForEmptyFields = () => {
    if (this.state.fitstNameText.length === 0)
      this.setState ({showFirstNameError: true});
    else this.setState ({showFirstNameError: false});
    if (this.state.surNameText.length === 0)
      this.setState ({showSurNameError: true});
    else this.setState ({showSurNameError: false});
    if (this.state.profileUri.length === 0)
      this.setState ({showProfileError: true});
    else this.setState ({showProfileError: false});
    if (this.state.placeOfBirthText.length === 0)
      this.setState ({PlaceOfBirthError: true});
    else this.setState ({PlaceOfBirthError: false});
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
      this.setState ({showEmailError: true,emailErrorText:'Email Must Not Be Empty'});
    else this.setState ({showEmailError: false});

    if(this.state.emailText.length>0){
      const valid = validateEmail(this.state.emailText);
      console.warn(valid);
      if(!valid)
      this.setState ({showEmailError: true,emailErrorText:'Please Enter A Valid Email'});
      else
      this.setState({showEmailError:false});
    }

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

  };

  areAllFieldsClear = () => {
    if (
      !this.state.showFirstNameError &&
      !this.state.showSurNameError &&
      !this.state.showProfileError &&
      !this.state.PlaceOfBirthError &&
      !this.state.showFrontError &&
      !this.state.showBackError &&
      !this.state.showAddressError &&
      !this.state.showZipCodeError &&
      !this.state.showCityError &&
      !this.state.showEmailError &&
      !this.state.showPhoneError &&
      !this.state.showPasswordError &&
      !this.state.showConfirmPasswordError

    ) {
      Toast.show('You May Proceed (Debud Text)');

    } else Toast.show ('Fill all the required fields (Debud Text)');
  };

  render () {
    return (
      <View>
        
          <UploadAvatar
            showError={this.state.showProfileError}
            errorText={'you must upload a profile image'}
            onUriReceived={uri => {
              if (uri != null && uri != undefined && uri.length > 0)
                this.setState ({profileUri: uri, showProfileError: false});
              else this.setState ({profileUri: '', showProfileError: true});
            }}
            text="Upload Image"
          />

          <FormLabel label="First Name" />

          <Form
            callback={text => {
              this.setState ({fitstNameText: text});
              if (text.length === 0) {
                this.setState ({showFirstNameError: true});
              } else this.setState ({showFirstNameError: false});
            }}
            onFocus={isRequired => {
              if (this.state.fitstNameText.length === 0)
                this.setState ({showFirstNameError: true});
            }}
            showError={this.state.showFirstNameError}
            errorText={'First Name Should Not Be Empty'}
          />

          <FormLabel label="Surname" />

          <Form
            callback={text => {
              this.setState ({surNameText: text});
              if (text.length === 0) {
                this.setState ({showSurNameError: true});
              } else this.setState ({showSurNameError: false});
            }}
            onFocus={isRequired => {
              if (this.state.surNameText.length === 0)
                this.setState ({showSurNameError: true});
            }}
            showError={this.state.showSurNameError}
            errorText={'Surname Should Not Be Empty'}
          />

          <FormLabel label="Date Of Birth" />

          <CalandarInput
            date={this.state.date}
            callback={date => {
              this.setState ({date, date});
            }}
          />
          <View style={styles.verticalSpace} />

          <FormLabel label="Place Of Birth" />

          <Form
            callback={text => {
              this.setState ({placeOfBirthText: text});
              if (text.length === 0) {
                this.setState ({PlaceOfBirthError: true});
              } else this.setState ({PlaceOfBirthError: false});
            }}
            onFocus={isRequired => {
              if (this.state.placeOfBirthText.length === 0)
                this.setState ({PlaceOfBirthError: true});
            }}
            showError={this.state.PlaceOfBirthError}
            errorText={'Place Of Birth Should Not Be Empty'}
          />

          <FormLabel label="Gender" />

          <Dropdown
            values={['Male', 'Female']}
            selectedValue={this.state.selectedDropdownValue}
            callback={(itemValue, itemIndex) => {
              this.setState ({selectedDropdownValue: itemValue});
            }}
          />

          <FormLabel label="Upload front of your ID Card/Passport/Residence permit" />
          <UploadButton
            showError={this.state.showFrontError}
            errorText="You must upload image"
            onUriReceived={uri => {
              if (uri != null && uri != undefined && uri.length != 0)
                this.setState ({frontUri: uri, showFrontError: false});
              else this.setState ({frontUri: '', showFrontError: true});
            }}
          />

          <FormLabel label="Upload back of your ID Card/Passport/Residence permit" />
          <UploadButton
            showError={this.state.showBackError}
            errorText="You must upload image"
            onUriReceived={uri => {
              if (uri != null && uri != undefined && uri.length != 0)
                this.setState ({backUri: uri, showBackError: false});
              else this.setState ({backUri: '', showBackError: true});
            }}
          />

          <FormLabel label="Address" />

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
          />

          <FormLabel label="Complement" isRequired={false} />

          <Form
            callback={text => {
              this.setState ({complementText: text});
            }}
          />

          <FormLabel label="Zip Code" />

          <Form
            callback={text => {
              this.setState ({zipCodeText: text});
              if (text.length === 0) {
                this.setState ({showZipCodeError: true});
              } else this.setState ({showZipCodeError: false});
            }}
            onFocus={isRequired => {
              if (this.state.zipCodeText.length === 0)
                this.setState ({showZipCodeError: true});
            }}
            showError={this.state.showZipCodeError}
            errorText={'Zip Code Should Not Be Empty'}
            formType="number-pad"
          />

          <FormLabel label="City" />

          <Form
            callback={text => {
              this.setState ({cityText: text});
              if (text.length === 0) {
                this.setState ({showCityError: true});
              } else this.setState ({showCityError: false});
            }}
            onFocus={isRequired => {
              if (this.state.cityText.length === 0)
                this.setState ({showCityError: true});
            }}
            showError={this.state.showCityError}
            errorText={'City Should Not Be Empty'}
          />

          <FormLabel label="Email" />

          <Form
            callback={text => {
              this.setState ({emailText: text});
              if (text.length === 0) {
                this.setState ({showEmailError: true});
              } else this.setState ({showEmailError: false});

              if(text.length>0){
                const valid = validateEmail(text);
                console.warn(valid);
                if(!valid)
                this.setState ({showEmailError: true,emailErrorText:'Please Enter A Valid Email'});
                else
                this.setState({showEmailError:false});
              }
            }}
            onFocus={isRequired => {
              if (this.state.emailText.length === 0)
                this.setState ({showEmailError: true});
            }}
            showError={this.state.showEmailError}
            errorText={this.state.emailErrorText}
            formType="email-address"
          />

          <FormLabel label="Phone" />

          <Form
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
          />

          <FormLabel label="Email (2nd Email)" isRequired={false} />

          <Form
            callback={text => {
              console.warn (text);
            }}
            formType="email-address"
            isRequired={false}
          />

          <FormLabel isRequired={false} label="Phone (2nd Phone)" />

          <Form
            isRequired={false}
            callback={text => {
              console.warn (text);
            }}
            formType="phone-pad"
          />

          <FormLabel label="Password" />

          <Form
            callback={async text => {
              await this.setState ({passwordText: text});
              if (text.length === 0) {
                this.setState ({
                  showPasswordError: true,
                  passwordErrorText: 'Password should not be empty',
                });
              } else this.setState ({showPasswordError: false});
              if (this.state.passwordText != this.state.confirmPasswordText) {
                this.setState ({
                  showConfirmPasswordError: true,
                  confirmPasswordErrorText: 'Passwords do not match',
                });
              } else this.setState ({showConfirmPasswordError: false});
            }}
            onFocus={isRequired => {
              if (this.state.passwordText.length === 0)
                this.setState ({
                  showPasswordError: true,
                  passwordErrorText: 'Password should not be empty',
                });
            }}
            showError={this.state.showPasswordError}
            errorText={this.state.passwordErrorText}
            hideText={true}
          />

          <FormLabel label="Confirm Password" />

          <Form
            callback={async text => {
              await this.setState ({confirmPasswordText: text});
              if (text.length === 0) {
                this.setState ({
                  showConfirmPasswordError: true,
                  confirmPasswordErrorText: 'Confirm Password should not be empty',
                });
              } else this.setState ({showConfirmPasswordError: false});
              if (this.state.confirmPasswordText != this.state.passwordText) {
                this.setState ({
                  showConfirmPasswordError: true,
                  confirmPasswordErrorText: 'Passwords do not match',
                });
              } else this.setState ({showConfirmPasswordError: false});
            }}
            onFocus={isRequired => {
              if (this.state.confirmPasswordText.length === 0)
                this.setState ({
                  showConfirmPasswordError: true,
                  confirmPasswordErrorText: 'Confirm Password should not be empty',
                });
            }}
            showError={this.state.showConfirmPasswordError}
            errorText={this.state.confirmPasswordErrorText}
            hideText={true}
          />



          
          <FormButton
            label="Submit"
            showIcon={true}
            callback={async () => {
              await this.checkForEmptyFields ();
              await this.areAllFieldsClear ();
              this.props.onPressSubmit();
            }}
          />
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
});
