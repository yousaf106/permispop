import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {margins, paddings} from '../../../globals/styles';
import Form from '../../../components/FormInput';

import FormLabel from '../../../components/FormLabel';
import {RFValue} from 'react-native-responsive-fontsize';
import FormButton from '../../../components/MediumButton';

import Toast from 'react-native-simple-toast';
import {validateEmail} from '../../../globals/functions';
import Store from '../../../stores';
export default class Identity extends Component {
  constructor (props) {
    super (props);
    this.state = {
      tradeNameText: '',
      showTradeNameError: false,
      companyNameText: '',
      showCompanyNameError: '',

      addressText: '',
      showAddressError: false,

      complementText: '',

      zipCodeText: '',
      showZipCodeError: false,

      cityText: '',
      showCityError: false,

      emailText: '',
      showEmailError: '',
      emailErrorText: 'Email is required',

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
    };
  }

  componentDidMount = () => {
    let {orderStore} = Store;

    this.setState ({
      tradeNameText: orderStore.school.identity.tradeNameText,
      companyNameText: orderStore.school.identity.companyNameText,
      addressText: orderStore.school.identity.addressText,
      zipCodeText: orderStore.school.identity.zipCodeText,
      cityText: orderStore.school.identity.cityText,
      emailText: orderStore.school.identity.emailText,
      phoneText: orderStore.school.identity.phoneText,
      passwordText: orderStore.school.identity.passwordText,
      confirmPasswordText: orderStore.school.identity.confirmPasswordText,

      complementText: orderStore.school.identity.complementText,
      secondEmailText: orderStore.school.identity.secondEmailText,
      secondPhoneText: orderStore.school.identity.secondPhoneText,
    });
  };

