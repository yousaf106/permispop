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
import FormHeading from '../../../components/FormHeading';
import Toast from 'react-native-simple-toast';
import {
  isDatePast,
  isDateFuture,
  toDate,
  getCurrentDate,
} from '../../../globals/functions';
import Store from '../../../stores';

export default class Details extends Component {
  componentDidMount = () => {
    let {orderStore} = Store;

    this.setState ({
      numberText: orderStore.instructor.details.numberText,
      placeOfDeliveryText: orderStore.instructor.details.placeOfDeliveryText,
      dateOfObtaining: orderStore.instructor.details.dateOfObtaining,
      validityDate: orderStore.instructor.details.validityDate,
      drivingLicenseUri: orderStore.instructor.details.drivingLicenseUri,
      liceneseObtained: orderStore.instructor.details.liceneseObtained,
      dateOfAuthorization: orderStore.instructor.details.dateOfAuthorization,
      expirationDate: orderStore.instructor.details.expirationDate,
      issuingAuthorityText: orderStore.instructor.details.issuingAuthorityText,
      authorizationUri: orderStore.instructor.details.authorizationUri,
      serialNumberText: orderStore.instructor.details.serialNumberText,
      kblsUri: orderStore.instructor.details.kblsUri,
      selectedDropdownValue: orderStore.instructor.details
        .selectedDropdownValue,
      selectedLicenseForValue: orderStore.instructor.details
        .selectedLicenseForValue,
      selectedLicenseTypeValue: orderStore.instructor.details
        .selectedLicenseTypeValue,
      selectedLicenseIndex: orderStore.instructor.details.selectedLicenseIndex,
      licenseForindex: orderStore.instructor.details.licenseForindex,
      licenseTypeIndex: orderStore.instructor.details.licenseTypeIndex,
    });
  };

  constructor (props) {
    super (props);
    this.state = {
      dateOfObtaining: getCurrentDate (),
      showDateOfObtainingError: false,
      showValidityDateError: false,
      validityDate: '',
      dateOfAuthorization: '',
      showAuthorizationDateError: false,
      showExpirationDateError: false,
      expirationDate: '',
      selectedDropdownValue: '',
      numberText: '',
      showNumberError: '',
      placeOfDeliveryText: '',
      showPlaceOfDeliveryError: '',
      liceneseObtained: false,
      licenseFor: [
        'MotorCycle License',
        'Heavy car or quardricycle license',
        'License for transportation of goods and people',
      ],
      licenseType: [
        ['License A1 (123 cm3)', 'License A2 (35 kw -)', 'License A (35 kw +)'],
        [
          'License B (car or van)',
          'License B1 (heavy motor quadricycle)',
          'License BE (car + trailer over 750 kg)',
        ],
        ['License C (7,5 t +)'],
      ],
      selectedLicenseForValue: '',
      selectedLicenseTypeValue: '',

      selectedLicenseIndex: 0,

      issuingAuthorityText: '',
      showIssuingAuthorityError: false,

      serialNumberText: '',
      showSerialError: false,

      drivingLicenseUri: '',
      kblsUri: '',
      showDrivingLicenseError: false,
      authorizationUri: '',
      showAuthorizationError: false,
      showKblsUriError: false,
      licenseForindex: 0,
      licenseTypeIndex: 0,
    };
  }

  checkForEmptyFields = () => {
    if (this.state.numberText.length === 0)
      this.setState ({showNumberError: true});
    else this.setState ({showNumberError: false});
    if (this.state.placeOfDeliveryText.length === 0)
      this.setState ({showPlaceOfDeliveryError: true});
    else this.setState ({showPlaceOfDeliveryError: false});

    if (this.state.drivingLicenseUri.length === 0)
      this.setState ({showDrivingLicenseError: true});
    else this.setState ({showDrivingLicenseError: false});
    if (this.state.authorizationUri.length === 0)
      this.setState ({showAuthorizationError: true});
    else this.setState ({showAuthorizationError: false});
    if (this.state.kblsUri.length === 0)
      this.setState ({showKblsUriError: true});
    else this.setState ({showKblsUriError: false});

    if (this.state.issuingAuthorityText.length === 0)
      this.setState ({showIssuingAuthorityError: true});
    else this.setState ({showIssuingAuthorityError: false});

    if (this.state.serialNumberText.length === 0)
      this.setState ({showSerialError: true});
    else this.setState ({showSerialError: false});
  };

