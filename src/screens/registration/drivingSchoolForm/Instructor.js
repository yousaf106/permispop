import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Modal,
  TouchableHighlight,
  Image,
  TouchableOpacity,
} from 'react-native';
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
import FormHeading from '../../../components/FormHeading';
import Toast from 'react-native-simple-toast';
import Store from '../../../stores';
import CalendarInput from '../../../components/CalendarInput';
import MediumButton from '../../../components/MediumButton';
import Fab from '../../../components/FloatingActionButton';
import RadioInput from '../../../components/RadioInput';

import Card from '../../../components/FormEditCard';
import SubHeading from '../../../components/SubHeading';
import {
  isDatePast,
  isDateFuture,
  toDate,
  getCurrentDate,
  validateEmail,
} from '../../../globals/functions';
class DataModel {
  dataModel = {
    dateOfBirthText: '01-01-2002',
    firstNameText: '',
    showFirstNameError: false,
    surNameText: '',
    showSurNameError: false,

    placeOfBirthText: '',
    showPlaceOfBirthError: false,
    genderSelectedValue: '',
    genderSelectedIndex: 0,
    energySelectedValue: '',
    energySelectedIndex: 0,
    addressText: '',
    showAddressError: false,

    zipCodeText: '',
    showZipCodeError: false,

    cityText: '',
    showCityError: false,

    emailText: '',
    showEmailError: '',
    emailErrorText: 'Email is required',

    showSecondEmailError: false,
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

    numberText: '',
    showNumberError: false,
    dateOfObtainig: '',
    showDateOfObtainingError: false,

    complementText: '',
    imageUri: '',
    showImageUriError: false,
    drivingLicenseUri: '',
    showDrivingLicenseUriError: false,
    insurerText: '',
    showInsurerError: false,
    issuingAuthorityText: '',
    showIssuingAuthorityError: false,
    authorityUri: '',
    showAuthorityUriError: false,
    policeNumberText: '',
    showPoliceNumberError: false,

    slretNumberText: '',
    showSlretNumberError: false,

    startDate: getCurrentDate (),
    showStartDateError: false,
    endDate: getCurrentDate (),
    showEndDateError: false,

    expirationDate: getCurrentDate (),
    showExpirationDateError: false,

    dateOfAuthorization: getCurrentDate (),
    showDateOfAuthorizationError: false,
    kbisUri:'',
    showKbisUriError:false,
    rcExpirationUri: '',
    showRcExpirantionUriError: false,
    technicalControlDate: getCurrentDate (),
    showTechnicalControlDateError: false,
    technicalControlEndDate: getCurrentDate (),
    showTechnicalControlEndDateError: false,
    rcUri: '',
    showRcUriError: false,

};
}

export default class Instructor extends Component {
  constructor (props) {
    super (props);

    this.state = {
      modalIndex: 0,
      selectedRadioIndex:0,
      addClicked: false,
      genderValues: ['Male', 'Female'],
      energyValues: ['Diesel', 'Petrol', 'Hybrid', 'Electric', 'GPL', 'Other'],
      showModal: false,
      instructor: null,
      cards: [],
      modalData: [],
    };
  }

  componentDidMount = async () => {
    const {orderStore} = Store;
    if (orderStore.school.instructor.instructor != null) {
      await this.setState ({
        instructor: orderStore.school.instructor.instructor,
      });
    }
  };

