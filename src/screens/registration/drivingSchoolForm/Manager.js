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
import FormButton from '../../../components/MediumButton';

import Toast from 'react-native-simple-toast';
import Store from '../../../stores';
export default class Manager extends Component {
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

      agreed: false,
      showAgreedError:false,
      profileUri: '',
      showProfileError: false,
    };
  }

  componentDidMount = () => {
    let {orderStore} = Store;

    this.setState ({
      fitstNameText: orderStore.school.manager.fitstNameText,
      surNameText: orderStore.school.manager.surNameText,
      profileUri: orderStore.school.manager.profileUri,
      placeOfBirthText: orderStore.school.manager.placeOfBirthText,
      addressText: orderStore.school.manager.addressText,
      zipCodeText: orderStore.school.manager.zipCodeText,
      cityText: orderStore.school.manager.cityText,
      date: orderStore.school.manager.date,
      selectedDropdownValue: orderStore.school.manager.selectedDropdownValue,
      complementText: orderStore.school.manager.complementText,
      agreed:orderStore.school.manager.agreed,
    });
  };

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

    if (this.state.addressText.length === 0)
      this.setState ({showAddressError: true});
    else this.setState ({showAddressError: false});

    if (this.state.zipCodeText.length === 0)
      this.setState ({showZipCodeError: true});
    else this.setState ({showZipCodeError: false});

    if (this.state.cityText.length === 0) this.setState ({showCityError: true});
    else this.setState ({showCityError: false});

    if (!this.state.agreed) this.setState ({showAgreedError: true});
    else this.setState ({showAgreedError: false});



  };

  areAllFieldsClear = () => {
    let {orderStore} = Store;
    orderStore.school.manager.fitstNameText = this.state.fitstNameText;
    orderStore.school.manager.surNameText = this.state.surNameText;
    orderStore.school.manager.profileUri = this.state.profileUri;
    orderStore.school.manager.placeOfBirthText = this.state.placeOfBirthText;
    orderStore.school.manager.addressText = this.state.addressText;
    orderStore.school.manager.zipCodeText = this.state.zipCodeText;
    orderStore.school.manager.cityText = this.state.cityText;
    orderStore.school.manager.date = this.state.date;
    orderStore.school.manager.selectedDropdownValue = this.state.selectedDropdownValue;
    orderStore.school.manager.complementText = this.state.complementText;
    orderStore.school.manager.agreed = this.state.agreed;


    if (
      !this.state.showFirstNameError &&
      !this.state.showSurNameError &&
      !this.state.showProfileError &&
      !this.state.PlaceOfBirthError &&
      !this.state.showBackError &&
      !this.state.showAddressError &&
      !this.state.showZipCodeError &&
      !this.state.showCityError &&
      this.state.agreed
    ) {
      Toast.show ('You May Proceed (Debud Text)');
      return true;
    } else Toast.show ('Fill all the required fields (Debud Text)');

    return false;
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

        <FormLabel label="" />

        <Form
          value={this.state.fitstNameText}
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
          placeholder={"Enter First Name"}
        />

        <FormLabel label="" />

        <Form
          value={this.state.surNameText}
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
          placeholder={"Enter Surname"}
        />

        <FormLabel label="Date Of Birth" />

        <CalandarInput
          date={this.state.date}
          callback={date => {
            this.setState ({date, date});
          }}
        />
        <View style={styles.verticalSpace} />

        <FormLabel label="" />

        <Form
          value={this.state.placeOfBirthText}
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
          placeholder={"Enter Place Of Birth"}
        />

        <FormLabel label="Gender" />

        <Dropdown
          values={['Male', 'Female']}
          selectedValue={this.state.selectedDropdownValue}
          callback={(itemValue, itemIndex) => {
            this.setState ({selectedDropdownValue: itemValue});
          }}
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

        <FormLabel label="Terms & Conditions Applied" />
        <CheckBoxInput
          label="I Agree"
          showError = {this.state.showAgreedError}
          errorText = {"You Must Agree to terms and conditions"}
          callback={isChecked => {
            this.setState ({agreed: !this.state.agreed});
          }}
          isChecked={this.state.agreed}
        />

        <View style={styles.buttonRow}>
          <FormButton
            label="Back"
            showIconLeft={true}
            leftIcon={require ('../../../../res/images/back.png')}
            callback={() => {
              this.props.onClickPrevious ();
            }}
          />
          <FormButton
            label="Next"
            showIconRight={true}
            rightIcon={require ('../../../../res/images/forward.png')}
            callback={async () => {
              await this.checkForEmptyFields ();
              const clear = await this.areAllFieldsClear ();
              if (clear) this.props.onClickNext ();
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
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
