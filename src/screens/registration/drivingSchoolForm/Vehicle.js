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
import FormHeading from '../../../components/FormHeading';
import Toast from 'react-native-simple-toast';
import Store from '../../../stores';
import CalendarInput from '../../../components/CalendarInput';
import {
  isDatePast,
  isDateFuture,
  toDate,
  getCurrentDate,
} from '../../../globals/functions';
export default class Details extends Component {
  constructor (props) {
    super (props);
    this.state = {
      gearboxValues: ['Manual', 'Auto'],
      energyValues: ['Diesel', 'Petrol', 'Hybrid', 'Electric', 'GPL', 'Other'],

      vehicles: [
        {
          dateOfRegistrationText: '',
          showDateOfRegistrationError: false,
          brandText: '',
          showBrandError: false,
          modelText: '',
          showModelError: false,
          gerBoxSelectedValue: '',
          gaerBoxSelectedIndex: 0,
          energySelectedValue: '',
          energySelectedIndex: 0,
          colorText: '',
          showColorError: false,
          imageUri: '',
          showImageUriError: false,
          registrationUri: '',
          showRegistrationUriError: false,
          insurerText: '',
          showInsurerError: false,
          policeNumberText: '',
          showPoliceNumberError: false,
          startDate: '',
          showStartDateError: false,
          endDate: '',
          showEndDateError: false,
          greenCardUri: '',
          showGreenCardUriError: false,
          technicalControlDate: '',
          showTechnicalControlDateError: false,
          technicalControlEndDate: '',
          showTechnicalControlEndDateError: false,
          ctUri: '',
          showCtUriError: false,
        },
      ],
    };
  }

  componentDidMount = () => {
    const {orderStore} = Store;
  };