  checkForEmptyFields = () => {
    if (this.state.tradeNameText.length === 0)
      this.setState ({showTradeNameError: true});
    else this.setState ({showTradeNameError: false});
    if (this.state.companyNameText.length === 0)
      this.setState ({showCompanyNameError: true});
    else this.setState ({showCompanyNameError: false});

    if (this.state.addressText.length === 0)
      this.setState ({showAddressError: true});
    else this.setState ({showAddressError: false});

    if (this.state.zipCodeText.length === 0)
      this.setState ({showZipCodeError: true});
    else this.setState ({showZipCodeError: false});

    if (this.state.cityText.length === 0) this.setState ({showCityError: true});
    else this.setState ({showCityError: false});

    if (this.state.emailText.length === 0)
      this.setState ({
        showEmailError: true,
        emailErrorText: 'Email Must Not Be Empty',
      });
    else this.setState ({showEmailError: false});

    if (this.state.emailText.length > 0) {
      const valid = validateEmail (this.state.emailText);
      console.warn (valid);
      if (!valid)
        this.setState ({
          showEmailError: true,
          emailErrorText: 'Please Enter A Valid Email',
        });
      else this.setState ({showEmailError: false});
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

    if (
      this.state.passwordText.length != 0 &&
      this.state.confirmPasswordText.length != 0
    ) {
      if (this.state.confirmPasswordText != this.state.passwordText)
        this.setState ({
          showConfirmPasswordError: true,
          confirmPasswordErrorText: 'Passwords do not match',
        });
      else this.setState ({showConfirmPasswordError: false});
    }
  };

  areAllFieldsClear = () => {
    let {orderStore} = Store;
    orderStore.school.identity.tradeNameText = this.state.tradeNameText;
    orderStore.school.identity.companyNameText = this.state.companyNameText;
    orderStore.school.identity.addressText = this.state.addressText;
    orderStore.school.identity.zipCodeText = this.state.zipCodeText;
    orderStore.school.identity.cityText = this.state.cityText;
    orderStore.school.identity.emailText = this.state.emailText;
    orderStore.school.identity.phoneText = this.state.phoneText;
    orderStore.school.identity.passwordText = this.state.passwordText;
    orderStore.school.identity.confirmPasswordText = this.state.confirmPasswordText;
    orderStore.school.identity.complementText = this.state.complementText;
    orderStore.school.identity.secondEmailText = this.state.secondEmailText;
    orderStore.school.identity.secondPhoneText = this.state.secondPhoneText;

    if (
      !this.state.showTradeNameError &&
      !this.state.showCompanyNameError &&
      !this.state.showAddressError &&
      !this.state.showZipCodeError &&
      !this.state.showCityError &&
      !this.state.showEmailError &&
      !this.state.showPhoneError &&
      !this.state.showPasswordError &&
      !this.state.showConfirmPasswordError
    ) {
      Toast.show ('You May Proceed (Debud Text)');
      return true;
    } else Toast.show ('Fill all the required fields (Debud Text)');

    return false;
  };

  render () {
    return (
      <View>

        <FormLabel label="" />

        <Form
          value={this.state.tradeNameText}
          callback={text => {
            this.setState ({tradeNameText: text});
            if (text.length === 0) {
              this.setState ({showTradeNameError: true});
            } else this.setState ({showTradeNameError: false});
          }}
          onFocus={isRequired => {
            if (this.state.tradeNameText.length === 0)
              this.setState ({showTradeNameError: true});
          }}
          showError={this.state.showTradeNameError}
          errorText={'Trade Name Should Not Be Empty'}
          placeholder={"Enter Tradename"}
        />

        <FormLabel label="" />

        <Form
          value={this.state.companyNameText}
          callback={text => {
            this.setState ({companyNameText: text});
            if (text.length === 0) {
              this.setState ({showCompanyNameError: true});
            } else this.setState ({showCompanyNameError: false});
          }}
          onFocus={isRequired => {
            if (this.state.companyNameText.length === 0)
              this.setState ({showCompanyNameError: true});
          }}
          showError={this.state.showCompanyNameError}
          errorText={'Company Name Should Not Be Empty'}
          placeholder={"Enter Company Name"}
        />

        <FormLabel label="" />

        <Form
          value={this.state.addressText}
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
          placeholder={"Enter Address"}
        />

        <FormLabel label="" isRequired={false} />

        <Form
          value={this.state.complementText}
          callback={text => {
            this.setState ({complementText: text});
          }}
          placeholder={"Enter Complement"}
        />

        <FormLabel label="" />

        <Form
          value={this.state.zipCodeText}
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
          placeholder={"Enter Zip Code"}
        />

        <FormLabel label="" />

        <Form
          value={this.state.cityText}
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
          placeholder={"Enter City"}
        />

        <FormLabel label="" />

        <Form
          value={this.state.emailText}
          callback={text => {
            this.setState ({emailText: text});
            if (text.length === 0) {
              this.setState ({showEmailError: true});
            } else this.setState ({showEmailError: false});

            if (text.length > 0) {
              const valid = validateEmail (text);
              console.warn (valid);
              if (!valid)
                this.setState ({
                  showEmailError: true,
                  emailErrorText: 'Please Enter A Valid Email',
                });
              else this.setState ({showEmailError: false});
            }
          }}
          onFocus={isRequired => {
            if (this.state.emailText.length === 0)
              this.setState ({showEmailError: true});
          }}
          showError={this.state.showEmailError}
          errorText={this.state.emailErrorText}
          formType="email-address"
          placeholder={"Enter Email"}
        />

        <FormLabel label="" />

        <Form
          value={this.state.phoneText}
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
          errorText={'Phone No Should Not Be Empty'}
          formType="phone-pad"
          placeholder={"Enter Phone"}
        />

        <FormLabel label="" isRequired={false} />

        <Form
          value={this.state.secondEmailText}
          callback={text => {
            this.setState ({secondEmailText: text});
          }}
          formType="email-address"
          isRequired={false}
          placeholder={"Enter Email (2nd Email)"}
        />

        <FormLabel isRequired={false} label="Phone (2nd Phone)" />

        <Form
          value={this.state.secondPhoneText}
          isRequired={false}
          callback={text => {
            this.setState ({secondPhoneText: text});
          }}
          formType="phone-pad"
          placeholder={"Enter"}
        />

        <FormLabel label="" />

        <Form
          value={this.state.passwordText}
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
          placeholder={"Enter Password"}
        />

        <FormLabel label="" />

        <Form
          value={this.state.confirmPasswordText}
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
          placeholder={"Confirm Password"}
        />

        <View style={styles.buttonRow}>
          <FormButton
            label="Next"
            showIconRight={true}
            rightIcon={require ('../../../../res/images/forward.png')}
            callback={async () => {
              await this.checkForEmptyFields ();
              const clear = await this.areAllFieldsClear ();

              if (clear) this.props.onPressSubmit ();
            }}
          />
        </View>
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
  buttonRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end',
  },
});
