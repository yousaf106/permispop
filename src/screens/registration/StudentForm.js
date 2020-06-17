import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, Text, TouchableOpacity} from 'react-native';
import {margins, paddings} from '../../globals/styles';
import Form from '../../components/FormInput';
import CalandarInput from '../../components/CalendarInput';
import Dropdown from '../../components/DropdownInput';
import UploadAvatar from '../../components/UploadAvatar';
import FormLabel from '../../components/FormLabel';
import UploadButton from '../../components/UploadButton';
import {RFValue} from 'react-native-responsive-fontsize';
import CheckBoxInput from '../../components/CheckBoxInput';
import FormButton from '../../components/FormButton';
import Toast from 'react-native-simple-toast';

export default class StudentForm extends Component {
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
          <TouchableOpacity onPress={() => {this.props.navigation.navigate('ContactUs')}}>
            <Text>Contact Us</Text>
          </TouchableOpacity>
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

          <FormLabel  />

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
            value = {this.state.fitstNameText}
            placeholder={'Enter First Name'}
          />

          <FormLabel  />

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
            value = {this.state.surNameText}
            placeholder={'Enter  Surname'}

          />

          <FormLabel label="Date Of Birth" />

          <CalandarInput
            date={this.state.date}
            callback={date => {
              this.setState ({date, date});
            }}
          />
          <View style={styles.verticalSpace} />

          <FormLabel  />

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
            value = {this.state.placeOfBirthText}
            placeholder={'Enter Place Of Birth'}

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

          <FormLabel  isRequired={false} />

          <Form
            callback={text => {
              this.setState ({complementText: text});
            }}
          value = {this.state.complementText}
            placeholder={'Enter Complement'}

          />

          <FormLabel  />

          <Form
            value = {this.state.zipCodeText}
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
            placeholder={'Enter Zip Code'}
          />

          <FormLabel  />

          <Form
            value = {this.state.cityText}
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
            placeholder={'Enter City Name'}
          />

          <FormLabel  />

          <Form
            value = {this.state.emailText}
            callback={text => {
              this.setState ({emailText: text});
              if (text.length === 0) {
                this.setState ({showEmailError: true});
              } else this.setState ({showEmailError: false});
            }}
            onFocus={isRequired => {
              if (this.state.emailText.length === 0)
                this.setState ({showEmailError: true});
            }}
            showError={this.state.showEmailError}
            errorText={'Email Should Not Be Empty'}
            formType="email-address"
            placeholder={'Enter Email'}
          />

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

          <FormLabel  isRequired={false} />

          <Form
            value = {this.state.secondEmailText}
            callback={text => {
              this.setState({secondEmailText:text})
            }}
            formType="email-address"
            isRequired={false}
            placeholder={'Enter 2nd Email'}
          />

          <FormLabel isRequired={false}  />

          <Form
          value = {this.state.secondPhoneText}
            isRequired={false}
            callback={text => {
              this.setState({secondPhoneText:text})
            }}
            formType="phone-pad"
            placeholder={'Enter 2nd Phone Number'}
          />

          <FormLabel  />

          <Form
            value = {this.state.passwordText}
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
            placeholder={'Enter Password'}

          />

          <FormLabel  />

          <Form
            value = {this.state.confirmPasswordText}
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
            placeholder={'Confirm Password'}

          />

          <FormLabel
            isRequired={false}
          />
          <Form
            callback={text => {
                this.setState({numberOfHoursText:text})
            }}
            isRequired={false}
            value = {this.state.numberOfHoursText}
            placeholder={'Enter Estimated Hours For Work'}

          />

          <FormLabel  isRequired={false} />
          <Form
            value = {this.state.nephText}
            callback={text => {
              this.setState ({nephText: text});
              if (text.length < 12) this.setState ({showNephError: true});
              else this.setState ({showNephError: false});
              if (text.length === 0) this.setState ({showNephError: false});
            }}
            formType="numeric"
            isRequired={false}
            inputLimit={12}
            placeholder={'Enter NEPH Number'}
            showError={this.state.showNephError}
            onFocus={isRequired => {
              // if (this.state.nephText.length < 11)
              //   this.setState ({showNephError: true});
              // if (this.state.nephText.length === 0)
              //   this.setState ({showNephError: false});
            }}
            errorText="neph length must be 12 digits"
          />

          <View style={styles.verticalSpace} />
          {this.state.nephText.length > 0
            ? <CheckBoxInput
                label="some sample text"
                callback={isChecked => {
                  this.setState ({isNephCkecked: !this.state.isNephCkecked});
                }}
                showError={!this.state.isNephCkecked}
                errorText="this box must be checked is nph number is given"
                isChecked={this.state.isNephCkecked}
              />
            : <View />}

          <FormLabel isRequired={false} label="Highway code obtained ?" />

          <CheckBoxInput
            label="Click Me If You Had"
            callback={isChecked => {
              this.setState ({highwatCheckedBox: !isChecked});
            }}
            isChecked={this.state.highwatCheckedBox}
          />

          <FormLabel label="Terms and conditions applied" />

          <CheckBoxInput
            label="I Agree"
            callback={isChecked => {
              this.setState ({
                termsCheckBox: !isChecked,
                showTermsError: isChecked,
              });
            }}
            showError={this.state.showTermsError}
            isChecked={this.state.termsCheckBox}
            errorText={'You must agree to our terms and conditions.'}
          />
          <FormButton
            label="Submit"
            showIcon={true}
            callback={async () => {
              await this.checkForEmptyFields ();
              await this.areAllFieldsClear ();
            }}
          />
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
    paddingBottom:50,

  },
  verticalSpace: {
    marginTop: margins.verticalSpace,
  },
  redText: {
    color: 'red',
    fontSize: RFValue (14),
  },
});