  render () {
    return (
      <View>

        {this.state.vehicles.map ((item, index) => {
          return (
            <View>

              <FormHeading heading="Vehicle Details" />

              <FormLabel label="Date of the 1st Registration" />
              <CalendarInput
                date={this.state.vehicles[index].dateOfRegistrationText}
                callback={date => {
                  if (isDateFuture (date)) {
                    const clone = [...this.state.vehicles];
                    clone[index].showDateOfRegistrationError = true;
                    this.setState ({vehicles: clone});
                  } else {
                    const clone = [...this.state.vehicles];
                    clone[index].showDateOfRegistrationError = false;
                    this.setState ({vehicles: clone});
                  }
                  const clone = [...this.state.vehicles];
                  clone[index].dateOfRegistrationText = date;
                  this.setState ({dateOfRegistrationText: date});
                }}
                showError={
                  this.state.vehicles[index].showDateOfRegistrationError
                }
                errorText="Expiration Date Cannot Be From Future"
              />

              <View style={styles.verticalSpace} />
              <FormLabel label="Brand" />
              <Form
                value={this.state.vehicles[index].brandText}
                callback={text => {
                  const clone = [...this.state.vehicles];
                  clone[index].brandText = text;
                  this.setState ({vehicles: clone});
                  if (text.length === 0) {
                    clone[index].showBrandError = true;
                    this.setState ({vehicles: clone});
                  } else {
                    clone[index].showBrandError = false;

                    this.setState ({vehicles: clone});
                  }
                }}
                onFocus={isRequired => {
                  if (this.state.vehicles[index].brandText.length === 0) {
                    const clone = [...this.state.vehicles];
                    clone[index].showBrandError = true;
                    this.setState ({vehicles: clone});
                  } else {
                    const clone = [...this.state.vehicles];
                    clone[index].showBrandError = false;

                    this.setState ({vehicles: clone});
                  }
                }}
                showError={this.state.vehicles[index].showBrandError}
                errorText={'Brand Should Not Be Empty'}
              />

              <FormLabel label="Upload Image" />
              <UploadButton
                showError={this.state.vehicles[index].showImageUriError}
                errorText="You must upload image"
                onUriReceived={uri => {
                  const clone = [...this.state.vehicles];
                  if (uri != null && uri != undefined && uri.length != 0) {
                    clone[index].imageUri = uri;
                    clone[index].showImageUriError = false;
                    this.setState ({vehicles: clone});
                  } else {
                    clone[index].imageUri = '';
                    clone[index].showImageUriError = true;
                    this.setState ({vehicles: clone});
                  }
                }}
              />

              <FormLabel label="Model" />
              <Form
                value={this.state.vehicles[index].modelText}
                callback={text => {
                  const clone = [...this.state.vehicles];
                  clone[index].modelText = text;
                  this.setState ({vehicles: clone});
                  if (text.length === 0) {
                    clone[index].showModelError = true;
                    this.setState ({vehicles: clone});
                  } else {
                    clone[index].showModelError = false;

                    this.setState ({vehicles: clone});
                  }
                }}
                onFocus={isRequired => {
                  if (this.state.vehicles[index].modelText.length === 0) {
                    const clone = [...this.state.vehicles];
                    clone[index].showModelError = true;
                    this.setState ({vehicles: clone});
                  } else {
                    const clone = [...this.state.vehicles];
                    clone[index].showModelError = false;

                    this.setState ({vehicles: clone});
                  }
                }}
                showError={this.state.vehicles[index].showModelError}
                errorText={'Model Should Not Be Empty'}
              />

              <FormLabel label="Gearbox" />

              <Dropdown
                values={this.state.gearboxValues}
                selectedValue={this.state.vehicles[index].gerBoxSelectedValue}
                callback={(itemValue, itemIndex) => {
                  const clone = [...this.state.vehicles];
                  clone[index].gerBoxSelectedValue = itemValue;
                  clone[index].gaerBoxSelectedIndex = itemIndex;
                  this.setState ({
                    vehicles: clone,
                  });
                }}
              />

              <FormLabel label="Upload Vehicle Registration Certificate" />
              <UploadButton
                showError={this.state.vehicles[index].registrationUri}
                errorText="You must upload image"
                onUriReceived={uri => {
                  const clone = [...this.state.vehicles];
                  if (uri != null && uri != undefined && uri.length != 0) {
                    clone[index].registrationUri = uri;
                    clone[index].showRegistrationUriError = false;
                    this.setState ({vehicles: clone});
                  } else {
                    clone[index].registrationUri = '';
                    clone[index].showRegistrationUriError = true;
                    this.setState ({vehicles: clone});
                  }
                }}
              />

              <FormLabel label="Color" />
              <Form
                value={this.state.vehicles[index].colorText}
                callback={text => {
                  const clone = [...this.state.vehicles];
                  clone[index].colorText = text;
                  this.setState ({vehicles: clone});
                  if (text.length === 0) {
                    clone[index].showColorError = true;
                    this.setState ({vehicles: clone});
                  } else {
                    clone[index].showColorError = false;

                    this.setState ({vehicles: clone});
                  }
                }}
                onFocus={isRequired => {
                  if (this.state.vehicles[index].colorText.length === 0) {
                    const clone = [...this.state.vehicles];
                    clone[index].showColorError = true;
                    this.setState ({vehicles: clone});
                  } else {
                    const clone = [...this.state.vehicles];
                    clone[index].showColorError = false;

                    this.setState ({vehicles: clone});
                  }
                }}
                showError={this.state.vehicles[index].showColorError}
                errorText={'Colors Should Not Be Empty'}
              />

              <FormLabel label="Energy" />

              <Dropdown
                values={this.state.energyValues}
                selectedValue={this.state.vehicles[index].energySelectedValue}
                callback={(itemValue, itemIndex) => {
                  const clone = [...this.state.vehicles];
                  clone[index].energySelectedValue = itemValue;
                  clone[index].energySelectedIndex = itemIndex;
                  this.setState ({
                    vehicles: clone,
                  });
                }}
              />

              <FormHeading heading="Vehicle Insurance" />

              <FormLabel label="Insurer" />
              <Form
                value={this.state.vehicles[index].insurerText}
                callback={text => {
                  const clone = [...this.state.vehicles];
                  clone[index].insurerText = text;
                  this.setState ({vehicles: clone});
                  if (text.length === 0) {
                    clone[index].showInsurerError = true;
                    this.setState ({vehicles: clone});
                  } else {
                    clone[index].showInsurerError = false;

                    this.setState ({vehicles: clone});
                  }
                }}
                onFocus={isRequired => {
                  if (this.state.vehicles[index].insurerText.length === 0) {
                    const clone = [...this.state.vehicles];
                    clone[index].showInsurerError = true;
                    this.setState ({vehicles: clone});
                  } else {
                    const clone = [...this.state.vehicles];
                    clone[index].showInsurerError = false;

                    this.setState ({vehicles: clone});
                  }
                }}
                showError={this.state.vehicles[index].showInsurerError}
                errorText={'Insurer Should Not Be Empty'}
              />

            </View>
          );
        })}

      </View>
    );
  }
}

const styles = StyleSheet.create ({
  verticalSpace: {
    marginTop: margins.verticalSpace,
  },
});
