import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {margins, paddings} from '../../../globals/styles';
import Form from '../../../components/FormInput';
import CalandarInput from '../../../components/CalendarInput';
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
      insurerText: '',
      showInsurerError: false,
      insuranceExpirationDate: '',
      showExpirationDateError: false,
      rcUri: '',
      showRcError: false,
    };
  }

  checkForEmptyFields = () => {
    if (this.state.policeNumberText.length === 0)
      this.setState ({showPoliceNumberError: true});
    else this.setState ({showPoliceNumberError: false});
    if (this.state.insurerText.length === 0)
      this.setState ({showInsurerError: true});
    else this.setState ({showInsurerError: false});

    if (this.state.rcUri.length === 0) this.setState ({showRcError: true});
    else this.setState ({showRcError: false});
  };

  areAllFieldsClear = () => {
    const {orderStore} = Store;
    orderStore.school.insurance.insurerText = this.state.insurerText;
    orderStore.school.insurance.policeNumberText = this.state.policeNumberText;
    orderStore.school.insurance.insuranceExpirationDate = this.state.insuranceExpirationDate;
    orderStore.school.insurance.rcUri = this.state.rcUri;

    if (
      !this.state.showPoliceNumberError &&
      !this.state.showInsurerError &&
      !this.state.showRcError &&
      !this.state.showExpirationDateError
    ) {
      Toast.show ('You May Proceed (Debud Text)');
      return true;
    } else Toast.show ('Fill all the required fields (Debud Text)');

    return false;
  };

  componentDidMount = () => {
    const {orderStore} = Store;
    this.setState ({
      insurerText: orderStore.school.insurance.insurerText,
      policeNumberText: orderStore.school.insurance.policeNumberText,
      insuranceExpirationDate: orderStore.school.insurance
        .insuranceExpirationDate,
      rcUri: orderStore.school.insurance.rcUri,
    });
  };

  render () {
    return (
      <View>

        <FormHeading heading="Insurance Company" />

        <FormLabel label="" />

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
          errorText={'Insurer Should Not Be Empty'}
          placeholder={"Enter Insurer"}
        />

        <FormLabel label="" />

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
          showError = {this.state.showExpirationDateError}
          errorText = 'Expiration Date Cannot Be From Past'
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
