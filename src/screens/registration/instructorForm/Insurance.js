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
import UploadFileButton from '../../../components/FormButton';
import FormHeading from '../../../components/FormHeading';
import Toast from 'react-native-simple-toast';
import {
  isDatePast,
  isDateFuture,
  toDate,
  getCurrentDate,
} from '../../../globals/functions';
import {pickDocument} from '../../../components/DocumentPicker';
import Store from '../../../stores';
export default class Insurance extends Component {
  constructor (props) {
    super (props);
    this.state = {
      policeNumberText: '',
      showPoliceNumberError: false,

      showExpirationDateError: false,

      vehicleNumberText: '',
      showVehicleNumberError: false,

      insuranceExpirationDate: '',
      startDate: '',
      endDate: '',
      insurerText: '',
      showInsurerError: false,

      vehicleInsurerText: '',
      showVehivleInsurerError: false,

      rcUri: '',
      showRcError: false,
      greenCardUri: '',
      showGreenCardError: false,

      showStartDateError: false,
      showEndDateError: false,
    };
  }

  checkForEmptyFields = () => {
    if (this.state.policeNumberText.length === 0)
      this.setState ({showPoliceNumberError: true});
    else this.setState ({showPoliceNumberError: false});
    if (this.state.insurerText.length === 0)
      this.setState ({showInsurerError: true});
    else this.setState ({showInsurerError: false});

    if (this.state.vehicleInsurerText.length === 0)
      this.setState ({showVehivleInsurerError: true});
    else this.setState ({showVehivleInsurerError: false});

    if (this.state.vehicleNumberText.length === 0)
      this.setState ({showVehicleNumberError: true});
    else this.setState ({showVehicleNumberError: false});

    if (this.state.rcUri.length === 0) this.setState ({showRcError: true});
    else this.setState ({showRcError: false});
    if (this.state.greenCardUri.length === 0)
      this.setState ({showGreenCardError: true});
    else this.setState ({showGreenCardError: false});
  };

  areAllFieldsClear = () => {
    const {orderStore} = Store;
    orderStore.instructor.insurance.insurerText = this.state.insurerText;
    orderStore.instructor.insurance.policeNumberText = this.state.policeNumberText;
    orderStore.instructor.insurance.insuranceExpirationDate = this.state.insuranceExpirationDate;
    orderStore.instructor.insurance.rcUri = this.state.rcUri;
    orderStore.instructor.insurance.vehicleInsurerText = this.state.vehicleInsurerText;
    orderStore.instructor.insurance.vehicleNumberText = this.state.vehicleNumberText;
    orderStore.instructor.insurance.startDate = this.state.startDate;
    orderStore.instructor.insurance.endDate = this.state.endDate;
    orderStore.instructor.insurance.greenCardUri = this.state.greenCardUri;

    if (
      !this.state.showPoliceNumberError &&
      !this.state.showInsurerError &&
      !this.state.showVehivleInsurerError &&
      !this.state.showRcError &&
      !this.state.showVehicleNumberError &&
      !this.state.showExpirationDateError &&
      !this.state.showStartDateError &&
      !this.state.showEndDateError
    ) {
      Toast.show ('You May Proceed (Debud Text)');
      return true;
    } else Toast.show ('Fill all the required fields (Debud Text)');

    return false;
  };

  componentDidMount = () => {
    const {orderStore} = Store;
    this.setState ({
      insurerText: orderStore.instructor.insurance.insurerText,
      policeNumberText: orderStore.instructor.insurance.policeNumberText,
      insuranceExpirationDate: orderStore.instructor.insurance
        .insuranceExpirationDate,
      rcUri: orderStore.instructor.insurance.rcUri,
      vehicleInsurerText: orderStore.instructor.insurance.vehicleInsurerText,
      vehicleNumberText: orderStore.instructor.insurance.vehicleNumberText,
      startDate: orderStore.instructor.insurance.startDate,
      endDate: orderStore.instructor.insurance.endDate,
      greenCardUri: orderStore.instructor.insurance.greenCardUri,
    });
  };