  render () {
    return (
      <View>
        <View style={styles.addFormButtonRow}>

          <FormHeading heading="Instructor" />

          {this.state.cards.length < 5
            ? <Fab
                callback={() => {
                  if (this.state.addClicked) {
                    this.setState ({
                      instructor: null,
                      addClicked: !this.state.addClicked,
                    });
                    return;
                  }

                  let vechileClone = new DataModel ();
                  if (this.state.addClicked) {
                    vechileClone = {};
                  } else {
                    const model = new DataModel ();
                    vechileClone = model.dataModel;
                  }
                  this.setState ({
                    instructor: vechileClone,
                    addClicked: !this.state.addClicked,
                  });
                }}
                source={
                  !this.state.addClicked
                    ? require ('../../../../res/images/plus.png')
                    : require ('../../../../res/images/minus.png')
                }
              />
            : <View />}
        </View>

        <SubHeading label={'Maximum 5 instructor can be added'} />

        {this.state.cards.map ((item, index) => {
          return (
            <Card
              onEditClick={() => {
                const cardClone = [...this.state.cards];

                this.setState ({
                  modalData: cardClone[index],
                  showModal: true,
                  modalIndex: index,
                });
              }}
              onDeleteClick={() => {
                const cardClone = [...this.state.cards];
                cardClone.splice (index, 1);

                this.setState ({cards: cardClone});
              }}
              title={item.firstNameText + ' ' + item.surNameText}
            />
          );
        })}

        {this.state.instructor != null
          ? <View>

              <FormHeading heading="Indentity" />

              <FormLabel label="" />
              <Form
                value={this.state.instructor.firstNameText}
                callback={text => {
                  const clone = this.state.instructor;
                  clone.firstNameText = text;
                  this.setState ({instructor: clone});
                  if (text.length === 0) {
                    clone.showFirstNameError = true;
                    this.setState ({instructor: clone});
                  } else {
                    clone.showFirstNameError = false;

                    this.setState ({instructor: clone});
                  }
                }}
                onFocus={isRequired => {
                  if (this.state.instructor.firstNameText.length === 0) {
                    const clone = this.state.instructor;
                    clone.showFirstNameError = true;
                    this.setState ({instructor: clone});
                  } else {
                    const clone = this.state.instructor;
                    clone.showFirstNameError = false;

                    this.setState ({instructor: clone});
                  }
                }}
                showError={this.state.instructor.showFirstNameError}
                errorText={'First Name Should Not Be Empty'}
                placeholder={"Enter First Name"}
              />

              <FormLabel label="" />
              <Form
                value={this.state.instructor.surNameText}
                callback={text => {
                  const clone = this.state.instructor;
                  clone.surNameText = text;
                  this.setState ({instructor: clone});
                  if (text.length === 0) {
                    clone.showSurNameError = true;
                    this.setState ({instructor: clone});
                  } else {
                    clone.showSurNameError = false;

                    this.setState ({instructor: clone});
                  }
                }}
                onFocus={isRequired => {
                  if (this.state.instructor.surNameText.length === 0) {
                    const clone = this.state.instructor;
                    clone.showSurNameError = true;
                    this.setState ({instructor: clone});
                  } else {
                    const clone = this.state.instructor;
                    clone.showSurNameError = false;

                    this.setState ({instructor: clone});
                  }
                }}
                showError={this.state.instructor.showSurNameError}
                errorText={'SurName Should Not Be Empty'}
                placeholder={"Enter SurName"}
              />

              <FormLabel label="Upload Image" />
              <UploadButton
                showError={this.state.instructor.showImageUriError}
                errorText="You must upload image"
                onUriReceived={uri => {
                  const clone = this.state.instructor;
                  if (uri != null && uri != undefined && uri.length != 0) {
                    clone.imageUri = uri;
                    clone.showImageUriError = false;
                    this.setState ({instructor: clone});
                  } else {
                    clone.imageUri = '';
                    clone.showImageUriError = true;
                    this.setState ({instructor: clone});
                  }
                }}
              />

              <FormLabel label="Date of Birth" />
              <CalendarInput
                date={this.state.instructor.dateOfBirthText}
                callback={date => {
                  const clone = this.state.instructor;
                  clone.dateOfBirthText = date;
                  this.setState ({instructor: clone});
                }}
              />
              <View style={styles.verticalSpace} />

              <FormLabel label="" />
              <Form
                value={this.state.instructor.placeOfBirthText}
                callback={text => {
                  const clone = this.state.instructor;
                  clone.placeOfBirthText = text;
                  this.setState ({instructor: clone});
                  if (text.length === 0) {
                    clone.showPlaceOfBirthError = true;
                    this.setState ({instructor: clone});
                  } else {
                    clone.showPlaceOfBirthError = false;

                    this.setState ({instructor: clone});
                  }
                }}
                onFocus={isRequired => {
                  if (this.state.instructor.placeOfBirthText.length === 0) {
                    const clone = this.state.instructor;
                    clone.showPlaceOfBirthError = true;
                    this.setState ({instructor: clone});
                  } else {
                    const clone = this.state.instructor;
                    clone.showPlaceOfBirthError = false;

                    this.setState ({instructor: clone});
                  }
                }}
                showError={this.state.instructor.showPlaceOfBirthError}
                errorText={'Place Of Birth Should Not Be Empty'}
                placeholder={"Enter Place Of Birth"}
              />

              <FormLabel label="Gender" />

              <Dropdown
                values={this.state.genderValues}
                selectedValue={this.state.instructor.genderSelectedValue}
                callback={(itemValue, itemIndex) => {
                  const clone = this.state.instructor;
                  clone.genderSelectedValue = itemValue;
                  clone.genderSelectedIndex = itemIndex;
                  this.setState ({
                    instructor: clone,
                  });
                }}
              />

              <FormLabel label="" />
              <Form
                value={this.state.instructor.addressText}
                callback={text => {
                  const clone = this.state.instructor;
                  clone.addressText = text;
                  this.setState ({instructor: clone});
                  if (text.length === 0) {
                    clone.showAddressError = true;
                    this.setState ({instructor: clone});
                  } else {
                    clone.showAddressError = false;

                    this.setState ({instructor: clone});
                  }
                }}
                onFocus={isRequired => {
                  if (this.state.instructor.addressText.length === 0) {
                    const clone = this.state.instructor;
                    clone.showAddressError = true;
                    this.setState ({instructor: clone});
                  } else {
                    const clone = this.state.instructor;
                    clone.showAddressError = false;

                    this.setState ({instructor: clone});
                  }
                }}
                showError={this.state.instructor.showAddressError}
                errorText={'Address Should Not Be Empty'}
                placeholder={"Enter Address"}
              />

              <FormLabel label="" isRequired={false} />
              <Form
                value={this.state.instructor.complementText}
                callback={text => {
                  const clone = this.state.instructor;
                  clone.complementText = text;
                  this.setState ({instructor: clone});
                }}
                placeholder={"Enter Complement"}
              />

              <FormLabel label="" />
              <Form
                value={this.state.instructor.zipCodeText}
                callback={text => {
                  const clone = this.state.instructor;
                  clone.zipCodeText = text;
                  this.setState ({instructor: clone});
                  if (text.length === 0) {
                    clone.showZipCodeError = true;
                    this.setState ({instructor: clone});
                  } else {
                    clone.showZipCodeError = false;

                    this.setState ({instructor: clone});
                  }
                }}
                onFocus={isRequired => {
                  if (this.state.instructor.zipCodeText.length === 0) {
                    const clone = this.state.instructor;
                    clone.showZipCodeError = true;
                    this.setState ({instructor: clone});
                  } else {
                    const clone = this.state.instructor;
                    clone.showZipCodeError = false;

                    this.setState ({instructor: clone});
                  }
                }}
                showError={this.state.instructor.showZipCodeError}
                errorText={'Zip Code Should Not Be Empty'}
                formType="numeric"
                placeholder={"Enter Zip Code"}
              />

              <FormLabel label="" />
              <Form
                value={this.state.instructor.cityText}
                callback={text => {
                  const clone = this.state.instructor;
                  clone.cityText = text;
                  this.setState ({instructor: clone});
                  if (text.length === 0) {
                    clone.showCityError = true;
                    this.setState ({instructor: clone});
                  } else {
                    clone.showCityError = false;

                    this.setState ({instructor: clone});
                  }
                }}
                onFocus={isRequired => {
                  if (this.state.instructor.cityText.length === 0) {
                    const clone = this.state.instructor;
                    clone.showCityError = true;
                    this.setState ({instructor: clone});
                  } else {
                    const clone = this.state.instructor;
                    clone.showCityError = false;

                    this.setState ({instructor: clone});
                  }
                }}
                showError={this.state.instructor.showCityError}
                errorText={'City Should Not Be Empty'}
                placeholder={"Enter City"}
              />

              <FormLabel label="" />

              <Form
                value={this.state.instructor.emailText}
                callback={text => {
                  const clone = this.state.instructor;
                  clone.emailText = text;
                  this.setState ({instructor: clone});
                  if (text.length === 0) {
                    clone.emailErrorText = 'Email Should Not Be Empty';
                    clone.showEmailError = true;
                    this.setState ({instructor: clone});
                  } else {
                    clone.showEmailError = false;
                    this.setState ({instructor: clone});
                  }

                  if (text.length > 0) {
                    const valid = validateEmail (text);
                    if (!valid) {
                      clone.emailErrorText = 'Please Enter A Valid Email';
                      clone.showEmailError = true;
                      this.setState ({instructor: clone});
                    } else {
                      clone.showEmailError = false;
                      this.setState ({instructor: clone});
                    }
                  }
                }}
                onFocus={isRequired => {
                  const clone = this.state.instructor;

                  if (this.state.instructor.emailText.length === 0) {
                    clone.emailErrorText = 'Email Should Not Be Empty';
                    clone.showEmailError = true;
                    this.setState ({instructor: clone});
                  } else {
                    clone.showEmailError = false;
                    this.setState ({instructor: clone});
                  }
                }}
                showError={this.state.instructor.showEmailError}
                errorText={this.state.instructor.emailErrorText}
                formType="email-address"
                placeholder={"Enter Email"}
              />

              <FormLabel label="" />

              <Form
                value={this.state.instructor.phoneText}
                callback={text => {
                  const clone = this.state.instructor;
                  clone.phoneText = text;
                  this.setState ({instructor: clone});
                  if (text.length === 0) {
                    clone.showPhoneError = true;
                    this.setState ({instructor: clone});
                  } else {
                    clone.showPhoneError = false;

                    this.setState ({instructor: clone});
                  }
                }}
                onFocus={isRequired => {
                  if (this.state.instructor.phoneText.length === 0) {
                    const clone = this.state.instructor;
                    clone.showPhoneError = true;
                    this.setState ({instructor: clone});
                  } else {
                    const clone = this.state.instructor;
                    clone.showPhoneError = false;

                    this.setState ({instructor: clone});
                  }
                }}
                showError={this.state.instructor.showPhoneError}
                errorText={'Phone Number Should Not Be Empty'}
                formType="phone-pad"
                placeholder={"Enter Phone"}
              />

              <FormLabel label="" isRequired={false} />

              <Form
                value={this.state.instructor.secondEmailText}
                callback={text => {
                  const clone = this.state.instructor;
                  clone.secondEmailText = text;
                  this.setState ({instructor: clone});

                  if (text.length === 0) {
                    clone.showSecondEmailError = false;
                    this.setState ({instructor: clone});
                  }
                  if (text.length > 0) {
                    const valid = validateEmail (text);
                    if (!valid) {
                      clone.showSecondEmailError = true;
                      this.setState ({instructor: clone});
                    } else {
                      clone.showSecondEmailError = false;
                      this.setState ({instructor: clone});
                    }
                  }
                }}
                showError={this.state.instructor.showSecondEmailError}
                errorText={'Enter a valid email'}
                formType="email-address"
                isRequired={false}
                placeholder={"Enter Email (2nd Email)"}
              />

              <FormLabel isRequired={false} label="" />

              <Form
                value={this.state.instructor.secondPhoneText}
                isRequired={false}
                callback={text => {
                  const clone = this.state.instructor;
                  clone.secondPhoneText = text;
                  this.setState ({clone: text});
                }}
                formType="phone-pad"
                placeholder={"Enter Phone (2nd Phone)"}
              />

              <FormLabel label="" />

              <Form
                value={this.state.instructor.passwordText}
                callback={async text => {
                  const clone = this.state.instructor;
                  clone.passwordText = text;
                  await this.setState ({instructor: clone});
                  if (text.length === 0) {
                    clone.showPasswordError = true;
                    clone.passwordErrorText = 'Password should not be empty';
                    this.setState ({instructor: clone});
                  } else {
                    clone.showPasswordError = false;
                    this.setState ({instructor: clone});
                  }
                  if (
                    this.state.instructor.passwordText !=
                    this.state.instructor.confirmPasswordText
                  ) {
                    clone.showConfirmPasswordError = true;
                    clone.confirmPasswordErrorText = 'Passwords do not match';
                    this.setState ({instructor: clone});
                  } else {
                    clone.showPasswordError = false;
                    this.setState ({instructor: clone});
                  }
                }}
                onFocus={isRequired => {
                  if (this.state.instructor.passwordText.length === 0) {
                    const clone = this.state.instructor;
                    clone.showPasswordError = true;
                    clone.passwordErrorText = 'Password should not be empty';
                    this.setState ({instructor: clone});
                  }
                }}
                showError={this.state.instructor.showPasswordError}
                errorText={this.state.instructor.passwordErrorText}
                hideText={true}
                placeholder={"Enter Password"}
              />

              <FormLabel label="" />

              <Form
                value={this.state.instructor.confirmPasswordText}
                callback={async text => {
                  const clone = this.state.instructor;
                  clone.confirmPasswordText = text;
                  await this.setState ({instructor: clone});
                  if (text.length === 0) {
                    clone.showConfirmPasswordError = true;
                    clone.confirmPasswordErrorText =
                      'Confirm Password should not be empty';
                    this.setState ({
                      instructor: clone,
                    });
                  } else {
                    clone.showConfirmPasswordError = false;
                    this.setState ({instructor: clone});
                  }
                  if (
                    this.state.instructor.confirmPasswordText !=
                    this.state.instructor.passwordText
                  ) {
                    clone.showConfirmPasswordError = true;
                    clone.confirmPasswordErrorText = 'Passwords do not match';
                    this.setState ({
                      instructor: clone,
                    });
                  } else {
                    clone.showConfirmPasswordError = false;
                    this.setState ({instructor: clone});
                  }
                }}
                onFocus={isRequired => {
                  const clone = this.state.instructor;
                  if (this.state.instructor.confirmPasswordText.length === 0) {
                    clone.showConfirmPasswordError = true;
                    clone.confirmPasswordErrorText =
                      'Confirm Password should not be empty';
                  }
                  this.setState ({
                    instructor: clone,
                  });
                }}
                showError={this.state.instructor.showConfirmPasswordError}
                errorText={this.state.instructor.confirmPasswordErrorText}
                hideText={true}
                placeholder={"Confirm Password"}
              />

              <FormHeading heading="Driver License" />

              <FormLabel label="" />
              <Form
                value={this.state.instructor.numberText}
                callback={text => {
                  const clone = this.state.instructor;
                  clone.numberText = text;
                  this.setState ({instructor: clone});
                  if (text.length === 0) {
                    clone.showNumberError = true;
                    this.setState ({instructor: clone});
                  } else {
                    clone.showNumberError = false;

                    this.setState ({instructor: clone});
                  }
                }}
                formType="numeric"
                onFocus={isRequired => {
                  if (this.state.instructor.numberText.length === 0) {
                    const clone = this.state.instructor;
                    clone.showNumberError = true;
                    this.setState ({instructor: clone});
                  } else {
                    const clone = this.state.instructor;
                    clone.showNumberError = false;

                    this.setState ({instructor: clone});
                  }
                }}
                showError={this.state.instructor.showNumberError}
                errorText={'Number Should Not Be Empty'}
                placeholder={"Enter Number"}
              />

              <FormLabel label="Date Of Obtaining" />
              <CalendarInput
                date={this.state.instructor.dateOfObtainig}
                callback={date => {
                  if (isDateFuture (date)) {
                    const clone = this.state.instructor;
                    clone.showDateOfObtainingError = true;
                    this.setState ({instructor: clone});
                  } else {
                    const clone = this.state.instructor;
                    clone.showDateOfObtainingError = false;
                    this.setState ({instructor: clone});
                  }
                  const clone = this.state.instructor;
                  clone.dateOfObtainig = date;
                  this.setState ({instructor: clone});
                }}
                showError={this.state.instructor.showDateOfObtainingError}
                errorText="Date Cannot Be From Future"
              />

              <View style={styles.verticalSpace} />

              <FormLabel label="End Date" />
              <CalendarInput
                date={this.state.instructor.endDate}
                callback={date => {
                  if (isDatePast (date)) {
                    const clone = this.state.instructor;
                    clone.showEndDateError = true;
                    this.setState ({instructor: clone});
                  } else {
                    const clone = this.state.instructor;
                    clone.showEndDateError = false;
                    this.setState ({instructor: clone});
                  }
                  const clone = this.state.instructor;
                  clone.endDate = date;
                  this.setState ({instructor: clone});
                }}
                showError={this.state.instructor.showEndDateError}
                errorText="Date Cannot Be From Past"
              />

              <View style={styles.verticalSpace} />
              <FormLabel label="Scan and upload your driving license" />
              <UploadButton
                showError={this.state.instructor.showDrivingLicenseUriError}
                errorText="You must upload image"
                onUriReceived={uri => {
                  const clone = this.state.instructor;
                  if (uri != null && uri != undefined && uri.length != 0) {
                    clone.drivingLicenseUri = uri;
                    clone.showDrivingLicenseUriError = false;
                    this.setState ({instructor: clone});
                  } else {
                    clone.drivingLicenseUri = '';
                    clone.showDrivingLicenseUriError = true;
                    this.setState ({instructor: clone});
                  }
                }}
              />

              <FormHeading heading="Authorization to exercise" />

              <FormLabel label="Date of the authorization to exercise" />
              <CalendarInput
                date={this.state.instructor.dateOfAuthorization}
                callback={date => {
                  if (isDateFuture (date)) {
                    const clone = this.state.instructor;
                    clone.showDateOfAuthorizationError = true;
                    this.setState ({instructor: clone});
                  } else {
                    const clone = this.state.instructor;
                    clone.showDateOfAuthorizationError = false;
                    this.setState ({instructor: clone});
                  }
                  const clone = this.state.instructor;
                  clone.dateOfAuthorization = date;
                  this.setState ({instructor: clone});
                }}
                showError={this.state.instructor.showDateOfAuthorizationError}
                errorText="Date Cannot Be From Future"
              />

              <View style={styles.verticalSpace} />

              <FormLabel label="" />
              <Form
                value={this.state.instructor.issuingAuthorityText}
                callback={text => {
                  const clone = this.state.instructor;
                  clone.issuingAuthorityText = text;
                  this.setState ({instructor: clone});
                  if (text.length === 0) {
                    clone.showIssuingAuthorityError = true;
                    this.setState ({instructor: clone});
                  } else {
                    clone.showIssuingAuthorityError = false;

                    this.setState ({instructor: clone});
                  }
                }}
                onFocus={isRequired => {
                  if (this.state.instructor.issuingAuthorityText.length === 0) {
                    const clone = this.state.instructor;
                    clone.showIssuingAuthorityError = true;
                    this.setState ({instructor: clone});
                  } else {
                    const clone = this.state.instructor;
                    clone.showIssuingAuthorityError = false;

                    this.setState ({instructor: clone});
                  }
                }}
                showError={this.state.instructor.showIssuingAuthorityError}
                errorText={'Issung Authority Should Not Be Empty'}
                placeholder={"Enter Issung Authority"}
              />

              <FormLabel label="Scan and upload your authority" />
              <UploadButton
                showError={this.state.instructor.showAuthorityUriError}
                errorText="You must upload image"
                onUriReceived={uri => {
                  const clone = this.state.instructor;
                  if (uri != null && uri != undefined && uri.length != 0) {
                    clone.authorityUri = uri;
                    clone.showAuthorityUriError = false;
                    this.setState ({instructor: clone});
                  } else {
                    clone.authorityUri = '';
                    clone.showAuthorityUriError = true;
                    this.setState ({instructor: clone});
                  }
                }}
              />

              <FormLabel label="Expiration Date" />
              <CalendarInput
                date={this.state.instructor.expirationDate}
                callback={date => {
                  if (isDatePast (date)) {
                    const clone = this.state.instructor;
                    clone.showExpirationDateError = true;
                    this.setState ({instructor: clone});
                  } else {
                    const clone = this.state.instructor;
                    clone.showExpirationDateError = false;
                    this.setState ({instructor: clone});
                  }
                  const clone = this.state.instructor;
                  clone.expirationDate = date;
                  this.setState ({instructor: clone});
                }}
                showError={this.state.instructor.showExpirationDateError}
                errorText="Date Cannot Be From Past"
              />

              <View style={styles.verticalSpace} />

              <FormHeading heading="Type of contract with the driving school" />

              <RadioInput
                values={[
                  {label: 'Employee', value: 0},
                  {label: 'External provider?', value: 1},
                ]}
                formHorizontal={true}
                callback={value => {
                    this.setState({selectedRadioIndex:value});
                }}
              />

{this.state.selectedRadioIndex === 1 ?<View>

                <FormHeading heading = "Business"/>



              <FormLabel label="" />
              <Form
                value={this.state.instructor.slretNumberText}
                callback={text => {
                  const clone = this.state.instructor;
                  clone.slretNumberText = text;
                  this.setState ({instructor: clone});
                  if (text.length === 0) {
                    clone.showSlretNumberError = true;
                    this.setState ({instructor: clone});
                  } else {
                    clone.showSlretNumberError = false;

                    this.setState ({instructor: clone});
                  }
                }}
                formType="numeric"
                onFocus={isRequired => {
                  if (this.state.instructor.slretNumberText.length === 0) {
                    const clone = this.state.instructor;
                    clone.showSlretNumberError = true;
                    this.setState ({instructor: clone});
                  } else {
                    const clone = this.state.instructor;
                    clone.showSlretNumberError = false;

                    this.setState ({instructor: clone});
                  }
                }}
                showError={this.state.instructor.showSlretNumberError}
                errorText={'slretNumber Number Should Not Be Empty'}
                placeholder={"Enter Slret Number"}
              />



<FormLabel label="Scan and upload your kbis" />
            <UploadButton
              showError={this.state.instructor.showKbisUriError}
              errorText="You must upload image"
              onUriReceived={uri => {
                const clone = this.state.instructor;
                if (uri != null && uri != undefined && uri.length != 0) {
                  clone.kbisUri = uri;
                  clone.showKbisUriError = false;
                  this.setState ({instructor: clone});
                } else {
                  clone.kbisUri = '';
                  clone.showKbisUriError = true;
                  this.setState ({instructor: clone});
                }
              }}
            />


              <FormHeading heading="Insurance Company" />

              <FormLabel label="" />
              <Form
                value={this.state.instructor.insurerText}
                callback={text => {
                  const clone = this.state.instructor;
                  clone.insurerText = text;
                  this.setState ({instructor: clone});
                  if (text.length === 0) {
                    clone.showInsurerError = true;
                    this.setState ({instructor: clone});
                  } else {
                    clone.showInsurerError = false;

                    this.setState ({instructor: clone});
                  }
                }}
                onFocus={isRequired => {
                  if (this.state.instructor.insurerText.length === 0) {
                    const clone = this.state.instructor;
                    clone.showInsurerError = true;
                    this.setState ({instructor: clone});
                  } else {
                    const clone = this.state.instructor;
                    clone.showInsurerError = false;

                    this.setState ({instructor: clone});
                  }
                }}
                showError={this.state.instructor.showInsurerError}
                errorText={'Insurer Should Not Be Empty'}
                placeholder={"Enter Insurer"}
              />

              <FormLabel label="" />
              <Form
                value={this.state.instructor.policeNumberText}
                callback={text => {
                  const clone = this.state.instructor;
                  clone.policeNumberText = text;
                  this.setState ({instructor: clone});
                  if (text.length === 0) {
                    clone.showPoliceNumberError = true;
                    this.setState ({instructor: clone});
                  } else {
                    clone.showPoliceNumberError = false;

                    this.setState ({instructor: clone});
                  }
                }}
                formType="numeric"
                onFocus={isRequired => {
                  if (this.state.instructor.policeNumberText.length === 0) {
                    const clone = this.state.instructor;
                    clone.showPoliceNumberError = true;
                    this.setState ({instructor: clone});
                  } else {
                    const clone = this.state.instructor;
                    clone.showPoliceNumberError = false;

                    this.setState ({instructor: clone});
                  }
                }}
                showError={this.state.instructor.showPoliceNumberError}
                errorText={'Police Number Should Not Be Empty'}
                placeholder={"Enter Police Number"}
              />

              <FormLabel label="Expiration date of your Insurance RC Pro" />
              <UploadButton
                showError={this.state.instructor.showRcExpirantionUriError}
                errorText="You must upload image"
                onUriReceived={uri => {
                  const clone = this.state.instructor;
                  if (uri != null && uri != undefined && uri.length != 0) {
                    clone.rcExpirationUri = uri;
                    clone.showRcExpirantionUriError = false;
                    this.setState ({instructor: clone});
                  } else {
                    clone.rcExpirationUri = '';
                    clone.showRcExpirantionUriError = true;
                    this.setState ({instructor: clone});
                  }
                }}
              />


              <FormLabel label="Scan and upload your RC Pro" />
              <UploadButton
                showError={this.state.instructor.showRcUriError}
                errorText="You must upload image"
                onUriReceived={uri => {
                  const clone = this.state.instructor;
                  if (uri != null && uri != undefined && uri.length != 0) {
                    clone.rcUri = uri;
                    clone.showRcUriError = false;
                    this.setState ({instructor: clone});
                  } else {
                    clone.rcUri = '';
                    clone.showRcUriError = true;
                    this.setState ({instructor: clone});
                  }
                }}
              />
              </View>
       :<View/>}
        <View style={styles.addButtonRow}>
                <MediumButton
                  label="Add"
                  callback={async () => {
                    await this.checkForEmptyFields ();
                    const clear = await this.areAllFieldsClear ();
                    if (clear) {
                      const instructorClone = this.state.instructor;
                      const cardClone = this.state.cards;

                      if (instructorClone != null) {
                        cardClone.push (instructorClone);

                        await this.setState ({
                          cards: cardClone,
                          instructor: null,
                          addClicked: !this.state.addClicked,
                        });
                      }
                    }
                  }}
                />
              </View>
            </View>
          : null}

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.showModal}
          onRequestClose={() => {
            Alert.alert ('Modal has been closed.');
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              {this.state.modalData.length != 0
                ? this.renderModalView ()
                : null}
            </View>
          </View>
        </Modal>

        <View style={styles.buttonRow}>
          <MediumButton
            label="Back"
            showIconLeft={true}
            leftIcon={require ('../../../../res/images/back.png')}
            callback={() => {
              this.props.onClickPrevious ();
            }}
          />
          <MediumButton
            label="Next"
            showIconRight={true}
            rightIcon={require ('../../../../res/images/forward.png')}
            callback={async () => {
              if (this.state.cards != null && this.state.cards.length > 0)
                this.props.onClickNext ();
              else Toast.show ('You Must Register A Vehicle');
            }}
          />

        </View>

      </View>
    );
  }

  checkForModalEmptyFields = () => {
    if (this.state.modalData.firstNameText.length === 0) {
      const copy = this.state.modalData;
      copy.showFirstNameError = true;
      this.setState ({modalData: copy});
    } else {
      const copy = this.state.modalData;
      copy.showFirstNameError = false;
      this.setState ({modalData: copy});
    }

    if (this.state.modalData.surNameText.length === 0) {
      const copy = this.state.modalData;
      copy.showSurNameError = true;
      this.setState ({modalData: copy});
    } else {
      const copy = this.state.modalData;
      copy.showSurNameError = false;
      this.setState ({modalData: copy});
    }

    if (this.state.modalData.imageUri.length === 0) {
      const copy = this.state.modalData;
      copy.showImageUriError = true;
      this.setState ({modalData: copy});
    } else {
      const copy = this.state.modalData;
      copy.showImageUriError = false;
      this.setState ({modalData: copy});
    }

    if (this.state.modalData.placeOfBirthText.length === 0) {
      const copy = this.state.modalData;
      copy.showPlaceOfBirthError = true;
      this.setState ({modalData: copy});
    } else {
      const copy = this.state.modalData;
      copy.showPlaceOfBirthError = false;
      this.setState ({modalData: copy});
    }

    if (this.state.modalData.drivingLicenseUri.length === 0) {
      const copy = this.state.modalData;
      copy.showDrivingLicenseUriError = true;
      this.setState ({modalData: copy});
    } else {
      const copy = this.state.modalData;
      copy.showDrivingLicenseUriError = false;
      this.setState ({modalData: copy});
    }

    if (this.state.modalData.addressText.length === 0) {
      const copy = this.state.modalData;
      copy.showAddressError = true;
      this.setState ({modalData: copy});
    } else {
      const copy = this.state.modalData;
      copy.showAddressError = false;
      this.setState ({modalData: copy});
    }

    if (this.state.modalData.zipCodeText.length === 0) {
      const copy = this.state.modalData;
      copy.showZipCodeError = true;
      this.setState ({modalData: copy});
    } else {
      const copy = this.state.modalData;
      copy.showZipCodeError = false;
      this.setState ({modalData: copy});
    }

    if (this.state.modalData.cityText.length === 0) {
      const copy = this.state.modalData;
      copy.showCityError = true;
      this.setState ({modalData: copy});
    } else {
      const copy = this.state.modalData;
      copy.showCityError = false;
      this.setState ({modalData: copy});
    }

    if (this.state.modalData.emailText.length > 0) {
      const valid = validateEmail (this.state.modalData.emailText);
      if (!valid) {
        const copy = this.state.modalData;
        copy.showEmailError = true;
        copy.emailErrorText = 'Please Enter A Valid Email';
        this.setState ({
          modalData: copy,
        });
      } else {
        const copy = this.state.modalData;
        copy.showEmailError = false;
        this.setState ({modalData: copy});
      }
    }

    if (this.state.modalData.passwordText.length === 0) {
      const clone = this.state.modalData;
      clone.showPasswordError = true;
      clone.passwordErrorText = 'Password field should not be empty';
      this.setState ({modalData: clone});
    } else {
      const clone = this.state.modalData;
      clone.showPasswordError = false;
      this.setState ({modalData: clone});
    }

    if (this.state.modalData.confirmPasswordText.length === 0) {
      const clone = this.state.modalData;
      clone.showConfirmPasswordError = true;
      clone.confirmPasswordErrorText = 'Password field should not be empty';
      this.setState ({modalData: clone});
    } else {
      const clone = this.state.modalData;
      clone.showConfirmPasswordError = false;
      this.setState ({modalData: clone});
    }

    if (
      this.state.modalData.passwordText.length != 0 &&
      this.state.modalData.confirmPasswordText.length != 0
    ) {
      if (
        this.state.modalData.confirmPasswordText !=
        this.state.modalData.passwordText
      ) {
        const clone = this.state.modalData;
        clone.showConfirmPasswordError = true;
        clone.confirmPasswordText = 'Passwords do not match';
        this.setState ({modalData: clone});
      } else {
        const clone = this.state.modalData;
        clone.showConfirmPasswordError = false;
        this.setState ({modalData: clone});
        this.setState ({showConfirmPasswordError: false});
      }
    }

    if (this.state.modalData.secondEmailText.length > 0) {
      const valid = validateEmail (this.state.modalData.secondEmailText);

      if (!valid) {
        const copy = this.state.modalData;
        copy.showSecondEmailError = true;
        this.setState ({
          modalData: copy,
        });
      } else {
        const copy = this.state.modalData;
        copy.showSecondEmailError = false;
        this.setState ({modalData: copy});
      }
    }
    if (this.state.modalData.secondEmailText.length === 0) {
      const clone = this.state.modalData;
      clone.showSecondEmailError = false;
      this.setState ({instructor: clone});
    }

    if (this.state.modalData.phoneText.length === 0) {
      const copy = this.state.modalData;
      copy.showPhoneError = true;
      this.setState ({modalData: copy});
    } else {
      const copy = this.state.modalData;
      copy.showPhoneError = false;
      this.setState ({modalData: copy});
    }

    if (this.state.modalData.numberText.length === 0) {
      const copy = this.state.modalData;
      copy.showNumberError = true;
      this.setState ({modalData: copy});
    } else {
      const copy = this.state.modalData;
      copy.showNumberError = false;
      this.setState ({modalData: copy});
    }

    if (this.state.modalData.issuingAuthorityText.length === 0) {
      const copy = this.state.modalData;
      copy.showIssuingAuthorityError = true;
      this.setState ({modalData: copy});
    } else {
      const copy = this.state.modalData;
      copy.showIssuingAuthorityError = false;
      this.setState ({modalData: copy});
    }

    if (this.state.modalData.authorityUri.length === 0) {
      const copy = this.state.modalData;
      copy.showAuthorityUriError = true;
      this.setState ({modalData: copy});
    } else {
      const copy = this.state.modalData;
      copy.showAuthorityUriError = false;
      this.setState ({modalData: copy});
    }

    if (this.state.modalData.insurerText.length === 0) {
      const copy = this.state.modalData;
      copy.showInsurerError = true;
      this.setState ({modalData: copy});
    } else {
      const copy = this.state.modalData;
      copy.showInsurerError = false;
      this.setState ({modalData: copy});
    }

    if (this.state.modalData.policeNumberText.length === 0) {
      const copy = this.state.modalData;
      copy.showPoliceNumberError = true;
      this.setState ({modalData: copy});
    } else {
      const copy = this.state.modalData;
      copy.showPoliceNumberError = false;
      this.setState ({modalData: copy});
    }

    if (this.state.modalData.slretNumberText.length === 0) {
        const copy = this.state.modalData;
        copy.showSlretNumberError = true;
        this.setState ({modalData: copy});
      } else {
        const copy = this.state.modalData;
        copy.showSlretNumberError = false;
        this.setState ({modalData: copy});
      }

      if (this.state.modalData.kbisUri.length === 0) {
        const copy = this.state.modalData;
        copy.showKbisUriError = true;
        this.setState ({modalData: copy});
      } else {
        const copy = this.state.modalData;
        copy.showKbisUriError = false;
        this.setState ({modalData: copy});
      }

    if (this.state.modalData.rcExpirationUri.length === 0) {
      const copy = this.state.modalData;
      copy.showRcExpirantionUriError = true;
      this.setState ({modalData: copy});
    } else {
      const copy = this.state.modalData;
      copy.showRcExpirantionUriError = false;
      this.setState ({modalData: copy});
    }

    if (this.state.modalData.rcUri.length === 0) {
      const copy = this.state.modalData;
      copy.showRcUriError = true;
      this.setState ({modalData: copy});
    } else {
      const copy = this.state.modalData;
      copy.showRcUriError = false;
      this.setState ({modalData: copy});
    }
  };

  areAllModalFieldsClear = () => {
    const {orderStore} = Store;

    orderStore.school.instructor.modal = this.state.modalData;


 if(this.state.selectedRadioIndex === 0){


    if (
        !this.state.modalData.showFirstNameError &&
        !this.state.modalData.showImageUriError &&
        !this.state.modalData.showPlaceOfBirthError &&
        !this.state.modalData.showDrivingLicenseUriError &&
        !this.state.modalData.showAddressError &&
        !this.state.modalData.showZipCodeError &&
        !this.state.modalData.showCityError &&
        !this.state.modalData.showEmailError &&
        !this.state.modalData.showSecondEmailError &&
        !this.state.modalData.showPhoneError &&
        !this.state.modalData.showPasswordError &&
        !this.state.modalData.showConfirmPasswordError &&
        !this.state.modalData.showExpirationDateError &&
        !this.state.modalData.showNumberError &&
        !this.state.modalData.showDateOfObtainingError &&
        !this.state.modalData.showDateOfAuthorizationError &&
        !this.state.modalData.showIssuingAuthorityError &&
        !this.state.modalData.showAuthorityUriError

      ) {
        Toast.show ('You May Proceed (Debud Text)');
        return true;
      } else Toast.show ('Fill all the required fields (Debud Text)');


 }
 if(this.state.selectedRadioIndex === 1){

    if (
        !this.state.modalData.showFirstNameError &&
        !this.state.modalData.showImageUriError &&
        !this.state.modalData.showPlaceOfBirthError &&
        !this.state.modalData.showDrivingLicenseUriError &&
        !this.state.modalData.showAddressError &&
        !this.state.modalData.showZipCodeError &&
        !this.state.modalData.showCityError &&
        !this.state.modalData.showEmailError &&
        !this.state.modalData.showSecondEmailError &&
        !this.state.modalData.showPhoneError &&
        !this.state.modalData.showPasswordError &&
        !this.state.modalData.showConfirmPasswordError &&
        !this.state.modalData.showExpirationDateError &&
        !this.state.modalData.showNumberError &&
        !this.state.modalData.showDateOfObtainingError &&
        !this.state.modalData.showDateOfAuthorizationError &&
        !this.state.modalData.showIssuingAuthorityError &&
        !this.state.modalData.showAuthorityUriError &&
        !this.state.modalData.showInsurerError &&
        !this.state.modalData.showPoliceNumberError &&
        !this.state.modalData.showSlretNumberError &&
        !this.state.modalData.showRcExpirantionUriError &&
        !this.state.modalData.showKbisUriError &&
        !this.state.modalData.showRcUriError
      ) {
        Toast.show ('You May Proceed (Debud Text)');
        return true;
      } else Toast.show ('Fill all the required fields (Debud Text)');

}





    return false;
  };

  checkForEmptyFields = () => {
    if (this.state.instructor.firstNameText.length === 0) {
      const copy = this.state.instructor;
      copy.showFirstNameError = true;
      this.setState ({instructor: copy});
    } else {
      const copy = this.state.instructor;
      copy.showFirstNameError = false;
      this.setState ({instructor: copy});
    }

    if (this.state.instructor.surNameText.length === 0) {
      const copy = this.state.instructor;
      copy.showSurNameError = true;
      this.setState ({instructor: copy});
    } else {
      const copy = this.state.instructor;
      copy.showSurNameError = false;
      this.setState ({instructor: copy});
    }

    if (this.state.instructor.imageUri.length === 0) {
      const copy = this.state.instructor;
      copy.showImageUriError = true;
      this.setState ({instructor: copy});
    } else {
      const copy = this.state.instructor;
      copy.showImageUriError = false;
      this.setState ({instructor: copy});
    }

    if (this.state.instructor.placeOfBirthText.length === 0) {
      const copy = this.state.instructor;
      copy.showPlaceOfBirthError = true;
      this.setState ({instructor: copy});
    } else {
      const copy = this.state.instructor;
      copy.showPlaceOfBirthError = false;
      this.setState ({instructor: copy});
    }

    if (this.state.instructor.drivingLicenseUri.length === 0) {
      const copy = this.state.instructor;
      copy.showDrivingLicenseUriError = true;
      this.setState ({instructor: copy});
    } else {
      const copy = this.state.instructor;
      copy.showDrivingLicenseUriError = false;
      this.setState ({instructor: copy});
    }

    if (this.state.instructor.addressText.length === 0) {
      const copy = this.state.instructor;
      copy.showAddressError = true;
      this.setState ({instructor: copy});
    } else {
      const copy = this.state.instructor;
      copy.showAddressError = false;
      this.setState ({instructor: copy});
    }

    if (this.state.instructor.zipCodeText.length === 0) {
      const copy = this.state.instructor;
      copy.showZipCodeError = true;
      this.setState ({instructor: copy});
    } else {
      const copy = this.state.instructor;
      copy.showZipCodeError = false;
      this.setState ({instructor: copy});
    }

    if (this.state.instructor.cityText.length === 0) {
      const copy = this.state.instructor;
      copy.showCityError = true;
      this.setState ({instructor: copy});
    } else {
      const copy = this.state.instructor;
      copy.showCityError = false;
      this.setState ({instructor: copy});
    }

    if (this.state.instructor.emailText.length === 0) {
      const copy = this.state.instructor;
      copy.showEmailError = true;
      copy.emailErrorText = 'Email Must Not Be Empty';
      this.setState ({
        instructor: copy,
      });
    } else {
      const copy = this.state.instructor;
      copy.showEmailError = false;
      this.setState ({instructor: copy});
    }

    if (this.state.instructor.emailText.length > 0) {
      const valid = validateEmail (this.state.instructor.emailText);
      if (!valid) {
        const copy = this.state.instructor;
        copy.showEmailError = true;
        copy.emailErrorText = 'Please Enter A Valid Email';
        this.setState ({
          instructor: copy,
        });
      } else {
        const copy = this.state.instructor;
        copy.showEmailError = false;
        this.setState ({instructor: copy});
      }
    }

    if (this.state.instructor.passwordText.length === 0) {
      const clone = this.state.instructor;
      clone.showPasswordError = true;
      clone.passwordErrorText = 'Password field should not be empty';
      this.setState ({instructor: clone});
    } else {
      const clone = this.state.instructor;
      clone.showPasswordError = false;
      this.setState ({instructor: clone});
    }

    if (this.state.instructor.confirmPasswordText.length === 0) {
      const clone = this.state.instructor;
      clone.showConfirmPasswordError = true;
      clone.confirmPasswordErrorText = 'Password field should not be empty';
      this.setState ({instructor: clone});
    } else {
      const clone = this.state.instructor;
      clone.showConfirmPasswordError = false;
      this.setState ({instructor: clone});
    }

    if (
      this.state.instructor.passwordText.length != 0 &&
      this.state.instructor.confirmPasswordText.length != 0
    ) {
      if (
        this.state.instructor.confirmPasswordText !=
        this.state.instructor.passwordText
      ) {
        const clone = this.state.instructor;
        clone.showConfirmPasswordError = true;
        clone.confirmPasswordText = 'Passwords do not match';
        this.setState ({instructor: clone});
      } else {
        const clone = this.state.instructor;
        clone.showConfirmPasswordError = false;
        this.setState ({instructor: clone});
        this.setState ({showConfirmPasswordError: false});
      }
    }

    if (this.state.instructor.secondEmailText.length > 0) {
      const valid = validateEmail (this.state.instructor.secondEmailText);
      if (!valid) {
        const copy = this.state.instructor;
        copy.showSecondEmailError = true;
        this.setState ({
          instructor: copy,
        });
      } else {
        const copy = this.state.instructor;
        copy.showSecondEmailError = false;
        this.setState ({instructor: copy});
      }
    }

    if (this.state.instructor.phoneText.length === 0) {
      const copy = this.state.instructor;
      copy.showPhoneError = true;
      this.setState ({instructor: copy});
    } else {
      const copy = this.state.instructor;
      copy.showPhoneError = false;
      this.setState ({instructor: copy});
    }

    if (this.state.instructor.issuingAuthorityText.length === 0) {
      const copy = this.state.instructor;
      copy.showIssuingAuthorityError = true;
      this.setState ({instructor: copy});
    } else {
      const copy = this.state.instructor;
      copy.showIssuingAuthorityError = false;
      this.setState ({instructor: copy});
    }

    if (this.state.instructor.authorityUri.length === 0) {
      const copy = this.state.instructor;
      copy.showAuthorityUriError = true;
      this.setState ({instructor: copy});
    } else {
      const copy = this.state.instructor;
      copy.showAuthorityUriError = false;
      this.setState ({instructor: copy});
    }

    if (this.state.instructor.insurerText.length === 0) {
      const copy = this.state.instructor;
      copy.showInsurerError = true;
      this.setState ({instructor: copy});
    } else {
      const copy = this.state.instructor;
      copy.showInsurerError = false;
      this.setState ({instructor: copy});
    }

    if (this.state.instructor.numberText.length === 0) {
      const copy = this.state.instructor;
      copy.showNumberError = true;
      this.setState ({instructor: copy});
    } else {
      const copy = this.state.instructor;
      copy.showNumberError = false;
      this.setState ({instructor: copy});
    }

    if (this.state.instructor.policeNumberText.length === 0) {
      const copy = this.state.instructor;
      copy.showPoliceNumberError = true;
      this.setState ({instructor: copy});
    } else {
      const copy = this.state.instructor;
      copy.showPoliceNumberError = false;
      this.setState ({instructor: copy});
    }

    if (this.state.instructor.slretNumberText.length === 0) {
        const copy = this.state.instructor;
        copy.showSlretNumberError = true;
        this.setState ({instructor: copy});
      } else {
        const copy = this.state.instructor;
        copy.showSlretNumberError = false;
        this.setState ({instructor: copy});
      }

      if (this.state.instructor.kbisUri.length === 0) {
        const copy = this.state.instructor;
        copy.showKbisUriError = true;
        this.setState ({instructor: copy});
      } else {
        const copy = this.state.instructor;
        copy.showKbisUriError = false;
        this.setState ({instructor: copy});
      }

    if (this.state.instructor.rcExpirationUri.length === 0) {
      const copy = this.state.instructor;
      copy.showRcExpirantionUriError = true;
      this.setState ({instructor: copy});
    } else {
      const copy = this.state.instructor;
      copy.showRcExpirantionUriError = false;
      this.setState ({instructor: copy});
    }

    if (this.state.instructor.rcUri.length === 0) {
      const copy = this.state.instructor;
      copy.showRcUriError = true;
      this.setState ({instructor: copy});
    } else {
      const copy = this.state.instructor;
      copy.showRcUriError = false;
      this.setState ({instructor: copy});
    }
  };

  areAllFieldsClear = () => {
    const {orderStore} = Store;

    orderStore.school.instructor.instructor = this.state.instructor;


    if(this.state.selectedRadioIndex === 0)
    {    if (
          !this.state.instructor.showFirstNameError &&
          !this.state.instructor.showImageUriError &&
          !this.state.instructor.showPlaceOfBirthError &&
          !this.state.instructor.showDrivingLicenseUriError &&
          !this.state.instructor.showAddressError &&
          !this.state.instructor.showZipCodeError &&
          !this.state.instructor.showCityError &&
          !this.state.instructor.showEmailError &&
          !this.state.instructor.showSecondEmailError &&
          !this.state.instructor.showPhoneError &&
          !this.state.instructor.showPasswordError &&
          !this.state.instructor.showConfirmPasswordError &&
          !this.state.instructor.showNumberError &&
          !this.state.instructor.showDateOfObtainingError &&
          !this.state.instructor.showDateOfAuthorizationError &&
          !this.state.instructor.showExpirationDateError &&
          !this.state.instructor.showIssuingAuthorityError &&
          !this.state.instructor.showAuthorityUriError

        ) {
          Toast.show ('You May Proceed (Debud Text)');
          return true;
        } else Toast.show ('Fill all the required fields (Debud Text)');

    }


  if(this.state.selectedRadioIndex === 1)
{    if (
      !this.state.instructor.showFirstNameError &&
      !this.state.instructor.showImageUriError &&
      !this.state.instructor.showPlaceOfBirthError &&
      !this.state.instructor.showDrivingLicenseUriError &&
      !this.state.instructor.showAddressError &&
      !this.state.instructor.showZipCodeError &&
      !this.state.instructor.showCityError &&
      !this.state.instructor.showEmailError &&
      !this.state.instructor.showSecondEmailError &&
      !this.state.instructor.showPhoneError &&
      !this.state.instructor.showPasswordError &&
      !this.state.instructor.showConfirmPasswordError &&
      !this.state.instructor.showNumberError &&
      !this.state.instructor.showDateOfObtainingError &&
      !this.state.instructor.showDateOfAuthorizationError &&
      !this.state.instructor.showExpirationDateError &&
      !this.state.instructor.showIssuingAuthorityError &&
      !this.state.instructor.showAuthorityUriError &&
      !this.state.instructor.showInsurerError &&
      !this.state.instructor.showPoliceNumberError &&
      !this.state.instructor.showSlretNumberError &&
      !this.state.instructor.showRcExpirantionUriError &&
      !this.state.instructor.showKbisUriError &&

      !this.state.instructor.showRcUriError
    ) {
      Toast.show ('You May Proceed (Debud Text)');
      return true;
    } else Toast.show ('Fill all the required fields (Debud Text)');

}
   return false;
  };

  renderModalView = (index = 0) => {
    return (
      <ScrollView>
        <View>

          <View style={styles.modalCrossRow}>
            <TouchableOpacity
              onPress={() => this.setState ({showModal: false})}
            >
              <Image
                style={styles.modalImage}
                source={require ('../../../../res/images/cross.png')}
              />
            </TouchableOpacity>

          </View>

          <View>

            <FormHeading heading="Vehicle Details" />


            <FormLabel label="First Name" />
            <Form
              value={this.state.modalData.firstNameText}
              callback={text => {
                const clone = this.state.modalData;
                clone.firstNameText = text;
                this.setState ({modalData: clone});
                if (text.length === 0) {
                  clone.showFirstNameError = true;
                  this.setState ({modalData: clone});
                } else {
                  clone.showFirstNameError = false;

                  this.setState ({modalData: clone});
                }
              }}
              onFocus={isRequired => {
                if (this.state.modalData.firstNameText.length === 0) {
                  const clone = this.state.modalData;
                  clone.showFirstNameError = true;
                  this.setState ({modalData: clone});
                } else {
                  const clone = this.state.modalData;
                  clone.showFirstNameError = false;

                  this.setState ({modalData: clone});
                }
              }}
              showError={this.state.modalData.showFirstNameError}
              errorText={'First Name Should Not Be Empty'}
            />

            <FormLabel label="SurName" />
            <Form
              value={this.state.modalData.surNameText}
              callback={text => {
                const clone = this.state.modalData;
                clone.surNameText = text;
                this.setState ({modalData: clone});
                if (text.length === 0) {
                  clone.showSurNameError = true;
                  this.setState ({modalData: clone});
                } else {
                  clone.showSurNameError = false;

                  this.setState ({modalData: clone});
                }
              }}
              onFocus={isRequired => {
                if (this.state.modalData.surNameText.length === 0) {
                  const clone = this.state.modalData;
                  clone.showSurNameError = true;
                  this.setState ({modalData: clone});
                } else {
                  const clone = this.state.modalData;
                  clone.showSurNameError = false;

                  this.setState ({modalData: clone});
                }
              }}
              showError={this.state.modalData.showSurNameError}
              errorText={'SurName Should Not Be Empty'}
            />

            <FormLabel label="Upload Image" />
            <UploadButton
              showError={this.state.modalData.showImageUriError}
              errorText="You must upload image"
              onUriReceived={uri => {
                const clone = this.state.modalData;
                if (uri != null && uri != undefined && uri.length != 0) {
                  clone.imageUri = uri;
                  clone.showImageUriError = false;
                  this.setState ({modalData: clone});
                } else {
                  clone.imageUri = '';
                  clone.showImageUriError = true;
                  this.setState ({modalData: clone});
                }
              }}
            />


<FormLabel label="Date Of Birth" />
            <CalendarInput
              date={this.state.modalData.dateOfBirthText}
              callback={date => {
                const clone = this.state.modalData;
                clone.dateOfBirthText = date;
                this.setState ({modalData: clone});
              }}
            />

            <View style={styles.verticalSpace} />
            <FormLabel label="Place Of Birth" />
            <Form
              value={this.state.modalData.placeOfBirthText}
              callback={text => {
                const clone = this.state.modalData;
                clone.placeOfBirthText = text;
                this.setState ({modalData: clone});
                if (text.length === 0) {
                  clone.showPlaceOfBirthError = true;
                  this.setState ({modalData: clone});
                } else {
                  clone.showPlaceOfBirthError = false;

                  this.setState ({modalData: clone});
                }
              }}
              onFocus={isRequired => {
                if (this.state.modalData.placeOfBirthText.length === 0) {
                  const clone = this.state.modalData;
                  clone.showPlaceOfBirthError = true;
                  this.setState ({modalData: clone});
                } else {
                  const clone = this.state.modalData;
                  clone.showPlaceOfBirthError = false;

                  this.setState ({modalData: clone});
                }
              }}
              showError={this.state.modalData.showPlaceOfBirthError}
              errorText={'Place Of Birth Not Be Empty'}
            />

            <FormLabel label="Gender" />

            <Dropdown
              values={this.state.genderValues}
              selectedValue={this.state.modalData.genderSelectedValue}
              callback={(itemValue, itemIndex) => {
                const clone = this.state.modalData;
                clone.genderSelectedValue = itemValue;
                clone.genderSelectedIndex = itemIndex;
                this.setState ({
                  modalData: clone,
                });
              }}
            />

            <FormLabel label="Address" />
            <Form
              value={this.state.modalData.addressText}
              callback={text => {
                const clone = this.state.modalData;
                clone.addressText = text;
                this.setState ({modalData: clone});
                if (text.length === 0) {
                  clone.showAddressError = true;
                  this.setState ({modalData: clone});
                } else {
                  clone.showAddressError = false;

                  this.setState ({modalData: clone});
                }
              }}
              onFocus={isRequired => {
                if (this.state.modalData.addressText.length === 0) {
                  const clone = this.state.modalData;
                  clone.showAddressError = true;
                  this.setState ({modalData: clone});
                } else {
                  const clone = this.state.modalData;
                  clone.showAddressError = false;

                  this.setState ({modalData: clone});
                }
              }}
              showError={this.state.modalData.showAddressError}
              errorText={'Address Should Not Be Empty'}
            />

            <FormLabel label="Complement" isRequired={false} />
            <Form
              value={this.state.modalData.complementText}
              callback={text => {
                const clone = this.state.modalData;
                clone.complementText = text;
                this.setState ({modalData: clone});
              }}
            />

            <FormLabel label="Zip Code" />
            <Form
              value={this.state.modalData.zipCodeText}
              callback={text => {
                const clone = this.state.modalData;
                clone.zipCodeText = text;
                this.setState ({modalData: clone});
                if (text.length === 0) {
                  clone.showZipCodeError = true;
                  this.setState ({modalData: clone});
                } else {
                  clone.showZipCodeError = false;

                  this.setState ({modalData: clone});
                }
              }}
              formType="numeric"
              onFocus={isRequired => {
                if (this.state.modalData.zipCodeText.length === 0) {
                  const clone = this.state.modalData;
                  clone.showZipCodeError = true;
                  this.setState ({modalData: clone});
                } else {
                  const clone = this.state.modalData;
                  clone.showZipCodeError = false;

                  this.setState ({modalData: clone});
                }
              }}
              showError={this.state.modalData.showZipCodeError}
              errorText={'Zip Code Should Not Be Empty'}
            />

            <FormLabel label="City" />
            <Form
              value={this.state.modalData.cityText}
              callback={text => {
                const clone = this.state.modalData;
                clone.cityText = text;
                this.setState ({modalData: clone});
                if (text.length === 0) {
                  clone.showCityError = true;
                  this.setState ({modalData: clone});
                } else {
                  clone.showCityError = false;

                  this.setState ({modalData: clone});
                }
              }}
              onFocus={isRequired => {
                if (this.state.modalData.cityText.length === 0) {
                  const clone = this.state.modalData;
                  clone.showCityError = true;
                  this.setState ({modalData: clone});
                } else {
                  const clone = this.state.modalData;
                  clone.showCityError = false;

                  this.setState ({modalData: clone});
                }
              }}
              showError={this.state.modalData.showCityError}
              errorText={'City Should Not Be Empty'}
            />

            <FormLabel label="Email" />

            <Form
              value={this.state.modalData.emailText}
              callback={text => {
                const clone = this.state.modalData;
                clone.emailText = text;
                this.setState ({modalData: clone});
                if (text.length === 0) {
                  clone.emailErrorText = 'Email Should Not Be Empty';
                  clone.showEmailError = true;
                  this.setState ({modalData: clone});
                } else {
                  clone.showEmailError = false;
                  this.setState ({modalData: clone});
                }

                if (text.length > 0) {
                  const valid = validateEmail (text);
                  if (!valid) {
                    clone.emailErrorText = 'Please Enter A Valid Email';
                    clone.showEmailError = true;
                    this.setState ({modalData: clone});
                  } else {
                    clone.showEmailError = false;
                    this.setState ({modalData: clone});
                  }
                }
              }}
              onFocus={isRequired => {
                const clone = this.state.modalData;

                if (this.state.modalData.emailText.length === 0) {
                  clone.emailErrorText = 'Email Should Not Be Empty';
                  clone.showEmailError = true;
                  this.setState ({modalData: clone});
                } else {
                  clone.showEmailError = false;
                  this.setState ({modalData: clone});
                }
              }}
              showError={this.state.modalData.showEmailError}
              errorText={this.state.modalData.emailErrorText}
              formType="email-address"
            />

            <FormLabel label="Phone" />

            <Form
              value={this.state.modalData.phoneText}
              callback={text => {
                const clone = this.state.modalData;
                clone.phoneText = text;
                this.setState ({modalData: clone});
                if (text.length === 0) {
                  clone.showPhoneError = true;
                  this.setState ({modalData: clone});
                } else {
                  clone.showPhoneError = false;

                  this.setState ({modalData: clone});
                }
              }}
              onFocus={isRequired => {
                if (this.state.modalData.phoneText.length === 0) {
                  const clone = this.state.modalData;
                  clone.showPhoneError = true;
                  this.setState ({modalData: clone});
                } else {
                  const clone = this.state.modalData;
                  clone.showPhoneError = false;

                  this.setState ({modalData: clone});
                }
              }}
              showError={this.state.modalData.showPhoneError}
              errorText={'Phone Number Should Not Be Empty'}
              formType="phone-pad"
            />

            <FormLabel label="Email (2nd Email)" isRequired={false} />

            <Form
              value={this.state.modalData.secondEmailText}
              callback={text => {
                const clone = this.state.modalData;
                clone.secondEmailText = text;
                this.setState ({modalData: clone});

                if (text.length === 0) {
                  clone.showSecondEmailError = false;
                  this.setState ({modalData: clone});
                }

                if (text.length > 0) {
                  const valid = validateEmail (text);
                  if (!valid) {
                    clone.showSecondEmailError = true;

                    this.setState ({modalData: clone});
                  } else {
                    clone.showSecondEmailError = false;
                    this.setState ({modalData: clone});
                  }
                }
              }}
              showError={this.state.modalData.showSecondEmailError}
              errorText={'Second Email Should Not Be Empty'}
              formType="email-address"
              isRequired={false}
            />

            <FormLabel isRequired={false} label="Phone (2nd Phone)" />

            <Form
              value={this.state.modalData.secondPhoneText}
              isRequired={false}
              callback={text => {
                const clone = this.state.modalData;
                clone.secondPhoneText = text;
                this.setState ({clone: text});
              }}
              formType="phone-pad"
            />

            <FormLabel label="Password" />

            <Form
              value={this.state.modalData.passwordText}
              callback={async text => {
                const clone = this.state.modalData;
                clone.passwordText = text;
                await this.setState ({modalData: clone});
                if (text.length === 0) {
                  clone.showPasswordError = true;
                  clone.passwordErrorText = 'Password should not be empty';
                  this.setState ({modalData: clone});
                } else {
                  clone.showPasswordError = false;
                  this.setState ({modalData: clone});
                }
                if (
                  this.state.modalData.passwordText !=
                  this.state.modalData.confirmPasswordText
                ) {
                  clone.showConfirmPasswordError = true;
                  clone.confirmPasswordErrorText = 'Passwords do not match';
                  this.setState ({modalData: clone});
                } else {
                  clone.showPasswordError = false;
                  this.setState ({modalData: clone});
                }
              }}
              onFocus={isRequired => {
                if (this.state.modalData.passwordText.length === 0) {
                  const clone = this.state.modalData;
                  clone.showPasswordError = true;
                  clone.passwordErrorText = 'Password should not be empty';
                  this.setState ({modalData: clone});
                }
              }}
              showError={this.state.modalData.showPasswordError}
              errorText={this.state.modalData.passwordErrorText}
              hideText={true}
            />

            <FormLabel label="Confirm Password" />

            <Form
              value={this.state.modalData.confirmPasswordText}
              callback={async text => {
                const clone = this.state.modalData;
                clone.confirmPasswordText = text;
                await this.setState ({modalData: clone});
                if (text.length === 0) {
                  clone.showConfirmPasswordError = true;
                  clone.confirmPasswordText =
                    'Confirm Password should not be empty';
                  this.setState ({
                    modalData: clone,
                  });
                } else {
                  clone.showConfirmPasswordError = false;
                  this.setState ({modalData: clone});
                }
                if (
                  this.state.modalData.confirmPasswordText !=
                  this.state.modalData.passwordText
                ) {
                  clone.showConfirmPasswordError = true;
                  clone.confirmPasswordText = 'Passwords do not match';
                  this.setState ({
                    modalData: clone,
                  });
                } else {
                  clone.showConfirmPasswordError = false;
                  this.setState ({modalData: clone});
                }
              }}
              onFocus={isRequired => {
                const clone = this.state.modalData;

                if (this.state.modalData.confirmPasswordText.length === 0) {
                  clone.showConfirmPasswordError = true;
                  clone.confirmPasswordErrorText =
                    'Confirm Password should not be empty';
                }
                this.setState ({
                  modalData: clone,
                });
              }}
              showError={this.state.modalData.showConfirmPasswordError}
              errorText={this.state.modalData.confirmPasswordErrorText}
              hideText={true}
            />

            <FormHeading heading="Drivers License" />

            <FormLabel label="Number" />
            <Form
              value={this.state.modalData.numberText}
              callback={text => {
                const clone = this.state.modalData;
                clone.numberText = text;
                this.setState ({modalData: clone});
                if (text.length === 0) {
                  clone.showNumberError = true;
                  this.setState ({modalData: clone});
                } else {
                  clone.showNumberError = false;

                  this.setState ({modalData: clone});
                }
              }}
              formType="numeric"
              onFocus={isRequired => {
                if (this.state.modalData.numberText.length === 0) {
                  const clone = this.state.modalData;
                  clone.showNumberError = true;
                  this.setState ({modalData: clone});
                } else {
                  const clone = this.state.modalData;
                  clone.showNumberError = false;

                  this.setState ({modalData: clone});
                }
              }}
              showError={this.state.modalData.showNumberError}
              errorText={'Number Should Not Be Empty'}
            />

            <FormLabel label="Date Of Obtaining" />
            <CalendarInput
              date={this.state.modalData.dateOfObtainig}
              callback={date => {
                if (isDateFuture (date)) {
                  const clone = this.state.modalData;
                  clone.showDateOfObtainingError = true;
                  this.setState ({modalData: clone});
                } else {
                  const clone = this.state.modalData;
                  clone.showDateOfObtainingError = false;
                  this.setState ({modalData: clone});
                }
                const clone = this.state.modalData;
                clone.dateOfObtainig = date;
                this.setState ({modalData: clone});
              }}
              showError={this.state.modalData.showDateOfObtainingError}
              errorText="Date Cannot Be From Future"
            />

            <View style={styles.verticalSpace} />

            <FormLabel label="End Date" />
            <CalendarInput
              date={this.state.modalData.endDate}
              callback={date => {
                if (isDatePast (date)) {
                  const clone = this.state.modalData;
                  clone.showEndDateError = true;
                  this.setState ({modalData: clone});
                } else {
                  const clone = this.state.modalData;
                  clone.showEndDateError = false;
                  this.setState ({modalData: clone});
                }
                const clone = this.state.modalData;
                clone.endDate = date;
                this.setState ({modalData: clone});
              }}
              showError={this.state.modalData.showEndDateError}
              errorText="Date Cannot Be From Past"
            />

            <View style={styles.verticalSpace} />

            <FormLabel label="Scan and upload your driving license" />
            <UploadButton
              showError={this.state.modalData.showDrivingLicenseUriError}
              errorText="You must upload image"
              onUriReceived={uri => {
                const clone = this.state.modalData;
                if (uri != null && uri != undefined && uri.length != 0) {
                  clone.drivingLicenseUri = uri;
                  clone.showDrivingLicenseUriError = false;
                  this.setState ({modalData: clone});
                } else {
                  clone.drivingLicenseUri = '';
                  clone.showDrivingLicenseUriError = true;
                  this.setState ({modalData: clone});
                }
              }}
            />

            <FormHeading heading="Authorization to exercise" />

            <FormLabel label="Date of the authorization to exercise" />
            <CalendarInput
              date={this.state.modalData.dateOfAuthorization}
              callback={date => {
                if (isDateFuture (date)) {
                  const clone = this.state.modalData;
                  clone.showDateOfAuthorizationError = true;
                  this.setState ({modalData: clone});
                } else {
                  const clone = this.state.modalData;
                  clone.showDateOfAuthorizationError = false;
                  this.setState ({modalData: clone});
                }
                const clone = this.state.modalData;
                clone.dateOfAuthorization = date;
                this.setState ({modalData: clone});
              }}
              showError={this.state.modalData.showDateOfAuthorizationError}
              errorText="Date Cannot Be From Future"
            />

            <View style={styles.verticalSpace} />

            <FormLabel label="Issung Authority" />
            <Form
              value={this.state.modalData.issuingAuthorityText}
              callback={text => {
                const clone = this.state.modalData;
                clone.issuingAuthorityText = text;
                this.setState ({modalData: clone});
                if (text.length === 0) {
                  clone.showIssuingAuthorityError = true;
                  this.setState ({modalData: clone});
                } else {
                  clone.showIssuingAuthorityError = false;

                  this.setState ({modalData: clone});
                }
              }}
              onFocus={isRequired => {
                if (this.state.modalData.issuingAuthorityText.length === 0) {
                  const clone = this.state.modalData;
                  clone.showIssuingAuthorityError = true;
                  this.setState ({modalData: clone});
                } else {
                  const clone = this.state.modalData;
                  clone.showIssuingAuthorityError = false;

                  this.setState ({modalData: clone});
                }
              }}
              showError={this.state.modalData.showIssuingAuthorityError}
              errorText={'Issung Authority Should Not Be Empty'}
            />

            <FormLabel label="Scan and upload your authority" />
            <UploadButton
              showError={this.state.modalData.showAuthorityUriError}
              errorText="You must upload image"
              onUriReceived={uri => {
                const clone = this.state.modalData;
                if (uri != null && uri != undefined && uri.length != 0) {
                  clone.authorityUri = uri;
                  clone.showAuthorityUriError = false;
                  this.setState ({modalData: clone});
                } else {
                  clone.authorityUri = '';
                  clone.showAuthorityUriError = true;
                  this.setState ({modalData: clone});
                }
              }}
            />

            <FormLabel label="Expiration Date" />
            <CalendarInput
              date={this.state.modalData.expirationDate}
              callback={date => {
                if (isDatePast (date)) {
                  const clone = this.state.modalData;
                  clone.showExpirationDateError = true;
                  this.setState ({modalData: clone});
                } else {
                  const clone = this.state.modalData;
                  clone.showExpirationDateError = false;
                  this.setState ({modalData: clone});
                }
                const clone = this.state.modalData;
                clone.expirationDate = date;
                this.setState ({modalData: clone});
              }}
              showError={this.state.modalData.showExpirationDateError}
              errorText="Date Cannot Be From Past"
            />


            <View style={styles.verticalSpace} />

            <FormHeading heading="Type of contract with the driving school" />

            <RadioInput
              values={[
                {label: 'Employee', value: 0},
                {label: 'External provider?', value: 1},
              ]}
              formHorizontal={true}
              callback={value => {
                this.setState({selectedRadioIndex:value});

              }}
            />
{this.state.selectedRadioIndex === 1 ?<View>

            <FormHeading  heading="Business"/>


            <FormLabel label="Slret Number" />
              <Form
                value={this.state.modalData.slretNumberText}
                callback={text => {
                  const clone = this.state.modalData;
                  clone.slretNumberText = text;
                  this.setState ({modalData: clone});
                  if (text.length === 0) {
                    clone.showSlretNumberError = true;
                    this.setState ({modalData: clone});
                  } else {
                    clone.showSlretNumberError = false;

                    this.setState ({modalData: clone});
                  }
                }}
                formType="numeric"
                onFocus={isRequired => {
                  if (this.state.modalData.slretNumberText.length === 0) {
                    const clone = this.state.modalData;
                    clone.showSlretNumberError = true;
                    this.setState ({modalData: clone});
                  } else {
                    const clone = this.state.modalData;
                    clone.showSlretNumberError = false;

                    this.setState ({modalData: clone});
                  }
                }}
                showError={this.state.modalData.showSlretNumberError}
                errorText={'slretNumber Number Should Not Be Empty'}
              />




<FormLabel label="Scan and upload your kbis" />
            <UploadButton
              showError={this.state.modalData.showKbisUriError}
              errorText="You must upload image"
              onUriReceived={uri => {
                const clone = this.state.modalData;
                if (uri != null && uri != undefined && uri.length != 0) {
                  clone.kbisUri = uri;
                  clone.showKbisUriError = false;
                  this.setState ({modalData: clone});
                } else {
                  clone.kbisUri = '';
                  clone.showKbisUriError = true;
                  this.setState ({modalData: clone});
                }
              }}
            />



            <FormHeading heading="Insurance Company" />

            <FormLabel label="Insurer" />
            <Form
              value={this.state.modalData.insurerText}
              callback={text => {
                const clone = this.state.modalData;
                clone.insurerText = text;
                this.setState ({modalData: clone});
                if (text.length === 0) {
                  clone.showInsurerError = true;
                  this.setState ({modalData: clone});
                } else {
                  clone.showInsurerError = false;

                  this.setState ({modalData: clone});
                }
              }}
              onFocus={isRequired => {
                if (this.state.modalData.insurerText.length === 0) {
                  const clone = this.state.modalData;
                  clone.showInsurerError = true;
                  this.setState ({modalData: clone});
                } else {
                  const clone = this.state.modalData;
                  clone.showInsurerError = false;

                  this.setState ({modalData: clone});
                }
              }}
              showError={this.state.modalData.showInsurerError}
              errorText={'Insurer Should Not Be Empty'}
            />

            <FormLabel label="Police Number" />
            <Form
              value={this.state.modalData.policeNumberText}
              callback={text => {
                const clone = this.state.modalData;
                clone.policeNumberText = text;
                this.setState ({modalData: clone});
                if (text.length === 0) {
                  clone.showPoliceNumberError = true;
                  this.setState ({modalData: clone});
                } else {
                  clone.showPoliceNumberError = false;

                  this.setState ({modalData: clone});
                }
              }}
              formType="numeric"
              onFocus={isRequired => {
                if (this.state.modalData.policeNumberText.length === 0) {
                  const clone = this.state.modalData;
                  clone.showPoliceNumberError = true;
                  this.setState ({modalData: clone});
                } else {
                  const clone = this.state.modalData;
                  clone.showPoliceNumberError = false;

                  this.setState ({modalData: clone});
                }
              }}
              showError={this.state.modalData.showPoliceNumberError}
              errorText={'Police Number Should Not Be Empty'}
            />

            <FormLabel label="Expiration date of your Insurance RC Pro" />
            <UploadButton
              showError={this.state.modalData.showRcExpirantionUriError}
              errorText="You must upload image"
              onUriReceived={uri => {
                const clone = this.state.modalData;
                if (uri != null && uri != undefined && uri.length != 0) {
                  clone.rcExpirationUri = uri;
                  clone.showRcExpirantionUriError = false;
                  this.setState ({modalData: clone});
                } else {
                  clone.rcExpirationUri = '';
                  clone.showRcExpirantionUriError = true;
                  this.setState ({modalData: clone});
                }
              }}
            />


            <View style={styles.verticalSpace} />
            <FormLabel label="Scan and upload your RC Pro" />
            <UploadButton
              showError={this.state.modalData.showRcUriError}
              errorText="You must upload image"
              onUriReceived={uri => {
                const clone = this.state.modalData;
                if (uri != null && uri != undefined && uri.length != 0) {
                  clone.rcUri = uri;
                  clone.showRcUriError = false;
                  this.setState ({modalData: clone});
                } else {
                  clone.rcUri = '';
                  clone.showRcUriError = true;
                  this.setState ({modalData: clone});
                }
              }}
            />

</View> : <View/>}
            <View style={styles.addButtonRow}>
              <MediumButton
                label="Close"
                callback={() => this.setState ({showModal: false})}
              />
              <MediumButton
                label="Confrim"
                callback={async () => {
                  await this.checkForModalEmptyFields ();
                  const clear = await this.areAllModalFieldsClear ();
                  if (clear) {
                    const cardClone = [...this.state.cards];
                    cardClone[this.state.modalIndex] = this.state.modalData;
                    this.setState ({cards: cardClone,showModal:false});
                  }
                }}
              />
            </View>

          </View>

        </View>
      </ScrollView>
    );
  };
}

const styles = StyleSheet.create ({
  verticalSpace: {
    marginTop: margins.verticalSpace,
  },
  addButtonRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end',
  },
  modalView: {
    backgroundColor: 'white',
    padding: 35,
    width: '95%',
    alignItems: 'center',
    shadowColor: '#000',
    alignSelf: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalCrossRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  modalImage: {
    width: 15,
    height: 15,
    tintColor: 'black',
    resizeMode: 'center',
  },
  buttonRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  addFormButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
});