  areAllFieldsClear = () => {


    let {orderStore} = Store;
    orderStore.instructor.details.numberText = this.state.numberText;
    orderStore.instructor.details.placeOfDeliveryText = this.state.placeOfDeliveryText;
    orderStore.instructor.details.dateOfObtaining = this.state.dateOfObtaining;
    orderStore.instructor.details.validityDate = this.state.validityDate;
    orderStore.instructor.details.drivingLicenseUri = this.state.drivingLicenseUri;
    orderStore.instructor.details.liceneseObtained = this.state.liceneseObtained;
    orderStore.instructor.details.dateOfAuthorization = this.state.dateOfAuthorization;
    orderStore.instructor.details.expirationDate = this.state.expirationDate;
    orderStore.instructor.details.issuingAuthorityText = this.state.issuingAuthorityText;
    orderStore.instructor.details.authorizationUri = this.state.authorizationUri;
    orderStore.instructor.details.serialNumberText = this.state.serialNumberText;
    orderStore.instructor.details.kblsUri = this.state.kblsUri;
    orderStore.instructor.details.selectedDropdownValue = this.state.selectedDropdownValue;
    orderStore.instructor.details.selectedLicenseForValue = this.state.selectedLicenseForValue;
    orderStore.instructor.details.selectedLicenseTypeValue = this.state.selectedLicenseTypeValue;
    orderStore.instructor.details.selectedLicenseIndex = this.state.selectedLicenseIndex;
    orderStore.instructor.details.licenseForindex = this.state.licenseForindex;
    orderStore.instructor.details.licenseTypeIndex = this.state.licenseTypeIndex;


    if (
      !this.state.showNumberError &&
      !this.state.showPlaceOfDeliveryError &&
      !this.state.showDrivingLicenseError &&
      !this.state.showBackError &&
      !this.state.showIssuingAuthorityError &&
      !this.state.showSerialError &&
      !this.state.showDateOfObtainingError &&
      !this.state.showValidityDateError &&
      !this.state.showAuthorizationDateError &&
      !this.state.showAuthorizationError &&
      !this.state.showExpirationDateError
    ) {
      Toast.show ('You May Proceed (Debud Text)');
      return true;
    } else Toast.show ('Fill all the required fields (Debud Text)');

   return false;
  };