  render () {
    return (
      <View>

        <FormHeading heading="Insurance Company" />

        <FormLabel  />

        <Form
          value={this.state.insurerText}
          callback={text => {
            this.setState ({insurerText: text});
            if (text.length === 0) {
              this.setState ({showInsurerError: true});
            } else this.setState ({showInsurerError: false});
          }}
          onFocus={isRequired => {
            if (this.state.insurerText.length === 0)
              this.setState ({showInsurerError: true});
          }}
          showError={this.state.showInsurerError}
          errorText={'Place Of Delivery Should Not Be Empty'}
          placeholder={"Enter Insurer"}
        />

        <FormLabel />

        <Form
          value={this.state.policeNumberText}
          formType={'numeric'}
          callback={text => {
            this.setState ({policeNumberText: text});
            if (text.length === 0) {
              this.setState ({showPoliceNumberError: true});
            } else this.setState ({showPoliceNumberError: false});
          }}
          onFocus={isRequired => {
            if (this.state.policeNumberText.length === 0)
              this.setState ({showPoliceNumberError: true});
          }}
          showError={this.state.showPoliceNumberError}
          errorText={'Police Number Should Not Be Empty'}
          placeholder={"Enter Police Number"}
        />

        <FormLabel label="Expiration date of your insurance" />

        <CalandarInput
          date={this.state.insuranceExpirationDate}
          callback={date => {
            if (isDatePast (date))
              this.setState ({showExpirationDateError: true});
            else this.setState ({showExpirationDateError: false});

            this.setState ({insuranceExpirationDate: date});
          }}
        />

        <View style={styles.verticalSpace} />

        <FormLabel label="Upload Your RC Pro" />
        <UploadButton
          showError={this.state.showRcError}
          errorText="You must upload image"
          onUriReceived={uri => {
            if (uri != null && uri != undefined && uri.length != 0)
              this.setState ({
                rcUri: uri,
                showRcError: false,
              });
            else
              this.setState ({
                rcUri: '',
                showRcError: true,
              });
          }}
        />

        <FormHeading heading="Vehicle Insurance" />

        <FormLabel  />

        <Form
          value={this.state.vehicleInsurerText}
          callback={text => {
            this.setState ({vehicleInsurerText: text});
            if (text.length === 0) {
              this.setState ({showVehivleInsurerError: true});
            } else this.setState ({showVehivleInsurerError: false});
          }}
          onFocus={isRequired => {
            if (this.state.vehicleInsurerText.length === 0)
              this.setState ({showVehivleInsurerError: true});
          }}
          showError={this.state.showVehivleInsurerError}
          errorText={'Police Insurer Should Not Be Empty'}
          placeholder={"Enter Insurer"}

        />

        <FormLabel />

        <Form
          value={this.state.vehicleNumberText}
          formType={'numeric'}
          callback={text => {
            this.setState ({vehicleNumberText: text});
            if (text.length === 0) {
              this.setState ({showVehicleNumberError: true});
            } else this.setState ({showVehicleNumberError: false});
          }}
          onFocus={isRequired => {
            if (this.state.vehicleNumberText.length === 0)
              this.setState ({showVehicleNumberError: true});
          }}
          showError={this.state.showVehicleNumberError}
          errorText={'Police Number Should Not Be Empty'}
          placeholder={"Enter Police Number"}
        />

        <FormLabel label="Start Date" />

        <CalandarInput
          date={this.state.startDate}
          showError={this.state.showStartDateError}
          errorText={'Start date coannot be from future'}
          callback={date => {
            this.setState ({startDate: date});

            if (isDateFuture (date)) this.setState ({showStartDateError: true});
            else this.setState ({showStartDateError: false});
          }}
        />
        <View style={styles.verticalSpace} />

        <FormLabel label="End Date" />

        <CalandarInput
          date={this.state.endDate}
          showError={this.state.showEndDateError}
          errorText={'End date cannot be from the past'}
          callback={date => {
            this.setState ({endDate: date});
            if (isDatePast (date)) this.setState ({showEndDateError: true});
            else this.setState ({showEndDateError: false});
          }}
        />

        <FormLabel label="Scan and upload your authorization" />
        <UploadFileButton
          label="Upload File"
          showError={this.state.showGreenCardError}
          errorText="You must upload image"
          showIcon={false}
          callback={() => {
            pickDocument (res => {
              const uri = res.uri;

              if (uri != null && uri != undefined && uri.length != 0)
                this.setState ({
                  greenCardUri: uri,
                  showGreenCardError: false,
                });
              else
                this.setState ({
                  greenCardUri: '',
                  showGreenCardError: true,
                });
            });
          }}
        />
        {/* <UploadButton
          showError={this.state.showGreenCardError}
          errorText="You must upload image"
          onUriReceived={uri => {
            if (uri != null && uri != undefined && uri.length != 0)
              this.setState ({
                greenCardUri: uri,
                showGreenCardError: false,
              });
            else
              this.setState ({
                greenCardUri: '',
                showGreenCardError: true,
              });
          }}
        /> */}

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
  verticalSpace: {
    marginTop: margins.verticalSpace,
  },
  buttonRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