  render () {
    return (
      <View>

        <FormHeading heading="Drivers License" />

        <FormLabel  />

        <Form
          value={this.state.numberText}
          formType={'numeric'}
          callback={text => {
            this.setState ({numberText: text});
            if (text.length === 0) {
              this.setState ({showNumberError: true});
            } else this.setState ({showNumberError: false});
          }}
          onFocus={isRequired => {
            if (this.state.numberText.length === 0)
              this.setState ({showNumberError: true});
          }}
          showError={this.state.showNumberError}
          errorText={'Number Should Not Be Empty'}
          placeholder={"Enter License Number"}
        />

        <FormLabel  />

        <Form
          value={this.state.placeOfDeliveryText}
          callback={text => {
            this.setState ({placeOfDeliveryText: text});
            if (text.length === 0) {
              this.setState ({showPlaceOfDeliveryError: true});
            } else this.setState ({showPlaceOfDeliveryError: false});
          }}
          onFocus={isRequired => {
            if (this.state.placeOfDeliveryText.length === 0)
              this.setState ({showPlaceOfDeliveryError: true});
          }}
          showError={this.state.showPlaceOfDeliveryError}
          errorText={'Place Of Delivery Should Not Be Empty'}
          placeholder={"Enter Place Of Delivery"}
        />

        <FormLabel label="Date Of Obtaining" />

        <CalandarInput
          date={this.state.dateOfObtaining}
          callback={date => {
            this.setState ({dateOfObtaining: date});
            if (isDateFuture (date)) {
              this.setState ({showDateOfObtainingError: true});
            } else this.setState ({showDateOfObtainingError: false});
          }}
          showError={this.state.showDateOfObtainingError}
          errorText={'Date Cannot Be From Future'}
        />

        <View style={styles.verticalSpace} />
        <FormLabel label="Validity Date" />

        <CalandarInput
          date={this.state.validityDate}
          callback={date => {
            let validDate = toDate (date);
            let obtainDate = toDate (this.state.dateOfObtaining);

            if (validDate < obtainDate)
              this.setState ({showValidityDateError: true});
            else this.setState ({showValidityDateError: false});

            this.setState ({validityDate: date});
          }}
          showError={this.state.showValidityDateError}
          errorText={"Validatity date can't be less than to obtain date."}
        />
        <View style={styles.verticalSpace} />

        <FormLabel label="Scan and upload your driving license" />
        <UploadButton
          showError={this.state.showDrivingLicenseError}
          errorText="You must upload image"
          onUriReceived={uri => {
            if (uri != null && uri != undefined && uri.length != 0)
              this.setState ({
                drivingLicenseUri: uri,
                showDrivingLicenseError: false,
              });
            else
              this.setState ({
                drivingLicenseUri: '',
                showDrivingLicenseError: true,
              });
          }}
        />

        <CheckBoxInput
          label="Do you have other licenses obtained?"
          callback={isChecked => {
            this.setState ({liceneseObtained: !this.state.liceneseObtained});
          }}
          showError={!this.state.liceneseObtained}
          isRequired={false}
          isChecked={this.state.liceneseObtained}
        />
        {this.state.liceneseObtained
          ? <View>
              <FormLabel label="License For" />

              <Dropdown
                values={this.state.licenseFor}
                selectedValue={this.state.selectedLicenseForValue}
                callback={(itemValue, itemIndex) => {
                  this.setState ({
                    selectedLicenseForValue: itemValue,
                    selectedLicenseIndex: itemIndex,
                    licenseForindex: itemIndex,
                  });
                }}
              />

              <FormLabel label="License Type" />

              <Dropdown
                values={this.state.licenseType[this.state.selectedLicenseIndex]}
                selectedValue={this.state.selectedLicenseTypeValue}
                callback={(itemValue, itemIndex) => {
                  this.setState ({
                    selectedLicenseTypeValue: itemValue,
                    licenseTypeIndex: itemIndex,
                  });
                }}
              />

            </View>
          : <View />}

        <FormHeading heading="Authorization to Exercise" />

        <FormLabel label="Date of the authorization to exercise" />

        <CalandarInput
          date={this.state.dateOfAuthorization}
          callback={date => {
            this.setState ({dateOfAuthorization: date});

            if (isDateFuture (date)) {
              this.setState ({showAuthorizationDateError: true});
            } else this.setState ({showAuthorizationDateError: false});
          }}
          showError={this.state.showAuthorizationDateError}
          errorText={'Date Cannot Be From Future'}
        />
        <View style={styles.verticalSpace} />

        <FormLabel label="Expiration Date" />

        <CalandarInput
          date={this.state.expirationDate}
          callback={date => {
            this.setState ({expirationDate: date});

            if (isDatePast (date)) {
              this.setState ({showExpirationDateError: true});
            } else this.setState ({showExpirationDateError: false});
          }}
          showError={this.state.showExpirationDateError}
          errorText={'Date Cannot Be From Past'}
        />
        <View style={styles.verticalSpace} />

        <FormLabel  />

        <Form
          value={this.state.issuingAuthorityText}
          callback={text => {
            this.setState ({issuingAuthorityText: text});
            if (text.length === 0) {
              this.setState ({showIssuingAuthorityError: true});
            } else this.setState ({showIssuingAuthorityError: false});
          }}
          onFocus={isRequired => {
            if (this.state.issuingAuthorityText.length === 0)
              this.setState ({showIssuingAuthorityError: true});
          }}
          showError={this.state.showIssuingAuthorityError}
          errorText={'Issuing Authority Must Not Be Emply'}
          placeholder={"Enter Issuing Authority"}
        />

        <FormLabel label="Scan and upload your authorization" />
        <UploadButton
          showError={this.state.showAuthorizationError}
          errorText="You must upload image"
          onUriReceived={uri => {
            if (uri != null && uri != undefined && uri.length != 0)
              this.setState ({
                authorizationUri: uri,
                showAuthorizationError: false,
              });
            else
              this.setState ({
                authorizationUri: '',
                showAuthorizationError: true,
              });
          }}
        />

        <FormHeading heading="Business" />

        <FormLabel  />

        <Form
          value={this.state.serialNumberText}
          formType={'numeric'}
          callback={text => {
            this.setState ({serialNumberText: text});
            if (text.length === 0) {
              this.setState ({showSerialError: true});
            } else this.setState ({showSerialError: false});
          }}
          onFocus={isRequired => {
            if (this.state.serialNumberText.length === 0)
              this.setState ({showSerialError: true});
          }}
          showError={this.state.showSerialError}
          errorText={'Serial Should Not Be Empty'}
          placeholder={"Enter Serial Number"}
        />

        <FormLabel label="Upload your kbls" />
        <UploadButton
          showError={this.state.showKblsUriError}
          errorText="You must upload image"
          onUriReceived={uri => {
            if (uri != null && uri != undefined && uri.length != 0)
              this.setState ({
                kblsUri: uri,
                showKblsUriError: false,
              });
            else
              this.setState ({
                kblsUri: '',
                showKblsUriError: true,
              });
          }}
        />

        <View
        style = {styles.buttonRow}
        >
          <FormButton
          label="Back"
          showIconLeft={true}
          leftIcon = {require('../../../../res/images/back.png')}
          callback={() => {

            this.props.onClickPrevious ();

          }}
        />
        <FormButton
          label="Next"
          showIconRight={true}
          rightIcon = {require('../../../../res/images/forward.png')}
          callback={async() => {
            await this.checkForEmptyFields ();
            const clear = await this.areAllFieldsClear ();
            if(clear)
            this.props.onClickNext ();

          }}
        />

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  verticalSpace: {
    marginTop: margins.verticalSpace,
  },
  buttonRow:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
  },
});
